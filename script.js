// Hover sound for all links and buttons
const hoverSound = document.getElementById("hover-sound");
document.querySelectorAll("a, .button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Floating bats animation delay randomness
const bats = document.querySelectorAll(".bat");
bats.forEach(bat => {
  bat.style.animationDelay = `${Math.random() * 5}s`;
});

// Scroll fade-in for sections
const faders = document.querySelectorAll(".fade-in");
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

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
