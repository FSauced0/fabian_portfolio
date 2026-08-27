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


const heroImage = document.querySelector(".hero-image");
const trajectories = document.querySelectorAll(".trajectory");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (heroImage && window.innerWidth > 700) {
    heroImage.style.transform = `scale(1.015) translateY(${Math.min(y * 0.025, 18)}px)`;
  }
  trajectories.forEach((item, i) => {
    item.style.translate = `${Math.min(y * (0.008 + i * 0.004), 10)}px 0`;
  });
}, { passive: true });

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
const music = document.getElementById("backgroundMusic");
const soundButton = document.getElementById("soundButton");

music.volume = 0.25;

let musicPlaying = false;

soundButton.addEventListener("click", async () => {
  if (!musicPlaying) {
    await music.play();
    musicPlaying = true;
    soundButton.textContent = "SOUND ON";
  } else {
    music.pause();
    musicPlaying = false;
    soundButton.textContent = "SOUND OFF";
  }
});
sections.forEach(section => sectionObserver.observe(section));
