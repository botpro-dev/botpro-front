(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7432","chunk-fc8a"],{"/Kw/":function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return o}),a.d(e,"e",function(){return s}),a.d(e,"f",function(){return l}),a.d(e,"b",function(){return c});var n=a("t3Un");function r(t,e){return Object(n.a)({url:"/companies",method:"POST",params:{ownerId:t},data:e})}function i(t){return Object(n.a)({url:"/companies",method:"GET",params:{ownerId:t}})}function o(t,e){return Object(n.a)({url:"/companies/"+e,method:"GET",params:{ownerId:t}})}function s(t,e){return Object(n.a)({url:"/companies/"+e+"/languages",method:"GET",params:{ownerId:t}})}function l(t,e){return Object(n.a)({url:"/companies/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function c(t,e){return Object(n.a)({url:"/companies/"+e,method:"DELETE",params:{ownerId:t},data:{ownerId:t}})}},"/h46":function(t,e,a){a("cHUd")("Map")},"5Jq4":function(t,e,a){"use strict";a.r(e);var n=a("14Xm"),r=a.n(n),i=a("D3Ub"),o=a.n(i),s=a("ODRq"),l=a.n(s),c=a("Q2AE"),u=a("KTTK"),d=a("/Kw/"),p={components:{companyBranchesTable:a("8EvD").default},data:function(){return{companyId:this.$route.params&&this.$route.params.companyId,botLink:"",pageData:{info:{country:{}},billingInfo:{country:{}}},languagesList:[],languagesMap:new l.a,isLoading:!0}},created:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.init();case 3:return e.next=5,t.fillPage(t.companyId);case 5:t.isLoading=!1;case 6:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return c.a.getters.ownerId},init:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)().then(function(e){t.languagesList=e.data.payload.languages,t.languagesList.forEach(function(e){t.languagesMap.set(e.code,e)})});case 2:case"end":return e.stop()}},e,t)}))()},fillPage:function(t){var e=this;return o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.d)(e.getOwnerId(),t).then(function(t){e.pageData=t.data.payload.company});case 2:null===e.pageData.bot?e.botLink="/companies/"+e.companyId+"/bot/create":e.botLink="/companies/"+e.companyId+"/bot/"+e.pageData.bot.id+"/edit";case 3:case"end":return a.stop()}},a,e)}))()},getBillingInfo:function(t){var e=[],a=[this.$t("table.attribute.country"),this.$t("table.attribute.address"),this.$t("table.attribute.district"),this.$t("table.attribute.phone"),this.$t("table.attribute.email"),this.$t("table.attribute.postcode")],n=[t.country.name,t.address,t.region,t.phone,t.email,t.postcode];return a.forEach(function(t){e.push({field:t,value:n[a.indexOf(t)]})}),e},getInfo:function(t){var e=[],a=[this.$t("table.attribute.country"),this.$t("table.attribute.address"),this.$t("table.attribute.district"),this.$t("table.attribute.phone"),this.$t("table.attribute.email"),this.$t("table.attribute.postcode")],n=[t.country.name,t.address,t.region,t.phone,t.email,t.postcode];return a.forEach(function(t){e.push({field:t,value:n[a.indexOf(t)]})}),e},getTranslations:function(t){var e=[],a=[this.$t("table.attribute.name"),this.$t("table.attribute.about"),this.$t("table.attribute.description")],n=[t.name,t.about,t.description];return a.forEach(function(t){e.push({field:t,value:n[a.indexOf(t)]})}),e}}},f=(a("7yOQ"),a("KHd+")),h=Object(f.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"detailCompany-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$t("company.companyDetail")))])]),t._v(" "),a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$t("route.company"))+"\n      ")]),t._v(" "),t._l(t.pageData.translations,function(e){return a("div",{key:e.code},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(t._s(t.languagesMap.get(e.languageCode).name))]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.getTranslations(e),"show-header":!1}},[a("el-table-column",{attrs:{prop:"field",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",width:"180"}})],1)],1)})],2),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header",shadow:"hover"},slot:"header"},[a("span",[t._v(t._s(t.$t("table.attribute.info")))])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.getInfo(t.pageData.info),"show-header":!1}},[a("el-table-column",{attrs:{prop:"field",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",width:"180"}})],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header",shadow:"hover"},slot:"header"},[a("span",[t._v(t._s(t.$t("table.attribute.billingInfo")))])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.getBillingInfo(t.pageData.billingInfo),"show-header":!1,stripe:""}},[a("el-table-column",{attrs:{prop:"field",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value",width:"180"}})],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header",shadow:"hover"},slot:"header"},[a("span",[t._v(t._s(t.$t("company.companyBot")))])]),t._v(" "),a("router-link",{attrs:{to:t.botLink}},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("company.telegramBot")))])],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header",shadow:"hover"},slot:"header"},[a("span",[t._v(t._s(t.$t("company.companyBranches")))])]),t._v(" "),a("company-branches-table"),t._v(" "),a("router-link",{attrs:{to:"/companies/"+t.companyId+"/branches"}},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("company.companyBranches")))])],1)],1)],1)],1)},[],!1,null,"f98bb4e6",null);h.options.__file="CompanyDetail.vue";var m={name:"EditForm",components:{CompanyDetail:h.exports}},b=Object(f.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("company-detail")},[],!1,null,null,null);b.options.__file="detail.vue";e.default=b.exports},"7yOQ":function(t,e,a){"use strict";var n=a("jXyE");a.n(n).a},"8EvD":function(t,e,a){"use strict";a.r(e);var n=a("14Xm"),r=a.n(n),i=a("D3Ub"),o=a.n(i),s=a("XJYT"),l=a("ZySA"),c=a("Q2AE"),u=a("Mz3J"),d=a("lelH"),p={name:"CompanyBranches",components:{Pagination:u.a},directives:{waves:l.a},data:function(){return{tableKey:0,tableData:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,currency:"",bot:{token:""}},dialogFormVisible:!1,downloadLoading:!1,companyId:this.$route.params&&this.$route.params.companyId}},created:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getOwnerId()){e.next=5;break}return t.listLoading=!1,t.$router.push("/users/index"),t.$message({showClose:!0,message:t.$t("notification.pleaseSelectOwner"),type:"error"}),e.abrupt("return");case 5:return t.listLoading=!0,e.next=8,t.fillTable();case 8:t.listLoading=!1;case 9:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return c.a.getters.ownerId},fillTable:function(){var t=this;return Object(d.c)(this.getOwnerId(),this.companyId).then(function(e){t.tableData=e.data.payload.branches,t.total=e.data.payload.branches.length})},handleFilter:function(){this.listQuery.page=1,this.fillTable()},handleDelete:function(t){var e=this;s.MessageBox.confirm(this.$t("branch.deleteConfirm",{name:t.name}),this.$t("messageBox.confirmDelete"),{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){e.deleteData(t)}).catch(function(){console.log("Cancel")})},deleteData:function(t){var e=this;Object(d.b)(this.getOwnerId(),t.id).then(function(a){if(200===a.data.code){e.$notify({title:e.$t("notification.success"),message:e.$t("company.deleteSuccess"),type:"success",duration:2e3});var n=e.tableData.indexOf(t.id);e.tableData.splice(n,1)}})},handleExport:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-3e35"),a.e("chunk-1b75")]).then(a.bind(null,"S/jZ")).then(function(e){var a=[t.$t("table.attribute.no"),t.$t("table.attribute.name")],n=t.formatJson(["no","name"],t.tableData);e.export_json_to_excel({header:a,data:n,filename:t.$t("route.branches")}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}},f=a("KHd+"),h=Object(f.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.attribute.name")},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),a("router-link",{attrs:{to:"branches/create"}},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"}},[t._v(t._s(t.$t("table.add")))])],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleExport}},[t._v(t._s(t.$t("table.export")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:t.$t("table.attribute.no"),prop:"no",sortable:"custom",align:"center",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.no))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.attribute.name"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.status"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.statusCode))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/branches/"+e.row.id+"/detail"}},[a("el-button",{attrs:{icon:"el-icon-view",type:"info"}})],1),t._v(" "),a("router-link",{attrs:{to:"branches/"+e.row.id+"/edit"}},[a("el-button",{attrs:{icon:"el-icon-edit",type:"primary"}})],1),t._v(" "),a("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}})]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.fillTable}})],1)},[],!1,null,null,null);h.options.__file="CompanyBranchesTable.vue";e.default=h.exports},HKPr:function(t,e,a){"use strict";var n=a("YPLS");a.n(n).a},KTTK:function(t,e,a){"use strict";a.d(e,"e",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return o}),a.d(e,"b",function(){return s}),a.d(e,"a",function(){return l}),a.d(e,"f",function(){return c});var n=a("t3Un");function r(){return Object(n.a)({url:"/payment-methods",method:"GET"})}function i(){return Object(n.a)({url:"/languages",method:"GET"})}function o(t){return Object(n.a)({url:"/users/"+t+"/languages",method:"GET"})}function s(){return Object(n.a)({url:"/currencies",method:"GET"})}function l(){return Object(n.a)({url:"/countries",method:"GET"})}function c(){return Object(n.a)({url:"time-zones",method:"GET"})}},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,n){return(t/=n/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function r(t,e,a){var r=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,i=t-r,o=0;e=void 0===e?500:e;!function t(){o+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(o,r,i,e)),o<e?n(t):a&&"function"==typeof a&&a()}()}var i={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},o=(a("HKPr"),a("KHd+")),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"cebf2f0c",null);s.options.__file="index.vue";e.a=s.exports},ODRq:function(t,e,a){t.exports={default:a("UDep"),__esModule:!0}},UDep:function(t,e,a){a("wgeU"),a("FlQf"),a("bBy9"),a("g33z"),a("XLbu"),a("/h46"),a("dVTT"),t.exports=a("WEpk").Map},XLbu:function(t,e,a){var n=a("Y7ZC");n(n.P+n.R,"Map",{toJSON:a("8iia")("Map")})},YPLS:function(t,e,a){},ZySA:function(t,e,a){"use strict";var n=a("P2sY"),r=a.n(n),i=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var n=r()({},e.value),i=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}),o=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;e.a=i},dVTT:function(t,e,a){a("aPfg")("Map")},g33z:function(t,e,a){"use strict";var n=a("Wu5q"),r=a("n3ko");t.exports=a("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=n.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return n.def(r(this,"Map"),0===t?0:t,e)}},n,!0)},jUE0:function(t,e,a){},jXyE:function(t,e,a){},lelH:function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"d",function(){return o}),a.d(e,"e",function(){return s}),a.d(e,"b",function(){return l});var n=a("t3Un");function r(t,e,a){return Object(n.a)({url:"/branches",method:"POST",params:{ownerId:t,companyId:e},data:a})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=e?{ownerId:t,companyId:e}:{ownerId:t};return Object(n.a)({url:"/branches",method:"GET",params:a})}function o(t,e){return Object(n.a)({url:"/branches/"+e,method:"GET",params:{ownerId:t}})}function s(t,e){return Object(n.a)({url:"/branches/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function l(t,e){return Object(n.a)({url:"/branches/"+e,method:"DELETE",params:{ownerId:t}})}}}]);