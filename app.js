/**
 * ============================================================================
 * SUMIT VYAS & NIDHI DAVE — ROYAL WEDDING INVITATION APPLICATION (app.js)
 * - 3D Royal Crimson & Gold Kalash/Paisley Double Doors + Pearl Wax Seal
 * - 3-Layer Ganesha Idol Courtyard Walk-Through Zoom Parallax (Door Open + Scroll + Tilt)
 * - Marigold & Red Rose Falling Petals + 50% Volume Background Audio
 * - Interactive Gold Foil Scratch-to-Reveal Date Card + 4-Box Countdown
 * - Clean Flat-DOM Mobile Layout (Zero Zoom Bug, Native Smooth Touch Scrolling)
 * ============================================================================
 */
(function () {
  "use strict";

  const CFG = window.WEDDING_CONFIG || {};
  const I18N = window.WEDDING_I18N || {};

  const state = {
    lang: "en",
    side: window.location.hash.toLowerCase().includes("bride") ? "bride" : "groom",
    doorsOpened: false,
    doorStyle: "royal", // 'royal' (Crimson & Gold Kalash) or 'villa'
    audioPlaying: false,
    userPausedAudio: false,
    scratchRevealed: false,
    lightboxIndex: 0
  };

  // DOM Elements
  const courtyardHero = document.getElementById("courtyardHero");
  const courtyardParallaxScene = document.getElementById("courtyardParallaxScene");
  const gateWaxSeal = document.getElementById("gateWaxSeal");
  const openInvitationBtn = document.getElementById("openInvitationBtn");
  const doors3DStage = document.getElementById("doors3DStage");
  const exploreInviteBtn = document.getElementById("exploreInviteBtn");
  const replayDoorBtn = document.getElementById("replayDoorBtn");
  const coupleScratchSection = document.getElementById("coupleScratchSection");

  /* ==========================================================================
     1. TOAST HELPER
     ========================================================================== */
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  /* ==========================================================================
     2. BACKGROUND MUSIC CONTROLLER (Starts at 50% Volume on Door Tap)
     ========================================================================== */
  const audioEl = new Audio();
  audioEl.src = (CFG.assets && CFG.assets.audioSrc) || "song.mp3";
  audioEl.loop = true;
  audioEl.preload = "auto";
  audioEl.volume = (CFG.assets && typeof CFG.assets.audioVolume === "number") ? CFG.assets.audioVolume : 0.5;

  const audioToggleBtn = document.getElementById("audioToggleBtn");
  const audioToggleLabel = document.getElementById("audioToggleLabel");

  function updateAudioUI() {
    if (!audioToggleBtn) return;
    audioToggleBtn.classList.toggle("playing", state.audioPlaying);
    audioToggleBtn.setAttribute("aria-pressed", state.audioPlaying ? "true" : "false");
    if (audioToggleLabel) {
      audioToggleLabel.textContent = state.audioPlaying
        ? (state.lang === "hi" ? "संगीत चालू" : "Music On")
        : (state.lang === "hi" ? "संगीत" : "Music");
    }
  }

  function startWeddingMusic() {
    audioEl.volume = 0.5;
    const playPromise = audioEl.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          state.audioPlaying = true;
          state.userPausedAudio = false;
          updateAudioUI();
        })
        .catch(() => {
          state.audioPlaying = false;
          updateAudioUI();
        });
    }
  }

  function pauseWeddingMusic() {
    audioEl.pause();
    state.audioPlaying = false;
    updateAudioUI();
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      if (state.audioPlaying) {
        state.userPausedAudio = true;
        pauseWeddingMusic();
      } else {
        state.userPausedAudio = false;
        startWeddingMusic();
      }
    });
  }

  // Pause music automatically when tab is hidden; resume when visible if not paused by user
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (state.audioPlaying) {
        audioEl.pause();
      }
    } else if (state.doorsOpened && !state.userPausedAudio && state.audioPlaying) {
      audioEl.play().catch(() => {});
    }
  });

  /* ==========================================================================
     3. MARIGOLD & RED ROSE FALLING PETALS ENGINE
     ========================================================================== */
  const petalCanvas = document.getElementById("petalCanvas");
  const pCtx = petalCanvas ? petalCanvas.getContext("2d") : null;
  const petals = [];
  const PETAL_COLORS = [
    "#F59E0B", // Marigold Saffron
    "#FBBF24", // Golden Marigold
    "#D97706", // Deep Orange Marigold
    "#991B1B", // Crimson Rose
    "#B91C1C", // Sindoor Red Rose
    "#E11D48"  // Gulabi Rose
  ];

  function resizePetalCanvas() {
    if (!petalCanvas) return;
    petalCanvas.width = window.innerWidth;
    petalCanvas.height = window.innerHeight;
  }

  function createPetal(burstMode) {
    const w = petalCanvas ? petalCanvas.width : window.innerWidth;
    const h = petalCanvas ? petalCanvas.height : window.innerHeight;
    return {
      x: burstMode ? (w * 0.2 + Math.random() * w * 0.6) : Math.random() * w,
      y: burstMode ? (-20 - Math.random() * 140) : Math.random() * h,
      r: 5 + Math.random() * 7,
      vy: (burstMode ? 1.8 : 0.85) + Math.random() * 1.6,
      vx: -0.9 + Math.random() * 1.8,
      rot: Math.random() * Math.PI * 2,
      vRot: -0.03 + Math.random() * 0.06,
      swayPhase: Math.random() * Math.PI * 2,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      alpha: 0.75 + Math.random() * 0.25
    };
  }

  function initPetals() {
    if (!petalCanvas || !pCtx) return;
    resizePetalCanvas();
    window.addEventListener("resize", resizePetalCanvas, { passive: true });
    const initialCount = window.innerWidth < 600 ? 18 : 28;
    for (let i = 0; i < initialCount; i++) {
      petals.push(createPetal(false));
    }
    requestAnimationFrame(animatePetals);
  }

  function triggerPetalBurst(extraCount) {
    const maxAllowed = window.innerWidth < 600 ? 52 : 80;
    for (let i = 0; i < extraCount && petals.length < maxAllowed; i++) {
      petals.push(createPetal(true));
    }
  }

  function animatePetals() {
    if (!pCtx || !petalCanvas) return;
    pCtx.clearRect(0, 0, petalCanvas.width, petalCanvas.height);
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.swayPhase += 0.022;
      p.x += p.vx + Math.sin(p.swayPhase) * 0.45;
      p.y += p.vy;
      p.rot += p.vRot;

      if (p.y > petalCanvas.height + 24) {
        p.y = -18;
        p.x = Math.random() * petalCanvas.width;
      }
      if (p.x < -24) p.x = petalCanvas.width + 18;
      if (p.x > petalCanvas.width + 24) p.x = -18;

      pCtx.save();
      pCtx.translate(p.x, p.y);
      pCtx.rotate(p.rot);
      pCtx.globalAlpha = p.alpha;
      pCtx.fillStyle = p.color;
      pCtx.beginPath();
      pCtx.ellipse(0, 0, p.r, p.r * 0.62, 0, 0, Math.PI * 2);
      pCtx.fill();
      pCtx.restore();
    }
    requestAnimationFrame(animatePetals);
  }

  /* ==========================================================================
     4. 3D ROYAL DOORS & MULTI-LAYER GANESHA COURTYARD WALK-THROUGH PARALLAX
     ========================================================================== */
  function openCourtyardDoors() {
    if (state.doorsOpened) return;
    state.doorsOpened = true;

    // 1. Unlock native document scroll immediately so mobile touch scroll is 100% smooth
    document.body.classList.remove("gate-locked");

    // 2. Swing doors open in 3D, trigger golden light burst & multi-layer courtyard walk-through zoom
    if (courtyardHero) {
      courtyardHero.classList.add("doors-open", "burst-active");
    }

    // 3. Burst marigold + red rose petals
    triggerPetalBurst(28);

    // 4. Start background music at 50% volume
    startWeddingMusic();

    // 5. Redraw scratch card canvas so it is crisp when user scrolls down
    setTimeout(() => {
      initScratchCard();
    }, 350);
  }

  function replayCourtyardDoors() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!courtyardHero) return;

    courtyardHero.classList.remove("doors-open", "burst-active", "scrolling-active");
    if (courtyardParallaxScene) {
      courtyardParallaxScene.style.setProperty("--scroll-progress", "0");
    }
    state.doorsOpened = false;

    setTimeout(() => {
      openCourtyardDoors();
    }, 900);
  }

  // Bind Door Open Triggers (Button, Wax Seal, and 3D Door Leaves)
  if (openInvitationBtn) {
    openInvitationBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openCourtyardDoors();
    });
  }

  if (gateWaxSeal) {
    gateWaxSeal.addEventListener("click", (e) => {
      e.stopPropagation();
      openCourtyardDoors();
    });
    gateWaxSeal.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCourtyardDoors();
      }
    });
  }

  if (doors3DStage) {
    doors3DStage.addEventListener("click", () => {
      if (!state.doorsOpened) {
        openCourtyardDoors();
      }
    });
  }

  // "Explore Invitation" button inside the Ganesha Courtyard bottom plaque
  if (exploreInviteBtn && coupleScratchSection) {
    exploreInviteBtn.addEventListener("click", () => {
      coupleScratchSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // "Replay Door Opening" button
  if (replayDoorBtn) {
    replayDoorBtn.addEventListener("click", replayCourtyardDoors);
  }

  // Door Style Toggle Button in Topbar
  const doorStyleBtn = document.getElementById("doorStyleBtn");
  if (doorStyleBtn) {
    doorStyleBtn.addEventListener("click", () => {
      state.doorStyle = state.doorStyle === "royal" ? "villa" : "royal";
      document.body.classList.toggle("door-style-villa", state.doorStyle === "villa");
      showToast(
        state.doorStyle === "royal"
          ? "Royal Sindoor & Gold Kalash Doors Active"
          : "Royal Heritage Teak Finish Active"
      );
    });
  }

  /* ==========================================================================
     5. SCROLL-DRIVEN & INTERACTIVE TILT PARALLAX ON GANESHA COURTYARD
     Simulates walking deeper through the doorway arch as the user scrolls down
     ========================================================================== */
  let scrollTicking = false;
  let scrollIdleTimeout = null;

  function updateCourtyardScrollParallax() {
    scrollTicking = false;
    if (!courtyardHero || !courtyardParallaxScene) return;

    const scrollY = window.scrollY || window.pageYOffset || 0;
    const heroH = courtyardHero.offsetHeight || window.innerHeight;

    if (scrollY <= heroH * 1.15) {
      const progress = Math.max(0, Math.min(1, scrollY / (heroH * 0.85)));
      courtyardHero.classList.add("scrolling-active");
      courtyardParallaxScene.style.setProperty("--scroll-progress", progress.toFixed(3));

      clearTimeout(scrollIdleTimeout);
      scrollIdleTimeout = setTimeout(() => {
        courtyardHero.classList.remove("scrolling-active");
      }, 140);
    }

    // Update timeline fill progress
    updateTimelineProgress();
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateCourtyardScrollParallax);
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  // Subtle pointer/touch parallax tilt inside the Ganesha Courtyard
  if (courtyardHero && courtyardParallaxScene) {
    courtyardHero.addEventListener(
      "pointermove",
      (e) => {
        if (!state.doorsOpened) return;
        const rect = courtyardHero.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        courtyardParallaxScene.style.setProperty("--tilt-x", `${(nx * -14).toFixed(1)}px`);
        courtyardParallaxScene.style.setProperty("--tilt-y", `${(ny * -10).toFixed(1)}px`);
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     6. INTERACTIVE GOLD FOIL SCRATCH-TO-REVEAL DATE CARD
     ========================================================================== */
  const scratchCanvas = document.getElementById("scratchCanvas");
  const quickRevealBtn = document.getElementById("quickRevealBtn");
  let isScratching = false;

  function initScratchCard() {
    if (!scratchCanvas || state.scratchRevealed) return;
    const ctx = scratchCanvas.getContext("2d");
    if (!ctx) return;

    const w = scratchCanvas.width;
    const h = scratchCanvas.height;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, w, h);

    // Rich Metallic Gold Foil Gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#E6C465");
    grad.addColorStop(0.28, "#FFF2BA");
    grad.addColorStop(0.55, "#CFA33A");
    grad.addColorStop(0.8, "#F8E49B");
    grad.addColorStop(1, "#B38422");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle metallic shimmer lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.lineWidth = 1;
    for (let x = -h; x < w + h; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + h, h);
      ctx.stroke();
    }

    // Inner ornamental border
    ctx.strokeStyle = "rgba(92, 52, 12, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    // Prompt text on foil
    ctx.fillStyle = "#471D0A";
    ctx.font = "700 15px 'Cormorant Garamond', Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const promptTitle =
      state.lang === "hi"
        ? "✦ शुभ विवाह तिथि जानने हेतु स्क्रैच करें ✦"
        : "✦ SCRATCH TO REVEAL WEDDING DATE ✦";
    ctx.fillText(promptTitle, w / 2, h / 2 - 9);

    ctx.font = "500 11px 'Jost', sans-serif";
    ctx.fillStyle = "#683518";
    const promptSub =
      state.lang === "hi"
        ? "उंगली या माउस से सुनहरी परत हटाएं"
        : "Rub gently with your finger or mouse";
    ctx.fillText(promptSub, w / 2, h / 2 + 13);
  }

  function scratchAtPoint(clientX, clientY) {
    if (!scratchCanvas || state.scratchRevealed) return;
    const rect = scratchCanvas.getBoundingClientRect();
    const scaleX = scratchCanvas.width / rect.width;
    const scaleY = scratchCanvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    const ctx = scratchCanvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkScratchCompletion();
  }

  function checkScratchCompletion() {
    if (!scratchCanvas || state.scratchRevealed) return;
    const ctx = scratchCanvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height).data;
    let transparentPixels = 0;
    const totalSampled = imgData.length / 16;

    for (let i = 3; i < imgData.length; i += 16) {
      if (imgData[i] < 128) transparentPixels++;
    }

    if (transparentPixels / totalSampled > 0.4) {
      revealScratchCardCompletely();
    }
  }

  function revealScratchCardCompletely() {
    if (!scratchCanvas || state.scratchRevealed) return;
    state.scratchRevealed = true;
    scratchCanvas.classList.add("revealed");
    triggerPetalBurst(18);
    showToast(
      state.lang === "hi"
        ? "शुभ विवाह: मंगलवार, २२ फरवरी २०२२ ✨"
        : "Shubh Vivah: Tuesday, 22nd February 2022 ✨"
    );
  }

  if (scratchCanvas) {
    scratchCanvas.addEventListener("pointerdown", (e) => {
      isScratching = true;
      scratchAtPoint(e.clientX, e.clientY);
    });
    window.addEventListener("pointermove", (e) => {
      if (isScratching) {
        scratchAtPoint(e.clientX, e.clientY);
      }
    });
    window.addEventListener("pointerup", () => {
      isScratching = false;
    });
  }

  if (quickRevealBtn) {
    quickRevealBtn.addEventListener("click", revealScratchCardCompletely);
  }

  /* ==========================================================================
     7. LIVE 4-BOX COUNTDOWN TIMER
     ========================================================================== */
  function updateCountdown() {
    const targetISO =
      (CFG.wedding && CFG.wedding.previewFutureISO) || "2027-02-22T18:30:00+05:30";
    const targetTime = new Date(targetISO).getTime();
    const now = Date.now();
    const diff = Math.max(0, targetTime - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const elDays = document.getElementById("scDays");
    const elHours = document.getElementById("scHours");
    const elMins = document.getElementById("scMins");
    const elSecs = document.getElementById("scSecs");

    if (elDays) elDays.textContent = String(days).padStart(2, "0");
    if (elHours) elHours.textContent = String(hours).padStart(2, "0");
    if (elMins) elMins.textContent = String(mins).padStart(2, "0");
    if (elSecs) elSecs.textContent = String(secs).padStart(2, "0");
  }

  /* ==========================================================================
     8. RENDER FORMAL CARD, FUNCTIONS TIMELINE, INDIAN GALLERY & RSVP
     ========================================================================== */
  function pickText(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || "";
  }

  function renderFormalStationeryCard() {
    if (!CFG.couple || !CFG.invitationCard) return;
    const isBrideSide = state.side === "bride";
    const hostData = isBrideSide
      ? CFG.invitationCard.brideSideHost
      : CFG.invitationCard.groomSideHost;

    const firstPerson = isBrideSide ? CFG.couple.bride : CFG.couple.groom;
    const secondPerson = isBrideSide ? CFG.couple.groom : CFG.couple.bride;

    // Update topbar & wax seal initials
    const brandTitle = document.getElementById("brandTitle");
    if (brandTitle) {
      brandTitle.textContent = isBrideSide ? "NIDHI & SUMIT" : "SUMIT & NIDHI";
    }
    const sealChar1 = document.getElementById("sealChar1");
    const sealChar2 = document.getElementById("sealChar2");
    if (sealChar1) sealChar1.textContent = isBrideSide ? "N" : "S";
    if (sealChar2) sealChar2.textContent = isBrideSide ? "S" : "N";

    // Update Section 2 Couple Names
    const inviteCoupleNames = document.getElementById("inviteCoupleNames");
    if (inviteCoupleNames) {
      const n1 = pickText(firstPerson.firstName).toUpperCase();
      const n2 = pickText(secondPerson.firstName).toUpperCase();
      inviteCoupleNames.innerHTML = `<span>${n1}</span><span class="invite-amp">&amp;</span><span>${n2}</span>`;
    }

    // Update Section 3 Formal Card
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt("cardEldersLine", pickText(hostData.blessingsLine));
    setTxt("cardHostsLine", pickText(hostData.hostsLine));
    setTxt("cardInviteBody", pickText(hostData.inviteText));
    setTxt("cardPerson1Name", pickText(firstPerson.fullName));
    setTxt("cardPerson1Lineage", pickText(firstPerson.parents));
    setTxt("cardPerson2Name", pickText(secondPerson.fullName));
    setTxt("cardPerson2Lineage", pickText(secondPerson.parents));
    setTxt("cardDateHighlight", pickText(CFG.wedding.dateDisplay));
    setTxt("cardVenueHighlight", pickText(CFG.wedding.venueName));
    setTxt("cardAddressHighlight", pickText(CFG.wedding.venueAddress));
    setTxt("cardAwaitingLine", pickText(hostData.awaitingLine));
    setTxt("cardComplimentsLine", pickText(hostData.complimentsLine));
  }

  function renderFunctionsTimeline() {
    const listEl = document.getElementById("functionsList");
    if (!listEl || !Array.isArray(CFG.functions)) return;

    listEl.innerHTML = CFG.functions
      .map((fn) => {
        const subItems = Array.isArray(fn.subSchedule)
          ? `<div style="margin:8px 0 10px;display:flex;flex-wrap:wrap;gap:6px;">
              ${fn.subSchedule
                .map(
                  (s) =>
                    `<span class="fn-badge"><strong>${pickText(s.time)}</strong> · ${pickText(s.label)}</span>`
                )
                .join("")}
            </div>`
          : "";

        return `
          <article class="fn-card reveal visible">
            <div class="fn-top">
              <h3 class="fn-title">${pickText(fn.title)}</h3>
              <span class="fn-when">${pickText(fn.dayDate)} · ${pickText(fn.time)}</span>
            </div>
            <div class="fn-venue">📍 ${pickText(fn.venue)}</div>
            <p class="fn-note">${pickText(fn.subtitle)}</p>
            ${subItems}
            <div class="fn-meta">
              <span class="fn-badge">✨ ${pickText(fn.dressCode)}</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function updateTimelineProgress() {
    const container = document.getElementById("timelineContainer");
    const fill = document.getElementById("timelineFill");
    if (!container || !fill) return;
    const rect = container.getBoundingClientRect();
    const winH = window.innerHeight;
    const pct = Math.max(0, Math.min(100, ((winH * 0.65 - rect.top) / rect.height) * 100));
    fill.style.height = `${pct.toFixed(1)}%`;
  }

  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid || !Array.isArray(CFG.gallery)) return;

    grid.innerHTML = CFG.gallery
      .map(
        (item, idx) => `
        <figure class="gallery-item reveal visible" data-gallery-idx="${idx}" style="margin:0">
          <div class="gallery-thumb-wrap">
            <img
              src="${item.imageSrc}"
              alt="${pickText(item.title)}"
              class="gallery-thumb"
              loading="lazy"
              onerror="if(this.src!=='${item.imageFallback}')this.src='${item.imageFallback}';"
            >
          </div>
          <figcaption class="gallery-caption-bar">
            <div>
              <div class="gallery-caption-title">${pickText(item.title)}</div>
              <div style="font-size:12px;color:var(--ink-muted)">${pickText(item.caption)}</div>
            </div>
            <span class="gallery-zoom-icon">⤢</span>
          </figcaption>
        </figure>
      `
      )
      .join("");

    grid.querySelectorAll(".gallery-item").forEach((card) => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-gallery-idx") || "0", 10);
        openLightbox(idx);
      });
    });
  }

  function renderRSVP() {
    const rsvpList = document.getElementById("rsvpList");
    if (!rsvpList || !Array.isArray(CFG.rsvpContacts)) return;

    rsvpList.innerHTML = CFG.rsvpContacts
      .map(
        (c) => `
        <a href="tel:+${c.phoneClean}" class="rsvp-contact">
          <strong>${pickText(c.name)}</strong>
          <span>📞 ${c.phone}</span>
        </a>
      `
      )
      .join("");

    const closingMsg = document.getElementById("closingMessage");
    if (closingMsg) {
      closingMsg.textContent =
        state.lang === "hi"
          ? "आपकी स्नेहिल उपस्थिति एवं आशीर्वाद ही हमारे लिए सबसे बड़ा उपहार है।"
          : "We eagerly await the joy of celebrating these sacred moments with you and your family in South Goa.";
    }
  }

  /* ==========================================================================
     9. LIGHTBOX & LOCATION MODAL + CALENDAR (.ICS) + SHARE ACTIONS
     ========================================================================== */
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxStage = document.getElementById("lightboxStage");
  const lightboxCaption = document.getElementById("lightboxCaption");

  function openLightbox(index) {
    if (!Array.isArray(CFG.gallery) || !CFG.gallery.length) return;
    state.lightboxIndex = (index + CFG.gallery.length) % CFG.gallery.length;
    const item = CFG.gallery[state.lightboxIndex];
    if (lightboxStage) {
      lightboxStage.innerHTML = `<img src="${item.imageSrc}" alt="${pickText(item.title)}" onerror="if(this.src!=='${item.imageFallback}')this.src='${item.imageFallback}';">`;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = `${pickText(item.title)} — ${pickText(item.caption)}`;
    }
    if (lightboxModal) {
      lightboxModal.classList.add("open");
    }
  }

  document.getElementById("lightboxCloseBtn")?.addEventListener("click", () => {
    lightboxModal?.classList.remove("open");
  });
  document.getElementById("lightboxPrevBtn")?.addEventListener("click", () => {
    openLightbox(state.lightboxIndex - 1);
  });
  document.getElementById("lightboxNextBtn")?.addEventListener("click", () => {
    openLightbox(state.lightboxIndex + 1);
  });

  // Venue Location Modal
  const locationModal = document.getElementById("locationModal");
  document.getElementById("openLocationModalBtn")?.addEventListener("click", () => {
    locationModal?.classList.add("open");
  });
  document.getElementById("locationModalCloseBtn")?.addEventListener("click", () => {
    locationModal?.classList.remove("open");
  });

  // Close modals on backdrop click
  [locationModal, lightboxModal].forEach((modal) => {
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  });

  // Add to Calendar (.ics download)
  document.getElementById("addToCalBtn")?.addEventListener("click", () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Sumit & Nidhi Shubh Vivah//EN",
      "BEGIN:VEVENT",
      "SUMMARY:Sumit Vyas & Nidhi Dave — Shubh Vivah (Wedding)",
      "DTSTART:20220222T130000Z",
      "DTEND:20220222T180000Z",
      "LOCATION:Fairfield By Marriott Goa Benaulim, South Goa 403716",
      "DESCRIPTION:Shubh Vivah celebrations of Sumit Vyas & Nidhi Dave at Fairfield By Marriott Goa Benaulim.",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Sumit-Nidhi-Wedding-Invite.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Calendar invite downloaded 📅");
  });

  // Share, WhatsApp, Copy Link, Save PDF, Back to Top
  document.getElementById("shareBtn")?.addEventListener("click", async () => {
    const shareData = {
      title: "Sumit Vyas & Nidhi Dave — Wedding Invitation",
      text: "Join us for the Shubh Vivah of Sumit Vyas & Nidhi Dave on 22nd February 2022 at Fairfield By Marriott Goa Benaulim!",
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {}
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast("Invitation link copied!");
    }
  });

  document.getElementById("whatsappBtn")?.addEventListener("click", () => {
    const msg = encodeURIComponent(
      `॥ ॐ श्री गणेशाय नमः ॥ You are cordially invited to the Shubh Vivah of Sumit Vyas & Nidhi Dave on Tuesday, 22nd Feb 2022 at Fairfield By Marriott Goa Benaulim: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank", "noopener");
  });

  document.getElementById("copyLinkBtn")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("Invitation link copied to clipboard ✨");
  });

  document.getElementById("savePdfBtn")?.addEventListener("click", () => {
    window.print();
  });

  document.getElementById("backToTopBtn")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ==========================================================================
     10. LANGUAGE (EN / HI) & FAMILY SIDE (#BRIDE / #GROOM) TOGGLES
     ========================================================================== */
  const langToggleBtn = document.querySelector("[data-lang-toggle]");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      state.lang = state.lang === "en" ? "hi" : "en";
      langToggleBtn.textContent = state.lang === "en" ? "हिंदी" : "English";

      // Update Hero Courtyard Plaque & Door Button Labels
      const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };
      setTxt(
        "openInvitationBtnText",
        state.lang === "hi" ? "निमंत्रण खोलें" : "Open Invitation"
      );
      setTxt(
        "celebrationBeginsTitle",
        state.lang === "hi" ? "शुभ उत्सव का शुभारंभ" : "The Celebration Begins"
      );
      setTxt(
        "celebrationBeginsSub",
        state.lang === "hi"
          ? "सुमित एवं निधि के पावन विवाह समारोह में पधारें"
          : "Enter the Sacred Celebrations of Sumit & Nidhi"
      );
      setTxt(
        "exploreInviteBtnText",
        state.lang === "hi" ? "निमंत्रण देखें" : "Explore Invitation"
      );

      renderFormalStationeryCard();
      renderFunctionsTimeline();
      renderGallery();
      renderRSVP();
      updateAudioUI();
      if (!state.scratchRevealed) {
        initScratchCard();
      }
    });
  }

  const sideToggleBtn = document.querySelector("[data-side-toggle]");
  if (sideToggleBtn) {
    sideToggleBtn.textContent = state.side === "bride" ? "#groom" : "#bride";
    sideToggleBtn.addEventListener("click", () => {
      state.side = state.side === "bride" ? "groom" : "bride";
      sideToggleBtn.textContent = state.side === "bride" ? "#groom" : "#bride";
      history.replaceState(null, "", state.side === "bride" ? "#bride" : "#groom");
      renderFormalStationeryCard();
      showToast(
        state.side === "bride"
          ? "Viewing Bride's Family (Dave Parivar) Edition"
          : "Viewing Groom's Family (Vyas Parivar) Edition"
      );
    });
  }

  /* ==========================================================================
     11. INTERSECTION OBSERVER FOR SCROLL REVEALS & INITIALIZATION
     ========================================================================== */
  function initScrollReveals() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => obs.observe(el));
  }

  // Initialize Everything
  initPetals();
  initScratchCard();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  renderFormalStationeryCard();
  renderFunctionsTimeline();
  renderGallery();
  renderRSVP();
  initScrollReveals();
})();
