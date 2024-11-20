(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{6634:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/ebpf",function(){return s(595)}])},1097:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var a=s(4848),r=s(3422),i=s(6632),n=s(3155);function o(){return(0,a.jsxs)("footer",{className:"mt-8 text-center text-gray-400 text-sm",children:[(0,a.jsxs)("p",{className:"mb-4",children:["Created by ",(0,a.jsx)("a",{className:"text-blue-300",target:"_blank",href:"https://www.purutuladhar.com",children:"Puru Tuladhar"})," – Sharpen your skills and keep learning!"]}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,a.jsx)("a",{href:"https://twitter.com/ptuladhar3",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(r.A,{size:24})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/ptuladhar3/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(i.A,{size:24})}),(0,a.jsx)("a",{href:"https://github.com/tuladhar",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-400 transition-colors duration-300","aria-label":"",children:(0,a.jsx)(n.A,{size:24})})]})]})}},595:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var a=s(4848),r=s(5703),i=s.n(r),n=s(6540),o=s(6297),l=s(6486),c=s(3807),m=s(7212),d=s(9965),u=s.n(d),p=s(4685),g=s(1097);let h=[{question:"What is the primary role of eBPF in Cilium?",options:["To manage storage resources","To enable high-performance networking and security","To orchestrate container deployments","To provide a user interface for Kubernetes"],correctAnswers:["To enable high-performance networking and security"],multipleAllowed:!1},{question:"Which of the following is a key benefit of using eBPF?",options:["Increased system complexity","Ability to run programs in kernel space without modifying the kernel","Slower packet processing compared to traditional methods","Dependency on external libraries"],correctAnswers:["Ability to run programs in kernel space without modifying the kernel"],multipleAllowed:!1},{question:"How does eBPF enhance observability in Cilium?",options:["By providing static logging capabilities","Through real-time monitoring and traffic visibility","By requiring manual configuration for each service","By limiting visibility to only Layer 2 traffic"],correctAnswers:["Through real-time monitoring and traffic visibility"],multipleAllowed:!1},{question:"What is a significant advantage of eBPF over traditional IPtables?",options:["Lower resource usage","More granular control over network traffic at runtime","Easier configuration management","Increased reliance on user-space applications"],correctAnswers:["More granular control over network traffic at runtime"],multipleAllowed:!1},{question:"eBPF programs run in which part of the operating system?",options:["User space","Kernel space","Application layer","Network layer"],correctAnswers:["Kernel space"],multipleAllowed:!1},{question:"What does JIT compilation do for eBPF programs?",options:["Compiles bytecode into native machine code for performance","Interprets eBPF code at runtime","Translates programs into user-space applications","Compiles code into a virtual machine format"],correctAnswers:["Compiles bytecode into native machine code for performance"],multipleAllowed:!1},{question:"eBPF can be used for which of the following purposes?",options:["Network filtering and security policies","File system management","Database optimization","User authentication only"],correctAnswers:["Network filtering and security policies"],multipleAllowed:!1},{question:"Cilium leverages eBPF to replace which traditional networking component?",options:["kube-proxy","Flannel","Calico","Weave Net"],correctAnswers:["kube-proxy"],multipleAllowed:!1},{question:"Which statement best describes how eBPF improves performance?",options:["By reducing the need for context switching between user and kernel space","By increasing the number of required system calls","By relying on external load balancers","By executing all programs in user space only"],correctAnswers:["By reducing the need for context switching between user and kernel space"],multipleAllowed:!1},{question:"What is one of the main use cases of eBPF in cloud-native environments?",options:["Managing storage resources","Monitoring network traffic in real-time","Running legacy applications","Configuring virtual machines"],correctAnswers:["Monitoring network traffic in real-time"],multipleAllowed:!1},{question:"How does eBPF enhance security in Cilium?",options:["By providing static firewall rules","Through dynamic policy enforcement based on real-time data","By limiting access to specific IP addresses only","By requiring manual updates for security policies"],correctAnswers:["Through dynamic policy enforcement based on real-time data"],multipleAllowed:!1},{question:"Which feature allows eBPF to run safely within the kernel?",options:["Isolation from core kernel functions","Direct modification of kernel source code","Dependency on user-space applications","Execution without any security checks"],correctAnswers:["Isolation from core kernel functions"],multipleAllowed:!1},{question:"What is a key characteristic that differentiates eBPF-based platforms from IPtables-based platforms?",options:["eBPF-based platforms are slower","IPtables requires more complex configurations","eBPF allows dynamic updates without downtime","IPtables supports more protocols than eBPF-based platforms"],correctAnswers:["eBPF allows dynamic updates without downtime"],multipleAllowed:!1},{question:"What type of events can trigger eBPF programs?",options:["Only network-related events","Various events including network, process, and system calls","Only file system events","User-defined events only"],correctAnswers:["Various events including network, process, and system calls"],multipleAllowed:!1}],x=["A","B","C","D","E","F","G","H"],f=1e3/h.length;function w(){let[e,t]=(0,n.useState)(0),[s,r]=(0,n.useState)(0),[d,w]=(0,n.useState)([]),[y,b]=(0,n.useState)(!1),[j,v]=(0,n.useState)([]),[A,N]=(0,n.useState)(!1),[k,B]=(0,n.useState)(0),P=t=>{let s=h[e];s.multipleAllowed?d.includes(t)?w(e=>e.filter(e=>e!==t)):d.length<(s.maxSelections||1/0)&&w(e=>[...e,t]):w([t])},z=h[e],q=z.multipleAllowed&&d.length>=(z.maxSelections||1/0),F=z.multipleAllowed?d.length!==z.maxSelections:0===d.length;return(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 bg-pattern",children:[(0,a.jsx)(i(),{id:"5aaa0a84c2479658",children:".bg-pattern{background-image:url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")}"}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 w-full max-w-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg p-4 sm:p-6 md:p-8",children:[(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 flex justify-center mb-6",children:(0,a.jsx)(u(),{src:"/logo.png",alt:"Quiz Logo",width:160,height:160,className:"rounded-full bg-gray-700 p-2"})}),(0,a.jsx)(o.N,{mode:"wait",children:y?(0,a.jsxs)(l.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:"text-center",children:[(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-100",children:"Quiz Completed!"}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl mb-4 sm:mb-6 text-blue-300",children:["Your score: ",Math.round(s)," / ",1e3]}),(0,a.jsx)("p",{className:"jsx-5aaa0a84c2479658 "+"text-xl sm:text-2xl mb-2 ".concat(A?"text-green-400":"text-red-400"),children:A?"Congratulations! You passed with ".concat(k,"%"):"Sorry, you did not pass. You scored ".concat(k,"%")}),(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mt-6 sm:mt-8 text-left",children:[(0,a.jsx)("h3",{className:"jsx-5aaa0a84c2479658 text-lg sm:text-xl font-semibold mb-4 text-gray-100",children:"Question Summary:"}),h.map((e,t)=>(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 sm:mb-6 bg-gray-700 bg-opacity-50 rounded-lg p-3 sm:p-4",children:[(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 font-medium mb-2 text-gray-100",children:[t+1,". ",e.question]}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 mb-2",children:e.options.map((t,s)=>(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"".concat(e.correctAnswers.includes(t)?"text-green-400":"text-gray-300"),children:[x[s],". ",t]},s))}),(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 "+"flex items-center ".concat(JSON.stringify(j[t].sort())===JSON.stringify(e.correctAnswers.sort())?"text-green-400":"text-red-400"),children:["Your Answer(s): ",j[t].map(t=>x[e.options.indexOf(t)]).join(", "),JSON.stringify(j[t].sort())===JSON.stringify(e.correctAnswers.sort())?(0,a.jsx)(c.A,{className:"ml-2 w-5 h-5"}):(0,a.jsx)(m.A,{className:"ml-2 w-5 h-5"})]})]},t))]}),(0,a.jsx)("button",{onClick:()=>{t(0),r(0),w([]),b(!1),v([]),N(!1),B(0)},className:"jsx-5aaa0a84c2479658 mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-lg font-semibold transition-all duration-300 text-white w-full",children:"Restart Quiz"})]},"results"):(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,a.jsxs)("div",{className:"jsx-5aaa0a84c2479658 mb-4 text-lg font-semibold text-blue-300",children:["Question ",e+1," of ",h.length]}),(0,a.jsx)("h2",{className:"jsx-5aaa0a84c2479658 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100",children:z.question}),(0,a.jsx)("div",{className:"jsx-5aaa0a84c2479658 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6",children:z.options.map((e,t)=>(0,a.jsxs)("button",{onClick:()=>P(e),disabled:q&&!d.includes(e),className:"jsx-5aaa0a84c2479658 "+"p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ".concat(d.includes(e)?"bg-green-600 text-white":q?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-700 hover:bg-gray-600 text-gray-100"),children:[(0,a.jsxs)("span",{className:"jsx-5aaa0a84c2479658 font-bold mr-2",children:[x[t],"."]})," ",e]},e))}),z.multipleAllowed&&(0,a.jsxs)("p",{className:"jsx-5aaa0a84c2479658 text-sm text-blue-300 mb-4",children:["This question requires ",z.maxSelections," selections. You have selected ",d.length," out of ",z.maxSelections,"."]}),(0,a.jsx)("button",{onClick:()=>{let a=h[e],i=a.multipleAllowed?a.correctAnswers.every(e=>d.includes(e))&&d.length===a.correctAnswers.length:d[0]===a.correctAnswers[0];if(i&&r(s+f),v([...j,d]),e+1<h.length)t(e+1),w([]);else{let e=s+(i?f:0),t=e>=700;N(t),B(Math.round(e/1e3*100)),b(!0),t&&setTimeout(()=>{(0,p.A)({particleCount:100,spread:70,origin:{y:.6}})},500)}},disabled:F,className:"jsx-5aaa0a84c2479658 "+"w-full p-3 sm:p-4 rounded-lg text-lg font-semibold transition-all duration-300 ".concat(F?"bg-gray-600 cursor-not-allowed text-gray-400":"bg-orange-500 hover:bg-orange-600 text-white"),children:e===h.length-1?"Finish Quiz":"Next Question"})]},"question")}),(0,a.jsx)(g.default,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[448,72,636,593,792],()=>t(6634)),_N_E=e.O()}]);