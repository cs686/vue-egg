module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=70)}([function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var u,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(e,t){return u.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:s,options:l}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r=n(10);function i(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}e.exports=function(e,t,n,o){if(o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),o){o.hasOwnProperty("styles")||(Object.defineProperty(o,"styles",{enumerable:!0,get:function(){return i(o._styles)}}),o._renderStyles=i);var a=o._styles||(o._styles={});t=r(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,i=0;i<r.length;i++){var o=r[i],a=o.media||"default",s=e[a];s?s.ids.indexOf(o.id)<0&&(s.ids.push(o.id),s.css+="\n"+o.css):e[a]={ids:[o.id],css:o.css,media:o.media}}}(a,t):function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,i=0;i<r.length;i++){var o=r[i];e[o.id]={ids:[o.id],css:o.css,media:o.media}}}(a,t)}}},function(e,t){("object"==typeof e&&"object"==typeof e.exports?e.exports:window).noop=function(){}},function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";var r=n(4);n.n(r).a.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},function(e,t){},function(e,t,n){"use strict";var r=n(4),i=n.n(r),o={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{staticClass:"header"},[e._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">Egg + Vue</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+e._ssrClass(null,{active:"/"===e.selectedMenu})+'>Server-Render</a></li> <li class="nav-item"><a href="/client"'+e._ssrClass(null,{active:"/client"===e.selectedMenu})+'>Client-Render</a></li> <li class="nav-item"><a href="/element"'+e._ssrClass(null,{active:"/element"===e.selectedMenu})+'>Element</a></li> <li class="nav-item"><a href="/app"'+e._ssrClass(null,{active:"/app"===e.selectedMenu})+">Single-Page</a></li></ul></div>")])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};var c=n(0)(o,s,!1,function(e){var t;(t=n(11)).__inject__&&t.__inject__(e)},null,"05e6a660");c.options.__file="app/web/component/layout/standard/header/header.vue";var u=c.exports,l=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};l._withStripped=!0;var d={render:l,staticRenderFns:[]};var p=n(0)({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},d,!1,function(e){var t;(t=n(13)).__inject__&&t.__inject__(e)},null,"b9415db8");p.options.__file="app/web/component/layout/standard/content/content.vue";var f={components:{LayoutHeader:u,LayoutContent:p.exports}},_=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._ssrNode(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};_._withStripped=!0;var v={render:_,staticRenderFns:[]};var h=n(0)(f,v,!1,function(e){var t;(t=n(8)).__inject__&&t.__inject__(e)},null,"18c82f70");h.options.__file="app/web/component/layout/standard/main.vue";var m={name:"Layout",props:["title","description","keywords"],components:{MainLayout:h.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};i.a.component(m.name,m)},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n(2);e.exports.__inject__=function(e){i("2b46e0d0",r,!1,e)}},function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n(2);e.exports.__inject__=function(e){i("3447c594",r,!1,e)}},function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n(2);e.exports.__inject__=function(e){i("77fc6650",r,!1,e)}},function(e,t,n){(t=e.exports=n(1)(!1)).i(n(3),""),t.push([e.i,"",""])},,function(e,t){e.exports=require("element-ui")},function(e,t){e.exports=require("axios")},,,,function(e,t,n){"use strict";var r=n(4),i=n.n(r),o=(n(5),n(6)),a=(n.n(o),n(7),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s={data:function(){return window.__INITIAL_STATE__||{}},init:function(e){return s.server(e)},client:function(e){i.a.prototype.$http=n(17),e.store?e.store.replaceState(s.data()):window.__INITIAL_STATE__&&(e.data=a(window.__INITIAL_STATE__,e.data&&e.data())),new i.a(e).$mount("#app")},server:function(e){return e.store&&e.router?function(t){e.router.push(t.state.url);var n=e.router.getMatchedComponents();return n?Promise.all(n.map(function(t){return t.preFetch?t.preFetch(e.store):null})).then(function(){return t.state=e.store.state,new i.a(e)}):Promise.reject({code:"404"})}:function(t){var n=new(i.a.extend(e))({data:t.state});return new Promise(function(e){e(n)})}},use:function(e){i.a.use(e)},component:function(e,t){i.a.component(e,t)}};t.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),i=n(16),o=n.n(i),a=n(4);n.n(a).a.use(o.a);var s={components:{},data:function(){return{pageIndex:1,pageSize:10}},methods:{fetch:function(){var e=this;this.$http.get("/pager?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize).then(function(t){e.total=t.data.total,e.list=t.data.list})},handleSelectionChange:function(e){},handleSizeChange:function(e){this.pageSize=e,this.fetch()},handleCurrentChange:function(e){this.pageIndex=e,this.fetch()},handleEdit:function(e,t){this.$message("你点击了编辑操作 index:"+e+", id:"+t.id)},handleDelete:function(e,t){this.$message("你点击了删除操作 index:"+e+", id:"+t.id)}},mounted:function(){}},c=function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",{attrs:{description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[t("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/upload?_csrf=M71t0GAmIYPUEn0D7_HdHIwE",multiple:""}},[t("i",{staticClass:"el-icon-upload"}),this._v(" "),t("div",{staticClass:"el-upload__text"},[this._v("将文件拖到此处，或"),t("em",[this._v("点击上传")])]),this._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("只能上传jpg/png文件，且不超过500kb")])])],1)};c._withStripped=!0;var u={render:c,staticRenderFns:[]};var l=n(0)(s,u,!1,function(e){var t;(t=n(71)).__inject__&&t.__inject__(e)},null,"7a630ccb");l.options.__file="app/web/page/elementjs/elementjs.vue";var d=l.exports,p=(n(3),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});r.a.use(o.a);t.default=r.a.init(p({},d))},function(e,t,n){var r=n(72);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n(2);e.exports.__inject__=function(e){i("6ab6abc2",r,!1,e)}},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])}]);