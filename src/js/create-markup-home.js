export { createMarkupTopBooks };

function createMarkupTopBooks(arr) {
  return arr
    .map(obj => {
      const booksMarkup = obj.books
        .map(
          obj => `<li class="top-books_list list">
    <div class="top-books_book">
        <img class="top-books_image" src="${obj.book_image}" alt="book_image"  width="180">
        <h3 class="top-books_title">${obj.title}</h3>
        <p class="top-books_author">${obj.contributor}</p>
        <button class='top-books_quick-view ' data-bookId='${obj._id}' type="button">quick view</button></div>
  
</li>`
        )
        .join('');
      return `<h1 class="title-top-books">Best Sellers <span>Books</span></h1>
      <div class="js-top-books-container">
      <ul class="top-books">
      <p class="top-books_category">${obj.list_name}</p>
      <div class="top-books_container">${booksMarkup}</div>
      <div class="js-top-books_button top-books_button link" data-category='${obj.list_name}'>see more</div>
      </ul></div>`;
    })
    .join('');
}
