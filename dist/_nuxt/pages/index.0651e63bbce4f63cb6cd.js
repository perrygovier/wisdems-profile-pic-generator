webpackJsonp([1],{"/TYz":function(t,e,n){"use strict";function i(t){n("SZ76")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("rPYw"),a=n("Vban"),s=n("VU/8"),r=i,c=s(o.a,a.a,r,"data-v-042d2e01",null);e.default=c.exports},"7oyR":function(t,e,n){var i=n("NXTJ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("c33e2fec",i,!0)},Jsqd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image is-16by9"},[n("img",{attrs:{src:t.image}}),t.overlay?n("img",{attrs:{src:t.overlay}}):t._e()])},o=[],a={render:i,staticRenderFns:o};e.a=a},NXTJ:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},SZ76:function(t,e,n){var i=n("qcFi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3b0f2d15",i,!0)},Vban:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("label",{attrs:{for:"file"}},[n("photo",{class:{"is-static":t.uploading},attrs:{image:t.avatars[0],overlay:t.overlay}})],1)]),n("div",{staticClass:"column"},[n("header",[n("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),n("p",[t._v("\n        "+t._s(t.prompt)+"\n      ")])]),n("div",{staticClass:"actions has-text-centered"},[n("label",{staticClass:"button is-primary",class:{"is-loading":t.uploading},attrs:{for:"file"}},[n("span",[t._v(t._s(t.buttons.default.label)+" ")]),n("span",{staticClass:" icon "},[n("i",{class:["fa",t.buttons.default.icon]})])])])]),n("input",{attrs:{type:"file",accept:"image/*",name:"file",id:"file"},on:{change:function(e){t.filesChange(e.target.files)}}})])},o=[],a={render:i,staticRenderFns:o};e.a=a},YsGF:function(t,e,n){"use strict";e.a={props:["image","overlay"],mounted:function(){}}},qcFi:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"input[data-v-042d2e01]{opacity:0;position:absolute;height:0;width:0}button[data-v-042d2e01]{margin-top:4px;margin-top:.25rem}",""])},rPYw:function(t,e,n){"use strict";var i=n("Dd8w"),o=n.n(i),a=n("NYxO"),s=n("xhUj"),r=n("Mxx2");e.a={components:{Photo:s.a},data:function(){return{uploading:!1}},computed:o()({},Object(a.mapState)({image:function(t){return t.image},title:function(t){return t.content.steps.index.title},prompt:function(t){return t.content.steps.index.prompt},avatars:function(t){return t.content.avatars},overlay:function(t){return t.content.overlay.lg},buttons:function(t){return t.content.steps.index.buttons},facebook:function(t){return t.facebook}})),methods:o()({},Object(a.mapActions)(["uploadFile","useImage"]),Object(a.mapMutations)({addError:"addError",setOrientation:"setOrientation",setSelectedStep:"setSelectedStep",facebookResponse:"facebook/response"}),{getProfilePic:function(){var t=this;this.uploading=!0,r.a.getProfilePicture(this.facebook.authResponse).then(function(e){t.useImage(e)}).catch(function(e){t.uploading=!1,console.error("Facebook profile pic",e)})},useProfilePic:function(){var t=this;this.facebook.connected?this.getProfilePic():r.a.login().then(function(e){t.facebookResponse(e.response),t.getProfilePic()}).catch(function(t){console.error("Facebook login",t)})},filesChange:function(t){this.uploading=!0,console.log(t);var e=t?t[0]:null;if(!e)return void this.addError(new Error("No file"));if(!e.type.match("image.*"))return void this.addError(new Error("File is not an image"));var i=n("sbrb"),o=this;i.getData(e,function(){o.setOrientation(i.getTag(this,"Orientation"))}),this.uploadFile(e)}}),watch:{image:function(t,e){t&&this.$router.push("edit")}},mounted:function(){this.setSelectedStep("index")}}},xhUj:function(t,e,n){"use strict";function i(t){n("7oyR")}var o=n("YsGF"),a=n("Jsqd"),s=n("VU/8"),r=i,c=s(o.a,a.a,r,"data-v-eb04d5e2",null);e.a=c.exports}});
//# sourceMappingURL=index.0651e63bbce4f63cb6cd.js.map