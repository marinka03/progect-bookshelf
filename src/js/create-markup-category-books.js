export { createMarkupCategory };

function createMarkupCategory(arr) {
        return arr.map(obj =>
        `<div class="category-book">
        <img class="category-book_img" src="${obj.book_image}" alt="book_image"  width="180"></img>
        <h3 class="category-book_title">${obj.title}</h3>
        <p class="category-book_author">${obj.contributor}</p>
    </div>
</div>`
    ).join('');
}
