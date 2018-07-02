!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}([function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return a}),r.d(t,"g",function(){return u}),r.d(t,"h",function(){return c}),r.d(t,"d",function(){return l}),r.d(t,"e",function(){return f}),r.d(t,"f",function(){return p});var n=r(6),o=r.n(n),s="production",i="development"===s,a=i?"hash":"contenthash",u="localhost",c=process.env.PORT||4e3,l=i?"http://".concat(u,":").concat(c,"/"):"/",f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.a.resolve.apply(o.a,[process.cwd()].concat(t))},p=require},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("ssr-webpack-plugin")},function(e,t){e.exports=require("webpack-merge")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("mini-css-extract-plugin")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("koa-static-cache")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t){e.exports=require("friendly-errors-webpack-plugin")},function(e,t){e.exports=require("sw-precache-webpack-plugin")},function(e,t){e.exports=require("memory-fs")},function(e,t){e.exports=require("koa-webpack")},function(e,t){e.exports=require("react-server-renderer")},function(e,t){e.exports=require("lru-cache")},function(e,t){e.exports=require("koa-mount")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("koa-compress")},function(e,t){e.exports=require("koa-compose")},function(e,t){e.exports=require("koa-cash")},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),s=r(12),i=r.n(s),a=r(11),u=r.n(a),c=r(1),l=r.n(c),f=r(0),p=r(3),d=r.n(p),b=r(2),m=r(10),g=r.n(m),h=r(9),v=r.n(h),y=r(5),j=r.n(y);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=f.b,x=!O,k=function(e){return[e?{loader:"react-style-loader",options:{manualInject:e}}:j.a.loader,{loader:"css-loader",options:{minimize:x,souceMap:O}},{loader:"postcss-loader",options:{souceMap:O}},{loader:"sass-loader",options:{souceMap:O}}]},P=function(e){return{test:/\.js$/,loader:"babel-loader",exclude:/node_modules/,options:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){w(e,t,r[t])})}return e}({cacheDirectory:!0},e&&{presets:[["@babel/env",{modules:!1,exclude:["babel-plugin-transform-async-to-generator","babel-plugin-transform-regenerator"]}]]})}},S={mode:f.a,devtool:f.b&&"cheap-module-source-map",resolve:{alias:{lodash$:"lodash-es"},extensions:[".js",".scss"],modules:[Object(f.e)("src"),"node_modules"]},module:{rules:[{test:/\.pug$/,use:["apply-loader",{loader:"pug-loader",options:{pretty:f.b}}]},{test:/\.scss$/,oneOf:[{test:/app.scss$/,use:k()},{use:k(!0)}]}]},plugins:[new l.a.DefinePlugin({__DEV__:f.b}),new j.a({filename:"[name].[".concat(f.c,"].css")}),new v.a]},q=d.a.smart(S,{entry:{app:[Object(f.e)("src/entry-client.js")]},resolve:{alias:{"create-api":"./create-api-client.js"}},output:{publicPath:f.d,path:Object(f.e)("dist/static"),filename:"[name].[".concat(f.c,"].js")},module:{rules:[P()]},optimization:{runtimeChunk:{name:"manifest"},splitChunks:{chunks:"initial",name:"vendors",cacheGroups:{test:function(e){var t=e.context,r=e.request;return/node_modules/.test(t)&&!/\.css$/.test(r)}}}},plugins:[new l.a.DefinePlugin({"process.env.REACT_ENV":'"client"',__SERVER__:!1}),new b.SSRClientPlugin({filename:"../ssr-client-manifest.json"})]});f.b||q.plugins.push(new g.a({cacheId:"react-hn",filename:"service-worker.js",minify:!0,dontCacheBustUrlsMatching:/./,staticFileGlobsIgnorePatterns:[/\.map$/,/\.json$/],runtimeCaching:[{urlPattern:"/",handler:"networkFirst"},{urlPattern:/\/(top|new|show|ask|jobs)/,handler:"networkFirst"},{urlPattern:"/item/:id",handler:"networkFirst"},{urlPattern:"/user/:id",handler:"networkFirst"}]}));var _=q,M=r(8),E=r.n(M),R=d.a.smart(S,{entry:Object(f.e)("src/entry-server.js"),resolve:{alias:{"create-api":"./create-api-server.js"}},target:"node",output:{path:Object(f.e)("dist"),filename:"[name].[chunkhash].js",libraryTarget:"commonjs2"},externals:E()({whitelist:/\.s?css$/}),module:{rules:[P(!0)]},plugins:[new l.a.DefinePlugin({"process.env.REACT_ENV":'"server"',__SERVER__:!0}),new b.SSRServerPlugin]}),F=o()("1stg:server:dev");t.default=function(e){var t,r,n,o,s=new Promise(function(e){t=e}),a=function(){t(),e.apply(void 0,arguments)},c=l()(_),p=i()({compiler:c,devMiddleware:{stats:{colors:!0}}});c.plugin("done",function(e){(e=e.toJson()).errors.forEach(F),e.warnings.forEach(F),e.errors.length||p.then(function(e){o=e.devMiddleware.fileSystem,r=JSON.parse(o.readFileSync(Object(f.e)("dist/ssr-client-manifest.json"))),n&&a({bundle:n,clientManifest:r,fs:o})})});var d=new u.a,b=l()(R);return b.outputFileSystem=d,b.watch({},function(e,t){if(e)throw e;(t=t.toJson()).errors.length||(n=JSON.parse(d.readFileSync(Object(f.e)("dist/ssr-server-bundle.json"))),r&&a({bundle:n,clientManifest:r,fs:o}))}),{readyPromise:s,webpackMiddlewarePromise:p}}},function(e,t){e.exports=require("pug")},function(e,t,r){"use strict";r.r(t);var n=r(21),o=r.n(n),s=r(4),i=r.n(s),a=r(20),u=r.n(a),c=r(19),l=r.n(c),f=r(18),p=r.n(f),d=r(17),b=r.n(d),m=r(16),g=r.n(m),h=r(15),v=r.n(h),y=r(7),j=r.n(y),w=r(14),O=r.n(w),x=r(13),k=r(0);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S,q,_=i()("1stg:server"),M=k.b?r(23).renderFile(Object(k.e)("server/template.pug"),{pretty:!0}):o.a.readFileSync(Object(k.e)("dist/template.html"),"utf-8"),E=new u.a,R=O()(1e3),F=[g()(),v()("/public",j()(Object(k.e)("public"),{maxAge:31536e6})),async function(e,t){if(k.b)await S;else if(await e.cashed())return;if("GET"!==e.method||e.url.lastIndexOf(".")>e.url.lastIndexOf("/")||!["*/*","text/html"].find(function(t){return e.get("Accept").includes(t)}))return t();var r={ctx:e,title:"React Hackernews"};e.respond=!1;var n=e.res;q.renderToStream(r).on("afterRender",function(){e.status=r.code||200,e.set({"Content-Type":"text/html"})}).on("error",function(t){var r=t.status,o=t.url;if(o)return e.status=302,e.set({Location:o}),n.end();switch(e.status=r||500,r){case 404:return n.end("404 | Page Not Found");default:n.end("500 | Internal Server Error"),_("error during render : ".concat(o)),_(t.stack)}}).pipe(n)}],C=function(e,t){return Object(x.createBundleRenderer)(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){P(e,t,r[t])})}return e}({},t,{template:M,basedir:Object(k.e)("dist/static"),runInNewContext:!1}))};if(k.b){var T=r(22).default(function(e){var t=e.bundle,r=e.clientManifest;q=C(t,{clientManifest:r})}),$=T.readyPromise,A=T.webpackMiddlewarePromise;S=$,A.then(function(e){return E.use(e)})}else{q=C(Object(k.f)(Object(k.e)("dist/ssr-server-bundle.json")),{clientManifest:Object(k.f)(Object(k.e)("dist/ssr-client-manifest.json"))});var D={};F.splice(1,0,b()(),j()(Object(k.e)("dist/static"),{maxAge:31536e6},D),l()({get:function(e){return R.get(e)},set:function(e,t){return R.set(e,t)}})),D["/service-worker.js"].maxAge=0}E.use(p()(F)),E.listen(k.h,k.g,function(){_("Server start listening at %s:%s",k.g,k.h)})}]);