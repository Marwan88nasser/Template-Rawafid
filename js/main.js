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


var swiper = new Swiper(".country-swiper", {
  effect: 'coverflow',
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 4,
    },
    "@2.00": {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".partners-swiper", {
  effect: 'coverflow',
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 0,
    slideShadows: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 4,
    },
    "@2.00": {
      slidesPerView: 5,
    },
  },
});