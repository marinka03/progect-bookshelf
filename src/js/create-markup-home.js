export { createMarkupTopBooks };

function createMarkupTopBooks(arr) {
  return arr
    .map(obj => {
      const booksMarkup = obj.books
        .map(
          obj => `<li class="top-books_list list">
    <div class="top-books_book">
        <img src="${obj.book_image}" alt="book_image"  width="180">
        <h3 class="top-books_title">${obj.title}</h3>
        <p class="top-books_author">${obj.contributor}</p>
        <div class='top-books_quick-view hiden' data-bookId='${obj._id}'>quick view</div>
    </div>
</li>`
        )
        .join('');
      return `<ul class="top-books">
      <p class="top-books_category">${obj.list_name}</p>
      <div class="top-books_container">${booksMarkup}</div>
      <a href="#" class="js-top-books_button top-books_button link" data-category='${obj.list_name}'>see more</a>
      </ul>`;
    })
    .join('');
}
