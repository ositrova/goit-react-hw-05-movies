"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{672:function(n,t,e){e.d(t,{O:function(){return b}});var r,a,i,u,c,o,s=e(689),p=e(168),l=e(87),f=e(444),d=(0,f.ZP)(l.OL)(r||(r=(0,p.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),x=f.ZP.div(a||(a=(0,p.Z)(["\n  max-width: 1200px;\n  padding: 20px;\n"]))),h=f.ZP.ul(i||(i=(0,p.Z)(["\n      display: flex;\n    gap: 30px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n"]))),m=f.ZP.img(u||(u=(0,p.Z)(["\nwidth: 300px;\nheight: 450px;\n"]))),g=f.ZP.li(c||(c=(0,p.Z)(["\n  border: 1px solid #ccc;\n  width: 300px;\n  border-radius: 4px;\n  transition: scale 250ms linear;\n  box-shadow: 3px 2px 2px #727171;\n  list-style: none;\n  \n  &:hover {\n    scale: 1.1;\n  }\n"]))),v=f.ZP.p(o||(o=(0,p.Z)(["\n  font-size: 17px;\n  font-weight: 600;\n  max-height: 43px;\n  padding: 10px 15px;\n  width: inherit;\n\n"]))),Z=e(184),b=function(n){var t=n.movies,e=(0,s.TH)(),r=function(n){return null===n?"https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg":"https://image.tmdb.org/t/p/w300".concat(n)};return(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{children:t.map((function(n){var t=n.id,a=n.original_title,i=n.original_name,u=n.name,c=n.title,o=n.poster_path;return(0,Z.jsx)(g,{children:(0,Z.jsxs)(d,{to:"/movies/".concat(t),state:{from:e},children:[(0,Z.jsx)(m,{src:"".concat(r(o)),alt:"".concat(c||a||u)}),(0,Z.jsx)(v,{children:a||i})]})},t)}))})})}},703:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,i,u=e(861),c=e(439),o=e(757),s=e.n(o),p=e(791),l=e(87),f=e(689),d=e(168),x=e(444),h=x.ZP.div(r||(r=(0,d.Z)(["\n  width: 1200px;\n  padding: 0 20px;\n"]))),m=x.ZP.input(a||(a=(0,d.Z)(["\n  width: 400px;\n  margin-right: 12px;\n  padding: 8px 16px;\n"]))),g=x.ZP.button(i||(i=(0,d.Z)(["\n  cursor: pointer;\n  background-color: #68aaf0;\n  border: 1px solid #68aaf0;\n  padding: 8px 16px;\n  box-shadow: 3px 2px 2px #727171;\n  border-radius: 4px;\n  color: #fff;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover {\n    color: #68aaf0;\n    background-color: #fff;\n  }\n"]))),v=e(184),Z=function(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,c.Z)(e,2),a=r[0],i=r[1];return(0,v.jsx)(h,{children:(0,v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==a?(t(a),i("")):alert("Please enter something")},children:[(0,v.jsx)(m,{value:a,onChange:function(n){i(n.target.value.toLowerCase().trim())}}),(0,v.jsx)(g,{type:"submit",children:"Search"})]})})},b=e(228),w=e(672),y=function(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(null),i=(0,c.Z)(a,2),o=i[0],d=i[1],x=(0,l.lr)(),h=(0,c.Z)(x,2),m=h[0],g=h[1],y=m.get("query");return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.E3)(y);case 3:if(t=n.sent,r(t.results),0!==t.results.length){n.next=8;break}return alert("".concat(y," not found")),n.abrupt("return");case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),d(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}null!==y&&function(){n.apply(this,arguments)}()}),[y]),(0,v.jsxs)("main",{children:[o&&(0,v.jsx)("p",{children:"Try again"}),(0,v.jsx)(Z,{onSubmit:function(n){g({query:n}),d(null)}}),e&&(0,v.jsx)(w.O,{movies:e}),(0,v.jsx)(f.j3,{})]})}},228:function(n,t,e){e.d(t,{Bt:function(){return m},E3:function(){return f},Mc:function(){return p},wr:function(){return o},y:function(){return x}});var r=e(861),a=e(757),i=e.n(a),u=e(243),c="83b00b62c3f214acdc61c0e1a41b5e59";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,u.Z.get("/trending/movie/day",{params:t});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,language:"en-US"},n.next=3,u.Z.get("/movie/".concat(t),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,language:"en-US",query:t},n.next=3,u.Z.get("/search/movie",{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,language:"en-US"},n.next=3,u.Z.get("/movie/".concat(t,"/credits"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,language:"en-US"},n.next=3,u.Z.get("/movie/".concat(t,"/reviews"),{params:e});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=703.d7cd3272.chunk.js.map