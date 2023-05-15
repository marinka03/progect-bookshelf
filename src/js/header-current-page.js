const homeCurrentPage = document.querySelector(".header__home-box");
const shoppingCurrentPage = document.querySelector(".header__shopping-box");

// homeCurrentPage.addEventListener("click", onClickHome);
// shoppingCurrentPage.addEventListener("click", onClickShopping);

// function onClickHome(evt){
//     const elem = evt.target;

// console.log(window.location.pathname);
   
// }


function initialize(){
    if(window){
        const page = window.location.pathname;
        console.log(page);
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


// /shopping-list.html
// /index.html