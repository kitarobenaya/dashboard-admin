const burgerNav = document.querySelectorAll("div.burger-nav");
const aside = document.querySelector("aside.aside");
const nav = document.querySelector("nav");
const line1 = document.querySelector("div.line1");
const line2 = document.querySelector("div.line2");
const line3 = document.querySelector("div.line3");

nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("burger-nav")) {
    burgerNav.forEach((nav) => {
      nav.classList.remove("burger-nav");
      nav.classList.add("closeside");
    });

    aside.classList.remove("animate-closeAs");
    line2.classList.remove("animate-rotBack");
    line3.classList.remove("animate-rotBackmin");
    aside.classList.remove("hidden");
    line3.classList.remove("bottom-0");
    line3.classList.remove("w-1/2");
    aside.classList.add("flex");
    line1.classList.add("hidden");
    aside.classList.add("animate-showIn");
    line2.classList.add("animate-rotate");
    line3.classList.add("w-full");
    line3.classList.add("animate-rotatemin");
  } else if (e.target.classList.contains("closeside")) {
    // const newAside = document.querySelector("aside.aside");
    burgerNav.forEach((nav) => {
      nav.classList.remove("closeside");
      nav.classList.add("burger-nav");
    });

    line2.classList.remove("animate-rotate");
    line3.classList.remove("animate-rotatemin");
    aside.classList.remove("animate-showIn");
    line2.classList.add("animate-rotBack");
    line3.classList.add("animate-rotBackmin");
    aside.classList.add("animate-closeAs");
    line1.classList.remove("hidden");
    line3.classList.add("bottom-0");
    line3.classList.remove("w-full");
    line3.classList.add("w-1/2");
    setTimeout(() => {
      aside.classList.remove("flex");
      aside.classList.add("hidden");
    }, 700);
  }
});
