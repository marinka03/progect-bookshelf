import { createMarkupCategory } from './create-markup-category-books';
import { apiRequestCategory } from './queries';


const categoryListEl = document.querySelector('.category-list');
const categoryConteiner = document.querySelector('.js-top-books-container');
const categoryTitle = document.querySelector('h1')
console.dir(categoryTitle)
const allCategoryEl = document.querySelector('.all-category');


categoryListEl.addEventListener('click', async (e) => {

    const categoryRequest = e.target.textContent;
    apiRequestCategory(categoryRequest)
        .then(data => {
            console.log(data);
            const MarkupCategory = createMarkupCategory(data);
            categoryConteiner.innerHTML = MarkupCategory;
            categoryTitle.innerText = `${e.target.textContent}`;
        })
        .catch(err => console.log(err));


    // const data = await apiRequestByCategory(categoryRequest);
    // categoryConteiner.innerHTML = createMarkupCategory(data);
    // categoryTitle.innerText = `${e.target.textContent}`
    // console.log(data);
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