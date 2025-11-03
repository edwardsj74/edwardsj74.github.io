// ===========================================
// CASTLEVANIA CHRONICLES — SCRIPT.JS
// Author: Jordan Edwards
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     Smooth Scroll for Landing Buttons
     ============================ */
  const buttons = document.querySelectorAll(".landing-buttons .button");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ============================
     Fade-In Elements on Scroll
     ============================ */
  const faders = document.querySelectorAll(".fade-in, .subtitle, .landing-buttons .button, .timeline-grid .event, .games-grid .card");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  /* ============================
     Flickering Title Enhancement
     ============================ */
  const flickerTitle = document.querySelector("header h1");
  if (flickerTitle) {
    setInterval(() => {
      flickerTitle.style.opacity = (Math.random() > 0.8) ? 0.4 : 1;
    }, 200);
  }

  /* ============================
     Optional: Add subtle hover glow to cards & events dynamically
     ============================ */
  const hoverElements = document.querySelectorAll(".timeline-grid .event, .games-grid .card");
  hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.boxShadow = "0 0 25px crimson, 0 0 40px red";
    });
    el.addEventListener("mouseleave", () => {
      el.style.boxShadow = "0 0 15px #300";
    });
  });

  /* ============================
     Optional: Ambient Glow Flicker for Buttons
     ============================ */
  const landingButtons = document.querySelectorAll(".landing-buttons .button");
  landingButtons.forEach(btn => {
    setInterval(() => {
      if (Math.random() > 0.85) {
        btn.style.boxShadow = "0 0 25px crimson, 0 0 40px red";
      } else {
        btn.style.boxShadow = "0 0 10px #300";
      }
    }, 500);
  });

});
