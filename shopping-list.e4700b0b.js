function e(e,n,o,s){Object.defineProperty(e,n,{get:o,set:s,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},t=o.parcelRequire8462;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return s[e]=o,n.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){i[e]=n},o.parcelRequire8462=t),t.register("ifJdc",(function(n,o){var s,i;e(n.exports,"register",(()=>s),(e=>s=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var t={};s=function(e){for(var n=Object.keys(e),o=0;o<n.length;o++)t[n[o]]=e[n[o]]},i=function(e){var n=t[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),t("ifJdc").register(JSON.parse('{"29lct":"shopping-list.e4700b0b.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.7055951e.css","jwZMh":"index.653624fd.js"}')),t("lXnOV"),t("kM5jX");var l,r=t("b374K"),a=t("lXnOV");l=new URL(t("ifJdc").resolve("8yB8n"),import.meta.url).toString();var d;d=new URL(t("ifJdc").resolve("1S3Rj"),import.meta.url).toString();let c=r.load("myBooksId")||[];const _=document.querySelector(".cards-list"),p=document.querySelector(".shopping-empty");p.style.display="none";const f=e=>{e.forEach((e=>{(0,a.getBooksApi)(e).then((e=>(e=>{const{_id:o,book_image:s,title:i,list_name:t,description:r,author:a,buy_links:c}=e,p=`<li class="card-item">\n        <div class="card-item__box">\n          <div class="remove-button">\n            <button type="button" class="remove-button__box" data-id="${o}">\n            </button>\n          </div>\n          <div class="card-item__img-box">\n            <img\n              src="${s}"\n              alt="Book cover"\n              class="card-item__img"\n            />\n          </div>\n          <div class="card-item__info">\n            <div class="card-item__info-body">\n              <h2 class="card-item__title">${i}</h2>\n              <h3 class="card-item__category">${t}</h3>\n              <p class="card-item__description">\n              ${r}\n              </p>\n            </div>\n            <div class="card-item__info-footer">\n              <div class="card-item__author-box">\n                <p class="card-item__author">${a}</p>\n              </div>\n              <div class="card-item__shops">\n                <ul class="shops-list">\n                  <li class="shops-list__item">\n                    <a\n                      href="${c[0].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--amazon">\n                        <img\n                          src="${n(l)}"\n                          alt="Amazon logo"\n                          class="shops-list__icon-img-amazon"\n                        /></div\n                    ></a>\n                  </li>\n                  <li class="shops-list__item">\n                    <a\n                      href="${c[1].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--apple">\n                        <img\n                          src="${n(d)}"\n                          alt="Apple Books logo"\n                          class="shops-list__icon-img-apple"\n                        /></div\n                    ></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>`;_.insertAdjacentHTML("beforeend",p)})(e.data))).catch((e=>{console.log(e)}))}))};window.addEventListener("load",(()=>{if(_.innerHTML="",c=r.load("myBooksId"),0===c.length)return p.style.display="flex",void _.removeEventListener("click",u);f(c),_.addEventListener("click",u)}));const u=e=>{if(!e.target.classList.contains("remove-button__box"))return;(e=>{const n=c.indexOf(e);if(c.splice(n,1),r.save("myBooksId",c),_.innerHTML="",0===c.length)return p.style.display="flex",void _.removeEventListener("click",u);f(c)})(e.target.dataset.id)};t("a7nVE"),t("3dMYq");
//# sourceMappingURL=shopping-list.e4700b0b.js.map
