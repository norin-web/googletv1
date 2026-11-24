import { Link } from "react-router";
import { inputModes, tabs } from "../content/site";
import { img } from "../utils/img";
import TrackpadUI from "../components/TrackpadUI";
import Download from "../components/Download";

export default function OurApp() {
  return (
    <>
      <section className="app-hero">
        <div>
          <img className="app-icon" src={img("/images/app-icon.png")} alt="Google TV Remote app icon" width={96} height={96} />
          <h1>Google TV Remote</h1>
          <p className="lead">Remote control, trackpad, keyboard input and casting for Google TV, in one iPhone app.</p>
          <div className="actions">
            <Download />
          </div>
        </div>
        <div className="hero-visual">
          <TrackpadUI />
        </div>
      </section>

      <section className="section">
        <h2>Input modes</h2>
        <ul className="feature-list">
          {inputModes.map((m) => (
            <li key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section narrow">
        <h2>Four tabs</h2>
        <ul className="tabs-list">
          {tabs.map((t) => (
            <li key={t.name}>
              <strong>{t.name}</strong>
              {t.note && <span className="muted">{t.note}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className="section cta">
        <p className="lead">Questions about the app? See the support page or write to us.</p>
        <div className="actions">
          <Link className="btn btn-ghost" to="/support">Support</Link>
          <Link className="btn btn-ghost" to="/contact">Contact</Link>
        </div>
      </section>
    </>
  );
}
