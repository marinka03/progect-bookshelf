function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=o.parcelRequired7c6;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){n[t]=o},o.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.0f9b0bd7.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","jNWaW":"index.f4e1dbc2.js"}')),s("j2XVn"),s("92F0t"),s("4dIBK");var a=s("j2XVn");s("j2XVn");function r(t){return t.map((t=>`<div class="top-books_book">\n            <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180"></img>\n            <h3 class="top-books_title">${t.title}</h3>\n            <p class="top-books_author">${t.contributor}</p>\n            <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button>\n        </div>`)).join("")}a=s("j2XVn");const i=(t,o)=>{try{const e=JSON.stringify(o);localStorage.setItem(t,e)}catch(t){console.error("Set state error: ",t.message)}},l=t=>{try{const o=localStorage.getItem(t);return null===o?void 0:JSON.parse(o)}catch(t){console.error("Get state error: ",t.message)}};var c={save:i,load:l,remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}};const d=document.querySelector(".category-list"),p=document.querySelector(".js-section-top-books");function u(){const t=l("activeCategory"),o=document.querySelector(".active-category"),e=document.querySelectorAll(".category-list_item");o&&o.classList.remove("active-category"),e.forEach((o=>{o.getAttribute("data-category")===t&&o.classList.add("active-category")}))}function b(t){i("activeCategory",t)}d.addEventListener("click",(async t=>{const o=t.target.textContent;t.target;t.target.textContent!==d.textContent&&("All categories"===o?(g(),b(t.target.textContent),u()):(0,a.apiRequestCategory)(o).then((o=>{const e=r(o);p.innerHTML=`<h1 class="title-top-books">${t.target.textContent}</h1><div class="category-books_container">${e}</div>`,b(t.target.textContent),u()})).catch((t=>console.log(t))))})),fetch("https://books-backend.p.goit.global/books/category-list").then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).then((t=>{d.insertAdjacentHTML("beforeend",t.map((t=>`<li class="category-list_item" data-category='${t.list_name}'>\n        <p class="category-list_name">${t.list_name}</p>\n</li>`)).sort().join(""))})).catch((t=>console.log(t)));const k=document.querySelector(".js-section-top-books");function g(){(0,a.apiRequestTopBooks)().then((t=>{const o=`<h1 class="title-top-books">Best Sellers <span>Books</span></h1><div class="js-top-books-container">${t.map((t=>{const o=t.books.map((t=>`<li class="top-books_list list">\n    <div class="top-books_book">\n        <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180">\n        <h3 class="top-books_title">${t.title}</h3>\n        <p class="top-books_author">${t.contributor}</p>\n        <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button></div>\n  \n</li>`)).join("");return`\n      <ul class="top-books">\n      <p class="top-books_category">${t.list_name}</p>\n      <div class="top-books_container">${o}</div>\n      <div class="js-top-books_button top-books_button link" data-category='${t.list_name}'>see more</div>\n      </ul>`})).join("")}</div>`;k.innerHTML=o,t.page!==t.total_pages&&(paginationBtn.hidden=!1),b("All categories"),u()})).catch((t=>console.log(t)))}g(),document.body.addEventListener("click",(function(t){if(t.target.classList.contains("js-top-books_button")){const o=t.target.getAttribute("data-category");(0,a.apiRequestCategory)(o).then((t=>{console.log("data :>> ",t);const e=r(t);k.innerHTML=`<h1 class="title-top-books">${o}</h1><div class="category-books_container">${e}</div>`,b(o),u()})).catch((t=>console.log(t)))}})),s("hvEUv"),s("fKLyw"),s("75VGX"),s("74Aiq"),s("4S0r6"),s("gY4QW"),s("eqJOk");var _={};_=new URL(s("kyEFX").resolve("3bIHe"),import.meta.url).toString();var m={};m=new URL(s("kyEFX").resolve("dkcwB"),import.meta.url).toString();var y={};y=new URL(s("kyEFX").resolve("2D6jo"),import.meta.url).toString(),s("eyjy7");var v=s("7Y9D8"),h=s("gY4QW");const f=document.querySelector(".main"),w=document.querySelector(".modal_pop-up__container"),S=document.querySelector(".modal_pop-up__description"),$=document.querySelector(".no-description"),L=document.querySelector(".backdrop_pop-up"),q=document.querySelector(".modal_pop-up__close-btn");let E;function j(){L.classList.toggle("backdrop_pop-up--is-hidden"),L.removeEventListener("click",x),q.removeEventListener("click",j),window.removeEventListener("keydown",H),S.innerHTML=""}function H(t){"Escape"===t.code&&j()}function x(t){t.target===t.currentTarget&&j()}function A(){const t=localStorage.getItem("userdata");if(t){return JSON.parse(t)}return null}f.addEventListener("click",(async function(o){if(!o.target.closest(".top-books_quick-view"))return;const e=o.target.closest(".top-books_quick-view").getAttribute("data-bookId");E=e,L.classList.remove("backdrop_pop-up--is-hidden"),L.addEventListener("click",x),q.addEventListener("click",j),window.addEventListener("keydown",H),await async function(o){w.innerHTML="";try{const s=await async function(t){const o=`${T}${t}`,e=await fetch(o);if(!e.ok)throw new Error(e.statusText);return await e.json()}(o);c.save("active-book",s);const a=Boolean(c.load("selected-books")?.find((t=>t._id===s._id))),{book_image:r,title:i,author:l,description:d,buy_links:p}=s;$.innerHTML=""===d?"We hope you will love it":"";const u=`<div class="modal-info">\n    <img class="book__img" src="${r}" alt="${i}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${i}</h2>\n       <h3 class="book__author">${l}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${t(_)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${t(m)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${t(y)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${o}'>${a?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modal__btn-remove" data-bookId='${o}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;w.innerHTML=u;const b=document.querySelector(".modal__btn-remove"),k=document.querySelector(".modal__btn-need-login"),g=document.querySelector(".modal__btn-add"),f=document.querySelector(".modal__btn-text");function e(o){A().books.map((e=>{e===o&&(b.style.display="block",g.style.display="none",f.style.display="none",t(v).Notify.warning("You already have this book"))}))}function n(){A()||(k.style.display="block",b.style.display="none",g.style.display="none")}g.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,h.addbooktosl)(o),b.style.display="block",g.style.display="none",f.style.display="block",setTimeout((()=>{f.style.display="none"}),6500)})),b.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,h.removeBook)(o),b.style.display="none",g.style.display="block",f.style.display="none"})),n(),e(o);!function(t){for(let o=0;o<t.length;o++){t[o].addEventListener("click",(function(t){t.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(S){console.log(S)}}(e)})),q.addEventListener("click",j);const T="https://books-backend.p.goit.global/books/";
//# sourceMappingURL=index.0f9b0bd7.js.map