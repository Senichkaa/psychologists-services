"use strict";(self.webpackChunkpsychologists_services=self.webpackChunkpsychologists_services||[]).push([[689],{5689:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(9439),u=n(2791),c=n(3256),o=n(2204),s=n(1413),i=n(5861),a=n(7757),l=n.n(a),f=n(2685),p=n(673),h=n(5756),d="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",v=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,r="",n=crypto.getRandomValues(new Uint8Array(e));e--;)r+=d[63&n[e]];return r},m=n(280),x=n(184),Z=function(e){var r=e.filterOption,n=(0,u.useState)([]),c=(0,t.Z)(n,2),o=c[0],a=c[1],d=(0,u.useState)(3),Z=(0,t.Z)(d,2),g=Z[0],j=Z[1],k=(0,u.useState)(null),w=(0,t.Z)(k,2),b=w[0],y=w[1],S=function(e,r){switch(r){case"A to Z":return e.sort((function(e,r){return e.name.localeCompare(r.name)}));case"Z to A":return e.sort((function(e,r){return r.name.localeCompare(e.name)}));case"Less than 10$":return e.filter((function(e){return e.price_per_hour<10}));case"Greater than 10$":return e.filter((function(e){return e.price_per_hour>10}));case"Popular":return e.filter((function(e){return e.rating>4}));case"Non popular":return e.filter((function(e){return e.rating<=4}));default:return e}};return(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)(l().mark((function e(){var n,u,c,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,f.iH)(p.db,"/"),e.next=4,(0,f.U2)(n);case 4:(u=e.sent).exists()&&(c=u.val(),o=Object.entries(c).map((function(e){var r=(0,t.Z)(e,2),n=(r[0],r[1]);return(0,s.Z)({id:v()},n)})),i=S(o,r),a(i.slice(0,g))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Firebase error:",e.t0),y(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,g]),(0,x.jsxs)("section",{style:{paddingBottom:50},children:[b&&(0,x.jsxs)("div",{children:["Error: ",b]}),(0,x.jsx)("ul",{children:o.map((function(e){return(0,x.jsx)(h.Z,{doctor:e},e.id)}))}),o.length>=3&&(0,x.jsx)(m.n,{onClick:function(){j((function(e){return e+3}))},children:"Load more"})]})},g=function(){var e=(0,u.useState)("Show all"),r=(0,t.Z)(e,2),n=r[0],s=r[1];return(0,x.jsxs)(c.Gh,{children:[(0,x.jsx)(o.Z,{onFilterSelect:function(e){s(e)}}),(0,x.jsx)(Z,{filterOption:n})]})}}}]);
//# sourceMappingURL=689.bda2a47f.chunk.js.map