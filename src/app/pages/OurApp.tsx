import { Link } from "react-router";
import { inputModes, site } from "../content/site";
import { img } from "../utils/img";
import Download from "../components/Download";
import { Dpad, Keyboard, Trackpad } from "../components/Icons";

const modeIcon = { dpad: Dpad, trackpad: Trackpad, keyboard: Keyboard };

export default function OurApp() {
  return (
    <>
      <section className="band">
        <div className="band-inner hero">
          <div className="hero-text">
            <img className="app-icon" src={img("/images/app-icon.png")} alt="Google TV Remote app icon" width={88} height={88} />
            <h1>Google&nbsp;TV Remote</h1>
            <p className="lead">Control, type and cast to your TV. Remote buttons, a trackpad and your phone keyboard in one iPhone app.</p>
            <div className="actions">
              <Download />
              <Link className="btn btn-outline" to="/support">Support</Link>
            </div>
          </div>
          <div className="hero-phone">
            <img src={img("/images/phone-remote.webp")} alt="Remote screen of the app on iPhone" width={760} height={1562} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="intro">
          <h2 className="two-tone">Three ways<br /><span>to control your TV</span></h2>
          <p className="intro-text">Switch the remote between input modes at any time.</p>
        </div>
        <div className="cards3">
          {inputModes.map((m) => {
            const Icon = modeIcon[m.icon];
            return (
              <article className="card" key={m.name}>
                <div className="card-media">
                  <img src={img(m.image)} alt={m.alt} loading="lazy" />
                </div>
                <div className="card-text">
                  <h3 className="card-title-icon"><span className="icon-badge"><Icon /></span>{m.name}</h3>
                  <p>{m.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section cta">
        <h2>Questions about the app?</h2>
        <div className="actions">
          <Link className="btn" to="/support">Support</Link>
          <a className="btn btn-outline" href={`mailto:${site.email}`}>Write to us</a>
        </div>
      </section>
    </>
  );
}
