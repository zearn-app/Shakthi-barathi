/* =========================================================================
   STORY CONFIG
   Edit everything in this one file — name, messages, timeline, chat,
   captions — without touching app.js or index.html.
   ========================================================================= */

const STORY = {

  herName: "Sakthi", // <-- change this to her actual name

  // ---- Section 1: opening ----
  intro: [
    "Some people enter your life…",
    "…and somehow become a part of it.",
    "This is our little story."
  ],

  // ---- Section 2: timeline ----
  timeline: [
    { label: "a stranger" },
    { label: "friend" },
    { label: "close friend" },
    { label: "best friend" },
    { label: "someone special" }
  ],

  // ---- Section 3: chat bubbles (sent = you, recv = her) ----
  chat: [
    { from: "sent", text: "Unga kitta oru question kekkanum" },
    { from: "recv", text: "Ahhh sollugaa pahh", reaction: "🥹" },
    { from: "sent", text: "Enna pathi nee nga enna nenaikuringa" },
    { from: "recv", text: "Unagala pathiyaa onnum nenaikkala pahh", reaction: "💜" }
  ],

  // ---- Section 4: "somewhere along the way" ----
  along: [
    { text: "Somewhere along the way…", hi:false },
    { text: "You became my best friend.", hi:true },
    { text: "The person I could talk to.", hi:false },
    { text: "The person who cared.", hi:false },
    { text: "The person who stayed.", hi:false }
  ],

  // ---- Section 5: portrait message ----
  portrait: [
    { text: "You probably don't realize…", hi:false },
    { text: "…how much you mean to me.", hi:true },
    { text: "You care about me in ways…", hi:false },
    { text: "…that I don't always know how to explain.", hi:true }
  ],

  // ---- Section 6: care cards ----
  care: [
    "You listen.",
    "You care.",
    "You notice the little things.",
    "You make ordinary moments special.",
    "And somehow… you became important to me."
  ],

  // ---- Section 7: gallery — swap src for your own photos, add more freely ----
  gallery: [
    { src: "assets/mem1.jpg", caption: "One of those moments…" },
    { src: "assets/mem2.jpg", caption: "Still makes me smile." },
    { src: "assets/mem4.jpg", caption: "A memory worth keeping." },
    { src: "assets/mem6.jpg", caption: "Just us, being us." },
    { src: "assets/mem5.jpg", caption: "Somewhere in between the laughs." },
    { src: "assets/mem3.jpg", caption: "A little chaos, a lot of love." }
  ],

  // ---- Section 9: birthday reveal ----
  birthday: {
    line1: "To my best friend, my favorite person to annoy, and someone who means more to me than you probably realize.",
    line2: "I hope this year gives you all the happiness you deserve."
  },

  // ---- Section 10: letter ----
  letter: [
    "I don't know exactly when you became such an important part of my life.",
    "Maybe it happened through all the random conversations.",
    "Maybe through the little moments.",
    "Maybe through the way you care.",
    "Or maybe it just happened without either of us noticing.",
    "But I'm genuinely grateful that I got to know you.",
    "From being friends to becoming best friends, you've become someone I truly value.",
    "So today, I just want to say…",
    "__CLOSE__Happy Birthday ❤",
    "Stay the same beautiful person you are. Keep smiling. Keep being you.",
    "And never forget that there is someone who genuinely cares about you too."
  ],

  // ---- Section 11: final scene ----
  final: [
    "From a simple friendship…",
    "…to my best friend…",
    "…to one of the most special people in my life."
  ]
};
