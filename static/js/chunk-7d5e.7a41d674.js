(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7d5e"],{Mz3J:function(e,t,n){"use strict";Math.easeInOutQuad=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function i(e,t,n){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=e-i,r=0;t=void 0===t?500:t;!function e(){r+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(r,i,o,t)),r<t?a(e):n&&"function"==typeof n&&n()}()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&i(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&i(0,800)}}},r=(n("PC8i"),n("KHd+")),s=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},[],!1,null,"4a3e8263",null);s.options.__file="index.vue";t.a=s.exports},PC8i:function(e,t,n){"use strict";var a=n("vYct");n.n(a).a},ZySA:function(e,t,n){"use strict";var a=n("P2sY"),i=n.n(a),o=(n("jUE0"),{bind:function(e,t){e.addEventListener("click",function(n){var a=i()({},t.value),o=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=o.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",r.appendChild(l)),o.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}},!1)}}),r=function(e){e.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;t.a=o},jUE0:function(e,t,n){},lelH:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return l});var a=n("t3Un");function i(e,t,n){return Object(a.a)({url:"/branches",method:"POST",params:{ownerId:e,companyId:t},data:n})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t?{ownerId:e,companyId:t}:{ownerId:e};return Object(a.a)({url:"/branches",method:"GET",params:n})}function r(e,t){return Object(a.a)({url:"/branches/"+t,method:"GET",params:{ownerId:e}})}function s(e,t){return Object(a.a)({url:"/branches/"+t.id,method:"PUT",params:{ownerId:e},data:t})}function l(e,t){return Object(a.a)({url:"/branches/"+t,method:"DELETE",params:{ownerId:e}})}},o5Nj:function(e,t,n){"use strict";n.r(t);var a=n("14Xm"),i=n.n(a),o=n("D3Ub"),r=n.n(o),s=n("XJYT"),l=n("ZySA"),c=n("Q2AE"),u=n("Mz3J"),d=n("lelH"),p={name:"CompanyBranches",components:{Pagination:u.a},directives:{waves:l.a},data:function(){return{tableKey:0,tableData:[],search:"",total:0,listLoading:!0,listQuery:{page:1,limit:20,currency:"",bot:{token:""}},companyId:this.$route.params&&this.$route.params.companyId,statusList:{ACTIVE:{name:this.$t("table.statusType.active"),type:"success"},DELETED:{name:this.$t("table.statusType.deleted"),type:"success"},DISABLED:{name:this.$t("table.statusType.disabled"),type:"info"}},dialogFormVisible:!1,downloadLoading:!1}},computed:{routerLink:function(){var e=this.companyId;return e?{name:"companyBranchCreate",params:{companyId:e}}:{name:"branchCreate"}}},created:function(){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.getOwnerId()){t.next=5;break}return e.listLoading=!1,e.$router.push("/users/index"),e.$message({showClose:!0,message:e.$t("notification.pleaseSelectOwner"),type:"error"}),t.abrupt("return");case 5:return e.listLoading=!0,t.next=8,e.fillTable();case 8:e.listLoading=!1;case 9:case"end":return t.stop()}},t,e)}))()},methods:{compareByName:function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0},getOwnerId:function(){return c.a.getters.ownerId},fillTable:function(){var e=this;return Object(d.c)(this.getOwnerId(),this.companyId).then(function(t){e.tableData=t.data.payload.branches,e.total=t.data.payload.branches.length})},handleFilter:function(){this.listQuery.page=1,this.fillTable()},handleDelete:function(e){var t=this;s.MessageBox.confirm(this.$t("branch.deleteConfirm",{name:e.name}),this.$t("messageBox.confirmDelete"),{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){t.deleteData(e)}).catch(function(){console.log("Cancel")})},deleteData:function(e){var t=this;Object(d.b)(this.getOwnerId(),e.id).then(function(n){if(200===n.data.code){t.$notify({title:t.$t("notification.success"),message:t.$t("company.deleteSuccess"),type:"success",duration:2e3});var a=t.tableData.indexOf(e.id);t.tableData.splice(a,1)}})},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-3e35"),n.e("chunk-1ebb")]).then(n.bind(null,"S/jZ")).then(function(t){var n=[e.$t("table.attribute.no"),e.$t("table.attribute.name")],a=e.formatJson(["no","name"],e.tableData);t.export_json_to_excel({header:n,data:a,filename:e.$t("route.branches")}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}},m=n("KHd+"),f=Object(m.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.liveSearch")},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),n("router-link",{attrs:{to:e.routerLink}},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"}},[e._v(e._s(e.$t("table.add")))])],1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleExport}},[e._v(e._s(e.$t("table.export")))])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.tableData.filter(function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}),size:"mini",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("table.attribute.no"),prop:"no",sortable:"",align:"center",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.no))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("company.name"),"sort-method":e.compareByName,prop:"companyName",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.company.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.attribute.name"),"sort-method":e.compareByName,prop:"name",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.status"),prop:"status",sortable:"custom",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e.statusList[t.row.statusCode].type,size:"mini"}},[n("span",[e._v(e._s(e.statusList[t.row.statusCode].name))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"250px","class-name":"small-padding cell-actions"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/branches/"+t.row.id+"/detail"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-view",type:"info"}})],1),e._v(" "),n("router-link",{attrs:{to:{name:"branchEdit",params:{branchId:t.row.id}}}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit",type:"primary"}})],1),e._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(n){e.handleDelete(t.row)}}})]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){e.$set(e.listQuery,"page",t)},"update:limit":function(t){e.$set(e.listQuery,"limit",t)},pagination:e.fillTable}})],1)},[],!1,null,null,null);f.options.__file="BranchesTable.vue";t.default=f.exports},vYct:function(e,t,n){}}]);