(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={index:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2c5e":function(t,e,n){"use strict";var a=n("dc46"),i=n.n(a);i.a},"45c2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("JCHeader"),n("JCMain")],1)},s=[],o=(n("96cf"),n("b267")),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"ide-header d-flex"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("63a8"),alt:"logo"}})]),a("nav",{staticClass:"navbar"},[a("ul",{staticClass:"nav-menu d-flex"},[a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa jcm-delete"}),t._v("预览当前页")])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa jcm-delete"}),t._v("手机预览")])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa jcm-delete"}),t._v("清空")])])]),a("ul",{staticClass:"nav-r d-flex"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"select",attrs:{href:"#"}},[a("i",{staticClass:"fa jcm-delete"}),t._v("保存")])]),a("li",{staticClass:"nav-item"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa jcm-delete"}),t._v("帮助中心")])])])])])}],c={name:"JCHeader"},u=c,d=n("66b7"),f=Object(d["a"])(u,r,l,!1,null,null,null);f.options.__file="header.vue";var p=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"ide-con-wrap"},[n("LeftSidebar"),n("MainWrap"),n("RightSidebar")],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ide-left-sidebar"},[n("LeftsidebarLayout"),n("LeftsidebarAssembly",{attrs:{widgets:t.formData}})],1)},g=[],b=(n("ac6a"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-layout"},[n("div",{staticClass:"left-hd d-flex"},[n("i",{staticClass:"ico ico-leftlayout"}),t._v("布局架构\n    ")]),n("div",{staticClass:"left-bd"},[n("ul",{staticClass:"left-ul d-flex align-items-center"},[n("li",[n("i",{staticClass:"fa jcm-file-zip"}),n("p",[t._v("图标")])]),n("li",[n("i",{staticClass:"fa jcm-file-zip"}),n("p",[t._v("进度条")])]),n("li",[n("i",{staticClass:"fa jcm-file-zip"}),n("p",[t._v("按钮")])]),n("li",[n("i",{staticClass:"fa jcm-file-zip"}),n("p",[t._v("搜索组件")])])])])])}],_={name:"LeftsidebarLayout"},y=_,x=Object(d["a"])(y,b,C,!1,null,null,null);x.options.__file="LeftsidebarLayout.vue";var k=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-assembly"},[t._m(0),n("ul",{staticClass:"Left-bd ide-scrollbar"},t._l(t.widgets,function(e,a){return n("li",{key:"leftType"+a,staticClass:"Left-bd-li ghost"},[n("h2",{staticClass:"Left-bd-hd",class:a===t.selectedGroup?"selected":"",on:{click:function(e){e.stopPropagation(),t.expand(a)}}},[t._v(t._s(a))]),a===t.selectedGroup&&e&&e.length?n("draggable",{staticClass:"sub-list left-ul d-flex",attrs:{options:t.dragOptions,list:e,element:"ul"}},t._l(e,function(e,a){return n("li",{key:"widget_itme_"+a,staticClass:"drag-menu-item"},[n("i",{class:"fa "+e.icon}),n("p",[t._v(t._s(e.name))])])})):t._e()],1)}))])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-hd d-flex"},[n("i",{staticClass:"ico ico-leftassembly"}),t._v("组件库\n    ")])}],j={name:"LeftsidebarAssembly",props:{widgets:{type:Object,default:function(){return{}}}},data:function(){return{selectedGroup:"基础组件",dragOptions:{sort:!1,group:{name:"mobile-widget",pull:"clone",put:!1},disabled:!1,ghostClass:"ghost"}}},methods:{expand:function(t){this.selectedGroup=t}}},O=j,D=Object(d["a"])(O,w,E,!1,null,null,null);D.options.__file="LeftsidebarAssembly.vue";var F=D.exports,$=[{name:"string_package",id:"formId",view:"FormInput",title:"表单ID",value:"",hidden:!1}],T=$,M=T,L={base:"基础组件",form:"表单组件",notice:"Notice组件",business:"业务组件",other:"其他组件"},P=[{icon:"jcm-biaodan1",name:"App Bar",view:"JCHeader",type:0,group:"base",propertyPackages:["string_package"]},{icon:"jcm-xieyoujian",name:"输入框",view:"JCInput",type:1,group:"form",propertyPackages:["string_package"]},{icon:"jcm-jiahao",name:"按钮",view:"JCButton",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-file-zip",name:"表格",view:"JCTable",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-list-alt",name:"列表",view:"JCCell",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-file-excel",name:"顶部tab",view:"JCNavbar",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-file-word",name:"底部tab",view:"JCTabbar",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-smiley2",name:"栅格",view:"JCFlexbox",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-star",name:"网格",view:"JCGrid",type:1,group:"base",propertyPackages:["string_package"]},{icon:"jcm-xialakuang",name:"下拉选",view:"JCSelect",type:1,group:"form",propertyPackages:["string_package"]},{icon:"jcm-file-pdf",name:"表单",view:"JCForm",type:1,group:"form",propertyPackages:["string_package"]}],A={};P.forEach(function(t){A[L[t.group]]||(A[L[t.group]]=[]),A[L[t.group]].push(t)});var N={name:"LeftSidebar",components:{LeftsidebarLayout:k,LeftsidebarAssembly:F},data:function(){return{formData:A}}},I=N,S=Object(d["a"])(I,h,g,!1,null,null,null);S.options.__file="Leftsidebar.vue";var R=S.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ide-mainwrap"},[n("draggable",{staticClass:"ide-mainwrapcon",attrs:{options:t.dragOptions,element:"div",list:t.layoutData}},[n("transition-group",{staticClass:"ide-iphone6 ide-scrollbar",attrs:{tag:"div"}},t._l(t.layoutData,function(t,e){return n(t.view,{key:"component"+e,tag:"component"})}))],1)],1)},V=[],B={name:"MainWrap",data:function(){return{layoutData:[],dragOptions:{sort:!0,group:{name:"mobile-widget",pull:!1,put:!0},disabled:!1,ghostClass:"ghost"}}}},W=B,U=(n("2c5e"),Object(d["a"])(W,J,V,!1,null,null,null));U.options.__file="MainWrap.vue";var Y=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ide-right-sidebar"},[n("div",{staticClass:"rs-hd"},[t._v("页面属性")]),n("div",{staticClass:"rs-bd ide-scrollbar"},[n("div",{staticClass:"form-horizontal"},[n("FormColor"),n("FormSelect"),n("FormCheckbox"),n("FormRadio"),n("FormCheckbox2"),n("FormRadio2"),n("FormTextarea"),n("FormButton")],1)])])},q=[],z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("导航背景")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control br-tbr",attrs:{type:"text",value:"#de0000"}}),n("span",{staticClass:"input-group-btn"},[n("i",{staticStyle:{"background-color":"#71debf"}})])])])])}],H={name:"FormColor"},Q=H,X=Object(d["a"])(Q,z,G,!1,null,null,null);X.options.__file="FormColor.vue";var Z=X.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("导航样式")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("select",{staticClass:"form-control"},[n("option",[t._v("white")]),n("option",[t._v("black")])])])])])}],nt={name:"FormSelect"},at=nt,it=Object(d["a"])(at,tt,et,!1,null,null,null);it.options.__file="FormSelect.vue";var st=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("是否选中")]),n("div",{staticClass:"form-group-w"},[n("label",{staticClass:"form-group-labe",class:{selected:t.isChoose},on:{click:t.togglePay}},[n("span",{staticClass:"ide-checkbox"})])])])},rt=[],lt={name:"FormCheckbox",data:function(){return{isChoose:!1}},methods:{togglePay:function(){this.isChoose=!this.isChoose}}},ct=lt,ut=Object(d["a"])(ct,ot,rt,!1,null,null,null);ut.options.__file="FormCheckbox.vue";var dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[t._m(0),t._l(t.radioData,function(e,a){return n("div",{key:a,staticClass:"form-optbox pin",class:{toggle:e.isChecked},on:{click:function(n){t.showToggle(e)}}},[n("div",{staticClass:"actions"},[n("button",{staticClass:"btn btn-add mr5",attrs:{type:"button"},on:{click:t.moveKey}},[n("i",{staticClass:"fa jcm-trash6"})]),n("button",{staticClass:"btn btn-del",attrs:{type:"button"},on:{click:t.clickKey}},[n("i",{staticClass:"fa jcm-add6"})])]),n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("显示值")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入显示值"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}})])])]),n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("value值")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"item.key"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入value值"},domProps:{value:e.key},on:{input:function(n){n.target.composing||t.$set(e,"key",n.target.value)}}})])])]),n("FormCheckbox")],1)})],2)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-tit mb8 d-flex"},[n("span",{staticClass:"form-tit-line"}),n("h2",[t._v("选择项")])])}],mt={name:"FormCheckbox2",components:{FormCheckbox:dt},data:function(){return{radioData:[{value:"是",key:222,isChecked:!1}]}},methods:{clickKey:function(){this.radioData.push({value:"否",key:111,isChecked:!0})},moveKey:function(t){this.radioData.length>1&&this.radioData.splice(t,1)},showToggle:function(t){this.radioData.forEach(function(t){t.isChecked=!0}),this.$set(t,"isChecked",!1)}}},vt=mt,ht=Object(d["a"])(vt,ft,pt,!1,null,null,null);ht.options.__file="FormCheckbox2.vue";var gt=ht.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex"},[n("label",{staticClass:"control-label"},[t._v("是否验证")]),n("div",{staticClass:"form-group-w"},t._l(t.radioData,function(e,a){return n("label",{key:a,staticClass:"form-group-label mb8",class:{selected:e.isChecked},on:{click:function(n){t.select(e)}}},[n("span",{staticClass:"ide-radio"}),n("span",{staticClass:"ide-radio-label"},[t._v(t._s(e.name))])])}))])},Ct=[],_t={name:"FormRadio",data:function(){return{flag:!0,radioData:[{name:"是",isChecked:!0},{name:"否",isChecked:!1},{name:"其他参数",isChecked:!1}]}},methods:{select:function(t){this.radioData.forEach(function(t){t.isChecked=!1}),this.$set(t,"isChecked",!0)}}},yt=_t,xt=Object(d["a"])(yt,bt,Ct,!1,null,null,null);xt.options.__file="FormRadio.vue";var kt=xt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex"},[n("label",{staticClass:"control-label"},[t._v("是否验证")]),n("div",{staticClass:"form-group-w"},[t._l(t.radioData,function(e,a){return n("label",{key:a,staticClass:"form-group-label mb8",class:{selected:e.isChecked},on:{click:function(n){t.select(e)}}},[n("span",{staticClass:"ide-radio"}),n("span",{staticClass:"ide-radio-label"},[t._v(t._s(e.name))])])}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"input-group"},[n("textarea",{staticClass:"form-control",attrs:{required:"required",rows:"3",placeholder:"验证规则:[请用 , 分隔] "}})])],2)])},Et=[],jt={name:"FormRadio2",data:function(){return{flag:!0,radioData:[{name:"是",isChecked:!0},{name:"否",isChecked:!1}]}},methods:{select:function(t){this.radioData.forEach(function(t){t.isChecked=!1}),this.$set(t,"isChecked",!0),"是"===t.name?this.flag=!0:this.flag=!1}}},Ot=jt,Dt=Object(d["a"])(Ot,wt,Et,!1,null,null,null);Dt.options.__file="FormRadio2.vue";var Ft=Dt.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex"},[n("label",{staticClass:"control-label"},[t._v("全局样式")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("textarea",{staticClass:"form-control",attrs:{required:"",rows:"4"}})])])])}],Mt={name:"FormTextarea"},Lt=Mt,Pt=Object(d["a"])(Lt,$t,Tt,!1,null,null,null);Pt.options.__file="FormTextarea.vue";var At=Pt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("按钮设置")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button",role:"button"},on:{click:t.openMask}},[t._v("点击设置")])])]),n("JCDialog",{attrs:{type:"confirm",title:t.title},on:{cancel:function(e){t.clickCancel()},danger:function(e){t.clickDanger()},confirm:function(e){t.clickConfirm()}},model:{value:t.sendVal,callback:function(e){t.sendVal=e},expression:"sendVal"}},[n("AddBtn",{attrs:{slot:"D-option"},slot:"D-option"})],1)],1)},It=[],St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMask,expression:"showMask"}],staticClass:"dialog"},[n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"dialog-header"},[n("h4",{staticClass:"dialog-tit"},[t._v("\n\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t")]),n("div",{staticClass:"close-btn",on:{click:t.closeMask}},[n("i",{staticClass:"jcm-guanbi"})])]),n("div",{staticClass:"dialog-body"},[t._t("D-option")],2),n("div",{staticClass:"dialog-footer"},["danger"!=t.type?n("button",{staticClass:"btn default-btn",on:{click:t.closeBtn}},[t._v("\n                    "+t._s(t.cancelText)+"\n                ")]):t._e(),"danger"==t.type?n("button",{staticClass:"btn danger-btn",on:{click:t.dangerBtn}},[t._v("\n                    "+t._s(t.dangerText)+"\n                ")]):t._e(),"confirm"==t.type?n("button",{staticClass:"btn confirm-btn",on:{click:t.confirmBtn}},[t._v("\n                    "+t._s(t.confirmText)+"\n                ")]):t._e()])])])},Rt=[],Jt={name:"JCDialog",props:{value:{},type:{type:String,default:"default"},content:{type:String,default:""},title:{type:String,default:""},cancelText:{type:String,default:"取消"},dangerText:{type:String,default:"删除"},confirmText:{type:String,default:"确定"}},data:function(){return{showMask:!1}},methods:{closeMask:function(){this.showMask=!1},closeBtn:function(){this.$emit("cancel"),this.closeMask()},dangerBtn:function(){this.$emit("danger"),this.closeMask()},confirmBtn:function(){this.$emit("confirm"),this.closeMask()}},mounted:function(){this.showMask=this.value},watch:{value:function(t,e){this.showMask=t},showMask:function(t){this.$emit("input",t)}}},Vt=Jt,Bt=(n("c21b"),Object(d["a"])(Vt,St,Rt,!1,null,null,null));Bt.options.__file="JCDialog.vue";var Wt=Bt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ide-addbtn"},[t._l(t.radioData,function(e,a){return n("div",{key:a,staticClass:"add-info pin"},[n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("按钮名称")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入显示值"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}})])])]),n("div",{staticClass:"form-group d-flex align-items-center"},[n("label",{staticClass:"control-label"},[t._v("按钮类型")]),n("div",{staticClass:"form-group-w"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"item.key"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入value值"},domProps:{value:e.key},on:{input:function(n){n.target.composing||t.$set(e,"key",n.target.value)}}})])])]),n("div",{staticClass:"btn-Remove tr"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.moveKey}},[n("i",{staticClass:"fa jcm-trash6"}),n("span",[t._v("删除")])])])])}),n("div",{staticClass:"btn-add"},[n("button",{staticClass:"btn btn-addbtn",attrs:{type:"button"},on:{click:t.clickKey}},[n("i",{staticClass:"fa jcm-add6"}),n("span",[t._v("新增按钮")])])])],2)},Yt=[],Kt={name:"AddBtn",data:function(){return{radioData:[]}},methods:{clickKey:function(){this.radioData.push({value:"",key:"",isChecked:!0})},moveKey:function(t){this.radioData.splice(t,1)}}},qt=Kt,zt=Object(d["a"])(qt,Ut,Yt,!1,null,null,null);zt.options.__file="AddBtn.vue";var Gt=zt.exports,Ht={name:"FormButton",components:{JCDialog:Wt,AddBtn:Gt},data:function(){return{title:"标题",sendVal:!1}},methods:{openMask:function(t){this.sendVal=!0},clickCancel:function(){console.log("点击了取消")},clickDanger:function(){console.log("这里是danger回调")},clickConfirm:function(){console.log("点击了confirm")}}},Qt=Ht,Xt=Object(d["a"])(Qt,Nt,It,!1,null,null,null);Xt.options.__file="FormButton.vue";var Zt=Xt.exports,te={FormColor:Z,FormSelect:st,FormCheckbox:dt,FormCheckbox2:gt,FormRadio:kt,FormRadio2:Ft,FormTextarea:At,FormButton:Zt},ee={name:"RightSidebar",components:te},ne=ee,ae=Object(d["a"])(ne,K,q,!1,null,null,null);ae.options.__file="RightSidebar.vue";var ie=ae.exports,se={name:"JCMain",components:{LeftSidebar:R,MainWrap:Y,RightSidebar:ie}},oe=se,re=Object(d["a"])(oe,m,v,!1,null,null,null);re.options.__file="main.vue";var le=re.exports,ce=n("bc3a"),ue=n.n(ce),de=window.cefQuery?function(){return{get:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new Promise(function(t,n){window.cefQuery({request:e[0],onSuccess:function(e){t(e)},onFailure:function(t){n(t)}})})},post:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new Promise(function(t,n){window.cefQuery({request:e[0]+e[1].formJson,onSuccess:function(e){t(e)},onFailure:function(t){n(t)}})})}}}():ue.a.create({baseURL:"",timeout:5e3}),fe={getDesigner:function(){return de.get("https://api.github.com")},save:function(t){return de.post("save.action",{formJson:t})},getAll:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ue.a.all(e)}},pe={components:{JCMain:le,JCHeader:p},data:function(){return{githubObject:{}}},mounted:function(){this.getData()},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fe.getDesigner("https://api.github.com");case 2:e=t.sent,this.githubObject=e.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},me=pe,ve=(n("5c0b"),Object(d["a"])(me,i,s,!1,null,null,null));ve.options.__file="App.vue";var he=ve.exports,ge=n("c0d6"),be=n("7a05"),Ce=(n("f751"),n("98e2")),_e=n("53fe"),ye=n.n(_e);function xe(t,e,n){return void 0==n?t:(t=null==t?{}:t,t[e]=n,t)}function ke(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var a=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,a)}function a(t,e){return t.map(function(t){return t.elm}).indexOf(e)}function i(t,e,n){if(!t)return[];var a=t.map(function(t){return t.elm}),i=Object(Ce["a"])(e).map(function(t){return a.indexOf(t)});return n?i.filter(function(t){return-1!==t}):i}function s(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}function o(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),s.call(e,t,n)}}var r=["Start","Add","Remove","Update","End"],l=["Choose","Sort","Filter","Clone"],c=["Move"].concat(r,l).map(function(t){return"on"+t}),u=null,d={options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},f={name:"draggable",props:d,data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var a=e,i=this.$slots.footer;i&&(a=e?Object(Ce["a"])(e).concat(Object(Ce["a"])(i)):Object(Ce["a"])(i));var s=null,o=function(t,e){s=xe(s,t,e)};if(o("attrs",this.$attrs),this.componentData){var r=this.componentData,l=r.on,c=r.props;o("on",l),o("props",c)}return t(this.element,s,a)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: ".concat(this.element));var n={};r.forEach(function(t){n["on"+t]=o.call(e,t)}),l.forEach(function(t){n["on"+t]=s.bind(e,t)});var a=Object.assign({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in a)&&(a.draggable=">*"),this._sortable=new t(this.rootContainer,a),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==c.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=i(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=a(this.getChildrenNodes()||[],t);if(-1===e)return null;var n=this.realList[e];return{index:e,element:n}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=Object(Ce["a"])(this.value);t(e),this.$emit("input",e)}},spliceList:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(Array.isArray(e)&&e[2]){var a=this.$root.createWidget(e[2]);e[2]=a}var i=function(t){return t.splice.apply(t,e)};this.alterList(i)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,a=this.getUnderlyingPotencialDraggableComponent(e);if(!a)return{component:a};var i=a.realList,s={list:i,component:a};if(e!==n&&i&&a.getUnderlyingVm){var o=a.getUnderlyingVm(n);if(o)return Object.assign(o,s)}return s},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){var e=this.getChildrenNodes();e[t].data=null;var n=this.getComponent();n.children=[],n.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),u=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var a=this.getVmIndex(t.newIndex);this.spliceList(a,0,n),this.computeIndexes();var i={element:n,newIndex:a};this.emitChanges({added:i})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var a=this.context.index;this.spliceList(a,1);var i={element:this.context.element,oldIndex:a};this.resetTransitionData(a),this.emitChanges({removed:i})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var a=this.context.index,i=this.getVmIndex(t.newIndex);this.updatePosition(a,i);var s={element:this.context.element,oldIndex:a,newIndex:i};this.emitChanges({moved:s})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=Object(Ce["a"])(e.to.children).filter(function(t){return"none"!==t.style["display"]}),a=n.indexOf(e.related),i=t.component.getVmIndex(a),s=-1!=n.indexOf(u);return s||!e.willInsertAfter?i:i+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var a=this.getRelatedContextFromMoveEvent(t),i=this.context,s=this.computeFutureIndex(a,t);return Object.assign(i,{futureIndex:s}),Object.assign(t,{relatedContext:a,draggedContext:i}),n(t,e)},onDragEnd:function(){this.computeIndexes(),u=null}}};return f}var we=ke(ye.a),Ee=(n("3d96"),n("fe3c")),je=n.n(Ee),Oe=n("78fa"),De=n("cdad"),Fe=(n("6b54"),n("a481"),function(){function t(){Object(Oe["a"])(this,t),this.listeners={},this.EVENT_TYPE_PROPERTY="event_type_property_data",this.EVENT_TYPE_FIELD_NAME="event_type_field_name",this.EVENT_TYPE_FIELD_START_NAME="EVENT_TYPE_FIELD_START_NAME",this.EVENT_TYPE_FIELD_END_NAME="EVENT_TYPE_FIELD_END_NAME",this.EVENT_TYPE_DYNROW_FIELD_NAME="EVENT_TYPE_DYNROW_FIELD_NAME",this.EVENT_VALIDATE_RULE="event_validate_rule",this.EVENT_WORK_FLOW="work-flow",this.EVENT_DRAG_DATA="event_darg_data"}return Object(De["a"])(t,[{key:"addEventListener",value:function(t,e,n){for(var a=[],i=arguments.length,s=0;s<i;s++)a.push(arguments[s]);a=a.length>3?a.splice(3,a.length-1):[],"undefined"!=typeof this.listeners[t]?this.listeners[t].push({scope:n,callback:e,args:a}):this.listeners[t]=[{scope:n,callback:e,args:a}]}},{key:"removeEventListener",value:function(t,e,n){if("undefined"!=typeof this.listeners[t]){for(var a=this.listeners[t].length,i=[],s=0;s<a;s++){var o=this.listeners[t][s];o.scope==n&&o.callback==e||i.push(o)}this.listeners[t]=i}}},{key:"hasEventListener",value:function(t,e,n){if("undefined"!=typeof this.listeners[t]){var a=this.listeners[t].length;if(void 0===e&&void 0===n)return a>0;for(var i=0;i<a;i++){var s=this.listeners[t][i];if((!n||s.scope==n)&&s.callback==e)return!0}}return!1}},{key:"dispatch",value:function(t,e){var n={type:t,target:e},a=[],i=0,s=arguments.length;for(i=0;i<s;i++)a.push(arguments[i]);if(a=a.length>2?a.splice(2,a.length-1):[],a=[n].concat(a),"undefined"!=typeof this.listeners[t]){var o=this.listeners[t].slice(),r=o.length;for(i=0;i<r;i++){var l=o[i];if(l&&l.callback){var c=a.concat(l.args);l.callback.apply(l.scope,c)}}}}},{key:"getEvents",value:function(){var t="";for(var e in this.listeners)for(var n=this.listeners[e].length,a=0;a<n;a++){var i=this.listeners[e][a];t+=i.scope&&i.scope.className?i.scope.className:"anonymous",t+=" listen for '"+e+"'\n"}return t}}]),t}());function $e(t,e,n){var a,i,s,o,r,l=function l(){var c=Date.now()-o;c<e&&c>=0?a=setTimeout(l,e-c):(a=null,n||(r=t.apply(s,i),a||(s=i=null)))};return function(){s=this,i=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,e)),c&&(r=t.apply(s,i),s=i=null),r}}var Te={debounce:$e,EventBus:new Fe,guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}).toUpperCase()}},Me=n("504b"),Le=(n("456d"),function(){function t(e){Object(Oe["a"])(this,t);var n=this;Object.keys(e).forEach(function(t){n[t]||(n[t]=n.copyObject(e[t]))})}return Object(De["a"])(t,[{key:"copyObject",value:function(t){var e,n=this;switch(Object(Me["a"])(t)){case"string":e=String(t);break;case"boolean":e=Boolean(t);break;case"object":e=n.deepCopy(t);break;default:e=e}return e}},{key:"deepCopy",value:function(t){var e=this;if(t instanceof Array){for(var n=[],a=0;a<t.length;++a)n[a]=e.deepCopy(t[a]);return n}if(t instanceof Object){var i={};for(var s in t)i[s]=e.deepCopy(t[s]);return i}return t}}]),t}()),Pe=Le,Ae=function(){function t(e){Object(Oe["a"])(this,t),this.type=e.type,this.view=e.view,this.name=e.name,this.propertys=[],this.uuid=Te.guid(),this.add(e)}return Object(De["a"])(t,[{key:"add",value:function(t){var e=this;M.forEach(function(n){t.propertyPackages.forEach(function(t){t==n.name&&e.propertys.push(new Pe(n))})})}}]),t}(),Ne=Ae,Ie=function(t){return new Ne(t)},Se={createWidget:Ie};a["a"].config.productionTip=!1,a["a"].use(be["a"]),a["a"].component(we.name,we),je.a.attach(document.body),new a["a"]({el:"#app",store:ge["a"],render:function(t){return t(he)},methods:{createWidget:function(t){return Se.createWidget(t)}}})},"5c0b":function(t,e,n){"use strict";var a=n("45c2"),i=n.n(a);i.a},"63a8":function(t,e,n){t.exports=n.p+"static/img/ide-hdlogo.3bc87d2a.png"},a116:function(t,e,n){},c21b:function(t,e,n){"use strict";var a=n("a116"),i=n.n(a);i.a},dc46:function(t,e,n){}});
//# sourceMappingURL=index.1bb958f7.js.map