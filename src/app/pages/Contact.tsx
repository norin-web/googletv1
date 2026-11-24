import { site } from "../content/site";

export default function Contact() {
  return (
    <section className="section narrow">
      <h1>Contact</h1>
      <p className="lead">Write to us about the app or a bug.</p>
      <a className="email-big" href={`mailto:${site.email}`}>{site.email}</a>
    </section>
  );
}
