import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="page-hero">
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <div className="actions">
        <Link className="btn" to="/">Back to home</Link>
      </div>
    </section>
  );
}
