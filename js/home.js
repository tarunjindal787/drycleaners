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
