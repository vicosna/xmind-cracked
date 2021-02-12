module.exports=webpackJsonp([5],{10:function(e,t){e.exports=require("fs")},15:function(e,t){e.exports=require("querystring")},16:function(e,t){e.exports=require("util")},2123:function(e,t,a){"use strict";var n=a(0),s=n(a(29)),i=n(a(2124));(0,s.default)(i.default,{name:"preferences"})},2124:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(898),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var r=a(2127),o=a(1),u=Object(o.a)(s.a,r.a,r.b,!1,null,null,null);t.default=u.exports},2125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(899),s=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var r=a(2126),o=a(1),u=Object(o.a)(s.a,r.a,r.b,!1,null,null,null);t.default=u.exports},2126:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-height-expand"},[a("div",{staticClass:"uk-flex uk-flex-row uk-margin"},[a("div",{staticClass:"uk-width-1-3"},[a("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left"},[e._v("\n        "+e._s(e.selectedGroup)+"\n      ")]),e._v(" "),a("div",{ref:"popover",staticClass:"uk-popover-contextual",staticStyle:{width:"280px"},attrs:{"uk-contextual-popover":"","data-sel-close":"[uk-menu] > li > button"}},[a("ul",{staticClass:"uk-overflow-auto uk-height-1-1",attrs:{"uk-menu":""}},e._l(e.shortcutGroups,function(t,n){return a("li",{key:n},[a("button",{class:{"uk-checked":e.selectedGroup===n},attrs:{autofocus:e.selectedGroup===n},on:{click:function(t){return e.onSelectedGroupChange(n)}}},[a("span",[e._v(e._s(n))])])])}),0)])]),e._v(" "),a("div",{staticClass:"uk-position-relative uk-width-2-3 uk-flex uk-margin-small-left"},[a("img",{staticClass:"uk-position-absolute",staticStyle:{top:"5px",left:"4px"},attrs:{src:e.searchIconImage,"uk-svg":""}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputedShortcutName,expression:"inputedShortcutName"}],ref:"searchInput",staticClass:"uk-input uk-search-input",staticStyle:{"padding-left":"20px"},attrs:{placeholder:e.$T("Search shortcuts"),autofocus:"true","uk-icon":"icon: search; ratio: 3"},domProps:{value:e.inputedShortcutName},on:{input:function(t){t.target.composing||(e.inputedShortcutName=t.target.value)}}})])]),e._v(" "),a("form",{staticClass:"uk-panel uk-fieldset",staticStyle:{height:"calc(100% - 24px)",overflow:"auto",padding:"10px"}},[e._l(e.searchedShortcutGroups,function(t,n,s){return a("div",{key:n,staticClass:"uk-form-aligned uk-margin"},[a("h2",[e._v("\n        "+e._s(n)+"\n      ")]),e._v(" "),e._l(t,function(t,n){return a("div",{key:n,staticClass:"uk-margin-small"},[a("label",{staticClass:"uk-form-label",staticStyle:{width:"284px"}},[e._v(e._s(t.label)+e._s(e.$T(":")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("div",{staticClass:"uk-inline uk-width-small uk-text-center",staticStyle:{width:"200px"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:e.commandIdBeClear===n,expression:"commandIdBeClear === commandId"}],staticClass:"uk-button uk-position-right uk-flex uk-flex-middle uk-padding-xsmall",staticStyle:{opacity:"0.2"},attrs:{tabindex:"0",type:"button","uk-icon":"clear"},on:{mousedown:function(a){return e.clearKeyBinding(a,t)}}}),e._v(" "),a("span",{staticClass:"uk-input uk-flex uk-flex-middle uk-flex-center",class:{"uk-form-placeholder-color":e.isShowPlaceholder(t.accelerator,n)},attrs:{tabindex:"-1"},on:{click:function(a){return e.focusKeyBinding(a,t)},keydown:function(a){return e.listenKeyBinding(a,t)},keyup:function(a){return e.rectifyKeyBinding(a,t)},blur:function(a){return e.exitListenKeyBinding(a,t)}}},[e._v(e._s(e.displaySymbols(t.accelerator,n)))])])])])}),e._v(" "),s+1<Object.keys(e.searchedShortcutGroups).length?a("hr"):e._e()],2)}),e._v(" "),Object.keys(e.searchedShortcutGroups).length?e._e():a("div",{staticClass:"uk-flex uk-height-1-1 uk-text-muted"},[a("common-none-panel",{attrs:{type:"no-result","container-style":"height: unset;"}})],1)],2)])},s=[]},2127:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-window uk-window-dialog",attrs:{id:"app"}},[a("div",{staticClass:"uk-window-title-bar"},[a("div",{staticClass:"uk-window-title"},[e._v("\n      "+e._s(e.$T("Preferences"))+"\n    ")]),e._v(" "),a("window-control-button-group")],1),e._v(" "),a("div",{ref:"content",staticClass:"uk-window-body uk-flex uk-flex-column",staticStyle:{overflow:"hidden"}},[a("ul",{staticClass:"uk-tab uk-tab-large uk-flex-center uk-tab-capsule uk-margin-remove",staticStyle:{"padding-top":"16px"},attrs:{"uk-tab":"connect: #main_content_switcher","data-active":e.activeTabIndex}},[a("li",[a("a",{attrs:{draggable:"false",href:"#"},on:{click:function(t){e.activeTab="general"}}},[e._v("\n          "+e._s(e.$T("General"))+"\n        ")])]),e._v(" "),a("li",[a("a",{attrs:{draggable:"false",href:"#"},on:{click:function(t){e.activeTab="shortcuts"}}},[e._v("\n          "+e._s(e.$T("Shortcuts"))+"\n        ")])])]),e._v(" "),a("ul",{staticClass:"uk-switcher uk-height-expand uk-flex uk-flex-column",class:{"uk-overflow-auto":"shortcuts"!==e.activeTab},attrs:{id:"main_content_switcher"}},[a("li",{staticClass:"uk-panel uk-padding-large uk-height-expand uk-padding-remove-bottom"},[a("form",{staticClass:"uk-height-1-1"},[a("div",{staticClass:"uk-fieldset",class:{"uk-height-1-1":e.isLicenseMode}},[a("div",{staticClass:"uk-panel uk-form-aligned"},[a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Appearance:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left"},[e._v("\n                    "+e._s(e.selectedAppearanceName)+"\n                  ")]),e._v(" "),a("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] > li"}},[a("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},e._l(e.appearanceOptions,function(t){return a("li",{key:t.value,attrs:{value:t.value}},[a("button",{class:{"uk-checked":e.selectedAppearanceValue===t.value},on:{click:function(a){e.selectedAppearanceValue=t.value}}},[e._v("\n                          "+e._s(t.text)+"\n                        ")])])}),0)])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Display Language:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left"},[e._v("\n                    "+e._s(e.selectedLanguageName)+"\n                  ")]),e._v(" "),a("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] > li"}},[a("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},e._l(e.languageOptions,function(t){return a("li",{key:t.value,attrs:{value:t.value}},[a("button",{class:{"uk-checked":e.selectedLanguageValue===t.value},on:{click:function(a){e.selectedLanguageValue=t.value}}},[e._v("\n                          "+e._s(t.text)+"\n                        ")])])}),0)])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Default Opened Map Zoom:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left"},[e._v("\n                    "+e._s(e.selectedMapZoomName)+"\n                  ")]),e._v(" "),a("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] > li"}},[a("ul",{staticClass:"uk-height-1-1 uk-overflow-auto",attrs:{"uk-menu":""}},e._l(e.mapZoomOptions,function(t){return a("li",{key:t.value,attrs:{value:t.value}},[a("button",{class:{"uk-checked":e.selectedMapZoomValue===t.value},on:{click:function(a){e.selectedMapZoomValue=t.value}}},[e._v("\n                          "+e._s(t.text)+"\n                        ")])])}),0)])])]),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Default CJK Font:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls"},[a("button",{staticClass:"uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",staticStyle:{"min-height":"22px!important"},attrs:{title:e.$T("Global setting for all opened XMind files. After setting Chinese, Japanese and Korean fonts, mixed layout with western typeface displays better.")}},[e._v("\n                    "+e._s(e.selectedCJKFontFamilyText)+"\n                  ")]),e._v(" "),a("div",{attrs:{"uk-contextual-popover":"offsetLeft:20","data-sel-close":"[uk-menu] > li"}},[e.cjkFontFamilyOptions&&e.cjkFontFamilyOptions.length?a("ul",{staticClass:"uk-height-1-1 uk-overflow-auto uk-height-max-medium",attrs:{"uk-menu":""}},e._l(e.cjkFontFamilyOptions,function(t){return a("li",{key:t.value,attrs:{value:t.value}},[a("button",{class:{"uk-checked":e.selectedCJKFontFamilyValue===t.value},on:{click:function(a){e.selectedCJKFontFamilyValue=t.value}}},[e._v("\n                          "+e._s(t.text)+"\n                        ")])])}),0):a("div",{staticClass:"uk-background-default uk-flex uk-flex-column uk-flex-center uk-flex-middle"},[a("div",{staticClass:"uk-display-block uk-text-muted uk-padding",attrs:{"uk-spinner":"ratio: 0.6;"}})])])])]),e._v(" "),e.isMac?a("div",{staticClass:"uk-margin uk-margin-small-bottom"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Quick Entry:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-margin-xsmall-top"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.quickEntryAutoLaunchValue,expression:"quickEntryAutoLaunchValue"}],staticClass:"uk-checkbox",attrs:{type:"checkbox",disabled:null===e.quickEntryAutoLaunchValue,name:"quickEntryAutoLaunch"},domProps:{checked:Array.isArray(e.quickEntryAutoLaunchValue)?e._i(e.quickEntryAutoLaunchValue,null)>-1:e.quickEntryAutoLaunchValue},on:{change:function(t){var a=e.quickEntryAutoLaunchValue,n=t.target,s=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.quickEntryAutoLaunchValue=a.concat([null])):i>-1&&(e.quickEntryAutoLaunchValue=a.slice(0,i).concat(a.slice(i+1)))}else e.quickEntryAutoLaunchValue=s}}}),e._v(" "),a("span",{staticClass:"uk-margin-xsmall-left"},[e._v(e._s(e.$T("Start Quick Entry when system login")))])])])]):e._e(),e._v(" "),a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Watermark:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-margin-xsmall-top"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.watermarkValue,expression:"watermarkValue"}],staticClass:"uk-checkbox",attrs:{type:"checkbox",name:"watermark",disabled:e.forcesUsingWatermark},domProps:{checked:Array.isArray(e.watermarkValue)?e._i(e.watermarkValue,null)>-1:e.watermarkValue},on:{change:function(t){var a=e.watermarkValue,n=t.target,s=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.watermarkValue=a.concat([null])):i>-1&&(e.watermarkValue=a.slice(0,i).concat(a.slice(i+1)))}else e.watermarkValue=s}}}),e._v(" "),a("span",{staticClass:"uk-margin-xsmall-left"},[e._v(e._s(e.$T("Display in exported and printed files")))])]),e._v(" "),e.forcesUsingWatermark?a("div",[e._v("\n                    "+e._s(e.$T("Please activate XMind to reset this feature."))+"\n                  ")]):e._e()])]),e._v(" "),e.isLicenseMode?e._e():a("div",{staticClass:"uk-margin"},[a("label",{staticClass:"uk-form-label"},[e._v(e._s(e.$T("Share Analytics:")))]),e._v(" "),a("div",{staticClass:"uk-form-controls uk-margin-xsmall-top"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sendUsageDataValue,expression:"sendUsageDataValue"}],staticClass:"uk-checkbox",attrs:{type:"checkbox",name:"sendUsageData"},domProps:{checked:Array.isArray(e.sendUsageDataValue)?e._i(e.sendUsageDataValue,null)>-1:e.sendUsageDataValue},on:{change:function(t){var a=e.sendUsageDataValue,n=t.target,s=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&(e.sendUsageDataValue=a.concat([null])):i>-1&&(e.sendUsageDataValue=a.slice(0,i).concat(a.slice(i+1)))}else e.sendUsageDataValue=s}}}),e._v(" "),a("span",{staticClass:"uk-margin-xsmall-left"},[e._v(e._s(e.$T("Automatically send usage statistics (NO PRIVATE DATA)")))])])])])])]),e._v(" "),e.isLicenseMode?e._e():a("h1",{staticClass:"uk-legend uk-margin-top"},[e._v("\n            "+e._s(e.$T("Share"))+"\n          ")]),e._v(" "),e.isLicenseMode?e._e():a("fieldset",{staticClass:"uk-margin-small-top uk-fieldset"},[a("div",{staticClass:"uk-panel uk-flex"},[e._l(e.shareServiceItems,function(t,n){return[a("a",{key:t.id,staticClass:"uk-background-contain",class:[0===n?"":"uk-margin-left"],staticStyle:{width:"24px",height:"24px"},style:{opacity:e.hiddenShareItems[t.id]?.2:1},attrs:{draggable:"false","data-src":t.iconURL,"uk-img":""}}),e._v(" "),a("div",{key:t.id+"_drop",staticClass:"uk-card uk-card-default uk-card-body",attrs:{"uk-drop":"pos: top-left; animation: uk-animation-slide-bottom-small; offset: 10;"}},[a("h4",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))]),e._v(" "),"evernote"===t.id&&e.evernoteAuthName?[a("p",[e._v(e._s(e.evernoteAuthName))]),e._v(" "),a("p",[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:e.signOutEvernote}},[e._v("\n                        "+e._s(e.$T("Sign Out"))+"\n                      ")])])]:"evernote"===t.id?[a("p",[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:e.signInEvernote}},[e._v("\n                        "+e._s(e.$T("Connect to Evernote"))+"\n                      ")])])]:e._e(),e._v(" "),"biggerplate"===t.id&&e.biggerplateAuthorized?[a("p",[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:e.signOutBiggerplate}},[e._v("\n                        "+e._s(e.$T("Sign Out"))+"\n                      ")])])]:"biggerplate"===t.id?[a("p",[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:e.signInBiggerplate}},[e._v("\n                        "+e._s(e.$T("Connect to Biggerplate"))+"\n                      ")])])]:e._e(),e._v(" "),t.canHidden?[a("p",[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:function(a){return e.toggleHiddenShare(t.id)}}},[e._v("\n                        "+e._s(e.hiddenShareItems[t.id]?e.$T("Show in The Share Menu"):e.$T("Hide in The Share Menu"))+"\n                      ")])])]:e._e()],2)]})],2)])])]),e._v(" "),a("li",{staticClass:"uk-panel uk-padding-large uk-flex uk-flex-column uk-height-expand uk-position-relative"},[a("shortcuts-panel",{ref:"shortcuts"})],1)])]),e._v(" "),a("div",{staticClass:"uk-window-button-bar"},[a("div",{staticClass:"uk-button-group"},[a("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"submit",autofocus:""},on:{click:e.applyChanges}},[e._v("\n        "+e._s(e.$T("Apply"))+"\n      ")]),e._v(" "),a("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:e.cancel}},[e._v("\n        "+e._s(e.$T("Cancel"))+"\n      ")])]),e._v(" "),"shortcuts"==e.activeTab?a("div",{staticClass:"uk-button-group"},[a("button",{staticClass:"uk-button uk-button-link",attrs:{type:"button"},on:{click:e.restoreShortcuts}},[e._v("\n        "+e._s(e.$T("Restore Default Shortcuts"))+"\n      ")])]):e._e()])])},s=[]},23:function(e,t){e.exports=require("events")},248:function(e,t){e.exports=require("process")},25:function(e,t){e.exports=require("os")},26:function(e,t){e.exports=require("crypto")},31:function(e,t){e.exports=require("tty")},32:function(e,t){e.exports=require("net")},4:function(e,t){e.exports=require("path")},6:function(e,t){e.exports=require("electron")},898:function(e,t,a){"use strict";var n=a(107),s=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(12)),r=s(a(15)),o=a(28),u=n(a(14)),l=a(13),c=s(a(41));function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}const h=(0,u.fetch)(l.GET_ALL_FONTS),p="darwin"===process.platform;var m={components:{ShortcutsPanel:()=>new Promise(function(e){e(a(2125))})},mixins:[c.default],data:()=>({activeTab:"",languageOptions:[{value:"en-US",text:"English"},{value:"zh-CN",text:"简体中文"},{value:"de-DE",text:"Deutsch"},{value:"fr-FR",text:"Français"},{value:"zh-TW",text:"繁體中文"},{value:"ja-JP",text:"日本語"},{value:"es",text:"Español"},{value:"id",text:"Bahasa Indonesia"},{value:"it-IT",text:"Italiano"},{value:"ko",text:"한국어"},{value:"pt-PT",text:"Português"},{value:"ru-RU",text:"Русский"},{value:"th",text:"ภาษาไทย"}],newLanguageValue:null,mapZoomOptions:[{value:"50%",text:"50%"},{value:"80%",text:"80%"},{value:"100%",text:"100%"},{value:"120%",text:"120%"},{value:"150%",text:"150%"},{value:"200%",text:"200%"},{value:"300%",text:"300%"}],newMapZoomValue:null,cjkFontFamilyOptions:[],newCJKFontFamilyValue:null,newWatermarkValue:null,newQuickEntryAutoLaunchValue:null,newSendUsageDataValue:null,newAppearanceValue:null,hiddenShareItems:{},isMac:p}),computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach(function(t){(0,i.default)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},(0,o.mapState)({preferredAppearanceValue:e=>e.preferences.preferredAppearance,systemAppearanceValue:e=>e.preferences.systemAppearance,prefersUsingWatermark:e=>e.preferences.prefersUsingWatermark,preferredQuickEntryAutoLaunch:e=>e.preferences.autoLaunchQuickEntry,preferredHiddenShareItems:e=>e.preferences.preferredHiddenShareItems,evernoteAuthName:e=>e.evernote.oauthToken?e.evernote.username:"",biggerplateAuthorized:e=>!!e.biggerplate.accessToken,currentSendUsageDataValue:e=>e.preferences.sendUsageData}),{},(0,o.mapGetters)({currentLanguageValue:"preferences/language",computedAppearanceValue:"preferences/appearance",currentMapZoomValue:"preferences/initialZoomLevel",currentCJKFontFamilyValue:"preferences/cjkFontFamily",currentWatermarkValue:"preferences/usesWatermark",forcesUsingWatermark:"activation/forcesUsingWatermark",blockedShareItems:"app/blockedShareItems",currentServiceRegion:"app/serviceRegion",keybindingByCommandId:"keybindings/keybindingByCommandId",commandIdByKeybinding:"keybindings/commandIdByKeybinding"}),{touchBarItems(){return[{type:"space",size:"flexible"},{type:"button",label:this.$T("Cancel"),click:"close"},{type:"button",label:this.$T("Apply"),backgroundColor:"primary",click:"applyChanges"},{type:"space",size:"flexible"}]},fullAppearanceOptions(){return[{value:"auto",text:this.$T("System Default")},{value:"default",text:this.$T("Light")},{value:"dark",text:this.$T("Dark")}]},selectedLanguageValue:{get(){return null===this.newLanguageValue?this.currentLanguageValue:this.newLanguageValue},set(e){e===this.currentLanguageValue&&(e=null),this.newLanguageValue=e}},selectedLanguageName(){const e=this.selectedLanguageValue;return(this.languageOptions.find(t=>t.value===e)||{}).text||""},appearanceOptions(){return this.systemAppearanceValue?this.fullAppearanceOptions:this.fullAppearanceOptions.slice(1)},currentAppearanceValue(){return this.systemAppearanceValue?this.preferredAppearanceValue||"auto":this.computedAppearanceValue},selectedAppearanceName(){const e=this.selectedAppearanceValue;return(this.appearanceOptions.find(t=>t.value===e)||{}).text||""},selectedAppearanceValue:{get(){return null===this.newAppearanceValue?this.currentAppearanceValue:this.newAppearanceValue},set(e){e===this.currentAppearanceValue&&(e=null),this.newAppearanceValue=e}},selectedMapZoomValue:{get(){return null===this.newMapZoomValue?this.currentMapZoomValue:this.newMapZoomValue},set(e){e===this.currentMapZoomValue&&(e=null),this.newMapZoomValue=e}},selectedMapZoomName(){const e=this.selectedMapZoomValue;return(this.mapZoomOptions.find(t=>t.value===e)||{}).text||""},selectedCJKFontFamilyValue:{get(){return null===this.newCJKFontFamilyValue?this.currentCJKFontFamilyValue:this.newCJKFontFamilyValue},set(e){e===this.currentCJKFontFamilyValue&&(e=null),this.newCJKFontFamilyValue=e}},selectedCJKFontFamilyText(){const e=this.selectedCJKFontFamilyValue;return(this.cjkFontFamilyOptions.find(t=>t.value===e)||{}).text||e||this.$T("Default")},quickEntryAutoLaunchValue:{get(){return null===this.newQuickEntryAutoLaunchValue?this.preferredQuickEntryAutoLaunch:this.newQuickEntryAutoLaunchValue},set(e){this.newQuickEntryAutoLaunchValue=e}},watermarkValue:{get(){return!!this.forcesUsingWatermark||(null===this.newWatermarkValue?this.currentWatermarkValue:this.newWatermarkValue)},set(e){this.forcesUsingWatermark||(e===this.currentWatermarkValue&&(e=null),this.newWatermarkValue=e)}},sendUsageDataValue:{get(){return null===this.newSendUsageDataValue?this.currentSendUsageDataValue:this.newSendUsageDataValue},set(e){this.newSendUsageDataValue=e}},shareServiceItems(){return[{id:"public link",title:this.$T("Public Link"),description:this.$T("The link can be searched in search engines."),iconURL:this.$toResourceURL("static/images/share-public-link.svg")},{id:"private link",title:this.$T("Private Link"),description:this.$T("The link can not be searched in search engines."),iconURL:this.$toResourceURL("static/images/share-private-link.svg")},{id:"blog",title:this.$T("Blog"),description:this.$T("Generate an embed code for your blog."),iconURL:this.$toResourceURL("static/images/share-blog.svg")},{id:"email",title:this.$T("Email"),description:this.$T("Share the map via Email."),iconURL:this.$toResourceURL("static/images/share-email.svg"),canHidden:"cn"!==this.currentServiceRegion,hidden:!1},{id:"evernote",title:"Evernote",description:this.$T("Save the map to Evernote notebooks."),iconURL:this.$toResourceURL("static/images/share-evernote.svg"),canHidden:"cn"!==this.currentServiceRegion,hidden:!1},{id:"biggerplate",title:"Biggerplate",description:this.$T("Upload the map to Biggerplate."),iconURL:this.$toResourceURL("static/images/share-biggerplate.svg"),canHidden:"cn"!==this.currentServiceRegion,hidden:!1},{id:"facebook",title:"Facebook",description:this.$T("Generate a public link and share via your Facebook."),iconURL:this.$toResourceURL("static/images/share-facebook.svg"),canHidden:!0,hidden:!1},{id:"twitter",title:"Twitter",description:this.$T("Generate a public link and share via your Twitter."),iconURL:this.$toResourceURL("static/images/share-twitter.svg"),canHidden:!0,hidden:!1},{id:"pinterest",title:"Pinterest",description:this.$T("Generate a public link and share via your Pinterest."),iconURL:this.$toResourceURL("static/images/share-pinterest.svg"),canHidden:!0,hidden:!1}].filter(e=>!this.blockedShareItems.includes(e.id))},isLicenseMode:()=>"true"===process.env.VANA_LICENSE_MODE,activeTabIndex(){return["general","shortcuts"].indexOf(this.activeTab)}}),created(){const e=r.default.parse(window.location.search.slice(1));e.tab&&(this.activeTab=e.tab)},beforeMount(){this.$safeRun(async()=>{const{systemFonts:e}=await h;this.cjkFontFamilyOptions=[{value:"",text:this.$T("Default")},...Object.values(e).filter(e=>e.isCJKFont)]})},mounted(){if("cn"!==this.currentServiceRegion)for(const e of this.preferredHiddenShareItems)this.$set(this.hiddenShareItems,e,!0)},methods:{signInEvernote(){u.default.fetch(l.WINDOW_OPEN,{name:"evernote"})},signOutEvernote(){this.$store.commit("evernote/clearEvernote")},signInBiggerplate(){u.default.fetch(l.WINDOW_OPEN,{name:"biggerplate"})},signOutBiggerplate(){this.$store.commit("biggerplate/clearBiggerplate")},toggleHiddenShare(e){this.$set(this.hiddenShareItems,e,!this.hiddenShareItems[e])},applyChanges(){let e={};null!==this.newLanguageValue&&(e.preferredLanguage=this.newLanguageValue),null!==this.newAppearanceValue&&("auto"===this.newAppearanceValue?e.preferredAppearance="":e.preferredAppearance=this.newAppearanceValue),null!==this.newMapZoomValue&&(e.preferredInitialZoomLevel=this.newMapZoomValue),null!==this.newCJKFontFamilyValue&&(e.preferredCJKFontFamily=this.newCJKFontFamilyValue),this.preferredQuickEntryAutoLaunch!==this.quickEntryAutoLaunchValue&&(e.autoLaunchQuickEntry=this.newQuickEntryAutoLaunchValue),this.forcesUsingWatermark||this.prefersUsingWatermark===this.watermarkValue||(e.prefersUsingWatermark=this.watermarkValue),this.currentSendUsageData!==this.sendUsageDataValue&&(e.sendUsageData=this.sendUsageDataValue),"cn"!==this.currentServiceRegion&&(e.preferredHiddenShareItems=Object.keys(this.hiddenShareItems).filter(e=>this.hiddenShareItems[e])),this.$refs.shortcuts.applyChanges(),u.default.fetch(l.STORE_COMMIT,{mutations:[{type:"preferences/updatePreferences",payload:e}]}).then(()=>window.close())},cancel(){window.close()},restoreShortcuts(){this.$refs.shortcuts.resetToDefault()}}};t.default=m},899:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(12)),i=n(a(248)),r=n(a(36)),o=a(28),u=a(42),l=a(8),c=a(19),d=a(13),h=a(34),p=a(14),m=n(a(265)),k=n(a(86));function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach(function(t){(0,s.default)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}const v="darwin"===i.default.platform,y={Meta:"Meta",Shift:"Shift",Ctrl:"Ctrl",Alt:"Alt",Option:"Alt"};var b={name:"ShortcutsPanel",components:{CommonNonePanel:k.default},mixins:[m.default],data:()=>({isMac:v,modifierIcon:v?l.MAC_MODIFIER_ICON:y,commandIdBeClear:"",commandIdBeFocus:"",acceleratorEdited:{},selectedGroup:"",searchedShortcutGroups:{},inputedShortcutName:""}),methods:{isShowPlaceholder(e,t){const a=this.acceleratorEdited[t];return!(a&&a.valid?a.accelerator:e)&&this.commandIdBeFocus===t},displaySymbols(e,t){const a=this.acceleratorEdited[t],n=a&&a.valid?a.accelerator:e;if(!n)return this.commandIdBeFocus===t?this.$T("Enter a Shortcut"):this.$T("None");let s={Control:!1,undefined:!1};return n.split("+").map(e=>this.modifierIcon[e]||e).filter(e=>void 0===s[e]).join(" ").replace("=","+")},focusKeyBinding(e,t){e.target.focus();const a=this.acceleratorEdited[t.commandId],n=a&&a.valid?a.accelerator:t.accelerator;this.commandIdBeClear=n?t.commandId:"",this.commandIdBeFocus=t.commandId,this.$store.commit("keybindings/enabled",!1)},clearKeyBinding(e,t){this.commandIdBeFocus="",this.commandIdBeClear="",this.setAccelerator(t,""),this.setValid(t,!0)},exitListenKeyBinding(e){this.commandIdBeFocus="",this.commandIdBeClear="",this.$store.commit("keybindings/enabled",!0)},listenKeyBinding(e,t){e.stopPropagation(),e.preventDefault();let{code:a,keyCode:n,altKey:s,shiftKey:i,ctrlKey:r,metaKey:o}=e;if(this.keyDownResult={code:a,keyCode:n,altKey:s,shiftKey:i,ctrlKey:r,metaKey:o},27===n)return void this.exitListenKeyBinding(e,t);const u=this.$store.getters["keybindings/codeToKey"](a),l=this.$store.getters["keybindings/isValidShortcut"](u,{hasAlt:s,hasShift:i,hasCtrl:r,hasMeta:o});if(["ALT","CONTROL","SHIFT"].includes(u&&u.toUpperCase())&&(a=""),l){const e=this.$store.getters["keybindings/generateKeybindingByKey"](u,{hasAlt:s,hasShift:i,hasCtrl:r,hasMeta:o});this.setAccelerator(t,e),this.setValid(t,!0)}},rectifyKeyBinding(e,t){e.stopPropagation(),e.preventDefault();const{keyCode:a,altKey:n,shiftKey:s,ctrlKey:r,metaKey:o}=this.keyDownResult;if(27===a)return void this.exitListenKeyBinding(e,t);const u=t.commandId,l=t.groupName||"default";if(!this.acceleratorEdited[u])return;if(!this.acceleratorEdited[u].valid)return void this.setValid(t,!1);if("darwin"===i.default.platform&&n&&!s&&!r&&!o&&![37,38,39,40].includes(a))return this.showConflictDialog(),void this.setValid(t,!1);const c=this.acceleratorEdited[u].accelerator;let d=this.$store.state.keybindings.forbitConflictCommandIds,h=[];const p=Object.keys(this.acceleratorEdited);d.forEach(e=>{if(p.includes(e)&&e!==u)h.push(this.acceleratorEdited[e].accelerator);else{const t=this.keybindingByCommandIdAndGroup(e,"default"),a=this.keybindingByCommandIdAndGroup(e,"outliner");h.push(t),h.push(a)}}),p.forEach(e=>{const t=this.acceleratorEdited[e];e===u||t.groupName!==l&&!d.includes(u)||h.push(t.accelerator)}),h=h.filter(e=>!!e);let m=this.commandIdByKeybinding({keybinding:c,groupName:l});!m&&d.includes(u)&&"outliner"!==l&&(m=this.commandIdByKeybinding({keybinding:c,groupName:"outliner"})),(h.includes(c)||m&&!p.includes(m))&&(this.showConflictDialog(),this.setValid(t,!1))},showConflictDialog(){(0,h.showMessageBox)({title:"XMind",message:this.$T("Shortcut Used by Another Action"),detail:this.$T("Another action is using the same keyboard shortcut. Please assign a different shortcut to this action.")})},setAccelerator(e,t){if(this.acceleratorEdited[e.commandId])r.default.set(this.acceleratorEdited[e.commandId],"accelerator",t);else{const a=this.keybindingByCommandIdAndGroup(e.commandId,e.groupName)||"";r.default.set(this.acceleratorEdited,e.commandId,{dirty:!0,accelerator:t,oldAccelerator:a,groupName:e.groupName||"default"})}},setValid(e,t){this.acceleratorEdited[e.commandId]&&(t||r.default.set(this.acceleratorEdited[e.commandId],"accelerator",""),r.default.set(this.acceleratorEdited[e.commandId],"valid",t))},async applyChanges(){const e=[],t=[];Object.keys(this.acceleratorEdited).forEach(a=>{const n=this.acceleratorEdited[a];n.commandId=a,n.oldAccelerator&&e.push(n),n.accelerator&&t.push(n)}),e.forEach(async e=>{const{oldAccelerator:t,commandId:a,groupName:n}=e,s=this.keybindingsByCommandIdAndGroup(a,n);s.length>1&&s[0]===t?s.forEach(async e=>{await this.$store.dispatch("keybindings/unbinding",{keybinding:e,groupName:n})}):await this.$store.dispatch("keybindings/unbinding",{keybinding:t,groupName:n})}),t.forEach(async e=>{const{accelerator:t,commandId:a,groupName:n}=e;await this.$store.dispatch("keybindings/binding",{commandId:a,keybinding:t,groupName:n})})},async resetToDefault(){await(0,p.fetch)(d.STORE_COMMIT,{mutations:[{type:"keybindings/reset"}]}),this.acceleratorEdited={},await(0,c.sleep)(100),this.searchShortcutsByGroup()},onSelectedGroupChange(e){this.selectedGroup=e,this.searchShortcutsByGroup()},searchShortcutsByGroup(){const e=this.selectedGroup===this.allGroupOption?this.shortcutGroups:{[this.selectedGroup]:this.shortcutGroups[this.selectedGroup]},t=this.inputedShortcutName.replace(/[-\\{}*+?|^$.[\]()#]/g,"\\$&"),a=new RegExp(t,"i"),n={};for(const t in e){const s=e[t],i={};for(const e in s)a.test(s[e].label)&&(i[e]=s[e]);Object.keys(i).length&&(n[t]=i)}this.searchedShortcutGroups=f({},n)}},computed:f({},(0,o.mapGetters)({commandIdByKeybinding:"keybindings/commandIdByKeybinding",keybindingByCommandIdAndGroup:"keybindings/keybindingByCommandIdAndGroup",keybindingsByCommandIdAndGroup:"keybindings/keybindingsByCommandIdAndGroup"}),{allGroupOption(){return this.$T("All")},shortcutGroups(){let e={[this.allGroupOption]:{}};const t=this.notAllowCustomizeShortcuts;return this.shortcuts.map(a=>{!a||a.fixed||t.indexOf(a.commandId)>-1||(e[a.category]||(e[a.category]={}),e[a.category][a.commandId]={commandId:a.commandId,groupName:a.groupName,label:a.label,accelerator:this.keybindingByCommandIdAndGroup(a.commandId,a.groupName)})}),e},searchIconImage(){return this.$toResourceURL("/static/images/navigation-panel/searchbar-search.svg")}}),watch:{inputedShortcutName:(0,u.debounce)(function(){this.searchShortcutsByGroup()},200)},mounted(){this.selectedGroup=this.allGroupOption,this.searchedShortcutGroups=f({},(0,u.omit)(this.shortcutGroups,this.allGroupOption)),this.$nextTick(()=>{this.$refs.searchInput.focus()})},beforeDestroy(){this.$store.commit("keybindings/enabled",!0)}};t.default=b}},[2123]);