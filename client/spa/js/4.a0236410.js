(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"6d27":function(e,t,a){"use strict";var n=a("b64d"),s=a.n(n);s.a},"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh Lpr lff"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),a("q-toolbar-title",[e._v("BIMContracts")]),a("q-space"),a("q-btn",{attrs:{round:"",dense:"","no-caps":"",color:"orange"}},[a("q-avatar",[e._v("\n          "+e._s(e.initials)+"\n        ")]),a("q-menu",[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6 q-mb-md"},[e._v("Account")]),a("q-input",{attrs:{filled:"",hint:"Adresse",dense:"",readonly:""},model:{value:e.$auth.user().address,callback:function(t){e.$set(e.$auth.user(),"address",t)},expression:"$auth.user().address"}}),a("q-input",{attrs:{filled:"",hint:"Balance",dense:"",readonly:""},model:{value:e.balance,callback:function(t){e.balance=t},expression:"balance"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column items-center"},[a("q-avatar",{attrs:{color:"orange","text-color":"white",size:"72px"}},[e._v("\n                "+e._s(e.initials)+"\n              ")]),a("div",{staticClass:"text-subtitle2 q-my-xs text-center"},[e._v("\n                "+e._s(e.$auth.user().name)+"\n              ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:"Abmelden",push:"",size:"sm"},on:{click:e.logout}})],1)],1)])],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"",breakpoint:500,"content-class":"bg-grey-2"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{staticClass:"menu-list",attrs:{padding:""}},e._l(e.essentialLinks,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.title,attrs:{clickable:"",to:t.link}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1),a("q-item-section",[e._v("\n            "+e._s(t.title)+"\n          ")])],1)})),1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],r=a("c973"),i=a.n(r);const o=[{title:"Dashboard",icon:"dashboard",link:"/dashboard"},{title:"Bauvorhaben",icon:"assignment",link:"/projects"},{title:"Kontakte",icon:"group",link:""},{title:"Mein Profil",icon:"person",link:"/me"},{title:"Einstellungen",icon:"settings",link:""}];var l={name:"MainLayout",components:{},computed:{initials(){const e=this.$auth.user().name.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}},mounted(){var e=this;return i()((function*(){e.balance=yield e.getBalance()}))()},data(){return{drawer:!1,essentialLinks:o,balance:0}},methods:{getBalance(){var e=this;return i()((function*(){const t=yield e.$web3.eth.getBalance(e.$auth.user().address);return e.$web3.utils.fromWei(t)}))()},logout(){this.$auth.logout(),this.$router.go("/auth/login")}}},c=l,u=(a("6d27"),a("2877")),d=a("4d5a"),p=a("e359"),b=a("65c6"),m=a("9c40"),v=a("6ac5"),h=a("2c91"),f=a("cb32"),q=a("4e73"),w=a("27f9"),g=a("eb85"),k=a("9404"),Q=a("4983"),_=a("1c1c"),C=a("66e5"),$=a("4074"),x=a("0016"),y=a("09e3"),B=a("7f67"),L=a("714f"),A=a("eebe"),I=a.n(A),M=Object(u["a"])(c,n,s,!1,null,"06887804",null);t["default"]=M.exports;I()(M,"components",{QLayout:d["a"],QHeader:p["a"],QToolbar:b["a"],QBtn:m["a"],QToolbarTitle:v["a"],QSpace:h["a"],QAvatar:f["a"],QMenu:q["a"],QInput:w["a"],QSeparator:g["a"],QDrawer:k["a"],QScrollArea:Q["a"],QList:_["a"],QItem:C["a"],QItemSection:$["a"],QIcon:x["a"],QPageContainer:y["a"]}),I()(M,"directives",{ClosePopup:B["a"],Ripple:L["a"]})},b64d:function(e,t,a){}}]);