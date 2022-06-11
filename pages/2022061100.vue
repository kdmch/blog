<template>
<v-app>
  <div id="bg"></div>
  <Header />
  <div id="main">
    <div id="arti">
      <div id="wrap">
        <Aheader :caps="headercaps" />
        <div id="text">
          <div class="blank"></div>
          <h1>準備中</h1>
          <h3>まだ全然作ってないよ</h3>
          <div class="blank"></div>
          <div class="line"></div>
          <div class="blank"></div>
          <p>ちゃんと公開できるのは7月後半とかになりそう。頑張る</p>
          <div class="quote"> これは引用した文章載っけるスペース </div>
          <p> あとシェアボタンとかリンクはまだ機能しなくて、ガワだけ。 </p>
          <p> スマホ表示にも対応してないから相当見づらいと思う。 </p>
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
  head() {
    return {
      meta: [
        { hid: 'og:title',       property: 'og:title',       content: '準備中らしい - mitori.blog' },
        { hid: 'og:description', property: 'og:description', content: "どうしようもないブログ。デザインとか" },
        { hid: 'og:image',       property: 'og:image',       content: '@assets/mitori.png' },
      ]
    }
  },

  data: () => {
    return {
      headercaps: {
        title: '全然できてない！',
        updated: '2022.06.11',
        tags: ['#テスト', '#test', '#test2'],
      },

      footercaps: {
        auther: 'mitori',
        bio: 'まだ考えてない',
        relateds: [{
          no: 1,
          title: 'いろいろ',
          caption: 'うん',
        }, {
          no: 2,
          title: 'いろいろ2',
          caption: 'なんで？',
        }],
      },
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  },

  mounted() {
    window.addEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
