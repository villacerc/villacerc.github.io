(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";a.r(t);a(73),a(74);var n=a(7),s=a.n(n),i=a(0),l=a.n(i),c=a(148),o=a(143),r=a.n(o),m=a(156),u=a.n(m),d=a(157),p=a.n(d),f=function(){return l.a.createElement("div",{className:p.a.container},l.a.createElement(u.a,{params:{particles:{number:{value:6,density:{enable:!0,value_area:800}},color:{value:"#4717f6"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:124.26443471707802,random:!0,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))},h=a(158),b=a.n(h),g=a(145),v=a.n(g),E=a(159),y=a.n(E),N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={container:y.a.container,toggleNav:!1},t.sticky=null,t.handleScroll=function(){window.pageYOffset>t.sticky?t.setState({container:y.a.sticky}):t.setState({container:""})},t.handleView=function(e){e=e.toLowerCase();var t=document.querySelector("#link-"+e),a=window.innerHeight-52;b.a.offset({top:52,bottom:a}),b()("#"+e).on("enter",function(){return t.classList.add("is-active")}).on("exit",function(e){return t.classList.remove("is-active")})},t.items=["About","Services","Resume","Portfolio","Contact"],t.scrollTo=function(e){var a=document.getElementById(e);v()(a,{align:{top:0}}),t.setState({toggleNav:!1})},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),this.sticky=this.nav.offsetTop,this.items.forEach(this.handleView)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e=this,t=this.state.toggleNav?"is-active":"";return l.a.createElement("nav",{ref:function(t){return e.nav=t},className:r()("navbar is-link",this.state.container)},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("div",{onClick:function(){return e.setState({toggleNav:!e.state.toggleNav})},className:r()("navbar-burger burger",t),"data-target":"navbarExampleTransparentExample"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{id:"navbarExampleTransparentExample",className:r()("navbar-menu",t)},l.a.createElement("div",{className:"navbar-end"},this.items.map(function(t,a){var n=t.toLowerCase();return l.a.createElement("a",{key:a,className:"navbar-item",onClick:function(){return e.scrollTo(n)},id:"link-"+n},t)}))))},t}(l.a.Component),k=a(160),w=a.n(k),x=function(){return l.a.createElement("section",{id:"home",style:{position:"relative"},className:"hero is-link is-fullheight is-fullheight-with-navbar"},l.a.createElement(f,null),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:r()("container",w.a.center)},"Nice to meet you! I am",l.a.createElement("h1",{className:r()("title is-1",w.a.title)},"Carlo Villaceran"),l.a.createElement("div",{className:w.a.divider}),l.a.createElement("h2",{className:r()(w.a.subtitle)},"Full Stack Web Developer"),l.a.createElement("div",{className:w.a.divider}))),l.a.createElement(N,null))},S=a(161),C=a.n(S),R=function(){return l.a.createElement("section",{className:"section",id:"services"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h3",{className:"title is-2"},"SERVICES"),l.a.createElement("h4",{className:"subtitle is-5"},"What can I do for you?")),l.a.createElement("div",{className:r()("container",C.a.center)},l.a.createElement("div",{className:"columns is-multiline is-mobile"},[{title:"Front End Development",text:"Develop responsive and cross-browser compatible front end web code that will work on any device.",icon:"fas fa-laptop"},{title:"Back End Development",text:"Create REST APIs and database solutions. Use web services to manage environments and scalability.",icon:"fas fa-server"},{title:"Web Security",text:"Use best standards and practices for securing client to server data interchange. SSL, JWT, OAuth, password hashing/salting.",icon:"fas fa-shield-alt"},{title:"Test Automation",text:"Write and analyze test cases for automation to increase efficiency and app quality. Jest, Mocha, Puppeteer, RSpec.",icon:"fas fa-hat-wizard"}].map(function(e,t){var a=e.title,n=e.text,s=e.icon;return l.a.createElement("div",{key:t,className:"column is-12-mobile is-half-tablet is-one-quarter-desktop"},l.a.createElement("div",{className:C.a.service},l.a.createElement("i",{className:r()("fa-4x",s)}),l.a.createElement("h4",{className:"title is-5"},a),l.a.createElement("p",null,n)))}))))},A=(a(162),a(75),a(55),a(34),a(163)),I=a.n(A),P=a(164),M=a.n(P),L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).skills=[{name:"HTML/CSS",value:80},{name:"Javascript",value:80},{name:"Node.js",value:80},{name:"Ruby",value:75},{name:"Swift",value:60},{name:"Java",value:40},{name:"C++",value:40},{name:"C#",value:40}],t.values=[{title:"User Experience",text:"My goal is to build products that are not just useful but also attractive, intuitive and fun."},{title:"Fast Apps",text:"I enjoy creating high performing apps by applying caching, lazy loading and bundle splitting techniques."},{title:"Modern Technologies",text:"I keep an eye on latest trends and implement modern solutions to ensure my apps are up to date."},{title:"Knowledge",text:"I am naturally curious and like to learn new things to improve my skills as a developer."}],t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.skills.forEach(function(e,t){var a=e.el,n=e.value;new I.a(a,{scaleColor:!1,lineWidth:10,barColor:"#4717f6",lineCap:"butt"}).update(n)})},a.render=function(){var e=this;return l.a.createElement("section",{className:"section",id:"about"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h3",{className:"title is-2"},"About Me"),l.a.createElement("h4",{className:"subtitle is-5"},"Hello World!"),l.a.createElement("div",{className:"container"},l.a.createElement("p",{style:{fontSize:"16px"}},"I am a web developer with 2 years experience specializing in Node.js, Ruby, React and PostgreSQL. I have a strong knowledge of e-commerce platforms focusing on property management, bookkeeping and reporting. I love making awesome ideas come to life."))),l.a.createElement("h4",{style:{textAlign:"center"},className:"title is-5"},"Things I value"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-multiline is-mobile"},this.values.map(function(e,t){var a=e.title,n=e.text;return l.a.createElement("div",{key:t,className:"column is-12-mobile is-half-tablet is-half-desktop"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",{className:"title is-5"},a),n)))})),l.a.createElement("h4",{style:{textAlign:"center",margin:"40px 0"},className:"title is-5"},"My Skills"),l.a.createElement("div",{className:"columns is-multiline is-mobile"},this.skills.map(function(t,a){var n=t.name,s=t.value;return l.a.createElement("div",{key:a,className:r()(M.a.skill,"column "),ref:function(t){return e.skills[a]={el:t,name:n,value:s}}},l.a.createElement("div",{className:M.a.caption},l.a.createElement("div",null,n)," ",s,"%"))}))))},t}(l.a.Component),D=a(165),T=a.n(D),j=a(166),F=a.n(j),_=a(146),J=a.n(_),z=a(147),O=a.n(z),W=a(167),q=a.n(W),V=a(168),B=a.n(V),Q=(a(169),a(33),a(171)),Y=a.n(Q),K=a(172),H=a.n(K),U=a(173),G=a.n(U),X=a(174),Z=a.n(X),$=a(175),ee=a.n($),te=a(176),ae=a.n(te),ne=a(177),se=a.n(ne),ie=a(178),le=a.n(ie),ce=a(179),oe=a.n(ce),re=a(180),me=a.n(re),ue=a(181),de=a.n(ue),pe=a(182),fe=a.n(pe),he=a(183),be=a.n(he),ge=a(184),ve=a.n(ge),Ee=a(185),ye=a.n(Ee),Ne=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={backdrop:"",box:"",selectedIndex:0},t.content={Roomia:{photos:[G.a,Y.a,H.a,Z.a],subtitle:"Property Management",url:"https://www.roomia.com",info:"Roomia makes it easy for property managers to manage leases, track rent payments, handle reporting and bookkeeping.",tags:["SPA","React","Ruby on Rails","PostgreSQL","AWS S3"]},"Pick and Roll":{photos:[J.a],subtitle:"Pick-up Game Finder",statusText:"Coming Soon",info:"Finding a pick-up game in your local centres is quick and easy or create your own and invite others.",tags:["SPA","React","Node.js","MongoDB"]},Foodsight:{photos:[O.a,ee.a,ae.a,se.a],subtitle:"Food Dictionary",url:"https://foodsight.herokuapp.com",info:"Website dedicated to educate consumers on common food chemicals. Also includes a discussion board, social media sharing and OAuth.",tags:["JQuery","Ruby on Rails","PostgreSQL"]},"Delta Kids":{photos:[le.a,oe.a,me.a,de.a],subtitle:"Kids Activities Listings",url:"https://www.deltakids.ca/",info:"Discover family events, programs and resources available in the Delta community.",tags:["JQuery","Ruby on Rails","PostgreSQL"]},"Japanese Practice Tool":{photos:[fe.a,be.a,ve.a],subtitle:"Practice Japanese!",objectFit:"contain",info:"Practice hiragana through a matching game, stroke tutorials, and a reading exercise.",tags:["Swift"]}},t.switch=function(e,a){var n=t.state.selectedIndex;"left"===e&&(n=n?n-1:a-1),"right"===e&&(n=n+1>a-1?0:n+1),t.setState({selectedIndex:n})},t.close=function(){t.setState({box:ye.a.zoomOut}),setTimeout(t.props.close,500)},t}return s()(t,e),t.prototype.render=function(){var e=this,t=this.state.selectedIndex,a=this.content[this.props.title],n=a.photos,s=a.subtitle,i=a.info,c=a.url,o=a.statusText,m=a.objectFit,u=a.tags;return l.a.createElement("div",{className:"modal is-active"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:r()(ye.a.box,this.state.box)},l.a.createElement("div",{className:r()(ye.a.gallery)},l.a.createElement("div",{className:r()(ye.a.photo,"image is-5by3")},n.map(function(t,a){var n=e.state.selectedIndex===a?{opacity:1}:{opacity:0};return l.a.createElement("img",{key:a,style:Object.assign(n,{objectFit:m||"unset"}),src:t})}))),l.a.createElement("div",{className:ye.a.pos},n.length>1&&l.a.createElement("div",{onClick:function(){return e.switch("left",n.length)}},l.a.createElement("i",{className:"fas fa-chevron-left"})),l.a.createElement("div",{style:{flex:1}},t+1," of ",n.length),n.length>1&&l.a.createElement("div",{onClick:function(){return e.switch("right",n.length)}},l.a.createElement("i",{className:"fas fa-chevron-right"}))),l.a.createElement("div",{className:ye.a.caption},l.a.createElement("div",{className:ye.a.title},l.a.createElement("h2",null,this.props.title),l.a.createElement("div",{className:ye.a.link},c?l.a.createElement("a",{target:"_blank",href:c},"Visit Site"):o)),l.a.createElement("div",{className:ye.a.about},s),l.a.createElement("div",{className:ye.a.info},i),l.a.createElement("div",{className:"tags"},u.map(function(e,t){return l.a.createElement("span",{key:t,className:"tag"},e)}))))),l.a.createElement("button",{onClick:this.close,className:"modal-close is-large","aria-label":"close"}))},t}(l.a.Component),ke=a(186),we=a.n(ke),xe=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={openLb:!1,title:"",category:"all"},t.projects=[{thumb:F.a,title:"Roomia",subtitle:"Property Management",category:"business"},{thumb:J.a,title:"Pick and Roll",subtitle:"Pick-up Game Finder",category:"personal"},{thumb:O.a,title:"Foodsight",subtitle:"Food Chemicals Dictionary",category:"personal"},{thumb:q.a,title:"Delta Kids",subtitle:"Kids Pograms Listings",category:"personal"},{thumb:B.a,title:"Japanese Practice Tool",subtitle:"iOS App",category:"personal",contain:!0}],t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.getElementById("mixer");T()(e,{animation:{duration:500,nudge:!0,reverseOut:!0,effects:"fade scale(0.01)"}})},a.render=function(){var e=this;return l.a.createElement("section",{className:"section",id:"portfolio"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h3",{className:"title is-2"},"PORTFOLIO"),l.a.createElement("h4",{className:"subtitle is-5"},"See my latest works")),l.a.createElement("div",{className:"tabs is-centered"},l.a.createElement("ul",null,l.a.createElement("li",{className:"all"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"all"})}},l.a.createElement("a",{"data-filter":"all"},"All")),l.a.createElement("li",{className:"business"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"business"})}},l.a.createElement("a",{"data-filter":".business"},"Business")),l.a.createElement("li",{className:"personal"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"personal"})}},l.a.createElement("a",{"data-filter":".personal"},"Personal")))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"mixer",className:"columns is-multiline is-mobile"},this.projects.map(function(t,a){var n=t.thumb,s=t.title,i=t.subtitle,c=t.contain,o=t.category;return l.a.createElement("div",{key:a,onClick:function(){return e.setState({openLb:!0,title:s})},className:r()("column is-12-mobile is-three-quarters-mobile is-half-tablet is-one-third-desktop mix",o)},l.a.createElement("figure",{className:r()(we.a.photo,"image is-5by3")},l.a.createElement("img",{style:{width:"100%",height:"100%",objectFit:c?"contain":"fill"},src:n}),l.a.createElement("figcaption",{className:we.a.hoverContent},l.a.createElement("h1",{className:"title is-5"},s),l.a.createElement("p",null,i))))}))),this.state.openLb&&l.a.createElement(Ne,{title:this.state.title,close:function(){return e.setState({openLb:!1})}}))},t}(l.a.Component),Se=a(187),Ce=a.n(Se),Re=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.window=window},a.render=function(){return l.a.createElement("section",{className:"section",id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h3",{className:"title is-2"},"Contact"),l.a.createElement("h4",{className:"subtitle is-5"},"Get in touch")),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:r()("column is-6 is-offset-3",Ce.a.form)},l.a.createElement("div",{className:"box"},l.a.createElement("form",{action:"https://getsimpleform.com/messages?form_api_token=571f2ee41481eae45b625d5548725d22",method:"post"},l.a.createElement("input",{type:"hidden",name:"redirect_to",value:this.window&&window.location.origin+"/#thank-you"}),l.a.createElement("input",{name:"name",className:"input",required:!0,type:"text",placeholder:"Your Name *"}),l.a.createElement("input",{name:"email",className:"input",required:!0,type:"email",placeholder:"Your Email *"}),l.a.createElement("textarea",{name:"message",className:"textarea",required:!0,placeholder:"Your Message *"}),l.a.createElement("button",{type:"submit",className:"button is-rounded is-primary is-outlined is-medium"},l.a.createElement("i",{style:{marginRight:"10px"},className:"fas fa-envelope"}),"Submit")))))))},t}(l.a.Component),Ae=a(188),Ie=a.n(Ae),Pe=function(){return l.a.createElement("footer",{style:{position:"relative",textAlign:"center"},className:"footer"},l.a.createElement("div",{className:Ie.a.chevron,onClick:function(){var e=document.getElementById("home");v()(e)}},l.a.createElement("i",{className:"fas fa-angle-up"})),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-third is-offset-4"},l.a.createElement("div",{className:Ie.a.socialButtons},l.a.createElement("a",{className:r()(Ie.a.icon),href:"https://github.com/villacerc"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{className:r()(Ie.a.icon),href:"https://www.linkedin.com/in/carlovillaceran/"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{className:r()(Ie.a.icon),href:"https://angel.co/carlo-villaceran"},l.a.createElement("i",{className:"fab fa-angellist"}))))),l.a.createElement("div",{style:{opacity:.5},className:"copyright"},"Carlo Villaceran © ",(new Date).getFullYear()))},Me=a(189),Le=a.n(Me),De=function(){return l.a.createElement("section",{className:"section",id:"resume"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h3",{className:"title is-2"},"Resume"),l.a.createElement("h4",{className:"subtitle is-5"},"More about me")),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("a",{href:Le.a,download:!0,className:"button is-rounded is-primary is-medium is-outlined"},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:"fas fa-file-alt"})),l.a.createElement("span",null,"Download My Resume"))))},Te=(a(190),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={showMessage:!1},t.message=function(){return l.a.createElement("article",{className:"message is-success is-toast-top"},l.a.createElement("div",{className:"message-header"},"Thank you for contacting me. I will get back to you as soon as I can.",l.a.createElement("button",{onClick:function(){return t.setState({showMessage:!1})},className:"delete","aria-label":"delete"})))},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({showMessage:window.location.href.includes("thank-you")})},a.render=function(){return l.a.createElement("div",null,l.a.createElement(c.Helmet,null,l.a.createElement("title",null,"Carlo Villaceran")),l.a.createElement("div",null,this.state.showMessage&&this.message(),l.a.createElement(x,null),l.a.createElement(L,null),l.a.createElement(R,null),l.a.createElement(De,null),l.a.createElement(xe,null),l.a.createElement(Re,null),l.a.createElement(Pe,null)))},t}(l.a.Component));t.default=Te},146:function(e,t,a){e.exports=a.p+"static/picknroll-landing-801ae3aaa0f2e14902790129391e0f0a.png"},147:function(e,t,a){e.exports=a.p+"static/foodsight-landing-e5019bbf9e3c8c948f10857c79b474d3.png"},166:function(e,t,a){e.exports=a.p+"static/roomia-landing-16cccb4028b9a516af7823e4475e2251.png"},167:function(e,t,a){e.exports=a.p+"static/deltakids-landing-7eeaea424d7ee933c053e5d2561c81b7.png"},168:function(e,t,a){e.exports=a.p+"static/jpt-splash-43f4bed871fbd9d192c75255ed7a4972.png"},171:function(e,t,a){e.exports=a.p+"static/roomia1-a862198fd0aed7d76e2f430ab8d95d0c.png"},172:function(e,t,a){e.exports=a.p+"static/roomia2-6508ce8b240060e97b1f7d1d9574b0bc.png"},173:function(e,t,a){e.exports=a.p+"static/roomia3-9f0c450879a799c2e323af1ed1dc45d4.png"},174:function(e,t,a){e.exports=a.p+"static/roomia4-021b4682c88b642dd7df68f7eeb8db09.png"},175:function(e,t,a){e.exports=a.p+"static/fs2-d2946775cba2d9fd32d6a9769596c00a.png"},176:function(e,t,a){e.exports=a.p+"static/fs3-d215f957a79f1be6222bb006a88369bf.png"},177:function(e,t,a){e.exports=a.p+"static/fs4-d42c52548459fd77c6b384d88ab80859.png"},178:function(e,t,a){e.exports=a.p+"static/dk1-ff0cd44e4e10f76bb32f41d699c050bd.png"},179:function(e,t,a){e.exports=a.p+"static/dk2-162475ff7e20bf1f3d6bb57f6f3a8bea.png"},180:function(e,t,a){e.exports=a.p+"static/dk3-09cd33110d5acc05148df87ee85fb5bd.png"},181:function(e,t,a){e.exports=a.p+"static/dk4-c107b3bec2595e8eb5a336c194ab2a07.png"},182:function(e,t,a){e.exports=a.p+"static/jpt1-87276353889fdfa4a7cf4e9d144a0ddf.png"},183:function(e,t,a){e.exports=a.p+"static/jpt2-b8bde6ccb92513b03b5b6edf9a3187a8.png"},184:function(e,t,a){e.exports=a.p+"static/jpt3-28f602dbbc8015f9dffcd6044a88197f.png"},189:function(e,t,a){e.exports=a.p+"static/CarloVillaceran_resume-6b4c42c825b4d4bc79d6542c1e5d7dfd.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-8e4d2bc91c669c7095d7.js.map