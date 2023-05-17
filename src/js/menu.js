const burger = document.querySelector('.burger-box');
const iconClose = document.querySelector('.close-box');
const burgerMenu = document.querySelector('.burger-menu');

export {onClickIconClose}

burger.addEventListener('click', onClickBurger);



function onClickBurger(evt) {
  const elem = evt.currentTarget;

  if (elem.className.includes('js-opened-menu')) {
    elem.className = elem.className.replace(
      'js-opened-menu',
      'visually-hidden'
    );
  }

  if (iconClose.className.includes('visually-hidden')) {
    iconClose.className = iconClose.className.replace(
      'visually-hidden',
      'js-opened-menu'
    );
  }

  if (burgerMenu.className.includes('hidden')) {
    burgerMenu.className = burgerMenu.className.replace('hidden', '');
  }
  iconClose.addEventListener('click', onClickIconClose);

  return;
}

function onClickIconClose(evt) {


  let elem = evt.currentTarget;

  if (elem.className.includes('js-opened-menu')) {
    elem.className = elem.className.replace(
      'js-opened-menu',
      'visually-hidden'
    );
  }
  if (burger.className.includes('visually-hidden')) {
    burger.className = burger.className.replace(
      'visually-hidden',
      'js-opened-menu'
    );
    if (burgerMenu.className.includes('burger-menu')) {
      burgerMenu.className = burgerMenu.className.replace(
        'burger-menu',
        'burger-menu hidden'
      );
    }
  }
  burger.addEventListener('click', onClickBurger);
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

// const btnUserHomePage = document.querySelector(".header__sign-up");
