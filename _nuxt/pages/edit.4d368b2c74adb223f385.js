webpackJsonp([3],{"0QeT":function(t,e,i){var n=i("nlXL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("410914a6",n,!1,{sourceMap:!1})},"2jfC":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"2k24":function(t,e,i){"use strict";var n=i("Dd8w"),o=i.n(n),r=i("NYxO"),s=i("grTa"),a=i("EFqf");e.a={components:{Croppie:s.a},data:function(){return{filtering:!1}},computed:o()({},Object(r.mapState)({image:function(t){return t.image},filteredImage:function(t){return t.filteredImage},ratio:function(t){return t.selectedoverlay.ratio},title:function(t){return t.content.steps.edit.title},orientation:function(t){return t.orientation},overlay:function(t){return t.selectedoverlay.urls.lg},options:function(t){return t.content.steps.edit.options}}),{content:function(){return a(this.$store.state.content.steps.edit.content)}}),methods:o()({},Object(r.mapMutations)(["setSelectedStep","startFiltering"]),Object(r.mapActions)(["filterImage"]),{onContinue:function(){var t=this;this.filtering=!0,this.$refs.croppie.getCroppedImage().then(function(e){t.filterImage(e)})}}),fetch:function(t){var e=t.store,i=t.redirect;if(!e.state.image)return i("/")},watch:{filteredImage:function(t,e){t&&this.$router.push("share")}},mounted:function(){this.setSelectedStep("edit")}}},"3rCA":function(t,e,i){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div")};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},Ez4R:function(t,e,i){var n=i("2jfC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("e3cc8b94",n,!1,{sourceMap:!1})},TILn:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("2k24"),o=i("xv/z"),r=!1;var s=function(t){r||i("0QeT")},a=i("VU/8")(n.a,o.a,!1,s,null,null);a.options.__file="pages/edit.vue",e.default=a.exports},grTa:function(t,e,i){"use strict";var n=i("wAlo"),o=i("3rCA"),r=!1;var s=function(t){r||i("Ez4R")},a=i("VU/8")(n.a,o.a,!1,s,"data-v-284db11e",null);a.options.__file="components/Croppie.vue",e.a=a.exports},nlXL:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},wAlo:function(t,e,i){"use strict";e.a={props:["image","overlay","orientation","ratio"],methods:{getCroppedImage:function(){return this.croppie.result({type:"base64",size:"original",format:"png",quality:1})},updateImage:function(){var t=this;this.croppie.bind({url:this.image,orientation:this.orientation,zoom:1,points:[0,0,0,0]}).then(function(){t.croppie.setZoom(1)})}},mounted:function(){var t=i("8QGE"),e=this.$el;this.croppie=new t(e,{enableOrientation:!0,enforceBoundary:!1,viewport:{width:this.$el.offsetWidth,height:this.$el.offsetWidth*this.ratio},boundary:{width:this.$el.offsetWidth,height:this.$el.offsetWidth*this.ratio}}),this.updateImage(),e.querySelector(".cr-viewport").style.backgroundImage="url("+this.overlay+")"}}},"xv/z":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"columns"},[i("no-ssr",{staticClass:"column two-thirds no-scroll",staticStyle:{"align-self":"flex-start"}},[t.image?i("croppie",{ref:"croppie",attrs:{image:t.image,overlay:t.overlay,orientation:t.orientation,ratio:t.ratio}}):t._e()],1),i("div",{staticClass:"column"},[i("div",[i("h2",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{domProps:{innerHTML:t._s(t.content)}})]),i("div",{staticClass:"actions"},[i("button",{staticClass:"button is-primary",class:{"is-loading":t.filtering},on:{click:t.onContinue}},[i("span",[t._v(t._s(t.options.continue.label))])]),i("nuxt-link",{staticClass:"button is-link is-small",class:{"is-static":t.filtering},attrs:{to:"/"}},[i("span",[t._v(t._s(t.options.back.label))])])],1)])],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o}});