(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.__reduceMotion = reduceMotion;

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  var fixedCall = document.getElementById("fixedCall");
  var footer = document.querySelector(".site-footer");
  var hero = document.querySelector(".hero, .page-hero");

  function onScroll() {
    var scrolled = window.scrollY > 60;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    var pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : scrolled;
    var overFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
    if (fixedCall) fixedCall.classList.toggle("is-visible", pastHero && !overFooter);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link ---------- */
  (function () {
    var section = document.body.getAttribute("data-section");
    if (!section) return;
    document.querySelectorAll('[data-nav="' + section + '"]').forEach(function (a) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    });
  })();

  /* ---------- Mega menu image preview (desktop hover) ---------- */
  document.querySelectorAll(".mega-menu-links a[data-preview]").forEach(function (link) {
    link.addEventListener("mouseenter", function () { showMegaPreview(link.dataset.preview); });
    link.addEventListener("focus", function () { showMegaPreview(link.dataset.preview); });
  });
  function showMegaPreview(key) {
    var imgs = document.querySelectorAll(".mega-menu-preview img[data-key]");
    var caption = document.getElementById("megaPreviewCaption");
    imgs.forEach(function (img) {
      img.classList.toggle("is-shown", img.dataset.key === key);
      if (img.dataset.key === key && caption) caption.textContent = img.alt;
    });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var navBackdrop = document.getElementById("navBackdrop");

  function closeNav() {
    if (!navToggle) return;
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
  if (navToggle) {
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

  /* ---------- FAQ accordion (used on /faq/ and any page with .accordion) ---------- */
  document.querySelectorAll(".accordion-item").forEach(function (item) {
    var trigger = item.querySelector(".accordion-trigger");
    var panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;
    panel.setAttribute("role", "region");
    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- Gallery lightbox (used anywhere .gallery-item + #lightbox exist) ---------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = document.getElementById("lightbox");
  if (lightbox && galleryItems.length) {
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
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
    });
    var touchStartX = null;
    lightbox.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (touchStartX === null) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { if (dx < 0) showImage(currentIndex + 1); else showImage(currentIndex - 1); }
      touchStartX = null;
    }, { passive: true });
  }

  /* ---------- Advanced cursor (desktop-only; native cursor is never hidden) ---------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    var follower = document.createElement("div");
    follower.id = "cursorFollow";
    follower.setAttribute("aria-hidden", "true");
    document.body.appendChild(follower);
    var curX = 0, curY = 0, curRaf = null;
    document.addEventListener("mousemove", function (e) {
      curX = e.clientX; curY = e.clientY;
      if (!curRaf) {
        curRaf = requestAnimationFrame(function () {
          follower.style.left = curX + "px";
          follower.style.top = curY + "px";
          curRaf = null;
        });
      }
    });
    function bindCursor(selector, label) {
      document.querySelectorAll(selector).forEach(function (el) {
        el.addEventListener("mouseenter", function () { follower.textContent = label; follower.classList.add("is-visible"); });
        el.addEventListener("mouseleave", function () { follower.classList.remove("is-visible"); });
      });
    }
    bindCursor(".gallery-item, .related-card, .service-hub-card, .service-row-media, .corp-media", "View");
    bindCursor(".garment-viewer", "Explore");
    bindCursor(".garment-stage", "Drag");
    bindCursor(".filmstrip-item", "Image");
  }

  /* ---------- Magnetic buttons (desktop-only, primary CTAs) ---------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".btn-primary, .btn-gold").forEach(function (btn) {
      btn.classList.add("btn-magnetic");
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var relX = e.clientX - (rect.left + rect.width / 2);
        var relY = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = "translate(" + (relX * 0.22) + "px, " + (relY * 0.3) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });
  }

  /* ---------- Branded page transition ---------- */
  (function () {
    var overlay = document.createElement("div");
    overlay.id = "pageTransition";
    document.body.appendChild(overlay);
    var DURATION = reduceMotion ? 1 : 320;

    function setClip(pct) {
      overlay.style.clipPath = "circle(" + pct + "% at var(--origin-x, 50%) var(--origin-y, 50%))";
    }
    // Arrive: start fully covered (no transition), then reveal.
    overlay.style.transition = "none";
    setClip(140);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.style.transition = "clip-path " + (reduceMotion ? 1 : 420) + "ms var(--ease)";
        setClip(0);
      });
    });

    document.addEventListener("click", function (e) {
      var a = e.target.closest("a[href]");
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0 ||
          href.indexOf("http://") === 0 || href.indexOf("https://") === 0 ||
          a.target === "_blank" || a.hasAttribute("download") ||
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      e.preventDefault();
      overlay.style.setProperty("--origin-x", e.clientX + "px");
      overlay.style.setProperty("--origin-y", e.clientY + "px");
      overlay.style.transition = "clip-path " + DURATION + "ms var(--ease)";
      setClip(140);
      setTimeout(function () { window.location.href = href; }, DURATION);
    });
  })();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
