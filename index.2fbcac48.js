var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},n=o.parcelRequire8462;null==n&&((n=function(o){if(o in e)return e[o].exports;if(o in t){var n=t[o];delete t[o];var s={id:o,exports:{}};return e[o]=s,n.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,e){t[o]=e},o.parcelRequire8462=n),n("lXnOV");const s=document.querySelector("#mobile-menu"),r=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),a=()=>{s.classList.toggle("is-open"),r.classList.toggle("hidden"),c.classList.toggle("hidden"),s.classList.contains("is-open")?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"};r.addEventListener("click",a),c.addEventListener("click",a),(()=>{const o={openModalBtn:document.querySelector("[btn-modal-open]"),closeModalBtn:document.querySelector("[close-btn]"),modal:document.querySelector("[data-modal]")};function e(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)})();const l=document.querySelector(".random-book"),i=l.querySelector("#ran-cover"),d=l.querySelector("#ran-title"),u=l.querySelector("#ran-author");l.querySelector("#ran-book-description");async function b(){try{const o=await fetch("https://books-backend.p.goit.global/books/top-books");if(o.ok){const e=await o.json(),t=e[Math.floor(Math.random()*e.length)];!function(o){const e=document.getElementById("book"),t=e.querySelector("#book-cover"),n=e.querySelector("#book-title"),s=e.querySelector("#book-author"),r=e.querySelector("#book-description"),c=e.querySelector("#book-buy-link");t.src=o.book_image,n.textContent="Tytuł: "+o.title,s.textContent="Autor: "+o.author,r.textContent="Opis: "+o.description,c.href=o.amazon_product_url,c.textContent="Kup teraz"}(t.books[Math.floor(Math.random()*t.books.length)])}else console.error("Wystąpił błąd podczas pobierania danych z API.")}catch(o){console.error("Wystąpił błąd:",o)}}!async function(){try{const o=await fetch("https://books-backend.p.goit.global/books/top-books");if(o.ok){const e=await o.json(),t=e[Math.floor(Math.random()*e.length)],n=t.books[Math.floor(Math.random()*t.books.length)];i.src=n.book_image,d.textContent="Tytuł: "+n.title,u.textContent="Autor: "+n.author,console.log(n)}else console.error("Wystąpił błąd podczas pobierania danych z API.")}catch(o){console.error("Wystąpił błąd:",o)}}();document.querySelectorAll(".random-book").forEach((o=>{o.addEventListener("click",(function(){b()}))})),n("a7nVE"),n("3dMYq");var p=n("lXnOV");const k=document.querySelector(".books__categories ul"),m=document.querySelector(".books__list ul"),g=document.querySelector(".books__header");let h;const y=o=>{h&&h.classList.remove("change-category-color"),o.classList.add("change-category-color"),h=o},f=o=>{const e=o.split(" "),t=e.pop(),n=e.join(" ");g.innerHTML=`${n} \n        <span class="books__header--color">\n        ${t}</span>`},_=o=>{let e;if(y(o),"All categories"!==o.innerHTML)return L(o.innerHTML);e=p.topBooks,(0,p.getBooksApi)(e).then((o=>q(o.data)))};(0,p.getBooksApi)(p.categoryList).then((o=>v(o.data))).catch((o=>{console.log(o)}));const v=o=>{o.forEach((o=>{const e=document.createElement("li");k.append(e),e.classList.add("books__categories--item"),e.innerHTML=`${o.list_name}`})),k.addEventListener("click",(()=>_(event.target)))},L=o=>{for(const e of k.children)e.innerHTML===o&&y(e);categorySelected=`category?category=${o}`,(0,p.getBooksApi)(categorySelected).then((o=>M(o)))},M=o=>{f(o.data[0].list_name),m.innerHTML="",o.data.forEach((o=>{const e=document.createElement("li");m.append(e),e.innerHTML=`\n        <div class='books__list--card'><img src="${o.book_image}" class='books__list--image'/>\n        <div class='books__list--description'>\n        <span class='books__list--title'>${o.title}</span>\n        <br/>\n        <span class='books__list--author'>${o.author}</span>\n        </div>\n        </div>`}))};_(k.firstElementChild);const q=o=>{f("Best Sellers Books"),m.innerHTML="",o.map((o=>{m.insertAdjacentHTML("beforeend",`\n            <div class='books__list--card'>\n                <span class='books__list--category'>${o.list_name}</span>\n                <img src='${o.books[0].book_image}' class='books-list--image'/>\n                <div class='books__list--description'>\n                    <span class='books__list--title'>${o.books[0].title}</span>\n                    <br/>\n                    <span class='books__list--author'>${o.books[0].author}</span>\n                </div>\n                <div class='books__list--see-more'>\n                    <button onclick="window.location.href='#gototitle'" class="see-more-btn">see more</button>\n                </div>\n            </div>`)}))};document.addEventListener("click",(function(o){const e=o.target.closest(".see-more-btn");if(e){const o=e.parentNode.parentNode.firstElementChild.innerHTML;L(o)}}));
//# sourceMappingURL=index.2fbcac48.js.map
