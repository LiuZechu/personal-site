(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[4],{182:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(71),o=r(72),s=r(77),a=r(76),c=r(51),l=r(50),u=r(1),p=r(5),d=r(21),h=function(e){var t=e.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:t.link,children:t.title})}),Object(n.jsx)("time",{className:"published",children:t.date})]}),Object(n.jsx)("a",{href:t.link,className:"image",children:Object(n.jsx)("img",{src:"".concat("").concat(t.image),alt:t.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:t.desc})})]})})},b=r(73),f=r(74),g=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).handleChildClick=function(e){n.setState((function(t){var r=Object.keys(t.buttons).reduce((function(r,n){return Object(l.a)(Object(l.a)({},r),{},Object(c.a)({},n,e===n&&!t.buttons[n]))}),{});return r.All=!Object.keys(t.buttons).some((function(e){return r[e]})),{buttons:r}}))},n.state=function(e){var t=e.categories,r=e.projects;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(c.a)({},t,!1))}),{All:!0}),projects:r}}({categories:f.a.categories,projects:f.a.projects}),n}return Object(o.a)(r,[{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(n.jsx)(b.a,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"getRelevantProjects",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,r){return e.state.buttons[r]?r:t}),"All");return this.state.projects.filter((function(e){return"All"===t||e.category.includes(t)}))}},{key:"getCells",value:function(){return this.getRelevantProjects().map((function(e){return Object(n.jsx)(h,{data:e},e.title)}))}},{key:"getNumActiveProjects",value:function(){return this.getRelevantProjects().length}},{key:"render",value:function(){return Object(n.jsx)(d.a,{title:"Projects",description:"Learn about Liu Zechu's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(p.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("p",{children:"A selection of my projects."})]})}),Object(n.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(n.jsxs)("p",{children:["Scroll down to view all ",Object(n.jsxs)("b",{children:[this.getNumActiveProjects()," projects"]})," in this category."]}),this.getCells()]})})}}]),r}(u.Component);t.default=g},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(51);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},51:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},71:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},72:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return i}))},73:function(e,t,r){"use strict";var n=r(0);r(1);t.a=function(e){var t=e.handleClick,r=e.active,i=e.label;return Object(n.jsx)("button",{className:"skillbutton ".concat(r[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})}},74:function(e,t,r){"use strict";var n="ML/AI",i="Mobile App",o="Web",s="Other",a=[{title:"GitHub Issue Auto-labeller",subtitle:"Natural Lanuage Processing with information extraction and text categorisation",link:"https://github.com/larrylawl/auto-github-issue-labeller-action",image:"/images/projects/github.gif",date:"Mar 2021 - Apr 2021",desc:"Automatically labelling GitHub issues with NLP. You may try it out on your own GitHub repo!",category:[n],skills:["Python","Natural Language Processing (NLP)","Numpy","Pandas","Tensorflow + Keras","Scikit-Learn"]},{title:"Playlister: Music Recommendation",subtitle:"Machine Learning, audio processing, image classfication",link:"https://drive.google.com/file/d/1-PDZY--h29a1tIOaBdP00rnxar4Kqnug/view",image:"/images/projects/playlister.png",date:"Sep 2020 - Dec 2020",desc:"Worked on a Machine Learning project that aims to recommend songs to users. Mainly in charge of implementing Convolutional Neural Network for music genre classification.",category:[n],skills:["Python","Numpy","Pandas","Tensorflow + Keras","Scikit-Learn"]},{title:"Dish Out",subtitle:"React web app for dish reviews and recommendations in Singapore!",link:"https://dishout.co/",image:"/images/projects/dishout.gif",date:"Sep 2020 - Dec 2020",desc:"Worked with teammates and developed a web app that focuses on dish reviews and recommendations in Singapore. (completed under CS3216)",category:[o],skills:["JavaScript","React","SQL/PostgreSQL","Heroku","Node.JS","HTML + CSS"]},{title:"Relentless",subtitle:"iOS co-op game",link:"https://github.com/relentless-game/Relentless",image:"/images/projects/relentless.jpg",date:"Mar 2020 - May 2020",desc:"Developed with teammates Relentless, a co-op multiplayer iOS game across multiple iOS devices over the network, where players work together to deliver items to households. (completed under CS3217)",category:[i],skills:["iOS Dev","Swift"]},{title:"CSModBuddy",subtitle:"Java desktop application",link:"https://github.com/LiuZechu/CSModBuddy",image:"/images/projects/cs-modbuddy.jpg",date:"Aug 2019 - Nov 2019",desc:"A Java desktop application for NUS CS undergraduates to plan modules and manage their study plans.",category:[s],skills:["Java"]},{title:"Petopia",subtitle:"Pet care service built with Vue.js and PostgreSQL",link:"https://github.com/NUS-CS2102-Database-Systems/CS2102_2021_S1_54",image:"/images/projects/petopia.jpg",date:"Sep 2020 - Dec 2020",desc:"Petopia is a pet care service platform where users can sign up as pet owners or caretakers. Pet owners can look for caretakers to help them care for their pets.",category:[o],skills:["SQL/PostgreSQL","JavaScript","Vue.JS","Heroku","Node.JS","Express.JS"]},{title:"Jars",subtitle:"Android app to help you learn through memory",link:"https://github.com/LiuZechu/Jars",image:"/images/projects/jars.jpg",date:"May 2019 - Aug 2019",desc:"Developed an Android app that automatically forms flashcards from highlighting sentences while reading. The flashcards are reviewed according to spaced repetition that increases memory retention. This project won Apollo 11 (highest) Award in NUS Orbital 2019.",category:[i],skills:["Android Dev","Java"]},{title:"Planit",subtitle:"To-do manager built with Ruby on Rails",link:"https://github.com/LiuZechu/Riding-on-Rails",image:"/images/projects/planit.jpg",date:"Dec 2018 - Jan 2019",desc:"Developed a web app with user sign-in feature that keeps track of user\u2019s to-do tasks, allows basic CRUD operations, and classifies tasks according to tags.",category:[o],skills:["Ruby","Ruby on Rails","Heroku","HTML + CSS"]},{title:"Word Sticker Bot",subtitle:"Telegram bot",link:"https://github.com/chaitanyabaranwal/Word-Sticker-Bot",image:"/images/projects/word-sticker-bot.png",date:"Jan 2019",desc:"A Telegram bot which stylizes text sent by the user and generates a sticker from the text, which is added to the user\u2019s individual sticker set.",category:[s],skills:["Python"]}],c={categories:[n,i,o,s].map((function(e){return{name:e}})),projects:a};t.a=c},76:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=n(e);if(t){var s=n(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return o(this,r)}}r.d(t,"a",(function(){return s}))},77:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=4.bbec2709.chunk.js.map