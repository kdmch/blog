<template>
  <v-app>
    <div id="twbg" />
    <div class="main">
      <v-row>
        <img class="twicon" src="/icons/melmitori.png">
        <v-col class="tweet">
          <v-row class="nowrap">
            <div class="username">みとり</div>
            <div class="screenname">&nbsp;@mitorime&nbsp;</div>
            <div class="twdate">·&nbsp;2023/05/01</div>
          </v-row>
          <v-row>
            <div class="twmain">
              <div><v-icon small color="#1995e0" class="icon">mdi-twitter</v-icon>ごちゃまぜのアカウントです。</div>
              <div>アグネスタキオン/言語学/ボカロ/プログラミング/作曲/絵/コスプレ(する方)/道路/ピノキオピー/原神/凋叶棕/音ゲー/短歌/デザイン/いろいろ</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-account-eye</v-icon>閲覧垢です→<a href="https://twitter.com/laykatase" target="_blank" rel="noopener noreferrer">@laykatase</a></div>
              <div>閲覧垢でいいねしてこっちでRT、みたいなのをよくやります   お気になさらず</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-account-arrow-right</v-icon>疎開先→<a href="https://fedibird.com/@mitori" target="_blank" rel="noopener noreferrer">@mitori (fedibird)</a></div>
              <div>自鯖も考えたけど、単に技術不足なのと、維持費、サーバが死んだら私も死ぬ、などからfedibirdに疎開してます。</div>
              <div>ほぼTwitterにいるけど……</div>
              <br>
              <div><v-icon small color="#1995e0" class="icon">mdi-brush</v-icon>絵やら曲やらをたまーに上げますが</div>
              <div>著作権ほぼ放棄でやってるので、無断転載も自作発言もそのまま複製して売るのも完全OK お前のものです 自由にしてください</div>
              <br>
            </div>
          </v-row>
          <v-row justify="space-between">
            <v-icon small color="#526472" class="icon">mdi-comment-outline</v-icon>
            <v-icon small color="#526472" class="icon">mdi-repeat-variant</v-icon>
            <v-icon small color="#526472" class="icon">mdi-heart-outline</v-icon>
            <v-icon small color="#526472" class="icon">mdi-poll</v-icon>
            <v-icon small color="#526472" class="icon">mdi-export-variant</v-icon>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: '固定されたツイート',
        description: '',
        type: 'article',
        url: 'https://mitori.me/about',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/pin.png'
      }
    }
  },
  head () {
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
  padding: 100px 20px;}
    .tweet {
      max-width: 480px;
      color: #0f1419;}
      .username {
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
.nowrap {
  flex-wrap: nowrap;
}
.icon {
  display: inline-flex;
  align-items: center;
  margin-top: -4px;
}

a {
  color: #1995e0;
  text-decoration: none;
}
a:hover {
  text-decoration-line: underline;
}
</style>
