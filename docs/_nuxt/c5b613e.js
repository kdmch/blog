(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{424:function(t,r,e){var content=e(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("4766b9c2",content,!0,{sourceMap:!1})},435:function(t,r,e){"use strict";e(424)},436:function(t,r,e){var n=e(21)(!1);n.push([t.i,'.txwhite[data-v-b049af16]{color:#e8f2f5}.txgrey[data-v-b049af16]{color:#9b9dbb}.txpalegrey[data-v-b049af16]{color:#d6dae5}.txpink[data-v-b049af16]{color:#dd5b9c}.txblack[data-v-b049af16]{color:#3d4054}.bold[data-v-b049af16]{font-weight:700}.bgwhite[data-v-b049af16]{background-color:#e8f2f5}.bggrey[data-v-b049af16]{background-color:#9b9dbb}.bgpalegrey[data-v-b049af16]{background-color:#d6dae5}.bgpink[data-v-b049af16]{background-color:#dd5b9c}.bgblack[data-v-b049af16]{background-color:#2c3049}#wrapper[data-v-b049af16]{margin-top:32px}#wrapper .twittershare[data-v-b049af16]{margin:32px auto 64px;display:flex;flex-direction:row;width:116px;height:12px;padding:12px 16px;background-color:#1da1f2;border-radius:12px}#wrapper .twittershare .twittercap[data-v-b049af16]{margin-left:8px;font-size:14px;color:#fff}#wrapper .information[data-v-b049af16]{padding:12px 24px;display:flex;flex-direction:row;justify-content:flex-end;grid-gap:16px;gap:16px}#wrapper .information .writtenby[data-v-b049af16]{margin-top:4px;font-family:"Dela Gothic One";font-size:20px}#wrapper .information .authericon[data-v-b049af16]{width:48px;height:48px;border-radius:100%}#wrapper .information .autherinfo .auther[data-v-b049af16]{display:flex;grid-gap:12px;gap:12px;font-family:"Dela Gothic One";font-size:20px}#wrapper .information .autherinfo .bio[data-v-b049af16]{font-family:sans-serif;font-size:12px}#wrapper .disqus[data-v-b049af16]{padding:12px 24px 24px}#wrapper .relateds[data-v-b049af16]{padding:24px;display:flex;flex-wrap:wrap;grid-gap:24px;gap:24px}#wrapper .relateds .articlewrapper[data-v-b049af16]{width:210px;border-radius:8px}#wrapper .relateds .articlewrapper .articleimg[data-v-b049af16]{border-radius:8px}#wrapper .relateds .articlewrapper .articletitle[data-v-b049af16]{font-weight:700;padding:12px;height:80px}#wrapper .capt[data-v-b049af16]{padding:0 16px;display:flex;flex-direction:row;align-items:center}#wrapper .icon[data-v-b049af16]{display:inline-flex;align-items:center}#wrapper .emp[data-v-b049af16]{font-family:"Dela Gothic One";font-size:36px}#wrapper .ruler[data-v-b049af16]{flex-grow:1;height:6px;margin-left:24px;border-radius:2px}#wrapper .front[data-v-b049af16]{z-index:1}#wrapper .front[data-v-b049af16],#wrapper .prel[data-v-b049af16]{position:relative}#wrapper .wmax[data-v-b049af16]{width:100%}#wrapper .w960[data-v-b049af16]{max-width:960px}#wrapper .w1280[data-v-b049af16]{max-width:1280px}#wrapper .center[data-v-b049af16]{margin-left:auto;margin-right:auto}a[data-v-b049af16]{text-decoration:none}',""]),t.exports=n},439:function(t,r,e){"use strict";e.r(r);e(4),e(71),e(51),e(52),e(267);var n={props:["caps"],data:function(){return{suffix:" - ミトリメ"}},methods:{twitterShare:function(){var text=["text",this.caps.title+this.suffix+"\n"],t=["url",this.caps.url],r=new URLSearchParams([text,t]).toString(),e="".concat("https://twitter.com/intent/tweet?").concat(r);window.open(e,"twitter")}}},d=(e(435),e(70)),o=e(130),c=e.n(o),l=e(186),f=e(161),component=Object(d.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"wmax",attrs:{id:"wrapper"}},[e("div",{staticClass:"center w1280"},[e("div",{staticClass:"twittershare front",on:{click:t.twitterShare}},[e("v-icon",{staticClass:"icon",attrs:{color:"#ffffff",small:""}},[t._v(" mdi-twitter ")]),t._v(" "),e("div",{staticClass:"twittercap icon"},[t._v("ツイート")])],1)]),t._v(" "),e("div",{staticClass:"information prel wmax front bgblack"},[e("div",{staticClass:"writtenby txgrey"},[t._v("Written by")]),t._v(" "),e("v-img",{staticClass:"authericon",attrs:{src:t.caps.authericon,"max-width":"48px"}}),t._v(" "),e("div",{staticClass:"autherinfo"},[e("div",{staticClass:"auther txwhite"},[t._v("\n        "+t._s(t.caps.auther)+"\n        "),e("a",{staticClass:"icon",attrs:{href:"https://twitter.com/mitorime"}},[e("v-icon",{attrs:{color:"#1da1f2"}},[t._v(" mdi-twitter ")])],1)]),t._v(" "),e("div",{staticClass:"bio txgrey"},[t._v("\n        "+t._s(t.caps.bio)+"\n      ")])])],1),t._v(" "),e("div",{staticClass:"prel wmax bgblack"},[e("div",{staticClass:"center front w1280"},[e("div",{attrs:{"v-show":1==t.caps.comments}},[t._m(0),t._v(" "),e("Disqus",{staticClass:"disqus center w960"})],1),t._v(" "),e("div",{attrs:{"v-if":t.caps.relateds}},[t._m(1),t._v(" "),e("div",{staticClass:"relateds center w960"},t._l(t.caps.articles,(function(article){return e("nuxt-link",{key:article.no,staticClass:"articlewrapper bgpink",attrs:{to:article.url,tag:"div"}},[e("v-img",{staticClass:"articleimg",attrs:{src:article.image}}),t._v(" "),e("div",{staticClass:"articletitle txwhite"},[t._v("\n            "+t._s(article.title)+"\n            ")])],1)})),1)])])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"capt"},[e("div",{staticClass:"emp txgrey"},[t._v("コメントを書く")]),t._v(" "),e("div",{staticClass:"ruler bggrey"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"capt"},[e("div",{staticClass:"emp txpink"},[t._v("関連記事")]),t._v(" "),e("div",{staticClass:"ruler bgpink"})])}],!1,null,"b049af16",null);r.default=component.exports;c()(component,{VIcon:l.a,VImg:f.a})}}]);