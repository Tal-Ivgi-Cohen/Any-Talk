(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{316:function(e,t){},466:function(e,t,n){},467:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),s=n(20),o=n.n(s),i=n(70),u=n(50),l=n(11),p=n(27),h=n(28),j=n(30),d=n(29),b=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsx)("footer",{className:"app-footer",children:Object(r.jsx)("p",{children:"Copyrights Any-Talk by Tal Cohen 2021 \xa9 "})})}}]),n}(c.a.Component),g=n.p+"static/media/logo.b872e319.jpeg",f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("header",{className:"app-header",children:[Object(r.jsx)("img",{className:"logo",src:g,alt:"logo"}),Object(r.jsxs)("nav",{children:[Object(r.jsx)(u.b,{to:"/",children:"Home"})," |",Object(r.jsx)(u.b,{to:"/chat",children:"chat"})," |",Object(r.jsx)(u.b,{to:"/login",children:"Login"})]})]})}}]),n}(c.a.Component),m=n(227),O=n.n(m),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"carousel-container",children:[Object(r.jsxs)("div",{className:"main-hero-content",children:[Object(r.jsx)("h1",{children:"Welcome to Any-Talk!"}),Object(r.jsx)(u.b,{className:"login-btn",to:"/login",children:"Login"})]}),Object(r.jsxs)(O.a,{className:"heros-container",children:[Object(r.jsx)("img",{src:"//cdn.pixabay.com/photo/2021/06/18/20/56/social-networks-6347153_960_720.jpg",alt:"social-networks"}),Object(r.jsx)("img",{src:"//cdn.pixabay.com/photo/2016/12/13/07/25/email-1903444_960_720.jpg",alt:"email"}),Object(r.jsx)("img",{src:"//cdn.pixabay.com/photo/2018/11/26/21/28/telephone-3840285_960_720.jpg",alt:"telephone"})]})]})}}]),n}(c.a.Component),v=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)("div",{className:"home-section",children:Object(r.jsx)(x,{})}),Object(r.jsxs)("div",{className:"home-desc",children:[Object(r.jsxs)("p",{children:["Welcome to ",Object(r.jsx)("span",{children:"Any Talk."})]}),Object(r.jsx)("p",{children:"Communication platform Anytime, Anywhere "})]})]})}}]),n}(c.a.Component),y=n(4),k=n.n(y),w=n(9),C=n(56),N=n(17),S=n(228),U="/api/",T=n.n(S).a.create({withCredentials:!0}),_=function(e,t){return M(e,"GET",t)},E=function(e,t){return M(e,"POST",t)},I=function(e,t){return M(e,"PUT",t)},L=function(e,t){return M(e,"DELETE",t)};function M(e){return A.apply(this,arguments)}function A(){return(A=Object(w.a)(k.a.mark((function e(t){var n,r,a,c=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"get",r=c.length>2&&void 0!==c[2]?c[2]:null,e.prev=2,e.next=5,T({url:"".concat(U).concat(t),method:n,data:r,params:"GET"===n?r:null});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(r)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var P={login:function(e){return G.apply(this,arguments)},logout:function(){return W.apply(this,arguments)},signup:function(e){return H.apply(this,arguments)},getUsers:function(){return _("user")},remove:function(e){return L("user/".concat(e))},update:function(e){return D.apply(this,arguments)},getLoggedinUser:R};function D(){return(D=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("user/".concat(t._id),t);case 2:t=e.sent,R()._id===t._id&&F(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("auth/login",t);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",F(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("auth/signup",t);case 2:return n=e.sent,e.abrupt("return",F(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.clear(),e.next=3,E("auth/logout");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return sessionStorage.setItem("loggedinUser",JSON.stringify(e)),e}function R(e){return B.apply(this,arguments)}function B(){return(B=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("user/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.userService=P;var J=n.p+"static/media/login.ae638c56.png",X=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={msg:"",loginCred:{nickname:""}},e.loginHandleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState((function(e){return{loginCred:Object(N.a)(Object(N.a)({},e.loginCred),{},Object(C.a)({},r,a))}}))},e.doLogin=function(){var t=Object(w.a)(k.a.mark((function t(n){var r,a,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state.loginCred,a=r.nickname){t.next=5;break}return t.abrupt("return",e.setState({msg:"Please enter nickname"}));case 5:c={nickname:a};try{e.props.login(c),e.setState({loginCred:{nickname:""}}),e.props.history.push("/chat")}catch(s){e.setState({msg:"Login failed, try again."})}case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.loadUsers()}},{key:"render",value:function(){var e=Object(r.jsx)("div",{className:"login-area",children:Object(r.jsxs)("form",{onSubmit:this.doLogin,children:[Object(r.jsxs)("select",{name:"nickname",value:this.state.loginCred.nickname,onChange:this.loginHandleChange,className:"login-form",children:[Object(r.jsx)("option",{value:"",children:"Select User"}),this.props.users&&this.props.users.map((function(e){return Object(r.jsx)("option",{value:e.nickname,children:e.nickname},e._id)}))]}),Object(r.jsx)("button",{children:"Login"})]})}),t=this.props.loggedInUser;return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("h1",{className:"login-title",children:"Login"}),Object(r.jsx)("div",{className:"login-img",children:Object(r.jsx)("img",{src:J,alt:"login img"})}),Object(r.jsx)("p",{children:this.state.msg}),t&&Object(r.jsxs)("div",{className:"login-user",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("h3",{children:["Welcome ",t.fullname]})}),Object(r.jsx)("button",{className:"logout-btn",onClick:this.props.logout,children:"Logout"})]}),!t&&e]})}}]),n}(a.Component),V={login:function(e){return function(){var t=Object(w.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.login(e);case 3:(r=t.sent)&&n({type:"LOGIN",user:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("UserActions: err in login",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.logout();case 3:t({type:"LOGOUT"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("UserActions: err in logout",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},loadUsers:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.getUsers();case 3:n=e.sent,t({type:"SET_USERS",users:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("UserActions: err in loadUsers",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},$=Object(i.b)((function(e){return{users:e.userModule.users,loggedInUser:e.userModule.loggedInUser}}),V)(X),q=n(244),z=n(229),K=n.n(z),Q=function(){var e=null,t={setup:function(){return Object(w.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_("setup-session");case 4:e=K()("",{reconnection:!1}),!0;case 6:case"end":return t.stop()}}),t)})))()},on:function(n,r){return Object(w.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return a.next=3,t.setup();case 3:e.on(n,r);case 4:case"end":return a.stop()}}),a)})))()},off:function(n){var r=arguments;return Object(w.a)(k.a.mark((function a(){var c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c=r.length>1&&void 0!==r[1]?r[1]:null,e){a.next=4;break}return a.next=4,t.setup();case 4:c?e.off(n,c):e.removeAllListeners(n);case 5:case"end":return a.stop()}}),a)})))()},emit:function(n,r){return Object(w.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return a.next=3,t.setup();case 3:e.emit(n,r);case 4:case"end":return a.stop()}}),a)})))()},terminate:function(){e=null,!1}};return t}();window.socketService=Q;var Y=n(243),Z=n(488),ee=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={msg:{txt:""},msgs:[],topic:""},e.addMsg=function(t){e.setState((function(e){return{msgs:[].concat(Object(q.a)(e.msgs),[t])}}))},e.changeTopic=function(){Q.emit("chat topic",e.state.topic)},e.sendMsg=function(t){var n;t.preventDefault();var r=(null===(n=e.props.loggedInUser)||void 0===n?void 0:n.nickname)||"Me";Q.emit("chat newMsg",{from:r,txt:e.state.msg.txt}),e.setState({msg:{from:"Me",txt:""}})},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(C.a)({},r,a),e.changeTopic)},e.msgHandleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState((function(e){return{msg:Object(N.a)(Object(N.a)({},e.msg),{},Object(C.a)({},r,a))}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Q.setup(),Q.emit("chat topic",this.state.topic),Q.on("chat addMsg",this.addMsg)}},{key:"componentWillUnmount",value:function(){Q.off("chat addMsg",this.addMsg),Q.terminate()}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"chat",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Any talk"})," Chat"]}),Object(r.jsxs)("div",{className:"chat-label",children:[Object(r.jsx)("small",{children:"Press here and start to (Any)talk"}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"topic",value:"Public",onChange:this.handleChange}),"Public"]})]}),Object(r.jsx)(Y.a,{className:"messages",children:this.state.msgs.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)(Z.a,{className:"avatar",children:e.from}),":",Object(r.jsxs)("span",{className:"message-txt",children:[" ",e.txt," "]})]})},t)}))}),Object(r.jsxs)("form",{className:"chat-form",onSubmit:this.sendMsg,children:[Object(r.jsx)("input",{type:"text",autoComplete:"off",className:"chat-input",value:this.state.msg.txt,onChange:this.msgHandleChange,name:"txt",placeholder:"Enter message"}),Object(r.jsx)("button",{children:"Send"})]})]})}}]),n}(a.Component),te=[{path:"/",component:v},{path:"/chat",component:Object(i.b)((function(e){return{loggedInUser:e.userModule.loggedInUser}}),{})(ee)},{path:"/login",component:$}];function ne(){return Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(f,{}),Object(r.jsx)("main",{children:Object(r.jsx)(l.c,{children:te.map((function(e){return Object(r.jsx)(l.a,{exact:!0,component:e.component,path:e.path},e.path)}))})}),Object(r.jsx)("footer",{children:Object(r.jsx)(b,{})})]})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(466);var re=n(57),ae=n(242),ce={loggedInUser:null,users:[]};var se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,oe=Object(re.c)({userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case"SET_USER":case"LOGIN":return Object(N.a)(Object(N.a)({},e),{},{loggedInUser:t.user});case"LOGOUT":return Object(N.a)(Object(N.a)({},e),{},{loggedInUser:null});case"SIGNUP":return Object(N.a)(Object(N.a)({},e),{},{loggedInUser:t.user,users:t.users});default:return e}}}),ie=Object(re.e)(oe,se(Object(re.a)(ae.a))),ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,490)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(i.a,{store:ie,children:Object(r.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ue()}},[[467,1,2]]]);
//# sourceMappingURL=main.4e367061.chunk.js.map