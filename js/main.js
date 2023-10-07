var swiper = new Swiper(".swiper-landing", {
  spaceBetween: 3,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-packages", {
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 500,
  // loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 1.25,
      spaceBetween: 7.5,
    },
    "@1.00": {
      slidesPerView: 2.25,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    "@2.00": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".swiper-news", {
  spaceBetween: 30,
  effect: "fade",
  speed: 800,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
});