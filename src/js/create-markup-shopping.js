let shoppingList = [
  {
    id: 1,
    title: 'Harry Potter',
    book_image: 'harry-potter.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/B01MTGVJ6X/ref=sr_1_9',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Audiobook/B017V4SPQQ',
      },
    ],
    contributor: 'J.K. Rowling',
    age_group: 'Children',
    description: 'Fantasy novel about the boy wizard Harry Potter',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
  {
    id: 3,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
];

function generateCards() {
  const cards = document.querySelector('.js-shopping-list-card');
  shoppingList.forEach(book => {
    cards.insertAdjacentHTML('beforeend', generateCard(book));
  });
}

generateCards();

function deleteBook(bookId) {
  shoppingList = shoppingList.filter(book => book.id !== bookId);

  const cards = document.querySelector('.js-shopping-list-card');
  cards.innerHTML = '';
  generateCards();
}

window.deleteBook = deleteBook;

function generateCard(book) {
  return `
    <div class="container">
      <div class="left">
        <img src="${book.book_image}">
      </div>
      <div class="right">
        <h1>${book.title}</h1>
        <p>Category: ${book.age_group || 'No category'}</p> 
        <p>${book.description || 'No description'}</p>
        <p>Author: ${book.contributor}</p>
        <div class="buy-links">
          ${book.buy_links
            .map(
              link => `
            <a href="${link.url}" target="_blank">
              <img src="${link.name.toLowerCase()}.png">
            </a>
          `
            )
            .join('')}
        </div>
        <button onclick="deleteBook(${
          book.id
        })">Delete from Shopping List</button>

      </div>
    </div>
  `;
}
