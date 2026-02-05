// Active nav on scroll
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");

function setActive() {
  let current = "about";

  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
}

window.addEventListener("scroll", setActive);
setActive();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake contact submit
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Message sent successfully! (Demo)";
  form.reset();
});
