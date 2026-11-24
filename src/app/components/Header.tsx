import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";

/** Sticky header. Never hides on scroll. */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label={`${site.brand} home`}>
          <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
          <span>{site.brand}</span>
        </Link>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
          ))}
          <a className="nav-download" href={app.url} target="_blank" rel="noreferrer">Download</a>
        </nav>

        <a className="btn btn-small" href={app.url} target="_blank" rel="noreferrer">
          Download
        </a>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
