import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as d}from"./assets/vendor-BB5ie5fK.js";const i=document.querySelector("#datetime-picker"),s=document.querySelector("[data-start]");s.disabled=!0;const n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},a={userSelectedDate:0,idInterval:0,start(){const t=this.userSelectedDate-Date.now();if(t<=0){clearInterval(this.idInterval),i.disabled=!1,d.info({title:"Stop",message:"Time is over!",position:"topCenter"});return}const e=l(t);u(e)}};function u({days:t,hours:e,minutes:o,seconds:c}){n.days.textContent=r(t),n.hours.textContent=r(e),n.minutes.textContent=r(o),n.seconds.textContent=r(c)}const S={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(t){const e=t[0].getTime()-Date.now();if(e<=0){d.error({title:"Error",message:"Please choose a date in the future",position:"topCenter"});return}s.disabled=!1,a.userSelectedDate=t[0].getTime();const o=l(e);u(o)}};function r(t){return String(t).padStart(2,"0")}function l(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}s.addEventListener("click",()=>{s.disabled=!0,i.disabled=!0,a.idInterval=setInterval(()=>{a.start()},1e3)});p(i,S);
//# sourceMappingURL=1-timer.js.map
