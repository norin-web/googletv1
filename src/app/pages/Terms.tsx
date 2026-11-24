import { legalStatus, terms } from "../content/legal";
import { site } from "../content/site";

export default function Terms() {
  return (
    <section className="section narrow legal">
      <h1>Terms of Use</h1>
      {legalStatus === "ready" && terms.length > 0 ? (
        terms.map((p, i) => <p key={i}>{p}</p>)
      ) : (
        <p className="muted">
          The Terms of Use will be published here. For questions, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </section>
  );
}
