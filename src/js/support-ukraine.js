import { funds } from './funds';

const list_funds = document.querySelector('.js-list-funds');

function createFondMarkup(arr) {
  const markup = arr
    .map(
      ({ number, img, url, title }) =>
        `<li>
    <a class="link funds_element" href="${url}">
    <span>${number}</span>
    <img class="funds_image" src="${img}" target="_blank" alt="${title}">
</a>
</li>`
    )
    .join('');
  return markup;
}

list_funds.insertAdjacentHTML('beforeend', createFondMarkup(funds));
