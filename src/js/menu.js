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
}
