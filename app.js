/* =========================================================================
   APP LOGIC — reads STORY from story.js and drives the whole experience.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- BUILD CONTENT FROM CONFIG ---------------- */

  document.getElementById("timelineHeading").textContent = STORY.timelineHeading;
  const tlItems = document.getElementById("tlItems");
  STORY.timeline.forEach(item => {
    const div = document.createElement("div");
    div.className = "tl-item reveal";
    div.innerHTML = `<span class="tl-dot"></span><p>${item.label}</p>`;
    tlItems.appendChild(div);
  });

  document.getElementById("chatHeading").textContent = STORY.chatHeading;
  const bubbleCol = document.getElementById("bubbleCol");
  STORY.chat.forEach(msg => {
    const div = document.createElement("div");
    div.className = `bubble ${msg.from === "sent" ? "sent" : "recv"} reveal`;
    div.innerHTML = msg.text + (msg.reaction ? `<span class="reaction">${msg.reaction}</span>` : "");
    bubbleCol.appendChild(div);
  });

  const alongLines = document.getElementById("alongLines");
  STORY.along.forEach(l => {
    const p = document.createElement("p");
    p.className = "reveal" + (l.hi ? " hi" : "");
    p.textContent = l.text;
    alongLines.appendChild(p);
  });

  document.getElementById("portraitEyebrow").textContent = STORY.portraitEyebrow;
  const portraitMsg = document.getElementById("portraitMsg");
  STORY.portrait.forEach(l => {
    const p = document.createElement("p");
    p.className = "reveal" + (l.hi ? " hi" : "");
    p.textContent = l.text;
    portraitMsg.appendChild(p);
  });

  document.getElementById("careHeading").innerHTML = STORY.careHeading;
  const cardStack = document.getElementById("cardStack");
  STORY.care.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "care-card";
    div.innerHTML = `<span class="num">CARD ${String(i + 1).padStart(2, "0")}</span>${text}`;
    cardStack.appendChild(div);
  });

  document.getElementById("galleryHeading").textContent = STORY.galleryHeading;
  document.getElementById("gallerySub").textContent = STORY.gallerySub;
  const galTrack = document.getElementById("galTrack");
  const rotations = [-3, 2, -2, 3, -2.5, 2.5];
  STORY.gallery.forEach((g, i) => {
    const div = document.createElement("div");
    div.className = "gal-item";
    div.style.setProperty("--r", `${rotations[i % rotations.length]}deg`);
    div.innerHTML = `<img src="${g.src}" alt="memory" loading="lazy"><span class="gal-cap">${g.caption}</span>`;
    galTrack.appendChild(div);
  });

  document.getElementById("bfLead").textContent = STORY.bfLead;
  document.getElementById("bfWord1").textContent = STORY.bfWord1;
  document.getElementById("bfWord2").textContent = STORY.bfWord2;
  document.getElementById("bfSub").textContent = STORY.bfSub;

  document.getElementById("birthdayHeading").innerHTML = STORY.birthdayHeading;
  const birthdayLines = document.getElementById("birthdayLines");
  STORY.birthday.forEach((text, i) => {
    const p = document.createElement("p");
    p.className = "msg reveal" + (i < 2 ? " hi" : "");
    p.textContent = text;
    birthdayLines.appendChild(p);
  });

  document.getElementById("letterHeading").textContent = STORY.letterHeading;
  const letterCard = document.getElementById("letterCard");
  STORY.letter.forEach(line => {
    const p = document.createElement("p");
    if (line.startsWith("__CLOSE__")) {
      p.className = "close";
      p.textContent = line.replace("__CLOSE__", "");
    } else {
      p.textContent = line;
    }
    letterCard.appendChild(p);
  });

  const surpriseLines = document.getElementById("surpriseLines");
  STORY.surprise.forEach(l => {
    const p = document.createElement("p");
    p.className = "reveal" + (l.hi ? " hi" : "");
    p.textContent = l.text;
    surpriseLines.appendChild(p);
  });

  document.getElementById("vnHeading").textContent = STORY.voicenotes.heading;
  document.getElementById("vnSub").textContent = STORY.voicenotes.sub;

  const finalPreEl = document.getElementById("finalPre");
  STORY.finalPre.forEach(text => {
    const p = document.createElement("p");
    p.className = "reveal";
    p.textContent = text;
    finalPreEl.appendChild(p);
  });
  const finalLinesEl = document.getElementById("finalLinesEl");
  STORY.finalLines.forEach(text => {
    const p = document.createElement("p");
    p.className = "final-line reveal";
    p.textContent = text;
    finalLinesEl.appendChild(p);
  });
  document.getElementById("finalName").textContent = `HAPPY BIRTHDAY, ${STORY.herName} DI 💙🎂`;
  document.getElementById("finalNoteEl").textContent = STORY.finalNote;
  document.getElementById("finalTinyEl").textContent = STORY.finalTiny;

  document.getElementById("popupTeaser").textContent = STORY.finalPopup.teaser;
  document.getElementById("popupLead").textContent = STORY.finalPopup.lead;
  document.getElementById("popupAfterText").textContent = STORY.finalPopup.afterText;
  document.getElementById("popupAfterSub").textContent = STORY.finalPopup.afterSub;
  document.getElementById("popupCloseBtn").textContent = STORY.finalPopup.closeLabel;

  /* ---------------- INTRO SEQUENCE ---------------- */
  const introLines = document.getElementById("introLines");
  const startBtn = document.getElementById("startBtn");
  startBtn.textContent = STORY.startLabel;
  STORY.intro.forEach(text => {
    const p = document.createElement("p");
    p.className = "intro-line";
    p.textContent = text;
    introLines.appendChild(p);
  });
  const introLineEls = introLines.querySelectorAll(".intro-line");
  let introDelay = 400;
  introLineEls.forEach(line => {
    setTimeout(() => line.classList.add("show"), introDelay);
    introDelay += 1900;
  });
  setTimeout(() => startBtn.classList.add("show"), introDelay);

  startBtn.addEventListener("click", () => {
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
    startBackgroundMusic();
  }, { once: true });

  /* ---------------- NAV DOTS ---------------- */
  const sections = Array.from(document.querySelectorAll("section"));
  const navdots = document.getElementById("navdots");
  sections.forEach(sec => {
    const btn = document.createElement("button");
    btn.dataset.target = sec.id;
    btn.addEventListener("click", () => sec.scrollIntoView({ behavior: "smooth" }));
    navdots.appendChild(btn);
  });
  const dotButtons = navdots.querySelectorAll("button");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = sections.indexOf(entry.target);
        dotButtons.forEach(b => b.classList.remove("active"));
        if (dotButtons[idx]) dotButtons[idx].classList.add("active");
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(sec => navObserver.observe(sec));

  /* ---------------- SCROLL PROGRESS BAR ---------------- */
  const scrollbar = document.getElementById("scrollbar");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    scrollbar.style.width = pct + "%";
  }, { passive: true });

  /* ---------------- GENERIC REVEAL ON SCROLL ---------------- */
  const revealEls = document.querySelectorAll(".reveal, .tl-item, .bubble, .care-card, .gal-item, .bf-word, .bf-sub");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.25 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------------- CANDLES + CONFETTI ---------------- */
  const cakeEl = document.getElementById("cakeEl");
  for (let i = 0; i < 5; i++) {
    const c = document.createElement("div");
    c.className = "candle";
    c.style.left = `${28 + i * 20}px`;
    cakeEl.appendChild(c);
  }
  const candles = cakeEl.querySelectorAll(".candle");
  let candlesLit = false, confettiFired = false;

  const confettiCanvas = document.getElementById("confettiCanvas");
  const ctxConfetti = confettiCanvas.getContext("2d");
  function sizeConfettiCanvas() {
    const sec = document.getElementById("birthday");
    confettiCanvas.width = sec.clientWidth;
    confettiCanvas.height = sec.clientHeight;
  }
  sizeConfettiCanvas();
  window.addEventListener("resize", sizeConfettiCanvas);

  function fireConfetti() {
    if (reduceMotion) return;
    const colors = ["#60A5FA", "#38BDF8", "#7DD3FC", "#DBEAFE", "#ffffff"];
    const pieces = Array.from({ length: 90 }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 200,
      w: 4 + Math.random() * 5,
      h: 6 + Math.random() * 8,
      speed: 2 + Math.random() * 3,
      drift: -1.5 + Math.random() * 3,
      rot: Math.random() * 360,
      rotSpeed: -6 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    let frame = 0;
    function tick() {
      frame++;
      ctxConfetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      let stillFalling = false;
      pieces.forEach(p => {
        p.y += p.speed;
        p.x += p.drift;
        p.rot += p.rotSpeed;
        if (p.y < confettiCanvas.height + 20) stillFalling = true;
        ctxConfetti.save();
        ctxConfetti.translate(p.x, p.y);
        ctxConfetti.rotate((p.rot * Math.PI) / 180);
        ctxConfetti.fillStyle = p.color;
        ctxConfetti.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctxConfetti.restore();
      });
      if (stillFalling && frame < 420) requestAnimationFrame(tick);
      else ctxConfetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
    tick();
  }

  const birthdaySection = document.getElementById("birthday");
  const birthdayObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !candlesLit) {
        candlesLit = true;
        candles.forEach((c, i) => setTimeout(() => c.classList.add("lit"), i * 220));
        if (!confettiFired) { confettiFired = true; setTimeout(fireConfetti, 500); }
      }
    });
  }, { threshold: 0.5 });
  birthdayObserver.observe(birthdaySection);

  /* ---------------- REUSABLE AUDIO PLAYER ---------------- */
  // Builds a cinematic audio player inside `container` for `audioSrc`.
  // Returns { audio, play, pause } so callers can hook into lifecycle events.
  function buildAudioPlayer(container, audioSrc, opts = {}) {
    if (!audioSrc || audioSrc === "YOUR_GITHUB_RAW_AUDIO_URL") {
      container.innerHTML = `<p class="player-empty">Friends' voice wishes audio konjam time-la add pannuvom 💙<br><span style="font-size:12px;opacity:.7;">(paste your GitHub raw audio URL in story.js)</span></p>`;
      return null;
    }

    container.innerHTML = `
      <div class="mic-wrap">
        <div class="mic-glow"></div>
        <span class="mic-icon">🎙️</span>
      </div>
      <canvas class="waveform-canvas"></canvas>
      <div class="player-controls">
        <button class="play-pause-btn" aria-label="play">▶</button>
        <input type="range" class="seek-bar" min="0" max="100" value="0">
      </div>
      <div class="time-row"><span class="cur-time">0:00</span><span class="dur-time">0:00</span></div>
      <div class="volume-row"><span>🔉</span><input type="range" class="volume-bar" min="0" max="1" step="0.01" value="0.9"></div>
    `;

    const audio = new Audio();
    audio.crossOrigin = "anonymous";
    audio.preload = "metadata";
    audio.src = audioSrc;

    const playBtn = container.querySelector(".play-pause-btn");
    const seekBar = container.querySelector(".seek-bar");
    const curTime = container.querySelector(".cur-time");
    const durTime = container.querySelector(".dur-time");
    const volumeBar = container.querySelector(".volume-bar");
    const micGlow = container.querySelector(".mic-glow");
    const waveform = container.querySelector(".waveform-canvas");
    const wctx = waveform.getContext("2d");

    function fmtTime(s) {
      if (!isFinite(s)) return "0:00";
      const m = Math.floor(s / 60), sec = Math.floor(s % 60);
      return `${m}:${sec.toString().padStart(2, "0")}`;
    }

    audio.addEventListener("loadedmetadata", () => {
      durTime.textContent = fmtTime(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      if (!seekBar.dragging) {
        seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
      }
      curTime.textContent = fmtTime(audio.currentTime);
    });
    audio.addEventListener("ended", () => {
      playBtn.textContent = "▶";
      micGlow.style.boxShadow = "0 0 0 0 rgba(56,189,248,.5)";
      restoreBackgroundMusic();
      if (opts.onEnded) opts.onEnded();
    });

    seekBar.addEventListener("input", () => {
      seekBar.dragging = true;
      const t = (seekBar.value / 100) * (audio.duration || 0);
      curTime.textContent = fmtTime(t);
    });
    seekBar.addEventListener("change", () => {
      audio.currentTime = (seekBar.value / 100) * (audio.duration || 0);
      seekBar.dragging = false;
    });
    volumeBar.addEventListener("input", () => { audio.volume = volumeBar.value; });
    audio.volume = 0.9;

    // waveform via Web Audio API
    let audioCtx, analyser, source, dataArray, rafId;
    function setupAnalyser() {
      if (audioCtx) return;
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        source = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      } catch (e) { /* Web Audio unsupported — waveform just stays static */ }
    }

    function sizeWaveform() {
      waveform.width = waveform.clientWidth * devicePixelRatio;
      waveform.height = waveform.clientHeight * devicePixelRatio;
    }
    sizeWaveform();
    window.addEventListener("resize", sizeWaveform);

    function drawWaveform() {
      rafId = requestAnimationFrame(drawWaveform);
      wctx.clearRect(0, 0, waveform.width, waveform.height);
      let avg = 0;
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
        const barCount = dataArray.length;
        const barWidth = waveform.width / barCount;
        for (let i = 0; i < barCount; i++) {
          const v = dataArray[i] / 255;
          avg += v;
          const barH = Math.max(3, v * waveform.height);
          const x = i * barWidth;
          const y = (waveform.height - barH) / 2;
          wctx.fillStyle = `rgba(56,189,248,${0.35 + v * 0.5})`;
          wctx.fillRect(x, y, barWidth * 0.6, barH);
        }
        avg = avg / barCount;
      }
      if (micGlow) {
        const glowSize = 6 + avg * 26;
        micGlow.style.boxShadow = `0 0 ${glowSize}px ${glowSize / 3}px rgba(56,189,248,${0.35 + avg * 0.4})`;
      }
    }

    function doPlay() {
      setupAnalyser();
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
      audio.play();
      playBtn.textContent = "❚❚";
      if (!rafId) drawWaveform();
      duckBackgroundMusic();
      if (opts.onPlay) opts.onPlay();
    }
    function doPause() {
      audio.pause();
      playBtn.textContent = "▶";
      restoreBackgroundMusic();
    }

    playBtn.addEventListener("click", () => {
      if (audio.paused) doPlay(); else doPause();
    });

    return { audio, play: doPlay, pause: doPause };
  }

  // Mid-scroll voice notes player
  buildAudioPlayer(document.getElementById("playerCard"), STORY.voicenotes.audioSrc);

  /* ---------------- FINAL AUDIO POPUP ---------------- */
  const finalSection = document.getElementById("final");
  const popupOverlay = document.getElementById("finalPopupOverlay");
  const popupPlayerCard = document.getElementById("popupPlayerCard");
  const popupAfter = document.getElementById("popupAfter");
  const popupCloseBtn = document.getElementById("popupCloseBtn");
  let popupShown = false;
  let popupPlayer = null;

  const finalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !popupShown) {
        popupShown = true;
        setTimeout(() => {
          popupOverlay.classList.add("show");
          popupPlayer = buildAudioPlayer(popupPlayerCard, STORY.voicenotes.audioSrc, {
            onEnded: () => {
              popupAfter.classList.add("show");
              popupCloseBtn.classList.remove("hidden");
            }
          });
          startPopupParticles();
        }, 1600);
        finalObserver.disconnect();
      }
    });
  }, { threshold: 0.6 });
  finalObserver.observe(finalSection);

  popupCloseBtn.addEventListener("click", () => {
    popupOverlay.classList.remove("show");
    if (popupPlayer) popupPlayer.pause();
    stopPopupParticles();
  });

  // small blue particle drift inside the popup overlay
  const popupCanvas = document.getElementById("popupParticles");
  const pctx = popupCanvas.getContext("2d");
  let popupParticles = [], popupRaf = null;
  function sizePopupCanvas() {
    popupCanvas.width = window.innerWidth;
    popupCanvas.height = window.innerHeight;
  }
  function startPopupParticles() {
    if (reduceMotion) return;
    sizePopupCanvas();
    popupParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * popupCanvas.width,
      y: Math.random() * popupCanvas.height,
      r: 0.6 + Math.random() * 1.5,
      speed: 0.15 + Math.random() * 0.35,
      alpha: 0.2 + Math.random() * 0.5
    }));
    function tick() {
      pctx.clearRect(0, 0, popupCanvas.width, popupCanvas.height);
      popupParticles.forEach(p => {
        pctx.beginPath();
        pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        pctx.fillStyle = `rgba(125,211,252,${p.alpha})`;
        pctx.fill();
        p.y -= p.speed;
        if (p.y < 0) p.y = popupCanvas.height;
      });
      popupRaf = requestAnimationFrame(tick);
    }
    tick();
  }
  function stopPopupParticles() {
    if (popupRaf) cancelAnimationFrame(popupRaf);
    pctx.clearRect(0, 0, popupCanvas.width, popupCanvas.height);
  }
  window.addEventListener("resize", sizePopupCanvas);

  /* ---------------- OPTIONAL BACKGROUND MUSIC ---------------- */
  let bgMusic = null;
  const musicToggle = document.getElementById("musicToggle");
  let musicMuted = false;

  if (STORY.backgroundMusicSrc) {
    bgMusic = new Audio(STORY.backgroundMusicSrc);
    bgMusic.loop = true;
    bgMusic.volume = 0;
    musicToggle.classList.add("show");
  }

  function startBackgroundMusic() {
    if (!bgMusic) return;
    bgMusic.play().catch(() => {});
    fadeVolume(bgMusic, 0.35, 1200);
  }

  function fadeVolume(audioEl, target, duration) {
    const start = audioEl.volume;
    const steps = 20;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      audioEl.volume = start + (target - start) * (step / steps);
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  }

  function duckBackgroundMusic() {
    if (bgMusic && !musicMuted) fadeVolume(bgMusic, 0.05, 600);
  }
  function restoreBackgroundMusic() {
    if (bgMusic && !musicMuted) fadeVolume(bgMusic, 0.35, 900);
  }

  musicToggle.addEventListener("click", () => {
    if (!bgMusic) return;
    musicMuted = !musicMuted;
    musicToggle.textContent = musicMuted ? "🔇" : "🔊";
    fadeVolume(bgMusic, musicMuted ? 0 : 0.35, 400);
  });

   /* ---------------- PARTICLE BACKGROUND ---------------- */
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
  }

  function initParticles() {
    const count = reduceMotion ? 0 : Math.min(80, Math.floor((w * h) / 40000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.6,
      speed: 0.08 + Math.random() * 0.22,
      drift: -0.15 + Math.random() * 0.3,
      alpha: 0.15 + Math.random() * 0.5,
      hue: Math.random() > 0.5 ? "96,165,250" : "56,189,248"
    }));
  }

  resize();
  initParticles();
  window.addEventListener("resize", () => { resize(); initParticles(); });

  let scrollY = window.scrollY;
  window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    const viewTop = scrollY - 200;
    const viewBottom = scrollY + window.innerHeight + 200;
    particles.forEach(p => {
      if (p.y < viewTop || p.y > viewBottom) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
      ctx.fill();
      p.y -= p.speed;
      p.x += p.drift * 0.3;
      if (p.y < viewTop) p.y = viewBottom;
    });
    requestAnimationFrame(animateParticles);
  }
  if (!reduceMotion) animateParticles();
  else ctx.clearRect(0, 0, w, h);

  window.addEventListener("load", () => { resize(); initParticles(); });
});
