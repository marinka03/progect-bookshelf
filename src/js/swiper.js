// import Swiper from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/navigation';
import { funds } from './funds';

const list_support = document.querySelector('.support-cont-wrapper');

function createFondMarkup(arr) {
  const markup = arr
    .map(
      ({ number, img, url, title }) =>
        `<div class="swiper-slide support-cont-slide"><a class="link support_funds_element" href="${url}" target="_blank" rel="noopener noreferrer">
    <span class="support_funds_number">${number}</span>
    <img class="support_funds_image" src="${img}" alt="${title}">
</a></div>`
    )
    .join('');
  return markup;
}

list_support.insertAdjacentHTML('beforeend', createFondMarkup(funds));

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   slidesPerView: 4,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.slider__next',
//   },

//   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: '.swiper-scrollbar',
//   //   },
// });
//==================================
new Swiper('.support-cont', {
  navigation: {
    // nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  direction: 'vertical',
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
