function e(e,n,t,s){Object.defineProperty(e,n,{get:t,set:s,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},i=t.parcelRequire8462;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return s[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequire8462=i),i.register("ifJdc",(function(n,t){var s,o;e(n.exports,"register",(()=>s),(e=>s=e)),e(n.exports,"resolve",(()=>o),(e=>o=e));var i={};s=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("ifJdc").register(JSON.parse('{"29lct":"shopping-list.ee747ad6.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.b48f8f32.css","2hQag":"index.93c444d1.js"}')),i("lXnOV"),i("kM5jX");const r=(e,n)=>{try{const t=JSON.stringify(n);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}};var l,a=i("lXnOV");l=new URL(i("ifJdc").resolve("8yB8n"),import.meta.url).toString();var c;c=new URL(i("ifJdc").resolve("1S3Rj"),import.meta.url).toString();r("test-Ids",["643282b1e85766588626a0dc","643282b1e85766588626a0ba","643282b1e85766588626a0b8","643282b1e85766588626a0c2","643282b1e85766588626a0be","643282b2e85766588626a110"]);let d=[];const _=document.querySelector(".cards-list"),p=document.querySelector(".shopping-empty");p.style.display="none";const f=e=>{e.forEach((e=>{(0,a.getBooksApi)(e).then((e=>(e=>{const{_id:t,book_image:s,title:o,list_name:i,description:r,author:a,buy_links:d}=e,p=`<li class="card-item">\n        <div class="card-item__box">\n          <div class="remove-button">\n            <button type="button" class="remove-button__box" data-id="${t}">\n            </button>\n          </div>\n          <div class="card-item__img-box">\n            <img\n              src="${s}"\n              alt="Book cover"\n              class="card-item__img"\n            />\n          </div>\n          <div class="card-item__info">\n            <div class="card-item__info-body">\n              <h2 class="card-item__title">${o}</h2>\n              <h3 class="card-item__category">${i}</h3>\n              <p class="card-item__description">\n              ${r}\n              </p>\n            </div>\n            <div class="card-item__info-footer">\n              <div class="card-item__author-box">\n                <p class="card-item__author">${a}</p>\n              </div>\n              <div class="card-item__shops">\n                <ul class="shops-list">\n                  <li class="shops-list__item">\n                    <a\n                      href="${d[0].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--amazon">\n                        <img\n                          src="${n(l)}"\n                          alt="Amazon logo"\n                          class="shops-list__icon-img-amazon"\n                        /></div\n                    ></a>\n                  </li>\n                  <li class="shops-list__item">\n                    <a\n                      href="${d[1].url}"\n                      target="_blank"\n                      rel="nofollow noopener noreferrer"\n                      class="shops-list__link"\n                      ><div class="shops-list__icon-box shops-list__icon-box--apple">\n                        <img\n                          src="${n(c)}"\n                          alt="Apple Books logo"\n                          class="shops-list__icon-img-apple"\n                        /></div\n                    ></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>`;_.insertAdjacentHTML("beforeend",p)})(e.data))).catch((e=>{console.log(e)}))}))};window.addEventListener("load",(()=>{if(_.innerHTML="",d=(e=>{try{const n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(e){console.error("Get state error: ",e.message)}})("test-Ids"),0===d.length)return p.style.display="flex",void _.removeEventListener("click",u);f(d),_.addEventListener("click",u)}));const u=e=>{if(!e.target.classList.contains("remove-button__box"))return;(e=>{const n=d.indexOf(e);if(d.splice(n,1),r("test-Ids",d),_.innerHTML="",0===d.length)return p.style.display="flex",void _.removeEventListener("click",u);f(d)})(e.target.dataset.id)};i("a7nVE"),i("3dMYq");
//# sourceMappingURL=shopping-list.ee747ad6.js.map