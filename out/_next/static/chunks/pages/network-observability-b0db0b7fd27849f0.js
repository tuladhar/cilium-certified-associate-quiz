(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{3404:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/network-observability",function(){return s(129)}])},1097:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(4848),i=s(3422),o=s(6632),l=s(3155);function r(){return(0,a.jsxs)("footer",{className:"mt-8 text-center text-gray-400 text-sm",children:[(0,a.jsxs)("p",{className:"mb-2",children:["Created by ",(0,a.jsx)("a",{className:"text-blue-300",target:"_blank",href:"https://www.purutuladhar.com",children:"Puru Tuladhar"})," – Sharpen your skills and keep learning!"]}),(0,a.jsxs)("a",{href:"https://tally.so/r/3N4O8W",target:"_blank",className:"text-underline",children:["Leave a ",(0,a.jsx)("span",{className:"text-blue-300",children:"feedback"})]})," | ",(0,a.jsxs)("a",{href:"https://patreon.com/puru",target:"_blank",className:"",children:["Support me on ",(0,a.jsx)("span",{className:"text-blue-300",children:"Patreon"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,a.jsx)("a",{href:"https://twitter.com/ptuladhar3",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(i.A,{size:24})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ptuladhar3/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(o.A,{size:24})}),(0,a.jsx)("a",{href:"https://github.com/tuladhar",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(l.A,{size:24})})]})]})}},129:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var a=s(4848),i=s(5703),o=s.n(i),l=s(6540),r=s(6297),n=s(6486),c=s(3807),d=s(7212),u=s(9965),m=s.n(u),b=s(4685),p=s(1097);let h=[{question:"What is Hubble primarily used for in a Cilium environment?",options:["Traffic routing","Network observability and security monitoring","Service discovery","Data storage"],correctAnswers:["Network observability and security monitoring"],multipleAllowed:!1},{question:"Which protocol does Hubble utilize to provide deep visibility into network traffic?",options:["TCP","UDP","eBPF","HTTP"],correctAnswers:["eBPF"],multipleAllowed:!1},{question:"What command is used to observe network flows in Hubble?",options:["hubble status","hubble observe","hubble list","hubble traffic"],correctAnswers:["hubble observe"],multipleAllowed:!1},{question:"How can you enable Layer 7 protocol visibility in Hubble?",options:["By configuring TLS settings","By using specific annotations in services","By enabling HTTP visibility in the configuration","Layer 7 visibility cannot be enabled"],correctAnswers:["By enabling HTTP visibility in the configuration"],multipleAllowed:!1},{question:"What is the purpose of the 'hubble status' command?",options:["To display the current network policies","To show the health and performance metrics of Hubble","To list all services in the cluster","To configure Hubble settings"],correctAnswers:["To show the health and performance metrics of Hubble"],multipleAllowed:!1},{question:"Hubble UI provides which of the following features?",options:["Graphical representation of traffic flows","Command line access to Hubble commands","Service discovery capabilities","Data storage and retrieval"],correctAnswers:["Graphical representation of traffic flows"],multipleAllowed:!1},{question:"Hubble observe can filter traffic based on which criteria?",options:["Source IP only","Destination port only","Protocol type, source, and destination labels","Service names only"],correctAnswers:["Protocol type, source, and destination labels"],multipleAllowed:!1},{question:"Hubble relay is used for what purpose?",options:["To balance traffic between services","To aggregate flow data from multiple nodes","To enforce network policies","To store historical traffic data"],correctAnswers:["To aggregate flow data from multiple nodes"],multipleAllowed:!1},{question:"Port forwarding is necessary for which aspect of using Hubble?",options:["To connect to external databases","To access the Hubble API from outside the cluster","To enable service discovery","To manage Kubernetes resources"],correctAnswers:["To access the Hubble API from outside the cluster"],multipleAllowed:!1},{question:"Hubble observe --follow allows you to do what?",options:["View historical traffic data","Continuously monitor and display live traffic flows","Filter traffic by specific protocols only","Export traffic data to a file"],correctAnswers:["Continuously monitor and display live traffic flows"],multipleAllowed:!1},{question:"Hubble list namespaces command provides what information?",options:["List all active services in a namespace","Display all namespaces available in the cluster","Show detailed information about each namespace","List all network policies defined in a namespace"],correctAnswers:["Display all namespaces available in the cluster"],multipleAllowed:!1},{question:"HTTP method filtering in Hubble allows you to do what?",options:["Limit observed flows by specific HTTP methods","Restrict access to certain services","Monitor only GET requests","Enable caching for specific requests"],correctAnswers:["Limit observed flows by specific HTTP methods"],multipleAllowed:!1},{question:"Hubble observe --http-path /api/v1/.* would filter flows based on what criteria?",options:["Source IP address","HTTP request paths matching the regex pattern","Destination ports only","Service names only"],correctAnswers:["HTTP request paths matching the regex pattern"],multipleAllowed:!1},{question:"Hubble's observability capabilities include which of the following aspects?",options:["Traffic monitoring and service dependency mapping","Data storage and retrieval","Load balancing between services","Resource allocation management"],correctAnswers:["Traffic monitoring and service dependency mapping"],multipleAllowed:!1},{question:"Health checks in Hubble provide what type of information?",options:["Status of individual pods","Overall health of the Hubble service and its components","Performance metrics for network policies","Resource usage statistics for Cilium agents"],correctAnswers:["Overall health of the Hubble service and its components"],multipleAllowed:!1}],x=["A","B","C","D","E","F","G","H"],f=1e3/h.length;function g(){let[e,t]=(0,l.useState)(0),[s,i]=(0,l.useState)(0),[u,g]=(0,l.useState)([]),[w,y]=(0,l.useState)(!1),[v,j]=(0,l.useState)([]),[N,A]=(0,l.useState)(!1),[T,H]=(0,l.useState)(0),k=t=>{let s=h[e];s.multipleAllowed?u.includes(t)?g(e=>e.filter(e=>e!==t)):u.length<(s.maxSelections||1/0)&&g(e=>[...e,t]):g([t])},S=h[e],P=S.multipleAllowed&&u.length>=(S.maxSelections||1/0),z=S.multipleAllowed?u.length!==S.maxSelections:0===u.length;return(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 bg-pattern",children:[(0,a.jsx)(o(),{id:"5aaa0a84c2479658",children:".bg-pattern{background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")}"}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 w-full max-w-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 md:p-8",children:[(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 flex justify-center mb-6",children:(0,a.jsx)(m(),{src:"/logo.png",alt:"Quiz Logo",width:160,height:160,className:"rounded-lg bg-gray-700 p-2"})}),(0,a.jsx)("h1",{className:"jsx-5aaa0a84c2479658 text-3xl md:text-4xl font-bold text-center mb-6 text-blue-300",children:"Netwokr Observability"}),(0,a.jsx)(r.N,{mode:"wait",children:w?(0,a.jsxs)(n.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-center",children:[(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-100",children:"Quiz Completed!"}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl mb-4 sm:mb-6 text-blue-300",children:["Your score: ",Math.round(s)," / ",1e3]}),(0,a.jsx)("p",{className:"jsx-5aaa0a84c2479658 "+"text-xl sm:text-2xl mb-2 ".concat(N?"text-green-400":"text-red-400"),children:N?"Congratulations! You passed with ".concat(T,"%"):"Sorry, you did not pass. You scored ".concat(T,"%")}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mt-6 sm:mt-8 text-left",children:[(0,a.jsx)("h3",{className:"jsx-5aaa0a84c2479658 text-lg sm:text-xl font-semibold mb-4 text-gray-100",children:"Question Summary:"}),h.map((e,t)=>(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 sm:mb-6 bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4",children:[(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 font-medium mb-2 text-gray-100",children:[t+1,". ",e.question]}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 mb-2",children:e.options.map((t,s)=>(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"".concat(e.correctAnswers.includes(t)?"text-green-400":"text-gray-300"),children:[x[s],". ",t]},s))}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"flex items-center ".concat(JSON.stringify(v[t].sort())===JSON.stringify(e.correctAnswers.sort())?"text-green-400":"text-red-400"),children:["Your Answer(s): ",v[t].map(t=>x[e.options.indexOf(t)]).join(", "),JSON.stringify(v[t].sort())===JSON.stringify(e.correctAnswers.sort())?(0,a.jsx)(c.A,{className:"ml-2 w-5 h-5"}):(0,a.jsx)(d.A,{className:"ml-2 w-5 h-5"})]})]},t))]}),(0,a.jsx)("button",{onClick:()=>{t(0),i(0),g([]),y(!1),j([]),A(!1),H(0)},className:"jsx-5aaa0a84c2479658 mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-lg font-semibold transition-all duration-300 text-white w-full",children:"Restart Quiz"})]},"results"):(0,a.jsxs)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 text-lg font-semibold text-blue-300",children:["Question ",e+1," of ",h.length]}),(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100",children:S.question}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6",children:S.options.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>k(e),disabled:P&&!u.includes(e),className:"jsx-5aaa0a84c2479658 "+"p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ".concat(u.includes(e)?"bg-green-600 text-white":P?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-700 hover:bg-gray-600 text-gray-100"),children:[(0,a.jsxs)("span",{className:"jsx-5aaa0a84c2479658 font-bold mr-2",children:[x[t],"."]})," ",e]},e))}),S.multipleAllowed&&(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-sm text-blue-300 mb-4",children:["This question requires ",S.maxSelections," selections. You have selected ",u.length," out of ",S.maxSelections,"."]}),(0,a.jsx)("button",{onClick:()=>{let a=h[e],o=a.multipleAllowed?a.correctAnswers.every(e=>u.includes(e))&&u.length===a.correctAnswers.length:u[0]===a.correctAnswers[0];if(o&&i(s+f),j([...v,u]),e+1<h.length)t(e+1),g([]);else{let e=s+(o?f:0),t=e>=700;A(t),H(Math.round(e/1e3*100)),y(!0),t&&setTimeout(()=>{(0,b.A)({particleCount:100,spread:70,origin:{y:.6}})},500)}},disabled:z,className:"jsx-5aaa0a84c2479658 "+"w-full p-3 sm:p-4 rounded-lg text-lg font-semibold transition-all duration-300 ".concat(z?"bg-gray-600 cursor-not-allowed text-gray-400":"bg-orange-500 hover:bg-orange-600 text-white"),children:e===h.length-1?"Finish Quiz":"Next Question"})]},"question")}),(0,a.jsx)(p.default,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[448,72,636,593,792],()=>t(3404)),_N_E=e.O()}]);