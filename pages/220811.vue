<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <Aheader :caps="headercaps" />
          <div id="eyecatch">
            <img id="eyecatchimg" src="img/oneway.jpg">
            特に関係ない画像
          </div>
          <div id="text">
            <div class="blank" />
            <h1>準備中</h1>
            <h3>まだ全然作ってないよ</h3>
            <div class="blank" />
            <div class="line" />
            <div class="blank" />
            <p>ちゃんと公開できるのは11月後半とかになりそう。頑張る</p>
            <div class="quote"> これは引用した文章載っけるスペース </div>
            <div class="img"> <img class="i" src="img/testimgia.png" alt="テスト" loading="lazy"> </div>
            <p> あとシェアボタンとかリンクはまだ機能しなくて、ガワだけ。 </p>
            <p> スマホ表示にも対応してないから相当見づらいと思う。 </p>
            <p> <nuxt-link to="/220812" tag="div" class="link"> リンク(別記事) </nuxt-link> </p>
            <p> <a href="https://twitter.com/kadomache" class="link"> リンク(Twitter) </a> </p>
            <p>まあ気長に.</p>
          </div>
          <Afooter :info="footercaps" />
        </div>
      </div>
      <div id="side"> <Sidebar /> </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      meta: {
        title: '全然できてない！ - ミトリメ',
        description: 'ごめんなさい今作ってますもう少し待ってください',
        type: 'article',
        url: 'https://mitori.me/220811',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png.'
      },

      headercaps: {
        pagename: '全然できてない！',
        url: 'https://mitori.me/220811',
        title: '全然できてない！',
        updated: '2022.8.11',
        tags: ['#テスト', '#test', '#test2']
      },

      footercaps: {
        pagename: '全然できてない！',
        url: 'https://mitori.me/220811',
        updated: '2022.8.11',
        auther: 'mitori',
        bio: 'まだ考えてない',
        relateds: [{
          no: 1,
          title: 'いろいろ',
          caption: 'うん',
          path: '/faq'
        }, {
          no: 2,
          title: 'いろいろ2',
          caption: 'なんで？',
          path: '/220812'
        }]
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
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
