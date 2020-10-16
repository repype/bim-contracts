(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{1:"b7efeecc",3:"a494bbd0",4:"a0236410",5:"a3c3c0f7",6:"a881cc4e",7:"58902b72",8:"308c272c",9:"da86086a",10:"9df1e39e",11:"145637af",12:"5ccbb1f5",13:"5ddf4632"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={3:1,4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"28b71e82",4:"0e433876",5:"707d83ea",6:"d308a98d",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([1,0]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("2f39")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},24:function(e,t){},25:function(e,t){},26:function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"user",(function(){return C})),n.d(r,"loggedIn",(function(){return O})),n.d(r,"check",(function(){return T}));var o={};n.r(o),n.d(o,"setUser",(function(){return A}));var a={};n.r(a),n.d(a,"register",(function(){return K})),n.d(a,"login",(function(){return I})),n.d(a,"setKey",(function(){return M})),n.d(a,"fetch",(function(){return Q})),n.d(a,"logout",(function(){return V})),n.d(a,"verify",(function(){return z})),n.d(a,"passwordForgot",(function(){return U})),n.d(a,"passwordReset",(function(){return D}));var i={};n.r(i),n.d(i,"project",(function(){return J}));var s={};n.r(s),n.d(s,"setProject",(function(){return H}));var c={};n.r(c),n.d(c,"loadProject",(function(){return X}));n("5319");var u=n("c973"),l=n.n(u),d=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),p=n("1f91"),f=n("42d2"),h=n("b05d"),b=n("515f"),m=n("2a19"),y=n("f508");d["a"].use(h["a"],{config:{notify:{}},lang:p["a"],iconSet:f["a"],plugins:{Cookies:b["a"],Notify:m["a"],Loading:y["a"]}});var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},v=[],w={name:"App"},_=w,x=n("2877"),q=Object(x["a"])(_,g,v,!1,null,null,null),j=q.exports,k=n("2f62"),P={user:null};n("ddb0");function C(e){return e.user}function O(e){return null!==e.user}const T=e=>t=>{const n=e.user;if(n){if(Array.isArray(t)&&t.length){for(const e of t)if(!n.roleNames.includes(e))return!1}else if(t&&!n.roleNames.includes(t))return!1;return!0}return!1};function A(e,{user:t,privateKey:n}){console.log("set user mutation",t,n),t.privateKey=n,e.user=t}var E=n("5002"),S=n("49c0"),$=n.n(S);const B=!0;function K(e,t){return N.apply(this,arguments)}function N(){return N=l()((function*(e,t){const n=B?yield this._vm.$web3.eth.accounts.privateKeyToAccount($.a.privateKey):yield this._vm.$web3.eth.accounts.create(),r=yield this._vm.$web3.eth.accounts.wallet.add(n),o=new E["b"](n.address,r.address,t.name,t.role,t.iban);yield this._vm.$orbitdb.userdb.put(o.address,o);const a=n.privateKey;return e.commit("setUser",{privateKey:a,user:o}),e.dispatch("setKey",{privateKey:a,rememberMe:t.rememberMe}),!0})),N.apply(this,arguments)}function I(e,t){return L.apply(this,arguments)}function L(){return L=l()((function*(e,{privateKey:t,rememberMe:n}){const r=yield this._vm.$web3.eth.accounts.privateKeyToAccount(t),o=yield this._vm.$orbitdb.userdb.get(r.address);return e.commit("setUser",{user:o,privateKey:t}),e.dispatch("setKey",{privateKey:t,rememberMe:n}),m["a"].create({message:"Erfolgreich eingeloggt"}),!0})),L.apply(this,arguments)}function M(e,{rememberMe:t,privateKey:n}){t?b["a"].set("authorization_key",n,{expires:365}):b["a"].set("authorization_key",n)}function Q(e){return R.apply(this,arguments)}function R(){return R=l()((function*(e){const t=b["a"].get("authorization_key");if(t){const n=yield this._vm.$web3.eth.accounts.privateKeyToAccount(t);yield this._vm.$orbitdb.userdb.load();const r=yield this._vm.$orbitdb.userdb.get(n.address);return e.commit("setUser",{user:r,privateKey:t}),r}})),R.apply(this,arguments)}function V(e){b["a"].remove("authorization_key"),e.commit("setUser",null)}function z(e,t){return!0}function U(e,t){return!0}function D(e,{token:t,data:n}){return!0}var F={namespaced:!0,state:P,getters:r,mutations:o,actions:a},G=function(){return{project:null}};function J(e){return e.project}function H(e,t){console.log("set project mutation",t),e.project=t}function X(e,t){return W.apply(this,arguments)}function W(){return W=l()((function*(e,t){const n=yield this._vm.$orbitdb.projectdb;yield n.load();const r=yield n.get(t);e.commit("setProject",r[0])})),W.apply(this,arguments)}var Y={namespaced:!0,state:G,getters:i,mutations:s,actions:c};d["a"].use(k["a"]);var Z=function(){const e=new k["a"].Store({modules:{auth:F,project:Y},strict:!1});return e},ee=n("8c4f");n("e6cf");const te=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),meta:{auth:!0},children:[{path:"",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"8b24"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"ec95"))},{path:"/me",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"b9d1"))},{path:"/projects",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"3ea8"))},{path:"/projects/:project",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"028b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"5b22")),meta:{label:"Übersicht"}},{path:"boqs",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"73c9")),meta:{label:"Leistungsverzeichnisse"}}]}]},{path:"*",component:()=>n.e(1).then(n.bind(null,"e51e"))}];var ne=te;d["a"].use(ee["a"]);var re=function({store:e,ssrContext:t}){const n=new ee["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ne,mode:"hash",base:""});return n},oe=function(){return ae.apply(this,arguments)};function ae(){return ae=l()((function*(){const e="function"===typeof Z?yield Z({Vue:d["a"]}):Z,t="function"===typeof re?yield re({Vue:d["a"],store:e}):re;e.$router=t;const n={router:t,store:e,render:e=>e(j),el:"#q-app"};return{app:n,store:e,router:t}})),ae.apply(this,arguments)}var ie=n("1dce"),se=n.n(ie),ce=({Vue:e})=>{e.use(se.a)};const ue=e=>typeof e===typeof[]||"string"===typeof e;var le=({app:e,router:t,store:r,Vue:o})=>{t.beforeEach(function(){var e=l()((function*(e,t,n){const o=e.matched.find(e=>e.meta.auth);o&&(yield r.dispatch("auth/fetch"),r.getters["auth/loggedIn"]?ue(o.meta.auth)&&!r.getters["auth/check"](o.meta.auth)&&n("/dashboard"):(console.log("Not logged in"),n("/auth/login"))),n()}));return function(t,n,r){return e.apply(this,arguments)}}());const a={path:"/auth",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"25b3")),children:[{path:"login",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"80ab"))},{path:"register",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"2a1a"))},{path:"*",component:()=>n.e(1).then(n.bind(null,"e51e"))}]};t.addRoutes([a]);const i={register:e=>r.dispatch("auth/register",e),loggedIn:()=>r.getters["auth/loggedIn"],check:e=>r.getters["auth/check"](e),login:e=>r.dispatch("auth/login",e),setToken:e=>r.dispatch("auth/setToken",e),logout:()=>r.dispatch("auth/logout"),verify:e=>r.dispatch("auth/verify",e),fetch:()=>r.dispatch("auth/fetch"),user:()=>r.getters["auth/user"]};o.prototype.$auth=i},de=n("6314"),pe=n.n(de),fe=function(){var e=l()((function*({Vue:e}){try{const t=new pe.a(pe.a.givenProvider||"ws://127.0.0.1:9545/");e.prototype.$web3=t}catch(t){console.error("Error injecting web3 instance",t)}}));return function(t){return e.apply(this,arguments)}}(),he=n("ded3"),be=n.n(he),me=n("cde5"),ye=n.n(me),ge=n("f773"),ve=n.n(ge);const we={projectdb:{uri:"projects",type:"docstore",indexBy:"hash"},userdb:{uri:"users",type:"keyvalue",indexBy:"address"},billingdb:{uri:"billings",type:"docstore",indexBy:"hash"},boqdb:{uri:"boqs",type:"docstore",indexBy:"hash"},messagedb:{uri:"messages",type:"feed",indexBy:"hash"}},_e={namespace:"bim-contracts",config:{create:!0,sync:!0,accessController:{write:["*"]}}};var xe=function(){var e=l()((function*({Vue:e}){const t=yield ye.a.create({repo:"./bim-contracts-ipfs",EXPERIMENTAL:{pubsub:!0},config:{Addresses:{Swarm:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"]}}}),n=yield ve.a.createInstance(t),r=function(){var e=l()((function*({uri:e,type:t,indexBy:r}){const o=yield n.open(`${_e.namespace}/${e}`,be()({type:t,indexBy:r},_e.config));return o.events.on("replicated",console.log),o}));return function(t){return e.apply(this,arguments)}}(),o={};return yield Promise.all(Object.keys(we).map(e=>r(we[e]))).then(e=>{Object.keys(we).forEach((t,n)=>o[t]=e[n])}),o.open=(e,t="docstore",n="hash")=>r({uri:e,type:t,indexBy:n}),e.prototype.$orbitdb=o,yield Promise.all(Object.keys(we).map(e=>o[e].load())),!0}));return function(t){return e.apply(this,arguments)}}(),qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-table",{attrs:{"hide-header":!e.isRoot,"hide-bottom":"",title:e.title,data:e.data,columns:e.columns,"row-key":"hash","rows-per-page-options":[0],loading:e.loading,"table-colspan":5,separator:"none","table-class":"bc-boq-table",flat:"",bordered:e.isRoot},scopedSlots:e._u([e.isRoot?{key:"header",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-th",{attrs:{"auto-width":""}}),e._l(t.cols,(function(r){return n("q-th",{key:r.name,attrs:{props:t}},[e._v("\n        "+e._s(r.label)+"\n      ")])})),n("q-th",{attrs:{"auto-width":""}})],2)]}}:null,{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{attrs:{"auto-width":""}},[n("q-btn",{class:{invisible:!e.hasChildren(t)},attrs:{flat:"",round:"",dense:"",icon:t.expand?"expand_less":"expand_more"},on:{click:function(e){t.expand=!t.expand}}})],1),e._l(t.cols,(function(r){return n("q-td",{key:r.name,attrs:{props:t}},["status"===r.name?[n("q-chip",{attrs:{dense:"",color:e.status[r.value].color,"text-color":e.status[r.value].textColor}},[e._v(e._s(e.status[r.value].text))])]:[e._v(" "+e._s(r.value)+" ")]],2)})),n("q-td",{attrs:{"auto-width":""}},[n("q-btn",{class:{invisible:!t.row.billing_item},attrs:{flat:"",round:"",dense:"",color:"grey",icon:"more_horiz"}},[n("q-menu",[n("q-list",{staticStyle:{"min-width":"200px"}},[t.row.status<1?n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(n){return e.assign(t.row)}}},[n("q-item-section",[n("q-item-label",[e._v("Auftrag vergeben")])],1)],1):e._e(),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(n){return e.showDetails(t.row)}}},[n("q-item-section",[n("q-item-label",[e._v("Auftragsdetails einsehen")])],1)],1)],1)],1)],1)],1)],2),e.hasChildren(t)?n("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"props.expand"}],attrs:{props:t,"no-hover":""}},[n("q-td",{staticStyle:{padding:"0"},attrs:{colspan:"100%"}},[n("bc-boq-table",{attrs:{data:t.row.children},on:{assign:e.assign}})],1)],1):e._e()]}}],null,!0)})},je=[];const ke={0:{text:"Nicht vergeben"},1:{text:"Vergeben",color:"primary",textColor:"white"},2:{text:"Gestartet",color:"teal",textColor:"white"},3:{text:"Beendet",color:"dark",textColor:"white"},4:{text:"Abgenommen",color:"accent",textColor:"white"},5:{text:"Abgelehnt",color:"negative",textColor:"white"}};var Pe={name:"ComponentBoqTable",props:{isRoot:Boolean,items:Object,data:Array,title:String,loading:Boolean},mounted(){},methods:{assign(e){this.$emit("assign",e)},hasChildren(e){return e&&e.row.children.length>0},getChildren(e){return e.row.children.map(e=>this.items[e])}},computed:{isCtgy:function(){return this.data&&this.data.some(e=>!e.qty)}},data(){return{status:ke,columns:[{name:"id",required:!0,label:"Id",align:"left",field:e=>e.id},{name:"short_desc",required:!0,label:"Bezeichner",align:"left",field:e=>e.short_desc||e.name},{name:"qty",required:!0,label:"Menge",align:"left",field:e=>e.qty,format:(e,t)=>e?`${e} ${t.qty_unit}`:"",style:"width:200px"},{name:"status",required:!0,label:"Status",align:"center",field:e=>e.status,format:e=>e,style:"width:200px"}]}}},Ce=Pe,Oe=(n("8e59"),n("eaac")),Te=n("bd08"),Ae=n("357e"),Ee=n("db86"),Se=n("9c40"),$e=n("b047"),Be=n("4e73"),Ke=n("1c1c"),Ne=n("66e5"),Ie=n("4074"),Le=n("0170"),Me=n("7f67"),Qe=n("eebe"),Re=n.n(Qe),Ve=Object(x["a"])(Ce,qe,je,!1,null,null,null),ze=Ve.exports;Re()(Ve,"components",{QTable:Oe["a"],QTr:Te["a"],QTh:Ae["a"],QTd:Ee["a"],QBtn:Se["a"],QChip:$e["a"],QMenu:Be["a"],QList:Ke["a"],QItem:Ne["a"],QItemSection:Ie["a"],QItemLabel:Le["a"]}),Re()(Ve,"directives",{ClosePopup:Me["a"]});var Ue=function(){var e=l()((function*({Vue:e}){e.component("bc-boq-table",ze)}));return function(t){return e.apply(this,arguments)}}();const De="";function Fe(){return Ge.apply(this,arguments)}function Ge(){return Ge=l()((function*(){const{app:e,store:t,router:n}=yield oe();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[ce,le,fe,xe,Ue];for(let c=0;!1===r&&c<i.length;c++)if("function"===typeof i[c])try{yield i[c]({app:e,router:n,store:t,Vue:d["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:De})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new d["a"](e)})),Ge.apply(this,arguments)}Fe()},3:function(e,t){},"31cd":function(e,t,n){},"3f13":function(e,t,n){},4:function(e,t){},"49c0":function(e,t){e.exports={host:"127.0.0.1",port:8545,privateKey:"a36b50eb284f5164bf8d20bc52decd461d33e35d28628be489bd1246bc862f43",contracts:{factory:"0x852543528aF03b706b2785dFd3103898Ed256eaD"},swarm:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/"]}},5:function(e,t){},5002:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("bf19");const r={CLIENT:"Bauherr",GENERAL_CONTRACTOR:"Generalunternehmer",SUB_CONTRACTOR:"Subunternehmer"};class o{constructor(e,t,n,r,o){this.address=e,this.wallet_addresses=[t],this.name=n,this.role=r,this.iban=o,this.created=(new Date).toJSON()}}},6:function(e,t){},7:function(e,t){},8:function(e,t){},"8e59":function(e,t,n){"use strict";var r=n("3f13"),o=n.n(r);o.a},9:function(e,t){}});