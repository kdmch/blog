<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <Aheader :caps="headercaps" />
          <div id="eyecatch"> <img id="eyecatchimg" src="img/faq.png"> </div>
          <div id="text">
            <div class="blank" />
            <h1>サイト全体</h1>
            <div class="blank" />
            <h2>このサイトは何？</h2>
            <div class="linenblank" />
            <p>mitoriがデザインとか音楽とかについて語り散らかすだけのブログです。</p>
            <div class="blank2" />
            <h2>誰ですか？</h2>
            <div class="linenblank" />
            <p>mitoriといいます。デザインやプログラミングやお絵描きや作曲や言語学などをやり、全部中途半端なことで知られています。</p>
            <div class="blank2" />
            <h2>記事に疑問点がある</h2>
            <div class="linenblank" />
            <p>おそらくコメント欄ができるのは相当先の話になるので、Twitter @mitorime に@またはDMを飛ばすか、mail@mitori.me までおねがいします。</p>
            <p>なるはやで対応させていただきます。</p>
            <div class="blank2" />
            <h2>パクっていいですか？</h2>
            <div class="linenblank" />
            <p>基本的に何してもいいよ。</p>
            <p>素材って書いてあるやつは完全自由。</p>
            <div class="blank2" />
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
        pagename: 'FAQs',
        url: 'https://mitori.me/faq',
        title: 'FAQs / よくある質問',
        updated: '2022.8.31',
        tags: ['このサイトについて']
      },

      footercaps: {
        pagename: 'FAQs',
        url: 'https://mitori.me/faq',
        updated: '2022.8.31',
        auther: 'mitori',
        bio: 'まだ考えてない',
        relateds: [{
          no: 1,
          title: 'まだできてない',
          caption: 'うん',
          path: '/220811'
        }, {
          no: 2,
          title: 'まだできてない2',
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
      title: 'FAQs - ミトリメ',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'FAQs - ミトリメ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'どうしようもないブログ。デザインとか'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'img/faq.png'
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
