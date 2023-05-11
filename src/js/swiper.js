import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/navigation';
import { funds } from './funds';

const list_support = document.querySelector('.swiper-slide');

function createFondMarkup(arr) {
  const markup = arr
    .map(
      ({ number, img, url, title }) =>
        `<a class="link support_funds_element" href="${url}" target="_blank" rel="noopener noreferrer">
    <span class="support_funds_number">${number}</span>
    <img class="support_funds_image" src="${img}" alt="${title}">
</a>`
    )
    .join('');
  return markup;
}

list_support.insertAdjacentHTML('beforeend', createFondMarkup(funds));

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.slider__next',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});
