new Swiper('.support-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  // loop: true,
  freeMode: true,
  direction: 'vertical',
  breakpoints: {
    320: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
});
