module.exports=webpackJsonp([33],{10:function(t,e){t.exports=require("fs")},15:function(t,e){t.exports=require("querystring")},16:function(t,e){t.exports=require("util")},23:function(t,e){t.exports=require("events")},25:function(t,e){t.exports=require("os")},26:function(t,e){t.exports=require("crypto")},31:function(t,e){t.exports=require("tty")},32:function(t,e){t.exports=require("net")},355:function(t,e,i){"use strict";var n=i(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i(12)),a=n(i(4)),o=i(6),r=i(28),u=i(8),c=i(13),l=n(i(14)),p=i(56),d=i(47),v=n(i(151)),f=n(i(41));function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}(async()=>{const t=document.createElement("style"),e=`data:font/ttf;base64,${(await(0,d.load)("static/fonts/fonts/NeverMind-DemiBold.ttf")).toString("base64")}`;t.innerHTML=`\n@font-face {\n  font-family: 'Nevermind';\n  src: url("${e}");\n  font-weight: 400;\n  font-style: normal;\n}\n`,document.body.appendChild(t)})();var b={mixins:[f.default],data:()=>({buildNumber:"",isBetaVersion:!1}),computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach(function(e){(0,s.default)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},(0,r.mapGetters)("activation",{activationStatus:"status",subscriptionStatus:"subscriptionStatus",perMachineLicenseStatus:"perMachineLicenseStatus",perMachineLicenseData:"perMachineLicenseData"}),{},(0,r.mapState)("account",["primarEmail"]),{},(0,r.mapGetters)("preferences",["language"]),{illustrationImageURL(){return this.$toResourceURL("true"===process.env.VANA_LICENSE_MODE?"static/assets/images/about-dialog-illustration-business.svg":"static/assets/images/about-dialog-illustration.svg")},activationStatusText(){return this.activationStatus===u.ACTIVATION_STATUS.VALID?null:this.$T("Trial Mode")},activateButtonText(){return"true"===process.env.VANA_LICENSE_MODE?process.env.VANA_LICENSE_TO?null:this.activationStatus===u.ACTIVATION_STATUS.VALID?this.$T("Deactivate"):this.$T("Activate Now"):this.activationStatus===u.ACTIVATION_STATUS.VALID?null:this.subscriptionStatus===u.ACTIVATION_STATUS.EXPIRED?this.$T("Renew Now"):this.$T("Activate Now")},editionText(){const t="true"===process.env.VANA_LICENSE_MODE&&!process.env.VANA_LICENSE_TO,e="true"===process.env.VANA_LICENSE_MODE&&process.env.VANA_LICENSE_TO;return t||e?t?this.$T("Small & Medium Business Edition"):this.$T("Volume License Edition"):null},licenseeText(){if("true"===process.env.VANA_LICENSE_MODE){if(this.activationStatus===u.ACTIVATION_STATUS.VALID){const t=process.env.VANA_LICENSE_TO||this.perMachineLicenseData.name||this.perMachineLicenseData.email;if(t)return this.$T("Licensed to: ")+t}}else if(this.subscriptionStatus===u.ACTIVATION_STATUS.VALID&&this.primarEmail)return this.$T("Subscribed as: ")+this.primarEmail;return""},touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Close"),click:"close"},this.activateButtonText?{type:"button",label:this.activateButtonText,backgroundColor:"primary",click:"activateNow"}:null,{type:"space",size:"flexible"},{type:"button",label:this.$T("Acknowlegments"),click:"openAcknowlegments"},{type:"button",label:this.$T("License Agreement"),click:"openLicenseAgreement"},{type:"space",size:"flexible"}].filter(Boolean)}}),mounted(){this.$safeRun(()=>{this.buildNumber=(0,v.default)("buildNumber")||"",this.isBetaVersion=(0,v.default)("version").includes("beta")})},methods:{activateNow(){if("true"===process.env.VANA_LICENSE_MODE){if(this.activationStatus===u.ACTIVATION_STATUS.VALID){const t=this.$store.getters["activation/perMachineLicenseData"];if(t){const{email:e,key:i}=t;this.$store.commit("activation/clearPerMachineLicenseData"),l.default.fetch(c.XOS.SME_LICENSE_ACTIVATE,{email:e,key:i,unbind:1}).catch(()=>{})}return}return l.default.fetch(c.WINDOW_OPEN,{name:"dialog-license"})}return l.default.fetch(c.WINDOW_OPEN,{name:"dialog-activate"})},openAcknowlegments(){o.shell.openPath(this.getAcknowlegmentsPath())},openLicenseAgreement(){o.shell.openPath(this.getLicenseAgreementPath())},getAcknowlegmentsPath:()=>a.default.join((0,p.getAppPath)(),"../app.asar.unpacked/static/license/Acknowledgements.pdf"),getLicenseAgreementPath(){const t="zh-CN"===this.language?"license-cn":"license";return a.default.join((0,p.getAppPath)(),"../app.asar.unpacked/static/license",`${t}.pdf`)}}};e.default=b},4:function(t,e){t.exports=require("path")},6:function(t,e){t.exports=require("electron")},901:function(t,e,i){"use strict";var n=i(0),s=n(i(29)),a=n(i(969));(0,s.default)(a.default,{name:"about"})},969:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(355),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);var o=i(970),r=i(1),u=Object(r.a)(s.a,o.a,o.b,!1,null,null,null);e.default=u.exports},970:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-window uk-window-dialog uk-window-default",attrs:{id:"app"}},[i("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating uk-position-z-index uk-position-relative"},[i("window-control-button-group")],1),t._v(" "),i("div",{staticClass:"uk-window-body uk-flex uk-flex-column uk-position-relative"},[i("div",{staticClass:"uk-panel uk-padding-large uk-flex uk-flex-column uk-position-relative uk-position-z-index"},[i("div",{staticClass:"uk-padding-small uk-padding-remove-vertical"},[i("h1",{staticClass:"uk-margin-medium-top uk-margin-remove-bottom uk-text-logo",staticStyle:{"font-family":"NeverMind"}},[t._v("\n          XMind 2020\n        ")]),t._v(" "),i("div",{staticClass:"uk-text-muted uk-margin-bottom",staticStyle:{"line-height":"1"}},[i("span",[t._v(t._s(t.buildNumber))]),t._v(" "),t.isBetaVersion?i("span",[t._v(t._s(" Beta"))]):t._e(),t._v(" "),t.activationStatusText?i("span",[t._v("("+t._s(t.activationStatusText)+")")]):t._e()]),t._v(" "),t.licenseeText?i("div",{staticClass:"uk-margin-small-bottom",staticStyle:{"font-size":"12px"}},[t.editionText?i("span",[t._v("\n            "+t._s(t.editionText)+"\n          ")]):t._e(),t._v(" "),t.editionText?i("br"):t._e(),t._v(" "),i("span",{staticStyle:{"line-height":"1"}},[t._v(t._s(t.licenseeText))])]):t._e(),t._v(" "),i("div",{staticClass:"uk-button-group"},[t.activateButtonText?i("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.activateNow}},[t._v("\n            "+t._s(t.activateButtonText)+"\n          ")]):t._e()])])]),t._v(" "),i("div",{staticClass:"uk-preserve uk-position-absolute uk-width-1-1 uk-position-bottom-left",attrs:{"data-src":t.illustrationImageURL,"uk-svg":""}})]),t._v(" "),i("div",{staticClass:"uk-padding-remove-vertical uk-padding-large uk-window-button-bar",staticStyle:{"border-color":"rgba(232,232,232,0.12)","min-height":"52px"}},[i("div",{staticClass:"uk-button-group"},[i("button",{staticClass:"uk-button uk-button-text uk-margin-small-right uk-button-grey-link",attrs:{type:"button"},on:{click:t.openAcknowlegments}},[t._v("\n        "+t._s(t.$T("Acknowlegments"))+"\n      ")]),t._v(" "),i("button",{staticClass:"uk-button uk-button-text uk-button-grey-link",attrs:{type:"button"},on:{click:t.openLicenseAgreement}},[t._v("\n        "+t._s(t.$T("License Agreement"))+"\n      ")])]),t._v(" "),i("div",{staticClass:"uk-text-small uk-padding-small uk-text-muted"},[t._v("\n      © 2006-2020 XMind Ltd.\n    ")])])])},s=[]}},[901]);