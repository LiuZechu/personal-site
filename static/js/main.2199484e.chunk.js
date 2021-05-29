(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[1],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,u=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(u);var o=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=n(5),h=n(22),d=[{index:!0,label:"Liu Zechu",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Blog",path:"/blog"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Liu Zechu"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:liuzechu2013@gmail.com",children:"liuzechu2013@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Zechu. I like learning and creating new things. I'm a senior undergraduate student in the ",Object(c.jsx)("a",{href:"https://nus.edu.sg/",children:"National University of Singapore (NUS)"}),", graduating in June 2022. I major in Computer Science, and I'm also in the ",Object(c.jsx)("a",{href:"https://www.usp.nus.edu.sg/",children:"Univeristy Scholars Programme (USP)"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/about")?Object(c.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"}):Object(c.jsx)(b.b,{to:"/about",className:"button",children:"About Me"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Liu Zechu ",Object(c.jsx)(b.b,{to:"/",children:"xxxxxxxx.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Liu Zechu",defaultTitle:"Liu Zechu",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"Liu Zechu's personal website."};t.a=N},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),l=n(30),a=n(31),s=n(32),r=n(33),j=[{link:"https://github.com/LiuZechu",label:"Github",icon:l.faGithub},{link:"https://www.instagram.com/zechuuu/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/zechu-liu/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:liuzechu2013@gmail.com",label:"Email",icon:r.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),s=n(5),r=n(3),j=n(21),u=(n(46),Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,168))}))),o=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,176))})),b=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,169))})),h=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,170))})),d=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,175))})),O=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,173))})),x=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(14)]).then(n.bind(null,174))})),m=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,177))})),p=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,171))})),f=function(){return Object(c.jsx)(s.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(r.a,{path:"/about",component:u}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:x}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{path:"/blog",component:m}),Object(c.jsx)(r.a,{path:"/blogs/:id",component:p}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},g=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(f,{})})},N=document.getElementById("root");N.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(g,{}),N):Object(a.render)(Object(c.jsx)(g,{}),N)}},[[47,2,3]]]);
//# sourceMappingURL=main.2199484e.chunk.js.map