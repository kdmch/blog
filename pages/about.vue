<template>
  <v-app>
    <Popup v-if="show" title="" message="copied!" />
    <div id="twbg" />
    <div class="main">
      <v-row>
        <a href="https://twitter.com/mitorime" target="_blank" rel="noopener noreferrer">
          <img class="twicon" src="/icons/melmitori.png">
        </a>
        <v-col class="tweet">
          <a href="https://twitter.com/mitorime" target="_blank" rel="noopener noreferrer">
            <v-row class="nowrap">
              <div class="username">みとり</div>
              <div class="screenname">&nbsp;@mitorime&nbsp;</div>
              <div class="twdate">·&nbsp;2023/05/14</div>
            </v-row>
          </a>
          <v-row>
            <div class="twmain">
              <div><v-icon small color="#1995e0" class="icon">mdi-shimmer</v-icon>ごちゃまぜのアカウントです。</div>
              <div>アグネスタキオン/言語学/ボカロ/プログラミング/作曲/絵/コスプレ(する方)/道路/ピノキオピー/原神/凋叶棕/音ゲー/短歌/デザイン/いろいろ</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-antenna</v-icon>閲覧垢です→<a href="https://twitter.com/laykatase" target="_blank" rel="noopener noreferrer" class="twlink">@laykatase</a></div>
              <div>閲覧垢でいいねしてこっちでRT、みたいなのをよくやります   お気になさらず</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-mastodon</v-icon>疎開先→<a href="https://fedibird.com/@mitori" target="_blank" rel="noopener noreferrer" class="twlink">@mitori (Fedibird)</a></div>
              <div>自鯖も考えたけど、単に技術不足なのと、維持費、サーバが死んだら私も死ぬ、などの理由からFedibirdに疎開してます。</div>
              <div>ほぼTwitterにいるけど……</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-lock</v-icon>縮小→<a href="https://twitter.com/zilitz" target="_blank" rel="noopener noreferrer" class="twlink">@zilitz</a></div>
              <div>FFなら高確率で通ります。思考の吐き溜め。自己責任で。</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-lipstick</v-icon>たまにコスプレをするよ</div>
              <div>ド初心者レイヤーにつき……</div>
              <div>イベント出たりするのは3ヶ月に1回とか……？頻度はそこまで多くないです。おてやわらかに……</div>
              <div>やったやつ: <v-icon small color="#0f1419" class="icon">mdi-star-four-points</v-icon>ウェンティ/放浪者/<v-icon small color="#0f1419" class="icon">mdi-horseshoe</v-icon>アグネスタキオン</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-camera-account</v-icon>カメラマンさんへ</div>
              <div>無断での撮影はお控えください！</div>
              <div>お声がけいただければ応じます。お気軽に！</div>
              <div><b>重要:</b>&nbsp;お写真いただけても、(アカウントの方針的に)載せられないことが多いです！すみません。</div>
              <div>いただいた写真は手元で大切に保管してます。毎度ありがとうございます……</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-brush</v-icon>絵やら曲やらをたまーに上げますが</div>
              <div>著作権ほぼ放棄でやってるので、素材にするのもAI学習も無断転載もそのまま複製して売るのも完全OK！あなたのものです。自由にしてください！</div>
              <v-row class="cap-container">
                <a href="https://elaws.e-gov.go.jp/document?lawid=345AC0000000048" target="_blank" rel="noopener noreferrer">
                  <div class="cap-normal shadow">
                    <div><v-icon small color="#c10600" class="icon">mdi-alert</v-icon><b>&nbsp;自作発言と、誰かを攻撃する目的では使用しないでね！</b></div>
                    <div>また、ごく稀にコスプレ写真が上がりますが、<b>こちらは転載不可です！著作権ってだいじ！</b></div>
                  </div>
                </a>
              </v-row>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-link-variant</v-icon>その他リンク</div>
              <div><a href="https://mitori.me" target="_blank" rel="noopener noreferrer" class="twlink"><v-icon small color="#1995e0" class="icon">mdi-web</v-icon>blog: ミトリメ(mitori.me)&nbsp;<v-icon small color="#1995e0" class="icon">mdi-open-in-new</v-icon></a></div>
              <div><a href="mailto:mail@mitori.me" target="_blank" rel="noopener noreferrer" class="twlink"><v-icon small color="#1995e0" class="icon">mdi-email</v-icon>email: mailあっとmitori.me&nbsp;<v-icon small color="#1995e0" class="icon">mdi-open-in-new</v-icon></a></div>
              <div><a href="https://github.com/kdmch" target="_blank" rel="noopener noreferrer" class="twlink"><v-icon small color="#1995e0" class="icon">mdi-github</v-icon>GitHub: kdmch&nbsp;<v-icon small color="#1995e0" class="icon">mdi-open-in-new</v-icon></a></div>
              <div><a href="https://keybase.io/mitori" target="_blank" rel="noopener noreferrer" class="twlink"><v-icon small color="#1995e0" class="icon">mdi-key-variant</v-icon>Keybase: mitori&nbsp;<v-icon small color="#1995e0" class="icon">mdi-open-in-new</v-icon></a></div>
              <div class="twlink" @click="copyTag('mitori#5200')"><v-icon small color="#1995e0" class="icon">mdi-chat</v-icon>Discord: mitori#5200&nbsp;<v-icon small color="#1995e0" class="icon">mdi-content-copy</v-icon></div>
              <div class="twlink" @click="copyTag('mitorik')"><v-icon small color="#1995e0" class="icon">mdi-virtual-reality</v-icon>VRChat: mitorik&nbsp;<v-icon small color="#1995e0" class="icon">mdi-content-copy</v-icon></div>
              <div class="twlink" @click="copyTag('858144259')"><v-icon small color="#1995e0" class="icon">mdi-star-four-points</v-icon>原神: 858144259&nbsp;<v-icon small color="#1995e0" class="icon">mdi-content-copy</v-icon></div>
              <br>
            </div>
          </v-row>
          <a href="https://twitter.com/mitorime" target="_blank" rel="noopener noreferrer">
            <v-row justify="space-between">
              <v-icon small color="#526472" class="icon">mdi-comment-outline</v-icon>
              <v-icon small color="#526472" class="icon">mdi-repeat-variant</v-icon>
              <v-icon small color="#526472" class="icon">mdi-heart-outline</v-icon>
              <v-icon small color="#526472" class="icon">mdi-poll</v-icon>
              <v-icon small color="#526472" class="icon">mdi-export-variant</v-icon>
            </v-row>
          </a>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: '固定されたツイート',
        description: '',
        type: 'article',
        url: 'https://mitori.me/about',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/pin.png'
      },
      show: false
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
      ]
    }
  },
  methods: {
    copyTag(tagstr) {
      navigator.clipboard.writeText(tagstr)
      // this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/article.scss";

#twbg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-size: cover;
}
.main {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 100px 32px 100px 24px;
}
.tweet {
  max-width: 500px;
  color: #0f1419;
}
.username {
  color: #0f1419;
  font-weight: bold;
}
.screenname {
  color: #536471;
}
.twdate {
  color: #536471;
}
.twmain {
  display: flex;
  flex-flow: column nowrap;
  gap: 0px;
  padding: 8px 2px;
}
.twicon {
  padding: 5px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.cap-container {
  margin: 6px;
  gap: 12px;
}
.cap-normal {
  width: 100%;
  margin: 8px;
  padding: 16px;
  color: #0f1419;
  background-color: #fff;
  border-radius: 12px;
}
.cap-check {
  width: 100%;
  padding: 24px;
  background-color: #7dffaba3;
  border-radius: 12px;
}
.cap-x {
  width: 100%;
  padding: 12px;
  background-color: #ff7d99a3;
  border-radius: 12px;
}
.shadow {
  box-shadow: 0px 0px 16px #ccc, 0px 0px 24px -6px #f8f8ff inset;
  transition: .6s;
}
.shadow:hover {
  box-shadow: 0px 0px 16px #888, 0px 0px 24px -6px #f8f8ff inset;
}

.nowrap {
  flex-wrap: nowrap;
}
.icon {
  display: inline-flex;
  align-items: center;
  margin-top: -4px;
}

.twlink {
  color: #1995e0;
  text-decoration: none;
}
.twlink:hover {
  text-decoration-line: underline;
}
a {
  text-decoration: none;
}
</style>
