export const site = {
  brand: "Google TV Remote",
  email: "roosapp@leeuwen.buzz",
  operator: "Roos Leeuwen",
  address: "Frederiksplein 1C, 9724 NH Groningen, Netherlands",
  // sentences 1 and 3 of the owner's Terms of Use, section 8, word for word
  disclaimer:
    "The Google TV name and associated licensed brand elements are used in the Application pursuant to a signed trademark licence and brand authorization agreement with Google LLC. Google LLC retains ownership of its trademarks and other intellectual property.",
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
    q: "Why can’t I see my TV?",
    a: "Make sure your iPhone and TV are on the same Wi-Fi network and that the app has Local Network access in iOS Settings. Without it, the app can’t find or control your TV.",
  },
  {
    q: "Which TVs work with the app?",
    a: "Compatible Google TV, Android TV and Chromecast-enabled devices. Available features depend on your TV model.",
  },
  {
    q: "Can I type on the TV with my phone?",
    a: "Yes. Switch the remote to Keyboard and type on your iPhone; the text appears on the TV.",
  },
  {
    q: "Does the app use my iPhone microphone?",
    a: "No. The microphone button opens the voice assistant on your TV, such as Google Assistant. You speak to the TV or its physical remote.",
  },
  {
    q: "How do I cast a photo or video?",
    a: "Pick a photo or video to cast. The Cast Media screen shows playback controls: pause and 10-second skip.",
  },
  {
    q: "Can I cast a video from a website?",
    a: "Open the site in the app’s browser. If the page has a direct video address, a Cast button appears and your TV plays the video from the original server. Many protected or blob-based streams can’t be cast this way.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions renew until you cancel them in your Apple Account: on iPhone open Settings, tap your name, then Subscriptions. Deleting the app does not cancel a subscription.",
  },
];
