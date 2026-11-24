import { Link } from "react-router";
import { features, site } from "../content/site";
import RemoteUI from "../components/RemoteUI";
import TrackpadUI from "../components/TrackpadUI";
import Download from "../components/Download";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>{site.tagline}</h1>
          <p className="lead">
            Control your Google TV with the familiar remote layout, a trackpad and your phone keyboard.
          </p>
          <div className="actions">
            <Download />
            <Link className="btn btn-ghost" to="/app">See the app</Link>
          </div>
          <p className="muted small">For iPhone</p>
        </div>
        <div className="hero-visual">
          <RemoteUI />
        </div>
      </section>

      <section className="section">
        <h2>What the app does</h2>
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section split">
        <div className="split-media">
          <TrackpadUI />
        </div>
        <div>
          <h2>Gestures for TV navigation</h2>
          <p className="lead">
            Swipe on the trackpad to move around the TV screen, or switch to the D-pad when you prefer buttons.
          </p>
          <Link to="/app" className="text-link">Details about the app</Link>
        </div>
      </section>

      <section className="section cta">
        <h2>Ready when your TV is</h2>
        <p className="lead">The app is coming to the App Store. Questions? Write to {site.email}.</p>
        <div className="actions">
          <Download />
          <Link className="btn btn-ghost" to="/support">Support</Link>
        </div>
      </section>
    </>
  );
}
