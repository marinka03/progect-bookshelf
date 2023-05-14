
const burger = document.querySelector(".burger-box");
const iconClose = document.querySelector(".close-box");
const burgerMenu = document.querySelector(".burger-menu");

burger.addEventListener("click", onClickBurger);


function onClickBurger(evt){
    const elem = evt.currentTarget;

    if(elem.className.includes('js-opened-menu')) {

        elem.className = elem.className.replace('js-opened-menu', 'visually-hidden');
    }

    if(iconClose.className.includes('visually-hidden')){
        iconClose.className = iconClose.className.replace('visually-hidden', 'js-opened-menu');
    }

    if(burgerMenu.className.includes("visually-hidden")){
        burgerMenu.innerHTML = createMarkupMenu();
        burgerMenu.className = burgerMenu.className.replace('visually-hidden', '');
    }
    iconClose.addEventListener("click", onClickIconClose);

    return
}


function createMarkupMenu(){
    return `
    <menu class="header__menu">
        <div class="header__home-box current-home">
          <a href="./index.html" class="uppercase link header__home ">Home</a>
        </div>
  
        <div class="header__shopping-box">
          <a href="./shopping-list.html" class="uppercase link header__shopping"
            >Shopping<span> list</span>
            </a>
            <svg width="20" height="20">
              <use href="./images/icons/icons.svg#icon-shopping_bag"></use>
            </svg>
        </div>
    </menu>`
}

function onClickIconClose(evt){
    let elem = evt.currentTarget;

   
    if(elem.className.includes("js-opened-menu")) {
        elem.className = elem.className.replace('js-opened-menu', 'visually-hidden');
    }
    if(burger.className.includes('visually-hidden')){
        burger.className = burger.className.replace('visually-hidden', 'js-opened-menu');
        if(burgerMenu.className.includes("burger-menu")){
            burgerMenu.className = burgerMenu.className.replace("burger-menu", "burger-menu visually-hidden")
            
        }
        burgerMenu.innerHTML = ""
    }
    burger.addEventListener("click", onClickBurger);
    return;
    // onClickBurger()
}
// z-index: 0;
// opacity: 0;
// width: 0vw;
// height: 0vh;
// visibility: hidden;


// z-index: 2;
// opacity: 1;
// width: 28px;
// height: 28px;
// visibility: visible;
// const linkMarkupMenu = import{menu}

// {/* <source
// type="image/png"
// srcset="
//     ./images/menu_mob_image.png    1x,
//     ./images/menu_mob_image@2x.png 2x
// "
// />
// <img
// src="./images/menu_mob_image.png"
// alt="Books"
// /> */}
