function o(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(o){if(o in t)return t[o].exports;if(o in n){var e=n[o];delete n[o];var s={id:o,exports:{}};return t[o]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,e){n[o]=e},e.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.dc8c918a.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","3TeDo":"index.4a0b8cc6.js"}')),s("j2XVn"),s("92F0t"),s("4dIBK");var a=s("j2XVn");s("j2XVn");function l(o){return o.map((o=>`<div class="top-books_book">\n            <img class="top-books_image" src="${o.book_image}" alt="book_image"  width="180"></img>\n            <h3 class="top-books_title">${o.title}</h3>\n            <p class="top-books_author">${o.contributor}</p>\n            <button class='top-books_quick-view ' data-bookId='${o._id}' type="button">quick view</button>\n        </div>`)).join("")}const r=(o,e)=>{try{const t=JSON.stringify(e);localStorage.setItem(o,t)}catch(o){console.error("Set state error: ",o.message)}},i=o=>{try{const e=localStorage.getItem(o);return null===e?void 0:JSON.parse(e)}catch(o){console.error("Get state error: ",o.message)}};var c={save:r,load:i,remove:o=>{try{localStorage.removeItem(o)}catch(o){console.error("Remove state error: ",o.message)}}};a=s("j2XVn");const d=document.querySelector(".category-list"),p=document.querySelector(".js-section-top-books");document.querySelector(".all-category");function u(o){i("activeCategory");document.querySelector(".active-category").classList.remove("active-category"),o.classList.add("active-category")}function b(o){r("activeCategory",o)}d.addEventListener("click",(async o=>{const e=o.target.textContent,t=o.target;o.target.textContent!==d.textContent&&("All categories"===e?(g(),b(o.target.textContent),u(t)):(0,a.apiRequestCategory)(e).then((e=>{const n=l(e);p.innerHTML=`<h1 class="title-top-books">${o.target.textContent}</h1><div class="category-books_container">${n}</div>`,b(o.target.textContent),u(t)})).catch((o=>console.log(o))))})),fetch("https://books-backend.p.goit.global/books/category-list").then((o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})).then((o=>{d.insertAdjacentHTML("beforeend",o.map((o=>`<li class="category-list_item">\n        <p class="category-list_name">${o.list_name}</p>\n</li>`)).sort().join(""))})).catch((o=>console.log(o)));const k=document.querySelector(".js-section-top-books");function g(){(0,a.apiRequestTopBooks)().then((o=>{const e=`<h1 class="title-top-books">Best Sellers <span>Books</span></h1><div class="js-top-books-container">${o.map((o=>{const e=o.books.map((o=>`<li class="top-books_list list">\n    <div class="top-books_book">\n        <img class="top-books_image" src="${o.book_image}" alt="book_image"  width="180">\n        <h3 class="top-books_title">${o.title}</h3>\n        <p class="top-books_author">${o.contributor}</p>\n        <button class='top-books_quick-view ' data-bookId='${o._id}' type="button">quick view</button></div>\n  \n</li>`)).join("");return`\n      <ul class="top-books">\n      <p class="top-books_category">${o.list_name}</p>\n      <div class="top-books_container">${e}</div>\n      <div class="js-top-books_button top-books_button link" data-category='${o.list_name}'>see more</div>\n      </ul>`})).join("")}</div>`;k.innerHTML=e,o.page!==o.total_pages&&(paginationBtn.hidden=!1),b("All categories")})).catch((o=>console.log(o)))}g(),document.body.addEventListener("click",(function(o){if(o.target.classList.contains("js-top-books_button")){const e=o.target.getAttribute("data-category");(0,a.apiRequestCategory)(e).then((o=>{console.log("data :>> ",o);const t=l(o);k.innerHTML=`<h1 class="title-top-books">${e}</h1><div class="category-books_container">${t}</div>`,b(e)})).catch((o=>console.log(o)))}})),s("hvEUv"),s("fKLyw"),s("75VGX"),s("74Aiq"),s("4S0r6"),s("gY4QW"),s("eqJOk");var _={};_=new URL(s("kyEFX").resolve("3bIHe"),import.meta.url).toString();var m={};m=new URL(s("kyEFX").resolve("dkcwB"),import.meta.url).toString();var y={};y=new URL(s("kyEFX").resolve("2D6jo"),import.meta.url).toString(),s("gKkQl"),s("eyjy7"),s("eyjy7"),s("jAzyG");var v=s("gY4QW");s("ffjl9");const h=document.querySelector(".main"),f=document.querySelector(".modal_pop-up__container"),w=document.querySelector(".modal_pop-up__description"),S=document.querySelector(".no-description"),$=document.querySelector(".backdrop_pop-up"),L=document.querySelector(".modal_pop-up__close-btn");let q;function E(){$.classList.toggle("backdrop_pop-up--is-hidden"),$.removeEventListener("click",H),L.removeEventListener("click",E),window.removeEventListener("keydown",j),w.innerHTML=""}function j(o){"Escape"===o.code&&E()}function H(o){o.target===o.currentTarget&&E()}function x(){const o=localStorage.getItem("userdata");if(o){return JSON.parse(o)}return null}h.addEventListener("click",(async function(e){if(!e.target.closest(".top-books_quick-view"))return;const t=e.target.closest(".top-books_quick-view").getAttribute("data-bookId");q=t,console.log(t),$.classList.remove("backdrop_pop-up--is-hidden"),$.addEventListener("click",H),L.addEventListener("click",E),window.addEventListener("keydown",j),await async function(e){f.innerHTML="";try{const s=await async function(o){const e=`${T}${o}`,t=await fetch(e);if(!t.ok)throw new Error(t.statusText);return await t.json()}(e);c.save("active-book",s);const a=Boolean(c.load("selected-books")?.find((o=>o._id===s._id))),{book_image:l,title:r,author:i,description:d,buy_links:p}=s;S.innerHTML=""===d?"We hope you will love it":"";const u=`<div class="modal-info">\n    <img class="book__img" src="${l}" alt="${r}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${r}</h2>\n       <h3 class="book__author">${i}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${o(_)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${o(m)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${o(y)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${e}'>${a?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modal__btn-remove" data-bookId='${e}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;f.innerHTML=u;const b=document.querySelector(".modal__btn-remove"),k=document.querySelector(".modal__btn-need-login"),g=document.querySelector(".modal__btn-add"),h=document.querySelector(".modal__btn-text");function t(o){x().books.map((e=>{e===o&&(b.style.display="block",g.style.display="none",h.style.display="none")}))}function n(){x()||(k.style.display="block",b.style.display="none",g.style.display="none")}g.addEventListener("click",(o=>{const e=o.target.getAttribute("data-bookId");(0,v.addbooktosl)(e),b.style.display="block",g.style.display="none",h.style.display="block",setTimeout((()=>{h.style.display="none"}),6500)})),b.addEventListener("click",(o=>{const e=o.target.getAttribute("data-bookId");(0,v.removeBook)(e),b.style.display="none",g.style.display="block",h.style.display="none"})),n(),t(e);!function(o){for(let e=0;e<o.length;e++){o[e].addEventListener("click",(function(o){o.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(w){console.log(w)}}(t)})),L.addEventListener("click",E),console.log(x());const T="https://books-backend.p.goit.global/books/";
//# sourceMappingURL=index.dc8c918a.js.map
