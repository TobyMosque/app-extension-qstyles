(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b1a22"],{"214a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[a("q-input",{attrs:{filled:"",label:"Your name *",hint:"Name and surname","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{filled:"",type:"number",label:"Your age *","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your age"},function(e){return e>0&&e<100||"Please type a real age"}]},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}}),a("q-toggle",{attrs:{label:"I accept the license and terms"},model:{value:e.accept,callback:function(t){e.accept=t},expression:"accept"}}),a("div",[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)},l=[],s=(a("7f7f"),{name:"QFormDemo",data:function(){return{name:null,age:null,accept:!1}},methods:{onSubmit:function(){!0!==this.accept?this.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",message:"You need to accept the license and terms first"}):this.$q.notify({color:"green-4",textColor:"white",icon:"fas fa-check-circle",message:"Submitted"})},onReset:function(){this.name=null,this.age=null,this.accept=!1}}}),i=s,c=a("2877"),r=Object(c["a"])(i,n,l,!1,null,null,null);t["default"]=r.exports}}]);