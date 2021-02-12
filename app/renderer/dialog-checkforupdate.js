module.exports=webpackJsonp([17],{10:function(n,t){n.exports=require("fs")},15:function(n,t){n.exports=require("querystring")},16:function(n,t){n.exports=require("util")},23:function(n,t){n.exports=require("events")},25:function(n,t){n.exports=require("os")},26:function(n,t){n.exports=require("crypto")},31:function(n,t){n.exports=require("tty")},32:function(n,t){n.exports=require("net")},360:function(n,t,e){"use strict";var a=e(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(e(12)),i=e(28),o=e(47),r=e(127);function u(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,a)}return e}var l={mixins:[a(e(41)).default],data:function(){return{platform:"darwin"===(0,r.getPlatform)()?"mac":"win",stateText:"",primaryButtonText:"",defaultButtonText:"",secondaryTitle:"",updateSize:"",downloadAnimationDone:!1,iconURL:(0,o.toURL)("static/assets/images/check-for-update-bg.svg"),buildNumber:""}},mounted(){this.$safeRun(()=>this.$loadResource("package.json").then(n=>this.buildNumber=JSON.parse(n).buildNumber||"")),this.changeTextByState(this.status)},computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach(function(t){(0,s.default)(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}({touchBarItems(){return[{type:"space",size:"flexible"},"has-new-version"===this.status?{type:"button",label:this.defaultButtonText,click:"skip"}:null,"update-downloaded"===this.status&&this.downloadAnimationDone?{type:"button",label:this.defaultButtonText,backgroundColor:"primary",click:"closeDialog"}:null,this.showCheckForUpdateButton()&&"checking-for-update"!==this.status&&"checking-for-update-preparing"!==status?{type:"button",label:this.primaryButtonText,backgroundColor:"primary",click:"checkForUpdate"}:null,"has-new-version"===this.status?{type:"button",label:this.primaryButtonText,backgroundColor:"primary",click:"download"}:null,"update-downloaded"===this.status&&this.downloadAnimationDone?{type:"button",label:this.primaryButtonText,backgroundColor:"primary",click:"quitAndInstall"}:null,{type:"space",size:"flexible"}].filter(Boolean)}},(0,i.mapState)("checkForUpdate",["status","info"]),{},(0,i.mapGetters)("preferences",["language"]),{updateStatus(){return{CHECKING:{TITLE:this.$T("Checking for Update"),DESCRIPTION:this.$T("Current version:")+" ",PRIMARY_BUTTON:this.$T("Check for Update"),DEFAULT_BUTTON:""},UPDATE_AVAILABLE:{TITLE:this.$T("New Version Available"),DESCRIPTION:this.$T("Latest Version:")+" ",PRIMARY_BUTTON:this.$T("Update Now"),DEFAULT_BUTTON:this.$T("Later")},DOWNLOADING:{TITLE:this.$T("Downloading Update"),DESCRIPTION:this.$T("Latest Version:")+" ",PRIMARY_BUTTON:"",DEFAULT_BUTTON:""},DOWNLOADED:{TITLE:this.$T("Your Update is Ready to Install"),DESCRIPTION:this.$T("Latest Version:")+" ",PRIMARY_BUTTON:this.$T("Relaunch to Install"),DEFAULT_BUTTON:this.$T("Later")},UPDATE_NOT_AVAILABLE:{TITLE:this.$T("Your XMind is Up to Date"),DESCRIPTION:this.$T("Last checked:")+" ",PRIMARY_BUTTON:this.$T("Check for Update"),DEFAULT_BUTTON:""},UPDATE_ERROR:{TITLE:this.$T("Update is Interrupted"),DESCRIPTION:this.$T("Some problems occur due to unstable network or server."),PRIMARY_BUTTON:this.$T("Check for Update"),DEFAULT_BUTTON:""}}},releaseNotes(){let n=this.info[`releaseNotes-${this.language}`]||this.info.releaseNotes||"";return n&&(n=n.split("\n").slice(0,3).join("\n")),n}}),watch:{status(n){this.changeTextByState(n)},updateStatus(){this.changeTextByState(this.status)},buildNumber(){this.changeTextByState(this.status)}},methods:{changeTextByState(n){let t=null;const{CHECKING:e,UPDATE_AVAILABLE:a,DOWNLOADING:s,DOWNLOADED:i,UPDATE_NOT_AVAILABLE:o,UPDATE_ERROR:r}=this.updateStatus;if("checking-for-update"===n||"checking-for-update-preparing"===n){const{TITLE:n,DESCRIPTION:t,PRIMARY_BUTTON:a,DEFAULT_BUTTON:s}=e;this.stateText=n,this.secondaryTitle=t+this.buildNumber,this.primaryButtonText=a,this.defaultButtonText=s}else if("has-new-version"===n){const{TITLE:n,DESCRIPTION:t,PRIMARY_BUTTON:e,DEFAULT_BUTTON:s}=a;this.updateSize=`${this.$T("Update Size:")} ${this.info.updateSize||""}  MB`,this.stateText=n,this.secondaryTitle=t+(this.info.version||""),this.primaryButtonText=e,this.defaultButtonText=s}else if("update-downloading"===n){setTimeout(()=>{const n=this.$refs.progress;n&&(t=setInterval(()=>{n.value+=Math.random(),n.value>=95&&clearInterval(t)},300))},300);const{TITLE:n,DESCRIPTION:e,PRIMARY_BUTTON:a,DEFAULT_BUTTON:i}=s;this.stateText=n,this.secondaryTitle=e+(this.info.version||""),this.primaryButtonText=a,this.defaultButtonText=i}else if("update-downloaded"===n){clearInterval(t);const n=3e3,e=this.$refs.progress;if(e){let t=(100-e.value)/(n/200);const a=setInterval(()=>{if(e.value+=t,e.value>=100){clearInterval(a);const{TITLE:n,DESCRIPTION:t,PRIMARY_BUTTON:e,DEFAULT_BUTTON:s}=i;this.downloadAnimationDone=!0,this.stateText=n,this.secondaryTitle=t+(this.info.version||""),this.primaryButtonText=e,this.defaultButtonText=s}},200)}}else if("update-not-available"===n){const{TITLE:n,DESCRIPTION:t,PRIMARY_BUTTON:e,DEFAULT_BUTTON:a}=o;this.stateText=n,this.secondaryTitle=t+(new Date).toLocaleString(),this.primaryButtonText=e,this.defaultButtonText=a}else if("update-error"===n){const{TITLE:n,DESCRIPTION:t,PRIMARY_BUTTON:e,DEFAULT_BUTTON:a}=r;this.stateText=n,this.secondaryTitle=t,this.primaryButtonText=e,this.defaultButtonText=a}},showCheckForUpdateButton(){return["checking-for-update","checking-for-update-preparing","update-not-available","update-error"].includes(this.status)},checkForUpdate(){this.$store.commit("checkForUpdate/updateAction",{action:"checkForUpdate"})},checkAllReleaseNotes(){const n="zh-CN"===this.language?"https://www.xmind.cn":"https://www.xmind.net";(0,r.openExternal)(`${n}/xmind/zen-release-notes/`)},closeDialog(){"checking-for-update"===this.status||"checking-for-update-preparing"===this.status?this.cancelCheck():(this.$store.commit("checkForUpdate/updateAction",{action:"pending"}),window.close())},skip(){this.$store.commit("checkForUpdate/updateAction",{action:"skip"}),window.close()},download(){if("linux"===(0,r.getPlatform)()){const n="zh-CN"===this.language?"https://www.xmind.cn":"https://www.xmind.net";(0,r.openExternal)(`${n}/xmind/zen-update-linux/`)}this.$store.commit("checkForUpdate/updateAction",{action:"download"}),this.$store.commit("checkForUpdate/updateStatus",{status:"update-downloading"})},cancelCheck(){this.$store.commit("checkForUpdate/updateStatus",{status:"stop-checking"}),window.close()},quitAndInstall(){this.$store.commit("checkForUpdate/updateAction",{action:"install"}),window.close()}}};t.default=l},4:function(n,t){n.exports=require("path")},6:function(n,t){n.exports=require("electron")},986:function(n,t,e){"use strict";var a=e(0),s=a(e(29)),i=a(e(987));(0,s.default)(i.default)},987:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(360),s=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);var o=e(990),r=e(1);var u=function(n){e(988)},l=Object(r.a)(s.a,o.a,o.b,!1,u,"data-v-2515610e",null);t.default=l.exports},988:function(n,t,e){var a=e(989);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(20).default)("5dd2e6ed",a,!0,{})},989:function(n,t,e){(n.exports=e(18)()).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ToDo: replace it */\n/* local style */\n.checking-bar[data-v-2515610e] {\n  margin: 10px 0;\n  width: 100%;\n  max-width: 500px;\n  height: 8px;\n  border-radius: 4px;\n}\n@keyframes indeterminate-data-v-2515610e {\n0% {\n    transform: translateX(-100px);\n}\n100% {\n    transform: translateX(500px);\n}\n}\n.progress-custom-parent[data-v-2515610e] {\n  overflow: hidden;\n  position: relative;\n}\n.ui-mprogress[data-v-2515610e] {\n  pointer-events: none;\n}\n.indeter-bar[data-v-2515610e] {\n  position: absolute;\n  z-index: 1032;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 8px;\n  border-radius: 4px;\n  background: #039be5;\n  animation: indeterminate-data-v-2515610e 1800ms infinite ease-in;\n}\n.bar-bg[data-v-2515610e] {\n  position: absolute;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  border: solid 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n",""])},990:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return s});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"uk-window uk-window-dialog uk-window-default",attrs:{id:"app"}},[e("div",{staticClass:"uk-window-title-bar uk-window-title-bar-floating"},[e("window-control-button-group")],1),n._v(" "),e("div",{staticClass:"uk-window-body uk-flex uk-flex-row"},[e("div",{staticClass:"uk-panel uk-flex uk-flex-column uk-flex-middle inline"},[e("div",{staticClass:"uk-preserve uk-height-1-1",attrs:{draggable:"false","data-src":n.iconURL,"uk-svg":""}})]),n._v(" "),e("div",{staticClass:"uk-width-expand uk-flex uk-flex-column uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom uk-margin-top"},[e("h1",{staticClass:"uk-margin-remove-bottom"},[n._v("\n        "+n._s(n.stateText)+"\n      ")]),n._v(" "),e("span",{staticClass:"uk-margin-small"},[n._v(n._s(n.secondaryTitle))]),n._v(" "),e("div",{staticClass:"uk-height-expand uk-margin-xlarge-top"},["checking-for-update"===n.status||"checking-for-update-preparing"===n.status?e("div",{staticClass:"checking-bar progress-custom-parent uk-margin-xlarge-top"},[n._m(0)]):n._e(),n._v(" "),"update-downloading"===n.status||!n.downloadAnimationDone&&"update-downloaded"===n.status?e("progress",{ref:"progress",staticClass:"uk-progress",staticStyle:{border:"solid 1px rgba(0, 0, 0, 0.2)",borderRadius:"2px"},attrs:{value:"0",max:"100"}}):n._e(),n._v(" "),"update-downloading"===n.status?e("p",[n._v("\n          "+n._s(n.updateSize)+"\n        ")]):n._e(),n._v(" "),"has-new-version"===n.status||"update-downloaded"===n.status&&n.downloadAnimationDone?e("pre",{staticClass:"uk-overflow-hidden",staticStyle:{"font-family":"-apple-system, BlinkMacSystemFont, 'SegoeUI',system-ui,Roboto, 'Helvetica Neue',Arial,sans-serif","font-size":"13px","font-weight":"normal","line-height":"1.5","white-space":"pre-wrap"}},[n._v(n._s(n.releaseNotes)+"\n        ")]):n._e(),n._v(" "),n.defaultButtonText?e("a",{staticClass:"uk-margin-top",attrs:{draggable:"false",href:"javascript:void(0);"},on:{click:n.checkAllReleaseNotes}},[n._v(n._s(n.$T("More..."))+"\n        ")]):n._e()]),n._v(" "),e("div",{staticClass:"uk-flex uk-flex-bottom uk-flex-right uk-margin-xlarge-top "},[e("div",{staticClass:"uk-button-group"},["has-new-version"===n.status?e("button",{staticClass:"uk-button uk-button-default",on:{click:function(t){return n.skip()}}},[n._v("\n            "+n._s(n.defaultButtonText)+"\n          ")]):n._e(),n._v(" "),"update-downloaded"===n.status&&n.downloadAnimationDone?e("button",{staticClass:"uk-button uk-button-default",on:{click:function(t){return n.closeDialog()}}},[n._v("\n            "+n._s(n.defaultButtonText)+"\n          ")]):n._e(),n._v(" "),n.showCheckForUpdateButton()?e("button",{staticClass:"uk-button uk-button-primary",attrs:{disabled:"checking-for-update"===n.status||"checking-for-update-preparing"===n.status},on:{click:function(t){return n.checkForUpdate()}}},[n._v("\n            "+n._s(n.primaryButtonText)+"\n          ")]):n._e(),n._v(" "),"has-new-version"===n.status?e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(t){return n.download()}}},[n._v("\n            "+n._s(n.primaryButtonText)+"\n          ")]):n._e(),n._v(" "),"update-downloaded"===n.status&&n.downloadAnimationDone?e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(t){return n.quitAndInstall()}}},[n._v("\n            "+n._s(n.primaryButtonText)+"\n          ")]):n._e()])])])])])},s=[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"ui-progress"},[t("div",{staticClass:"indeter-bar"}),this._v(" "),t("div",{staticClass:"bar-bg uk-background-default"})])}]}},[986]);