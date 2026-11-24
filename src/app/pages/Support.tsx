import { useState } from "react";
import { Link } from "react-router";
import { faq, site } from "../content/site";

export default function Support() {
  const [open, setOpen] = useState<number>(0);

  return (
    <>
      <section className="page-hero">
        <h1>Support</h1>
        <p className="lead">Pick a question. If you can’t find yours, write to us.</p>
      </section>

      <section className="section support">
        <div className="chips" role="group" aria-label="Questions">
          {faq.map((item, i) => (
            <button
              key={item.q}
              type="button"
              className="chip"
              aria-pressed={open === i}
              onClick={() => setOpen(i)}
            >
              {item.q}
            </button>
          ))}
        </div>

        <div className="bubble" role="status" aria-live="polite">
          <p>{faq[open].a}</p>
        </div>

        <div className="support-cta">
          <Link className="btn btn-ghost" to="/contact">Write to us</Link>
          <span className="muted small">{site.email}</span>
        </div>
      </section>
    </>
  );
}
