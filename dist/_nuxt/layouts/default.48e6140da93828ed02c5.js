webpackJsonp([3],{BDaV:function(t,a,e){"use strict";var s=e("CI4d"),i=e("bpf6"),n=e("VU/8"),r=n(s.a,i.a,null,null,null);a.a=r.exports},CI4d:function(t,a,e){"use strict";a.a={props:["item"],data:function(){return{}}}},Ma2J:function(t,a,e){"use strict";function s(t){e("S7H7")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("t/je"),n=e("rfWm"),r=e("VU/8"),o=s,c=r(i.a,n.a,o,"data-v-14efc616",null);a.default=c.exports},S7H7:function(t,a,e){var s=e("fvda");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("0229f0b8",s,!0)},bpf6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"nav-item",attrs:{href:t.item.href,title:t.item.label,target:"_blank"}},[t.item.icon?e("span",{staticClass:"icon"},[e("i",{class:["fa",t.item.icon]})]):t._e(),t.item.iconOnly?t._e():e("span",[t._v(t._s(t.item.label)+" ")])])},i=[],n={render:s,staticRenderFns:i};a.a=n},fvda:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".navbar[data-v-14efc616]{position:fixed;top:0;width:100%;-webkit-box-shadow:0 1px 2px hsla(0,0%,4%,.1);box-shadow:0 1px 2px hsla(0,0%,4%,.1);padding:8px 0;padding:.5rem 0;height:auto;z-index:1000}.navbar-brand[data-v-14efc616]{width:100%}.footer[data-v-14efc616]{position:fixed;bottom:0;width:100%;-webkit-box-shadow:0 -1px 2px hsla(0,0%,4%,.1);box-shadow:0 -1px 2px hsla(0,0%,4%,.1);padding:8px 0;padding:.5rem 0;z-index:1000}.is-active[data-v-14efc616]{font-weight:700}.is-static[data-v-14efc616]{pointer-events:none;opacity:.5}.hero[data-v-14efc616]{padding:65px 0}.nav-item[data-v-14efc616]:nth-child(2){margin-left:auto}",""])},rfWm:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app"},[e("header",{staticClass:"navbar has-shadow"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("nuxt-link",{staticClass:"nav-item",attrs:{to:"/"}},[e("img",{attrs:{src:t.$store.state.content.title.image,alt:"Logo"}})]),t._l(t.$store.state.content.nav.some,function(t,a){return e("nav-item",{key:a,attrs:{item:t}})}),t._l(t.$store.state.content.nav.about,function(t,a){return e("nav-item",{key:a,attrs:{item:t}})}),t._l(t.$store.state.content.nav.internal,function(a,s){return e("nuxt-link",{key:s,staticClass:"nav-item",attrs:{to:a.href,item:a}},[a.icon?e("span",{staticClass:"icon"},[e("i",{class:["fa",a.icon]})]):t._e()])})],2)])]),e("div",{staticClass:"hero is-fullheight",class:"is-"+t.$store.state.steps.selected},[e("main",{staticClass:"hero-body "},[e("div",{staticClass:"container "},[e("nuxt")],1)])]),e("div",{staticClass:"footer "},[e("nav",{staticClass:"breadcrumb has-arrow-separator is-centered"},[e("ul",t._l(t.$store.state.steps.keys,function(a,s){return e("li",{key:a,class:{"is-active":t.$store.state.steps.selected===a,"is-static":t.isStatic(a)}},[e("nuxt-link",{attrs:{to:"index"===a?"/":a}},[t._v("\n            "+t._s(s+1)+". \n            "),e("span",[t._v(t._s(t.$store.state.content.steps[a].label))])])],1)}))])])])},i=[],n={render:s,staticRenderFns:i};a.a=n},"t/je":function(t,a,e){"use strict";var s=e("BDaV");a.a={components:{NavItem:s.a},methods:{isStatic:function(t){return"edit"===t&&!this.$store.state.image||"share"===t&&!this.$store.state.filteredImage}}}}});
//# sourceMappingURL=default.48e6140da93828ed02c5.js.map