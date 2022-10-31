<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <div v-for="article in articles" :key="article.no" class="articlecards">
            <nuxt-link :to="article.path" tag="div" class="articlelink">
            <img class="articleimg" :src="article.image">
            <div class="articledetail">
              <div class="articletitle">{{ article.title }}</div>
              <div class="articletext">{{ article.caption }}</div>
            </div>
          </nuxt-link>
          </div>
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
        title: 'ミトリメ | ミ的雑記',
        description: 'どうしようもないブログ。デザインとか',
        type: 'website',
        url: 'https://mitori.me/',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png'
      },
      articles: [{
        no: 1,
        title: 'まだできてない',
        caption: '仮。そのうちちゃんとした記事が並ぶ予定です。',
        path: '/220811',
        image: 'img/default2.png'
      }, {
        no: 2,
        title: 'FAQs',
        caption: 'is (not) Frequency Answered',
        path: '/faq',
        image: 'img/default.png'
      }]
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
@import "assets/top.scss";
</style>
