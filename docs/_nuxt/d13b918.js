(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9],{455:function(t,o,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("298cd365",content,!0,{sourceMap:!1})},473:function(t,o,r){"use strict";r.r(o);var e={props:{title:String,message:String},data:function(){return{dialog:!0}}},n=r(70),c=r(130),l=r.n(c),d=r(273),v=r(474),m=r(448),_=r(511),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",[t._v("\n      "+t._s(t.message)+"\n    ")]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(o){t.dialog=!1}}},[t._v("閉じる")])],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:_.a})},488:function(t,o,r){"use strict";r(455)},489:function(t,o,r){var e=r(21)(!1);e.push([t.i,".txwhite[data-v-2784d0b4]{color:#e8f2f5}.txgrey[data-v-2784d0b4]{color:#9b9dbb}.txpalegrey[data-v-2784d0b4]{color:#d6dae5}.txpink[data-v-2784d0b4]{color:#dd5b9c}.txblack[data-v-2784d0b4]{color:#3d4054}.bold[data-v-2784d0b4]{font-weight:700}.bgwhite[data-v-2784d0b4]{background-color:#e8f2f5}.bggrey[data-v-2784d0b4]{background-color:#9b9dbb}.bgpalegrey[data-v-2784d0b4]{background-color:#d6dae5}.bgpink[data-v-2784d0b4]{background-color:#dd5b9c}.bgblack[data-v-2784d0b4]{background-color:#2c3049}#bg[data-v-2784d0b4]{position:fixed;width:100%;height:100%;background-color:#e8f2f5;background-size:cover}#main[data-v-2784d0b4]{position:relative;display:flex;flex-flow:column nowrap;align-items:center}#main #text[data-v-2784d0b4]{max-width:840px;width:100%;margin-top:24px;padding:0 16px;color:#3d4054}#twbg[data-v-2784d0b4]{position:fixed;width:100%;height:100%;background-color:#fff;background-size:cover}.main[data-v-2784d0b4]{position:relative;display:flex;flex-flow:column nowrap;align-items:center;padding:100px 32px 100px 24px}.tweet[data-v-2784d0b4]{max-width:500px;color:#0f1419}.username[data-v-2784d0b4]{color:#0f1419;font-weight:700}.screenname[data-v-2784d0b4],.twdate[data-v-2784d0b4]{color:#536471}.twmain[data-v-2784d0b4]{display:flex;flex-flow:column nowrap;grid-gap:0;gap:0;padding:8px 2px}.twicon[data-v-2784d0b4]{padding:5px;width:64px;height:64px;border-radius:50%}.cap-container[data-v-2784d0b4]{margin:6px;grid-gap:12px;gap:12px}.cap-normal[data-v-2784d0b4]{margin:8px;padding:16px;color:#0f1419;background-color:#fff}.cap-check[data-v-2784d0b4],.cap-normal[data-v-2784d0b4]{width:100%;border-radius:12px}.cap-check[data-v-2784d0b4]{padding:24px;background-color:rgba(125,255,171,.63922)}.cap-x[data-v-2784d0b4]{width:100%;padding:12px;background-color:rgba(255,125,153,.63922);border-radius:12px}.shadow[data-v-2784d0b4]{box-shadow:0 0 16px #ccc,inset 0 0 24px -6px #f8f8ff;transition:.6s}.shadow[data-v-2784d0b4]:hover{box-shadow:0 0 16px #888,inset 0 0 24px -6px #f8f8ff}.nowrap[data-v-2784d0b4]{flex-wrap:nowrap}.icon[data-v-2784d0b4]{display:inline-flex;align-items:center;margin-top:-4px}.twlink[data-v-2784d0b4]{color:#1995e0;text-decoration:none}.twlink[data-v-2784d0b4]:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}a[data-v-2784d0b4]{text-decoration:none}",""]),t.exports=e},518:function(t,o,r){"use strict";r.r(o);r(9),r(56);var e={data:function(){return{meta:{title:"固定されたツイート",description:"",type:"article",url:"https://mitori.me/about",image:"https://raw.githubusercontent.com/kdmch/blog/master/static/img/pin.png"},show:!1}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:type",property:"og:type",content:this.meta.type},{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:this.meta.url},{hid:"og:image",property:"og:image",content:this.meta.image},{hid:"twitter:card",name:"twitter:card",content:"summary"}]}},methods:{copyTag:function(t){navigator.clipboard.writeText(t)}}},n=(r(488),r(70)),c=r(130),l=r.n(c),d=r(417),v=r(509),m=r(186),_=r(510),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-app",[t.show?r("Popup",{attrs:{title:"",message:"copied!"}}):t._e(),t._v(" "),r("div",{attrs:{id:"twbg"}}),t._v(" "),r("div",{staticClass:"main"},[r("v-row",[r("a",{attrs:{href:"https://twitter.com/mitorime",target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"twicon",attrs:{src:"/icons/melmitori.png"}})]),t._v(" "),r("v-col",{staticClass:"tweet"},[r("a",{attrs:{href:"https://twitter.com/mitorime",target:"_blank",rel:"noopener noreferrer"}},[r("v-row",{staticClass:"nowrap"},[r("div",{staticClass:"username"},[t._v("みとり")]),t._v(" "),r("div",{staticClass:"screenname"},[t._v(" @mitorime ")]),t._v(" "),r("div",{staticClass:"twdate"},[t._v("· 2023/05/07")])])],1),t._v(" "),r("v-row",[r("div",{staticClass:"twmain"},[r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-twitter")]),t._v("ごちゃまぜのアカウントです。")],1),t._v(" "),r("div",[t._v("アグネスタキオン/言語学/ボカロ/プログラミング/作曲/絵/コスプレ(する方)/道路/ピノキオピー/原神/凋叶棕/音ゲー/短歌/デザイン/いろいろ")]),t._v(" "),r("br"),t._v(" "),r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-antenna")]),t._v("閲覧垢です→"),r("a",{staticClass:"twlink",attrs:{href:"https://twitter.com/laykatase",target:"_blank",rel:"noopener noreferrer"}},[t._v("@laykatase")])],1),t._v(" "),r("div",[t._v("閲覧垢でいいねしてこっちでRT、みたいなのをよくやります   お気になさらず")]),t._v(" "),r("br"),t._v(" "),r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-mastodon")]),t._v("疎開先→"),r("a",{staticClass:"twlink",attrs:{href:"https://fedibird.com/@mitori",target:"_blank",rel:"noopener noreferrer"}},[t._v("@mitori (Fedibird)")])],1),t._v(" "),r("div",[t._v("自鯖も考えたけど、単に技術不足なのと、維持費、サーバが死んだら私も死ぬ、などの理由からFedibirdに疎開してます。")]),t._v(" "),r("div",[t._v("ほぼTwitterにいるけど……")]),t._v(" "),r("br"),t._v(" "),r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-lock")]),t._v("縮小→"),r("a",{staticClass:"twlink",attrs:{href:"https://twitter.com/zilitz",target:"_blank",rel:"noopener noreferrer"}},[t._v("@zilitz")])],1),t._v(" "),r("div",[t._v("FFなら高確率で通ります。思考の吐き溜め。自己責任で。")]),t._v(" "),r("br"),t._v(" "),r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-link-variant")]),t._v("その他リンク")],1),t._v(" "),r("div",[r("a",{staticClass:"twlink",attrs:{href:"https://mitori.me",target:"_blank",rel:"noopener noreferrer"}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-web")]),t._v("blog: ミトリメ(mitori.me) "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-open-in-new")])],1)]),t._v(" "),r("div",[r("a",{staticClass:"twlink",attrs:{href:"mailto:mail@mitori.me",target:"_blank",rel:"noopener noreferrer"}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-email")]),t._v("email: mailあっとmitori.me "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-open-in-new")])],1)]),t._v(" "),r("div",[r("a",{staticClass:"twlink",attrs:{href:"https://github.com/kdmch",target:"_blank",rel:"noopener noreferrer"}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-github")]),t._v("GitHub: kdmch "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-open-in-new")])],1)]),t._v(" "),r("div",[r("a",{staticClass:"twlink",attrs:{href:"https://keybase.io/mitori",target:"_blank",rel:"noopener noreferrer"}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-key-variant")]),t._v("Keybase: mitori "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-open-in-new")])],1)]),t._v(" "),r("div",{staticClass:"twlink",on:{click:function(o){return t.copyTag("mitori#5200")}}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-chat")]),t._v("Discord: mitori#5200 "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-content-copy")])],1),t._v(" "),r("div",{staticClass:"twlink",on:{click:function(o){return t.copyTag("mitorik")}}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-virtual-reality")]),t._v("VRChat: mitorik "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-content-copy")])],1),t._v(" "),r("div",{staticClass:"twlink",on:{click:function(o){return t.copyTag("858144259")}}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-star-four-points")]),t._v("原神: 858144259 "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-content-copy")])],1),t._v(" "),r("br"),t._v(" "),r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#1995e0"}},[t._v("mdi-brush")]),t._v("絵やら曲やらをたまーに上げますが")],1),t._v(" "),r("div",[t._v("著作権ほぼ放棄でやってるので、素材にするのもAI学習も無断転載も自作発言もそのまま複製して売るのも完全OK！あなたのものです。自由にしてください！")]),t._v(" "),r("v-row",{staticClass:"cap-container"},[r("a",{attrs:{href:"https://elaws.e-gov.go.jp/document?lawid=345AC0000000048",target:"_blank",rel:"noopener noreferrer"}},[r("div",{staticClass:"cap-normal shadow"},[r("div",[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#c10600"}},[t._v("mdi-alert")]),r("b",[t._v(" ただし、特定個人・団体やすべての宗教的・政治的思想を称揚または攻撃する目的では使用しないでください。")])],1),t._v(" "),r("div",[t._v("また、ごく稀にコスプレ写真が上がりますが、"),r("b",[t._v("こちらは転載不可になります。著作権を侵害しない範囲での私的利用に留めてください。")])]),t._v(" "),r("div",[t._v("上記を逸脱した使用に関しては、発見次第しかるべき措置をとります。")])])])]),t._v(" "),r("div",[t._v("クオリティがアレなものしか作れてないけど、こういうのはしっかり言っておくべきですね……")]),t._v(" "),r("br")],1)]),t._v(" "),r("a",{attrs:{href:"https://twitter.com/mitorime",target:"_blank",rel:"noopener noreferrer"}},[r("v-row",{attrs:{justify:"space-between"}},[r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#526472"}},[t._v("mdi-comment-outline")]),t._v(" "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#526472"}},[t._v("mdi-repeat-variant")]),t._v(" "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#526472"}},[t._v("mdi-heart-outline")]),t._v(" "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#526472"}},[t._v("mdi-poll")]),t._v(" "),r("v-icon",{staticClass:"icon",attrs:{small:"",color:"#526472"}},[t._v("mdi-export-variant")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"2784d0b4",null);o.default=component.exports;l()(component,{Popup:r(473).default}),l()(component,{VApp:d.a,VCol:v.a,VIcon:m.a,VRow:_.a})}}]);