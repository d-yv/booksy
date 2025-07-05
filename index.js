import{a}from"./assets/vendor-DBkTNQZv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();async function i(){try{const o=(await a.get("https://books-backend.p.goit.global/books/category-list")).data,c=document.querySelector(".categories");o.forEach(r=>{const e=document.createElement("option");e.value=r.list_name,e.textContent=r.list_name,c.appendChild(e)})}catch(n){console.error("Error loading categories:",n)}}document.querySelector(".loader");const l=document.querySelector(".gallery");document.querySelector(".more-button");function u(n){console.log(n);const o=n.map(c=>{const{author:r,book_image:e,title:t,price:s}=c;return`
      <li class="gallery-item">
        <img src="${e}" alt="${t}" />
        <p>${t}</p>
        <p>${r}</p>
        <p>${s}</p>
        <button class="book-button" type="button">Learn more</button>
      </li>
    `}).join("");l.innerHTML=o}const d=document.querySelector(".categories");d.addEventListener("change",p);i();async function p(n){const o=n.target.value;try{const r=(await a.get(`https://books-backend.p.goit.global/books/category?category=${encodeURIComponent(o)}`)).data;u(r)}catch(c){console.error("Error loading Books",c)}}
//# sourceMappingURL=index.js.map
