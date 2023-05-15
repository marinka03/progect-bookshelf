import { createMarkupCategory } from './create-markup-category-books';
import { apiRequestCategory } from './queries';


const categoryListEl = document.querySelector('.category-list');
const categoryConteiner = document.querySelector('.js-section-top-books');
const allCategoryEl = document.querySelector('.all-category');


categoryListEl.addEventListener('click', async (e) => {

    const categoryRequest = e.target.textContent;
    apiRequestCategory(categoryRequest)
        .then(data => {
            console.log(data);
            const MarkupCategory = createMarkupCategory(data);
            categoryConteiner.innerHTML = `<h1 class="title-top-books">${e.target.textContent}</h1><div class="js-top-books-container">${MarkupCategory}</div>;` ;
        })
        .catch(err => console.log(err));
});



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

function apiRequestByCategory(category) {
    const CATEGORY_URL = `https://books-backend.p.goit.global/books/category?category=${category}`;
    return fetch(CATEGORY_URL).then(resp => {
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