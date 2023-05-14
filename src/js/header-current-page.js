const homeCurrentPage = document.querySelector(".header__home-box");
const shoppingCurrentPage = document.querySelector(".header__shopping-box");

homeCurrentPage.addEventListener("click", onClickHome);
// shoppingCurrentPage.addEventListener("click", onClickShopping);

function onClickHome(evt){
    const elem = evt.target;

    // if(!elem.className.includes('current-home')) {
    //     elem.className = elem.className.replace('', 'current-home');
    // }else{
console.log(window.location.pathname);
    // }
    // if(window.location.pathname === "/index.html"){

    // }
}
// function onClickShopping(evt){

//     console.log(window.location.pathname);
// }


function initialize(){
    if(window){
        const page = window.location.pathname;
        console.log(page);
    }
}
initialize();
//  header.classList.add('dark-theme_header');
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
