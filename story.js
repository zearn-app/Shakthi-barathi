/* =========================================================================
   STORY CONFIG — everything visible on the site lives here.
   Edit freely: name, thanglish lines, chat, captions, audio links.
   ========================================================================= */

const STORY = {

  herName: "Sakthi", // <-- change to her actual name

  // ---- 1. opening screen ----
  intro: [
    "Sila peru namma life la vandhu…",
    "…eppadiyo en life la oru best friend da Irukanga."
  ],
  startLabel: "kila scroll panni paru ✨",

  // ---- 2. namma story epdi start aachu ----
  timelineHeading: "Ellame oru simple chat la tha start aachu…",
  timeline: [
    { label: "First… just oru classmet" },
    { label: "Aprom… konjam friend." },
    { label: "ipo… Best Friend ah 😂" }
  ],

  // ---- 3. namma chats ----
  chatHeading: "ipadi start aanathu ",
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
    { text: "Konjam konjam ah…", hi: false },
    { text: "Nee en best friend aayita 💙", hi: true }
  ],

  // ---- 5 & 6. portrait reveal + message ----
  portraitEyebrow: "...",
  portrait: [
    { text: "Nee enna care panra sila visiayangal…", hi: false },
    { text: "…naan veliya sollama irundhaalum nee notice pannirupe", hi: true },
    { text: "unmaiyave", hi: false },
    { text: "Adhu romba special theriyum ma 💙", hi: true }
  ],

  // ---- 7. un care ----
  careHeading: "Un care pathi konjam sollanumna…",
  care: [
    "Nee kekkaama kooda sila vishayam notice pannuva.",
    "Naan okay ah irukkena nu care pannuva.",
    "Random ah pesinalum kekka time kuduppa.",
    "Sila neram enna vida enna nee nalla purinjippa.",
    "Adhaan nee just oru friend illa…",
    "Nee en special friend 💙"
  ],

  // ---- 8. memory gallery ----
  galleryHeading: "un photos enta avalotha iruthuachu pah ",
  gallerySub: " 🩵",
  gallery: [
    { src: "mem8.jpg", caption: "." },
    { src: "mem9.jpg", caption: "." },
    { src: "mem10.jpg", caption: "." },
    { src: "mem2.jpg", caption: "." },
    { src: "mem11.jpg", caption: "." },
    { src: "mem3.jpg", caption: "." },
    { src: "mem12.jpg", caption: "." },
    { src: "mem10.jpg", caption: "." },
    { src: "mem4.jpg", caption: "." },
    { src: "mem5.jpg", caption: "." },
    { src: "mem6.jpg", caption: "." },
  ],

  // ---- 9. friend -> best friend    transition ----
  bfLead: "ipadi start pannadhu…",
  bfWord1: "BEST FRIENDSHIP",
  bfSub: "aana ippo… nee en life-la romba special friend. 💙",

  // ---- 10. birthday reveal ----
  birthdayHeading: "HAPPY BIRTHDAY pahh 💙🎂",
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
    "summa pesinom…",
    "Apdiye nee en best friend aayita.",
    "Nee enna care panra vishayam enakku genuinely romba pidikkum.",
    "Sometimes naan sollaama irundhaalum, nee purinjukura moments irukku.",
    "Adhu enakku romba valuable.",
    "So innaiku un birthday-ku…",
    "Unakku oru vishayam mattum sollanum.",
    "__CLOSE__Nee happy ah irukkanum. epavum💙",
    "Un smile apdiye irukkanum",
    "Nee enna kanavu kandalum adhu sucess aaganum.",
    "And… namma friendship ipdiye nalla irukkanum 🫶"
  ],

  // ---- 12. surprise teaser ----
  surprise: [
    { text: "Wait…", hi: false },
    { text: "innum oru surprise irukku. 👀", hi: true },
    { text: "Un friends ellarum unakku oru wish sollirukaanga. 💙", hi: true },
    { text: "", hi: false }
  ],

  // ---- friends' voice notes audio (used by the single final surprise popup) ----
  voicenotes: {
    heading: "Unakku wish panna vandha ellarum 💙",
    sub: "Play panni keluu… 😌🎧",
    audioSrc: "voicenotes.mp3"
  },

  // ---- final surprise: wait experience before the reveal button ----
  finalWait: {
    line1: "Konjam wait pannu…",
    line2: "something special is waiting for you 👀💙",
    openLabel: "Surprise-a open pannalama? ❤️"
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
  finalNote: "Namma story innum continue aagite irukkum",
  finalTiny: "",

  // ---- 20. final audio popup (appears once, after reaching the end) ----
  finalPopup: {
    teaser: "One last thing… 👀💙",
    lead: "Unakku mattum oru full wish ready ah irukku.",
    playLabel: "▶ PLAY FULL WISHES",
    afterText: "Ippo dhaan full ah wish pannitaanga 😂💙",
    afterSub: "Happy Birthday pahh 🥹💙",
    closeLabel: "CLOSE ✨"
  }
};
