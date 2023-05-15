

const categoryListEl = document.querySelector('.category-list');
console.log(categoryListEl);

apiRequestCategoriesList()
    .then(data => {
        categoryListEl.insertAdjacentHTML(
            'beforeend',
            createMarkupCategList(data)
        );
    })
    .catch(err => console.log(err));


function apiRequestCategoriesList() {
    const CATEGORIES_URL = 'https://books-backend.p.goit.global/books/category-list';
    return fetch(CATEGORIES_URL).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    });
}



function createMarkupCategList(arr) {
    return arr.map(li => `<li class="category-list_item">
        <p class="category-list_name">${li.list_name}</p>
</li>`
    ).sort().join('');
}



// export { createMarkupCategList };