(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bfb0"],{EL5J:function(t,e,a){},Ejsh:function(t,e,a){},hmlQ:function(t,e,a){"use strict";var o=a("EL5J");a.n(o).a},nMEy:function(t,e,a){"use strict";var o=a("14Xm"),n=a.n(o),r=a("D3Ub"),s=a.n(r),i=a("XJYT"),c=a("Q2AE"),u=a("t3Un");function d(t,e){return Object(u.a)({url:"/bots/"+e,method:"GET",params:{ownerId:t}})}function l(t,e,a){return Object(u.a)({url:"/bots/"+e,method:"PUT",data:a,params:{ownerId:t}})}var p={props:{isEdit:{type:Boolean,default:!1}},data:function(){return{botId:this.$route.params&&this.$route.params.botId,companyId:this.$route.params&&this.$route.params.companyId,botExists:!1,postedFormData:{token:""},pageData:{firstName:"",userName:""},rules:{token:[{required:!0,message:this.$t("validate.botTokenRequired"),trigger:"blur"}]},loading:!0,saveButtonLoading:!1,regenerateButtonLoading:!1}},created:function(){var t=this;return s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isEdit){e.next=7;break}return t.loading=!0,e.next=4,t.fillPage();case 4:t.loading=!1,e.next=8;break;case 7:t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()},methods:{getOwnerId:function(){return c.a.getters.ownerId},fillPage:function(){var t=this;return s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.getOwnerId(),t.botId).then(function(e){var a=e.data.payload.bot;t.postedFormData.token=a.token,t.postedFormData.welcomeMsg=a.welcomeMsg,t.pageData.firstName=a.firstName,t.pageData.username=a.username,t.pageData.token=a.token,t.pageData.chatGroupToken=a.chatGroupToken,t.pageData.chatGroupTitle=a.chatGroupTitle});case 2:case"end":return e.stop()}},e,t)}))()},create:function(){var t=this;this.$refs.postedFormData.validate(function(e){if(e)return t.saveButtonLoading=!0,function(t,e){return Object(u.a)({url:"/bots",method:"POST",data:e,params:{ownerId:t}})}(t.getOwnerId(),{company:t.companyId,token:t.postedFormData.token,welcomeMsg:t.postedFormData.welcomeMsg}).then(function(e){200===e.data.code&&(t.$router.push("/companies/"+t.companyId+"/bot/"+e.data.payload.bot.id+"/edit"),t.$notify({title:t.$t("notification.success"),message:t.$t("company.botAddSuccess"),type:"success",duration:2e3}))}).catch(function(e){t.saveButtonLoading=!1})})},update:function(){var t=this;return s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.postedFormData.validate(function(){var e=s()(n.a.mark(function e(a){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return t.saveButtonLoading=!0,e.abrupt("return",l(t.getOwnerId(),t.botId,{company:t.companyId,token:t.postedFormData.token,welcomeMsg:t.postedFormData.welcomeMsg}).then(function(e){200===e.data.code&&(t.pageData.firstName=e.data.payload.bot.firstName,t.pageData.userName=e.data.payload.bot.userName,t.saveButtonLoading=!1,t.$notify({title:t.$t("notification.success"),message:t.$t("company.botEditSuccess"),type:"success",duration:2e3}))}).catch(function(){t.saveButtonLoading=!1}));case 3:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,t)}))()},remove:function(){var t=this;i.MessageBox.confirm(this.$t("company.removeBotConfirm"),this.$t("messageBox.confirmDelete"),{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){return t.loading=!0,function(t,e){return Object(u.a)({url:"/bots/"+e,method:"DELETE",params:{ownerId:t}})}(t.getOwnerId(),t.botId).then(function(e){200===e.data.code&&(t.$router.push("/companies/"+t.companyId+"/detail"),t.$notify({title:t.$t("notification.success"),message:t.$t("company.botRemoveSuccess"),type:"success",duration:2e3}),t.loading=!1)}).catch(function(){t.loading=!1})}).catch(function(){console.log("Cancel")})},regenerate:function(){var t=this;i.MessageBox.confirm("Are you sure to regenerate","Confirm regenerate",{confirmButtonText:this.$t("messageBox.yes"),cancelButtonText:this.$t("messageBox.cancel"),type:"warning"}).then(function(){return t.regenerateButtonLoading=!0,function(t,e){return Object(u.a)({url:"/bots/"+e+"/regenerate-chat-group-token",method:"POST",params:{ownerId:t}})}(t.getOwnerId(),t.botId).then(function(){var e=s()(n.a.mark(function e(a){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fillPage();case 2:t.regenerateButtonLoading=!1,t.$forceUpdate(),Object(i.Message)({message:"Chat group token successfully regenerated",type:"success",duration:5e3});case 5:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()).catch(function(){t.regenerateButtonLoading=!1})})}}},m=(a("tGN6"),a("KHd+")),f=Object(m.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bot-container"},[t.isEdit||t.botExists?a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.$t("table.status"))+"\n    ")]),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"bot-group-header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Bot group info")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{float:"right"},attrs:{loading:t.regenerateButtonLoading,size:"mini",type:"success"},on:{click:t.regenerate}},[t._v("Regenerate group token")])],1),t._v(" "),a("div",{staticClass:"bot-group-body"},[a("div",[t._v("Chat group token: "),a("span",{staticClass:"bot-group-token"},[t._v(t._s(t.pageData.chatGroupToken))])]),t._v(" "),t.pageData.chatGroupTitle?a("div",[t._v("Chat group title:  "),a("span",{staticClass:"bot-group-token"},[t._v(t._s(t.pageData.chatGroupTitle))])]):t._e()])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"never"}},[a("div",{staticClass:"bot-group-header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Bot info")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"danger",size:"mini"},on:{click:t.remove}},[t._v(t._s(t.$t("company.removeBotToken")))])],1),t._v(" "),a("div",{staticClass:"bot-group-body"},[a("div",[t._v(t._s(t.$t("table.attribute.name"))+":"),a("span",{staticClass:"bot-group-token"},[t._v(" "+t._s(t.pageData.firstName))])]),t._v(" "),a("div",[t._v(t._s(t.$t("user.userName"))+": "),a("span",{staticClass:"bot-group-token"},[t._v(t._s(t.pageData.username)+" ")])])])])],1)],1)],1):t._e(),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v("\n      "+t._s(t.$t("company.telegramBot"))+"\n    ")]),t._v(" "),a("el-form",{ref:"postedFormData",attrs:{rules:t.rules,model:t.postedFormData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:t.$t("company.botToken"),prop:"token"}},[a("el-input",{attrs:{placeholder:"123456789:ABCDEF123abcdef123Fw-qphd62Eh8uQp5EyM"},model:{value:t.postedFormData.token,callback:function(e){t.$set(t.postedFormData,"token",e)},expression:"postedFormData.token"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Welcome msg",prop:"token"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:8},type:"textarea",placeholder:"Please input"},model:{value:t.postedFormData.welcomeMsg,callback:function(e){t.$set(t.postedFormData,"welcomeMsg",e)},expression:"postedFormData.welcomeMsg"}})],1),t._v(" "),a("el-form-item",{staticClass:"save-button"},[a("router-link",{attrs:{to:"/companies/"+t.companyId+"/detail"}},[a("el-button",[t._v(t._s(t.$t("route.back")))])],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{loading:t.saveButtonLoading,type:"primary"},on:{click:function(e){t.isEdit?t.update():t.create()}}},[t._v(t._s(t.$t("table.save")))])],1)],1)],1)],1)},[],!1,null,"44c45b5f",null);f.options.__file="BotEdit.vue";e.a=f.exports},tGN6:function(t,e,a){"use strict";var o=a("Ejsh");a.n(o).a},xfCo:function(t,e,a){"use strict";a.r(e);var o={name:"Index",components:{botForm:a("nMEy").a},data:function(){return{}},methods:{}},n=(a("hmlQ"),a("KHd+")),r=Object(n.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("bot-form")},[],!1,null,null,null);r.options.__file="botCreate.vue";e.default=r.exports}}]);