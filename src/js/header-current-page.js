const homeCurrentPage = document.querySelector(".header__home-box");
const shoppingCurrentPage = document.querySelector(".header__shopping-box");

function initPageState(){
    if(window){
        const page = window.location.pathname;

        if(page.includes("/shopping-list")){
            shoppingCurrentPage.classList.add("current-shopping")
            homeCurrentPage.classList.remove("current-home")
        }
        if(page.includes("/index")){
            homeCurrentPage.classList.add("current-home")
            shoppingCurrentPage.classList.remove("current-shopping")
        }
    }
}
initPageState();