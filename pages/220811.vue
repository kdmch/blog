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

  data: () => {
    return {
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
      },
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },
  head () {
    return {
      title: '全然できてない！ - ミトリメ',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: '全然できてない！ - ミトリメ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'どうしようもないブログ。デザインとか'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'img/oneway.jpg'
      }
      ]
    }
  },

  mounted () {
    window.addEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
