function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},n=o.parcelRequire8462;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){s[e]=o},o.parcelRequire8462=n),n("ifJdc").register(JSON.parse('{"eFRlh":"index.601a1016.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.8f132944.css","d6VAr":"index.4d2715c9.js"}')),n("lXnOV"),n("kM5jX");var a,i=n("7IoHk"),l=n("b374K"),d=n("lXnOV");a=new URL(n("ifJdc").resolve("8yB8n"),import.meta.url).toString();var r;r=new URL(n("ifJdc").resolve("1S3Rj"),import.meta.url).toString();const c=document.querySelector(".modal-card"),_=document.querySelector(".books__list");let m=l.load("myBooksId")||[],p=document.querySelector(".modal-card__close-box")||null;const v=()=>{c.innerHTML="",p.removeEventListener("click",v),window.removeEventListener("keydown",u),window.removeEventListener("click",b)},u=e=>{"Escape"===e.key&&(c.innerHTML="",window.removeEventListener("keydown",u),p.removeEventListener("click",v),window.removeEventListener("click",b))},b=e=>{e.target.classList.contains("modal-card__backdrop")&&(c.innerHTML="",window.removeEventListener("click",b),window.removeEventListener("keydown",u),p.removeEventListener("click",v))},g=e=>{const o=e.target.dataset.modalid;m=l.load("myBooksId")||[];const t=document.querySelector(".button-shopping__content"),s=document.querySelector(".modal-card__congrats"),n=document.querySelector(".modal-card__img-box");if(-1===m.indexOf(o))return m.push(o),l.save("myBooksId",m),n.classList.add("animate-add-to-cart"),t.textContent="Remove from the shopping list",s.style.display="inline",void n.addEventListener("animationend",(()=>{n.classList.remove("animate-add-to-cart")}));if(-1!==m.indexOf(o)){const e=m.indexOf(o);return m.splice(e,1),l.save("myBooksId",m),n.classList.add("animate-remove-from-cart"),t.textContent="Add to shopping list",s.style.display="none",void n.addEventListener("animationend",(()=>{n.classList.remove("animate-remove-from-cart")}))}},k=o=>{const{_id:t,book_image:s,title:n,description:i,author:d,buy_links:_}=o,k=`<div class="modal-card__backdrop loading-gentle">\n  <div class="modal-card__box">\n    <div class="modal-card__close">\n      <button type="button" class="modal-card__close-box"></button>\n    </div>\n    <div class="modal-card__body">\n      <div class="modal-card__img-box loading-gentle">\n        <img src="${s}" alt="Book\n        cover" class="modal-card__img" />\n      </div>\n      <div class="modal-card__info">\n        <div class="modal-card__info-body">\n          <h2 class="modal-card__title">${n}</h2>\n          <h3 class="modal-card__author">${d}</h3>\n          <p class="modal-card__description">${i}</p>\n        </div>\n        <div class="modal-card__shops">\n          <ul class="shops-list modal">\n            <li class="shops-list__item modal">\n              <a href="${_[0].url}" target="_blank" rel="nofollow noopener noreferrer" class="shops-list__link modal">\n                <div class="shops-list__icon-box shops-list__icon-box--amazon modal">\n                  <img src="${e(a)}" alt="Amazon logo" class="shops-list__icon-img-amazon modal" />\n                </div>\n              </a>\n            </li>\n            <li class="shops-list__item modal">\n              <a href="${_[1].url}" target="_blank" rel="nofollow noopener noreferrer" class="shops-list__link modal">\n                <div class="shops-list__icon-box shops-list__icon-box--apple modal">\n                  <img src="${e(r)}" alt="Apple Books logo" class="shops-list__icon-img-apple modal" />\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="modal-card__footer">\n      <div class="button-shopping">\n        <button class="button-shopping__content" data-modalid="${t}">add to shopping list</button>\n      </div>\n      <div class="modal-card__congrats">\n        <p class="modal-card__congrats-text">\n          Congratulations! You have added the book to the shopping list. To delete, press the\n          button "Remove from the shopping list".\n        </p>\n      </div>\n    </div>\n  </div>\n</div>`;c.insertAdjacentHTML("beforeend",k),p=document.querySelector(".modal-card__close-box"),p.addEventListener("click",v),window.addEventListener("keydown",u),window.addEventListener("click",b),(e=>{const o=document.querySelector(".button-shopping__content"),t=document.querySelector(".modal-card__congrats");m=l.load("myBooksId")||[],-1===m.indexOf(e)?(o.textContent="Add to shopping list",t.style.display="none"):-1!==m.indexOf(e)&&(o.textContent="Remove from the shopping list",t.style.display="inline")})(t);document.querySelector(".button-shopping__content").addEventListener("click",g)};_.addEventListener("click",(o=>{if(o.target.classList.contains("books__list--image")||o.target.classList.contains("books__list--title")||o.target.classList.contains("books__list--overlay")||o.target.classList.contains("books__list--overlay-text")){const s=o.target.dataset.mainid;c.innerHTML="",t=s,(0,d.getBooksApi)(t).then((e=>k(e.data))).catch((o=>{e(i).Notify.failure("Ooops... Something went wrong! Please, try again.")}))}var t})),n("a7nVE"),n("3dMYq");d=n("lXnOV");var h=n("IsBYg");const f=document.querySelector(".books__categories ul"),y=document.querySelector(".books__header"),L=document.querySelector(".books__list");let w,E,x;const S=e=>{w&&w.classList.remove("change-category-color"),e.classList.add("change-category-color"),w=e},$=e=>{const o=e.split(" "),t=o.pop(),s=o.join(" ");y.innerHTML=`${s} \n        <span class="books__header--color">\n\n        ${t}</span>`};(async()=>{const e=await(0,d.getBooksApi)(d.categoryList);H(e.data)})();const H=e=>{e.forEach((e=>{const o=document.createElement("li");f.append(o),o.classList.add("books__categories--item"),o.innerHTML=`${e.list_name}`})),f.addEventListener("click",(()=>T(event.target)))},M=()=>window.screen.width<=768?I(x,1):window.screen.width<=1440?I(x,3):I(x,5),T=e=>{S(e),"All categories"===e.innerHTML?(B(),window.addEventListener("resize",M)):(window.removeEventListener("resize",M),q(e.innerHTML))},q=async e=>{for(const o of f.children)o.innerHTML===e&&S(o);E=`category?category=${e}`;const o=await(0,d.getBooksApi)(E);return A(o)},A=e=>{$(e.data[0].list_name),L.innerHTML="",e.data.forEach((e=>{const o=document.createElement("li");L.append(o),o.innerHTML=`\n        <div class="books__list--card"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" src="${e.book_image}" class="books__list--image"/></div>\n        <div class="books__list--description">\n        <span data-mainId="${e._id}" class="books__list--title">${e.title}</span>\n        <br/>\n        <span class="books__list--author">${e.author}</span>\n        </div>\n        </div>`}))},B=async()=>{S(f.firstElementChild);const e=await(0,d.getBooksApi)(d.topBooks);return x=e.data,M(),x},I=(e,o)=>{$("Best Sellers Books"),L.innerHTML="";for(const t of e){const e=document.createElement("div");L.append(e),e.classList.add("books__list--category"),e.insertAdjacentHTML("beforeend",`<span class="books__list--category-name">${t.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`);let s=t.books.slice(0,o);for(const e of s){let o=document.querySelectorAll(".books__list--category-set");o[o.length-1].insertAdjacentHTML("beforeend",`<li class="books__list--element-info"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" class="books__list--image" src="${e.book_image}"/></div><div class="books__list--element-description"><span data-mainId="${e._id}" class="books__list--title">${e.title}</span><br/><span class="books__list--author">${e.author}</span></div></li>`)}}};T(f.firstElementChild),document.addEventListener("click",(function(e){const o=e.target.closest(".see-more-btn");if(o){const e=o.parentNode.parentNode.firstElementChild.innerHTML;window.removeEventListener("resize",M),q(e)}(0,h.updateBookCount)()})),n("9Sazl"),n("IsBYg");
//# sourceMappingURL=index.601a1016.js.map
