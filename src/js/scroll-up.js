// const ch = document.querySelector('body');
// if (window.pageYOffset > 1) {
//   ch.insertAdjacentHTML(
//     'afterend',
//     `<div class="to-top">
//       <svg width="55" height="55">
//         <use href="./images/icons/icons.svg#icon-instagram"></use>
//       </svg>
//     </div>`
//   )
//   // setTimeout(toTopBtn, 0);
// }
// выбираем элемент, который хотим добавить
// создаем новый элемент div с классом "to-top"

const gotopBTN = document.querySelector('.go-top');

gotopBTN.addEventListener('click', onToTopBtn);
window.addEventListener('scroll', trackScroll);
function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    gotopBTN.classList.add('go-top-show');
  } else {
    gotopBTN.classList.remove('go-top-show');
  }
}
// function onScroll() {
//   const scrolled = window.pageYOffset;
//   const coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     toTopBtn.classList.add('btn-to-top--visible');
//   }
//   if (scrolled < coords) {
//     toTopBtn.classList.remove('btn-to-top--visible');
//   }
// }
function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // setTimeout(toTopBtn, 0);
  }
}
