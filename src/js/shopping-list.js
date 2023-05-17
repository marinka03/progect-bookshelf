import { hideLoader } from './queries';
import { generateCard } from './create-markup-shopping';
import shoppping_list from '../images/shopping_list.png';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { generateCard, generateCards } from './create-markup-shopping';

import 'firebase/auth';

import { removeBook } from './login-modal';

hideLoader();
// const containerEl = document.querySelector('.js-container-list');
const listEl = document.querySelector('.js-listInShopping');
const emptyWrapper = document.querySelector('.js-wrapper-empty-page');
// console.log(emptyWrapper);
// const arrToShoppingList = [];

// console.log(JSON.parse(localStorage.getItem('userdata')) || {});
const localStorageEL = JSON.parse(localStorage.getItem('userdata')) || {};
// console.log(localStorageEL.books);

// listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(bookList));
// const btnDelete = document.querySelector('.js-li-shopping');
const tui = document.querySelector('.tui-pagination');
tui.style.display = 'none';

if (!localStorageEL.books.length) {
  tui.style.display = 'none';
} else {
  setInterval(() => {
    tui.style.display = 'block';
  }, 1000);
}

// const empty = emptyWrapper;
// console.log(localStorageEL);
// console.log(Object.keys(localStorageEL).length);
if (!Object.keys(localStorageEL).length) {
  //   console.log('vfekbmnubneubn');
  return;
} else if (!localStorageEL.books.length) {
  //   console.log(localStorageEL.books);
  //   console.log('1');
  emptyWrapper.style.display = 'block';
} else {
  //   console.log('2');
  emptyWrapper.style.display = 'none';
}

generateMarkup(localStorageEL.books);
const array = [];
function generateMarkup(arrayEl) {
  arrayEl.forEach(item => {
    apiFetchCate(item).then(data => {
      //   console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  });
  setTimeout(() => {
    addPagination();
  }, 2000);
}

// let count = 0;
// localStorageEL.books.forEach(item => {
//   //   console.log(count);
//   count += 1;
//   if (!(count > 3)) {
//     apiFetchCate(item).then(data => {
//       //   console.log(data);
//       array.push(data);
//       listEl.insertAdjacentHTML('beforeend', generateCard(data));
//     });
//   }
// });

// const array = [];
// pagination.on('beforeMove', evt => {
//   //   localStorageEL.books.forEach(item => {
//   //     apiFetchCate(item).then(data => {
//   //       console.log(data);
//   //       array.push(data);
//   //       listEl.innerHTML = generateCard(data);
//   //     });
//   //   });
//   console.log(evt);
// });

listEl.addEventListener('click', onClickBtnDelete);

async function onClickBtnDelete(evt) {
  if (evt.target.classList.contains('js-delete')) {
    const li = evt.target.closest('.js-li-shopping');
    const id = li.dataset.id;
    // console.log(id);

    const index = array.findIndex(item => item._id === id);
    console.log(array[index]);
    array.splice(index, 1);
    // console.log(array);

    removeBook(id);
    await (listEl.innerHTML = generateCards(array));

    if (!array.length) {
      listEl.innerHTML = `<div class="wrapper-empty-page js-wrapper-empty-page"><p class="wrapper-empty-page_description js-descr-empty">This page is empty, add some books and proceed to order.</p><img class="js-image-empty" src="${shoppping_list}" alt="This page is empty" /></div>`;
      tui.style.display = 'none';
    }
    addPagination();
  }
}

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}

hideLoader();

//-----------------------------------------------------------------------------------------

export function addPagination() {
  let itemsPerPage = 0; // Кількість елементів на сторінці
  let totalItems = 0; // Загальна кількість елементів
  let visiblePages = 0;

  if (window.innerWidth < 768) {
    itemsPerPage = 4;
    visiblePages = 1;
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
  }

  const listItems = document.querySelectorAll('.js-li-shopping');
  totalItems = listItems.length;
  console.log(totalItems);
  console.log(listItems);

  const firstThreeItems = Array.from(listItems).slice(0, itemsPerPage);
  firstThreeItems.forEach((item, index) => {
    item.classList.remove('is-hidden');
  });

  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: visiblePages,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('#pagination', options);
  pagination.on('afterMove', evt => {
    const currentPage = evt.page - 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(listItems);
    listItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
}

function updateOptions() {
  const width = window.innerWidth;
  if (width < 768) {
    itemsPerPage = 4;
    visiblePages = 2;
  } else {
    itemsPerPage = 3;
    visiblePages = 3;
  }
}
