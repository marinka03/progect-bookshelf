!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return o[t]=s,e.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"EVgbq":"index.955acc56.js","9qBCW":"amazon_link.626c9508.png","gTCLq":"apple_link.652b354e.png","7wZd0":"bookshop_link.1d091ebd.png","bVuRq":"index.e8c679c3.js"}')),s("2tTzi"),s("iYDPN"),s("bNmPK");var a=s("2tTzi");s("2tTzi");function l(t){return t.map((t=>`<div class="top-books_book">\n            <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180"></img>\n            <h3 class="top-books_title">${t.title}</h3>\n            <p class="top-books_author">${t.contributor}</p>\n            <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button>\n        </div>`)).join("")}a=s("2tTzi");const i=(t,e)=>{try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch(t){console.error("Set state error: ",t.message)}},r=t=>{try{const e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}};var c={save:i,load:r,remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}};const d=document.querySelector(".category-list"),p=document.querySelector(".js-section-top-books");function u(){const t=r("activeCategory"),e=document.querySelector(".active-category"),o=document.querySelectorAll(".category-list_item");e&&e.classList.remove("active-category"),o.forEach((e=>{e.getAttribute("data-category")===t&&e.classList.add("active-category")}))}function b(t){i("activeCategory",t)}d.addEventListener("click",(async t=>{const e=t.target.dataset.category||t.target.textContent;t.target;t.target.textContent!==d.textContent&&("All categories"===e?(_(),b(t.target.textContent),u()):(0,a.apiRequestCategory)(e).then((e=>{const o=l(e),n=t.target.textContent.split(" "),s=n.pop(),a=`${n.join(" ")} <span style="color: #4f2ee8;">${s}</span>`;p.innerHTML=`<h1 class="title-top-books">${a}</h1><div class="category-books_container">${o}</div>`,b(t.target.textContent),u()})).catch((t=>console.log(t))))})),fetch("https://books-backend.p.goit.global/books/category-list").then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).then((t=>{d.insertAdjacentHTML("beforeend",t.map((t=>`<li class="category-list_item" data-category='${t.list_name}'>\n        <p class="category-list_name">${t.list_name}</p>\n</li>`)).sort().join(""))})).catch((t=>console.log(t)));const g=document.querySelector(".js-section-top-books");function _(){(0,a.apiRequestTopBooks)().then((t=>{const e=`<h1 class="title-top-books">Best Sellers <span>Books</span></h1><div class="js-top-books-container">${t.map((t=>{const e=t.books.map((t=>`<li class="top-books_list list">\n    <div class="top-books_book">\n        <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180">\n        <h3 class="top-books_title">${t.title}</h3>\n        <p class="top-books_author">${t.contributor}</p>\n        <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button></div>\n  \n</li>`)).join("");return`\n      <div class="top-books">\n      <h2 class="top-books_category">${t.list_name}</h2>\n      <ul class="top-books_container">${e}</ul>\n      <div class="js-top-books_button top-books_button link" data-category='${t.list_name}'>see more</div>\n      </div>`})).join("")}</div>`;g.innerHTML=e,t.page!==t.total_pages&&(paginationBtn.hidden=!1),(0,a.hideLoader)(),b("All categories"),u()})).catch((t=>console.log(t)))}_(),document.body.addEventListener("click",(function(t){if(t.target.classList.contains("js-top-books_button")){const e=t.target.getAttribute("data-category");(0,a.apiRequestCategory)(e).then((t=>{const o=l(t),n=e.split(" "),s=n.pop(),a=`${n.join(" ")} <span style="color: #4f2ee8;">${s}</span>`;g.innerHTML=`<h1 class="title-top-books">${a}</h1><div class="category-books_container">${o}</div>`,b(e),u()})).catch((t=>console.log(t)))}})),s("6FlSt"),s("d6S5l"),s("18VO4"),s("23Ajj"),s("9VC5X"),s("cRUDO"),s("RX4Re");var k={};k=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("9qBCW");var m={};m=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("gTCLq");var y={};y=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("7wZd0"),s("gQOBw");var v=s("6JpON"),h=s("cRUDO");const f=document.querySelector(".main"),$=document.querySelector(".modal_pop-up__container"),q=document.querySelector(".modal_pop-up__description"),w=document.querySelector(".no-description"),L=document.querySelector(".backdrop_pop-up"),S=document.querySelector(".modal_pop-up__close-btn");let E;function T(){L.classList.toggle("backdrop_pop-up--is-hidden"),L.removeEventListener("click",R),S.removeEventListener("click",T),window.removeEventListener("keydown",H),q.innerHTML=""}function H(t){"Escape"===t.code&&T()}function R(t){t.target===t.currentTarget&&T()}function C(){const t=localStorage.getItem("userdata");if(t){return JSON.parse(t)}return null}f.addEventListener("click",(async function(e){if(!e.target.closest(".top-books_quick-view"))return;const o=e.target.closest(".top-books_quick-view").getAttribute("data-bookId");E=o,L.classList.remove("backdrop_pop-up--is-hidden"),L.addEventListener("click",R),S.addEventListener("click",T),window.addEventListener("keydown",H),await async function(e){$.innerHTML="";try{const s=await async function(t){const e=`${j}${t}`,o=await fetch(e);if(!o.ok)throw new Error(o.statusText);return await o.json()}(e);c.save("active-book",s);const a=Boolean(c.load("selected-books")?.find((t=>t._id===s._id))),{book_image:l,title:i,author:r,description:d,buy_links:p}=s;w.innerHTML=""===d?"We hope you will love it":"";const u=`<div class="modal-info">\n    <img class="book__img" src="${l}" alt="${i}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${i}</h2>\n       <h3 class="book__author">${r}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${t(k)}" alt="amazon" class="seller__pic" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${t(m)}" alt="apple-books" class="seller__pic"/>\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${t(y)}" alt="bookshop" class="seller__pic"/>\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${e}'>${a?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modal__btn-remove" data-bookId='${e}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;$.innerHTML=u;const b=document.querySelector(".modal__btn-remove"),g=document.querySelector(".modal__btn-need-login"),_=document.querySelector(".modal__btn-add"),f=document.querySelector(".modal__btn-text");function o(e){C().books.map((o=>{o===e&&(b.style.display="block",_.style.display="none",f.style.display="none",t(v).Notify.warning("You already have this book"))}))}function n(){C()||(g.style.display="block",b.style.display="none",_.style.display="none")}_.addEventListener("click",(t=>{const e=t.target.getAttribute("data-bookId");(0,h.addbooktosl)(e),b.style.display="block",_.style.display="none",f.style.display="block",setTimeout((()=>{f.style.display="none"}),6500)})),b.addEventListener("click",(t=>{const e=t.target.getAttribute("data-bookId");(0,h.removeBook)(e),b.style.display="none",_.style.display="block",f.style.display="none"})),n(),o(e);!function(t){for(let e=0;e<t.length;e++){t[e].addEventListener("click",(function(t){t.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(q){console.log(q)}}(o)})),S.addEventListener("click",T);const j="https://books-backend.p.goit.global/books/"}();
//# sourceMappingURL=index.955acc56.js.map
