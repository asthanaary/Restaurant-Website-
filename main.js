// === Menu Toggle with Animation Class ===
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navLinks.classList.toggle("fade-in");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-fill spin" : "ri-menu-fill";
});

// Close menu when clicking on a nav item
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open", "fade-in");
    menuBtnIcon.className = "ri-menu-fill";
  }
});

// === ScrollReveal Animations (Customized & Unique) ===
const scrollRevealOption = {
  distance: "40px",
  origin: "bottom",
  duration: 1200,
  easing: "ease-in-out",
  reset: false,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 200,
  origin: "top",
});
ScrollReveal().reveal(".event__content", {
  ...scrollRevealOption,
  delay: 600,
  origin: "right",
});

// === Scroll Progress Bar ===
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrollPercent}%`;
});
