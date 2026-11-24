export const site = {
  brand: "Google TV Remote",
  email: "roosapp@leeuwen.buzz",
  disclaimer:
    "Google TV Remote is an independent app. Google and Google TV are trademarks of Google LLC. The app is not made by or affiliated with Google LLC.",
  copyrightYear: 2026,
};

export const app = {
  appleId: "6832132694",
  get url() {
    return `https://apps.apple.com/app/id${this.appleId}`;
  },
};

export const nav = [
  { label: "App", to: "/app" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

export const hero = {
  title: "The remote for your Google TV",
  lead: "Navigate your TV, adjust the volume and control playback from your phone.",
};

export const intro = {
  title: ["Control, type and cast", "to your TV."],
  text: "Use the familiar remote buttons, a trackpad and your iPhone keyboard. Pair your TV in seconds and enjoy your photos and videos on the big screen.",
};

export const cards = [
  {
    title: "Simple controls",
    text: "Back, Home, volume, mute, microphone, power and input on one screen.",
    image: "/images/remote-buttons.webp",
    alt: "Remote screen with Back, Home, volume, mute, microphone, power and input buttons",
  },
  {
    title: "Type from your phone",
    text: "Search for shows and enter text on your TV with the keyboard on your phone.",
    image: "/images/screen-keyboard.webp",
    alt: "Keyboard screen of the app for typing on the TV",
  },
  {
    title: "Clear connection status",
    text: "See which TV is connected, connecting or available.",
    devices: true,
  },
];

export const inputModes = [
  { name: "D-pad", text: "Move around the TV with directional buttons.", icon: "dpad" as const, image: "/images/mode-dpad.webp", alt: "D-pad of the app" },
  { name: "Trackpad", text: "Swipe on the trackpad to move around the TV screen.", icon: "trackpad" as const, image: "/images/mode-trackpad.webp", alt: "Trackpad of the app with a touch point" },
  { name: "Keyboard", text: "Type on your iPhone keyboard to enter text on the TV.", icon: "keyboard" as const, image: "/images/screen-keyboard.webp", alt: "Keyboard screen of the app for typing on the TV" },
];

export const pairing = {
  label: "Pairing",
  title: ["Pair your TV", "in seconds"],
  text: "Tap Connect your TV at the top of the remote and pick your TV from the list.",
  points: ["Your TVs in one list", "Status for each TV", "Change TV from the top of the remote"],
};

export const casting = {
  label: "Cast",
  title: ["Enjoy media", "on big screens"],
  text: "Enjoy your photos and videos on your TV. Control playback right from your phone.",
  points: ["Photos and videos", "Pause from your phone", "10-second skip"],
};

export const faq = [
  {
    q: "How do I connect my TV?",
    a: "Tap Connect your TV at the top of the Remote screen and pick your TV from the list. Each TV shows its status: connecting, connected or available.",
  },
  {
    q: "Can I type on the TV with my phone?",
    a: "Yes. Switch the remote to Keyboard and type on your iPhone; the text appears on the TV.",
  },
  {
    q: "How do I cast a photo or video?",
    a: "Pick a photo or video to cast. The Cast Media screen shows playback controls: pause and 10-second skip.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Manage your subscription in your Apple ID settings on iPhone: Settings, your name, then Subscriptions.",
  },
];
