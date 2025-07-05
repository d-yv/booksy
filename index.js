import{a}from"./assets/vendor-DBkTNQZv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();async function i(){try{const t=(await a.get("https://books-backend.p.goit.global/books/category-list")).data,c=document.querySelector(".categories");t.forEach(r=>{const e=document.createElement("option");e.value=r.list_name,e.textContent=r.list_name,c.appendChild(e)})}catch(n){console.error("Error loading categories:",n)}}document.querySelector(".loader");const l=document.querySelector(".gallery");document.querySelector(".more-button");function d(n){console.log(n);const t=n.map(c=>{const{author:r,book_image:e,title:o,price:s}=c;return`
      <li class="gallery-item">
        <img src="${e}" alt="${o}" />
        <div class="book-card-content">
            <div class="book-card-heading">
                <h3>${o}</h3>
                <p>${r}</p>
            </div>
            <div class="book-card-price">$${s}</div>
        </div>
        <button class="book-button">Learn more</button>
      </li>
    `}).join("");l.innerHTML=t}const u=document.querySelector(".categories");u.addEventListener("change",g);i();async function g(n){const t=n.target.value;try{const r=(await a.get(`https://books-backend.p.goit.global/books/category?category=${encodeURIComponent(t)}`)).data;d(r)}catch(c){console.error("Error loading Books",c)}}
//# sourceMappingURL=index.js.map
