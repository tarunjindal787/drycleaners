(function () {
  "use strict";

  var reduceMotion = window.__reduceMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Hero mouse parallax ---------- */
  var hero = document.querySelector(".hero");
  var heroContent = document.getElementById("heroContent");
  if (!reduceMotion && hero && heroContent) {
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

  /* ---------- Hero: scroll-linked scale (depth effect as the hero scrolls away) ---------- */
  var heroMedia = document.querySelector(".hero-media");
  if (!reduceMotion && hero && heroMedia && window.matchMedia("(min-width: 760px)").matches) {
    var heroScaleTicking = false;
    function updateHeroScale() {
      var progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / window.innerHeight));
      heroMedia.style.transform = "scale(" + (1 + progress * 0.14) + ")";
      heroMedia.style.opacity = String(1 - progress * 0.35);
      heroScaleTicking = false;
    }
    document.addEventListener("scroll", function () {
      if (!heroScaleTicking) { requestAnimationFrame(updateHeroScale); heroScaleTicking = true; }
    }, { passive: true });
    updateHeroScale();
  }

  /* ---------- Hero video: slow playback, autoplay-failure fallback ---------- */
  var video = document.getElementById("heroVideo");
  if (video) {
    video.playbackRate = 0.65;
    function showStaticFallback() { hero.classList.add("hero--static"); }
    video.addEventListener("error", showStaticFallback);
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(showStaticFallback);
    }
  }

  /* ---------- Garment explorer: category tabs ---------- */
  var garmentTabs = document.querySelectorAll(".garment-tab");
  var garmentPanels = document.querySelectorAll(".garment-panel");
  function setGarmentPanelState(panel, active) {
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-hidden", active ? "false" : "true");
    panel.querySelectorAll(".garment-hotspot").forEach(function (spot) {
      if (active) spot.removeAttribute("tabindex"); else spot.setAttribute("tabindex", "-1");
    });
  }
  garmentPanels.forEach(function (panel) { setGarmentPanelState(panel, panel.classList.contains("is-active")); });
  if (garmentTabs.length) {
    garmentTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        garmentTabs.forEach(function (t) { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        var targetNote = document.getElementById("garmentNote");
        if (targetNote) targetNote.classList.remove("is-visible");
        garmentPanels.forEach(function (panel) {
          setGarmentPanelState(panel, panel.dataset.panel === tab.dataset.target);
        });
      });
    });
  }

  /* ---------- Garment showcase: tilt + hotspots ---------- */
  var stage = document.getElementById("garmentStage");
  if (stage) {
    if (!reduceMotion) {
      stage.addEventListener("mousemove", function (e) {
        var rect = stage.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        stage.style.transform = "perspective(1000px) rotateX(" + (py * -5) + "deg) rotateY(" + (px * 5) + "deg)";
      });
      stage.addEventListener("mouseleave", function () { stage.style.transform = ""; });
    }
    var note = document.getElementById("garmentNote");
    stage.querySelectorAll(".garment-hotspot").forEach(function (spot) {
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

    /* Drag left/right to switch garment category - makes the "Drag" cursor label real. */
    var dragStartX = null;
    stage.addEventListener("mousedown", function (e) { dragStartX = e.clientX; });
    stage.addEventListener("mouseup", function (e) {
      if (dragStartX === null) return;
      var dx = e.clientX - dragStartX;
      dragStartX = null;
      if (Math.abs(dx) < 50) return;
      var tabs = Array.prototype.slice.call(document.querySelectorAll(".garment-tab"));
      var activeIdx = tabs.findIndex(function (t) { return t.classList.contains("is-active"); });
      if (activeIdx === -1) return;
      var nextIdx = dx < 0 ? (activeIdx + 1) % tabs.length : (activeIdx - 1 + tabs.length) % tabs.length;
      tabs[nextIdx].click();
    });
  }

  /* ---------- Service explorer ---------- */
  var explorerTabs = document.querySelectorAll(".explorer-tab");
  var explorerImg = document.getElementById("explorerImg");
  var explorerTitle = document.getElementById("explorerTitle");
  var explorerDesc = document.getElementById("explorerDesc");
  var explorerLink = document.getElementById("explorerLink");
  if (explorerTabs.length) {
    var loadedImages = {};
    explorerTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        explorerTabs.forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        var src = tab.dataset.image;
        if (!loadedImages[src]) {
          var img = document.createElement("img");
          img.src = src;
          img.alt = tab.dataset.title;
          explorerImg.parentNode.insertBefore(img, explorerImg.nextSibling);
          loadedImages[src] = img;
          requestAnimationFrame(function () { img.classList.add("is-shown"); });
          img.addEventListener("transitionend", function cleanup() {
            Array.prototype.slice.call(explorerImg.parentNode.querySelectorAll("img")).forEach(function (other) {
              if (other !== img) other.remove();
            });
            img.removeEventListener("transitionend", cleanup);
          });
          explorerImg = img;
        } else {
          Array.prototype.slice.call(explorerImg.parentNode.querySelectorAll("img")).forEach(function (other) {
            other.classList.toggle("is-shown", other === loadedImages[src]);
          });
          explorerImg = loadedImages[src];
        }

        explorerTitle.innerHTML = tab.dataset.title;
        explorerDesc.textContent = tab.dataset.desc;
        explorerLink.href = tab.dataset.href;
      });
    });
  }

  /* ---------- Process section: scroll-driven circular progress ring ---------- */
  (function () {
    var processSection = document.getElementById("process");
    var ringFill = document.getElementById("processRingFill");
    var ringLabel = document.getElementById("processRingLabel");
    if (!processSection || !ringFill || !ringLabel) return;
    var CIRCUMFERENCE = 169.6;
    var ringTicking = false;
    function updateRing() {
      var rect = processSection.getBoundingClientRect();
      var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      progress = Math.min(1, Math.max(0, progress));
      ringFill.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress));
      ringLabel.textContent = Math.round(progress * 100) + "%";
      ringTicking = false;
    }
    document.addEventListener("scroll", function () {
      if (!ringTicking) { requestAnimationFrame(updateRing); ringTicking = true; }
    }, { passive: true });
    updateRing();
  })();

  /* ---------- Fabric motion parallax ---------- */
  if (!reduceMotion) {
    var fabricSection = document.querySelector(".fabric-motion");
    var fabricLayers = document.querySelectorAll(".fabric-layer");
    if (fabricSection && fabricLayers.length) {
      var ticking = false;
      function updateFabricParallax() {
        var rect = fabricSection.getBoundingClientRect();
        var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        fabricLayers.forEach(function (layer) {
          var speed = parseFloat(layer.dataset.speed) || 0.2;
          var offset = (progress - 0.5) * 120 * speed;
          layer.style.transform = "translateY(" + offset + "px)";
        });
        ticking = false;
      }
      document.addEventListener("scroll", function () {
        if (!ticking) {
          requestAnimationFrame(updateFabricParallax);
          ticking = true;
        }
      }, { passive: true });
      updateFabricParallax();
    }
  }
})();
