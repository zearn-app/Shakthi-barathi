/* =========================================================================
   APP LOGIC — reads STORY from story.js and drives the whole experience.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- BUILD CONTENT FROM CONFIG ---------------- */

  // Timeline
  const tlItems = document.getElementById("tlItems");
  STORY.timeline.forEach(item => {
    const div = document.createElement("div");
    div.className = "tl-item reveal";
    div.innerHTML = `<span class="tl-dot"></span><p>${item.label}</p>`;
    tlItems.appendChild(div);
  });

  // Chat bubbles
  const bubbleCol = document.getElementById("bubbleCol");
  STORY.chat.forEach(msg => {
    const div = document.createElement("div");
    div.className = `bubble ${msg.from === "sent" ? "sent" : "recv"} reveal`;
    div.innerHTML = msg.text + (msg.reaction ? `<span class="reaction">${msg.reaction}</span>` : "");
    bubbleCol.appendChild(div);
  });

  // Along lines
  const alongLines = document.getElementById("alongLines");
  STORY.along.forEach(l => {
    const p = document.createElement("p");
    p.className = "reveal" + (l.hi ? " hi" : "");
    p.textContent = l.text;
    alongLines.appendChild(p);
  });

  // Portrait message
  const portraitMsg = document.getElementById("portraitMsg");
  STORY.portrait.forEach(l => {
    const p = document.createElement("p");
    p.className = "reveal" + (l.hi ? " hi" : "");
    p.textContent = l.text;
    portraitMsg.appendChild(p);
  });

  // Care cards
  const cardStack = document.getElementById("cardStack");
  STORY.care.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "care-card";
    div.innerHTML = `<span class="num">CARD ${String(i + 1).padStart(2, "0")}</span>${text}`;
    cardStack.appendChild(div);
  });

  // Gallery
  const galTrack = document.getElementById("galTrack");
  const rotations = [-3, 2, -2, 3, -2.5, 2.5];
  STORY.gallery.forEach((g, i) => {
    const div = document.createElement("div");
    div.className = "gal-item";
    div.style.setProperty("--r", `${rotations[i % rotations.length]}deg`);
    div.innerHTML = `<img src="${g.src}" alt="memory" loading="lazy"><span class="gal-cap">${g.caption}</span>`;
    galTrack.appendChild(div);
  });

  // Birthday lines
  document.getElementById("bdayLine1").textContent = STORY.birthday.line1;
  document.getElementById("bdayLine2").textContent = STORY.birthday.line2;

  // Letter
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

  // Final lines
  const finalLines = document.getElementById("finalLines");
  STORY.final.forEach(text => {
    const p = document.createElement("p");
    p.className = "final-line reveal";
    p.textContent = text;
    finalLines.appendChild(p);
  });
  document.getElementById("finalName").textContent = `Happy Birthday, ${STORY.herName} ❤`;

  /* ---------------- INTRO SEQUENCE ---------------- */
  const introLines = document.getElementById("introLines");
  const startBtn = document.getElementById("startBtn");
  STORY.intro.forEach(text => {
    const p = document.createElement("p");
    p.className = "intro-line";
    p.textContent = text;
    introLines.appendChild(p);
  });
  const lines = introLines.querySelectorAll(".intro-line");
  let delay = 400;
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add("show"), delay);
    delay += 1900;
  });
  setTimeout(() => startBtn.classList.add("show"), delay);

  startBtn.addEventListener("click", () => {
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------------- NAV DOTS ---------------- */
  const sections = Array.from(document.querySelectorAll("section"));
  const navdots = document.getElementById("navdots");
  sections.forEach((sec, i) => {
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
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  }, { threshold: 0.25 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------------- CANDLES + CONFETTI on birthday section ---------------- */
  const cakeEl = document.getElementById("cakeEl");
  // build candles
  const candleCount = 5;
  for (let i = 0; i < candleCount; i++) {
    const c = document.createElement("div");
    c.className = "candle";
    c.style.left = `${28 + i * 20}px`;
    cakeEl.appendChild(c);
  }
  const candles = cakeEl.querySelectorAll(".candle");
  let candlesLit = false;
  let confettiFired = false;

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
    const colors = ["#a98bff", "#e8639f", "#f3c26b", "#ffffff"];
    const pieces = Array.from({ length: 90 }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 200,
      w: 4 + Math.random() * 5,
      h: 6 + Math.random() * 8,
      vy: 2 + Math.random() * 3,
      vx: -1.5 + Math.random() * 3,
      rot: Math.random() * 360,
      vr: -6 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    let frame = 0;
    function draw() {
      ctxConfetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        ctxConfetti.save();
        ctxConfetti.translate(p.x, p.y);
        ctxConfetti.rotate(p.rot * Math.PI / 180);
        ctxConfetti.fillStyle = p.color;
        ctxConfetti.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctxConfetti.restore();
      });
      frame++;
      if (frame < 220) requestAnimationFrame(draw);
      else ctxConfetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
    draw();
  }

  const birthdayObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!candlesLit) {
          candlesLit = true;
          candles.forEach((c, i) => {
            setTimeout(() => c.classList.add("lit"), i * 260);
          });
        }
        if (!confettiFired) {
          confettiFired = true;
          setTimeout(fireConfetti, 900);
        }
      }
    });
  }, { threshold: 0.6 });
  birthdayObserver.observe(document.getElementById("birthday"));

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
      hue: Math.random() > 0.5 ? "169,139,255" : "232,99,159"
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

  // resize particle field height after full layout settles (images loading etc.)
  window.addEventListener("load", () => { resize(); initParticles(); });
});
