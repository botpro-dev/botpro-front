(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-67c9"],{"/M4f":function(t,e,n){},Ddwv:function(t,e,n){var o,r,a;r=[t,n("YDNs"),n("wOJ8"),n("TiCD")],void 0===(a="function"==typeof(o=function(t,e,n,o){"use strict";var r=s(e),a=s(n),i=s(o);function s(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,i.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return d("action",t)}},{key:"defaultTarget",value:function(t){var e=d("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return d("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(a.default);function d(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l})?o.apply(e,r):o)||(t.exports=a)},TiCD:function(t,e,n){var o=n("b+/x"),r=n("jFDo");t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},YDNs:function(t,e,n){var o,r,a;r=[t,n("gvr7")],void 0===(a="function"==typeof(o=function(t,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})?o.apply(e,r):o)||(t.exports=a)},ZySA:function(t,e,n){"use strict";var o=n("P2sY"),r=n.n(o),a=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var o=r()({},e.value),a=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},o),i=a.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var s=i.getBoundingClientRect(),c=i.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":((c=document.createElement("span")).className="waves-ripple",c.style.height=c.style.width=Math.max(s.width,s.height)+"px",i.appendChild(c)),a.type){case"center":c.style.top=s.height/2-c.offsetHeight/2+"px",c.style.left=s.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(n.pageY-s.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(n.pageX-s.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=a.color,c.className="waves-ripple z-active",!1}},!1)}}),i=function(t){t.directive("waves",a)};window.Vue&&(window.waves=a,Vue.use(i)),a.install=i;e.a=a},"b+/x":function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},gvr7:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},jFDo:function(t,e,n){var o=n("lNia");function r(t,e,n,r,a){var i=function(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,i,a),{destroy:function(){t.removeEventListener(n,i,a)}}}t.exports=function(t,e,n,o,a){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,o,a)}))}},jUE0:function(t,e,n){},lNia:function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},nMEy:function(t,e,n){"use strict";var o=n("14Xm"),r=n.n(o),a=n("D3Ub"),i=n.n(a),s=n("XJYT"),c=n("ZySA"),u=n("Ddwv");if(!u)throw new Error("you should npm install `clipboard` --save at first ");var l={bind:function(t,e){if("success"===e.arg)t._v_clipboard_success=e.value;else if("error"===e.arg)t._v_clipboard_error=e.value;else{var n=new u(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"}});n.on("success",function(e){var n=t._v_clipboard_success;n&&n(e)}),n.on("error",function(e){var n=t._v_clipboard_error;n&&n(e)}),t._v_clipboard=n}},update:function(t,e){"success"===e.arg?t._v_clipboard_success=e.value:"error"===e.arg?t._v_clipboard_error=e.value:(t._v_clipboard.text=function(){return e.value},t._v_clipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._v_clipboard_success:"error"===e.arg?delete t._v_clipboard_error:(t._v_clipboard.destroy(),delete t._v_clipboard)}},d=function(t){t.directive("Clipboard",l)};window.Vue&&(window.clipboard=l,Vue.use(d)),l.install=d;var f=l,p=n("Q2AE"),m=n("t3Un");function h(t,e){return Object(m.a)({url:"/bots/"+e,method:"GET",params:{ownerId:t}})}function v(t,e,n){return Object(m.a)({url:"/bots/"+e,method:"PUT",data:n,params:{ownerId:t}})}var g={directives:{waves:c.a,clipboard:f},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{botId:this.$route.params&&this.$route.params.botId,companyId:this.$route.params&&this.$route.params.companyId,botExists:!1,postedFormData:{token:"",welcomeMsg:""},pageData:{firstName:"",userName:""},rules:{token:[{required:!0,message:this.$t("validate.botTokenRequired"),trigger:"blur"}],welcomeMsg:[{required:!0,message:this.$t("validate.welcomeMsgRequired"),trigger:"blur"}]},loading:!0,saveButtonLoading:!1,regenerateButtonLoading:!1}},created:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isEdit){e.next=7;break}return t.loading=!0,e.next=4,t.fillPage();case 4:t.loading=!1,e.next=8;break;case 7:t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return p.a.getters.ownerId},fillPage:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.getOwnerId(),t.botId).then(function(e){var n=e.data.payload.bot;t.postedFormData.token=n.token,t.postedFormData.welcomeMsg=n.welcomeMsg,t.pageData.firstName=n.firstName,t.pageData.username=n.username,t.pageData.token=n.token,t.pageData.chatGroupToken=n.chatGroupToken,t.pageData.chatGroupTitle=n.chatGroupTitle});case 2:case"end":return e.stop()}},e,t)}))()},create:function(){var t=this;this.$refs.postedFormData.validate(function(e){if(e)return t.saveButtonLoading=!0,function(t,e){return Object(m.a)({url:"/bots",method:"POST",data:e,params:{ownerId:t}})}(t.getOwnerId(),{company:t.companyId,token:t.postedFormData.token,welcomeMsg:t.postedFormData.welcomeMsg}).then(function(e){200===e.data.code&&(t.$router.push("/companies/"+t.companyId+"/bot/"+e.data.payload.bot.id+"/edit"),t.$notify({title:t.$t("notification.success"),message:t.$t("company.botAddSuccess"),type:"success",duration:2e3}))}).catch(function(e){t.saveButtonLoading=!1})})},update:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.postedFormData.validate(function(){var e=i()(r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return t.saveButtonLoading=!0,e.abrupt("return",v(t.getOwnerId(),t.botId,{company:t.companyId,token:t.postedFormData.token,welcomeMsg:t.postedFormData.welcomeMsg}).then(function(e){200===e.data.code&&(t.pageData.firstName=e.data.payload.bot.firstName,t.pageData.userName=e.data.payload.bot.userName,t.saveButtonLoading=!1,t.$notify({title:t.$t("notification.success"),message:t.$t("company.botEditSuccess"),type:"success",duration:2e3}))}).catch(function(){t.saveButtonLoading=!1}));case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,t)}))()},remove:function(){var t=this;s.MessageBox.confirm(this.$t("company.removeBotConfirm"),this.$t("messageBox.confirmDelete"),{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){return t.loading=!0,function(t,e){return Object(m.a)({url:"/bots/"+e,method:"DELETE",params:{ownerId:t}})}(t.getOwnerId(),t.botId).then(function(e){200===e.data.code&&(t.$router.push("/companies/"+t.companyId+"/detail"),t.$notify({title:t.$t("notification.success"),message:t.$t("company.botRemoveSuccess"),type:"success",duration:2e3}),t.loading=!1)}).catch(function(){t.loading=!1})}).catch(function(){console.log("Cancel")})},regenerate:function(){var t=this;s.MessageBox.confirm("Are you sure to regenerate","Confirm regenerate",{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){return t.regenerateButtonLoading=!0,function(t,e){return Object(m.a)({url:"/bots/"+e+"/regenerate-chat-group-token",method:"POST",params:{ownerId:t}})}(t.getOwnerId(),t.botId).then(function(){var e=i()(r.a.mark(function e(n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillPage();case 2:t.regenerateButtonLoading=!1,t.$forceUpdate(),Object(s.Message)({message:"Chat group token successfully regenerated",type:"success",duration:5e3});case 5:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){t.regenerateButtonLoading=!1})})},clipboardSuccess:function(){this.$message({message:this.$t("notification.clipboardCopy"),type:"success",duration:1500})}}},y=(n("vBbA"),n("KHd+")),b=Object(y.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"edit-form-container"},[t.isEdit||t.botExists?n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.$t("table.status"))+"\n    ")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"bot-group-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("bot.botGroupInfo")))])]),t._v(" "),n("div",{staticClass:"bot-group-body"},[n("div",[t._v(t._s(t.$t("bot.chatGroupToken"))+":\n              "),n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{sm:8,xs:20}},[n("el-input",{attrs:{value:t.pageData.chatGroupToken,readonly:""}})],1),t._v(" "),n("el-col",{attrs:{sm:4,xs:4}},[n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pageData.chatGroupToken,expression:"pageData.chatGroupToken",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{icon:"el-icon-document-copy",type:"info"}})],1),t._v(" "),n("el-col",{attrs:{sm:12}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.regenerateButtonLoading,type:"success"},on:{click:t.regenerate}},[t._v(t._s(t.$t("bot.regenerateGroupToken")))])],1)],1)],1)])])],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-card",{attrs:{shadow:"never"}},[n("div",{staticClass:"bot-group-header",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("bot.botInfo")))])]),t._v(" "),n("div",{staticClass:"bot-group-body"},[n("div",[t._v(t._s(t.$t("table.attribute.name"))+":"),n("span",{staticClass:"bot-group-token"},[t._v(" "+t._s(t.pageData.firstName))])]),t._v(" "),n("div",[t._v(t._s(t.$t("user.userName"))+": "),n("span",{staticClass:"bot-group-token"},[t._v(t._s(t.pageData.username)+" ")])])])])],1)],1)],1):t._e(),t._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.$t("company.telegramBot"))+"\n    ")]),t._v(" "),n("el-form",{ref:"postedFormData",attrs:{rules:t.rules,model:t.postedFormData,"label-width":"120px","label-position":"top"}},[n("el-form-item",{attrs:{label:t.$t("company.botToken"),prop:"token"}},[n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{sm:16}},[n("el-input",{attrs:{placeholder:"123456789:ABCDEF123abcdef123Fw-qphd62Eh8uQp5EyM"},model:{value:t.postedFormData.token,callback:function(e){t.$set(t.postedFormData,"token",e)},expression:"postedFormData.token"}})],1),t._v(" "),n("el-col",{attrs:{sm:6}},[t.isEdit?n("el-button",{attrs:{type:"danger"},on:{click:t.remove}},[t._v(t._s(t.$t("company.removeBotToken")))]):t._e()],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:2}},[n("el-col",{attrs:{sm:17}},[n("el-form-item",{attrs:{label:t.$t("bot.welcomeMsg"),prop:"welcomeMsg"}},[n("el-input",{attrs:{autosize:{minRows:2,maxRows:8},type:"textarea",placeholder:"Please input"},model:{value:t.postedFormData.welcomeMsg,callback:function(e){t.$set(t.postedFormData,"welcomeMsg",e)},expression:"postedFormData.welcomeMsg"}})],1)],1)],1),t._v(" "),n("el-form-item",{staticClass:"save-button"},[n("router-link",{attrs:{to:"/companies/"+t.companyId+"/detail"}},[n("el-button",[t._v(t._s(t.$t("route.back")))])],1),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.saveButtonLoading,type:"primary"},on:{click:function(e){t.isEdit?t.update():t.create()}}},[t._v(t._s(t.$t("table.save")))])],1)],1)],1)],1)},[],!1,null,"61cacc9a",null);b.options.__file="BotEdit.vue";e.a=b.exports},vBbA:function(t,e,n){"use strict";var o=n("/M4f");n.n(o).a},wOJ8:function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var a=0,i=o.length;a<i;a++)o[a].fn!==e&&o[a].fn._!==e&&r.push(o[a]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n}}]);