webpackJsonp([32],{IcnI:function(t,n,e){"use strict";var o=e("7+uW"),a=e("NYxO");o.default.use(a.b);var i=new a.b.Store;i.registerModule("JCFE",{state:{isLoading:!1},mutations:{updateLoadingStatus:function(t,n){t.isLoading=n.isLoading}}}),n.a=i},ghMI:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("fZjL"),a=e.n(o),i=e("7+uW"),u=e("/ocq"),c=e("IcnI");i.default.use(u.a);var r=new u.a({routes:[{path:"/",name:"Attence",component:function(t){return e.e(12).then(function(){var n=[e("CGoW")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"考勤管理",recordTable:!0}},{path:"/map",name:"Map",component:function(t){return e.e(17).then(function(){var n=[e("tFej")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"考勤位置"}},{path:"/record",name:"Record",component:function(t){return e.e(11).then(function(){var n=[e("qFvC")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"考勤记录"}},{path:"/recorddetail",name:"Detail",component:function(t){return e.e(18).then(function(){var n=[e("OncP")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"打卡详情"}},{path:"/with",name:"Success",component:function(t){return e.e(16).then(function(){var n=[e("U1Qf")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"打卡成功",recordTable:!0}},{path:"*",redirect:"/"}]});c.a.registerModule("ATTENCE",{state:{positions:[],current:{},today:{}},getters:{today:function(t){return t.today},positions:function(t){return t.positions},current:function(t){return a()(t.current).length?t.current:t.positions.length?t.positions[0]:{}}},mutations:{updatePositions:function(t,n){t.positions=n},updateCurrent:function(t,n){t.current=n},updateToday:function(t,n){t.today=n}}}),r.beforeEach(function(t,n,e){document.title=t.meta.title||document.title,c.a.commit("updateLoadingStatus",{isLoading:!0}),e()}),r.afterEach(function(t){c.a.commit("updateLoadingStatus",{isLoading:!1})}),n.default=r}},["ghMI"]);
//# sourceMappingURL=index.442bcf57fc8605fbc5e3.js.map