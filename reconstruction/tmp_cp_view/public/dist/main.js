webpackJsonp([2],[,,,function(e,t,n){"use strict";var o={};o.title=function(e){e=e?e+" - Home":"Easy-Monitor",window.document.title=e},t.a=o},function(e,t,n){"use strict";var o=[{path:"/",redirect:"/index"},{path:"/index",meta:{title:""},component:function(e){return n.e(1).then(function(){var t=[n(15)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profiler",meta:{title:""},component:function(e){return n.e(0).then(function(){var t=[n(16)];e.apply(null,t)}.bind(this)).catch(n.oe)}}];t.a=o},function(e,t){},function(e,t,n){n(12);var o=n(7)(n(10),n(13),"data-v-76fa627e",null);o.options.__file="/Users/hyjsmac/git/easy-monitor/reconstruction/tmp_vue_client/src/app.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),a.computed=c}return{esModule:r,exports:u,options:a}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(1),u=n.n(r),i=n(2),a=n(4),c=n(3),s=n(6),f=n.n(s),d=n(5);n.n(d);o.default.use(i.a),o.default.use(u.a);var l={mode:"history",routes:a.a},p=new i.a(l);p.beforeEach(function(e,t,n){u.a.LoadingBar.start(),c.a.title(e.meta.title),n()}),p.afterEach(function(e,t,n){u.a.LoadingBar.finish(),window.scrollTo(0,0)}),new o.default({el:"#app",router:p,render:function(e){return e(f.a)}}),t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},,function(e,t){},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}],[9]);