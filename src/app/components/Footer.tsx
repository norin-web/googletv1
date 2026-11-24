import { Link } from "react-router";
import { app, site } from "../content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-brand">{site.brand}</p>
            <p className="muted">{site.tagline}</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/app">App</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <a href={app.url} target="_blank" rel="noreferrer">App Store</a>
          </nav>
        </div>
        <p className="muted small">
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="muted small">{site.disclaimer}</p>
        <p className="muted small">© {site.copyrightYear} {site.brand}</p>
      </div>
    </footer>
  );
}
