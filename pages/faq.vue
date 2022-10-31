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

  data () {
    return {
      meta: {
        title: 'FAQs',
        description: '読もう',
        type: 'article',
        url: 'https://mitori.me/faq',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/faq.png'
      },

      headercaps: {
        pagename: 'FAQs',
        url: 'https://mitori.me/faq',
        title: 'FAQs',
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
