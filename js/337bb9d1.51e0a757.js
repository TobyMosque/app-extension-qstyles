(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["337bb9d1"],{ad6a:function(t,n,e){"use strict";(function(t){var o=e("f3e3"),r=e.n(o),a=(e("6b54"),e("7f7f"),e("f559"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("04ec")),s=e("42da"),i=Object.keys(s).map(function(t){return{name:t,module:s[t]}}).filter(function(t){return t.name.startsWith("Q")});n["a"]={name:"PageColor",data:function(){return{modules:i,options:a["a"].options}},computed:{__options:function(){return this.options.filter(function(t){return t.brand})},installExtMarkdown:function(){return"```cmd\nquasar ext add qstyles\n```"},createBootMarkdown:function(){return"```cmd\nquasar new boot styles\n```"},installBootMarkdown:function(){return"```json\nboot: [\n  // references /src/boot/style.js\n  'style'\n]\n```"},importMarkdown:function(){var n="",e=this.__options.map(function(t){var n=a["a"].brands[t.value];return{name:t.value,color:n.color,default:n.default}}).filter(function(t){return t.default!==t.color}),o=this.modules.map(function(t){var n=Object.keys(t.module).filter(function(n){return void 0!==t.module[n]});return{name:t.name,module:t.module,props:n}}).filter(function(t){return t.props&&t.props.length});if(e.length>0&&(n+="import { colors } from 'quasar'\n"),o&&o.length>0){var r=o.map(function(t){return t.name}).join(", ");n+="import { registerTheme, setTheme, ".concat(r," } from 'quasar-app-extension-qstyles/src/themer'\n")}else n+="import { registerTheme, setTheme } from 'quasar-app-extension-qstyles/src/themer'\n";var s=void 0;if(e.length>0||o.length>0){var i={};e.length>0&&(i.brands=[],e.forEach(function(t){i.brands.push([t.name,t.color])})),o.length>0&&(i.states=[],o.forEach(function(t){t.props.forEach(function(n){var e=t.module[n];i.states.push([t.name,n,e])})}));var c=JSON.stringify(i);s=t.from(c).toString("base64")}return s&&(n+="// do u wanna create your own theme? pls visit the follow link?\n",n+="// https://tobymosque.github.io/app-extension-qstyles/#/export?base64=".concat(s,"\n")),n+="export default async ({ Vue, ssrContext }) => {\n",s&&(n+="  registerTheme('theme-name', () => {\n",e.length>0&&(n+="    if (!ssrContext) {\n",e.forEach(function(t){n+="      colors.setBrand('".concat(t.name,"', '").concat(t.color,"')\n")}),n+="    }\n"),o&&o.length>0&&o.forEach(function(t){t.props.forEach(function(e){var o=t.module[e];"string"===typeof o&&(o="'".concat(o,"'")),n+="    ".concat(t.name,".").concat(e," = ").concat(o,"\n")})}),n+="  })\n",n+="  setTheme('dark-outlined')\n"),n+="}\n","```js\n".concat(n,"\n```")}},mounted:function(){if(this.$route.query&&this.$route.query.base64){var n=this.$route.query.base64,e=t.from(n,"base64").toString(),o=JSON.parse(e);s["reset"](),o.brands&&o.brands.length>0&&o.brands.forEach(function(t){var n=r()(t,2),e=n[0],o=n[1];a["a"].setBrand(e,o)}),o.states&&o.states.length>0&&o.states.forEach(function(t){var n=r()(t,3),e=n[0],o=n[1],a=n[2];s[e][o]=a})}},methods:{resetTheme:function(){this.__options.forEach(function(t){var n=a["a"].brands[t.value];a["a"].setBrand(t.value,n.default)}),s["reset"]()}}}}).call(this,e("b639").Buffer)},d835:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex q-pa-md"},[e("div",{staticClass:"full-width"},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Themer Export")])]),e("q-separator"),e("q-card-section",[t._v("\n        Install the QStyles Extension\n        "),e("q-markdown",{attrs:{src:t.installExtMarkdown}}),t._v("\n        Generate a new boot using Quasar CLI:\n        "),e("q-markdown",{attrs:{src:t.createBootMarkdown}}),t._v("\n        Tell Quasar to use your new boot file. For this to happen you need to add the file in /quasar.conf.js\n        "),e("q-markdown",{attrs:{src:t.installBootMarkdown}}),t._v("\n        Register yout theme in your boot file.\n        "),e("q-markdown",{attrs:{src:t.importMarkdown}})],1),e("q-card-actions",[e("q-btn",{staticClass:"full-width",attrs:{color:"warning",label:"Reset Theme"},on:{click:t.resetTheme}})],1)],1)],1)])},r=[],a=e("ad6a"),s=a["a"],i=e("2877"),c=Object(i["a"])(s,o,r,!1,null,null,null);n["default"]=c.exports}}]);