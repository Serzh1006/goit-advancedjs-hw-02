import{f as p}from"./assets/vendor-BJ-JvjbW.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l=document.querySelector("#datetime-picker"),u=document.querySelector("[data-start]");u.disabled=!0;const a={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},d={userSelectedDate:0,idInterval:0,start(){const t=this.userSelectedDate-Date.now();if(t<=0){clearInterval(this.idInterval),l.disabled=!1;return}const o=m(t);f(o)}};function f({days:t,hours:o,minutes:n,seconds:s}){a.days.textContent=i(t),a.hours.textContent=i(o),a.minutes.textContent=i(n),a.seconds.textContent=i(s)}const S={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(t){const o=t[0].getTime()-Date.now();if(o<=0){alert("Please choose a date in the future");return}u.disabled=!1,d.userSelectedDate=t[0].getTime();const n=m(o);f(n)}};function i(t){return String(t).padStart(2,"0")}function m(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:c,minutes:h,seconds:y}}u.addEventListener("click",()=>{u.disabled=!0,l.disabled=!0,d.idInterval=setInterval(()=>{d.start()},1e3)});p(l,S);
//# sourceMappingURL=1-timer.js.map
