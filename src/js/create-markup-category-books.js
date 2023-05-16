export { createMarkupCategory };

function createMarkupCategory(arr) {
    return arr.map(obj =>
        `<div class="top-books_book">
            <img class="top-books_image" src="${obj.book_image}" alt="book_image"  width="180"></img>
            <h3 class="top-books_title">${obj.title}</h3>
            <p class="top-books_author">${obj.contributor}</p>
            <button class='top-books_quick-view ' data-bookId='${obj._id}' type="button">quick view</button>
        </div>`
    ).join('');
}
