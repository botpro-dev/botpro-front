(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-458e"],{"/1rz":function(t,e,a){"use strict";var n=a("xfjx");a.n(n).a},"/Kw/":function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"c",function(){return r}),a.d(e,"d",function(){return i}),a.d(e,"e",function(){return s}),a.d(e,"f",function(){return l}),a.d(e,"b",function(){return c});var n=a("t3Un");function o(t,e){return Object(n.a)({url:"/companies",method:"POST",params:{ownerId:t},data:e})}function r(t){return Object(n.a)({url:"/companies",method:"GET",params:{ownerId:t}})}function i(t,e){return Object(n.a)({url:"/companies/"+e,method:"GET",params:{ownerId:t}})}function s(t,e){return Object(n.a)({url:"/companies/"+e+"/languages",method:"GET",params:{ownerId:t}})}function l(t,e){return Object(n.a)({url:"/companies/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function c(t,e){return Object(n.a)({url:"/companies/"+e,method:"DELETE",params:{ownerId:t},data:{ownerId:t}})}},"/h46":function(t,e,a){a("cHUd")("Map")},"8Tyq":function(t,e,a){
/*!
  * vue-scrollto v2.15.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var a=4,n=.001,o=1e-7,r=10,i=11,s=1/(i-1),l="function"==typeof Float32Array;function c(t,e){return 1-3*e+3*t}function u(t,e){return 3*e-6*t}function p(t){return 3*t}function d(t,e,a){return((c(e,a)*t+u(e,a))*t+p(e))*t}function m(t,e,a){return 3*c(e,a)*t*t+2*u(e,a)*t+p(e)}function f(t){return t}var b=function(t,e,c,u){if(!(0<=t&&t<=1&&0<=c&&c<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&c===u)return f;for(var p=l?new Float32Array(i):new Array(i),b=0;b<i;++b)p[b]=d(b*s,t,c);function g(e){for(var l=0,u=1,f=i-1;u!==f&&p[u]<=e;++u)l+=s;var b=(e-p[--u])/(p[u+1]-p[u]),g=l+b*s,v=m(g,t,c);return v>=n?function(t,e,n,o){for(var r=0;r<a;++r){var i=m(e,n,o);if(0===i)return e;var s=d(e,n,o)-t;e-=s/i}return e}(e,g,t,c):0===v?g:function(t,e,a,n,i){var s,l,c=0;do{(s=d(l=e+(a-e)/2,n,i)-t)>0?a=l:e=l}while(Math.abs(s)>o&&++c<r);return l}(e,l,l+s,t,c)}return function(t){return 0===t?0:1===t?1:d(g(t),e,u)}},g={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},v=!1;try{var h=Object.defineProperty({},"passive",{get:function(){v=!0}});window.addEventListener("test",null,h)}catch(t){}var y={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var o=0;o<e.length;o++)t.addEventListener(e[o],a,!!v&&n)},off:function(t,e,a){e instanceof Array||(e=[e]);for(var n=0;n<e.length;n++)t.removeEventListener(e[n],a)},cumulativeOffset:function(t){var e=0,a=0;do{e+=t.offsetTop||0,a+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:a}}},D=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],w={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function _(t){w=e({},w,t)}var x=function(){var e,a,n,o,r,i,s,l,c,u,p,d,m,f,v,h,_,x,$,L,O,T,k,I,C=function(t){s&&(L=t,$=!0)};function j(t){if($)return M();T||(T=t),k=t-T,I=Math.min(k/n,1),I=O(I),E(a,v+x*I,m+_*I),k<n?window.requestAnimationFrame(j):M()}function M(){$||E(a,h,f),T=!1,y.off(a,D,C),$&&u&&u(L,e),!$&&c&&c(e)}function E(t,e,a){d&&(t.scrollTop=e),p&&(t.scrollLeft=a),"body"===t.tagName.toLowerCase()&&(d&&(document.documentElement.scrollTop=e),p&&(document.documentElement.scrollLeft=a))}return function(T,k){var I=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===t(k)?I=k:"number"==typeof k&&(I.duration=k),!(e=y.$(T)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+T);a=y.$(I.container||w.container),n=I.duration||w.duration,o=I.easing||w.easing,r=I.offset||w.offset,i=I.hasOwnProperty("force")?!1!==I.force:w.force,s=I.hasOwnProperty("cancelable")?!1!==I.cancelable:w.cancelable,l=I.onStart||w.onStart,c=I.onDone||w.onDone,u=I.onCancel||w.onCancel,p=void 0===I.x?w.x:I.x,d=void 0===I.y?w.y:I.y;var M=y.cumulativeOffset(a),E=y.cumulativeOffset(e);if("function"==typeof r&&(r=r()),v=function(t){var e=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}(a),h=E.top-M.top+r,m=function(t){var e=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}(a),f=E.left-M.left+r,$=!1,x=h-v,_=f-m,!i){var F=v,Z=F+a.offsetHeight,S=h,q=S+e.offsetHeight;if(S>=F&&q<=Z)return void c(e)}return"string"==typeof o&&(o=g[o]||g.ease),O=b.apply(b,o),x||_?(l&&l(e),y.on(a,D,C,{passive:!0}),window.requestAnimationFrame(j),function(){L=null,$=!0}):void 0}}(),$=[];function L(t){var e=function(t){for(var e=0;e<$.length;++e)if($[e].el===t)return $[e]}(t);return e||($.push(e={el:t,binding:{}}),e)}function O(t){t.preventDefault();var e=L(this).binding;if("string"==typeof e.value)return x(e.value);x(e.value.el||e.value.element,e.value)}var T={bind:function(t,e){L(t).binding=e,y.on(t,"click",O)},unbind:function(t){!function(t){for(var e=0;e<$.length;++e)if($[e].el===t)return $.splice(e,1),!0}(t),y.off(t,"click",O)},update:function(t,e){L(t).binding=e},scrollTo:x,bindings:$},k=function(t,e){e&&_(e),t.directive("scroll-to",T),t.prototype.$scrollTo=T.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=T,window.VueScrollTo.setDefaults=_,window.Vue.use(k)),T.install=k,T}()},KTTK:function(t,e,a){"use strict";a.d(e,"e",function(){return o}),a.d(e,"c",function(){return r}),a.d(e,"d",function(){return i}),a.d(e,"b",function(){return s}),a.d(e,"a",function(){return l}),a.d(e,"f",function(){return c});var n=a("t3Un");function o(){return Object(n.a)({url:"/payment-methods",method:"GET"})}function r(){return Object(n.a)({url:"/languages",method:"GET"})}function i(t){return Object(n.a)({url:"/users/"+t+"/languages",method:"GET"})}function s(){return Object(n.a)({url:"/currencies",method:"GET"})}function l(){return Object(n.a)({url:"/countries",method:"GET"})}function c(){return Object(n.a)({url:"time-zones",method:"GET"})}},ODRq:function(t,e,a){t.exports={default:a("UDep"),__esModule:!0}},UDep:function(t,e,a){a("wgeU"),a("FlQf"),a("bBy9"),a("g33z"),a("XLbu"),a("/h46"),a("dVTT"),t.exports=a("WEpk").Map},XLbu:function(t,e,a){var n=a("Y7ZC");n(n.P+n.R,"Map",{toJSON:a("8iia")("Map")})},ZySA:function(t,e,a){"use strict";var n=a("P2sY"),o=a.n(n),r=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var n=o()({},e.value),r=o()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var s=i.getBoundingClientRect(),l=i.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",i.appendChild(l)),r.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}},!1)}}),i=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(i)),r.install=i;e.a=r},dVTT:function(t,e,a){a("aPfg")("Map")},g33z:function(t,e,a){"use strict";var n=a("Wu5q"),o=a("n3ko");t.exports=a("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=n.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return n.def(o(this,"Map"),0===t?0:t,e)}},n,!0)},"iU+G":function(t,e,a){"use strict";var n=a("14Xm"),o=a.n(n),r=a("D3Ub"),i=a.n(r),s=a("ODRq"),l=a.n(s),c=a("LvDl"),u=a("ZySA"),p=a("Q2AE"),d=a("KTTK"),m=a("/Kw/"),f=a("8Tyq"),b=a.n(f),g={directives:{waves:u.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{tempData:{selectedLanguages:[],translations:{name:{},description:{}},info:{country:{id:860,name:"",code:""},inn:"",address:"",district:"",region:"",phone:"",email:"",postcode:""},billingInfo:{country:{id:860,name:"",code:""},inn:"",postcode:"",address:"",district:"",region:"",phone:"",email:""},paymentMethods:[],timeZone:{id:"",name:"",code:""}},postedFormData:{},languagesList:[],languagesMap:new l.a,currenciesList:[],paymentMethodsList:[],countriesList:[],timeZonesList:[],isLoading:!0,buttonLoading:!1}},created:function(){var t=this;return i()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.init();case 3:if(!t.isEdit){e.next=9;break}return a=t.$route.params&&t.$route.params.companyId,e.next=7,t.fillForm(a);case 7:e.next=11;break;case 9:t.postedFormData={},t.tempData.selectedLanguages.push(t.languagesList[0].code);case 11:t.isLoading=!1;case 12:case"end":return e.stop()}},e,t)}))()},methods:{compareByOrd:function(t,e){return t.ord-e.ord},getValidationClass:function(t){if(this.errors.first(t))return"is-error"},hasValidationError:function(){return!!this.errors.all().length},init:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)().then(function(e){t.paymentMethodsList=e.data.payload.paymentMethods,t.paymentMethodsList=t.paymentMethodsList.sort(t.compareByOrd)});case 2:return e.next=4,Object(d.f)().then(function(e){t.timeZonesList=e.data.payload.timeZones,t.tempData.timeZone.id=t.timeZonesList[0].id});case 4:return e.next=6,Object(d.d)(t.getOwnerId()).then(function(e){t.languagesList=e.data.payload.languages,t.languagesList.forEach(function(e){t.languagesMap.set(e.code,e)})});case 6:return e.next=8,Object(d.a)().then(function(e){t.countriesList=e.data.payload.countries});case 8:case"end":return e.stop()}},e,t)}))()},getOwnerId:function(){return p.a.getters.ownerId},fillForm:function(t){var e=this;return i()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(m.d)(e.getOwnerId(),t).then(function(t){e.fillTempFormData(t.data.payload.company)}));case 1:case"end":return a.stop()}},a,e)}))()},updateData:function(){var t=this;this.$validator.validateAll().then(function(e){e?(t.postedFormData.id=t.tempData.id,t.postedFormData.translations=Object(c.cloneDeep)(t.transformTempDataToCompanyTranslations(t.tempData)),t.postedFormData.info=Object(c.cloneDeep)(t.tempData.info),t.postedFormData.billingInfo=Object(c.cloneDeep)(t.tempData.billingInfo),t.postedFormData.timeZone=Object(c.cloneDeep)(t.tempData.timeZone),t.postedFormData.languages=t.tempData.selectedLanguages.map(function(t){return{languageCode:t}}),t.postedFormData.paymentMethods=t.tempData.paymentMethods.map(function(t){return{id:t}}),t.buttonLoading=!0,Object(m.f)(t.getOwnerId(),t.postedFormData).then(function(e){200===e.data.code&&(t.buttonLoading=!1,t.$router.push("/companies/index"),t.$notify({title:t.$t("notification.success"),message:t.$t("company.editSuccess"),type:"success",duration:2e3}))}).catch(function(){t.buttonLoading=!1})):b.a.scrollTo("#"+t.errors.items[0].field,500)})},createData:function(){var t=this;this.$validator.validateAll().then(function(e){if(e)return t.postedFormData.translations=Object(c.cloneDeep)(t.transformTempDataToCompanyTranslations(t.tempData)),t.postedFormData.info=Object(c.cloneDeep)(t.tempData.info),t.postedFormData.billingInfo=Object(c.cloneDeep)(t.tempData.billingInfo),t.postedFormData.timeZone=Object(c.cloneDeep)(t.tempData.timeZone),t.postedFormData.languages=t.tempData.selectedLanguages.map(function(t){return{languageCode:t}}),t.postedFormData.paymentMethods=Object(c.cloneDeep)(t.tempData.paymentMethods),t.postedFormData.paymentMethods=t.tempData.paymentMethods.map(function(t){return{id:t}}),t.buttonLoading=!0,Object(m.a)(t.getOwnerId(),t.postedFormData).then(function(e){200===e.data.code&&(t.buttonLoading=!1,t.$router.push({name:"CompanyDetail",params:{companyId:e.data.payload.company.id}}),t.$notify({title:t.$t("notification.success"),message:t.$t("company.addSuccess"),type:"success",duration:2e3}))}).catch(function(){t.buttonLoading=!1});b.a.scrollTo("#"+t.errors.items[0].field,500)})},transformTempDataToCompanyTranslations:function(t){var e=[];return this.tempData.selectedLanguages.forEach(function(a){e.push({languageCode:a,name:t.translations.name[a],description:t.translations.description[a]})}),e},fillTempFormData:function(t){var e=this,a={name:{},description:{}};this.tempData.id=Object(c.cloneDeep)(t.id),this.tempData.info=Object(c.cloneDeep)(t.info),this.tempData.billingInfo=Object(c.cloneDeep)(t.billingInfo),this.tempData.timeZone=Object(c.cloneDeep)(t.timeZone),this.tempData.paymentMethods=t.paymentMethods.map(function(t){return t.id}),t.translations.forEach(function(t){e.tempData.selectedLanguages.push(t.languageCode),a.name[t.languageCode]=t.name,a.description[t.languageCode]=t.description}),this.tempData.translations=Object(c.cloneDeep)(a)}}},v=(a("/1rz"),a("KHd+")),h=Object(v.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"edit-form-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.isEdit?t.$t("company.edit"):t.$t("company.add"))+"\n    ")]),t._v(" "),a("el-form",{ref:"dataForm",staticClass:"form-container",attrs:{"label-position":"top","label-width":"100px"}},[t.languagesList.length>1?a("el-form-item",{class:t.getValidationClass("languages"),attrs:{id:"languages",label:t.$t("table.attribute.languages"),prop:"languages"}},[a("el-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{multiple:"",placeholder:"Select",name:"languages"},model:{value:t.tempData.selectedLanguages,callback:function(e){t.$set(t.tempData,"selectedLanguages",e)},expression:"tempData.selectedLanguages"}},t._l(t.languagesList,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code,value:e.code}},[t._v(t._s(e.name))])})),t._v(" "),a("span",{staticClass:"el-form-item__error"},[t._v(t._s(t.errors.first("languages")))])],1):t._e(),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},t._l(t.tempData.selectedLanguages,function(e){return a("el-tab-pane",{key:e,attrs:{label:t.languagesMap.get(e).name}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:24}},[a("el-form-item",{class:t.getValidationClass("name-"+e),attrs:{id:"name-"+e,label:t.$t("table.attribute.name"),prop:"translations.name"}},[a("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"name-"+e},model:{value:t.tempData.translations.name[e],callback:function(a){t.$set(t.tempData.translations.name,e,a)},expression:"tempData.translations.name[lang]"}}),t._v(" "),t.errors.first("name-"+e)?a("span",{staticClass:"el-form-item__error"},[t._v(" Name field is required ")]):t._e()],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.attribute.description"),prop:"description"}},[a("el-input",{attrs:{rows:5,type:"textarea"},model:{value:t.tempData.translations.description[e],callback:function(a){t.$set(t.tempData.translations.description,e,a)},expression:"tempData.translations.description[lang]"}})],1)],1)})),t._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{class:t.getValidationClass("timeZone"),attrs:{id:"timeZone",label:t.$t("table.attribute.timeZone"),prop:"timeZone"}},[a("el-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"timeZone",placeholder:"Select"},model:{value:t.tempData.timeZone.id,callback:function(e){t.$set(t.tempData.timeZone,"id",e)},expression:"tempData.timeZone.id"}},t._l(t.timeZonesList,function(t){return a("el-option",{key:t.id,attrs:{label:t.code+" "+t.name,value:t.id}})})),t._v(" "),t.errors.first("timeZone")?a("span",{staticClass:"el-form-item__error"},[t._v(" Time zone is required ")]):t._e()],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{class:t.getValidationClass("paymentMethods"),attrs:{id:"paymentMethods",label:t.$t("table.attribute.paymentMethods"),prop:"paymentMethod"}},[a("el-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"paymentMethods",multiple:"",placeholder:"Select"},model:{value:t.tempData.paymentMethods,callback:function(e){t.$set(t.tempData,"paymentMethods",e)},expression:"tempData.paymentMethods"}},t._l(t.paymentMethodsList,function(e){return a("el-checkbox",{key:e.id,attrs:{label:e.id}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})),t._v(" "),t.errors.first("paymentMethods")?a("span",{staticClass:"el-form-item__error"},[t._v(" Payment methods is required ")]):t._e()],1)],1)],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("table.attribute.info")))])]),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{class:t.getValidationClass("country"),attrs:{id:"country",label:t.$t("table.attribute.country"),prop:"country"}},[a("el-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"country","popper-class":"country-select",placeholder:"Select"},model:{value:t.tempData.info.country.id,callback:function(e){t.$set(t.tempData.info.country,"id",e)},expression:"tempData.info.country.id"}},t._l(t.countriesList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.errors.first("country")?a("span",{staticClass:"el-form-item__error"},[t._v("Country is required ")]):t._e()],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.region"),prop:"region"}},[a("el-input",{model:{value:t.tempData.info.region,callback:function(e){t.$set(t.tempData.info,"region",e)},expression:"tempData.info.region"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.district"),prop:"district"}},[a("el-input",{model:{value:t.tempData.info.district,callback:function(e){t.$set(t.tempData.info,"district",e)},expression:"tempData.info.district"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.address"),prop:"address"}},[a("el-input",{model:{value:t.tempData.info.address,callback:function(e){t.$set(t.tempData.info,"address",e)},expression:"tempData.info.address"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.inn"),prop:"inn"}},[a("el-input",{model:{value:t.tempData.info.inn,callback:function(e){t.$set(t.tempData.info,"inn",e)},expression:"tempData.info.inn"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.postcode"),prop:"postcode"}},[a("el-input",{model:{value:t.tempData.info.postcode,callback:function(e){t.$set(t.tempData.info,"postcode",e)},expression:"tempData.info.postcode"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.email"),prop:"info.email"}},[a("el-input",{attrs:{name:"email"},model:{value:t.tempData.info.email,callback:function(e){t.$set(t.tempData.info,"email",e)},expression:"tempData.info.email"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.phone"),prop:"phone"}},[a("el-input",{model:{value:t.tempData.info.phone,callback:function(e){t.$set(t.tempData.info,"phone",e)},expression:"tempData.info.phone"}})],1)],1)],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("table.attribute.billingInfo")))])]),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.country"),prop:"country"}},[a("el-select",{attrs:{"popper-class":"country-select",placeholder:"Select"},model:{value:t.tempData.billingInfo.country.id,callback:function(e){t.$set(t.tempData.billingInfo.country,"id",e)},expression:"tempData.billingInfo.country.id"}},t._l(t.countriesList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.region"),prop:"region"}},[a("el-input",{model:{value:t.tempData.billingInfo.region,callback:function(e){t.$set(t.tempData.billingInfo,"region",e)},expression:"tempData.billingInfo.region"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.district"),prop:"district"}},[a("el-input",{model:{value:t.tempData.billingInfo.district,callback:function(e){t.$set(t.tempData.billingInfo,"district",e)},expression:"tempData.billingInfo.district"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.address"),prop:"address"}},[a("el-input",{model:{value:t.tempData.billingInfo.address,callback:function(e){t.$set(t.tempData.billingInfo,"address",e)},expression:"tempData.billingInfo.address"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.inn"),prop:"inn"}},[a("el-input",{model:{value:t.tempData.billingInfo.inn,callback:function(e){t.$set(t.tempData.billingInfo,"inn",e)},expression:"tempData.billingInfo.inn"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.postcode"),prop:"postcode"}},[a("el-input",{model:{value:t.tempData.billingInfo.postcode,callback:function(e){t.$set(t.tempData.billingInfo,"postcode",e)},expression:"tempData.billingInfo.postcode"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.email"),prop:"email"}},[a("el-input",{model:{value:t.tempData.billingInfo.email,callback:function(e){t.$set(t.tempData.billingInfo,"email",e)},expression:"tempData.billingInfo.email"}})],1)],1),t._v(" "),a("el-col",{attrs:{sm:12}},[a("el-form-item",{attrs:{label:t.$t("table.attribute.phone"),prop:"phone"}},[a("el-input",{model:{value:t.tempData.billingInfo.phone,callback:function(e){t.$set(t.tempData.billingInfo,"phone",e)},expression:"tempData.billingInfo.phone"}})],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("router-link",{attrs:{to:"/companies/index"}},[a("el-button",{attrs:{type:"default"}},[t._v(t._s(t.$t("table.cancel")))])],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.buttonLoading,type:"primary"},on:{click:function(e){t.isEdit?t.updateData():t.createData()}}},[t._v(t._s(t.$t("table.save")))])],1)],1)],1)},[],!1,null,null,null);h.options.__file="CompanyForm.vue";e.a=h.exports},jUE0:function(t,e,a){},xfjx:function(t,e,a){}}]);