import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import type { LegalDoc } from "../content/legal";

type Section = { id: string; title: string; blocks: string[] };

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

/** Straight and typographic quotes count as the same character when searching. */
const fold = (s: string) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').toLowerCase();
const pattern = (q: string) =>
  new RegExp(`(${escape(q).replace(/['’‘]/g, "['’‘]").replace(/["“”]/g, '["“”]')})`, "gi");

function marked(text: string, query: string): ReactNode {
  if (!query) return text;
  return text.split(pattern(query)).map((bit, j) => (j % 2 ? <mark key={j}>{bit}</mark> : bit));
}

/** Email addresses become mailto links, search matches get <mark>; text itself is untouched. */
function rich(text: string, query: string): ReactNode[] {
  return text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? (
      <a key={i} href={`mailto:${part}`}>{marked(part, query)}</a>
    ) : (
      <Fragment key={i}>{marked(part, query)}</Fragment>
    ),
  );
}

function Block({ text, query }: { text: string; query: string }) {
  const label = text.match(/^\*\*(.+?)\*\* (.*)$/s);
  if (label)
    return (
      <p>
        <strong>{rich(label[1], query)}</strong> {rich(label[2], query)}
      </p>
    );
  // the owner's one-line contact block ("name · address · email") is shown one item per line
  const lines = text.split(" · ");
  return (
    <p>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {rich(line, query)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { intro, sections } = useMemo(() => parse(doc.body), [doc.body]);
  const [query, setQuery] = useState("");
  const bar = useRef<HTMLDivElement>(null);
  const article = useRef<HTMLElement>(null);

  // reading progress through the document, written straight to the bar (no re-render)
  useEffect(() => {
    const onScroll = () => {
      const el = article.current;
      if (!el || !bar.current) return;
      const r = el.getBoundingClientRect();
      const total = r.height - innerHeight * 0.6;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      bar.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, [query, doc]);

  useEffect(() => setQuery(""), [doc]);

  const q = query.trim();
  const shown = q
    ? sections.filter((s) => fold(s.title + "\n" + s.blocks.join("\n").replace(/\*\*/g, "")).includes(fold(q)))
    : sections;

  return (
    <>
      <div className="legal-progress" aria-hidden="true">
        <div ref={bar} />
      </div>

      <section className="band">
        <div className="band-inner legal-hero">
          <nav className="doc-switch" aria-label="Legal documents">
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
          </nav>
          <h1>{doc.title}</h1>
        </div>
      </section>

      <section className="section legal-wrap">
        <aside className="legal-search">
          <label htmlFor="legal-q">Search this document</label>
          <div className="legal-search-field">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="legal-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. subscription or Wi-Fi"
              autoComplete="off"
            />
          </div>
          <p className="legal-count" aria-live="polite">
            {q ? `${shown.length} of ${sections.length} sections mention “${q}”` : `${sections.length} sections`}
          </p>
        </aside>

        <article className="legal-body" ref={article}>
          {!q && intro.map((t, i) => <p className="legal-intro" key={i}>{rich(t, "")}</p>)}

          {shown.map((s) => (
            <section className="legal-sec" id={s.id} key={s.id}>
              <h2>{rich(s.title, q)}</h2>
              {s.blocks.map((b, j) => <Block key={j} text={b} query={q} />)}
            </section>
          ))}

          {q && shown.length === 0 && (
            <div className="legal-empty">
              <p>No section mentions “{q}”.</p>
              <button type="button" className="btn btn-outline" onClick={() => setQuery("")}>Show the whole document</button>
            </div>
          )}
        </article>
      </section>
    </>
  );
}
