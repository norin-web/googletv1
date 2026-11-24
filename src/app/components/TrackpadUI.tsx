/** Trackpad surface built in code to match the app's trackpad input mode. */
export default function TrackpadUI() {
  return (
    <div className="trackpad" aria-hidden="true">
      <div className="trackpad-ring">
        <span className="trackpad-dot" />
      </div>
      <p className="trackpad-label">Swipe to move around the TV screen</p>
    </div>
  );
}
