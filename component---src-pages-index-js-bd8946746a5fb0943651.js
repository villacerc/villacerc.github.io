(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";a.r(t);a(73),a(74);var c=a(7),l=a.n(c),n=a(0),i=a.n(n),s=a(147),o=a(143),r=a.n(o),m=a(155),u=a.n(m),d=a(156),p=a.n(d),f=function(){return i.a.createElement("div",{className:p.a.container},i.a.createElement(u.a,{params:{particles:{number:{value:6,density:{enable:!0,value_area:800}},color:{value:"#4717f6"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:124.26443471707802,random:!0,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}))},h=a(157),v=a.n(h),b=a(145),g=a.n(b),E=a(158),y=a.n(E),N=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))||this).state={container:y.a.container,toggleNav:!1},t.sticky=null,t.handleScroll=function(){window.pageYOffset>t.sticky?t.setState({container:y.a.sticky}):t.setState({container:""})},t.handleView=function(e){e=e.toLowerCase();var t=document.querySelector("#link-"+e),a=window.innerHeight-52;v.a.offset({top:52,bottom:a}),v()("#"+e).on("enter",function(){return t.classList.add("is-active")}).on("exit",function(e){return t.classList.remove("is-active")})},t.items=["About","Services","Resume","Portfolio","Contact"],t.scrollTo=function(e){var a=document.getElementById(e);g()(a,{align:{top:0}}),t.setState({toggleNav:!1})},t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),this.sticky=this.nav.offsetTop,this.items.forEach(this.handleView)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e=this,t=this.state.toggleNav?"is-active":"";return i.a.createElement("nav",{ref:function(t){return e.nav=t},className:r()("navbar is-link",this.state.container)},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{onClick:function(){return e.setState({toggleNav:!e.state.toggleNav})},className:r()("navbar-burger burger",t),"data-target":"navbarExampleTransparentExample"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"navbarExampleTransparentExample",className:r()("navbar-menu",t)},i.a.createElement("div",{className:"navbar-end"},this.items.map(function(t,a){var c=t.toLowerCase();return i.a.createElement("a",{key:a,className:"navbar-item",onClick:function(){return e.scrollTo(c)},id:"link-"+c},t)}))))},t}(i.a.Component),k=a(159),w=a.n(k),x=function(){return i.a.createElement("section",{id:"home",style:{position:"relative"},className:"hero is-link is-fullheight is-fullheight-with-navbar"},i.a.createElement(f,null),i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:r()("container",w.a.center)},"Nice to meet you! I am",i.a.createElement("h1",{className:r()("title is-1",w.a.title)},"Carlo Villaceran"),i.a.createElement("div",{className:w.a.divider}),i.a.createElement("h2",{className:r()(w.a.subtitle)},"Full Stack Web Developer"),i.a.createElement("div",{className:w.a.divider}))),i.a.createElement(N,null))},C=a(160),S=a.n(C),M=function(){return i.a.createElement("section",{className:"section",id:"services"},i.a.createElement("div",{className:"section-heading"},i.a.createElement("h3",{className:"title is-2"},"EXPERTISE"),i.a.createElement("h4",{className:"subtitle is-5"},"What can I do for you?")),i.a.createElement("div",{className:r()("container",S.a.center)},i.a.createElement("div",{className:"columns is-multiline is-mobile"},[{title:"Front End Development",text:"Develop responsive and cross-browser compatible front end code that will work on any device.",icon:"fas fa-laptop"},{title:"Back End Development",text:"Create REST APIs and use cloud services to manage deployment and scalability.",icon:"fas fa-server"},{title:"Mobile Apps",text:"Build custom mobile applications for iOS and Android.",icon:"fas fa-mobile-alt"},{title:"Test Automation",text:"Write and analyze test cases for automation to increase efficiency and app quality.",icon:"fas fa-hat-wizard"}].map(function(e,t){var a=e.title,c=e.text,l=e.icon;return i.a.createElement("div",{key:t,className:"column is-12-mobile is-half-tablet is-one-quarter-desktop"},i.a.createElement("div",{className:S.a.service},i.a.createElement("i",{className:r()("fa-4x",l)}),i.a.createElement("h4",{className:"title is-5"},a),i.a.createElement("p",null,c)))}))))},R=(a(161),a(75),a(55),a(34),a(162)),T=a.n(R),A=a(163),I=a.n(A),P=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))||this).skills=[{name:"HTML/CSS",value:80},{name:"Javascript",value:80},{name:"Node.js",value:80},{name:"Ruby",value:75},{name:"Swift",value:60},{name:"Java",value:40},{name:"C++",value:40},{name:"C#",value:40}],t.values=[{title:"User Experience",text:"My goal is to build products that are not just useful but also attractive, intuitive and fun."},{title:"Fast Apps",text:"I build optimized apps that run smoothly across all platforms."},{title:"Modern Technologies",text:"I keep an eye on latest trends and implement modern solutions to ensure my apps are up to date."},{title:"Quick Delivery",text:"I like to maintain a balance between fast development and good code quality."}],t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.skills.forEach(function(e,t){var a=e.el,c=e.value;new T.a(a,{scaleColor:!1,lineWidth:10,barColor:"#4717f6",lineCap:"butt"}).update(c)})},a.render=function(){var e=this;return i.a.createElement("section",{className:"section",id:"about"},i.a.createElement("div",{className:"section-heading"},i.a.createElement("h3",{className:"title is-2"},"About Me"),i.a.createElement("h4",{className:"subtitle is-5"},"Hello World!"),i.a.createElement("div",{className:"container"},i.a.createElement("p",{style:{fontSize:"16px"}},"I specialize in Node.js, Ruby, React and PostgreSQL with experience developing an e-commerce platform focusing on property management, bookkeeping and reporting. More importantly, I love making awesome ideas come to life."))),i.a.createElement("h4",{style:{textAlign:"center"},className:"title is-5"},"Things I value"),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns is-multiline is-mobile"},this.values.map(function(e,t){var a=e.title,c=e.text;return i.a.createElement("div",{key:t,className:"column is-12-mobile is-half-tablet is-half-desktop"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"content"},i.a.createElement("h4",{className:"title is-5",style:{color:"#4717f6"}},a),c)))})),i.a.createElement("h4",{style:{textAlign:"center",margin:"40px 0"},className:"title is-5"},"My Skills"),i.a.createElement("div",{className:"columns is-multiline is-mobile"},this.skills.map(function(t,a){var c=t.name,l=t.value;return i.a.createElement("div",{key:a,className:r()(I.a.skill,"column "),ref:function(t){return e.skills[a]={el:t,name:c,value:l}}},i.a.createElement("div",{className:I.a.caption},i.a.createElement("div",{style:{color:"#4717f6"}},i.a.createElement("b",null,c)),l,"%"))}))))},t}(i.a.Component),L=a(164),z=a.n(L),_=a(165),D=a.n(_),F=a(146),j=a.n(F),H=a(166),B=a.n(H),q=a(167),J=a.n(q),O=(a(168),a(33),a(170)),V=a.n(O),W=a(171),Y=a.n(W),K=a(172),Q=a.n(K),G=a(173),U=a.n(G),X=a(174),Z=a.n(X),$=a(175),ee=a.n($),te=a(176),ae=a.n(te),ce=a(177),le=a.n(ce),ne=a(178),ie=a.n(ne),se=a(179),oe=a.n(se),re=a(180),me=a.n(re),ue=a(181),de=a.n(ue),pe=a(182),fe=a.n(pe),he=a(183),ve=a.n(he),be=a(184),ge=a.n(be),Ee=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))||this).state={backdrop:"",box:"",selectedIndex:0},t.content={Roomia:{medias:[V.a,Y.a],subtitle:"Property Management",url:"https://www.roomia.com",urlText:"roomia.com",info:"Roomia makes it easy for property managers to manage leases, track rent payments, handle reporting and bookkeeping.",tags:["SPA","React","Ruby on Rails","Postgres","AWS S3"]},"Pick and Roll":{medias:[de.a,fe.a,ve.a],subtitle:"Basketball Pick-up Game Finder",url:"http://www.pickandroll.life",urlText:"pickandroll.life",info:"With this app, finding a pick-up game is quick, easy and interactive. You can also create your own and invite others.",tags:["SPA","React","Node.js","Postgres","Sequelize"]},Foodsight:{medias:[j.a,Z.a,ee.a,ae.a],subtitle:"Food Dictionary",url:"https://foodsight.herokuapp.com",urlText:"foodsight.com",info:"Website dedicated to educate consumers on common food chemicals. Also includes a discussion board, social medias sharing and OAuth.",tags:["JQuery","Ruby on Rails","Postgres"]},"Delta Kids":{medias:[le.a,ie.a,oe.a,me.a],subtitle:"Kids Activities Listings",url:"https://www.deltakids.ca/",urlText:"deltakids.ca",info:"Discover family events, programs and resources available in the Delta community.",tags:["JQuery","Ruby on Rails","Postgres"]},"Japanese Practice Tool":{medias:[Q.a,U.a],subtitle:"Practice Japanese!",objectFit:"contain",info:"Practice hiragana through a matching game, stroke tutorials, and a reading exercise.",tags:["Swift"]}},t.switch=function(e,a){var c=t.state.selectedIndex,l=document.getElementById("video"+c);l&&l.pause(),"left"===e&&(c=c?c-1:a-1),"right"===e&&(c=c+1>a-1?0:c+1),t.setState({selectedIndex:c})},t.close=function(){t.setState({box:ge.a.zoomOut}),setTimeout(t.props.close,500)},t.renderMediaCount=function(e){var a=t.state.selectedIndex;return i.a.createElement("div",{className:ge.a.pos},e.length>1&&i.a.createElement("div",{onClick:function(){return t.switch("left",e.length)}},i.a.createElement("i",{className:"fas fa-chevron-left"})),e.length>1&&i.a.createElement("div",{style:{flex:1}},a+1," of ",e.length),e.length>1&&i.a.createElement("div",{onClick:function(){return t.switch("right",e.length)}},i.a.createElement("i",{className:"fas fa-chevron-right"})))},t}return l()(t,e),t.prototype.render=function(){var e=this,t=this.content[this.props.title],a=t.medias,c=t.subtitle,l=t.info,n=t.url,s=t.urlText,o=t.statusText,m=t.objectFit,u=t.tags;return i.a.createElement("div",{className:"modal is-active"},i.a.createElement("div",{className:"modal-background"}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:r()(ge.a.box,this.state.box)},i.a.createElement("div",{className:r()(ge.a.gallery)},"Roomia"===this.props.title||"Japanese Practice Tool"===this.props.title?i.a.createElement("div",{className:ge.a.videos},a.map(function(t,a){var c=e.state.selectedIndex===a?{opacity:1,position:"relative",zIndex:1}:{opacity:0};return i.a.createElement("video",{key:a,id:"video"+a,style:c,controls:!0},i.a.createElement("source",{src:t,type:"video/mp4"}),"Your browser does not support HTML5 video.")})):i.a.createElement("div",{className:r()(ge.a.photo,"image is-5by3")},a.map(function(t,a){var c=e.state.selectedIndex===a?{opacity:1}:{opacity:0};return i.a.createElement("img",{key:a,style:Object.assign(c,{objectFit:m||"unset"}),src:t})}))),this.renderMediaCount(a),i.a.createElement("div",{className:ge.a.caption},i.a.createElement("div",{className:ge.a.title},i.a.createElement("h2",null,this.props.title),i.a.createElement("div",{className:ge.a.link},n?i.a.createElement("a",{target:"_blank",href:n},s):o)),i.a.createElement("div",{className:ge.a.about},c),i.a.createElement("div",{className:ge.a.info},l),i.a.createElement("div",{className:"tags"},u.map(function(e,t){return i.a.createElement("span",{key:t,className:"tag"},e)}))))),i.a.createElement("button",{onClick:this.close,className:"modal-close is-large","aria-label":"close"}))},t}(i.a.Component),ye=a(185),Ne=a.n(ye),ke=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))||this).state={openLb:!1,title:"",category:"all"},t.projects=[{thumb:z.a,title:"Roomia",subtitle:"Property Management",category:"business"},{thumb:D.a,title:"Pick and Roll",subtitle:"Basketball Pick-up Game Finder",category:"personal"},{thumb:j.a,title:"Foodsight",subtitle:"Food Chemicals Dictionary",category:"personal"},{thumb:B.a,title:"Delta Kids",subtitle:"Kids Pogram Listings",category:"business"},{thumb:J.a,title:"Japanese Practice Tool",subtitle:"iOS App",category:"personal",contain:!0}],t}l()(t,e);var c=t.prototype;return c.componentDidMount=function(){a(186)(document.getElementById("mixer"),{animation:{duration:500,nudge:!0,reverseOut:!0,effects:"fade scale(0.01)"}})},c.render=function(){var e=this;return i.a.createElement("section",{className:"section",id:"portfolio"},i.a.createElement("div",{className:"section-heading"},i.a.createElement("h3",{className:"title is-2"},"PORTFOLIO"),i.a.createElement("h4",{className:"subtitle is-5"},"See my latest works")),i.a.createElement("div",{className:"tabs is-centered"},i.a.createElement("ul",null,i.a.createElement("li",{className:"all"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"all"})}},i.a.createElement("a",{"data-filter":"all"},"All")),i.a.createElement("li",{className:"business"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"business"})}},i.a.createElement("a",{"data-filter":".business"},"Business")),i.a.createElement("li",{className:"personal"==this.state.category?"is-active":"",onClick:function(){e.setState({category:"personal"})}},i.a.createElement("a",{"data-filter":".personal"},"Personal")))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"mixer",className:"columns is-multiline is-mobile"},this.projects.map(function(t,a){var c=t.thumb,l=t.title,n=t.subtitle,s=t.contain,o=t.category;return i.a.createElement("div",{key:a,onClick:function(){return e.setState({openLb:!0,title:l})},className:r()("column is-12-mobile is-three-quarters-mobile is-half-tablet is-one-third-desktop mix",o)},i.a.createElement("figure",{className:r()(Ne.a.photo,"image is-5by3")},i.a.createElement("img",{style:{width:"100%",height:"100%",objectFit:s?"contain":"fill"},src:c}),i.a.createElement("figcaption",{className:Ne.a.hoverContent},i.a.createElement("h1",{className:"title is-5"},l),i.a.createElement("p",null,n))))}))),this.state.openLb&&i.a.createElement(Ee,{title:this.state.title,close:function(){return e.setState({openLb:!1})}}))},t}(i.a.Component),we=a(187),xe=a.n(we),Ce=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.window=window},a.render=function(){return i.a.createElement("section",{className:"section",id:"contact"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section-heading"},i.a.createElement("h3",{className:"title is-2"},"Contact"),i.a.createElement("h4",{className:"subtitle is-5"},"Get in touch")),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:r()("column is-6 is-offset-3",xe.a.form)},i.a.createElement("div",{className:"box"},i.a.createElement("form",{action:"https://getsimpleform.com/messages?form_api_token=571f2ee41481eae45b625d5548725d22",method:"post"},i.a.createElement("input",{type:"hidden",name:"redirect_to",value:this.window&&window.location.origin+"/#thank-you"}),i.a.createElement("input",{name:"name",className:"input",required:!0,type:"text",placeholder:"Your Name *"}),i.a.createElement("input",{name:"email",className:"input",required:!0,type:"email",placeholder:"Your Email *"}),i.a.createElement("textarea",{name:"message",className:"textarea",required:!0,placeholder:"Your Message *"}),i.a.createElement("button",{type:"submit",className:"button is-rounded is-primary is-outlined is-medium"},i.a.createElement("i",{style:{marginRight:"10px"},className:"fas fa-envelope"}),"Submit")))))))},t}(i.a.Component),Se=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",style:{msTransform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M.76 12.2l-.08-.04c-.18-.1-.32-.25-.42-.44c-.14-.26-.2-.5-.2-.75l.02-.13c0-.2.05-.38.14-.55l.08-.15c.04-.08.1-.15.15-.22c.06-.07.07-.16.05-.24l-.05-.16c-.06-.2-.1-.4-.1-.6L.32 8.8c0-.22.06-.44.2-.6l.1-.13c.07-.1.18-.16.3-.2c.1-.03.17-.13.18-.25l.02-.34c0-.27.13-.52.33-.7l.24-.18c.05-.05.1-.1.14-.18c.05-.06.06-.14.05-.2c-.02-.1 0-.13.05-.14c.16.06.26.04.33-.04l.13-.17l.36-.4a.4.4 0 0 0 .08-.42l-.12-.26c-.02-.06 0-.13.05-.15c.13 0 .22.05.26.13l.04.07c.06.12.2.18.3.13c.22-.08.4-.1.57-.1h.32c.22 0 .4-.15.44-.38c.04-.28.14-.5.28-.65c.15-.17.32-.3.52-.4c.26-.14.42-.34.47-.6c.07-.32.24-.55.47-.7l.76-.43l.22-.13c.13-.08.25-.18.35-.3l.2-.24c.1-.1.2-.17.32-.2c.1-.03.24-.05.36-.04l.4.03c.2 0 .36.05.52.12l.1.05c.1.04.2.02.25-.05L10 .7l.43-.45c.1-.1.22-.14.35-.12c.13.02.26.07.38.13c.18.1.33.14.5.14h.1c.22 0 .44.03.66.08l.15.04c.15.04.3-.02.4-.14c.03-.05.1-.06.14-.02c.03.02.04.04.05.07c.02.2.14.35.3.4l.16.05a.8.8 0 0 1 .42.3c.1.15.22.3.36.4l.1.1c.1.1.24.14.38.13h.59c.24 0 .47.04.7.14c.22.1.45.12.66.04c.22-.07.45-.1.68-.07l.43.07c.2.02.4.12.52.27l.05.05c.1.1.2.23.3.37c.06.13.2.2.34.2h.62c.15 0 .3.03.42.1c.13.1.24.2.34.3l.1.13c.12.14.18.33.17.53c0 .16.12.3.28.3l.2.02c.14 0 .26.1.33.23l.1.2l.26.58c.04.1.05.2.04.28c0 .1.03.18.1.22l.1.07c.13.1.2.25.18.42l-.07.47l-.02.2c-.02.1.03.23.12.3c.15.1.22.23.23.38v.2c0 .1-.02.22-.1.3c-.06.08-.1.18-.1.3l.03.23c0 .16.1.3.2.4c.14.1.22.26.24.42c.04.25.05.45.05.65v.23c0 .08 0 .16.03.24c.02.07.07.14.13.18l.2.15c.2.13.34.3.42.53c.1.22.13.45.13.68v.08c0 .18-.02.37-.08.54a.71.71 0 0 0 .03.5c.08.14.13.3.15.47c.04.2.02.4-.05.56l-.02.07c-.05.12-.13.23-.23.32c-.1.1-.2.16-.26.23c-.06.06-.1.16-.07.25l.03.14c.05.2.05.4 0 .58v.08c-.04.15-.1.28-.16.4c-.07.13-.17.23-.3.3l-.15.1a.26.26 0 0 0-.12.22c0 .1-.04.2-.1.26l-.15.2c-.1.13-.23.24-.37.3c-.14.1-.26.2-.35.3c-.1.12-.18.26-.22.4c-.04.18-.18.28-.33.28h-.54c-.14 0-.27.1-.33.22c-.07.16-.14.27-.23.37a.8.8 0 0 0-.2.36c-.02.12-.12.2-.22.16c-.13-.06-.26 0-.32.1c-.12.2-.24.35-.37.48l-.07.06c-.13.1-.3.18-.45.18c-.18 0-.27.08-.3.2c-.03.1-.05.23-.06.34c-.02.12-.06.23-.1.33l-.05.06c-.1.15-.18.3-.28.43l-.04.06c-.13.17-.3.3-.5.35a2 2 0 0 1-.66.1h-.14c-.1 0-.2.06-.27.16l-.06.1l-.06.12l-.13.22c-.1.18-.25.3-.45.36c-.2.05-.43.07-.64.06l-.16-.02c-.14 0-.27-.04-.4-.1c-.1-.04-.24 0-.3.1c-.1.14-.22.22-.35.26l-.3.1c-.2.05-.42.05-.63 0l-.16-.05c-.1 0-.2-.05-.28-.1a.54.54 0 0 0-.3-.06l-.13.02c-.2.02-.38 0-.56-.05l-.27-.06a.57.57 0 0 1-.3-.23a.393.393 0 0 0-.3-.2H9.9c-.2-.03-.38-.1-.5-.25L9 22.5l-.14-.12l-.22-.16l-.13-.1c-.15-.1-.33-.18-.52-.2l-.6-.1c-.06 0-.1-.02-.16-.03L7 21.74c-.1-.02-.2-.1-.27-.2c-.06-.1-.17-.14-.27-.1c-.2.08-.36.1-.52.13H5.8c-.26.02-.5-.02-.74-.13c-.24-.1-.4-.25-.55-.44c-.12-.17-.3-.3-.52-.34l-.28-.06c-.2-.04-.4-.12-.58-.24c-.2-.14-.3-.27-.38-.43c-.08-.15-.13-.32-.14-.5v-.08a.495.495 0 0 0-.35-.43c-.23-.07-.4-.17-.55-.3a.71.71 0 0 1-.22-.52l.02-.44c0-.17-.05-.32-.17-.43a.62.62 0 0 1-.2-.43l-.03-.36a5.29 5.29 0 0 0-.13-.78c-.06-.23.03-.46.22-.57l.07-.05c.1-.07.14-.2.08-.32l-.08-.1a.75.75 0 0 0-.3-.2c-.08-.02-.1-.1-.1-.15l.1-.12c.06-.07.05-.18 0-.24a.455.455 0 0 1-.13-.28l-.02-.7c0-.14.02-.28.06-.42c.04-.12 0-.26-.12-.32zm9.9-1.32c.07-.07.06-.2 0-.25a.973.973 0 0 1-.23-.27l-.1-.16a1.46 1.46 0 0 0-.26-.34l-.02-.02a.86.86 0 0 1-.23-.3c-.05-.1-.05-.2 0-.3l.06-.1c.06-.1.1-.24.1-.36v-.04c0-.1-.04-.2-.1-.3c-.04-.08-.08-.18-.1-.28V8.1c-.03-.12 0-.25.08-.35c.08-.13.14-.25.17-.4v-.02c.04-.1.02-.23-.04-.33s-.08-.2-.04-.32l.07-.2c.06-.18.15-.34.27-.48l.14-.15l.1-.12l.06-.06c.06-.06.07-.16.02-.24c-.05-.1-.08-.2-.06-.3l.02-.14c.03-.2.1-.4.23-.56l.04-.04c.15-.2.34-.33.56-.4l.27-.1c.12-.04.2-.17.2-.3c0-.16.05-.3.14-.43l.05-.05c.1-.17.22-.34.3-.52l.07-.13c.02-.03.03-.07.03-.1c0-.17-.1-.32-.26-.33L11.76 2c-.25-.02-.5 0-.74 0l-.85.1c-.13 0-.23.1-.24.24c0 .14-.1.26-.22.3l-.36.1l-.1.03l-.3.1c-.22.07-.4.23-.5.45l-.08.13c-.1.22-.27.4-.48.53c-.2.13-.3.34-.32.58v.1c-.02.2-.08.4-.2.54l-.05.08c-.08.1-.1.23-.05.34c.05.12.08.25.07.38v.53c0 .14-.1.26-.2.3c-.14.05-.23.16-.27.3l-.05.2c-.04.2.03.4.2.52c.16.12.26.3.3.52v.18c.03.2.14.4.32.5c.18.12.32.3.4.5l.05.16c.08.22.26.35.46.37h.06c.18 0 .34.1.44.26c.1.16.26.27.44.3l.28.08c.17.05.33.14.46.27l.02.02c.1.08.26.07.35-.04l.07-.08zm1.14-.92c.1.06.2.03.24-.06l.03-.05c.07-.14.16-.28.26-.4l.2-.3c.03 0 .04-.02.05-.04l.24-.32c.1-.1.22-.17.36-.17c.13 0 .24-.07.3-.2c.04-.14.1-.27.22-.38l.05-.06c.1-.1.2-.15.3-.2c.13-.02.25-.04.37-.04h.3c.12 0 .22-.05.28-.15c.06-.1.15-.17.25-.22l.1-.04c.16-.07.34-.12.52-.14l.2-.02c.12 0 .25 0 .37.07c.1.07.23.06.33-.02l.07-.04c.15-.1.32-.18.5-.2h.02c.2-.04.38-.04.58-.03h.1c.2.03.37.1.5.25l.03.04c.1.1.26.18.4.18h.17c.05 0 .1-.02.13-.07c.03-.03.08-.06.13-.06h.1c.14 0 .27.04.4.08l.17.07c.16.05.33.1.5.12h.12c.08 0 .13-.05.13-.12c0-.1-.02-.2-.07-.28L20.68 7c-.08-.13-.14-.27-.2-.4l-.02-.05c-.05-.1-.05-.2 0-.3V6.2a.17.17 0 0 0-.1-.2h-.08a.796.796 0 0 1-.4-.27l-.1-.1c-.1-.1-.16-.25-.2-.4c-.05-.13-.16-.23-.3-.23h-.42a.552.552 0 0 1-.37-.22l-.04-.05c-.07-.1-.13-.22-.17-.34c-.05-.1-.16-.16-.26-.13l-.12.04c-.2.07-.4.1-.6.08l-.16-.02c-.17 0-.33-.07-.46-.17l-.1-.07c-.08-.06-.16-.1-.25-.14c-.1-.04-.18-.02-.24.05l-.05.06c-.1.1-.24.18-.38.2l-.54.03c-.1 0-.2.05-.27.12c-.08.07-.17.12-.27.14h-.02c-.1 0-.2.07-.3.14v.02c-.1.1-.23.15-.36.15l-.04.02c-.12 0-.24 0-.36.03h-.12c-.17.03-.3.17-.34.35l-.04.23a1 1 0 0 1-.2.43c-.1.12-.22.2-.37.2H12.26c-.1.02-.2.13-.18.25c.02.17 0 .32-.03.47l-.04.17c-.04.15-.14.27-.27.32l-.06.03h-.02c-.06.04-.1.13-.05.2c.06.1.08.2.07.3l-.03.32c0 .12-.05.23-.1.33c-.06.1-.06.2-.02.3l.1.22c.05.1.06.2.03.32c-.03.1-.05.2-.04.3c0 .1.06.2.14.24l.02.02zm7.9 7.23c.1.1.25.14.37.06l.2-.13c.1-.07.18-.17.22-.3v-.02l.1-.3l.06-.1l.04-.1l.04-.07c.04-.08.1-.14.2-.17l.04-.02c.08-.02.13-.1.13-.18c0-.1.05-.18.1-.25l.08-.07l.2-.26v-.02c.06-.08.1-.17.12-.27c.02-.1 0-.2-.04-.3l-.02-.04a.92.92 0 0 1-.07-.26l-.03-.28l-.03-.3c0-.1.04-.2.1-.3a.97.97 0 0 0 .16-.28v-.04l.02-.02c.02-.1-.03-.2-.12-.2c-.1-.05-.2-.13-.23-.25l-.03-.06c-.05-.18-.08-.36-.08-.54l.02-.5v-.03a.3.3 0 0 0-.3-.3h-.02c-.2 0-.36-.06-.5-.2l-.08-.1l-.2-.23l-.26-.3c-.1-.14-.2-.26-.33-.38c-.1-.1-.25-.2-.4-.22l-.2-.03c-.1-.02-.23-.07-.34-.14c-.08-.06-.2-.04-.28.04l-.13.14l-.06.04c-.07.02-.14-.02-.17-.1a.502.502 0 0 1 .02-.38v-.06c0-.07-.06-.12-.12-.1h-.16c-.18 0-.36-.02-.53-.1l-.1-.04a.764.764 0 0 0-.33-.08c-.1 0-.2.02-.3.08l-.04.03c-.12.08-.26.12-.4.13h-.33c-.15 0-.3.05-.4.13c-.13.08-.27.13-.42.16l-.27.04c-.12.03-.25.08-.36.17c-.1.1-.24.16-.37.2l-.05.02a.74.74 0 0 0-.4.3l-.12.12a.27.27 0 0 0 0 .32c.06.1.18.13.3.1l.15-.06c.08-.03.17 0 .24.04c.06.05.15.08.24.07l.25-.03c.14 0 .28 0 .42.04c.15.05.28.1.4.2s.25.14.4.16c.15.02.3.05.44.1l.1.02c.1.03.18.1.24.2c.05.08.1.2.1.3v.03c0 .12.1.2.2.2h.06c.16 0 .33.02.5.07l.07.03c.1.04.2.1.27.2c.08.1.13.2.16.3l.03.14c.03.15.04.3.04.46v.05c0 .1.07.2.18.24c.1.02.22.06.33.12l.05.02c.13.08.26.18.36.3l.05.07c.13.15.2.34.2.53v.07c0 .15-.03.3-.08.44c-.04.12 0 .26.13.3l.07.05c.15.06.28.17.38.3c.1.15.14.32.14.5v.3c-.02.1-.05.18-.1.25s-.05.17 0 .24l.06.1zm-6.4-5.12h-.02c-.04 0-.06.05-.05.1l.04.2c.04.16.06.32.08.48c.02.16.1.3.22.4h.04c.15.12.24.3.25.48v.5c-.02.1 0 .2.06.28l.05.05c.1.12.14.26.15.4l.03.55c0 .13-.08.24-.2.26l-.1.02c-.07 0-.1.08-.1.15c0 .08.03.17.06.25v.02c.03.1.04.2.03.3l-.04.27c-.04.2-.1.38-.2.56l-.07.12a.43.43 0 0 1-.2.2c-.1.04-.17.12-.2.22l-.08.36c-.05.2-.14.4-.26.6h-.02c-.12.16-.27.3-.45.4l-.12.08l-.3.15c-.1.04-.16.13-.18.24l-.05.33c-.03.2-.1.37-.24.5l-.13.15l-.15.15L11 21c-.12.14-.3.2-.5.17l-.36-.07l-.33-.04h-.09c-.04.04-.05.1-.02.16c.07.12.18.2.3.2l.22.04c.1 0 .22.05.32.1c.1.07.2.12.32.15h.02c.13.05.27.06.4.05l.15-.02c.17-.02.33 0 .47.06l.12.04c.05.02.13 0 .18-.05c.06-.06.12-.1.2-.13l.08-.02c.13-.04.26-.06.4-.06h.08c.12 0 .23.02.33.08l.04.02c.07.03.15 0 .2-.06c.03-.07.1-.14.17-.2l.25-.17l.16-.1l.08-.05c.1-.07.24-.1.36-.1l.36-.03c.14-.02.26-.12.3-.26c.04-.15.1-.3.2-.43s.2-.24.3-.34c.13-.1.26-.15.4-.16h.08c.16-.03.28-.18.27-.34v-.67c.02-.1.06-.23.12-.33l.2-.3l.08-.1c.06-.05.1-.12.17-.2l.1-.13a.27.27 0 0 0-.02-.32c-.1-.1-.15-.24-.17-.38v-.04c-.02-.16-.02-.33.03-.5v-.05c.05-.13.12-.26.2-.38c.08-.1.07-.24-.03-.32l-.17-.15a.74.74 0 0 1-.24-.48l-.02-.2c0-.06 0-.13-.02-.2l-.02-.15a.573.573 0 0 0-.26-.4l-.07-.02c-.1-.06-.2-.15-.28-.27c-.08-.1-.12-.24-.15-.38l-.03-.17c0-.06-.04-.1-.1-.13l-.16-.05l-.32-.1c-.1-.02-.2-.1-.27-.17h-.02a.143.143 0 0 0-.22-.02l-.1.1c-.02.03-.04.04-.07.03c-.06 0-.1-.05-.08-.1a.454.454 0 0 0-.17-.42l-.13-.1l-.3-.2c-.08-.03-.2 0-.24.1l-.04.06c0 .02-.03.03-.04.04c-.04 0-.1 0-.1-.05l-.03-.05c-.03-.06-.1-.1-.16-.12zm-1.2 1l-.05-.05c-.05-.04-.1-.03-.15.02c-.07.12-.13.25-.16.38v.02c-.03.13-.15.22-.27.2H11.35c-.14 0-.25.12-.25.26c0 .18-.06.36-.17.5l-.06.06c-.1.13-.25.22-.4.27l-.08.02c-.1.03-.18.1-.2.22c0 .1-.06.2-.14.28l-.1.08c-.12.13-.3.2-.48.22l-.5.05c-.16 0-.3.1-.4.25c-.1.15-.25.25-.4.27l-.22.02c-.16.02-.33.02-.5-.02l-.1-.02l-.27-.07c-.1-.03-.18 0-.24.07l-.1.13a.58.58 0 0 1-.5.2l-.65-.08c-.1 0-.18-.05-.27-.1c-.1-.06-.17-.13-.24-.2l-.25-.3c-.03-.02-.08-.03-.13-.02l-.14.06l-.56.14c-.1.03-.23 0-.33-.06c-.1-.08-.22-.1-.34-.1H3.2c-.12.03-.2.16-.16.28l.04.2c.03.1.02.22-.03.32s-.04.2.03.3l.06.08c.08.12.2.22.3.32c.1.1.2.2.28.33l.15.27c.08.14.2.22.36.22c.15 0 .3.05.42.15l.3.28c.08.07.2.08.28.02l.05-.02c.06 0 .1.04.1.1v.05c0 .13.1.25.23.3l.45.1c.16.05.32.1.47.2h.08c.08 0 .15-.07.14-.16v-.35c0-.1.04-.2.12-.24l.05-.02c.05.02.1.06.08.1v.17c0 .13.04.25.13.34c.1.1.23.12.34.08c.12-.05.24-.06.37-.05l.37.02c.18.02.35 0 .5-.07c.18-.06.33-.14.47-.25l.06-.04l.3-.27c.1-.1.23-.15.35-.15h.4c.2-.02.38-.2.4-.4l.04-.2c0-.13.06-.25.15-.35c.1-.1.2-.16.3-.2l.12-.05c.17-.07.3-.22.36-.4l.06-.24c.05-.2.15-.4.3-.53l.02-.02c.12-.1.14-.3.06-.44l-.03-.07a.42.42 0 0 1-.03-.38c.05-.14.1-.26.18-.38l.1-.14c.04-.08.04-.2-.02-.27a.478.478 0 0 1-.1-.28l-.02-.14v-.34c.02-.1 0-.23-.03-.33l-.04-.12zm-1.43-.76v-.03c0-.1-.06-.16-.14-.16h-.26c-.1.02-.2.02-.28 0h-.45c-.23 0-.45-.04-.67-.1l-.24-.06l-.2-.06l-.45-.15a.849.849 0 0 1-.53-.45l-.05-.1a.337.337 0 0 0-.37-.2c-.17 0-.34 0-.5-.08l-.12-.05c-.23-.1-.4-.3-.4-.57l-.04-.27c-.03-.14-.12-.27-.24-.32c-.14-.06-.27-.14-.4-.23l-.05-.03a1.1 1.1 0 0 1-.35-.47l-.02-.06a.94.94 0 0 1-.02-.5l.02-.06c.04-.13.05-.26.05-.4a.47.47 0 0 0-.14-.33l-.14-.13a.726.726 0 0 1-.27-.53c-.02-.22-.02-.43.02-.64v-.06a.2.2 0 0 0-.2-.2H4.2c-.13 0-.24.08-.3.2c-.05.14-.13.25-.22.36l-.04.05l-.2.2l-.1.1c-.1.1-.16.25-.18.4c-.02.15-.06.3-.12.44l-.02.05c-.05.12-.13.23-.23.3c-.1.08-.17.2-.17.32l-.02.46c0 .2-.03.4-.1.6l-.02.08c-.05.13 0 .27.12.33l.42.18l.04.02c.03 0 .04.02.05.05c.03.04 0 .1-.03.1l-.1.05c-.06.02-.1.08-.12.15l-.02.1v.02l-.1.56c-.02.08-.02.17-.02.26c0 .08.05.15.12.18l.22.1c.1.06.22.13.3.2l.1.08c.03.04.08.08.12.1l.04.04c.07.06.12.14.14.23l.1.45c0 .12.1.22.2.25l.16.05s.03 0 .05.02l.2.06c.16.05.3.14.42.26c.12.1.24.23.34.37l.04.04c.08.1.2.15.32.12s.25-.04.38-.04h.15c.1 0 .23.03.34.1c.1.06.23.1.35.15h.03c.12.05.25.03.35-.04c.1-.08.23-.12.36-.12l.47.03c.1 0 .2-.02.25-.1h.02l.17-.16l.05-.05c.08-.1.2-.14.32-.15h.45c.12 0 .23-.1.28-.2c.05-.1.15-.18.27-.2l.2-.04c.08 0 .15-.07.18-.16c.03-.1.08-.18.15-.24l.16-.16c.1-.1.15-.2.17-.32z",fill:"#ffffff"}),i.a.createElement("rect",{x:"0",y:"0",width:"24",height:"24",fill:"rgba(0, 0, 0, 0)"}))},t}(i.a.Component),Me=a(188),Re=a.n(Me),Te=function(){return i.a.createElement("footer",{style:{position:"relative",textAlign:"center"},className:"footer"},i.a.createElement("div",{className:Re.a.chevron,onClick:function(){var e=document.getElementById("home");g()(e)}},i.a.createElement("i",{className:"fas fa-angle-up"})),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-one-third is-offset-4"},i.a.createElement("div",{className:Re.a.socialButtons},i.a.createElement("a",{className:r()(Re.a.icon),href:"https://github.com/villacerc"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{className:r()(Re.a.icon),href:"https://www.linkedin.com/in/carlovillaceran/"},i.a.createElement("i",{className:"fab fa-linkedin-in"})),i.a.createElement("a",{className:r()(Re.a.icon),href:"https://angel.co/carlo-villaceran"},i.a.createElement("i",{className:"fab fa-angellist"})),i.a.createElement("a",{className:r()(Re.a.icon),style:{lineHeight:"55px"},href:"https://www.codewars.com/users/villacerc"},i.a.createElement(Se,null))))),i.a.createElement("div",{style:{opacity:.5},className:"copyright"},"Carlo Villaceran © 2019"))},Ae=a(189),Ie=a.n(Ae),Pe=function(){return i.a.createElement("section",{className:"section",id:"resume"},i.a.createElement("div",{className:"section-heading"},i.a.createElement("h3",{className:"title is-2"},"Resume"),i.a.createElement("h4",{className:"subtitle is-5"},"More about me")),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("a",{href:Ie.a,className:"button is-rounded is-primary is-medium is-outlined"},i.a.createElement("span",{className:"icon"},i.a.createElement("i",{className:"fas fa-file-alt"})),i.a.createElement("span",null,"View My Resume"))))},Le=(a(190),function(e){function t(){for(var t,a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))||this).state={showMessage:!1},t.message=function(){return i.a.createElement("article",{className:"message is-success is-toast-top"},i.a.createElement("div",{className:"message-header"},"Thank you for contacting me. I will get back to you as soon as I can.",i.a.createElement("button",{onClick:function(){return t.setState({showMessage:!1})},className:"delete","aria-label":"delete"})))},t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({showMessage:window.location.href.includes("thank-you")})},a.render=function(){return i.a.createElement("div",null,i.a.createElement(s.Helmet,null,i.a.createElement("title",null,"Carlo Villaceran")),i.a.createElement("div",null,this.state.showMessage&&this.message(),i.a.createElement(x,null),i.a.createElement(P,null),i.a.createElement(M,null),i.a.createElement(Pe,null),i.a.createElement(ke,null),i.a.createElement(Ce,null),i.a.createElement(Te,null)))},t}(i.a.Component));t.default=Le},146:function(e,t,a){e.exports=a.p+"static/foodsight-landing-e5019bbf9e3c8c948f10857c79b474d3.png"},164:function(e,t,a){e.exports=a.p+"static/roomia-landing-16cccb4028b9a516af7823e4475e2251.png"},165:function(e,t,a){e.exports=a.p+"static/pnr_home-6f9cef3ae8c3794c0e9b1ac8ef896eab.png"},166:function(e,t,a){e.exports=a.p+"static/deltakids-landing-7eeaea424d7ee933c053e5d2561c81b7.png"},167:function(e,t,a){e.exports=a.p+"static/jpt-splash-43f4bed871fbd9d192c75255ed7a4972.png"},170:function(e,t,a){e.exports=a.p+"static/roomia-e694fd05c6c003f01d313d83fbe147af.mp4"},171:function(e,t,a){e.exports=a.p+"static/companion_app-ff15d4bc930b97f5e2949da3f0098f2a.mp4"},172:function(e,t,a){e.exports=a.p+"static/reading_stroke-b0285bd5730072fccbb4ab1dafe3077f.mp4"},173:function(e,t,a){e.exports=a.p+"static/matching-2c88c36a80e7e654f12e5e20e1bff0e1.mp4"},174:function(e,t,a){e.exports=a.p+"static/fs2-d2946775cba2d9fd32d6a9769596c00a.png"},175:function(e,t,a){e.exports=a.p+"static/fs3-d215f957a79f1be6222bb006a88369bf.png"},176:function(e,t,a){e.exports=a.p+"static/fs4-d42c52548459fd77c6b384d88ab80859.png"},177:function(e,t,a){e.exports=a.p+"static/dk1-ff0cd44e4e10f76bb32f41d699c050bd.png"},178:function(e,t,a){e.exports=a.p+"static/dk2-162475ff7e20bf1f3d6bb57f6f3a8bea.png"},179:function(e,t,a){e.exports=a.p+"static/dk3-09cd33110d5acc05148df87ee85fb5bd.png"},180:function(e,t,a){e.exports=a.p+"static/dk4-c107b3bec2595e8eb5a336c194ab2a07.png"},181:function(e,t,a){e.exports=a.p+"static/pnr1-1aa6e89840b4b5addb56b307b7a51792.png"},182:function(e,t,a){e.exports=a.p+"static/pnr2-11511a646ceb6cfef14f56e7ecc88414.png"},183:function(e,t,a){e.exports=a.p+"static/pnr3-0be6d9710987da658aefc09510833c75.png"},189:function(e,t,a){e.exports=a.p+"static/CarloVillaceran_resume-f9445559281b6f29098b8e4ae9548217.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-bd8946746a5fb0943651.js.map