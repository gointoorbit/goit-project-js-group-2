function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequire8462;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire8462=s),s("ifJdc").register(JSON.parse('{"eFRlh":"index.cc81db5f.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.9e3804bb.css","6eR0j":"index.5dba73b8.js"}')),s("lXnOV"),s("kM5jX");var i,a=s("7IoHk"),r=s("b374K"),l=s("lXnOV");i=new URL(s("ifJdc").resolve("8yB8n"),import.meta.url).toString();var c;c=new URL(s("ifJdc").resolve("1S3Rj"),import.meta.url).toString();const d=document.querySelector(".modal-card"),_=document.querySelector(".books__list");let u=r.load("myBooksId")||[],m=document.querySelector(".modal-card__close-box")||null;const p=()=>{d.innerHTML="",m.removeEventListener("click",p),window.removeEventListener("keydown",v),window.removeEventListener("click",f)},v=e=>{"Escape"===e.key&&(d.innerHTML="",window.removeEventListener("keydown",v),m.removeEventListener("click",p),window.removeEventListener("click",f))},f=e=>{e.target.classList.contains("modal-card__backdrop")&&(d.innerHTML="",window.removeEventListener("click",f),window.removeEventListener("keydown",v),m.removeEventListener("click",p))},b=e=>{const t=e.target.dataset.modalid;u=r.load("myBooksId")||[];const n=document.querySelector(".button-shopping__content"),o=document.querySelector(".modal-card__congrats");if(-1===u.indexOf(t))return u.push(t),r.save("myBooksId",u),n.textContent="Remove from the shopping list",void(o.style.display="inline");if(-1!==u.indexOf(t)){const e=u.indexOf(t);return u.splice(e,1),r.save("myBooksId",u),n.textContent="Add to shopping list",void(o.style.display="none")}},g=t=>{const{_id:n,book_image:o,title:s,description:a,author:l,buy_links:_}=t,g=`<div class="modal-card__backdrop">\n    <div class="modal-card__box">\n      <div class="modal-card__close">\n        <button type="button" class="modal-card__close-box"></button>\n      </div>\n      <div class="modal-card__img-box">\n        <img\n          src="${o}"\n          alt="Book\n        cover"\n          class="modal-card__img"\n        />\n      </div>\n      <div class="modal-card__info">\n        <div class="modal-card__info-body">\n          <h2 class="modal-card__title">${s}</h2>\n          <h3 class="modal-card__author">${l}</h3>\n          <p class="modal-card__description">${a}</p>\n        </div>\n        <div class="modal-card__shops">\n          <ul class="shops-list modal">\n            <li class="shops-list__item modal">\n              <a\n                href="${_[0].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n                ><div class="shops-list__icon-box shops-list__icon-box--amazon modal">\n                  <img\n                    src="${e(i)}"\n                    alt="Amazon logo"\n                    class="shops-list__icon-img-amazon modal"\n                  /></div\n              ></a>\n            </li>\n            <li class="shops-list__item modal">\n              <a\n                href="${_[1].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n                ><div class="shops-list__icon-box shops-list__icon-box--apple modal">\n                  <img\n                    src="${e(c)}"\n                    alt="Apple Books logo"\n                    class="shops-list__icon-img-apple modal"\n                  /></div\n              ></a>\n            </li>\n          </ul>\n        </div>\n        <div class="button-shopping">\n          <button class="button-shopping__content" data-modalid="${n}">add to shopping list</button>\n        </div>\n        <div class="modal-card__congrats">\n          <p class="modal-card__congrats-text">\n            Congratulations! You have added the book to the shopping list. To delete, press the\n            button "Remove from the shopping list".\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>`;d.insertAdjacentHTML("beforeend",g),m=document.querySelector(".modal-card__close-box"),m.addEventListener("click",p),window.addEventListener("keydown",v),window.addEventListener("click",f),(e=>{const t=document.querySelector(".button-shopping__content"),n=document.querySelector(".modal-card__congrats");u=r.load("myBooksId")||[],-1===u.indexOf(e)?(t.textContent="Add to shopping list",n.style.display="none"):-1!==u.indexOf(e)&&(t.textContent="Remove from the shopping list",n.style.display="inline")})(n);document.querySelector(".button-shopping__content").addEventListener("click",b)};_.addEventListener("click",(t=>{if(t.target.classList.contains("books__list--image")||t.target.classList.contains("books__list--title")||t.target.classList.contains("books__list--overlay")||t.target.classList.contains("books__list--overlay-text")){const o=t.target.dataset.mainid;d.innerHTML="",n=o,(0,l.getBooksApi)(n).then((e=>g(e.data))).catch((t=>{e(a).Notify.failure("Ooops... Something went wrong! Please, try again.")}))}var n})),s("a7nVE"),s("3dMYq");l=s("lXnOV");var k,y="Expected a function",h=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,E=/^0o[0-7]+$/i,x=parseInt,$="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,H=$||S||Function("return this")(),T=Object.prototype.toString,M=Math.max,O=Math.min,j=function(){return H.Date.now()};function q(e,t,n){var o,s,i,a,r,l,c=0,d=!1,_=!1,u=!0;if("function"!=typeof e)throw new TypeError(y);function m(t){var n=o,i=s;return o=s=void 0,c=t,a=e.apply(i,n)}function p(e){return c=e,r=setTimeout(f,t),d?m(e):a}function v(e){var n=e-l;return void 0===l||n>=t||n<0||_&&e-c>=i}function f(){var e=j();if(v(e))return b(e);r=setTimeout(f,function(e){var n=t-(e-l);return _?O(n,i-(e-c)):n}(e))}function b(e){return r=void 0,u&&o?m(e):(o=s=void 0,a)}function g(){var e=j(),n=v(e);if(o=arguments,s=this,l=e,n){if(void 0===r)return p(l);if(_)return r=setTimeout(f,t),m(l)}return void 0===r&&(r=setTimeout(f,t)),a}return t=B(t)||0,A(n)&&(d=!!n.leading,i=(_="maxWait"in n)?M(B(n.maxWait)||0,t):i,u="trailing"in n?!!n.trailing:u),g.cancel=function(){void 0!==r&&clearTimeout(r),c=0,o=l=s=r=void 0},g.flush=function(){return void 0===r?a:b(j())},g}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(h,"");var n=L.test(e);return n||E.test(e)?x(e.slice(2),n?2:8):w.test(e)?NaN:+e}k=function(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError(y);return A(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),q(e,t,{leading:o,maxWait:t,trailing:s})};const R=document.querySelector(".books__categories ul"),I=document.querySelector(".books__header"),N=document.querySelector(".books__list");let C,z,F;const J=e=>{C&&C.classList.remove("change-category-color"),e.classList.add("change-category-color"),C=e},U=e=>{const t=e.split(" "),n=t.pop(),o=t.join(" ");I.innerHTML=`${o} \n        <span class="books__header--color">\n\n        ${n}</span>`};(async()=>{const e=await(0,l.getBooksApi)(l.categoryList);V(e.data)})();const V=e=>{e.forEach((e=>{const t=document.createElement("li");R.append(t),t.classList.add("books__categories--item"),t.innerHTML=`${e.list_name}`})),R.addEventListener("click",(()=>X(event.target)))},X=t=>{J(t),"All categories"===t.innerHTML?(Y(),window.addEventListener("resize",e(k)(P,250))):(window.removeEventListener("resize",e(k)(P,250)),D(t.innerHTML))},D=async e=>{for(const t of R.children)t.innerHTML===e&&J(t);z=`category?category=${e}`;const t=await(0,l.getBooksApi)(z);return W(t)},W=e=>{U(e.data[0].list_name),N.innerHTML="",e.data.forEach((e=>{const t=document.createElement("li");N.append(t),t.innerHTML=`\n        <div class="books__list--card"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" src="${e.book_image}" class="books__list--image"/></div>\n        <div class="books__list--description">\n        <span data-mainId="${e._id}" class="books__list--title">${e.title}</span>\n        <br/>\n        <span class="books__list--author">${e.author}</span>\n        </div>\n        </div>`}))},Y=async()=>{J(R.firstElementChild);const e=await(0,l.getBooksApi)(l.topBooks);return F=e.data,P(F),F},K=(e,t)=>{U("Best Sellers Books"),N.innerHTML="";for(const n of e){const e=document.createElement("div");N.append(e),e.classList.add("books__list--category"),e.insertAdjacentHTML("beforeend",`<span class="books__list--category-name">${n.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button class='see-more-btn'>see more</button></div>`);let o=n.books.slice(0,t);for(const e of o){let t=document.querySelectorAll(".books__list--category-set");t[t.length-1].insertAdjacentHTML("beforeend",`<li class="books__list--element-info"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" class="books__list--image" src="${e.book_image}"/></div><div class="books__list--element-description"><span data-mainId="${e._id}" class="books__list--title">${e.title}</span><br/><span class="books__list--author">${e.author}</span></div></li>`)}}},P=()=>window.screen.width<=768?K(F,1):window.screen.width<=1440?K(F,3):K(F,5);X(R.firstElementChild),document.addEventListener("click",(function(t){const n=t.target.closest(".see-more-btn");if(n){const t=n.parentNode.parentNode.firstElementChild.innerHTML;window.removeEventListener("resize",e(k)(P,250)),D(t)}})),s("9Sazl");
//# sourceMappingURL=index.cc81db5f.js.map
