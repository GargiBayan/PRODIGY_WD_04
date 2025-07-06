// Highlight active menu link on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Fade in sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Typing effect for hero text
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h2");
  const text = heroText.textContent;
  heroText.textContent = "";

  let i = 0;
  function type() {
    if (i < text.length) {
      heroText.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();
});
