(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4a68"],{"5kii":function(e,t,r){"use strict";var a=r("14Xm"),n=r.n(a),o=r("D3Ub"),s=r.n(o),i=r("ZySA"),l=r("LvDl"),u=r("wk8/"),c=r("KTTK"),d=r("8Tyq"),f=r.n(d),m={directives:{waves:i.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{userId:this.$route.params&&this.$route.params.userId,postedFormData:{},selectedLanguages:[],selectedCurrency:"",languagesList:[],currenciesList:[],isLoading:!0,buttonLoading:!1}},created:function(){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.init();case 3:if(!e.isEdit){t.next=6;break}return t.next=6,e.fillForm();case 6:e.isLoading=!1;case 7:case"end":return t.stop()}},t,e)}))()},methods:{getValidationClass:function(e){if(this.errors.first(e))return"is-error"},hasValidationError:function(){return!!this.errors.all().length},init:function(){var e=this;return s()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.c)().then(function(t){e.languagesList=t.data.payload.languages});case 2:return t.next=4,Object(c.b)().then(function(t){e.currenciesList=t.data.payload.currencies});case 4:case"end":return t.stop()}},t,e)}))()},fillForm:function(){var e=this;return Object(u.d)(this.userId).then(function(t){var r=t.data.payload.user;e.postedFormData=Object(l.cloneDeep)(r),e.selectedCurrency=r.currencyId,e.selectedLanguages=r.languages.map(function(e){return e.code})})},handleCreate:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)return e.postedFormData.languages=e.selectedLanguages.map(function(e){return{languageCode:e}}),e.postedFormData.currency={id:e.selectedCurrency},e.buttonLoading=!0,Object(u.a)(e.postedFormData).then(function(t){200===t.data.code&&(e.buttonLoading=!1,e.$router.push({name:"DetailUser",params:{userId:t.data.payload.user.id}}),e.$notify({title:e.$t("notification.success"),message:e.$t("user.createSuccess"),type:"success",duration:2e3})),e.buttonLoading=!1}).catch(function(){e.buttonLoading=!1});f.a.scrollTo("#"+e.errors.items[0].field,500)})},handleUpdate:function(){var e=this;this.$validator.validateAll().then(function(t){if(t)return e.postedFormData.languages=e.selectedLanguages.map(function(e){return{languageCode:e}}),e.postedFormData.currency={id:e.selectedCurrency},e.buttonLoading=!0,Object(u.e)(e.postedFormData).then(function(t){200===t.data.code&&(e.buttonLoading=!1,e.$router.push({name:"Users"}),e.$notify({title:e.$t("notification.success"),message:e.$t("user.editSuccess"),type:"success",duration:2e3})),e.buttonLoading=!1}).catch(function(){e.buttonLoading=!1});f.a.scrollTo("#"+e.errors.items[0].field,500)})}}},p=(r("UJcd"),r("KHd+")),v=Object(p.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"company-edit-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e._v("\n      "+e._s(e.isEdit?e.$t("table.edit"):e.$t("table.add"))+"\n    ")]),e._v(" "),r("el-form",{staticStyle:{width:"600px"},attrs:{model:e.postedFormData,"label-position":"top","label-width":"150px"}},[r("el-form-item",{class:e.getValidationClass("firstName"),attrs:{id:"firstName",label:e.$t("user.firstName"),prop:"firstName"}},[r("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"firstName"},model:{value:e.postedFormData.firstName,callback:function(t){e.$set(e.postedFormData,"firstName",t)},expression:"postedFormData.firstName"}}),e._v(" "),e.errors.first("firstName")?r("span",{staticClass:"el-form-item__error"},[e._v(" "+e._s(e.$t("validate.nameReqired"))+" ")]):e._e()],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("lastName"),attrs:{id:"lastName",label:e.$t("user.lastName"),prop:"lastName"}},[r("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"lastName"},model:{value:e.postedFormData.lastName,callback:function(t){e.$set(e.postedFormData,"lastName",t)},expression:"postedFormData.lastName"}}),e._v(" "),e.errors.first("lastName")?r("span",{staticClass:"el-form-item__error"},[e._v(" "+e._s(e.$t("validate.nameReqired"))+" ")]):e._e()],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("email"),attrs:{id:"email",label:e.$t("table.attribute.email"),prop:"email"}},[r("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"email"},model:{value:e.postedFormData.email,callback:function(t){e.$set(e.postedFormData,"email",t)},expression:"postedFormData.email"}}),e._v(" "),e.errors.first("email")?r("span",{staticClass:"el-form-item__error"},[e._v(" Please enter correct email ")]):e._e()],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("username"),attrs:{id:"username",label:e.$t("user.userName"),prop:"username"}},[r("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"username"},model:{value:e.postedFormData.username,callback:function(t){e.$set(e.postedFormData,"username",t)},expression:"postedFormData.username"}}),e._v(" "),e.errors.first("username")?r("span",{staticClass:"el-form-item__error"},[e._v(" "+e._s(e.$t("validate.nameReqired"))+" ")]):e._e()],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("languages"),attrs:{id:"languages",label:e.$t("table.attribute.languages"),prop:"languages"}},[r("el-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{multiple:"",placeholder:"Select",name:"languages"},model:{value:e.selectedLanguages,callback:function(t){e.selectedLanguages=t},expression:"selectedLanguages"}},e._l(e.languagesList,function(t){return r("el-checkbox",{key:t.code,attrs:{label:t.code,value:t.code}},[e._v(e._s(t.name))])})),e._v(" "),r("span",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("languages")))])],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("currency"),attrs:{id:"currency",label:e.$t("table.attribute.currency"),prop:"currency"}},[r("el-radio-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{placeholder:"Select",name:"currency"},model:{value:e.selectedCurrency,callback:function(t){e.selectedCurrency=t},expression:"selectedCurrency"}},e._l(e.currenciesList,function(t){return r("el-radio",{key:t.id,attrs:{label:t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),e._v(" "),r("span",{staticClass:"el-form-item__error"},[e._v(e._s(e.errors.first("currency")))])],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.postedFormData.password,callback:function(t){e.$set(e.postedFormData,"password",t)},expression:"postedFormData.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.passwordConfirm"),prop:"passwordConfirm"}},[r("el-input",{attrs:{type:"password"},model:{value:e.postedFormData.passwordConfirm,callback:function(t){e.$set(e.postedFormData,"passwordConfirm",t)},expression:"postedFormData.passwordConfirm"}})],1),e._v(" "),r("el-form-item",{class:e.getValidationClass("role"),attrs:{id:"role",label:e.$t("user.role.role"),prop:"roleCode"}},[r("el-radio-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"filter-item",attrs:{name:"role",placeholder:"Please select"},model:{value:e.postedFormData.roleCode,callback:function(t){e.$set(e.postedFormData,"roleCode",t)},expression:"postedFormData.roleCode"}},[r("el-radio",{key:1,attrs:{label:"SUPER_ADMIN"}},[e._v(" "+e._s(e.$t("user.role.superAdmin")))]),e._v(" "),r("el-radio",{key:2,attrs:{label:"OWNER"}},[e._v(" "+e._s(e.$t("user.role.owner")))]),e._v(" "),r("el-radio",{key:3,attrs:{label:"CUSTOMER"}},[e._v(" "+e._s(e.$t("user.role.customer")))])],1),e._v(" "),e.errors.first("role")?r("span",{staticClass:"el-form-item__error"},[e._v(" Role is required ")]):e._e()],1)],1),e._v(" "),r("div",{staticClass:"card-footer"},[r("router-link",{attrs:{to:{name:"Users"}}},[r("el-button",{attrs:{type:"default"}},[e._v(e._s(e.$t("table.cancel")))])],1),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:e.buttonLoading,type:"primary"},on:{click:function(t){e.isEdit?e.handleUpdate():e.handleCreate()}}},[e._v(e._s(e.$t("table.save")))])],1)],1)],1)},[],!1,null,null,null);v.options.__file="UserEdit.vue";t.a=v.exports},"8Tyq":function(e,t,r){
/*!
  * vue-scrollto v2.15.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var r=4,a=.001,n=1e-7,o=10,s=11,i=1/(s-1),l="function"==typeof Float32Array;function u(e,t){return 1-3*t+3*e}function c(e,t){return 3*t-6*e}function d(e){return 3*e}function f(e,t,r){return((u(t,r)*e+c(t,r))*e+d(t))*e}function m(e,t,r){return 3*u(t,r)*e*e+2*c(t,r)*e+d(t)}function p(e){return e}var v=function(e,t,u,c){if(!(0<=e&&e<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&u===c)return p;for(var d=l?new Float32Array(s):new Array(s),v=0;v<s;++v)d[v]=f(v*i,e,u);function g(t){for(var l=0,c=1,p=s-1;c!==p&&d[c]<=t;++c)l+=i;var v=(t-d[--c])/(d[c+1]-d[c]),g=l+v*i,b=m(g,e,u);return b>=a?function(e,t,a,n){for(var o=0;o<r;++o){var s=m(t,a,n);if(0===s)return t;var i=f(t,a,n)-e;t-=i/s}return t}(t,g,e,u):0===b?g:function(e,t,r,a,s){var i,l,u=0;do{(i=f(l=t+(r-t)/2,a,s)-e)>0?r=l:t=l}while(Math.abs(i)>n&&++u<o);return l}(t,l,l+i,e,u)}return function(e){return 0===e?0:1===e?1:f(g(e),t,c)}},g={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},b=!1;try{var y=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,y)}catch(e){}var h={$:function(e){return"string"!=typeof e?e:document.querySelector(e)},on:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};t instanceof Array||(t=[t]);for(var n=0;n<t.length;n++)e.addEventListener(t[n],r,!!b&&a)},off:function(e,t,r){t instanceof Array||(t=[t]);for(var a=0;a<t.length;a++)e.removeEventListener(t[a],r)},cumulativeOffset:function(e){var t=0,r=0;do{t+=e.offsetTop||0,r+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:r}}},w=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],_={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function C(e){_=t({},_,e)}var x=function(){var t,r,a,n,o,s,i,l,u,c,d,f,m,p,b,y,C,x,L,$,D,F,N,k,E=function(e){i&&($=e,L=!0)};function T(e){if(L)return q();F||(F=e),N=e-F,k=Math.min(N/a,1),k=D(k),O(r,b+x*k,m+C*k),N<a?window.requestAnimationFrame(T):q()}function q(){L||O(r,y,p),F=!1,h.off(r,w,E),L&&c&&c($,t),!L&&u&&u(t)}function O(e,t,r){f&&(e.scrollTop=t),d&&(e.scrollLeft=r),"body"===e.tagName.toLowerCase()&&(f&&(document.documentElement.scrollTop=t),d&&(document.documentElement.scrollLeft=r))}return function(F,N){var k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===e(N)?k=N:"number"==typeof N&&(k.duration=N),!(t=h.$(F)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+F);r=h.$(k.container||_.container),a=k.duration||_.duration,n=k.easing||_.easing,o=k.offset||_.offset,s=k.hasOwnProperty("force")?!1!==k.force:_.force,i=k.hasOwnProperty("cancelable")?!1!==k.cancelable:_.cancelable,l=k.onStart||_.onStart,u=k.onDone||_.onDone,c=k.onCancel||_.onCancel,d=void 0===k.x?_.x:k.x,f=void 0===k.y?_.y:k.y;var q=h.cumulativeOffset(r),O=h.cumulativeOffset(t);if("function"==typeof o&&(o=o()),b=function(e){var t=e.scrollTop;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollTop),t}(r),y=O.top-q.top+o,m=function(e){var t=e.scrollLeft;return"body"===e.tagName.toLowerCase()&&(t=t||document.documentElement.scrollLeft),t}(r),p=O.left-q.left+o,L=!1,x=y-b,C=p-m,!s){var S=b,j=S+r.offsetHeight,V=y,U=V+t.offsetHeight;if(V>=S&&U<=j)return void u(t)}return"string"==typeof n&&(n=g[n]||g.ease),D=v.apply(v,n),x||C?(l&&l(t),h.on(r,w,E,{passive:!0}),window.requestAnimationFrame(T),function(){$=null,L=!0}):void 0}}(),L=[];function $(e){var t=function(e){for(var t=0;t<L.length;++t)if(L[t].el===e)return L[t]}(e);return t||(L.push(t={el:e,binding:{}}),t)}function D(e){e.preventDefault();var t=$(this).binding;if("string"==typeof t.value)return x(t.value);x(t.value.el||t.value.element,t.value)}var F={bind:function(e,t){$(e).binding=t,h.on(e,"click",D)},unbind:function(e){!function(e){for(var t=0;t<L.length;++t)if(L[t].el===e)return L.splice(t,1),!0}(e),h.off(e,"click",D)},update:function(e,t){$(e).binding=t},scrollTo:x,bindings:L},N=function(e,t){t&&C(t),e.directive("scroll-to",F),e.prototype.$scrollTo=F.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=F,window.VueScrollTo.setDefaults=C,window.Vue.use(N)),F.install=N,F}()},KTTK:function(e,t,r){"use strict";r.d(t,"e",function(){return n}),r.d(t,"c",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return l}),r.d(t,"f",function(){return u});var a=r("t3Un");function n(){return Object(a.a)({url:"/payment-methods",method:"GET"})}function o(){return Object(a.a)({url:"/languages",method:"GET"})}function s(e){return Object(a.a)({url:"/users/"+e+"/languages",method:"GET"})}function i(){return Object(a.a)({url:"/currencies",method:"GET"})}function l(){return Object(a.a)({url:"/countries",method:"GET"})}function u(){return Object(a.a)({url:"time-zones",method:"GET"})}},UJcd:function(e,t,r){"use strict";var a=r("qzo8");r.n(a).a},ZySA:function(e,t,r){"use strict";var a=r("P2sY"),n=r.n(a),o=(r("jUE0"),{bind:function(e,t){e.addEventListener("click",function(r){var a=n()({},t.value),o=n()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=o.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var i=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(i.width,i.height)+"px",s.appendChild(l)),o.type){case"center":l.style.top=i.height/2-l.offsetHeight/2+"px",l.style.left=i.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(r.pageY-i.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(r.pageX-i.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}},!1)}}),s=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(s)),o.install=s;t.a=o},jUE0:function(e,t,r){},qzo8:function(e,t,r){}}]);