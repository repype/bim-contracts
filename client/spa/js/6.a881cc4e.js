(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0203":function(e,t,a){},"261d":function(e,t,a){"use strict";var n=a("0203"),r=a.n(n);r.a},"2a1a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"register-card"},[a("q-card-section",[a("h1",{staticClass:"text-h3 text-center"},[e._v("Registrieren")])]),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("q-input",{attrs:{filled:"",label:"Name"},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}}),a("q-select",{attrs:{filled:"",options:e.options,label:"Rolle","option-value":function(e){return e},"option-label":function(t){return e.roles[t]}},model:{value:e.data.role,callback:function(t){e.$set(e.data,"role",t)},expression:"data.role"}}),a("q-input",{attrs:{filled:"",options:e.options,label:"Iban"},model:{value:e.data.iban,callback:function(t){e.$set(e.data,"iban",t)},expression:"data.iban"}}),a("q-checkbox",{attrs:{id:"rememberMe",label:"Anmeldung merken"},model:{value:e.data.rememberMe,callback:function(t){e.$set(e.data,"rememberMe",t)},expression:"data.rememberMe"}}),a("div",[a("q-btn",{staticClass:"full-width",attrs:{label:"Registrieren",type:"submit",color:"primary",loading:e.loading}})],1)],1),a("div",{staticClass:"q-mt-md"},[a("p",[e._v("\n          Account bereits vorhanden?\n          "),a("router-link",{attrs:{to:"/auth/login"}},[e._v(" Hier anmelden ")])],1)])],1)],1)])},r=[],i=a("c973"),l=a.n(i),s=a("5002"),o={name:"PageRegister",data(){return{roles:s["a"],options:Object.keys(s["a"]),data:{name:"Max Mustermann",role:"CLIENT",iban:"1234567890",rememberMe:!1},loading:!1}},methods:{register(){var e=this;return l()((function*(){e.loading=!0,yield e.$auth.register(e.data),e.loading=!1,e.$router.push("/")}))()}}},c=o,d=(a("261d"),a("2877")),u=a("9989"),m=a("a370"),b=a("0378"),p=a("27f9"),f=a("ddd8"),g=a("8f8e"),v=a("9c40"),h=a("eebe"),x=a.n(h),k=Object(d["a"])(c,n,r,!1,null,"293f8614",null);t["default"]=k.exports;x()(k,"components",{QPage:u["a"],QCardSection:m["a"],QForm:b["a"],QInput:p["a"],QSelect:f["a"],QCheckbox:g["a"],QBtn:v["a"]})}}]);