(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-184a"],{"/h46":function(t,e,n){n("cHUd")("Map")},"0shQ":function(t,e,n){"use strict";n.r(e);var a=n("14Xm"),r=n.n(a),i=n("D3Ub"),s=n.n(i),o=n("ODRq"),u=n.n(o),c=n("ZySA"),l=n("KTTK"),d=n("Mz3J"),p=n("t3Un");function f(t,e,n){return Object(p.a)({url:"/branch-items/"+e,method:"GET",params:{ownerId:t,parentId:n}})}var m=n("Q2AE"),h={name:"ComplexTable",components:{Pagination:d.a},directives:{waves:c.a},props:{branchId:{type:String,default:null}},data:function(){return{selectedImageName:"",statusList:{ACTIVE:{name:this.$t("table.statusType.active"),type:"success"},DELETED:{name:this.$t("table.statusType.deleted"),type:"success"},DISABLED:{name:this.$t("table.statusType.disabled"),type:"info"}},tableKey:0,tableData:null,total:0,dialogStatus:"",languagesList:[],languagesMap:new u.a,parentId:this.$route.query&&this.$route.query.parentId,breadcrubms:[{name:this.$t("item.parent"),id:void 0}],buttonLoading:!1,buttonDisabled:!0,tableLoading:!0}},created:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getOwnerId()){e.next=5;break}return t.listLoading=!1,t.$router.push("/users/index"),t.$message({showClose:!0,message:t.$t("notification.pleaseSelectOwner"),type:"error"}),e.abrupt("return");case 5:return t.tableLoading=!0,e.next=8,t.init();case 8:return e.next=10,t.fillTable();case 10:t.tableLoading=!1;case 11:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return m.a.getters.ownerId},getParentId:function(){return this.parentId},init:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(t.getOwnerId()).then(function(e){t.languagesList=e.data.payload.languages,t.languagesList.forEach(function(e){t.languagesMap.set(e.code,e)})});case 2:case"end":return e.stop()}},e,t)}))()},fillTable:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.getOwnerId(),t.branchId,t.getParentId()).then(function(e){t.tableData=e.data.payload.branchItems,t.fillBreadCrumb(e.data.payload.ancestors)});case 2:t.tableData.forEach(function(e){e.isSelected&&t.$refs.singleTable.toggleRowSelection(e)});case 3:case"end":return e.stop()}},e,t)}))()},fillBreadCrumb:function(t){var e=this,n=t.ids,a=t.items;n.forEach(function(t){var n=a.find(function(e){return e.id===t});e.breadcrubms.push({id:t,name:n.name})})},handleClickItem:function(t){"ITEM"!==t.typeCode&&this.$router.push({name:"BranchDetail",query:{parentId:t.id}})},handleBreadcrumbClick:function(t){this.$router.push({name:"BranchDetail",query:{parentId:t.id}})},save:function(){var t=this,e=[],n=this.$refs.singleTable.selection;return this.tableData.forEach(function(t){n.includes(t)?e.push({id:t.id,branchId:t.branchId,itemId:t.itemId,isSelected:!0}):e.push({id:t.id,branchId:t.branchId,itemId:t.itemId,isSelected:!1})}),this.buttonLoading=!0,function(t,e,n,a){return Object(p.a)({url:"branch-items/"+e,method:"PUT",params:{ownerId:t,parentId:n},data:a})}(this.getOwnerId(),this.branchId,this.getParentId(),e).then(function(e){200===e.data.code&&(t.buttonLoading=!1,t.buttonDisabled=!0,t.$notify({title:t.$t("notification.success"),message:t.$t("branch.branchItemUpdateSuccess"),type:"success",duration:2e3}))})}}},b=(n("u4LV"),n("KHd+")),g=Object(b.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("branch.items")))])]),t._v(" "),n("div",{staticClass:"filter-container"}),t._v(" "),n("el-breadcrumb",{staticStyle:{"margin-bottom":"15px"},attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.breadcrubms,function(e){return n("el-breadcrumb-item",{key:e.id},[n("el-link",{attrs:{type:"primary"},on:{click:function(n){t.handleBreadcrumbClick(e)}}},[t._v(t._s(e.name))])],1)})),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],key:t.tableKey,ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,size:"mini",border:"",fit:"","highlight-current-row":""},on:{select:function(e){t.buttonDisabled=!1}}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.attribute.no"),prop:"no",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.item.no))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.attribute.name"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["CATEGORY"===e.row.typeCode?n("span",{staticStyle:{color:"blue"}},[n("router-link",{attrs:{to:{name:"BranchDetail",query:{parentId:e.row.id}}}},[n("el-link",{attrs:{type:"primary"}},[t._v("[ "+t._s(e.row.name)+" ]")])],1)],1):t._e(),t._v(" "),"ITEM"===e.row.typeCode?n("span",[t._v(t._s(e.row.item.name))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.status"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.statusList[e.row.statusCode].type,size:"mini"}},[n("span",[t._v(t._s(t.statusList[e.row.statusCode].name))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"200px","class-name":"small-padding cell-actions"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/items/"+t.row.item.id+"/detail"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-view",type:"info"}})],1)]}}])})],1),t._v(" "),n("div",{staticClass:"el-card-footer"},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.buttonLoading,disabled:t.buttonDisabled,type:"primary"},on:{click:function(e){t.save()}}},[t._v(t._s(t.$t("table.save")))])],1)],1)},[],!1,null,null,null);g.options.__file="BranchItems.vue";var v=g.exports,w=n("lelH"),y={name:"BranchDetail",components:{Pagination:d.a,BranchItems:v},directives:{waves:c.a},data:function(){return{isLoading:"",branchId:this.$route.params&&this.$route.params.branchId,tempData:{imageUrl:"",selectedLanguages:[],translations:{name:{}}},languagesMap:new u.a,selectedImageName:"",postedFormData:{},tableKey:0,branchData:{},total:0,dialogFormVisible:!1,dialogStatus:"",parentId:this.$route.query&&this.$route.query.parentId}},created:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getOwnerId()){e.next=5;break}return t.listLoading=!1,t.$router.push("/users/index"),t.$message({showClose:!0,message:t.$t("notification.pleaseSelectOwner"),type:"error"}),e.abrupt("return");case 5:return t.isLoading=!0,e.next=8,t.init();case 8:return e.next=10,t.fillTable();case 10:t.isLoading=!1;case 11:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return m.a.getters.ownerId},getParentId:function(){return this.parentId},init:function(){var t=this;return s()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(t.getOwnerId()).then(function(e){t.languagesList=e.data.payload.languages,t.languagesList.forEach(function(e){t.languagesMap.set(e.code,e)})});case 2:case"end":return e.stop()}},e,t)}))()},fillTable:function(){var t=this;return Object(w.d)(this.getOwnerId(),this.branchId).then(function(e){t.branchData=e.data.payload.branch})}}},_=Object(b.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"edit-form-container"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.$t("branch.detail")))])]),t._v(" "),n("div",{staticClass:"details"},[n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",[t._v(t._s(t.$t("table.attribute.no"))+": ")]),t._v(t._s(t.branchData.no))])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",[t._v(t._s(t.$t("branch.name"))+": ")]),t._v(t._s(t.branchData.name))])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",[t._v(t._s(t.$t("table.status"))+": ")]),t._v(" "),n("div",[n("span",[t._v(t._s(t.branchData.statusCode))])])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:8}},[n("div",{staticClass:"grid-content bg-purple"},[n("span",[t._v(t._s(t.$t("branch.createdAt"))+": ")]),t._v(t._s(t.branchData.createdAt))])])],1)],1)]),t._v(" "),n("branch-items",{attrs:{"branch-id":t.branchId}})],1)},[],!1,null,null,null);_.options.__file="BranchDetail.vue";var I={name:"DetailForm",components:{BranchDetail:_.exports}},x=Object(b.a)(I,function(){var t=this.$createElement;return(this._self._c||t)("branch-detail")},[],!1,null,null,null);x.options.__file="detail.vue";e.default=x.exports},KTTK:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return u}),n.d(e,"f",function(){return c});var a=n("t3Un");function r(){return Object(a.a)({url:"/payment-methods",method:"GET"})}function i(){return Object(a.a)({url:"/languages",method:"GET"})}function s(t){return Object(a.a)({url:"/users/"+t+"/languages",method:"GET"})}function o(){return Object(a.a)({url:"/currencies",method:"GET"})}function u(){return Object(a.a)({url:"/countries",method:"GET"})}function c(){return Object(a.a)({url:"time-zones",method:"GET"})}},Mz3J:function(t,e,n){"use strict";Math.easeInOutQuad=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function r(t,e,n){var r=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,i=t-r,s=0;e=void 0===e?500:e;!function t(){s+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(s,r,i,e)),s<e?a(t):n&&"function"==typeof n&&n()}()}var i={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},s=(n("PC8i"),n("KHd+")),o=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"4a3e8263",null);o.options.__file="index.vue";e.a=o.exports},ODRq:function(t,e,n){t.exports={default:n("UDep"),__esModule:!0}},PC8i:function(t,e,n){"use strict";var a=n("vYct");n.n(a).a},RZ4f:function(t,e,n){},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},XLbu:function(t,e,n){var a=n("Y7ZC");a(a.P+a.R,"Map",{toJSON:n("8iia")("Map")})},ZySA:function(t,e,n){"use strict";var a=n("P2sY"),r=n.n(a),i=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var a=r()({},e.value),i=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),u=s.querySelector(".waves-ripple");switch(u?u.className="waves-ripple":((u=document.createElement("span")).className="waves-ripple",u.style.height=u.style.width=Math.max(o.width,o.height)+"px",s.appendChild(u)),i.type){case"center":u.style.top=o.height/2-u.offsetHeight/2+"px",u.style.left=o.width/2-u.offsetWidth/2+"px";break;default:u.style.top=(n.pageY-o.top-u.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",u.style.left=(n.pageX-o.left-u.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return u.style.backgroundColor=i.color,u.className="waves-ripple z-active",!1}},!1)}}),s=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(s)),i.install=s;e.a=i},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var a=n("Wu5q"),r=n("n3ko");t.exports=n("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=a.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return a.def(r(this,"Map"),0===t?0:t,e)}},a,!0)},jUE0:function(t,e,n){},lelH:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return o}),n.d(e,"b",function(){return u});var a=n("t3Un");function r(t,e,n){return Object(a.a)({url:"/branches",method:"POST",params:{ownerId:t,companyId:e},data:n})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?{ownerId:t,companyId:e}:{ownerId:t};return Object(a.a)({url:"/branches",method:"GET",params:n})}function s(t,e){return Object(a.a)({url:"/branches/"+e,method:"GET",params:{ownerId:t}})}function o(t,e){return Object(a.a)({url:"/branches/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function u(t,e){return Object(a.a)({url:"/branches/"+e,method:"DELETE",params:{ownerId:t}})}},u4LV:function(t,e,n){"use strict";var a=n("RZ4f");n.n(a).a},vYct:function(t,e,n){}}]);