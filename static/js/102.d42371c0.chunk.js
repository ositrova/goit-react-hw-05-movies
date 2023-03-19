"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[102],{102:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,i,s,c,o,u,l,p=t(861),d=t(439),x=t(757),h=t.n(x),f=t(791),v=t(689),m=t(168),g=t(87),j=t(444),w=(0,j.ZP)(g.OL)(r||(r=(0,m.Z)(["\n  display: inline-block;\n  width: 80px;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 3px 2px 2px #727171;\n  color: black;\n  margin-bottom: 20px;\n  padding: 8px 5px;\n  border-radius: 4px;\n  transition: color 250ms linear, border-color 250ms linear;\n  &:hover {\n    color: #68aaf0;\n    border-color: #68aaf0;\n  }\n"]))),y=j.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  padding: 20px 0;\n"]))),Z=j.ZP.li(i||(i=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n"]))),b=j.ZP.li(s||(s=(0,m.Z)(["\n  list-style: none;\n"]))),k=j.ZP.div(c||(c=(0,m.Z)(["\n  margin-left: 20px;\n"]))),_=j.ZP.p(o||(o=(0,m.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  padding: 12px 0;\n  margin-right: 10px;\n  width: 100px;\n"]))),P=j.ZP.p(u||(u=(0,m.Z)(["\n  padding: 12px 0;\n  max-width: 500px;\n"]))),S=t(228),U=(0,j.ZP)(g.rU)(l||(l=(0,m.Z)(["\n  display: inline-flex;\n  box-shadow: 3px 2px 2px #727171;\n  width: 150px;\n  border-radius: 4px;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: #68aaf0;\n  }\n"]))),C=t(128),q=t(184),I=function(n){var e=n.to,t=n.children;return(0,q.jsxs)(U,{to:e,children:[(0,q.jsx)(C.jTe,{size:"24"}),t]})},L=function(){var n,e,t,r,a,i,s=(0,f.useState)(null),c=(0,d.Z)(s,2),o=c[0],u=c[1],l=(0,f.useState)(null),x=(0,d.Z)(l,2),m=x[0],g=x[1],j=(0,f.useState)(!1),U=(0,d.Z)(j,2),C=U[0],L=U[1],O=(0,v.UO)().movieId,E=(0,v.TH)(),F=null!==(n=null===(e=E.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";(0,f.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,L(!0),n.next=4,(0,S.Mc)(e);case 4:t=n.sent,u(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),g(n.t0);case 11:return n.prev=11,L(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(O)}),[O]);var G;return(0,q.jsxs)("main",{children:[m&&(0,q.jsx)("p",{children:"Try again"}),C&&(0,q.jsx)("div",{children:"Load info"}),o&&!C&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(I,{to:F,children:"Back"}),(0,q.jsxs)(y,{children:[(0,q.jsx)("div",{children:(0,q.jsx)("img",{src:"".concat((G=o.poster_path,null===G?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeCc8t0O8PhLI5qowdE8upNe2aI9gm1Vvaw&usqp=CAU":"https://image.tmdb.org/t/p/w300".concat(G))),alt:"".concat(o.title||o.original_title||o.name)})}),(0,q.jsx)("div",{children:(0,q.jsxs)(k,{children:[(0,q.jsxs)("h2",{children:["".concat(o.title||o.original_title||o.name," "),"(".concat(parseInt(o.release_date),")")]}),(0,q.jsxs)("ul",{children:[(0,q.jsxs)(Z,{children:[(0,q.jsx)(_,{children:"Vote / Votes"}),(0,q.jsxs)(P,{children:[(0,q.jsx)("span",{children:"".concat(o.vote_average.toFixed(1))}),(0,q.jsx)("span",{children:" / "}),(0,q.jsx)("span",{children:"".concat(o.vote_count)})]})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(_,{children:"Popularity"}),(0,q.jsx)(P,{children:"".concat(o.popularity.toFixed(1))})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(_,{children:"Overview"}),(0,q.jsx)(P,{children:"".concat(o.overview)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(_,{children:"Genres"}),(0,q.jsx)(P,{children:"".concat(o.genres.map((function(n){return n.name})).join(", "))})]})]})]})})]}),(0,q.jsxs)("ul",{children:[(0,q.jsx)(b,{children:(0,q.jsx)(w,{to:"cast",state:{from:null!==(t=null===(r=E.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/cast"},children:"Cast"})}),(0,q.jsx)(b,{children:(0,q.jsx)(w,{to:"reviews",state:{from:null!==(a=null===(i=E.state)||void 0===i?void 0:i.from)&&void 0!==a?a:"/reviews"},children:"Reviews"})})]}),(0,q.jsx)(f.Suspense,{fallback:null,children:(0,q.jsx)(v.j3,{})})]})]})}},228:function(n,e,t){t.d(e,{Bt:function(){return v},E3:function(){return d},Mc:function(){return l},wr:function(){return o},y:function(){return h}});var r=t(861),a=t(757),i=t.n(a),s=t(243),c="83b00b62c3f214acdc61c0e1a41b5e59";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:c,language:"en-US"},n.next=3,s.Z.get("/trending/movie/day",{params:e});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,s.Z.get("/movie/".concat(e),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US",query:e},n.next=3,s.Z.get("/search/movie",{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,s.Z.get("/movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:c,language:"en-US"},n.next=3,s.Z.get("/movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=102.d42371c0.chunk.js.map