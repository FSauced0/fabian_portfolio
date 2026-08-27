const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

// Mobile navigation toggle
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Close mobile navigation after clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// Automatically update footer year
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Change header appearance after scrolling
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Highlight active navigation section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function updateActiveNavigation() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavigation);
updateActiveNavigation();

// Placeholder GitHub project links
document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    alert(
      'Replace this placeholder link with the GitHub repository URL in index.html.'
    );
  });
});

// Simple reveal animation when sections enter the screen
const revealElements = document.querySelectorAll(
  '.project-card, .timeline-item, .info-card, .skills-group'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
