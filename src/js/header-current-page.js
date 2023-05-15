const homeCurrentPage = document.querySelector(".header__home-box");
const shoppingCurrentPage = document.querySelector(".header__shopping-box");

function initialize(){
    if(window){
        const page = window.location.pathname;

        if(page === "/shopping-list.html"){
            shoppingCurrentPage.classList.add("current-shopping")
            homeCurrentPage.classList.remove("current-home")
        }
        if(page === "/index.html"){
            homeCurrentPage.classList.add("current-home")
            shoppingCurrentPage.classList.remove("current-shopping")
        }
    }
}
initialize();