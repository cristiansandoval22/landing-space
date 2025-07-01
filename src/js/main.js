import { $, $$ } from "../lib/dom.js";
  /*=============== SHOW MENU ===============*/
  const $navMenu = $("#nav-menu");
  const $navToggle = $("#nav-toggle");
  const $navClose = $("#nav-close");

  // menu show
  if ($navToggle) {
    $navToggle.addEventListener("click", () => {
      $navMenu.classList.add("show-menu");
    });
  }

  // menu hidden
  if ($navClose) {
    $navClose.addEventListener("click", () => {
      $navMenu.classList.remove("show-menu");
    });
  }
  /*=============== REMOVE MENU MOBILE ===============*/
  const $navLink = $$(".nav__link");

  $navLink.forEach((link) => {
    link.addEventListener("click", () => {
      $navMenu.classList.remove("show-menu");
    });
  });

  /*=============== ADD BLUR HEADER ===============*/

  const scrollHeader = () => {
    const $header = $(".header");
    if ($header) {
      if (window.scrollY >= 50) {
        $header.classList.add("blur-header");
      } else {
        $header.classList.remove("blur-header");
      }
    }
  };

  window.addEventListener("scroll", scrollHeader);

  /*=============== SWIPER PLANETS ===============*/

  const swiperTravel = new Swiper(".travel__swiper", {
    loop: true,

    spaceBetween: 32,

    grabCursor: true,

    slidesPerView: "auto",

    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    

    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    },
  });