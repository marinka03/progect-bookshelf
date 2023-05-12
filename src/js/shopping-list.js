const containerEl = document.querySelector('.js-container');
const listEl = document.querySelector('.js-listInShopping');

const arrToShoppingList = [];

// apiFetch().then(data =>
//   containerEl.insertAdjacentHTML('beforeend', createMarkupTopBooks(data))
// );

// containerEl.addEventListener('click', addToShoppingList);

function addToShoppingList(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('js-addToShopping')) {
    return;
  }

  const li = evt.target.closest('.js-card');
  const id = li.dataset.id;

  const mas = document.querySelectorAll('.js-card');

  const findEl = [...mas].find(item => item.dataset.id === id);

  //   const inShoppingList = arrToShoppingList.some(
  //     item => item.dataset.id === findEl.dataset.id
  //   );

  //   if (inShoppingList) {
  //     return;
  //   }
  const inShoppingList = arrToShoppingList.some(
    item => li.dataset.id === item.dataset.id
  );
  if (inShoppingList) {
    return;
  }
  arrToShoppingList.push(li);
  console.log(arrToShoppingList);

  //   localStorage.setItem('arr', JSON.stringify(arrToShoppingList));
  //   console.log(JSON.parse(localStorage.getItem('arr')));

  //   arrToShoppingList.forEach(item => {
  //     // apiFetchCate().then(data => console.log(data));
  //     listEl.insertAdjacentElement('beforeend', item);
  //   });

  // listEl.insertAdjacentElement('beforeend', arrToShoppingList[0])
  //   listEl.append(...arrToShoppingList);
}

function apiFetch() {
  return fetch('https://books-backend.p.goit.global/books/top-books').then(
    resp => resp.json()
  );
}

function createMarkupTopBooks(books) {
  return books
    .map(book => {
      const booksArr = book.books
        .map(
          bookOne => `<li class='js-card' data-id=${bookOne._id}>
				<h2>${book.list_name}</h2>
				<img src="${bookOne.book_image}" alt="" width='180'>
				<p>${bookOne.author}</p>
				<button class='js-addToShopping'>Add to shopping list</button>
			</li>`
        )
        .join('');
      return `<ul>${booksArr}</ul>`;
    })
    .join('');
}

// const listEl = document.querySelector('.js-listInShopping');

// apiFetchCate().then(data => {
//   listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(data));
// });

function apiFetchCate() {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=Advice How-To and Miscellaneous`
  ).then(resp => resp.json());
}

function createMarkupBooksInShopping(books) {
  return books
    .map(
      book =>
        `<li>
				<img src="${book.book_image}" alt="${book.title}" width='116'>
				<h2>${book.title}</h2>
				<h3>${book.list_name}</h3>
				<p>${book.description}</p>
				<h3>${book.author}</h3>
				<button>Delete</button>
				<a href="${book.amazon_product_url}">Amazon</a>
				<a href="${book.buy_links[1].url}">Book1</a>
				<a href="${book.buy_links[2].url}">Book2</a>
			</li>`
    )
    .join('');
}
