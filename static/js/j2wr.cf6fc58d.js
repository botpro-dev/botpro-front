(window.webpackJsonp=window.webpackJsonp||[]).push([["j2wr"],{j2wr:function(a,t,e){"use strict";e.r(t);var s=e("14Xm"),i=e.n(s),l=e("D3Ub"),n=e.n(l),r=e("Q2AE"),u=e("LvDl"),d=e("wk8/"),c={data:function(){return{userId:this.$route.params&&this.$route.params.userId,pageData:{name:"",languages:[],currency:{}},isLoading:!0}},created:function(){var a=this;return n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.isLoading=!0,t.next=3,a.fillPage();case 3:a.isLoading=!1;case 4:case"end":return t.stop()}},t,a)}))()},methods:{getOwnerId:function(){return r.a.getters.ownerId},fillPage:function(a){var t=this;return Object(d.d)(this.userId).then(function(a){var e=a.data.payload.user;t.pageData=Object(u.cloneDeep)(e)})}}},v=e("KHd+"),o=Object(v.a)(c,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.isLoading,expression:"isLoading"}],staticClass:"edit-form-container"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[e("h1",[a._v(a._s(a.$t("route.user.detail")))])])]),a._v(" "),e("div",{staticClass:"details"},[e("div",[e("h3",[a._v("Information")]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("user.name"))+": ")]),a._v(" "),e("span",{staticClass:"detail-value"},[a._v(a._s(a.pageData.name))])]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("table.attribute.email"))+": ")]),a._v(" "),e("span",{staticClass:"detail-value"},[a._v(a._s(a.pageData.email))])]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("table.status"))+": ")]),a._v(" "),e("span",{staticClass:"detail-value"},[a._v(a._s(a.pageData.statusCode))])]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("user.role.role"))+": ")]),a._v(" "),e("span",{staticClass:"detail-value"},[a._v(a._s(a.pageData.roleCode))])])]),a._v(" "),e("div",[e("h3",[a._v("Currencies")]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("table.attribute.currency"))+": ")]),a._v(" "),e("span",{staticClass:"detail-value"},[a._v(a._s(a.pageData.currency.name))])])]),a._v(" "),e("div",[e("h3",[a._v("Languages")]),a._v(" "),e("div",{staticClass:"detail-element"},[e("span",{staticClass:"detail-attribute"},[a._v(a._s(a.$t("table.attribute.languages"))+": ")]),a._v(" "),a._l(a.pageData.languages,function(t){return e("el-tag",{key:t.id,staticClass:"detail-labels",attrs:{type:"info"}},[a._v(a._s(t.name))])})],2)])])])],1)},[],!1,null,null,null);o.options.__file="UserDetail.vue";var _={name:"DetailForm",components:{CompanyDetail:o.exports}},p=Object(v.a)(_,function(){var a=this.$createElement;return(this._self._c||a)("company-detail")},[],!1,null,null,null);p.options.__file="detail.vue";t.default=p.exports}}]);