(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),c=n.n(u),l=n(1),o=n.n(l),s=n(3),i=n(4),p=n(5),m=n.n(p),g={login:function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},b=function(e){var t=e.handleLogin,n=e.username,a=e.password,u=e.setUsername,c=e.setPassword;return r.a.createElement("form",{onSubmit:t},r.a.createElement("h3",null,"Login to application"),"login",r.a.createElement("input",{value:n,type:"text",name:"Username",onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("br",null),"password",r.a.createElement("input",{value:a,type:"password",name:"Password",onChange:function(e){var t=e.target;return c(t.value)}}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"login"))},f=null,v={getAll:function(){return m.a.get("/api/blogs").then(function(e){return e.data})},getSingle:function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("/api/blogs","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){f="bearer ".concat(e)},create:function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,m.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(e){var t=e.blogs,n=e.setBlogs,u=Object(a.useState)(""),c=Object(i.a)(u,2),l=c[0],o=c[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),m=p[0],g=p[1],b=Object(a.useState)(""),f=Object(i.a)(b,2),d=f[0],E=f[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={title:l,author:m,url:d};v.create(a).then(function(e){n(t.concat(e)),o(""),g(""),E("")})}},r.a.createElement("p",null,"title"),r.a.createElement("input",{value:l,type:"text",onChange:function(e){var t=e.target;return o(t.value)}}),r.a.createElement("p",null,"author"),r.a.createElement("input",{value:m,type:"text",onChange:function(e){var t=e.target;return g(t.value)}}),r.a.createElement("p",null,"url"),r.a.createElement("input",{value:d,type:"text",onChange:function(e){var t=e.target;return E(t.value)}}),r.a.createElement("button",{type:"submit"},"add"))},E=function(e){var t=e.blog;return r.a.createElement("div",null,r.a.createElement("p",null,t.title),r.a.createElement("p",null,t.author))},h=function(e){var t=e.blogs,n=e.setUser;return r.a.createElement("div",null,r.a.createElement("h3",null,"Blogs"),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(E,{blog:e})})),r.a.createElement("button",{onClick:function(){return n(null)&&localStorage.removeItem("loggedUser")}},"logout"))};var w=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),p=l[0],m=l[1],f=Object(a.useState)(""),E=Object(i.a)(f,2),w=E[0],O=E[1],j=Object(a.useState)([]),x=Object(i.a)(j,2),y=x[0],S=x[1],k=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.login({username:p,password:w});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),v.setToken(n.token),u(n),m(""),O(""),S(n.blogs),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},null===n?r.a.createElement(b,{handleLogin:k,username:p,password:w,setUsername:m,setPassword:O}):r.a.createElement("div",null,r.a.createElement(h,{blogs:y,setUser:u}),r.a.createElement(d,{blogs:y,setBlogs:S})))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f6f15234.chunk.js.map