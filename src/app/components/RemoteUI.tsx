/** Remote panel built in code to match the app's remote screen. */

const Icon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export default function RemoteUI() {
  return (
    <div className="remote" aria-hidden="true">
      <div className="remote-grid">
        <div className="remote-col">
          <button className="rbtn rbtn-white" tabIndex={-1}>
            <Icon d="M19 12H5M12 19l-7-7 7-7" />
          </button>
          <button className="rbtn rbtn-white" tabIndex={-1}>
            <Icon d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM19 11a7 7 0 0 1-14 0M12 18v3" />
          </button>
        </div>
        <div className="remote-col">
          <button className="rbtn rbtn-black" tabIndex={-1}>
            <Icon d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
          </button>
          <button className="rbtn rbtn-white" tabIndex={-1}>
            <Icon d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" />
          </button>
        </div>
        <div className="remote-volume">
          <span>−</span>
          <span>+</span>
        </div>
      </div>
      <div className="remote-utility">
        <span className="ring"><Icon d="M12 2v10M18.4 6.6a9 9 0 1 1-12.8 0" size={20} /></span>
        <span className="grip" />
        <span className="ring"><Icon d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" size={20} /></span>
      </div>
    </div>
  );
}
