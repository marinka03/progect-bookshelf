!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("2tTzi"),n("iYDPN"),n("bNmPK"),n("6N62V"),n("1uU1u"),n("6FlSt"),n("d6S5l"),n("18VO4"),n("23Ajj"),n("9VC5X");var r=n("kfaQ1"),l=n("2tTzi"),a=n("6N62V");const s=document.querySelector(".category-list"),c=document.querySelector(".js-section-top-books");document.querySelector(".all-category");s.addEventListener("click",(async e=>{const t=e.target.textContent;"All categories"===t?(0,a.allCategoryCreate)():(0,l.apiRequestCategory)(t).then((t=>{console.log(t);const o=(0,r.createMarkupCategory)(t);c.innerHTML=`<h1 class="title-top-books">${e.target.textContent}</h1><div class="js-top-books-container">${o}</div>;`})).catch((e=>console.log(e)))})),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{s.insertAdjacentHTML("beforeend",e.map((e=>`<li class="category-list_item">\n        <p class="category-list_name">${e.list_name}</p>\n</li>`)).sort().join(""))})).catch((e=>console.log(e))),n("cRUDO"),n("RX4Re"),n("5TBXW")}();
//# sourceMappingURL=index.ac26aa8a.js.map