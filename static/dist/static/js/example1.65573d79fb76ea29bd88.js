(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{74:function(t,e,a){"use strict";a.r(e);var l=a(98);var i=a(82);for(var s in i)if(s!=="default")(function(t){a.d(e,t,function(){return i[t]})})(s);var n=a(94);var o=a(2);var r=Object(o["a"])(i["default"],l["a"],l["b"],false,null,"695f1722",null);e["default"]=r.exports},82:function(t,e,a){"use strict";a.r(e);var l=a(83);var i=a.n(l);for(var s in l)if(s!=="default")(function(t){a.d(e,t,function(){return l[t]})})(s);e["default"]=i.a},83:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var l={name:"",data:function t(){return{templateList:[],curTemplateId:null,curTemplate:[],dailyData:[],addDailyFormData:{date:null,content:{},template_id:null,send_email:false},reportDate:new Date,customOption:{disabledDate:function t(e){if(e>new Date){return true}}},saveDailyDialog:{visiable:false},saveFalg:false,writeFalg:true,saveText:"未保存",clearFlag:0}},created:function t(){this.init()},methods:{formateDate:function t(e){return e.getFullYear()+"-"+(e.getMonth()>=9?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(e.getDate()>9?e.getDate():"0"+e.getDate())},changeTemplate:function t(){console.log(this.curTemplateId+"x");if(this.curTemplateId===null||this.curTemplateId===""){this.curTemplate=[];this.dailyData=[]}},selectTemplate:function t(){console.log("切换模板curTemplateId",this.curTemplateId);this.dailyData=[];var e=this;e.templateList.forEach(function(t){if(t.id===e.curTemplateId){e.curTemplate=t.content.split(";")}});console.log("templateList",this.templateList);console.log("template",this.curTemplate)},init:function t(){var e=this;this.$http.get("/get_all_report_template/").then(function(t){if(t.result){e.templateList=t.data;e.clearFlag=1;console.log("templateList",e.templateList);e.getDailyByDate(e.reportDate)}else{var a={};a.offsetY=80;a.message=t.message;a.theme="error";e.$bkMessage(a)}})},clickSaveDaily:function t(){console.log("isToday",this.formateDate(this.reportDate)===this.formateDate(new Date));if(this.formateDate(this.reportDate)===this.formateDate(new Date)){this.saveDaily()}else{this.saveDailyDialog.visiable=true}},getDailyByDate:function t(e){var a=this;this.writeFalg=true;var l={};l.offsetY=80;console.log("templates",this.templateList);this.$http.get("/daily_report/?date="+this.formateDate(e)).then(function(t){if(t.result){console.log("daily",t.data);if(JSON.stringify(t.data)==="{}"){console.log(a.formateDate(e)+"天没写日报");if(a.templateList.length>0){a.curTemplateId=a.templateList[0].id;a.curTemplate=a.templateList[0].content.split(";");console.log("curTemplateId:",a.curTemplateId);console.log("curTemplate",a.curTemplate);a.dailyData=[];a.saveText="未保存"}}else{var i=[];var s=[];for(var n in t.data.content){i.push(n);s.push(t.data.content[n])}a.curTemplateId=t.data.template_id;a.curTemplate=i;a.dailyData=s;console.log("curTemplateId",a.curTemplateId);console.log("curTemplate",a.curTemplate);console.log("dailyData",a.dailyData);if(t.data.send_describe==="已发送"){a.writeFalg=false}a.saveText=t.data.send_describe}}else{l.message=t.message;l.theme="error";a.$bkMessage(l)}})},saveAndSend:function t(){this.addDailyFormData.send_email=true;this.saveDaily()},saveDaily:function t(){var e=this;var a={offsetY:80};if(this.dailyData.length===0){a.message="未填写内容不可以保存日报";a.theme="error";this.$bkMessage(a);return}console.log(this.dailyData);var l=true;var i={};for(var s=0;s<this.curTemplate.length;s++){console.log("日报内容",this.dailyData[s]);if(this.dailyData[s]===null||this.dailyData[s]===""||this.dailyData[s]===undefined){a.message='"'+this.curTemplate[s]+'"不可为空';l=false}else{i[this.curTemplate[s]]=this.dailyData[s]}}console.log("hasFullContentFlag:",l);if(l===false){this.addDailyFormData={date:null,content:{},template_id:null};a.theme="error";this.$bkMessage(a)}else{this.addDailyFormData.date=this.formateDate(this.reportDate);this.addDailyFormData.content=i;this.addDailyFormData.template_id=this.curTemplateId;console.log("addDailyFormData:",this.addDailyFormData);this.$http.post("/daily_report/",this.addDailyFormData).then(function(t){a.message=t.message;if(t.result){a.theme="success";e.$bkMessage(a);console.log("填写成功，重新获取日报信息")}else{e.addDailyFormData=null;a.theme="error";e.$bkMessage(a)}e.getDailyByDate(e.reportDate);e.saveDailyDialog.visiable=false;e.sendEmail=false})}}}};e.default=l},84:function(t,e,a){},94:function(t,e,a){"use strict";var l=a(84);var i=a.n(l);var s=i.a},98:function(t,e,a){"use strict";var l=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{attrs:{id:"myDaily"}},[a("div",{staticClass:"body"},[a("bk-divider",{staticStyle:{"margin-bottom":"30px"},attrs:{align:"left"}},[a("div",{staticClass:"container_title"},[t._v("填写日报")])]),t._v(" "),a("div",{staticClass:"top_container",staticStyle:{"margin-top":"50px"}},[a("span",[t._v("选择模板：")]),t._v(" "),a("bk-select",{staticStyle:{width:"250px",display:"inline-block","vertical-align":"bottom"},attrs:{disabled:!t.writeFalg,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:"",placeholder:"请选择模板"},on:{selected:function(e){t.selectTemplate()},change:function(e){t.changeTemplate()}},model:{value:t.curTemplateId,callback:function(e){t.curTemplateId=e},expression:"curTemplateId"}},t._l(t.templateList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})}),1),t._v(" "),a("span",{staticStyle:{display:"inline-block","margin-left":"50px"}},[t._v("选择日期：")]),t._v(" "),a("bk-date-picker",{staticClass:"mr15",attrs:{clearable:false,placeholder:"选择日期","ext-popover-cls":"custom-popover-cls",options:t.customOption},on:{change:function(e){t.getDailyByDate(t.reportDate)}},model:{value:t.reportDate,callback:function(e){t.reportDate=e},expression:"reportDate"}}),t._v(" "),a("bk-button",{staticClass:"mr10",staticStyle:{"margin-left":"40px"},attrs:{theme:"primary",disabled:!t.writeFalg,type:"submit",title:"保存"},on:{click:function(e){t.clickSaveDaily()}}},[t._v("\n                保存\n            ")]),t._v(" "),a("bk-dialog",{staticClass:"save-daily-dialog",attrs:{theme:"primary","show-footer":false},model:{value:t.saveDailyDialog.visiable,callback:function(e){t.$set(t.saveDailyDialog,"visiable",e)},expression:"saveDailyDialog.visiable"}},[a("bk-form",{attrs:{"label-width":"80"}},[a("bk-form-item",{staticStyle:{"margin-left":"60px"}},[t._v("\n                        请选择保存方式\n                    ")]),t._v(" "),a("bk-form-item",[a("bk-button",{staticStyle:{"margin-right":"20px"},attrs:{theme:"primary",title:"保存并发送邮件"},on:{click:function(e){e.stopPropagation();e.preventDefault();t.saveAndSend()}}},[t._v("保存并发送邮件")]),t._v(" "),a("bk-button",{attrs:{"ext-cls":"mr5",theme:"default",title:"仅保存"},on:{click:function(e){t.saveDaily()}}},[t._v("仅保存")])],1)],1)],1),t._v(" "),a("span",{staticClass:"tag-view",staticStyle:{float:"right",display:"inline-block",width:"120px","margin-top":"16px","font-size":"14px"}},[t._v("\n                日报状态："+t._s(t.saveText)+"\n            ")])],1),t._v(" "),a("div",{staticClass:"body_container"},t._l(t.curTemplate,function(e,l){return a("div",{key:l,staticStyle:{margin:"50px 0px"}},[a("div",{staticStyle:{"font-size":"18px","font-weight":"700"}},[t._v(t._s(e))]),t._v(" "),a("div",{staticClass:"input-demo"},[a("bk-input",{attrs:{placeholder:"",type:"textarea",rows:3,maxlength:255,disabled:!t.writeFalg},on:{change:function(e){t.saveFalg=true}},model:{value:t.dailyData[l],callback:function(e){t.$set(t.dailyData,l,e)},expression:"dailyData[index]"}})],1)])}),0)],1)])};var i=[];a.d(e,"a",function(){return l});a.d(e,"b",function(){return i})}}]);