function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=o.parcelRequire8462;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},o.parcelRequire8462=s),s.register("ifJdc",(function(t,o){var r,n;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var s={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},n=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("ifJdc").register(JSON.parse('{"eFRlh":"index.03399573.js","aMIbp":"support1.5e31bce7.svg","2vWk5":"support2.6d865306.svg","fhke6":"support3.a3ca15ad.svg","3ANTO":"support4.16605e64.svg","1EtT8":"support5.0237806b.svg","gcztR":"support6.2b2d4d01.svg","kiEbA":"support7.30f6f4bc.svg","gXyqL":"support8.c13591df.svg","dr1jb":"support9.217f8265.svg","bSbOs":"shopping-list.ce38d7ec.css","rZOLZ":"index.6245eaa4.js"}')),s("lXnOV"),s("kM5jX"),(()=>{const e={openModalBtn:document.querySelector("[btn-modal-open]"),closeModalBtn:document.querySelector("[close-btn]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const i=document.querySelector(".random-book"),a=i.querySelector("#ran-cover"),l=i.querySelector("#ran-title"),c=i.querySelector("#ran-author");i.querySelector("#ran-book-description");async function d(){try{const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(e.ok){const t=await e.json(),o=t[Math.floor(Math.random()*t.length)];!function(e){const t=document.getElementById("book"),o=t.querySelector("#book-cover"),r=t.querySelector("#book-title"),n=t.querySelector("#book-author"),s=t.querySelector("#book-description"),i=t.querySelector("#book-buy-link");o.src=e.book_image,r.textContent="Tytuł: "+e.title,n.textContent="Autor: "+e.author,s.textContent="Opis: "+e.description,i.href=e.amazon_product_url,i.textContent="Kup teraz"}(o.books[Math.floor(Math.random()*o.books.length)])}else console.error("Wystąpił błąd podczas pobierania danych z API.")}catch(e){console.error("Wystąpił błąd:",e)}}!async function(){try{const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(e.ok){const t=await e.json(),o=t[Math.floor(Math.random()*t.length)],r=o.books[Math.floor(Math.random()*o.books.length)];a.src=r.book_image,l.textContent="Tytuł: "+r.title,c.textContent="Autor: "+r.author,console.log(r)}else console.error("Wystąpił błąd podczas pobierania danych z API.")}catch(e){console.error("Wystąpił błąd:",e)}}();document.querySelectorAll(".random-book").forEach((e=>{e.addEventListener("click",(function(){d()}))}));var u;u=new URL(s("ifJdc").resolve("aMIbp"),import.meta.url).toString();var p;p=new URL(s("ifJdc").resolve("2vWk5"),import.meta.url).toString();var g;g=new URL(s("ifJdc").resolve("fhke6"),import.meta.url).toString();var b;b=new URL(s("ifJdc").resolve("3ANTO"),import.meta.url).toString();var m;m=new URL(s("ifJdc").resolve("1EtT8"),import.meta.url).toString();var f;f=new URL(s("ifJdc").resolve("gcztR"),import.meta.url).toString();var _;_=new URL(s("ifJdc").resolve("kiEbA"),import.meta.url).toString();var h;h=new URL(s("ifJdc").resolve("gXyqL"),import.meta.url).toString();var k;k=new URL(s("ifJdc").resolve("dr1jb"),import.meta.url).toString();const v=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(u)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(p)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(g)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(b)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(m)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(f)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(_)},{title:"Medecins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(h)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(k)}],y=document.querySelector(".js-support"),S=v.map((({title:e,url:t,img:o})=>`<li class="support__link js-support">\n          <a class="js-target" href="${t}" target="_blank">\n            <span class="support__number">\n            <img class="support__img"\n            src="${o}" alt="${e}"/></span>\n          </a>\n        </li>`)).join("");y.insertAdjacentHTML("beforeend",S),y.addEventListener("click",(function(e){if(!e.target.classList.contains("js-support"))return}));let w=0;document.querySelector(".slider__container");const E=document.querySelector(".support__list"),L=document.querySelector(".slider__button"),H=document.querySelectorAll(".support__link");let M=H.length;H.forEach((e=>{e.style.minHeight="32px"})),L.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?M-(Math.abs(w)+192)/39:e>=768?M-(Math.abs(w)+192)/40:M-(Math.abs(w)+192)/55})()>=1?w-=32:w=0,E.style.transition="transform 0.3s ease-out",A(),setTimeout((()=>{E.style.transition=""}),300)})),window.addEventListener("resize",(()=>{M=H.length,A()}));const A=()=>{E.style.transform=`translateY(${w}px)`};s("3dMYq");var q=s("lXnOV");const R=document.querySelector(".books__categories ul"),T=document.querySelector(".books__list ul"),j=document.querySelector(".books__header");let x;const F=e=>{const t=e.split(" "),o=t.pop(),r=t.join(" ");j.innerHTML=`${r} \n        <span class="books__header--color">\n        ${o}</span>`},O=e=>{var t;let o;if(t=e,x&&x.classList.remove("change-category-color"),t.classList.add("change-category-color"),x=t,"All categories"!==e.innerHTML)return C(e.innerHTML);o=q.topBooks,(0,q.getBooksApi)(o).then((e=>U(e.data)))};(0,q.getBooksApi)(q.categoryList).then((e=>$(e.data))).catch((e=>{console.log(e)}));const $=e=>{e.forEach((e=>{const t=document.createElement("li");R.append(t),t.classList.add("books__categories--item"),t.innerHTML=`${e.list_name}`})),R.addEventListener("click",(()=>O(event.target)))},C=e=>{categorySelected=`category?category=${e}`,(0,q.getBooksApi)(categorySelected).then((e=>J(e)))},J=e=>{F(e.data[0].list_name),T.innerHTML="",e.data.forEach((e=>{const t=document.createElement("li");T.append(t),t.innerHTML=`\n        <div class='books__list--card'><img src="${e.book_image}" class='books__list--image'/>\n        <div class='books__list--description'>\n        <span class='books__list--title'>${e.title}</span>\n        <br/>\n        <span class='books__list--author'>${e.author}</span>\n        </div>\n        </div>`}))};O(R.firstElementChild);const U=e=>{F("Best Sellers Books"),T.innerHTML="",e.map((e=>{T.insertAdjacentHTML("beforeend",`\n            <div class='books__list--card'>\n                <span class='books__list--category'>${e.list_name}</span>\n                <img src='${e.books[0].book_image}' class='books-list--image'/>\n                <div class='books__list--description'>\n                    <span class='books__list--title'>${e.books[0].title}</span>\n                    <br/>\n                    <span class='books__list--author'>${e.books[0].author}</span>\n                </div>\n                <div class='books__list--see-more'>\n                    <button class="see-more-btn">see more</button> \n                </div>\n            </div>`)}))};document.addEventListener("click",(function(e){const t=e.target.closest(".see-more-btn");if(t){const e=t.parentNode.parentNode.firstElementChild.innerHTML;C(e)}}));
//# sourceMappingURL=index.03399573.js.map