document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".art-item");
    if (!items.length) return;
  
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );
  
    items.forEach((item) => io.observe(item));
  });
  