// Basic interactions: mobile menu, theme toggle, contact feedback
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const themeToggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

yearEl.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // Fake success for static hosting; replace with real endpoint if needed.
  formStatus.textContent =
    "Thanks, " + data.name + "! Your message has been sent.";
  form.reset();
  setTimeout(() => (formStatus.textContent = ""), 3500);
});

/* for sound */
function toggleSound() {
  const audio = document.getElementById("why-audio");
  const btn = document.getElementById("playPauseBtn");

  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸ Pause"; // change to pause only after play starts
  } else {
    audio.pause();
    btn.textContent = "▶ Play"; // back to play
  }
}

// when audio ends, reset button to "Play"
document.getElementById("why-audio").addEventListener("ended", () => {
  document.getElementById("playPauseBtn").textContent = "▶ Play";
});
