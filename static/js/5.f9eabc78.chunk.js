(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{179:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n(5),s=n(21),a=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"degree-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{className:"school",children:Object(r.jsx)("a",{href:t.link,children:t.school})}),Object(r.jsxs)("p",{className:"degree",children:[t.degree,", ",t.year]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},c=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(a,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Working Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d,p=n(70),b=n(71),f=n(76),g=n(74),h=n(51),y=n(50),j=n(72),S=function(e){var t=e.data.title;return Object(r.jsx)("button",{className:"skill-tile",type:"button",children:t})},O=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(y.a)(Object(y.a)({},n),{},Object(h.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},r.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(y.a)(Object(y.a)({},e),{},Object(h.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),r}return Object(b.a)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(j.a,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"You may click on a skill to view related projects. [TODO]"})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(i.Component);O.defaultProps={skills:[],categories:[]};var v=O,k=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(t.link)},children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};k.defaultProps={last:!1};var C=k,x=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.map((function(e,n){return Object(r.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};x.defaultProps={data:[]};var w=x,N=[{title:"Natural Language Processing",number:"CS4248",link:"https://nusmods.com/modules/CS4248/natural-language-processing",university:"NUS"},{title:"AI Planning and Decision Making",number:"CS4246",link:"https://nusmods.com/modules/CS4246/ai-planning-and-decision-making",university:"NUS"},{title:"Machine Learning",number:"CS3244",link:"https://nusmods.com/modules/CS3244/machine-learning",university:"NUS"},{title:"Software Product Engineering for Digital Markets",number:"CS3216",link:"https://nusmods.com/modules/CS3216/software-product-engineering-for-digital-markets",university:"NUS"},{title:"Software Engineering on Modern Application Platforms",number:"CS3217",link:"https://nusmods.com/modules/CS3217/software-engineering-on-modern-application-platforms",university:"NUS"},{title:"Introduction to Artificial Intelligence",number:"CS3243",link:"https://nusmods.com/modules/CS3243/introduction-to-artificial-intelligence",university:"NUS"},{title:"Design and Analysis of Algorithms",number:"CS3230",link:"https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms",university:"NUS"},{title:"Introduction to Operating Systems",number:"CS2106",link:"https://nusmods.com/modules/CS2106/introduction-to-operating-systems",university:"NUS"},{title:"Introduction to Computer Networks",number:"CS2105",link:"https://nusmods.com/modules/CS2105/introduction-to-computer-networks",university:"NUS"},{title:"Software Engineering",number:"CS2103",link:"https://nusmods.com/modules/CS2103/software-engineering",university:"NUS"},{title:"Introduction to Information Security",number:"CS2107",link:"https://nusmods.com/modules/CS2107/introduction-to-information-security",university:"NUS"},{title:"Data Structures and Algorithms",number:"CS2040",link:"https://nusmods.com/modules/CS2040/data-structures-and-algorithms",university:"NUS"},{title:"Probability and Statistics",number:"ST2334",link:"https://nusmods.com/modules/ST2334/probability-and-statistics",university:"NUS"},{title:"Programming Methodology II",number:"CS2030",link:"https://nusmods.com/modules/CS2030/programming-methodology-ii",university:"NUS"},{title:"Programming Methodology",number:"CS1101S",link:"https://nusmods.com/modules/CS1101S/programming-methodology",university:"NUS"},{title:"Discrete Structures",number:"CS1231",link:"https://nusmods.com/modules/CS1231/discrete-structures",university:"NUS"},{title:"Linear Algebra",number:"MA1101R",link:"https://nusmods.com/modules/MA1101R/linear-algebra-i",university:"NUS"},{title:"Calculus for Computing",number:"MA1521",link:"https://nusmods.com/modules/MA1521/calculus-for-computing",university:"NUS"}],P=[{school:"National University of Singapore (NUS)",degree:"Computer Science (Hons), Bachelor of Computing",link:"https://nus.edu.sg/",year:"Aug 2018 - Jun 2022",points:["Cumulative GPA: 4.91 (out of 5)","School of Computing Dean's List, AY 2019/2020 Semesters 1 & 2, AY 2020/2021 Semester 1"]},{school:"NUS University Scholars Programme (USP)",degree:"Four-year Interdisciplinary Academic Programme",link:"https://www.usp.nus.edu.sg/",year:"Aug 2018 - Jun 2022",points:["USP Honour Roll, AY 2019/2020","Served as Internal Coordinator in Core Team for USP Connect Tuition, a weekly volunteering mentorship programme for primary school children, 2019 - 2020","Serving as Senior Ambassador in USP Ambassadors, 2019 - 2021"]},{school:"University of Cambridge",degree:"International Summer Programmes",link:"https://www.ice.cam.ac.uk/courses/international-summer-programmes",year:"Jul 2019",points:["Attended Cambridge International Summer Programmes",'Took the course "Managing the world: international politics and the global order".']},{school:"Raffles Institution",degree:"High School",link:"http://www.ri.edu.sg/",year:"Jan 2016 - Dec 2017",points:["Scored straight A's in Singapore-Cambridge A-Level exams (90 rank points)","Dean's Lists (top 5%) in Physics, Chemistry and Economics in school exams","Served as Programme Coordinator in the Executive Committee (EXCO) of Film Society","An active \xe9p\xe9e fencer in Fencing Club"]},{school:"St. Patrick's School",degree:"Secondary School",link:"https://stpatricks.moe.edu.sg/",year:"Jan 2013 - Dec 2015",points:["National Civil Defence Cadet Corps (NCDCC)"]}],A=[{company:"Cloudflare",position:"Solutions Engineer Intern",link:"https://www.cloudflare.com/",daterange:"May 2021 - Aug 2021",points:["Currently interning.","Will update soon."]},{company:"HOPE Technik",position:"Software Engineer Intern (Part-time)",link:"https://www.hopetechnik.com/who-we-are/",daterange:"Jan 2021 - Apr 2021",points:["Built an Android app integrated with WebRTC real-time video streaming and a fingerprint scanner.","Implemented REST API server that facilitates communication between Robot Operating System (ROS) and Android"]},{company:"Visa",position:"Software Engineer Intern",link:"https://www.visa.com.sg/",daterange:"May 2020 - Jul 2020",points:["Interned under Digital and Developer Platform team.","Explored solutions that leverage Visa payment APIs to mitigate impact of Covid-19 for cardholders, and developed an application that provides diners with a seamless and contactless experience of ordering and paying.","Drafted a solution to accelerate cash displacement together with teammates."]},{company:"NUS School of Computing",position:"Teaching Assistant",link:"https://www.facebook.com/cs1101s/",daterange:"Aug 2019 - Dec 2019",points:["For CS1101S (Programming Methodology I).","Conducted tutorials and consultation sessions.","Prepared teaching materials.","Graded students' assignments.","Received 4.8/5 mean rating in anonymous feedback and 4 students\u2019 nominations for teaching awards."]}],U=n(75),D="Languages",R="Backend",E="Web Dev",I="Mobile App Dev",L="ML",T="Tools",M=[{title:"Javascript",category:[D,E]},{title:"Node.JS",category:[R]},{title:"React",category:[E]},{title:"Vue.JS",category:[E]},{title:"Flutter Web",category:[E]},{title:"Ruby on Rails",category:[E]},{title:"Heroku",category:[R]},{title:"SQL/PostgreSQL",category:[R,D]},{title:"Express.JS",category:[R]},{title:"Git",category:[T]},{title:"Linux",category:[T]},{title:"Numpy",category:[L]},{title:"Tensorflow + Keras",category:[L]},{title:"PyTorch",category:[L]},{title:"HTML + CSS",category:[E,D]},{title:"Python",category:[D]},{title:"C++",category:[D]},{title:"Ruby",category:[D]},{title:"Dart",category:[D]},{title:"LATEX",category:[T]},{title:"Pandas",category:[L]},{title:"Scikit-Learn",category:[L]},{title:"Natural Language Processing (NLP)",category:[L]},{title:"Reinforcement Learning",category:[L]},{title:"Java",category:[D,I]},{title:"Swift",category:[D,I]},{title:"Android Dev",category:[I]},{title:"iOS Dev",category:[I]}].map((function(e){return Object(y.a)(Object(y.a)({},e),{},{category:e.category.sort()})})),J=Object(U.a)(new Set(M.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e){return{name:e}})),_=["Education","Experience","Skills","Courses"];t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Liu Zechu's Resume. National University of Singapore, Computer Science, and University Scholars Programme.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(o.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:_.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:P}),Object(r.jsx)(m,{data:A}),Object(r.jsx)(v,{skills:M,categories:J}),Object(r.jsx)(w,{data:N})]})})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(51);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},51:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},70:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},71:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))},72:function(e,t,n){"use strict";var r=n(0);n(1);t.a=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})}},74:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var s=r(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return o(this,n)}}n.d(t,"a",(function(){return s}))},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(15);var i=n(24);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},76:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=5.f9eabc78.chunk.js.map