module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/public/",n(n.s=55)}([function(t,e){t.exports=function(t,e,n,i,r,s){var a,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,o=t.default);var u,l="function"==typeof o?o.options:o;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=i),u){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:o,options:l}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(s).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i=n(10);function r(t){var e="";for(var n in t){var i=t[n];e+='<style data-vue-ssr-id="'+i.ids.join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}t.exports=function(t,e,n,s){if(s||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),s){s.hasOwnProperty("styles")||(Object.defineProperty(s,"styles",{enumerable:!0,get:function(){return r(s._styles)}}),s._renderStyles=r);var a=s._styles||(s._styles={});e=i(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var s=i[r],a=s.media||"default",o=t[a];o?o.ids.indexOf(s.id)<0&&(o.ids.push(s.id),o.css+="\n"+s.css):t[a]={ids:[s.id],css:s.css,media:s.media}}}(a,e):function(t,e){for(var n=0;n<e.length;n++)for(var i=e[n].parts,r=0;r<i.length;r++){var s=i[r];t[s.id]={ids:[s.id],css:s.css,media:s.media}}}(a,e)}}},function(t,e){("object"==typeof t&&"object"==typeof t.exports?t.exports:window).noop=function(){}},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";var i=n(4);n.n(i).a.filter("removeHtml",function(t){return t&&t.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},function(t,e){},function(t,e,n){"use strict";var i=n(4),r=n.n(i),s={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("header",{staticClass:"header"},[t._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">Egg + Vue</a></h1> <ul class="nav"><li class="nav-item"><a href="/"'+t._ssrClass(null,{active:"/"===t.selectedMenu})+'>Server-Render</a></li> <li class="nav-item"><a href="/client"'+t._ssrClass(null,{active:"/client"===t.selectedMenu})+'>Client-Render</a></li> <li class="nav-item"><a href="/element"'+t._ssrClass(null,{active:"/element"===t.selectedMenu})+'>Element</a></li> <li class="nav-item"><a href="/app"'+t._ssrClass(null,{active:"/app"===t.selectedMenu})+">Single-Page</a></li></ul></div>")])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};var c=n(0)(s,o,!1,function(t){var e;(e=n(11)).__inject__&&e.__inject__(t)},null,"05e6a660");c.options.__file="app/web/component/layout/standard/header/header.vue";var u=c.exports,l=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};l._withStripped=!0;var d={render:l,staticRenderFns:[]};var p=n(0)({name:"v-content",data:function(){return{}},components:{},mounted:function(){}},d,!1,function(t){var e;(e=n(13)).__inject__&&e.__inject__(t)},null,"b9415db8");p.options.__file="app/web/component/layout/standard/content/content.vue";var f={components:{LayoutHeader:u,LayoutContent:p.exports}},v=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),this._ssrNode(" "),e("LayoutContent",[e("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};v._withStripped=!0;var _={render:v,staticRenderFns:[]};var h=n(0)(f,_,!1,function(t){var e;(e=n(8)).__inject__&&e.__inject__(t)},null,"18c82f70");h.options.__file="app/web/component/layout/standard/main.vue";var m={name:"Layout",props:["title","description","keywords"],components:{MainLayout:h.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};r.a.component(m.name,m)},function(t,e,n){var i=n(9);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(2);t.exports.__inject__=function(t){r("2b46e0d0",i,!1,t)}},function(t,e,n){(e=t.exports=n(1)(!1)).i(n(3),""),e.push([t.i,"body{margin:0}a{text-decoration:none}",""])},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],a=s[0],o={id:t+":"+r,css:s[1],media:s[2],sourceMap:s[3]};i[a]?i[a].parts.push(o):n.push(i[a]={id:a,parts:[o]})}return n}},function(t,e,n){var i=n(12);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(2);t.exports.__inject__=function(t){r("3447c594",i,!1,t)}},function(t,e,n){(e=t.exports=n(1)(!1)).i(n(3),""),e.push([t.i,"",""])},function(t,e,n){var i=n(14);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(2);t.exports.__inject__=function(t){r("77fc6650",i,!1,t)}},function(t,e,n){(e=t.exports=n(1)(!1)).i(n(3),""),e.push([t.i,"",""])},function(t,e,n){"use strict";e.a=function(t){if(t.store&&t.router)return function(e){t.router.push(e.state.url);var n=t.router.getMatchedComponents();return n?Promise.all(n.map(function(e){return e.preFetch?e.preFetch(t.store):null})).then(function(){return e.state=t.store.state,new r.a(t)}):Promise.reject({code:"404"})};return function(e){var n=r.a.extend(t),i=new n({data:e.state});return new Promise(function(t){t(i)})}};var i=n(4),r=n.n(i),s=(n(5),n(6));n.n(s),n(7)},,,,,function(t,e,n){t.exports=n.p+"img/loading.0c81ad12.gif"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(15);var r={components:{},data:function(){return{isFinish:!1,isLoading:!1,pageIndex:1,pageSize:10}},computed:{lists:function(){return this.list}},methods:{fetch:function(){var t=this;this.$http.get(location.origin+"/pager?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize).then(function(e){e.data.list&&e.data.list.length?(t.total=e.data.total,t.list=t.list.concat(e.data.list)):t.isFinish=!0,t.isLoading=!1})},loadPage:function(){var t=this;this.isFinish||this.isLoading||(this.isLoading=!0,this.pageIndex++,setTimeout(function(){t.fetch()},1500))}},mounted:function(){var t=this;new Date,window.addEventListener("scroll",function(){t.loadPage()},!1)}},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",{attrs:{description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[i("div",{staticClass:"container smart-container"},[i("div",{staticClass:"row row-offcanvas row-offcanvas-right"},[i("div",{staticClass:"col-xs-12 col-sm-9"},[i("ul",{staticClass:"smart-artiles",attrs:{id:"articleList"}},t._l(t.lists,function(e){return i("li",[i("div",{staticClass:"point"},[t._v("+"+t._s(e.hits))]),t._v(" "),i("div",{staticClass:"card"},[i("h2",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),i("div",[i("ul",{staticClass:"actions"},[i("li",[i("time",{staticClass:"timeago"},[t._v(t._s(e.moduleName))])]),t._v(" "),i("li",{staticClass:"tauthor"},[i("a",{staticClass:"get",attrs:{href:"#",target:"_blank"}},[t._v("Sky")])]),t._v(" "),i("li",[i("a",[t._v("+收藏")])]),t._v(" "),i("li",[i("span",{staticClass:"timeago"},[t._v(t._s(e.summary))])]),t._v(" "),i("li",[i("span",{staticClass:"timeago"})])])])])])})),t._v(" "),t.isLoading?i("div",{staticClass:"smart-pager",attrs:{id:"pagerBottom"}},[i("img",{attrs:{src:n(20)}})]):t._e()])])])])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};var o=n(0)(r,a,!1,function(t){var e;(e=n(56)).__inject__&&e.__inject__(t)},null,"faac67b6");o.options.__file="app/web/page/index/index.vue";var c=o.exports,u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.default=Object(i.a)(u({},c))},function(t,e,n){var i=n(57);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n(2);t.exports.__inject__=function(t){r("3219e2a3",i,!1,t)}},function(t,e,n){(e=t.exports=n(1)(!1)).i(n(3),""),e.push([t.i,"",""])}]);