import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as m}from"./assets/vendor-BbSUbo7J.js";const i=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let c=null,u=null;n.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(c=e,n.disabled=!1)}};y(i,q);n.addEventListener("click",()=>{c&&(n.disabled=!0,i.disabled=!0,u=setInterval(()=>{const e=c-new Date;if(e<=0){clearInterval(u),l(0,0,0,0),i.disabled=!1,m.success({title:"Time's up!",message:"The countdown has finished!",position:"topRight"});return}const{days:o,hours:s,minutes:d,seconds:r}=w(e);l(o,s,d,r)},1e3))});function w(t){const r=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:h,minutes:f,seconds:p}}function l(t,e,o,s){S.textContent=a(t),b.textContent=a(e),g.textContent=a(o),D.textContent=a(s)}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
