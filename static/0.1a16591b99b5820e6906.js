webpackJsonp([0],{212:function(e,t,n){var r=n(213);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(106)("07711dd3",r,!0,{manualInject:!0})},213:function(e,t,n){(e.exports=n(105)(!1)).push([e.i,".spinner{transition:opacity .15s ease;animation:rotator 1.4s linear infinite;animation-play-state:paused}.spinner.show{animation-play-state:running}@keyframes rotator{0%{transform:scale(.5) rotate(0deg)}to{transform:scale(.5) rotate(270deg)}}.spinner .path{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;transform:rotate(135deg)}to{stroke-dashoffset:126;transform:rotate(450deg)}}",""])},214:function(e,t,n){var r=n(215);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(106)("6e6a2119",r,!0,{manualInject:!0})},215:function(e,t,n){(e.exports=n(105)(!1)).push([e.i,".comment-children .comment-children{margin-left:1.5em}.comment{border-top:1px solid #eee;position:relative}.comment .by,.comment .text,.comment .toggle{font-size:.9em;margin:1em 0}.comment .by{color:#828282}.comment .by a{color:#828282;text-decoration:underline}.comment .text{overflow-wrap:break-word}.comment .text a:hover{color:#f60}.comment .text pre{white-space:pre-wrap}.comment .toggle{background-color:#fffbf2;padding:.3em .5em;border-radius:4px}.comment .toggle a{color:#828282;cursor:pointer}.comment .toggle.open{padding:0;background-color:transparent;margin-bottom:-.5em}",""])},216:function(e,t,n){var r=n(217);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(106)("96f36368",r,!0,{manualInject:!0})},217:function(e,t,n){(e.exports=n(105)(!1)).push([e.i,".item-view-header{background-color:#fff;padding:1.8em 2em 1em;box-shadow:0 1px 2px rgba(0,0,0,.1)}.item-view-header h1{display:inline;font-size:1.5em;margin:0;margin-right:.5em}.item-view-header .host,.item-view-header .meta,.item-view-header .meta a{color:#828282}.item-view-header .meta a{text-decoration:underline}.item-view-comments{background-color:#fff;margin-top:10px;padding:0 2em .5em}.item-view-comments-header{margin:0;font-size:1.1em;padding:1em 0;position:relative}.item-view-comments-header .spinner{display:inline-block;margin:-15px 0}.comment-children{list-style-type:none;padding:0;margin:0}@media (max-width:600px){.item-view-header h1{font-size:1.25em}}",""])},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r),a=n(107),i=n(109),s=n(104),c=n(212),l=n.n(c),m=Object(s.d)(l.a)(function(e){var t=e.show;return t?o.a.createElement("svg",{className:"spinner"+(t?" show":""),width:"44px",height:"44px",viewBox:"0 0 44 44"},o.a.createElement("circle",{className:"path",fill:"none",strokeWidth:"4",strokeLinecap:"round",cx:"22",cy:"22",r:"20"})):null}),u=n(214),f=n.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y,g=Object(s.d)(f.a)(Object(a.b)(function(e){return{comments:e.items}})(function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return h(r,(n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(r),"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"Comment"}),Object.defineProperty(b(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{open:!0}}),Object.defineProperty(b(r),"pluralize",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return e+(1===e?" reply":" replies")}}),n))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state.open,n=this.props,r=n.comments[n.id];return r?o.a.createElement("li",{className:"comment"},o.a.createElement("div",{className:"by"},r.by?o.a.createElement(i.a,{to:"/user/"+r.by},r.by):null," "+Object(s.c)(r.time)," ago"),o.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:r.text||"<del>[Deleted]</del>"}}),r.kids&&r.kids.length?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"toggle"+(t?" open":"")},o.a.createElement("a",{onClick:function(){return e.setState({open:!t})}},t?"[-]":"[+] "+this.pluralize(r.kids.length)+" collapsed")),o.a.createElement("ul",{className:"comment-children",style:{display:t?"block":"none"}},r.kids.map(function(e){return o.a.createElement(g,{key:e,id:e})}))):null):null}}])&&d(n.prototype,r),a&&d(n,a),t}())),v=g,w=n(108),k=n(216),E=n.n(k);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"default",function(){return _});var _=Object(a.b)(function(e){return{items:e.items}},function(e){return{fetchItems:function(t){return e(Object(w.d)(t))}}})(y=Object(s.d)(E.a,!1,function(e){var t=e.props,n=t.items,r=t.match.params.id;return n[r]&&n[r].title})(y=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return x(r,(n=r=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{loading:!1}}),n))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),n=t,(r=[{key:"asyncBootstrap",value:function(){var e=this.props.match.params.id;return!!this.props.items[e]||this.props.fetchItems([e]).then(function(){return!0})}},{key:"fetchItems",value:function(){var e=this,t=this.item;t&&t.kids&&(this.setState({loading:!0}),this.fetchComments(t).then(function(){return e.setState({loading:!1})}))}},{key:"fetchComments",value:function(e){var t=this;if(e&&e.kids)return this.props.fetchItems(e.kids).then(function(){return Promise.all(e.kids.map(function(e){return t.fetchComments(t.props.items[e])}))})}},{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"render",value:function(){var e=this.state.loading,t=this.item;return t?o.a.createElement("div",{className:"item-view"},o.a.createElement("div",{className:"item-view-header"},o.a.createElement("a",{href:t.url,target:"_blank"},o.a.createElement("h1",null,t.title)),t.url?o.a.createElement("span",{className:"host"},"(",Object(s.a)(t.url),")"):null,o.a.createElement("p",{className:"meta"},t.score," points | by"," ",o.a.createElement(i.a,{to:"/user/"+t.by},t.by)," "+Object(s.c)(t.time)," ago")),o.a.createElement("div",{className:"item-view-comments"},o.a.createElement("p",{className:"item-view-comments-header"},t.kids?t.descendants+" comments":"No comments yet.",o.a.createElement(m,{show:e})),e||!t.kids?null:o.a.createElement("ul",{className:"comment-children"},t.kids.map(function(e){return o.a.createElement(v,{key:e,id:e})})))):null}},{key:"item",get:function(){return this.props.items[this.props.match.params.id]}}])&&j(n.prototype,r),a&&j(n,a),t}())||y)||y}});