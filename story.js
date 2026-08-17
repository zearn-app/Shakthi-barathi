/* =========================================================================
   STORY CONFIG — everything visible on the site lives here.
   Edit freely: name, thanglish lines, chat, captions, audio links.
   ========================================================================= */

const STORY = {

  herName: "Sakthi", // <-- change to her actual name

  // ---- 1. opening screen ----
  intro: [
    "Sila peru namma life la vandhu…",
    "…eppadiyo en life la oru best friend da Iruka ."
  ],
  startLabel: "kella scroll panni paru ✨",

  // ---- 2. namma story epdi start aachu ----
  timelineHeading: "Ellame oru simple chat la tha  dhaane start aachu…",
  timeline: [
    { label: "First… just oru class met" },
    { label: "Apram… konjam close friend." },
    { label: "Apram… romba close." },
    { label: "Apram… Best Friend ah? 😂" }
  ],

  // ---- 3. namma chats ----
  chatHeading: "ipadi start annathu ",
  chat: [
    { from: "sent", text: "Unga kitta oru question kekkanum…" },
    { from: "recv", text: "Ahhh sollugaa pahh 😂", reaction: "😂" },
    { from: "sent", text: "Enna pathi nee nga enna nenaikuringa?" },
    { from: "recv", text: "Ungala pathiyaa onnum nenaikkala pahh 😂", reaction: "🥹" }
  ],

  // ---- 4. eppo epdi ipdi aachu ----
  along: [
    { text: "Aana…", hi: false },
    { text: "Eppo namma ivlo close aanom nu theriyala.", hi: false },
    { text: "Pesitu irundhom…", hi: false },
    { text: "Random ah pesinom…", hi: false },
    { text: "Konjam konjam ah…", hi: false },
    { text: "Nee en best friend aayita. 💙", hi: true }
  ],

  // ---- 5 & 6. portrait reveal + message ----
  portraitEyebrow: "...",
  portrait: [
    { text: "Nee enna care panra sila vishayangal…", hi: false },
    { text: "…naan veliya sollama irundhaalum notice panniruppen.", hi: true },
    { text: "Honestly…", hi: false },
    { text: "Adhu romba special. 💙", hi: true }
  ],

  // ---- 7. un care ----
  careHeading: "Un care pathi konjam sollanumna…",
  care: [
    "Nee kekkaama kooda sila vishayam notice pannuva.",
    "Naan okay ah irukkena nu care pannuva.",
    "Random ah pesinalum kekka time kuduppa.",
    "Sila neram enna vida enna nee nalla purinjippa.",
    "Adhaan nee just oru friend illa…",
    "Nee en best friend 💙"
  ],

  // ---- 8. memory gallery ----
  galleryHeading: "un photos enta avalotha iruthuachu pah ",
  gallerySub: " 🩵",
  gallery: [
    { src: "mem7.jpg", caption: "." },
    { src: "mem2.jpg", caption: "." },
    { src: "mem4.jpg", caption: "." },
    { src: "mem6.jpg", caption: "." },
    { src: "mem5.jpg", caption: "." },
    { src: "mem3.jpg", caption: "." }
  ],

  // ---- 9. friend -> best friend transition ----
  bfLead: "ipadi start pannadhu…",
  bfWord1: "FRIENDSHIP",
  bfWord2: "BEST FRIENDSHIP",
  bfSub: "aana ippo… nee en life-la romba special friend. 💙",

  // ---- 10. birthday reveal ----
  birthdayHeading: "HAPPY BIRTHDAY DI 💙🎂",
  birthday: [
    "Innaiku un birthday…",
    "So konjam over ah oru wish panna thappilla nu nenachen. 😂",
    "Un life full ah happiness, peace, success…",
    "and neraya neraya beautiful moments irukkanum."
  ],

  // ---- 11. personal letter ----
  letterHeading: "Unakku oru chinna message…",
  letter: [
    "Actually enna sollanum nu romba yosichen…",
    "Namma friendship epdi ivlo close aachu nu yosicha, exact ah oru reason kooda solla mudiyala.",
    "Just pesinom…",
    "Random ah time spend pannom…",
    "Apdiye nee en best friend aayita.",
    "Nee enna care panra vishayam enakku genuinely romba pidikkum.",
    "Sometimes naan sollaama irundhaalum, nee purinjukura moments irukku.",
    "Adhu enakku romba valuable.",
    "So innaiku un birthday-ku…",
    "Unakku oru vishayam mattum sollanum.",
    "__CLOSE__Nee happy ah irukkanum. Always. 💙",
    "Un smile apdiye irukkanum.",
    "Nee enna dream pannalum adhu achieve aaganum.",
    "And… namma friendship ipdiye nalla irukkanum. 🫶"
  ],

  // ---- 12. surprise teaser ----
  surprise: [
    { text: "Wait…", hi: false },
    { text: "innum oru surprise irukku. 👀", hi: true },
    { text: "Un friends ellarum unakku oru wish sollirukaanga. 💙", hi: true },
    { text: "-_-", hi: false }
  ],

  // ---- 13-15. friends' voice notes player (mid-scroll) ----
  voicenotes: {
    heading: "Unakku wish panna vandha ellarum 💙",
    sub: "Play panni keluu… 😌🎧",
    // Paste your GitHub raw audio URL below, e.g.
    // "https://raw.githubusercontent.com/USERNAME/REPOSITORY/main/audio/birthday-wishes.mp3"
    audioSrc: "YOUR_GITHUB_RAW_AUDIO_URL"
  },

  // optional: background music. Leave empty to skip — no music button will show.
  // Paste a direct audio URL (e.g. a GitHub raw .mp3 link) below to enable it.
  backgroundMusicSrc: "",

  // ---- 16-17. final scene ----
  finalPre: [
    "Ippo ellarum wish pannitaanga…",
    "Aana…",
    "En wish mattum innum complete aagala."
  ],
  finalLines: [
    "Oru simple friendship-la start aachu…",
    "Best friendship ah maarichu…",
    "And ippo…",
    "Nee en life-la romba special. 💙"
  ],
  finalNote: "Namma story innum continue aagite irukku…",
  finalTiny: "So… next chapter-ku ready ah? ✨",

  // ---- 20. final audio popup (appears once, after reaching the end) ----
  finalPopup: {
    teaser: "One last thing… 👀💙",
    lead: "Unakku mattum oru full wish ready ah irukku.",
    playLabel: "▶ PLAY FULL WISHES",
    afterText: "Ippo dhaan full ah wish pannitaanga 😂💙",
    afterSub: "Happy Birthday diii 🥹💙",
    closeLabel: "CLOSE ✨"
  }
};
