import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as s}from"./assets/vendor-d78ab9e0.js";const o="feedback-form-state",n=document.querySelector(".feedback-form"),r={};n.addEventListener("submit",c);n.addEventListener("input",s(l,500));function c(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(o))),n.reset(),localStorage.removeItem(o)}function l(e){const{name:t,value:a}=e.target;r[t]=a,localStorage.setItem(o,JSON.stringify(r))}function m(){const e=JSON.parse(localStorage.getItem(o));e&&Object.keys(e).forEach(t=>{n.elements[t].value=e[t]})}m();
//# sourceMappingURL=commonHelpers3.js.map