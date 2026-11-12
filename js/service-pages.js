(function () {
  "use strict";

  var reduceMotion = window.__reduceMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Garment viewer: tilt + hotspots (reused across service pages) ---------- */
  document.querySelectorAll(".garment-viewer").forEach(function (stage) {
    if (!reduceMotion) {
      stage.addEventListener("mousemove", function (e) {
        var rect = stage.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        stage.style.transform = "perspective(1000px) rotateX(" + (py * -4) + "deg) rotateY(" + (px * 4) + "deg)";
      });
      stage.addEventListener("mouseleave", function () { stage.style.transform = ""; });
    }
    var note = stage.querySelector(".gv-note");
    if (!note) return;
    stage.querySelectorAll(".gv-hotspot").forEach(function (spot) {
      function show() { note.textContent = spot.dataset.note; note.classList.add("is-visible"); }
      function hide() { note.classList.remove("is-visible"); }
      spot.addEventListener("mouseenter", show);
      spot.addEventListener("focus", show);
      spot.addEventListener("mouseleave", hide);
      spot.addEventListener("blur", hide);
      spot.addEventListener("click", function () {
        var isShown = note.classList.contains("is-visible") && note.textContent === spot.dataset.note;
        if (isShown) hide(); else show();
      });
    });
  });

  /* ---------- Scroll-triggered reveals for stitch line / wedding fade ---------- */
  var scrollTargets = document.querySelectorAll(".stitch-divider, .wedding-break");
  if (scrollTargets.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      scrollTargets.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      scrollTargets.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Measuring tape: scroll-linked, not a passive marquee ---------- */
  var tape = document.querySelector(".tape-measure");
  var tapeStrip = document.querySelector(".tape-strip");
  if (tape && tapeStrip) {
    var tapeTicks = tapeStrip.querySelectorAll("span");
    var tapeTicking = false;
    function updateTape() {
      var rect = tape.getBoundingClientRect();
      var centerProgress = (window.innerHeight / 2 - rect.top) / Math.max(1, rect.height);
      var offset = reduceMotion ? 0 : (centerProgress - 0.5) * 160;
      tapeStrip.style.transform = "translateX(" + (-offset) + "px)";
      var activeIdx = Math.round(tapeTicks.length * Math.min(1, Math.max(0, centerProgress)));
      tapeTicks.forEach(function (tick, i) {
        tick.classList.toggle("is-marker", i === activeIdx);
      });
      tapeTicking = false;
    }
    document.addEventListener("scroll", function () {
      if (!tapeTicking) { requestAnimationFrame(updateTape); tapeTicking = true; }
    }, { passive: true });
    updateTape();
  }

  /* ---------- Corporate category switcher ---------- */
  var corpTabs = document.querySelectorAll(".corp-tab");
  var corpImg = document.getElementById("corpMediaImg");
  if (corpTabs.length) {
    corpTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        corpTabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-expanded", "false"); });
        tab.classList.add("is-active");
        tab.setAttribute("aria-expanded", "true");
        if (corpImg && tab.dataset.caption) corpImg.alt = tab.dataset.caption;
      });
    });
  }
})();
