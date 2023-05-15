import { funds } from './funds';

const list_support = document.querySelector('.support-wrapper');

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

const shoppingCurrentPage = document.querySelector('.wrapper');

function hideSupport() {
  if (window) {
    const page = window.location.pathname;

    if (page === '/shopping-list.html') {
      shoppingCurrentPage.classList.add('hidden');
    }
  }
}
hideSupport();
