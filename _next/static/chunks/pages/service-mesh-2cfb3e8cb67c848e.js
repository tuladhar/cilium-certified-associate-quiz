(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{7790:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-mesh",function(){return s(9998)}])},1097:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(4848),i=s(3422),r=s(6632),n=s(3155);function o(){return(0,a.jsxs)("footer",{className:"mt-8 text-center text-gray-400 text-sm",children:[(0,a.jsxs)("p",{className:"mb-4",children:["Created by ",(0,a.jsx)("a",{className:"text-blue-300",target:"_blank",href:"https://www.purutuladhar.com",children:"Puru Tuladhar"})," – Sharpen your skills and keep learning!"]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,a.jsx)("a",{href:"https://twitter.com/ptuladhar3",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(i.A,{size:24})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ptuladhar3/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(r.A,{size:24})}),(0,a.jsx)("a",{href:"https://github.com/tuladhar",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(n.A,{size:24})})]})]})}},9998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var a=s(4848),i=s(5703),r=s.n(i),n=s(6540),o=s(6297),c=s(6486),l=s(3807),d=s(7212),u=s(9965),m=s.n(u),g=s(4685),h=s(1097);let p=[{question:"What is the primary function of the Ingress or Gateway API in a service mesh?",options:["To manage internal service-to-service communication","To route external traffic to services within the cluster","To monitor service performance","To enforce security policies"],correctAnswers:["To route external traffic to services within the cluster"],multipleAllowed:!1},{question:"Which of the following is a common use case for implementing a service mesh?",options:["Managing stateful applications","Handling service-to-service communication in microservices architecture","Optimizing database queries","Providing storage solutions"],correctAnswers:["Handling service-to-service communication in microservices architecture"],multipleAllowed:!1},{question:"What is one of the key benefits of using the Gateway API over traditional Ingress?",options:["Simplified configuration management","More granular control over traffic routing","Reduced latency in service calls","Automatic scaling of services"],correctAnswers:["More granular control over traffic routing"],multipleAllowed:!1},{question:"How does Cilium encrypt traffic in transit?",options:["By using TLS (Transport Layer Security)","By implementing IPsec","By using VPN tunnels","Traffic cannot be encrypted with Cilium"],correctAnswers:["By using TLS (Transport Layer Security)"],multipleAllowed:!1},{question:"In a sidecar-based architecture, what role does the sidecar proxy play?",options:["It manages application state","It handles all inbound and outbound traffic for a service","It provides data storage capabilities","It serves as a load balancer only"],correctAnswers:["It handles all inbound and outbound traffic for a service"],multipleAllowed:!1},{question:"What is a primary advantage of sidecarless architectures?",options:["Increased complexity in deployment","Reduced resource overhead compared to sidecar-based approaches","Improved security through isolation","Enhanced observability features"],correctAnswers:["Reduced resource overhead compared to sidecar-based approaches"],multipleAllowed:!1},{question:"Canary deployments' are best supported by which feature of a service mesh?",options:["Traffic splitting","Service discovery","Load balancing","Monitoring"],correctAnswers:["Traffic splitting"],multipleAllowed:!1},{question:"Which protocol is commonly used for encrypting traffic in transit between microservices?",options:["HTTP/2","WebSocket","gRPC","TLS/SSL"],correctAnswers:["TLS/SSL"],multipleAllowed:!1},{question:"'Service discovery' in a service mesh allows for what capability?",options:["Automatically managing database connections","Dynamically locating and connecting to services","Enforcing security policies across services","Monitoring application performance metrics"],correctAnswers:["Dynamically locating and connecting to services"],multipleAllowed:!1},{question:"Load balancing' in a service mesh primarily helps with what aspect?",options:["Distributing incoming requests evenly across multiple service instances","Caching responses from services","Storing data securely","Encrypting data at rest"],correctAnswers:["Distributing incoming requests evenly across multiple service instances"],multipleAllowed:!1},{question:"Observability' features in a service mesh include which of the following?",options:["Logging, monitoring, and tracing","Load balancing and traffic routing","Service discovery and authentication","Data storage and retrieval"],correctAnswers:["Logging, monitoring, and tracing"],multipleAllowed:!1},{question:"Mutual TLS (mTLS)' provides what benefit in a service mesh?",options:["Ensures that both client and server authenticate each other","Improves performance by reducing latency","Simplifies network configuration","Eliminates the need for encryption"],correctAnswers:["Ensures that both client and server authenticate each other"],multipleAllowed:!1},{question:"Circuit breaking' is a pattern used in service meshes to handle what situation?",options:["Preventing overload on services during high traffic","Routing requests to different services","Encrypting sensitive data","Scaling services automatically"],correctAnswers:["Preventing overload on services during high traffic"],multipleAllowed:!1}],x=["A","B","C","D","E","F","G","H"],f=1e3/p.length;function b(){let[e,t]=(0,n.useState)(0),[s,i]=(0,n.useState)(0),[u,b]=(0,n.useState)([]),[y,v]=(0,n.useState)(!1),[w,j]=(0,n.useState)([]),[A,N]=(0,n.useState)(!1),[S,z]=(0,n.useState)(0),T=t=>{let s=p[e];s.multipleAllowed?u.includes(t)?b(e=>e.filter(e=>e!==t)):u.length<(s.maxSelections||1/0)&&b(e=>[...e,t]):b([t])},q=p[e],k=q.multipleAllowed&&u.length>=(q.maxSelections||1/0),C=q.multipleAllowed?u.length!==q.maxSelections:0===u.length;return(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 bg-pattern",children:[(0,a.jsx)(r(),{id:"5aaa0a84c2479658",children:".bg-pattern{background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")}"}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 w-full max-w-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 md:p-8",children:[(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 flex justify-center mb-6",children:(0,a.jsx)(m(),{src:"/logo.png",alt:"Quiz Logo",width:160,height:160,className:"rounded-full bg-gray-700 p-2"})}),(0,a.jsx)(o.N,{mode:"wait",children:y?(0,a.jsxs)(c.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-center",children:[(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-100",children:"Quiz Completed!"}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl mb-4 sm:mb-6 text-blue-300",children:["Your score: ",Math.round(s)," / ",1e3]}),(0,a.jsx)("p",{className:"jsx-5aaa0a84c2479658 "+"text-xl sm:text-2xl mb-2 ".concat(A?"text-green-400":"text-red-400"),children:A?"Congratulations! You passed with ".concat(S,"%"):"Sorry, you did not pass. You scored ".concat(S,"%")}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mt-6 sm:mt-8 text-left",children:[(0,a.jsx)("h3",{className:"jsx-5aaa0a84c2479658 text-lg sm:text-xl font-semibold mb-4 text-gray-100",children:"Question Summary:"}),p.map((e,t)=>(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 sm:mb-6 bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4",children:[(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 font-medium mb-2 text-gray-100",children:[t+1,". ",e.question]}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 mb-2",children:e.options.map((t,s)=>(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"".concat(e.correctAnswers.includes(t)?"text-green-400":"text-gray-300"),children:[x[s],". ",t]},s))}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"flex items-center ".concat(JSON.stringify(w[t].sort())===JSON.stringify(e.correctAnswers.sort())?"text-green-400":"text-red-400"),children:["Your Answer(s): ",w[t].map(t=>x[e.options.indexOf(t)]).join(", "),JSON.stringify(w[t].sort())===JSON.stringify(e.correctAnswers.sort())?(0,a.jsx)(l.A,{className:"ml-2 w-5 h-5"}):(0,a.jsx)(d.A,{className:"ml-2 w-5 h-5"})]})]},t))]}),(0,a.jsx)("button",{onClick:()=>{t(0),i(0),b([]),v(!1),j([]),N(!1),z(0)},className:"jsx-5aaa0a84c2479658 mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-lg font-semibold transition-all duration-300 text-white w-full",children:"Restart Quiz"})]},"results"):(0,a.jsxs)(c.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 text-lg font-semibold text-blue-300",children:["Question ",e+1," of ",p.length]}),(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100",children:q.question}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6",children:q.options.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>T(e),disabled:k&&!u.includes(e),className:"jsx-5aaa0a84c2479658 "+"p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ".concat(u.includes(e)?"bg-green-600 text-white":k?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-700 hover:bg-gray-600 text-gray-100"),children:[(0,a.jsxs)("span",{className:"jsx-5aaa0a84c2479658 font-bold mr-2",children:[x[t],"."]})," ",e]},e))}),q.multipleAllowed&&(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-sm text-blue-300 mb-4",children:["This question requires ",q.maxSelections," selections. You have selected ",u.length," out of ",q.maxSelections,"."]}),(0,a.jsx)("button",{onClick:()=>{let a=p[e],r=a.multipleAllowed?a.correctAnswers.every(e=>u.includes(e))&&u.length===a.correctAnswers.length:u[0]===a.correctAnswers[0];if(r&&i(s+f),j([...w,u]),e+1<p.length)t(e+1),b([]);else{let e=s+(r?f:0),t=e>=700;N(t),z(Math.round(e/1e3*100)),v(!0),t&&setTimeout(()=>{(0,g.A)({particleCount:100,spread:70,origin:{y:.6}})},500)}},disabled:C,className:"jsx-5aaa0a84c2479658 "+"w-full p-3 sm:p-4 rounded-lg text-lg font-semibold transition-all duration-300 ".concat(C?"bg-gray-600 cursor-not-allowed text-gray-400":"bg-orange-500 hover:bg-orange-600 text-white"),children:e===p.length-1?"Finish Quiz":"Next Question"})]},"question")}),(0,a.jsx)(h.default,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[448,72,636,593,792],()=>t(7790)),_N_E=e.O()}]);