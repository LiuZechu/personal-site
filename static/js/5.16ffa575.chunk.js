(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{179:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i(1),a=i(5),s=i(21),o=function(e){var t=e.data;return Object(n.jsxs)("article",{className:"degree-container",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h2",{className:"school",children:Object(n.jsx)("a",{href:t.link,children:t.school})}),Object(n.jsxs)("p",{className:"degree",children:[t.degree,", ",t.year]})]}),Object(n.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(n.jsx)("li",{children:e},e)}))})]})},c=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"education",children:[Object(n.jsx)("div",{className:"link-to",id:"education"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(n.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return Object(n.jsxs)("article",{className:"research-container",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h4",{children:t.title}),Object(n.jsxs)("p",{className:"keywords",children:[" ","Keywords: ".concat(t.keywords)]}),Object(n.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(n.jsx)("h5",{children:t.description})]})},d=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"research",children:[Object(n.jsx)("div",{className:"link-to",id:"research"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Research"})}),t.map((function(e){return Object(n.jsx)(u,{data:e},e.title)}))]})};d.defaultProps={data:[]};var m=d,h=function(e){var t=e.data;return Object(n.jsxs)("article",{className:"jobs-container",children:[Object(n.jsx)("img",{src:"".concat("/personal-site").concat(t.image),alt:"".concat(t.company,"'s logo")}),Object(n.jsxs)("header",{children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(n.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(n.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(n.jsx)("li",{children:e},e)}))})]})},g=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"experience",children:[Object(n.jsx)("div",{className:"link-to",id:"experience"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Work Experience"})}),t.map((function(e){return Object(n.jsx)(h,{data:e},e.company)}))]})};g.defaultProps={data:[]};var p=g,b=i(71),f=i(72),j=i(77),y=i(76),v=i(51),S=i(50),k=i(73),w=function(e){var t=e.data,i=e.handleClick,r=e.isActive,a=t.title;return Object(n.jsx)("button",{className:r?"skill-tile-active":"skill-tile",type:"button",onClick:function(){return i(a)},children:a})},O=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"relevant-projects-container",children:[t.projects.length>0?Object(n.jsxs)("h4",{children:["Projects Related to [",t.skill,"]:"]}):null,t.projects.map((function(e){return Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,target:"_blank",children:e.title})},e.title)}))]})},x=i(74),C=function(e){Object(j.a)(i,e);var t=Object(y.a)(i);function i(e){var n;return Object(b.a)(this,i),(n=t.call(this,e)).handleSkillTileClick=function(e){n.setState({actSkill:e})},n.handleChildClick=function(e){n.setState((function(t){var i=Object.keys(t.buttons).reduce((function(i,n){return Object(S.a)(Object(S.a)({},i),{},Object(v.a)({},n,e===n&&!t.buttons[n]))}),{});return i.All=!Object.keys(t.buttons).some((function(e){return i[e]})),{buttons:i}})),n.setState({actSkill:null})},n.state=function(e){var t=e.categories,i=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(S.a)(Object(S.a)({},e),{},Object(v.a)({},t,!1))}),{All:!0}),skills:i,actSkill:null}}({categories:e.categories,skills:e.skills}),n}return Object(f.a)(i,[{key:"getRelevantProjects",value:function(){var e=this;return x.a.projects.filter((function(t){return t.skills.includes(e.state.actSkill)}))}},{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,i){return e.state.buttons[i]?i:t}),"All");return this.state.skills.sort((function(e,t){var i=0;return e.competency>t.competency?i=-1:e.competency<t.competency?i=1:e.category[0]>t.category[0]?i=-1:e.category[0]<t.category[0]||e.title>t.title?i=1:e.title<t.title&&(i=-1),i})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(n.jsx)(w,{categories:e.props.categories,data:t,handleClick:e.handleSkillTileClick,isActive:e.state.actSkill===t.title},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(n.jsx)(k.a,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"skills",children:[Object(n.jsx)("div",{className:"link-to",id:"skills"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h3",{children:"Skills"}),Object(n.jsx)("p",{children:"(click on a skill to view related projects)."})]}),Object(n.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(n.jsx)("div",{className:"skill-row-container",children:this.getRows()}),Object(n.jsx)(O,{data:{projects:this.getRelevantProjects(),skill:this.state.actSkill}})]})}}]),i}(r.Component);C.defaultProps={skills:[],categories:[]};var P=C,N=function(e){var t=e.data,i=e.last;return Object(n.jsxs)("li",{className:"course-container",children:[Object(n.jsxs)("a",{onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(t.link)},children:[Object(n.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(n.jsx)("p",{className:"course-name",children:t.title})]}),!i&&Object(n.jsx)("div",{className:"course-dot",children:Object(n.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var A=N,L=function(e){var t,i=e.data;return Object(n.jsxs)("div",{className:"courses",children:[Object(n.jsx)("div",{className:"link-to",id:"courses"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Selected Courses"})}),Object(n.jsx)("ul",{className:"course-list",children:(t=i,t.map((function(e,i){return Object(n.jsx)(A,{data:e,last:i===t.length-1},e.title)})))})]})};L.defaultProps={data:[]};var R=L,D=[{title:"Natural Language Processing",number:"CS4248",link:"https://nusmods.com/modules/CS4248/natural-language-processing",university:"NUS"},{title:"AI Planning and Decision Making",number:"CS4246",link:"https://nusmods.com/modules/CS4246/ai-planning-and-decision-making",university:"NUS"},{title:"Machine Learning",number:"CS3244",link:"https://nusmods.com/modules/CS3244/machine-learning",university:"NUS"},{title:"Software Product Engineering for Digital Markets",number:"CS3216",link:"https://nusmods.com/modules/CS3216/software-product-engineering-for-digital-markets",university:"NUS"},{title:"Software Engineering on Modern Application Platforms",number:"CS3217",link:"https://nusmods.com/modules/CS3217/software-engineering-on-modern-application-platforms",university:"NUS"},{title:"Introduction to Artificial Intelligence",number:"CS3243",link:"https://nusmods.com/modules/CS3243/introduction-to-artificial-intelligence",university:"NUS"},{title:"Design and Analysis of Algorithms",number:"CS3230",link:"https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms",university:"NUS"},{title:"Introduction to Operating Systems",number:"CS2106",link:"https://nusmods.com/modules/CS2106/introduction-to-operating-systems",university:"NUS"},{title:"Introduction to Computer Networks",number:"CS2105",link:"https://nusmods.com/modules/CS2105/introduction-to-computer-networks",university:"NUS"},{title:"Software Engineering",number:"CS2103",link:"https://nusmods.com/modules/CS2103/software-engineering",university:"NUS"},{title:"Introduction to Information Security",number:"CS2107",link:"https://nusmods.com/modules/CS2107/introduction-to-information-security",university:"NUS"},{title:"Data Structures and Algorithms",number:"CS2040",link:"https://nusmods.com/modules/CS2040/data-structures-and-algorithms",university:"NUS"},{title:"Probability and Statistics",number:"ST2334",link:"https://nusmods.com/modules/ST2334/probability-and-statistics",university:"NUS"},{title:"Programming Methodology II",number:"CS2030",link:"https://nusmods.com/modules/CS2030/programming-methodology-ii",university:"NUS"},{title:"Programming Methodology",number:"CS1101S",link:"https://nusmods.com/modules/CS1101S/programming-methodology",university:"NUS"},{title:"Discrete Structures",number:"CS1231",link:"https://nusmods.com/modules/CS1231/discrete-structures",university:"NUS"},{title:"Linear Algebra",number:"MA1101R",link:"https://nusmods.com/modules/MA1101R/linear-algebra-i",university:"NUS"},{title:"Calculus for Computing",number:"MA1521",link:"https://nusmods.com/modules/MA1521/calculus-for-computing",university:"NUS"}],T=[{school:"National University of Singapore (NUS)",degree:"Computer Science (Hons), Bachelor of Computing",link:"https://nus.edu.sg/",year:"Aug 2018 - Jun 2022",points:["Cumulative GPA: 4.91 out of 5, on track to graduate with Honours (Highest Distinction / First Class)","School of Computing Dean's List for 4 consecutive semesters, AY 2019/2020 and AY 2020/2021"]},{school:"NUS University Scholars Programme (USP)",degree:"Four-year Interdisciplinary Academic Programme",link:"https://www.usp.nus.edu.sg/",year:"Aug 2018 - Jun 2022",points:["USP Honour Roll, AY 2019/2020","Served as Internal Coordinator in Core Team for USP Connect Tuition, a weekly volunteering mentorship programme for primary school children, 2019 - 2020","Serving as Senior Ambassador in USP Ambassadors, 2019 - 2021"]},{school:"University of Cambridge",degree:"International Summer Programmes",link:"https://www.ice.cam.ac.uk/courses/international-summer-programmes",year:"Jul 2019",points:["Attended Cambridge International Summer Programmes",'Took the course "Managing the world: international politics and the global order"']},{school:"Raffles Institution",degree:"High School",link:"http://www.ri.edu.sg/",year:"Jan 2016 - Dec 2017",points:["Scored straight A's in Singapore-Cambridge A-Level exams (90 rank points)","Dean's Lists (top 5%) in Physics, Chemistry and Economics in school exams","Served as Programme Coordinator in the Executive Committee (EXCO) of Film Society","An active \xe9p\xe9e fencer in Fencing Club"]},{school:"St. Patrick's School",degree:"Secondary School",link:"https://stpatricks.moe.edu.sg/",year:"Jan 2013 - Dec 2015",points:["National Civil Defence Cadet Corps (NCDCC)","Recipient of the Barry Desker Award, 2015"]}],I=[{title:"Offline Exploratory Machine Learning",daterange:"Aug 2021 - present (ongoing)",keywords:"Artificial Intelligence, Machine Learning, Final Year Project",description:'An Agent (a virtual robot in a virtual home environment) needs to learn about its environment in order to respond to human questions, such as "Where did I leave my sunglasses?", "What is the color of sofa?". Current methods allow the Agent to navigate the house to find the answers, and allow the Agent to ask additional questions to receive guidance. But this is insufficient. What if the Agent is free to roam around the house? What should it learn during such offline exploration that could help it respond better to questions? This project is about devising better machine learning techniques that exploit offline exploration. Techniques include: learning the co-occurrence of different household objects (e.g. the microwave is usually near the refrigerator rather than the bathtub), active learning to reduce uncertainty.'}],M=[{company:"Cloudflare",position:"Solutions Engineer Intern",link:"https://www.cloudflare.com/",daterange:"May 2021 - Aug 2021",image:"/images/logos/cloudflare.jpg",points:["Helped the team better serve customers through building proof-of-concept solutions.","Implemented DDoS simulation tool.","Set up virtual private clouds (VPCs) on different cloud platforms and configured Generic Routing Encapsulation (GRE) tunnels to connect them via Cloudflare.","Built web applications on serverless platform.","Conducted webinars on technical deep dives into products."]},{company:"HOPE Technik",position:"Software Engineer Intern (Part-time)",link:"https://www.hopetechnik.com/who-we-are/",daterange:"Jan 2021 - Apr 2021",image:"/images/logos/hope-technik.jpg",points:["Built an Android app integrated with WebRTC real-time video streaming and a fingerprint scanner.","Implemented REST API server that facilitates communication between Robot Operating System (ROS) and Android."]},{company:"Visa",position:"Software Engineer Intern",link:"https://www.visa.com.sg/",daterange:"May 2020 - Jul 2020",image:"/images/logos/visa.jpg",points:["Interned under Digital and Developer Platform team.","Explored solutions that leverage Visa payment APIs to mitigate impact of Covid-19 for cardholders, and developed an application that provides diners with a seamless and contactless experience of ordering and paying.","Drafted a solution to accelerate cash displacement together with teammates."]},{company:"NUS School of Computing",position:"Teaching Assistant",link:"https://www.facebook.com/cs1101s/",daterange:"Aug 2019 - Dec 2019",image:"/images/logos/nus-school-of-computing.jpg",points:["For CS1101S (Programming Methodology I).","Conducted tutorials and consultation sessions.","Prepared teaching materials.","Graded students' assignments.","Received 4.8/5 mean rating in anonymous feedback and 4 students\u2019 nominations for teaching awards."]}],U=i(17);var J=i(24);var E,H="Languages",W="Backend",B="Web Dev",F="Mobile App Dev",G="ML",q="Tools",_=[{title:"JavaScript",category:[H,B]},{title:"Node.JS",category:[W]},{title:"React",category:[B]},{title:"Vue.JS",category:[B]},{title:"Flutter",category:[B,F]},{title:"Ruby on Rails",category:[B]},{title:"Heroku",category:[W]},{title:"SQL/PostgreSQL",category:[W,H]},{title:"Express.JS",category:[W]},{title:"Git",category:[q]},{title:"Linux",category:[q]},{title:"Numpy",category:[G]},{title:"Tensorflow + Keras",category:[G]},{title:"PyTorch",category:[G]},{title:"HTML + CSS",category:[B,H]},{title:"Python",category:[H]},{title:"C++",category:[H]},{title:"Ruby",category:[H]},{title:"Dart",category:[H]},{title:"Go",category:[H]},{title:"LATEX",category:[q]},{title:"Pandas",category:[G]},{title:"Scikit-Learn",category:[G]},{title:"Natural Language Processing (NLP)",category:[G]},{title:"Reinforcement Learning",category:[G]},{title:"Java",category:[H,F]},{title:"Swift",category:[H,F]},{title:"Android Dev",category:[F]},{title:"iOS Dev",category:[F]},{title:"AWS/GCP",category:[W]}].map((function(e){return Object(S.a)(Object(S.a)({},e),{},{category:e.category.sort()})})),Q=(E=new Set(_.reduce((function(e,t){var i=t.category;return e.concat(i)}),[])),function(e){if(Array.isArray(e))return Object(U.a)(e)}(E)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(E)||Object(J.a)(E)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e){return{name:e}})),Z=["Education","Research","Experience","Skills","Courses"];t.default=function(){return Object(n.jsx)(s.a,{title:"Resume",description:"Liu Zechu's Resume. National University of Singapore, Computer Science, and University Scholars Programme.",children:Object(n.jsxs)("article",{className:"post",id:"resume",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(n.jsx)("div",{className:"link-container",children:Z.map((function(e){return Object(n.jsx)("h4",{children:Object(n.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(n.jsx)(l,{data:T}),Object(n.jsx)(m,{data:I}),Object(n.jsx)(p,{data:M}),Object(n.jsx)(P,{skills:_,categories:Q}),Object(n.jsx)(R,{data:D})]})})}},50:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(51);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}},51:function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return n}))},71:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,"a",(function(){return n}))},72:function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}i.d(t,"a",(function(){return r}))},73:function(e,t,i){"use strict";var n=i(0);i(1);t.a=function(e){var t=e.handleClick,i=e.active,r=e.label;return Object(n.jsx)("button",{className:"skillbutton ".concat(i[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})}},74:function(e,t,i){"use strict";var n="ML/AI",r="Mobile App",a="Web",s="Other",o=[{title:"GitHub Issue Auto-labeller",subtitle:"Natural Lanuage Processing with information extraction and text categorisation",link:"https://github.com/larrylawl/auto-github-issue-labeller-action",image:"/images/projects/github.gif",date:"Mar 2021 - Apr 2021",desc:'This project aims to automatically label GitHub issues with Natural Language Processing (NLP). We explored feature extraction using "important" word counts, averaged word embeddings, and sentence embeddings with Bert. We also experimented with the effects of machine information present in GitHub issues and tried out various classification algorithms. You may try this labeller out on your own GitHub repo!',category:[n],skills:["Python","Natural Language Processing (NLP)","Numpy","Pandas","Tensorflow + Keras","Scikit-Learn"]},{title:"How to cross the road like a pro",subtitle:"Deep Q Learning with reward shaping and curriculum learning",link:"https://github.com/LiuZechu/CS4246-mini-project",image:"/images/projects/dqn.jpg",date:"Apr 2021",desc:"This mini project aims to create an agent that can cross a road with 10 lanes, each lane having a length of 50. There are numerous cars on each lane having randomised starting positions and speeds. The agent uses models trained from Deep Q Learning with reward shaping and curriculum learning to solve the problem of sparse reward and slow learning. (cover image credit: https://media.wired.com/)",category:[n],skills:["Python","Numpy","PyTorch","Reinforcement Learning"]},{title:"Playlister: Music Recommendation",subtitle:"Machine Learning, audio processing, image classfication",link:"https://drive.google.com/file/d/1-PDZY--h29a1tIOaBdP00rnxar4Kqnug/view",image:"/images/projects/playlister.png",date:"Sep 2020 - Dec 2020",desc:"This Machine Learning project aims to recommend songs to users. I was mainly in charge of implementing Convolutional Neural Network for music genre classification.",category:[n],skills:["Python","Numpy","Pandas","Tensorflow + Keras","Scikit-Learn"]},{title:"Four2Ten",subtitle:"Multi-player, cross-platform mobile game built with Flutter",link:"https://github.com/Four2Ten/4210",image:"/images/projects/4210.jpg",date:"Dec 2020 - Aug 2021",desc:"In this game, you will use addition, subtraction, multiplication and division to form ten (10) with the given digits while competing with your friends and see who's the fastest!",category:[r],skills:["JavaScript","Node.JS","Dart","Flutter","AWS/GCP"]},{title:"Dish Out",subtitle:"React web app for dish reviews and recommendations in Singapore!",link:"https://dishout.co/",image:"/images/projects/dishout.gif",date:"Sep 2020 - Dec 2020",desc:"This web app focuses on dish reviews and recommendations in Singapore. (completed under CS3216)",category:[a],skills:["JavaScript","React","SQL/PostgreSQL","Heroku","Node.JS","HTML + CSS"]},{title:"Whoosh",subtitle:"Progressive Web App (PWA) that facilitates virtual queuing for restaurant diners",link:"https://github.com/LiuZechu/whoosh",image:"/images/projects/whoosh.png",date:"Aug 2020 - Sep 2020",desc:"This Flutter web app helps restaurants create virtual queues for walk-in diners, so that diners won't have to queue physically and will get notified when it's their turn. (completed under CS3216)",category:[a],skills:["Flutter","Dart"]},{title:"Relentless",subtitle:"iOS co-op game",link:"https://github.com/relentless-game/Relentless",image:"/images/projects/relentless.jpg",date:"Mar 2020 - May 2020",desc:"Relentless is a co-op multiplayer iOS game across multiple iOS devices over the network, where players work together to deliver items to households. (completed under CS3217)",category:[r],skills:["iOS Dev","Swift"]},{title:"Peggle",subtitle:"iOS game with a Physics Engine that I built from scratch",link:"https://github.com/LiuZechu/peggle-game",image:"/images/projects/peggle.jpg",date:"Jan 2020 - Mar 2020",desc:"Peggle is an iOS game where the player can shoot a canon ball which bounces around pegs to earn points. I built a Physics Engine which handles object collision without using external libraries. (completed under CS3217)",category:[r],skills:["iOS Dev","Swift"]},{title:"CSModBuddy",subtitle:"Java desktop application",link:"https://github.com/LiuZechu/CSModBuddy",image:"/images/projects/cs-modbuddy.jpg",date:"Aug 2019 - Nov 2019",desc:"A Java desktop application for NUS CS undergraduates to plan modules and manage their study plans.",category:[s],skills:["Java"]},{title:"Petopia",subtitle:"Pet care service built with Vue.js and PostgreSQL",link:"https://github.com/LiuZechu/pet-care-service",image:"/images/projects/petopia.jpg",date:"Sep 2020 - Dec 2020",desc:"Petopia is a pet care service platform where users can sign up as pet owners or caretakers. Pet owners can look for caretakers to help them care for their pets.",category:[a],skills:["SQL/PostgreSQL","JavaScript","Vue.JS","Heroku","Node.JS","Express.JS"]},{title:"Jars",subtitle:"Android app to help you learn through memory",link:"https://github.com/LiuZechu/Jars",image:"/images/projects/jars.jpg",date:"May 2019 - Aug 2019",desc:"Jars is an Android app where users can automatically create flashcards from highlighting sentences while reading. The flashcards are reviewed according to spaced repetition that increases memory retention. This project won Apollo 11 (highest) Award in NUS Orbital 2019.",category:[r],skills:["Android Dev","Java"]},{title:"Planit",subtitle:"To-do manager built with Ruby on Rails",link:"https://github.com/LiuZechu/Riding-on-Rails",image:"/images/projects/planit.jpg",date:"Dec 2018 - Jan 2019",desc:"I developed a web app with user sign-in feature that keeps track of user\u2019s to-do tasks, allows basic CRUD operations, and classifies tasks according to tags.",category:[a],skills:["Ruby","Ruby on Rails","Heroku","HTML + CSS"]},{title:"Word Sticker Bot",subtitle:"Telegram bot",link:"https://github.com/chaitanyabaranwal/Word-Sticker-Bot",image:"/images/projects/word-sticker-bot.jpg",date:"Jan 2019",desc:"A Telegram bot which stylizes text sent by the user and generates a sticker from the text, which is added to the user\u2019s individual sticker set.",category:[s],skills:["Python"]}],c={categories:[n,r,a,s].map((function(e){return{name:e}})),projects:o};t.a=c},76:function(e,t,i){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=n(e);if(t){var s=n(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return a(this,i)}}i.d(t,"a",(function(){return s}))},77:function(e,t,i){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}i.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.16ffa575.chunk.js.map