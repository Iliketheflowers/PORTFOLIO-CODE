const section = document.getElementById("scrollStrip");
const frame = document.getElementById("stripFrame");
const track = document.getElementById("stripTrack");

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function updateStrip() {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  // progress 0 → 1 while scrolling through section
  const total = rect.height - vh;
  const scrolled = -rect.top;
  const p = total <= 0 ? 0 : clamp(scrolled / total, 0, 1);

  const frameW = frame.clientWidth;
  const trackW = track.scrollWidth;

  // how far the track needs to travel
  const travel = Math.max(0, trackW - frameW);

  track.style.transform = `translateX(${-travel * p}px)`;
}

window.addEventListener("load", updateStrip);
window.addEventListener("resize", updateStrip);
window.addEventListener("scroll", updateStrip, { passive: true });
