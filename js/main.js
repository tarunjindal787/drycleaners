(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  var fixedCall = document.getElementById("fixedCall");
  var hero = document.querySelector(".hero");
  var footer = document.querySelector(".site-footer");

  function onScroll() {
    var scrolled = window.scrollY > 60;
    header.classList.toggle("is-scrolled", scrolled);

    var pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : scrolled;
    var overFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
    fixedCall.classList.toggle("is-visible", pastHero && !overFooter);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var navBackdrop = document.getElementById("navBackdrop");

  function closeNav() {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    mainNav.classList.remove("is-open");
    navBackdrop.classList.remove("is-visible");
    document.body.style.overflow = "";
  }
  function openNav() {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    mainNav.classList.add("is-open");
    navBackdrop.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }
  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeNav(); else openNav();
  });
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
  navBackdrop.addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero cinematic scene sync ---------- */
  (function () {
    var video = document.getElementById("heroVideo");
    var headlineEl = document.getElementById("heroHeadline");
    var subEl = document.getElementById("heroSub");
    var sceneCurrentEl = document.getElementById("sceneCurrent");
    var sceneFillEl = document.getElementById("sceneFill");
    if (!video || !headlineEl || !subEl) return;

    /* Slow playback so the ~10s source clip stretches to ~15.4s, giving each
       scene's text enough time to be read comfortably. Scene "start" values
       below are native-media timestamps (video.currentTime), which playbackRate
       does not change, so they stay correct at any speed. */
    video.playbackRate = 0.65;

    /* Editable scene config: each "start" is the real timestamp (seconds) where
       that beat begins in assets/hero/hero-video.mp4, mapped by eye against the
       actual footage (closet wide shot -> fabric/collar close-up -> steam
       pressing -> hand-finishing/boxing -> back to the closet for a seamless
       loop). Adjust "start" values here if the source video is ever re-cut. */
    var scenes = [
      { start: 0.0, headline: "Ready To Make An Impression.", sub: "Discover a better standard of garment care." },
      { start: 2.0, headline: "Every Thread. A Story.", sub: "Exceptional care begins with attention to every detail." },
      { start: 4.3, headline: "Perfection, Pressed In.", sub: "A refined finish that makes every detail count." },
      { start: 6.1, headline: "Care, Without Compromise.", sub: "Every garment receives the attention it deserves." },
      { start: 8.3, headline: "Precision In Every Detail.", sub: "Thoughtful care. Expert handling. Beautiful results." }
    ];

    function buildWords(text) {
      return text.split(" ").map(function (word, i, arr) {
        var isLast = i === arr.length - 1;
        return '<span class="word' + (isLast ? " word--accent" : "") + '" style="--i:' + i + '">' + word + "</span>";
      }).join(" ");
    }

    var pending = 0;
    var exitTimer = null;

    function applyScene(i) {
      headlineEl.innerHTML = buildWords(scenes[i].headline);
      subEl.textContent = scenes[i].sub;
      void headlineEl.offsetWidth; /* force reflow so the entrance transition replays */
      headlineEl.classList.add("is-active");
      subEl.classList.add("is-active");
      if (sceneCurrentEl) sceneCurrentEl.textContent = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
    }

    function setScene(i) {
      if (i === pending) return;
      pending = i;
      if (exitTimer) clearTimeout(exitTimer);
      headlineEl.classList.remove("is-active");
      subEl.classList.remove("is-active");
      exitTimer = setTimeout(function () {
        applyScene(i);
        exitTimer = null;
      }, 380);
    }

    function sceneIndexForTime(t) {
      var idx = 0;
      for (var i = 0; i < scenes.length; i++) {
        if (t >= scenes[i].start) idx = i;
      }
      return idx;
    }

    video.addEventListener("timeupdate", function () {
      var duration = video.duration;
      if (!duration || isNaN(duration)) return;
      var idx = sceneIndexForTime(video.currentTime);
      setScene(idx);
      if (sceneFillEl) {
        var sceneStart = scenes[idx].start;
        var sceneEnd = idx + 1 < scenes.length ? scenes[idx + 1].start : duration;
        var progress = (video.currentTime - sceneStart) / (sceneEnd - sceneStart);
        sceneFillEl.style.width = Math.min(100, Math.max(0, progress * 100)) + "%";
      }
    });

    /* Fallback: if the video can't load or autoplay is blocked, drop to a
       static poster-backed hero with the first scene's text already shown. */
    function showStaticFallback() {
      hero.classList.add("hero--static");
    }
    video.addEventListener("error", showStaticFallback);
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(showStaticFallback);
    }
  })();

  /* ---------- Hero mouse parallax ---------- */
  if (!reduceMotion) {
    var heroContent = document.getElementById("heroContent");
    if (heroContent && hero) {
      var rafId = null;
      hero.addEventListener("mousemove", function (e) {
        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          var rect = hero.getBoundingClientRect();
          var relX = (e.clientX - rect.left) / rect.width - 0.5;
          var relY = (e.clientY - rect.top) / rect.height - 0.5;
          heroContent.style.transform = "translate(" + (relX * -14) + "px, " + (relY * -10) + "px)";
          rafId = null;
        });
      });
      hero.addEventListener("mouseleave", function () {
        heroContent.style.transform = "translate(0, 0)";
      });
    }
  }

  /* ---------- Subtle 3D tilt on service / gallery tiles ---------- */
  if (!reduceMotion) {
    var tiltEls = document.querySelectorAll(".service-tile");
    tiltEls.forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = "perspective(900px) rotateX(" + (py * -4) + "deg) rotateY(" + (px * 4) + "deg)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var currentIndex = 0;
  var lastFocused = null;

  function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    var item = galleryItems[currentIndex];
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.dataset.caption || "";
    lightboxCaption.textContent = item.dataset.caption || "";
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () { openLightbox(index); });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { showImage(currentIndex - 1); });
  lightboxNext.addEventListener("click", function () { showImage(currentIndex + 1); });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });

  /* touch swipe */
  var touchStartX = null;
  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) showImage(currentIndex + 1); else showImage(currentIndex - 1);
    }
    touchStartX = null;
  }, { passive: true });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
