import { app } from "../content/site";

/** App Store button. Until the app is published it shows a disabled "Coming soon" state. */
export default function Download({ label = "Download on the App Store" }: { label?: string }) {
  if (app.inStore) {
    return (
      <a className="btn" href={app.url} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }
  return (
    <span className="btn btn-disabled" aria-disabled="true">
      Coming soon to the App Store
    </span>
  );
}
