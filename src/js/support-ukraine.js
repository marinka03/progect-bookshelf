import { funds } from './funds';

const list_support = document.querySelector('.js-support_list');

function createFondMarkup(arr) {
  const markup = arr
    .map(
      ({ number, img, url, title }) =>
        `<li>
    <a class="link support_funds_element" href="${url}">
    <span class="support_funds_number">${number}</span>
    <img class="support_funds_image" src="${img}" target="_blank" alt="${title}">
</a>
</li>`
    )
    .join('');
  return markup;
}

list_support.insertAdjacentHTML('beforeend', createFondMarkup(funds));
