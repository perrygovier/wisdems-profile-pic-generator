webpackJsonp([4],{"5n3v":function(t,e,a){var s=a("lUI8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("2173cd56",s,!1,{sourceMap:!1})},BDaV:function(t,e,a){"use strict";var s=a("P05f"),i=a("GmPe"),n=a("VU/8")(s.a,i.a,!1,null,null,null);n.options.__file="components/NavItem.vue",e.a=n.exports},GmPe:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-item",attrs:{href:t.item.href,title:t.item.label,target:"_blank"}},[t.item.icon?a("span",{staticClass:"icon"},[a("i",{class:["fa",t.item.icon]})]):t._e(),t.item.iconOnly?t._e():a("span",[t._v(t._s(t.item.label)+" ")])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},Ma2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("bhKo"),i=a("R7nB"),n=!1;var r=function(t){n||a("5n3v")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-314f53c6",null);o.options.__file="layouts/default.vue",e.default=o.exports},P05f:function(t,e,a){"use strict";e.a={props:["item"],data:function(){return{}}}},R7nB:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("header",{staticClass:"navbar has-shadow"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("nuxt-link",{staticClass:"nav-item hide-sm is-hidden-mobile",attrs:{to:"/"}},[a("img",{attrs:{src:t.$store.state.content.title.image,alt:"Logo"}})]),a("a",{staticClass:"nav-item",attrs:{href:"https://wisdems.org",target:"_blank"}},[a("img",{attrs:{src:t.$store.state.content.title.wisdems,alt:"WisDems"}})]),t._l(t.$store.state.content.nav.some,function(t,e){return a("nav-item",{key:e,attrs:{item:t}})}),t._l(t.$store.state.content.nav.about,function(t,e){return a("nav-item",{key:e,attrs:{item:t}})}),t._l(t.$store.state.content.nav.internal,function(e,s){return a("nuxt-link",{key:s,staticClass:"nav-item",attrs:{to:e.href,item:e}},[e.icon?a("span",{staticClass:"icon"},[a("i",{class:["fa",e.icon]})]):t._e()])})],2)])]),a("main",{staticClass:"hero-body",class:"is-"+t.$store.state.steps.selected},[a("div",{staticClass:"container "},[a("nuxt")],1)]),a("footer",{staticClass:"footer "},[a("nav",{staticClass:"breadcrumb has-arrow-separator is-centered"},[a("ul",t._l(t.$store.state.steps.keys,function(e,s){return a("li",{key:e,class:{"is-active":t.$store.state.steps.selected===e,"is-static":t.isStatic(e)}},[a("nuxt-link",{attrs:{to:"index"===e?"/":e}},[t._v("\n            "+t._s(s+1)+". \n            "),a("span",[t._v(t._s(t.$store.state.content.steps[e].label))])])],1)}),0),a("a",{staticClass:"nav-item",attrs:{href:"https://wisdems.org",target:"_blank"}},[a("img",{attrs:{src:t.$store.state.content.footer.disclaimer.image,alt:t.$store.state.content.footer.disclaimer.text}})])])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},bhKo:function(t,e,a){"use strict";var s=a("BDaV");e.a={components:{NavItem:s.a},methods:{isStatic:function(t){return"upload"===t&&!this.$store.state.selectedoverlay||"edit"===t&&!this.$store.state.image||"share"===t&&!this.$store.state.filteredImage}}}},lUI8:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".app[data-v-314f53c6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100vh}.navbar[data-v-314f53c6]{width:100%;-webkit-box-shadow:0 1px 2px hsla(0,0%,4%,.1);box-shadow:0 1px 2px hsla(0,0%,4%,.1);padding:8px 0;padding:.5rem 0;height:auto;z-index:1000}.navbar-brand[data-v-314f53c6]{width:100%}.footer[data-v-314f53c6]{width:100%;-webkit-box-shadow:0 -1px 2px hsla(0,0%,4%,.1);box-shadow:0 -1px 2px hsla(0,0%,4%,.1);padding:8px 0;padding:.5rem 0;z-index:1000}.footer nav[data-v-314f53c6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.is-active[data-v-314f53c6]{font-weight:700}.is-static[data-v-314f53c6]{pointer-events:none;opacity:.5}.hero-body[data-v-314f53c6]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nav-item[data-v-314f53c6]:nth-child(3){margin-left:auto}@media screen and (max-width:375px){.footer .breadcrumb a[data-v-314f53c6]{padding-left:.2em;padding-right:.2em}}",""])}});