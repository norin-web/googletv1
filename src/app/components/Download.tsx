import { app } from "../content/site";

function AppleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.3c-.02-2.24 1.83-3.32 1.91-3.37-1.04-1.52-2.66-1.73-3.24-1.75-1.38-.14-2.69.81-3.39.81-.7 0-1.78-.79-2.92-.77-1.5.02-2.89.87-3.66 2.21-1.56 2.71-.4 6.72 1.12 8.92.74 1.08 1.63 2.29 2.79 2.24 1.12-.04 1.54-.72 2.89-.72 1.35 0 1.73.72 2.91.7 1.2-.02 1.96-1.1 2.7-2.18.85-1.25 1.2-2.46 1.22-2.52-.03-.01-2.33-.9-2.35-3.57zM14.15 5.73c.62-.75 1.03-1.78.92-2.82-.89.04-1.97.59-2.6 1.34-.57.66-1.07 1.72-.94 2.73.99.08 2-.5 2.62-1.25z" />
    </svg>
  );
}

/** App Store button: always a real link to the app's store page. */
export default function Download({ small = false }: { small?: boolean }) {
  return (
    <a className={`btn${small ? " btn-small" : ""}`} href={app.url} target="_blank" rel="noreferrer">
      <AppleLogo />
      <span>Download app</span>
    </a>
  );
}
