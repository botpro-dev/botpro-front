(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-527b","chunk-876b"],{"8EvD":function(t,e,n){"use strict";n.r(e);var a=n("14Xm"),i=n.n(a),o=n("D3Ub"),r=n.n(o),l=n("XJYT"),s=n("ZySA"),c=n("Q2AE"),u=n("Mz3J"),d=n("lelH"),p={name:"CompanyBranches",components:{Pagination:u.a},directives:{waves:s.a},data:function(){return{tableKey:0,tableData:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,currency:"",bot:{token:""}},statusList:{ACTIVE:{name:this.$t("table.statusType.active"),type:"success"},DELETED:{name:this.$t("table.statusType.deleted"),type:"success"},DISABLED:{name:this.$t("table.statusType.disabled"),type:"info"}},dialogFormVisible:!1,downloadLoading:!1,companyId:this.$route.params&&this.$route.params.companyId}},created:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getOwnerId()){e.next=5;break}return t.listLoading=!1,t.$router.push("/users/index"),t.$message({showClose:!0,message:t.$t("notification.pleaseSelectOwner"),type:"error"}),e.abrupt("return");case 5:return t.listLoading=!0,e.next=8,t.fillTable();case 8:t.listLoading=!1;case 9:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return c.a.getters.ownerId},fillTable:function(){var t=this;return Object(d.c)(this.getOwnerId(),this.companyId).then(function(e){t.tableData=e.data.payload.branches,t.total=e.data.payload.branches.length})},handleFilter:function(){this.listQuery.page=1,this.fillTable()},handleDelete:function(t){var e=this;l.MessageBox.confirm(this.$t("branch.deleteConfirm",{name:t.name}),this.$t("messageBox.confirmDelete"),{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){e.deleteData(t)}).catch(function(){console.log("Cancel")})},deleteData:function(t){var e=this;Object(d.b)(this.getOwnerId(),t.id).then(function(n){if(200===n.data.code){e.$notify({title:e.$t("notification.success"),message:e.$t("company.deleteSuccess"),type:"success",duration:2e3});var a=e.tableData.indexOf(t.id);e.tableData.splice(a,1)}})},handleExport:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-3e35"),n.e("chunk-1b74")]).then(n.bind(null,"S/jZ")).then(function(e){var n=[t.$t("table.attribute.no"),t.$t("table.attribute.name")],a=t.formatJson(["no","name"],t.tableData);e.export_json_to_excel({header:n,data:a,filename:t.$t("route.branches")}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}},m=n("KHd+"),f=Object(m.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.attribute.name")},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),n("router-link",{attrs:{to:"branches/create"}},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"}},[t._v(t._s(t.$t("table.add")))])],1),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleExport}},[t._v(t._s(t.$t("table.export")))])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.tableData,size:"mini",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:t.$t("table.attribute.no"),prop:"no",sortable:"custom",align:"center",width:"70px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.no))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.attribute.name"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.status"),prop:"name",sortable:"custom",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.statusList[e.row.statusCode].type,size:"mini"}},[n("span",[t._v(t._s(t.statusList[e.row.statusCode].name))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"250px","class-name":"small-padding cell-actions"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"branches/"+e.row.id+"/edit"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit",type:"primary"}})],1),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(n){t.handleDelete(e.row)}}})]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.fillTable}})],1)},[],!1,null,null,null);f.options.__file="CompanyBranchesTable.vue";e.default=f.exports},Hh7R:function(t,e,n){"use strict";var a=n("JoTM");n.n(a).a},JoTM:function(t,e,n){},Mz3J:function(t,e,n){"use strict";Math.easeInOutQuad=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function i(t,e,n){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=t-i,r=0;e=void 0===e?500:e;!function t(){r+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(r,i,o,e)),r<e?a(t):n&&"function"==typeof n&&n()}()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&i(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&i(0,800)}}},r=(n("Hh7R"),n("KHd+")),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"55a1f896",null);l.options.__file="index.vue";e.a=l.exports},ZySA:function(t,e,n){"use strict";var a=n("P2sY"),i=n.n(a),o=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var a=i()({},e.value),o=i()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=o.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",r.appendChild(s)),o.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-l.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-l.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}},!1)}}),r=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;e.a=o},jUE0:function(t,e,n){},lelH:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return s});var a=n("t3Un");function i(t,e,n){return Object(a.a)({url:"/branches",method:"POST",params:{ownerId:t,companyId:e},data:n})}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?{ownerId:t,companyId:e}:{ownerId:t};return Object(a.a)({url:"/branches",method:"GET",params:n})}function r(t,e){return Object(a.a)({url:"/branches/"+e,method:"GET",params:{ownerId:t}})}function l(t,e){return Object(a.a)({url:"/branches/"+e.id,method:"PUT",params:{ownerId:t},data:e})}function s(t,e){return Object(a.a)({url:"/branches/"+e,method:"DELETE",params:{ownerId:t}})}},vglG:function(t,e,n){"use strict";n.r(e);var a={name:"EditForm",components:{companyBranchesTable:n("8EvD").default}},i=n("KHd+"),o=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("company-branches-table")},[],!1,null,null,null);o.options.__file="branches.vue";e.default=o.exports}}]);