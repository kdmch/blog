(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{417:function(t,e,r){t.exports=r.p+"img/mitori.ea09259.png"},422:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3718fc84",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(422)},435:function(t,e,r){var n=r(21),o=r(436),d=r(417),f=n(!1);f.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap);"]);var l=o(d);f.push([t.i,'#sharebelow[data-v-3e58f6a8]{padding:24px 20px 24px 24px;display:flex;justify-content:space-between;font-size:larger;font-family:"Josefin Sans",sans-serif;grid-gap:12px;gap:12px}#sharebelow #date[data-v-3e58f6a8]{padding-left:24px;color:#ffc3d8}#sharebelow #share-buttons[data-v-3e58f6a8]{display:flex;justify-content:right;grid-gap:10px;gap:10px}#sharebelow #share-buttons #sharecap[data-v-3e58f6a8]{color:#5195fe;font-style:italic;vertical-align:middle;margin-right:8px}#writtenby[data-v-3e58f6a8]{font-family:"Josefin Sans",sans-serif;padding:30px;background-color:#dd5b9c;border-radius:0 0 30px 30px/0 0 30px 30px;display:flex;flex-wrap:wrap;justify-content:space-around}#writtenby #wbwrap[data-v-3e58f6a8]{width:350px;margin-bottom:20px}#writtenby #wb[data-v-3e58f6a8]{font-size:large;color:#ffc3d8}#writtenby #auther[data-v-3e58f6a8]{margin:12px;display:flex}#writtenby #auther #authericon[data-v-3e58f6a8]{background-image:url('+l+");background-size:contain;width:80px;height:80px;border-radius:40px}#writtenby #auther #autherprofile[data-v-3e58f6a8]{margin-left:12px;color:#dff2ff}#writtenby #auther #autherprofile #authername[data-v-3e58f6a8]{font-size:3.2vh}#writtenby #auther #autherprofile #autherbio[data-v-3e58f6a8]{margin-left:12px;font-size:2vh}#writtenby #rawrap[data-v-3e58f6a8]{width:350px}#writtenby #ra[data-v-3e58f6a8]{font-size:large;color:#ffc3d8}#writtenby #rarticle[data-v-3e58f6a8]{display:flex;flex-flow:column nowrap;grid-gap:16px;gap:16px}.ralinker[data-v-3e58f6a8]{display:flex;margin-top:12px;height:80px;border:2px solid #dff2ff;border-radius:20px}.ralinker .rarticleimg[data-v-3e58f6a8]{background-size:contain;width:80px;height:80px;margin-top:-2px;margin-left:-2px;border-radius:20px}.ralinker .rarticledetail[data-v-3e58f6a8]{font-family:sans-serif;margin-left:12px;color:#dff2ff}.ralinker .rarticledetail .rarticletitle[data-v-3e58f6a8]{font-size:2.7vh;font-weight:700}.ralinker .rarticledetail .rarticletext[data-v-3e58f6a8]{margin-left:12px;font-size:2vh}a[data-v-3e58f6a8]{text-decoration:none}",""]),t.exports=f},436:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},438:function(t,e,r){"use strict";r.r(e);r(4),r(71),r(51),r(52),r(266);var n={props:["info"],data:function(){return{suffix:" - ミトリメ"}},methods:{twitterShare:function(){var text=["text",this.info.pagename+this.suffix+"\n"],t=["url",this.info.url],e=new URLSearchParams([text,t]).toString(),r="".concat("https://twitter.com/intent/tweet?").concat(e);window.open(r,"twitter")}}},o=(r(434),r(70)),d=r(130),f=r.n(d),l=r(186),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footwrap"}},[n("div",{attrs:{id:"sharebelow"}},[n("div",{attrs:{id:"date"}},[t._v(t._s(t.info.updated))]),t._v(" "),n("div",{attrs:{id:"share-buttons"}},[n("div",{attrs:{id:"sharecap"}},[t._v("SHARE!")]),t._v(" "),n("v-icon",{attrs:{color:"#1da1f2",large:""},on:{click:t.twitterShare}},[t._v(" mdi-twitter ")]),t._v(" "),n("v-icon",{attrs:{color:"#4267b2",large:""}},[t._v(" mdi-facebook ")]),t._v(" "),n("v-icon",{attrs:{color:"#06c755",large:""}},[t._v(" mdi-chat-processing ")])],1)]),t._v(" "),n("div",{attrs:{id:"writtenby"}},[n("div",{attrs:{id:"wbwrap"}},[n("div",{attrs:{id:"wb"}},[t._v("WRITTEN BY")]),t._v(" "),n("div",{attrs:{id:"auther"}},[n("div",{attrs:{id:"authericon"}}),t._v(" "),n("div",{attrs:{id:"autherprofile"}},[n("div",{attrs:{id:"authername"}},[t._v("\n            "+t._s(t.info.auther)+"\n            "),n("v-icon",{attrs:{color:"#dff2ff",medium:""}},[t._v(" mdi-check-decagram ")])],1),t._v(" "),n("div",{attrs:{id:"autherbio"}},[t._v(t._s(t.info.bio))])])])]),t._v(" "),n("div",{attrs:{id:"rawrap"}},[n("div",{attrs:{id:"ra"}},[t._v("\n        RELATED ARTICLES\n        "),n("v-icon",{attrs:{color:"#f3abc0",medium:""}},[t._v(" mdi-arrow-top-right-thick ")])],1),t._v(" "),n("div",{attrs:{id:"rarticle"}},t._l(t.info.relateds,(function(e){return n("div",{key:e.no,staticClass:"rarticlewrap"},[n("nuxt-link",{staticClass:"ralinker",attrs:{to:e.path,tag:"div"}},[n("img",{staticClass:"rarticleimg",attrs:{src:r(417)}}),t._v(" "),n("div",{staticClass:"rarticledetail"},[n("div",{staticClass:"rarticletitle"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"rarticletext"},[t._v(t._s(e.caption))])])])],1)})),0)])])])}),[],!1,null,"3e58f6a8",null);e.default=component.exports;f()(component,{VIcon:l.a})}}]);