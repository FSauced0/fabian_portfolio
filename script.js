const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = `© ${new Date().getFullYear()}`;

const revealTargets = document.querySelectorAll(
  ".section-heading, .about-copy, .metric-card, .project-card, .system-panel, .contact-panel"
);

revealTargets.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(el => revealObserver.observe(el));

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const aircraft = document.querySelector(".aircraft-wrap");
  if (aircraft && window.innerWidth > 700) {
    aircraft.style.marginTop = `${Math.min(y * 0.07, 55)}px`;
  }
});
