import { Link } from "react-router";
import { site } from "../content/site";

export default function Contact() {
  return (
    <section className="section narrow contact">
      <h1>Contact</h1>
      <p className="lead">Write to us about the app or a bug.</p>
      <a className="email-big" href={`mailto:${site.email}`}>{site.email}</a>

      <dl className="contact-facts">
        <div>
          <dt>Operator</dt>
          <dd>{site.operator}</dd>
        </div>
        <div>
          <dt>Address</dt>
          <dd>{site.address}</dd>
        </div>
        <div>
          <dt>Quick answers</dt>
          <dd><Link to="/support">Support and FAQ</Link></dd>
        </div>
      </dl>
    </section>
  );
}
