import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link to="/" className="brand">
            <img src={img("/images/app-icon.png")} alt="" width={28} height={28} />
            <span>{site.brand}</span>
          </Link>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/app">App</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <a href={app.url} target="_blank" rel="noreferrer">App Store</a>
          </nav>
        </div>
        <p className="footer-meta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="footer-meta">{site.disclaimer}</p>
        <p className="footer-meta">© {site.copyrightYear} {site.brand}</p>
      </div>
    </footer>
  );
}
