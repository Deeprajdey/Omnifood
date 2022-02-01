const menu = document.querySelector(".menu-ion");
const nav = document.querySelector(".nav-flex");
const navEl = document.querySelector(".nav");
const hero = document.querySelector(".hero");
// console.log(menu);
const close = document.querySelector(".close-ion");
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (nav.classList.contains("ham-menu")) {
      nav.classList.remove("ham-menu");
    }
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      document.body.scrollIntoView({ behavior: "smooth" });
    } else {
      const selectEl = document.querySelector(href);
      // selectEl.scrollIntoView({ behavior: "smooth" });

      // var element = document.getElementById("targetElement");
      var headerOffset = 110;
      var elementPosition = selectEl.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
// console.log(links);

menu.addEventListener("click", (e) => {
  nav.classList.add("ham-menu");
});
close.addEventListener("click", (e) => {
  nav.classList.remove("ham-menu");
});

// window.scrollTo({
//   top: "100vh",
//   behavior: "smooth",
// });
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
      navEl.classList.add("sticky");
    } else {
      navEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
observer.observe(hero);
