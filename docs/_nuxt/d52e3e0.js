(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{425:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("a1ba4dc4",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(425)},433:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.txwhite[data-v-6ea3f66a]{color:#e8f2f5}.txgrey[data-v-6ea3f66a]{color:#9b9dbb}.txpalegrey[data-v-6ea3f66a]{color:#d6dae5}.txpink[data-v-6ea3f66a]{color:#dd5b9c}.txblack[data-v-6ea3f66a]{color:#3d4054}.bgwhite[data-v-6ea3f66a]{background-color:#e8f2f5}.bggrey[data-v-6ea3f66a]{background-color:#9b9dbb}.bgpalegrey[data-v-6ea3f66a]{background-color:#d6dae5}.bgpink[data-v-6ea3f66a]{background-color:#dd5b9c}.bgblack[data-v-6ea3f66a]{background-color:#2c3049}#wrapper[data-v-6ea3f66a]{margin-top:32px}#wrapper .twittershare[data-v-6ea3f66a]{margin:32px auto 64px;display:flex;flex-direction:row;width:116px;height:12px;padding:12px 16px;background-color:#1da1f2;border-radius:12px}#wrapper .twittershare .twittercap[data-v-6ea3f66a]{margin-left:8px;font-size:14px;color:#fff}#wrapper .information[data-v-6ea3f66a]{padding:12px 24px;display:flex;flex-direction:row;justify-content:flex-end;grid-gap:16px;gap:16px}#wrapper .information .writtenby[data-v-6ea3f66a]{margin-top:4px;font-family:"Dela Gothic One";font-size:20px}#wrapper .information .authericon[data-v-6ea3f66a]{width:48px;height:48px;border-radius:100%}#wrapper .information .autherinfo .auther[data-v-6ea3f66a]{display:flex;grid-gap:12px;gap:12px;font-family:"Dela Gothic One";font-size:20px}#wrapper .information .autherinfo .bio[data-v-6ea3f66a]{font-family:sans-serif;font-size:12px}#wrapper .disqus[data-v-6ea3f66a]{padding:12px 24px 24px}#wrapper .relateds[data-v-6ea3f66a]{padding:24px;display:flex;flex-wrap:wrap;grid-gap:24px;gap:24px}#wrapper .relateds .articlewrapper[data-v-6ea3f66a]{width:210px;border-radius:8px}#wrapper .relateds .articlewrapper .articleimg[data-v-6ea3f66a]{border-radius:8px}#wrapper .relateds .articlewrapper .articletitle[data-v-6ea3f66a]{font-weight:700;padding:12px;height:80px}#wrapper .capt[data-v-6ea3f66a]{padding:0 16px;display:flex;flex-direction:row;align-items:center}#wrapper .icon[data-v-6ea3f66a]{display:inline-flex;align-items:center}#wrapper .emp[data-v-6ea3f66a]{font-family:"Dela Gothic One";font-size:36px}#wrapper .ruler[data-v-6ea3f66a]{flex-grow:1;height:6px;margin-left:24px;border-radius:2px}#wrapper .front[data-v-6ea3f66a]{z-index:1}#wrapper .front[data-v-6ea3f66a],#wrapper .prel[data-v-6ea3f66a]{position:relative}#wrapper .wmax[data-v-6ea3f66a]{width:100%}#wrapper .w960[data-v-6ea3f66a]{max-width:960px}#wrapper .w1280[data-v-6ea3f66a]{max-width:1280px}#wrapper .center[data-v-6ea3f66a]{margin-left:auto;margin-right:auto}a[data-v-6ea3f66a]{text-decoration:none}',""]),t.exports=n},435:function(t,e,r){"use strict";r.r(e);r(4),r(71),r(51),r(52),r(267);var n={props:["caps"],data:function(){return{suffix:" - ミトリメ"}},methods:{twitterShare:function(){var text=["text",this.caps.title+this.suffix+"\n"],t=["url",this.caps.url],e=new URLSearchParams([text,t]).toString(),r="".concat("https://twitter.com/intent/tweet?").concat(e);window.open(r,"twitter")}}},d=(r(432),r(70)),o=r(130),c=r.n(o),l=r(186),f=r(161),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wmax",attrs:{id:"wrapper"}},[r("div",{staticClass:"center w960"},[r("div",{staticClass:"twittershare front",on:{click:t.twitterShare}},[r("v-icon",{staticClass:"icon",attrs:{color:"#ffffff",small:""}},[t._v(" mdi-twitter ")]),t._v(" "),r("div",{staticClass:"twittercap icon"},[t._v("ツイート")])],1),t._v(" "),r("div",{staticClass:"information prel wmax front bgblack"},[r("div",{staticClass:"writtenby txgrey"},[t._v("Written by")]),t._v(" "),r("v-img",{staticClass:"authericon",attrs:{src:t.caps.authericon,"max-width":"48px"}}),t._v(" "),r("div",{staticClass:"autherinfo"},[r("div",{staticClass:"auther txwhite"},[t._v("\n          "+t._s(t.caps.auther)+"\n          "),r("a",{staticClass:"icon",attrs:{href:"https://twitter.com/mitorime"}},[r("v-icon",{attrs:{color:"#1da1f2"}},[t._v(" mdi-twitter ")])],1)]),t._v(" "),r("div",{staticClass:"bio txgrey"},[t._v("\n          "+t._s(t.caps.bio)+"\n        ")])])],1)]),t._v(" "),r("div",{staticClass:"prel wmax bgblack"},[r("div",{staticClass:"center front w1280"},[r("div",{attrs:{"v-show":1==t.caps.comments}},[t._m(0),t._v(" "),r("Disqus",{staticClass:"disqus center w960"})],1),t._v(" "),r("div",{attrs:{"v-if":t.caps.relateds}},[t._m(1),t._v(" "),r("div",{staticClass:"relateds center w960"},t._l(t.caps.articles,(function(article){return r("nuxt-link",{key:article.no,staticClass:"articlewrapper bgpink",attrs:{to:article.url,tag:"div"}},[r("v-img",{staticClass:"articleimg",attrs:{src:article.image}}),t._v(" "),r("div",{staticClass:"articletitle txwhite"},[t._v("\n            "+t._s(article.title)+"\n            ")])],1)})),1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"capt"},[r("div",{staticClass:"emp txgrey"},[t._v("コメントを書く")]),t._v(" "),r("div",{staticClass:"ruler bggrey"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"capt"},[r("div",{staticClass:"emp txpink"},[t._v("関連記事")]),t._v(" "),r("div",{staticClass:"ruler bgpink"})])}],!1,null,"6ea3f66a",null);e.default=component.exports;c()(component,{VIcon:l.a,VImg:f.a})}}]);