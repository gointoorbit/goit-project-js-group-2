function e(e,n,o,i){Object.defineProperty(e,n,{get:o,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},t=o.parcelRequire8462;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in s){var n=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,n.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){s[e]=n},o.parcelRequire8462=t),t.register("ifJdc",(function(n,o){var i,s;e(n.exports,"register",(()=>i),(e=>i=e)),e(n.exports,"resolve",(()=>s),(e=>s=e));var t={};i=function(e){for(var n=Object.keys(e),o=0;o<n.length;o++)t[n[o]]=e[n[o]]},s=function(e){var n=t[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),t("ifJdc").register(JSON.parse('{"29lct":"shopping-list.3dcd0c3e.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.be534991.css","fjk2K":"index.8b082870.js"}')),t("lXnOV"),t("kM5jX");var r,l=t("7IoHk"),a=t("b374K"),d=t("lXnOV");r=new URL(t("ifJdc").resolve("8yB8n"),import.meta.url).toString();var c;c=new URL(t("ifJdc").resolve("1S3Rj"),import.meta.url).toString();let _=a.load("myBooksId")||[];const p=document.querySelector(".cards-list"),f=document.querySelector(".shopping-empty");f.style.display="none";const u=e=>{e.forEach((e=>{(0,d.getBooksApi)(e).then((e=>(e=>{const{_id:o,book_image:i,title:s,list_name:t,description:l,author:a,buy_links:d}=e,_=`<li class="card-item">\n        <div class="card-item__box">\n          <div class="remove-button">\n            <button type="button" class="remove-button__box" data-id="${o}">\n            </button>\n          </div>\n          <div class="card-item__img-box">\n            <img\n              src="${i}"\n              alt="Book cover"\n              class="card-item__img"\n            />\n          </div>\n          <div class="card-item__info">\n            <div class="card-item__info-body">\n              <h2 class="card-item__title">${s}</h2>\n              <h3 class="card-item__category">${t}</h3>\n              <p class="card-item__description">\n              ${l}\n              </p>\n            </div>\n            <div class="card-item__info-footer">\n              <div class="card-item__author-box">\n                <p class="card-item__author">${a}</p>\n              </div>\n              <div class="card-item__shops">\n                <ul class="shops-list">\n                  <li class="shops-list__item">\n                    <a\n                      href="${d[0].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--amazon">\n                        <img\n                          src="${n(r)}"\n                          alt="Amazon logo"\n                          class="shops-list__icon-img-amazon"\n                        /></div\n                    ></a>\n                  </li>\n                  <li class="shops-list__item">\n                    <a\n                      href="${d[1].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--apple">\n                        <img\n                          src="${n(c)}"\n                          alt="Apple Books logo"\n                          class="shops-list__icon-img-apple"\n                        /></div\n                    ></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>`;p.insertAdjacentHTML("beforeend",_)})(e.data))).catch((e=>{n(l).Notify.failure("Ooops... Something went wrong! Please, try again.")}))}))};window.addEventListener("load",(()=>{if(p.innerHTML="",_=a.load("myBooksId"),0===_.length)return f.style.display="flex",void p.removeEventListener("click",v);u(_),p.addEventListener("click",v)}));const v=e=>{if(!e.target.classList.contains("remove-button__box"))return;(e=>{const n=_.indexOf(e);if(_.splice(n,1),a.save("myBooksId",_),p.innerHTML="",0===_.length)return f.style.display="flex",void p.removeEventListener("click",v);u(_)})(e.target.dataset.id)};t("a7nVE"),t("3dMYq");
//# sourceMappingURL=shopping-list.3dcd0c3e.js.map