function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},s=o.parcelRequire8462;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire8462=s),s("ifJdc").register(JSON.parse('{"eFRlh":"index.dcccdd62.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.d033146c.css","d6VAr":"index.3d4f3384.js"}')),s("lXnOV"),s("kM5jX");var i,a=s("7IoHk"),l=s("b374K"),d=s("lXnOV");i=new URL(s("ifJdc").resolve("8yB8n"),import.meta.url).toString();var r;r=new URL(s("ifJdc").resolve("1S3Rj"),import.meta.url).toString();const c=document.querySelector(".modal-card"),_=document.querySelector(".books__list");let m=l.load("myBooksId")||[],p=document.querySelector(".modal-card__close-box")||null;const v=()=>{c.innerHTML="",p.removeEventListener("click",v),window.removeEventListener("keydown",u),window.removeEventListener("click",b)},u=e=>{"Escape"===e.key&&(c.innerHTML="",window.removeEventListener("keydown",u),p.removeEventListener("click",v),window.removeEventListener("click",b))},b=e=>{e.target.classList.contains("modal-card__backdrop")&&(c.innerHTML="",window.removeEventListener("click",b),window.removeEventListener("keydown",u),p.removeEventListener("click",v))},g=e=>{const o=e.target.dataset.modalid;m=l.load("myBooksId")||[];const n=document.querySelector(".button-shopping__content"),t=document.querySelector(".modal-card__congrats");if(-1===m.indexOf(o))return m.push(o),l.save("myBooksId",m),n.textContent="Remove from the shopping list",void(t.style.display="inline");if(-1!==m.indexOf(o)){const e=m.indexOf(o);return m.splice(e,1),l.save("myBooksId",m),n.textContent="Add to shopping list",void(t.style.display="none")}},k=o=>{const{_id:n,book_image:t,title:s,description:a,author:d,buy_links:_}=o,k=`<div class="modal-card__backdrop">\n    <div class="modal-card__box">\n      <div class="modal-card__close">\n        <button type="button" class="modal-card__close-box"></button>\n      </div>\n      <div class="modal-card__img-box">\n        <img\n          src="${t}"\n          alt="Book\n        cover"\n          class="modal-card__img"\n        />\n      </div>\n      <div class="modal-card__info">\n        <div class="modal-card__info-body">\n          <h2 class="modal-card__title">${s}</h2>\n          <h3 class="modal-card__author">${d}</h3>\n          <p class="modal-card__description">${a}</p>\n        </div>\n        <div class="modal-card__shops">\n          <ul class="shops-list modal">\n            <li class="shops-list__item modal">\n              <a\n                href="${_[0].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n                ><div class="shops-list__icon-box shops-list__icon-box--amazon modal">\n                  <img\n                    src="${e(i)}"\n                    alt="Amazon logo"\n                    class="shops-list__icon-img-amazon modal"\n                  /></div\n              ></a>\n            </li>\n            <li class="shops-list__item modal">\n              <a\n                href="${_[1].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n                ><div class="shops-list__icon-box shops-list__icon-box--apple modal">\n                  <img\n                    src="${e(r)}"\n                    alt="Apple Books logo"\n                    class="shops-list__icon-img-apple modal"\n                  /></div\n              ></a>\n            </li>\n          </ul>\n        </div>\n        <div class="button-shopping">\n          <button class="button-shopping__content" data-modalid="${n}">add to shopping list</button>\n        </div>\n        <div class="modal-card__congrats">\n          <p class="modal-card__congrats-text">\n            Congratulations! You have added the book to the shopping list. To delete, press the\n            button "Remove from the shopping list".\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>`;c.insertAdjacentHTML("beforeend",k),p=document.querySelector(".modal-card__close-box"),p.addEventListener("click",v),window.addEventListener("keydown",u),window.addEventListener("click",b),(e=>{const o=document.querySelector(".button-shopping__content"),n=document.querySelector(".modal-card__congrats");m=l.load("myBooksId")||[],-1===m.indexOf(e)?(o.textContent="Add to shopping list",n.style.display="none"):-1!==m.indexOf(e)&&(o.textContent="Remove from the shopping list",n.style.display="inline")})(n);document.querySelector(".button-shopping__content").addEventListener("click",g)};_.addEventListener("click",(o=>{if(o.target.classList.contains("books__list--image")||o.target.classList.contains("books__list--title")||o.target.classList.contains("books__list--overlay")||o.target.classList.contains("books__list--overlay-text")){const t=o.target.dataset.mainid;c.innerHTML="",n=t,(0,d.getBooksApi)(n).then((e=>k(e.data))).catch((o=>{e(a).Notify.failure("Ooops... Something went wrong! Please, try again.")}))}var n})),s("a7nVE"),s("3dMYq");d=s("lXnOV");var h=s("IsBYg");const f=document.querySelector(".books__categories ul"),y=document.querySelector(".books__header"),w=document.querySelector(".books__list");let L,E,x;const $=e=>{L&&L.classList.remove("change-category-color"),e.classList.add("change-category-color"),L=e},H=e=>{const o=e.split(" "),n=o.pop(),t=o.join(" ");y.innerHTML=`${t} \n        <span class="books__header--color">\n\n        ${n}</span>`};(async()=>{const e=await(0,d.getBooksApi)(d.categoryList);S(e.data)})();const S=e=>{e.forEach((e=>{const o=document.createElement("li");f.append(o),o.classList.add("books__categories--item"),o.innerHTML=`${e.list_name}`})),f.addEventListener("click",(()=>A(event.target)))};const T=()=>window.screen.width<=768?R(x,1):window.screen.width<=1440?R(x,3):R(x,5),M=function(e,o){let n=null;return(...t)=>{null===n&&(e(...t),n=setTimeout((()=>{n=null}),o))}}(T,250),A=e=>{$(e),"All categories"===e.innerHTML?(I(),window.addEventListener("resize",M)):(window.removeEventListener("resize",M),B(e.innerHTML))},B=async e=>{for(const o of f.children)o.innerHTML===e&&$(o);E=`category?category=${e}`;const o=await(0,d.getBooksApi)(E);return q(o)},q=e=>{H(e.data[0].list_name),w.innerHTML="",e.data.forEach((e=>{const o=document.createElement("li");w.append(o),o.innerHTML=`\n        <div class="books__list--card"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" src="${e.book_image}" class="books__list--image"/></div>\n        <div class="books__list--description">\n        <span data-mainId="${e._id}" class="books__list--title">${e.title}</span>\n        <br/>\n        <span class="books__list--author">${e.author}</span>\n        </div>\n        </div>`}))},I=async()=>{$(f.firstElementChild);const e=await(0,d.getBooksApi)(d.topBooks);return x=e.data,T(),x},R=(e,o)=>{H("Best Sellers Books"),w.innerHTML="";for(const n of e){const e=document.createElement("div");w.append(e),e.classList.add("books__list--category"),e.insertAdjacentHTML("beforeend",`<span class="books__list--category-name">${n.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`);let t=n.books.slice(0,o);for(const e of t){let o=document.querySelectorAll(".books__list--category-set");o[o.length-1].insertAdjacentHTML("beforeend",`<li class="books__list--element-info"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" class="books__list--image" src="${e.book_image}"/></div><div class="books__list--element-description"><span data-mainId="${e._id}" class="books__list--title">${e.title}</span><br/><span class="books__list--author">${e.author}</span></div></li>`)}}};A(f.firstElementChild),document.addEventListener("click",(function(e){const o=e.target.closest(".see-more-btn");if(o){const e=o.parentNode.parentNode.firstElementChild.innerHTML;window.removeEventListener("resize",throttle(T,250)),B(e)}(0,h.updateBookCount)()})),s("9Sazl"),s("IsBYg");
//# sourceMappingURL=index.dcccdd62.js.map
