(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(A,e,t){},25:function(A,e,t){},31:function(A,e,t){"use strict";t.r(e);var a=t(0),c=t(1),o=t.n(c),n=t(16),i=t.n(n);t(24),t(25);var s=function(A){return Object(a.jsx)("div",{children:Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsx)("a",{className:"nav-link text-dark",href:A.link,target:"blank",children:Object(a.jsx)("i",{className:A.icon})})},A.text)},A.text)},g=t.p+"static/media/resume.fbeff834.pdf",l=t(8);var r=function(A){return Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{className:"navbar-brand",to:A.to,children:Object(a.jsx)("li",{className:"nav-item active text-dark",children:A.text},A.text)})},A.text)};function C(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg row",children:[Object(a.jsx)("button",{className:"navbar-toggler ml-2",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"fas fa-hamburger"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(a.jsx)("ul",{className:"navbar-nav ml-3",children:[{to:"/",text:"Levi Halvorson"},{to:"/portfolio",text:"Portfolio"},{to:"/contact",text:"Contact Me"}].map((function(A){return Object(a.jsx)(r,{to:A.to,text:A.text})}))}),Object(a.jsxs)("ul",{className:"navbar-nav col justify-content-end ml-3",children:[Object(a.jsx)("a",{className:"btn btn-dark mb-2 mr-3",target:"blank",href:g,children:"My Resume"}),Object(a.jsx)("div",{className:"icons d-flex flex-row justify-content-around",children:[{link:"https://www.linkedin.com/in/levi-halvorson/",icon:"fab fa-linkedin-in"},{link:"https://github.com/Halvosaurus34",icon:"fab fa-github"},{link:"mailto://lhalvorson34@gmail.com",icon:"far fa-envelope"},{link:"tel:+14038774423",icon:"fas fa-phone"}].map((function(A){return Object(a.jsx)(s,{link:A.link,icon:A.icon,text:A.text})}))})]})]})]})}var D=t(2),d=t.p+"static/media/headshot.b19413cc.jpg";function B(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"container mt-4 rounded shadow",id:"mainCont",children:[Object(a.jsx)("div",{className:"display-4",children:"Hi, I'm Levi Halvorson."}),Object(a.jsx)("img",{src:d,alt:"headshot",className:"w-25 rounded-circle border border-black float-left m-2"}),Object(a.jsx)("div",{className:"lead p-2",children:"Full Stack Web Developer leveraging my background in the oil sector to build more intuitive user experiences on the web. Recently earned a certificate in Full Stack Development from the University of Toronto and developed skills in JavaScript, CSS, MERN stack, and responsive web design. Known as an innovative problem-solver passionate about developing apps, with a focus on mobile-first design and development. Aim for each project is to best engage the audience for an impactful user-experience. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web."})]}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsxs)("div",{className:"row justify-content",children:[Object(a.jsx)("div",{className:"bd-highlight col-6 col-sm-6 col-md-6 col-lg-2",children:Object(a.jsx)("p",{children:"MERN"})}),Object(a.jsx)("div",{className:"bd-highlight col-6 col-sm-6 col-md-6 col-lg-2",children:Object(a.jsx)("p",{children:"HTML5"})}),Object(a.jsx)("div",{className:"bd-highlight col-6 col-sm-6 col-md-6 col-lg-2",children:Object(a.jsx)("p",{children:"CSS3"})}),Object(a.jsx)("div",{className:"bd-highlight col-6 col-sm-6 col-md-6 col-lg-2",children:Object(a.jsx)("p",{children:"JavaScript"})})]})})]})}var w=t(18),b=t(10);function v(){var A=Object(c.useState)(""),e=Object(b.a)(A,2),t=e[0],o=e[1],n=Object(c.useState)(""),i=Object(b.a)(n,2),s=i[0],r=i[1],C=Object(c.useState)(""),D=Object(b.a)(C,2),d=D[0],B=D[1];return Object(a.jsxs)("div",{className:"container contactCont rounded shadow p-3 mt-3 w-auto",children:[Object(a.jsx)("div",{className:"display-4 mb-4 mt-3",children:"Contact Me"}),Object(a.jsxs)("div",{className:"display-5 mb-4",children:["Email: lhalvorson@gmail.com ",Object(a.jsx)("br",{}),"Phone: +1 (403)877-4423"]}),Object(a.jsx)("a",{className:"btn btn-dark mb-2",href:g,children:"My Resume"}),Object(a.jsxs)("form",{name:"contactMe",onSubmit:function(A){var e,a={name:t,email:s,message:d};!t||!s|!d?alert("Please fill out all fields"):(console.log((e=Object(w.a)({"form-name":"contact"},a),Object.keys(e).map((function(A){return encodeURIComponent(A)+"="+encodeURIComponent(e[A])})).join("&"))),A.preventDefault())},"data-netlify-recaptcha":"true","data-netlify":"true",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:t,onChange:function(A){return o(A.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(a.jsx)("input",{type:"email",name:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:s,onChange:function(A){return r(A.target.value)}}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"message",children:"Message"}),Object(a.jsx)("textarea",{className:"form-control",id:"message",name:"message",rows:"3",value:d,onChange:function(A){return B(A.target.value)}})]}),Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-dark mt-2",children:"Submit"})})]})]})}var m=function(A){return Object(a.jsxs)("div",{className:"card p-2 col-lg-4 col-md-6 col-sm-12 mb-2",children:[Object(a.jsx)("img",{src:A.img,className:"card-img-top",alt:"...",style:{height:"20rem"}}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:A.title}),Object(a.jsx)("p",{className:"card-text",children:A.description}),Object(a.jsx)("h5",{children:"Technolgies Used: "}),Object(a.jsx)("p",{children:A.tech}),Object(a.jsx)("br",{}),A.websiteLink?Object(a.jsx)("a",{href:A.websiteLink,target:"blank",className:"btn btn-dark mr-1",children:"Website"}):"",A.gitHubLink?Object(a.jsx)("a",{href:A.gitHubLink,target:"blank",className:"btn btn-dark",children:"GitHub"}):""]})]})},j=t.p+"static/media/weatherIcon.6dc21615.PNG",f=[{img:t.p+"static/media/memories.1b91c0ad.png",title:"Memori",description:"Memori is a social networking site for sharing photos of your memories! Upload your own interesting events and like other posts. You will even be recommended other posts!",websiteLink:"https://levimemori.netlify.app/",gitHubLink:"https://github.com/Halvosaurus34/memori",tech:"React, Redux, MongoDB, Mongoose, Express, NodeJS"},{img:t.p+"static/media/wetBatIcon2.1baadf65.PNG",title:"Wet-Bat Challenge",description:"A coding challenge to make a travel website where you can create travel quotes and view a list of quotes.",websiteLink:"https://shielded-badlands-63088.herokuapp.com/",gitHubLink:"https://github.com/Halvosaurus34/wet-bat-challenge",tech:"NodeJS, MySQL, Express, ReactJS"},{img:"data:image/png;base64,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",title:"JS-Scribblify",description:"An interactive coding environment I published to npm!",gitHubLink:"https://github.com/Halvosaurus34/jbook",tech:"Typescript, Redux, ReactJS"},{img:j,title:"Weather App",description:"An application featuring real time weather searching with use of local storage.",websiteLink:"https://halvosaurus34.github.io/Weather-App/",gitHubLink:"https://github.com/Halvosaurus34/Weather-App",tech:"API, JavaScript, CSS, HTML, local storage"},{img:"data:image/png;base64,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",title:"WallStreet Simulator",description:"My first group project! Buy and sell stocks with simulated currency!",websiteLink:"https://halvosaurus34.github.io/WallStreet-Simulator/",gitHubLink:"https://github.com/Halvosaurus34/Project-1",tech:"API, JavaScript, CSS, HTML"},{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABW9SURBVHhe7d0vkBtH3sfhsMDAkK0ZlZMqw8DAwEBDw4OGhobLDA0NDQMNDQ8aGhoGGhqa3tut7vfO52vbGunXu5ru56n6VlBkrVbSfPR3fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgPtzc3Pz4y7r+8WBZ/kz/vf1lOTx/sBz+eUV7nc/Xg3V9ms/nL8vyez3rwBX6dV1/O96nrOuTep/yV+N2fW9L5+fF8Xyt66N8Ppdl+bmedRhfvsLnG2e6Mbz7ZT38a3dbDp+Odyrr+jgHTP2xgHtyPJguh1dpH5u32WvfcnifoyDdNz6sPxKMJdfusYBbN4C9Lt/hpDseFQ93a13Xn9Jt70Xah+Ztc6fLD4zyg4v6Y8K+5YNjPki2ruzDLIVAutE+qz8y0FG6rf1jtAP/l8sPljwjwK7lp/rzwbF1BR9xx5c1vE8AusgHxOGeRfzWysuNz73UyO6kK+7Yj/q/tnSj9RQexMphPdODic+Xoye/5FEvCrheuVbTFfZN64o80/KzH/UiAS5w/JRQfjTcuJ3NsvzsovcacdVypaYr6tvWFXjOrbf1ogHOUF/vn/rg/+8th7/TfexaLxq4LlO9Pnfi0h3Y03rxABvkTw61blNTr0SAlwO4LvnRbvMKO/uOb+TxxkDYon56aOh3+p+79EDrdb2Y4P6Vb/JrX1ktLVW71+/gNPV9RJ5N/MYe+Ngx16CW+pTvzt2yfIdWLzLgG9L9yfPWbci+3PpHvcjgfqQb64v2ldP+d+ujerEBDfUBhTf9nbD0oOJdvdjg7rmxbpsbLHybBxRb50EF98SN9Zy5wUKLBxTb50EF9yJ/HtWNdfvcYKEt3Z+8bN1m7HvzoII7lq50PvZ35vLfLK8XI5Dkd/57QHHe0oMKHwvkbqUrnW/8O3M+wgP/LT+Kbd1W7IQth4/+YBB3Jn8TVfOKaCctxZOPBMJn0kFszj8eFjYfCeSOHL+fu3kltJO2HD75Ok/4j3Sb8K1/l2w5PK8XJfSVrmx93qyTDoz50fEV7V3zfIbMG3cgy++Jad9GArYc3jdu1/e2dH66fGlaOm1vLuZuHK/IjSvhJctX4Gv8utxef4rUHwmCotdXiednKus/cTXyM3/pvu516/xetBQW9Z+AvnJVN6+EF+ya3xmf37TXOs8XzVN2cNTjJcV8kK0nf3WO76Hq8JKHNwJyJ6IfEV/zjTWrN9jYZwGWw6t68jC1Hh8pvvaP2uYHAK3zfcnS/dRaTx76OB4MG1e+S5YfYdeTv1opUkI/9phOzycBIEkHw9hvFE2xXk/6avV52cMnAegsV2b7ynf+rvG1ui/lA3brvJ87AQBFfjasdRs5e8vh73rSVysfrJvn/aIJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgKgJADoTADETAFAIgJg9WJY/68lDH+lg/ax15btkAgDmJQBilu5T3taTh3i/LMvv6cb1qXXlu2QC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",title:"Fitness Tracker",description:"A fitness app where I use MongoDB to store info.",websiteLink:"https://salty-eyrie-48528.herokuapp.com/",gitHubLink:"https://github.com/Halvosaurus34/Fitness-Tracker",tech:"Express, MongoDB, HTML, CSS"}];function E(){return Object(a.jsxs)("div",{className:"container contactCont rounded shadow p-2 mt-3 mb-3 justify-content-center",id:"portCont",children:[Object(a.jsx)("div",{className:"display-4 ml-5",children:"My Portfolio"}),Object(a.jsx)("div",{className:"row m-3 justify-content-center",children:f.map((function(A){return Object(a.jsx)(m,{img:A.img,title:A.title,description:A.description,websiteLink:A.websiteLink?A.websiteLink:null,gitHubLink:A.gitHubLink,tech:A.tech},A.title)}))})]})}var Q=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)(l.a,{basename:"",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(D.c,{children:[Object(a.jsx)(D.a,{path:"/contact",children:Object(a.jsx)(v,{})}),Object(a.jsx)(D.a,{path:"/Portfolio",children:Object(a.jsx)(E,{})}),Object(a.jsx)(D.a,{path:"/",children:Object(a.jsx)(B,{})})]})]})})})},u=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,n=e.getTTFB;t(A),a(A),c(A),o(A),n(A)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.686d8bdf.chunk.js.map