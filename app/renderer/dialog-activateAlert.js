module.exports=webpackJsonp([32],{10:function(t,e){t.exports=require("fs")},15:function(t,e){t.exports=require("querystring")},16:function(t,e){t.exports=require("util")},23:function(t,e){t.exports=require("events")},25:function(t,e){t.exports=require("os")},26:function(t,e){t.exports=require("crypto")},31:function(t,e){t.exports=require("tty")},32:function(t,e){t.exports=require("net")},358:function(t,e,i){"use strict";var r=i(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(13),a=r(i(14)),u=i(21),o={name:"ActivateAlert",data(){return{illustrationImageURL:this.$toResourceURL("static/assets/images/activate-alert-dialog-illustration.svg")}},methods:{subscribe(){a.default.fetch(n.WINDOW_OPEN,{name:"dialog-activate"}),(0,u.trackEvent)({eventCategory:"ActivateAlert",eventAction:"clickSubscribe"}),window.close()},close(){(0,u.trackEvent)({eventCategory:"ActivateAlert",eventAction:"closeActivateAlert"}),window.close()}}};e.default=o},4:function(t,e){t.exports=require("path")},6:function(t,e){t.exports=require("electron")},977:function(t,e,i){"use strict";var r=i(0),n=r(i(29)),a=r(i(978));(0,n.default)(a.default,{name:"dialog-activateAlert"})},978:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(358),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);var u=i(979),o=i(1),s=Object(o.a)(n.a,u.a,u.b,!1,null,null,null);e.default=s.exports},979:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-window uk-window-default uk-window-dialog uk-window-dialog-default",attrs:{id:"app"}},[i("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[i("window-control-button-group")],1),t._v(" "),i("div",{staticClass:"uk-window-body uk-flex"},[i("div",{},[i("div",{staticClass:"uk-background-cover uk-preserve uk-height-1-1 uk-text-center",staticStyle:{width:"223px"},attrs:{"uk-svg":"","data-src":t.illustrationImageURL}})]),t._v(" "),i("div",{staticClass:"uk-panel uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom uk-flex uk-flex-column uk-width-expand"},[i("div",{staticClass:"uk-height-expand"},[i("h1",{staticClass:"uk-heading-primary uk-margin-xlarge-top uk-margin-small-bottom uk-text-bold"},[t._v("\n          "+t._s(t.$T("Subscribe XMind"))+"\n        ")]),t._v(" "),i("h6",{staticClass:"uk-margin-small"},[t._v("\n          "+t._s(t.$T("You are using the trial version. Most users are enjoying the full version, why not be one of them? With our thoughts, we make the world better."))+"\n        ")]),t._v(" "),i("div",{staticClass:"uk-margin uk-button-group "},[i("button",{staticClass:"uk-button uk-button-primary",attrs:{autofocus:""},on:{click:t.subscribe}},[t._v("\n            "+t._s(t.$T("Subscribe"))+"\n          ")])])])])])])},n=[]}},[977]);