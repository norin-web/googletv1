// All facts about the brand and the app live here. Pages read only from this file.

export const site = {
  brand: "Google TV Remote",
  tagline: "Your Google TV, in your pocket",
  category: "TV remote",
  email: "roosapp@leeuwen.buzz",
  // Google and Google TV are trademarks of Google LLC. The app is not made by or affiliated with Google.
  disclaimer:
    "Google TV Remote is an independent app. Google and Google TV are trademarks of Google LLC. The app is not made by or affiliated with Google LLC.",
  copyrightYear: 2026,
};

export const app = {
  appleId: "6832132694",
  get url() {
    return `https://apps.apple.com/app/id${this.appleId}`;
  },
  // Flip to true on release: the download buttons become links to the App Store.
  inStore: false,
};

export const nav = [
  { label: "App", to: "/app" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

// Tabs as shown in the app design.
export const tabs = [
  { name: "Remote", note: "Remote controls, D-pad and trackpad" },
  { name: "Chromecast", note: "Find your TV and cast media" },
  { name: "AI Chat" },
  { name: "Settings" },
];

// Input modes of the remote screen.
export const inputModes = [
  { name: "D-pad", text: "Move around the TV with directional buttons." },
  { name: "Trackpad", text: "Swipe on the trackpad to move around the TV screen." },
  { name: "Keyboard", text: "Type on your iPhone keyboard to enter text on the TV." },
];

// Short feature summary for the home page.
export const features = [
  {
    title: "Remote with simple controls",
    text: "Back, Home, volume, mute, microphone, power and input on one screen.",
  },
  {
    title: "Pair your TV",
    text: "Pick your TV from the list of devices to start controlling it.",
  },
  {
    title: "Type from your phone",
    text: "Use your iPhone keyboard to enter text on the TV.",
  },
  {
    title: "Gestures for TV navigation",
    text: "Swipe on the trackpad to move around the TV screen.",
  },
];

export const faq = [
  {
    q: "How do I connect my TV?",
    a: "Open the Chromecast tab and pick your TV from the list. Each device shows its status: connecting, connected or available.",
  },
  {
    q: "Can I type on the TV with my phone?",
    a: "Yes. Switch to Keyboard mode and type on your iPhone; the text appears on the TV.",
  },
  {
    q: "How do I cast a video?",
    a: "Open the Chromecast tab, pick your TV and start casting. Playback controls, including pause and 10-second skip, appear in the app.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Manage your subscription in your Apple ID settings on iPhone: Settings, your name, then Subscriptions.",
  },
];
