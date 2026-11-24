import { site } from "../content/site";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Contact</h1>
        <p className="lead">Write to us about the app or a bug.</p>
      </section>

      <section className="section narrow">
        <a className="email-big" href={`mailto:${site.email}`}>{site.email}</a>
        <p className="muted">Include your iPhone model and the iOS version in the message.</p>
      </section>
    </>
  );
}
