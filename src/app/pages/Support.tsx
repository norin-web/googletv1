import { faq, site } from "../content/site";
import { Plus } from "../components/Icons";

export default function Support() {
  return (
    <section className="section faq-layout">
      <div className="faq-side">
        <h1 className="two-tone">Got questions?<br /><span>We’re here to help.</span></h1>
        <p className="lead">Quick answers about connecting your TV, typing, casting and your subscription.</p>
        <div className="help-card">
          <strong>Can’t find your answer?</strong>
          <p>Write to us and we’ll get back to you by email.</p>
          <a className="btn" href={`mailto:${site.email}`}>Write to us</a>
          <a className="help-email" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>

      <div className="faq-list">
        {faq.map((item, i) => (
          <details key={item.q} open={i === 0}>
            <summary>
              <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-q">{item.q}</span>
              <span className="faq-icon"><Plus /></span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
