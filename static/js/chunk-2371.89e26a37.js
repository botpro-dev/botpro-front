(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2371"],{"/Kw/":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"b",function(){return u});var a=n("t3Un");function r(t,e){return Object(a.a)({url:"/companies",method:"POST",params:{ownerId:t},data:e})}function o(t){return Object(a.a)({url:"/companies",method:"GET",params:{ownerId:t}})}function i(t,e){return Object(a.a)({url:"/companies/"+e,method:"GET",params:{ownerId:t}})}function s(t,e){return Object(a.a)({url:"/companies/"+e+"/languages",method:"GET",params:{ownerId:t}})}function c(t,e){return Object(a.a)({url:"/companies/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function u(t,e){return Object(a.a)({url:"/companies/"+e,method:"DELETE",params:{ownerId:t},data:{ownerId:t}})}},"/h46":function(t,e,n){n("cHUd")("Map")},"2ouk":function(t,e,n){"use strict";var a=n("34B4");n.n(a).a},"34B4":function(t,e,n){},"8Tyq":function(t,e,n){
/*!
  * vue-scrollto v2.15.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var n=4,a=.001,r=1e-7,o=10,i=11,s=1/(i-1),c="function"==typeof Float32Array;function u(t,e){return 1-3*e+3*t}function l(t,e){return 3*e-6*t}function d(t){return 3*t}function f(t,e,n){return((u(e,n)*t+l(e,n))*t+d(e))*t}function p(t,e,n){return 3*u(e,n)*t*t+2*l(e,n)*t+d(e)}function m(t){return t}var g=function(t,e,u,l){if(!(0<=t&&t<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&u===l)return m;for(var d=c?new Float32Array(i):new Array(i),g=0;g<i;++g)d[g]=f(g*s,t,u);function v(e){for(var c=0,l=1,m=i-1;l!==m&&d[l]<=e;++l)c+=s;var g=(e-d[--l])/(d[l+1]-d[l]),v=c+g*s,h=p(v,t,u);return h>=a?function(t,e,a,r){for(var o=0;o<n;++o){var i=p(e,a,r);if(0===i)return e;var s=f(e,a,r)-t;e-=s/i}return e}(e,v,t,u):0===h?v:function(t,e,n,a,i){var s,c,u=0;do{(s=f(c=e+(n-e)/2,a,i)-t)>0?n=c:e=c}while(Math.abs(s)>r&&++u<o);return c}(e,c,c+s,t,u)}return function(t){return 0===t?0:1===t?1:f(v(t),e,l)}},v={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},h=!1;try{var b=Object.defineProperty({},"passive",{get:function(){h=!0}});window.addEventListener("test",null,b)}catch(t){}var y={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)t.addEventListener(e[r],n,!!h&&a)},off:function(t,e,n){e instanceof Array||(e=[e]);for(var a=0;a<e.length;a++)t.removeEventListener(e[a],n)},cumulativeOffset:function(t){var e=0,n=0;do{e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:n}}},w=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],D={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function T(t){D=e({},D,t)}var E=function(){var e,n,a,r,o,i,s,c,u,l,d,f,p,m,h,b,T,E,L,I,O,_,x,F,C=function(t){s&&(I=t,L=!0)};function $(t){if(L)return j();_||(_=t),x=t-_,F=Math.min(x/a,1),F=O(F),k(n,h+E*F,p+T*F),x<a?window.requestAnimationFrame($):j()}function j(){L||k(n,b,m),_=!1,y.off(n,w,C),L&&l&&l(I,e),!L&&u&&u(e)}function k(t,e,n){f&&(t.scrollTop=e),d&&(t.scrollLeft=n),"body"===t.tagName.toLowerCase()&&(f&&(document.documentElement.scrollTop=e),d&&(document.documentElement.scrollLeft=n))}return function(_,x){var F=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===t(x)?F=x:"number"==typeof x&&(F.duration=x),!(e=y.$(_)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+_);n=y.$(F.container||D.container),a=F.duration||D.duration,r=F.easing||D.easing,o=F.offset||D.offset,i=F.hasOwnProperty("force")?!1!==F.force:D.force,s=F.hasOwnProperty("cancelable")?!1!==F.cancelable:D.cancelable,c=F.onStart||D.onStart,u=F.onDone||D.onDone,l=F.onCancel||D.onCancel,d=void 0===F.x?D.x:F.x,f=void 0===F.y?D.y:F.y;var j=y.cumulativeOffset(n),k=y.cumulativeOffset(e);if("function"==typeof o&&(o=o()),h=function(t){var e=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}(n),b=k.top-j.top+o,p=function(t){var e=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}(n),m=k.left-j.left+o,L=!1,E=b-h,T=m-p,!i){var S=h,M=S+n.offsetHeight,P=b,q=P+e.offsetHeight;if(P>=S&&q<=M)return void u(e)}return"string"==typeof r&&(r=v[r]||v.ease),O=g.apply(g,r),E||T?(c&&c(e),y.on(n,w,C,{passive:!0}),window.requestAnimationFrame($),function(){I=null,L=!0}):void 0}}(),L=[];function I(t){var e=function(t){for(var e=0;e<L.length;++e)if(L[e].el===t)return L[e]}(t);return e||(L.push(e={el:t,binding:{}}),e)}function O(t){t.preventDefault();var e=I(this).binding;if("string"==typeof e.value)return E(e.value);E(e.value.el||e.value.element,e.value)}var _={bind:function(t,e){I(t).binding=e,y.on(t,"click",O)},unbind:function(t){!function(t){for(var e=0;e<L.length;++e)if(L[e].el===t)return L.splice(e,1),!0}(t),y.off(t,"click",O)},update:function(t,e){I(t).binding=e},scrollTo:E,bindings:L},x=function(t,e){e&&T(e),t.directive("scroll-to",_),t.prototype.$scrollTo=_.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=_,window.VueScrollTo.setDefaults=T,window.Vue.use(x)),_.install=x,_}()},"9nBK":function(t,e,n){"use strict";var a=n("14Xm"),r=n.n(a),o=n("D3Ub"),i=n.n(o),s=n("ODRq"),c=n.n(s),u=n("ZySA"),l=n("Q2AE"),d=n("LvDl"),f=n.n(d),p=n("KTTK"),m=n("/Kw/"),g=n("lelH"),v=n("J00j"),h=n("kP7t"),b=n("jWXv"),y=n.n(b);function w(t){var e=new y.a,n=new y.a;t.forEach(function(t){t.length>1?(e.add(t[0]),n.add(t[1])):e.add(t[0])});var a=[],r=[];return e.forEach(function(t){a.push({regionId:t})}),n.forEach(function(t){r.push({districtId:t})}),{regions:a,districts:r}}var D=n("8Tyq"),T=n.n(D),E={directives:{waves:u.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postedFormData:{info:{}},tempData:{servingRegions:[],servingDistricts:[],elCascaderData:[],selectedLanguages:[],translations:{name:{}}},companies:[],companyId:this.$route.params&&this.$route.params.companyId,branchId:this.$route.params&&this.$route.params.branchId,languagesList:[],languagesMap:new c.a,countriesList:[],regionsList:null,districtsList:null,isLoading:!0,buttonLoading:!1}},created:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.init();case 3:if(!t.isEdit){e.next=6;break}return e.next=6,t.fillForm();case 6:if(!(t.companyId&&t.companyId.length>0)){e.next=9;break}return e.next=9,t.fillCompanyLanguages(t.companyId);case 9:t.isLoading=!1;case 10:case"end":return e.stop()}},e,t)}))()},methods:{changeCompany:function(t){var e=this;return i()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.fillCompanyLanguages(t);case 3:e.isLoading=!1;case 4:case"end":return n.stop()}},n,e)}))()},getValidationClass:function(t){if(this.errors.first(t))return"is-error"},hasValidationError:function(){return!!this.errors.all().length},init:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(t.getOwnerId()).then(function(e){t.companies=e.data.payload.companies});case 2:return e.next=4,Object(p.a)().then(function(e){t.countriesList=e.data.payload.countries});case 4:return e.next=6,Object(v.c)(t.getOwnerId()).then(function(e){t.regionsList=e.data.payload.regions});case 6:return e.next=8,Object(h.c)(t.getOwnerId()).then(function(e){t.districtsList=e.data.payload.districts});case 8:case"end":return e.stop()}},e,t)}))()},getOwnerId:function(){return l.a.getters.ownerId},fillForm:function(){var t=this;return Object(g.d)(this.getOwnerId(),this.branchId).then(function(e){var n=e.data.payload.branch,a=e.data.payload.branch.translations.map(function(t){return t.language});t.languagesList=f.a.unionBy(a,t.languagesList,"code"),t.languagesList.forEach(function(e){t.languagesMap.set(e.code,e)}),t.postedFormData.info=f.a.cloneDeep(n.info),t.postedFormData.info.country=n.info.country.id,t.postedFormData.id=n.id,t.tempData.selectedLanguages=a.map(function(t){return t.code}),t.companyId=n.company.id,t.tempData.translations=f.a.cloneDeep(t.companyTranslationsToTempData(n.translations)),t.tempData.elCascaderData=function(t,e){var n=[];return t.forEach(function(t){n.push([t.id])}),e.forEach(function(t){n.push([t.regionId,t.id])}),n}(n.servingRegions,n.servingDistricts)})},fillCompanyLanguages:function(t){var e=this;return Object(m.e)(this.getOwnerId(),t).then(function(t){e.languagesList=t.data.payload.languages,e.languagesList.forEach(function(t){e.languagesMap.set(t.code,t)})}).catch(function(){e.$router.push({name:"branchCreate"})})},updateData:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){t.postedFormData.servingRegion=t.servingRegion,t.postedFormData.company=t.companyId,t.postedFormData.translations=f.a.cloneDeep(t.tempDataToCompanyTranslations(t.tempData));var n=w(t.tempData.elCascaderData);return t.postedFormData.servingRegions=n.regions,t.postedFormData.servingDistricts=n.districts,t.buttonLoading=!0,Object(g.e)(t.getOwnerId(),t.postedFormData).then(function(e){200===e.data.code&&(t.$router.push({name:"CompanyBranches",params:{companyId:t.companyId}}),t.$notify({title:t.$t("notification.success"),message:t.$t("branch.editSuccess"),type:"success",duration:2e3}),t.buttonLoading=!1)}).catch(function(){t.buttonLoading=!1})}T.a.scrollTo("#"+t.errors.items[0].field,500)})},createData:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){t.postedFormData.company=t.companyId,t.postedFormData.translations=f.a.cloneDeep(t.tempDataToCompanyTranslations(t.tempData));var n=w(t.tempData.elCascaderData);return t.postedFormData.servingRegions=n.regions,t.postedFormData.servingDistricts=n.districts,t.buttonLoading=!0,Object(g.a)(t.getOwnerId(),t.companyId,t.postedFormData).then(function(e){200===e.data.code&&(t.$router.push({name:"CompanyBranches",params:{companyId:t.companyId}}),t.$notify({title:t.$t("notification.success"),message:t.$t("branch.addSuccess"),type:"success",duration:2e3})),t.buttonLoading=!1}).catch(function(){t.buttonLoading=!1})}T.a.scrollTo("#"+t.errors.items[0].field,500)})},tempDataToCompanyTranslations:function(t){var e=[];return this.tempData.selectedLanguages.forEach(function(n){e.push({languageCode:n,name:t.translations.name[n]})}),e},companyTranslationsToTempData:function(t){var e={name:{}};return t.forEach(function(t){e.name[t.languageCode]=t.name}),e},prepareDataForElCascader:function(){return this.isLoading?[]:function(t,e){var n=new c.a;t.forEach(function(t){n.set(t.id,{value:t.id,label:t.name})}),e.forEach(function(t){var e=t.region.id;n.get(e).children||(n.get(e).children=[]),n.get(e).children.push({value:t.id,label:t.name})});var a=[];return n.forEach(function(t,e){a.push(t)}),a}(this.regionsList,this.districtsList)}}},L=(n("2ouk"),n("KHd+")),I=Object(L.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"edit-form-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.isEdit?t.$t("table.edit"):t.$t("table.add")))])]),t._v(" "),n("el-form",{ref:"dataForm",staticClass:"form-container",attrs:{model:t.postedFormData,"label-position":"top","label-width":"150px"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("company.name")}},[n("el-select",{on:{change:t.changeCompany},model:{value:t.companyId,callback:function(e){t.companyId=e},expression:"companyId"}},t._l(t.companies,function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})}))],1)],1),t._v(" "),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.languages"),prop:"languages"}},[t.companyId?n("el-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{multiple:"",placeholder:"Select",name:"languages"},model:{value:t.tempData.selectedLanguages,callback:function(e){t.$set(t.tempData,"selectedLanguages",e)},expression:"tempData.selectedLanguages"}},t._l(t.languagesList,function(e){return n("el-checkbox",{key:e.code,attrs:{label:e.code,value:e.code}},[t._v(t._s(e.name))])})):t._e(),t._v(" "),n("span",{staticClass:"el-form-item__error"},[t._v(t._s(t.errors.first("languages")))])],1)],1)],1),t._v(" "),t.companyId&&t.tempData.selectedLanguages?n("el-tabs",{attrs:{type:"border-card"}},t._l(t.tempData.selectedLanguages,function(e){return n("el-tab-pane",{key:e,attrs:{label:t.languagesMap.get(e).name}},[n("el-form-item",{class:t.getValidationClass("name-"+e),attrs:{id:"name-"+e,label:t.$t("table.attribute.name"),prop:"name"}},[n("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"name-"+e},model:{value:t.tempData.translations.name[e],callback:function(n){t.$set(t.tempData.translations.name,e,n)},expression:"tempData.translations.name[lang]"}}),t._v(" "),t.errors.first("name-"+e)?n("span",{staticClass:"el-form-item__error"},[t._v(" "+t._s(t.$t("validate.nameReqired"))+" ")]):t._e()],1)],1)})):t._e(),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:"Regions/districts",prop:"servingRegions"}},[n("el-cascader-panel",{attrs:{options:t.prepareDataForElCascader(),props:{multiple:!0},"collapse-tags":""},model:{value:t.tempData.elCascaderData,callback:function(e){t.$set(t.tempData,"elCascaderData",e)},expression:"tempData.elCascaderData"}})],1)],1)],1),t._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("table.attribute.info")))])]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{class:t.getValidationClass("info-country"),attrs:{id:"info-country",label:t.$t("table.attribute.country"),prop:"country"}},[n("el-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"info-country",placeholder:"Select"},model:{value:t.postedFormData.info.country,callback:function(e){t.$set(t.postedFormData.info,"country",e)},expression:"postedFormData.info.country"}},t._l(t.countriesList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.errors.first("info-country")?n("span",{staticClass:"el-form-item__error"},[t._v(" Country is required ")]):t._e()],1)],1),t._v(" "),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.region"),prop:"region"}},[n("el-input",{model:{value:t.postedFormData.info.region,callback:function(e){t.$set(t.postedFormData.info,"region",e)},expression:"postedFormData.info.region"}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.district"),prop:"district"}},[n("el-input",{model:{value:t.postedFormData.info.district,callback:function(e){t.$set(t.postedFormData.info,"district",e)},expression:"postedFormData.info.district"}})],1)],1),t._v(" "),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.address"),prop:"address"}},[n("el-input",{model:{value:t.postedFormData.info.address,callback:function(e){t.$set(t.postedFormData.info,"address",e)},expression:"postedFormData.info.address"}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.postcode"),prop:"postcode"}},[n("el-input",{model:{value:t.postedFormData.info.postcode,callback:function(e){t.$set(t.postedFormData.info,"postcode",e)},expression:"postedFormData.info.postcode"}})],1)],1),t._v(" "),n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.email"),prop:"email"}},[n("el-input",{model:{value:t.postedFormData.info.email,callback:function(e){t.$set(t.postedFormData.info,"email",e)},expression:"postedFormData.info.email"}})],1)],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{sm:12}},[n("el-form-item",{attrs:{label:t.$t("table.attribute.phone"),prop:"phone"}},[n("el-input",{model:{value:t.postedFormData.info.phone,callback:function(e){t.$set(t.postedFormData.info,"phone",e)},expression:"postedFormData.info.phone"}})],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"card-footer"},[n("router-link",{attrs:{to:{name:"CompanyBranches",params:{companyId:t.companyId}}}},[n("el-button",{attrs:{type:"default"}},[t._v(t._s(t.$t("table.cancel")))])],1),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.buttonLoading,type:"primary"},on:{click:function(e){t.isEdit?t.updateData():t.createData()}}},[t._v(t._s(t.$t("table.save")))])],1)],1)],1)},[],!1,null,null,null);I.options.__file="BranchForm.vue";e.a=I.exports},J00j:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return c});var a=n("t3Un");function r(t){return Object(a.a)({url:"/regions",method:"GET",params:{ownerId:t}})}function o(t,e){return Object(a.a)({url:"/regions",method:"POST",data:e,params:{ownerId:t}})}function i(t,e){return Object(a.a)({url:"/regions/"+e,method:"DELETE",params:{ownerId:t}})}function s(t,e){return Object(a.a)({url:"/regions/"+e,method:"GET",params:{ownerId:t}})}function c(t,e){return Object(a.a)({url:"/regions/"+e.id,method:"PUT",data:e,params:{ownerId:t}})}},KTTK:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"a",function(){return c}),n.d(e,"f",function(){return u});var a=n("t3Un");function r(){return Object(a.a)({url:"/payment-methods",method:"GET"})}function o(){return Object(a.a)({url:"/languages",method:"GET"})}function i(t){return Object(a.a)({url:"/users/"+t+"/languages",method:"GET"})}function s(){return Object(a.a)({url:"/currencies",method:"GET"})}function c(){return Object(a.a)({url:"/countries",method:"GET"})}function u(){return Object(a.a)({url:"time-zones",method:"GET"})}},ODRq:function(t,e,n){t.exports={default:n("UDep"),__esModule:!0}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},XLbu:function(t,e,n){var a=n("Y7ZC");a(a.P+a.R,"Map",{toJSON:n("8iia")("Map")})},ZySA:function(t,e,n){"use strict";var a=n("P2sY"),r=n.n(a),o=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var a=r()({},e.value),o=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var s=i.getBoundingClientRect(),c=i.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":((c=document.createElement("span")).className="waves-ripple",c.style.height=c.style.width=Math.max(s.width,s.height)+"px",i.appendChild(c)),o.type){case"center":c.style.top=s.height/2-c.offsetHeight/2+"px",c.style.left=s.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(n.pageY-s.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(n.pageX-s.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=o.color,c.className="waves-ripple z-active",!1}},!1)}}),i=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(i)),o.install=i;e.a=o},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var a=n("Wu5q"),r=n("n3ko");t.exports=n("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=a.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return a.def(r(this,"Map"),0===t?0:t,e)}},a,!0)},jUE0:function(t,e,n){},kP7t:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return c});var a=n("t3Un");function r(t,e){var n=e?{ownerId:t,regionId:e}:{ownerId:t};return Object(a.a)({url:"/districts",method:"GET",params:n})}function o(t,e,n){return n.region=e,Object(a.a)({url:"/districts",method:"POST",data:n,params:{ownerId:t}})}function i(t,e){return Object(a.a)({url:"/districts/"+e,method:"DELETE",params:{ownerId:t}})}function s(t,e,n){return Object(a.a)({url:"/districts/"+n,method:"GET",params:{ownerId:t,regionId:e}})}function c(t,e,n){return n.region=e,Object(a.a)({url:"/districts/"+n.id,method:"PUT",data:n,params:{ownerId:t}})}},lelH:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return c});var a=n("t3Un");function r(t,e,n){return Object(a.a)({url:"/branches",method:"POST",params:{ownerId:t,companyId:e},data:n})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?{ownerId:t,companyId:e}:{ownerId:t};return Object(a.a)({url:"/branches",method:"GET",params:n})}function i(t,e){return Object(a.a)({url:"/branches/"+e,method:"GET",params:{ownerId:t}})}function s(t,e){return Object(a.a)({url:"/branches/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function c(t,e){return Object(a.a)({url:"/branches/"+e,method:"DELETE",params:{ownerId:t}})}}}]);