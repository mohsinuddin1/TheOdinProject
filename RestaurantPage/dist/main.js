(()=>{"use strict";function t(){const n=document.createElement("div");n.classList.add("home");const a=document.createElement("img");return a.alt="this is chef",n.appendChild(e("Best Biryani in the World")),n.appendChild(t()),n.appendChild(a),n.appendChild(e("Order online or visit us")),n}const e=t=>{const e=document.createElement("p");return e.textContent=t,e},n=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(t())}();function a(t,e){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=t;const c=document.createElement("p");return c.textContent=e,n.appendChild(a),n.appendChild(c),n}function c(){const t=document.createElement("div");t.classList.add("header");const e=document.createElement("h1");e.classList.add("restaurant-name"),e.textContent="Dastarkhwan-E-Lazeez",t.appendChild(e),t.appendChild(function(){const t=document.createElement("nav"),e=document.createElement("button");e.classList.add("button-nav"),e.textContent="HOME",e.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(e),n())}));const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="MENU",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(c),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(a("Hyderbadi Biryani","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),t.appendChild(a("Kolkata Biryani","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil")),t.appendChild(a("Veg Biryani","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil")),t.appendChild(a("Afghani Biryani","Tomato sauce, Bacon, Pineapple, Olives, Basil")),t}())}())}));const d=document.createElement("button");return d.classList.add("button-nav"),d.textContent="Contact",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(d),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("p");e.textContent="📞 123 456 789";const n=document.createElement("p");return n.textContent="🏠 Hollywood Boulevard 42, Los Angeles, USA",t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(e),t.appendChild(c),t.appendChild(d),t}())}function o(t){document.querySelectorAll(".button.nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content"),e=document.createElement("p");e.textContent="mohsin",t.appendChild(e),t.appendChild(c()),o(document.querySelector(".button-nav")),n()}()})();