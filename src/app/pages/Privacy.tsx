import { legalStatus, privacy } from "../content/legal";
import { site } from "../content/site";

export default function Privacy() {
  return (
    <section className="section narrow legal">
      <h1>Privacy Policy</h1>
      {legalStatus === "ready" && privacy.length > 0 ? (
        privacy.map((p, i) => <p key={i}>{p}</p>)
      ) : (
        <p className="muted">
          The Privacy Policy will be published here. For questions about your data, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </section>
  );
}
