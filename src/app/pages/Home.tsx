import { Link } from "react-router";
import { cards, casting, hero, inputModes, intro, pairing } from "../content/site";
import { img } from "../utils/img";
import Download from "../components/Download";
import { Check, Dpad, Keyboard, Trackpad } from "../components/Icons";

const modeIcon = { dpad: Dpad, trackpad: Trackpad, keyboard: Keyboard };

function TwoTone({ lines, as = "h2" }: { lines: string[]; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <Tag className="two-tone">
      {lines[0]}
      <br />
      <span>{lines[1]}</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <>
      <section className="band">
        <div className="band-inner hero">
          <div className="hero-text">
            <h1>{hero.title}</h1>
            <p className="lead">{hero.lead}</p>
            <div className="actions">
              <Download />
              <Link className="btn btn-outline" to="/app">See the app</Link>
            </div>
          </div>
          <div className="hero-phone">
            <img src={img("/images/phone-remote.webp")} alt="Remote screen of the app on iPhone" width={760} height={1562} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="intro">
          <TwoTone lines={intro.title} />
          <p className="intro-text">{intro.text}</p>
        </div>

        <div className="cards3">
          {cards.map((c) => (
            <article className="card" key={c.title}>
              <div className={`card-media${c.devices ? " card-devices" : ""}`}>
                {c.devices ? (
                  <>
                    <img src={img("/images/device-1.webp")} alt="App device list: TV connected" loading="lazy" />
                    <img src={img("/images/device-2.webp")} alt="App device list: TV connecting" loading="lazy" />
                    <img src={img("/images/device-3.webp")} alt="App device list: TV available" loading="lazy" />
                  </>
                ) : (
                  <img src={img(c.image!)} alt={c.alt} loading="lazy" />
                )}
              </div>
              <div className="card-text">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-row">
        <div className="feature-media">
          <img src={img("/images/screen-gestures.webp")} alt="Trackpad screen of the app with a finger swiping" loading="lazy" />
        </div>
        <div className="feature-text">
          <TwoTone lines={["Use gestures", "for TV navigation"]} />
          <p className="lead">Swipe on the trackpad to move around the TV screen, or switch the remote to another input mode.</p>
          <ul className="icon-list">
            {inputModes.map((m) => {
              const Icon = modeIcon[m.icon];
              return (
                <li key={m.name}>
                  <span className="icon-badge"><Icon /></span>
                  <div>
                    <strong>{m.name}</strong>
                    <p>{m.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="big-card big-blue">
          <div className="big-text">
            <span className="pill">{pairing.label}</span>
            <h2>{pairing.title[0]}<br />{pairing.title[1]}</h2>
            <p>{pairing.text}</p>
            <ul className="check-list">
              {pairing.points.map((p) => (
                <li key={p}><Check />{p}</li>
              ))}
            </ul>
          </div>
          <div className="big-media big-phone">
            <img src={img("/images/phone-pair.webp")} alt="Connect screen of the app with a TV illustration" loading="lazy" />
          </div>
        </div>

        <div className="big-card big-grey">
          <div className="big-text">
            <span className="pill">{casting.label}</span>
            <h2>{casting.title[0]}<br />{casting.title[1]}</h2>
            <p>{casting.text}</p>
            <ul className="check-list">
              {casting.points.map((p) => (
                <li key={p}><Check />{p}</li>
              ))}
            </ul>
          </div>
          <div className="big-media big-cast">
            <img src={img("/images/screen-cast.webp")} alt="Cast Media screen of the app playing a video on the TV" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section cta">
        <TwoTone lines={["Control your TV", "from your iPhone"]} />
        <div className="actions">
          <Download />
          <Link className="btn btn-outline" to="/support">Support</Link>
        </div>
      </section>
    </>
  );
}
