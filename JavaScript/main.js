console.log("scroll-story JS loaded");

const panels = Array.from(document.querySelectorAll(".panel"));
const steps = Array.from(document.querySelectorAll(".scroll-story__steps .step"));

function setActive(index){
  panels.forEach((p, i) => {
    p.classList.remove("is-active", "is-left-1", "is-left-2");

    if (i === index) p.classList.add("is-active");
    if (i === index - 1) p.classList.add("is-left-1");
    if (i === index - 2) p.classList.add("is-left-2");
  });
}

if (steps.length === 0) {
  console.warn("No .step elements found. Add .scroll-story__steps with .step divs.");
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const idx = steps.indexOf(entry.target);
    if (idx !== -1) setActive(idx);
  });
}, { threshold: 0.6 });

steps.forEach(step => io.observe(step));


// reveal portrait when scrolled into view
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".reveal-right");

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target); // animate once
      });
    },
    {
      threshold: 0.25,          // how much must be visible
      rootMargin: "0px 0px -10% 0px" // triggers slightly earlier
    }
  );

  targets.forEach((el) => io.observe(el));
});
