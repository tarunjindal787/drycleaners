(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero video scene sync ---------- */
  (function () {
    var video = document.getElementById("heroVideo");
    var headlineEl = document.getElementById("heroHeadline");
    var subEl = document.getElementById("heroSub");
    if (!video || !headlineEl || !subEl) return;

    var scenes = [
      { headline: "Care That Begins With <em>Excellence</em>.", sub: "A better standard of care for the wardrobe you love." },
      { headline: "Every Fabric Deserves <em>Attention</em>.", sub: "Gentle handling and precision for every delicate detail." },
      { headline: "Precision In Every <em>Press</em>.", sub: "Professional finishing that brings every garment back to life." },
      { headline: "Freshness, Beautifully <em>Finished</em>.", sub: "Thoughtful garment care, ready for collection." },
      { headline: "Look Sharp. Feel <em>Exceptional</em>.", sub: "Premium garment care that fits effortlessly into your routine." }
    ];

    var currentScene = 0;
    var pendingScene = 0;
    var transitionTimer = null;
    function applyScene(i) {
      headlineEl.innerHTML = scenes[i].headline;
      subEl.textContent = scenes[i].sub;
    }
    applyScene(0); // scene 1 shows immediately, no fade, no wait on video/JS timing

    if (reduceMotion) return; // static headline only; video still autoplays/loops natively

    function setScene(i) {
      if (i === pendingScene) return;
      pendingScene = i;
      if (transitionTimer) clearTimeout(transitionTimer); // cancel any in-flight transition and retarget, so a scene request can never be silently dropped near the loop boundary
      headlineEl.classList.add("is-changing");
      subEl.classList.add("is-changing");
      transitionTimer = setTimeout(function () {
        applyScene(i);
        currentScene = i;
        headlineEl.classList.remove("is-changing");
        subEl.classList.remove("is-changing");
        headlineEl.classList.add("is-entering");
        subEl.classList.add("is-entering");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            headlineEl.classList.remove("is-entering");
            subEl.classList.remove("is-entering");
          });
        });
        transitionTimer = null;
      }, 380);
    }

    video.addEventListener("timeupdate", function () {
      var duration = video.duration;
      if (!duration || isNaN(duration)) return;
      var sceneLen = duration / scenes.length;
      var idx = Math.min(scenes.length - 1, Math.floor(video.currentTime / sceneLen));
      setScene(idx);
    });
  })();

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

  /* ---------- Scroll cue ---------- */
  var scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", function () {
      var target = document.getElementById("about");
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

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

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    panel.setAttribute("role", "region");
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

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

  /* ---------- Quick-copy contact details ---------- */
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    var label = btn.querySelector(".copy-btn-label");
    var defaultLabel = label.textContent;
    btn.addEventListener("click", function () {
      var value = btn.dataset.copy;
      var done = function () {
        label.textContent = "Copied";
        btn.classList.add("is-copied");
        setTimeout(function () {
          label.textContent = defaultLabel;
          btn.classList.remove("is-copied");
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, done);
      } else {
        var temp = document.createElement("textarea");
        temp.value = value;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        try { document.execCommand("copy"); } catch (err) { /* no-op */ }
        document.body.removeChild(temp);
        done();
      }
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
