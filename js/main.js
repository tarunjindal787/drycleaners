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

  /* ---------- Scroll cue ---------- */
  var scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", function () {
      var target = document.getElementById("services");
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
