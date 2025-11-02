/* ===========================================
   CASTLEVANIA CHRONICLES — SCRIPT.JS
   Author: Jordan Edwards
   =========================================== */

/* ========== PAGE LOAD FADE EFFECT ========== */
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in, .overlay-box');
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, 300 * index);
  });

  highlightCurrentPage();
});

/* ========== SCROLL ANIMATIONS ========== */
window.addEventListener("scroll", () => {
  const fadeIns = document.querySelectorAll('.fade-in');
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

/* Add fade-in transition styles dynamically */
const style = document.createElement('style');
style.textContent = `
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}
.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);

/* ========== NAVIGATION HIGHLIGHT ========== */
function highlightCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === path || (path === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ========== GAME PAGE INTERACTIVITY ========== */
/* Adds hover zoom and small info reveal for game cards */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      const info = card.querySelector(".info");
      if (info) info.classList.add("visible");
    });
    card.addEventListener("mouseleave", () => {
      const info = card.querySelector(".info");
      if (info) info.classList.remove("visible");
    });
  });
});

/* Add styles for hover info if not already in CSS */
const gameStyle = document.createElement('style');
gameStyle.textContent = `
.card .info {
  opacity: 0;
  transition: opacity 0.5s ease;
  font-size: 0.9em;
  color: #ccc;
}
.card .info.visible {
  opacity: 1;
}
`;
document.head.appendChild(gameStyle);

/* ========== OPTIONAL SPOOKY SOUND TOGGLE ========== */
const soundToggle = document.createElement("button");
soundToggle.textContent = "🔇 Sound Off";
soundToggle.classList.add("button");
soundToggle.style.position = "fixed";
soundToggle.style.bottom = "15px";
soundToggle.style.right = "15px";
soundToggle.style.zIndex = "1000";
soundToggle.style.opacity = "0.7";
soundToggle.style.cursor = "pointer";
soundToggle.style.background = "rgba(30,0,0,0.7)";
soundToggle.style.border = "1px solid #b30000";

document.body.appendChild(soundToggle);

let spookyAudio = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_86edb52a2c.mp3?filename=dark-horror-ambient-6116.mp3");
spookyAudio.loop = true;
let soundEnabled = false;

soundToggle.addEventListener("click", () => {
  if (!soundEnabled) {
    spookyAudio.play();
    soundToggle.textContent = "🔊 Sound On";
    soundEnabled = true;
  } else {
    spookyAudio.pause();
    soundToggle.textContent = "🔇 Sound Off";
    soundEnabled = false
