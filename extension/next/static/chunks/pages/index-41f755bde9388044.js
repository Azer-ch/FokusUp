(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3601)}])},3601:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),s=t(6465),a=t.n(s),i=t(7294),c=t(5675),o=t.n(c);function l(e){let{remainingTime:r}=e;return(0,n.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,n.jsxs)("div",{className:"flex justify-center pt-5 gap-2 w-screen",children:[(0,n.jsx)(o(),{src:"next-assets/icon-white2.png",alt:"checkmark",width:30,height:20}),(0,n.jsx)("h1",{className:"font-bold text-xl",children:"Fokusup"})]}),(0,n.jsx)("div",{className:"border-b-2 w-3/4 border-transparent",children:(0,n.jsx)("div",{id:"progressBar",className:a().dynamic([["dfd18f26cd00be68",[100*r]]])+" border-b-2 w-0 border-white",children:(0,n.jsx)(a(),{id:"dfd18f26cd00be68",dynamic:[100*r],children:"#progressBar{width:".concat(100*r,"%}")})})})]})}let d=e=>{let r=e%60,t=Math.floor(e/60),n=r>9?r:"0".concat(r);return"".concat(t>9?t:"0".concat(t),":").concat(n)},u=e=>{window.Notification?"granted"===Notification.permission?new Notification("FokusUp",{body:e}):Notification.requestPermission().then(function(r){"granted"===r||new Notification("FokusUp",{body:e})}).catch(function(e){console.error(e)}):console.log("Browser does not support notifications.")};function f(e){let{fokusUp:r,setFokusUp:t,setTimer:s,timer:a,setTimeRemaining:c}=e,[o,l]=(0,i.useState)(r?1500:300),[f,m]=(0,i.useState)();return(0,i.useEffect)(()=>{l(r?1500:300),f&&clearInterval(f),m(void 0)},[r]),(0,i.useEffect)(()=>{if(o>=0)s(d(o)),c(r?1-o/1500:1-o/300);else{let e=new Audio("next-assets/alarm.wav");e.play(),clearInterval(f),m(void 0),c(0),r?u("Time to take a break"):u("Time to focus"),t(!r)}},[o]),(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,n.jsx)("p",{className:"text-9xl",children:a}),f?(0,n.jsx)("button",{className:"btn-primary "+(r?"text-primary-100":"text-secondary-100"),onClick:()=>{let e=new Audio("next-assets/click.wav");e.play(),clearInterval(f),m(void 0)},children:"PAUSE"}):(0,n.jsx)("button",{className:"btn-primary "+(r?"text-primary-100":"text-secondary-100"),onClick:()=>{let e=new Audio("next-assets/click.wav");e.play(),m(setInterval(()=>{l(e=>e-1)},1e3))},children:"START"})]})}function m(e){let{fokusUp:r,setFokusUp:t,setTimer:s,timer:a,setTimeRemaining:i}=e;return(0,n.jsxs)("div",{className:"hero-body w-1/2 mr-auto bg-transparent flex flex-col gap-5",children:[(0,n.jsxs)("ul",{className:"flex flex-row list-none align-middle justify-center gap-5 mt-2",children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"pr-3 pl-3 rounded "+(r?"bg-darkTransparent font-bold":""),onClick:()=>t(!0),children:"FokusUp"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"pr-3 pl-3 rounded "+(r?"":"bg-darkTransparent font-bold"),onClick:()=>t(!1),children:"Break"})})]}),(0,n.jsx)(f,{fokusUp:r,setFokusUp:t,setTimer:s,timer:a,setTimeRemaining:i})]})}function b(e){let{fokusUp:r,setFokusUp:t,setTimer:s,timer:a}=e,[c,o]=(0,i.useState)(0);return(0,n.jsxs)("div",{className:"flex flex-col justify-between "+(r?"bg-primary-100":"bg-secondary-100"),children:[(0,n.jsx)(l,{remainingTime:c,fokusUp:r}),(0,n.jsx)(m,{fokusUp:r,setFokusUp:t,setTimer:s,timer:a,setTimeRemaining:o})]})}var x=t(9008),p=t.n(x);function g(){let[e,r]=(0,i.useState)(!0),[t,s]=(0,i.useState)(e?d(1500):d(300));return(0,n.jsxs)("div",{className:a().dynamic([["20899e93f5fd1bd8",[e?"rgb(var(--primary-rgb))":"rgb(var(--secondary-rgb))"]]])+" main "+(e?"bg-primary-100":"bg-secondary-100"),children:[(0,n.jsx)(p(),{children:(0,n.jsx)("title",{className:a().dynamic([["20899e93f5fd1bd8",[e?"rgb(var(--primary-rgb))":"rgb(var(--secondary-rgb))"]]]),children:t})}),(0,n.jsx)(a(),{id:"20899e93f5fd1bd8",dynamic:[e?"rgb(var(--primary-rgb))":"rgb(var(--secondary-rgb))"],children:"body{background:".concat(e?"rgb(var(--primary-rgb))":"rgb(var(--secondary-rgb))","}")}),(0,n.jsx)(b,{fokusUp:e,setFokusUp:r,setTimer:s,timer:t})]})}}},function(e){e.O(0,[264,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);