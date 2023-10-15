// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll to top function
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  scrollToTopButton.addEventListener("click", (event) => {
    event.preventDefault();

    const topElement = document.body;

    topElement.scrollIntoView({
      behavior: "smooth"
    });
  });
});