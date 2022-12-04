<template>
  <v-app>
    <div id="bg" class="bgwhite" />
    <Header />
    <div id="main" class="prel">
      <div id="articles">
        <div id="wrap" class="prel">
          <div v-if="page == 0" class="pick-up encl">

          </div>
          <nuxt-link :to="article.path" v-for="article in articles" :key="article.no" tag="div" class="article-link encl bgwhite">
            <v-img :src="article.image" max-width="80px" class="article-img"/>
            <div class="article-detail">
              <div class="article-title txblack">{{ article.title }}</div>
              <div class="article-info wmax txgrey">
                <div class="article-tags">
                  <div v-for="tag in article.tags" :key="tag.no">#{{ tag }}</div>
                </div>
                <div>{{ article.date }}</div>
              </div>
              <div class="article-text txgrey">{{ article.caption }}</div>
            </div>
          </nuxt-link>
          <div class="page-buttons txgrey">
            <button v-on:click=" page=0 " v-if="page > 0" class="page-button encl"> ◀︎ </button>
            <button v-on:click=" page-- " v-if="page > 0" class="page-button encl">{{ page }}</button>
            <div class="page-current txgrey bgpalegrey">{{ page+1 }}</div>
            <button v-on:click=" page++ " v-if="page < pagemax" class="page-button encl">{{ page+2 }}</button>
            <button v-on:click=" page=pagemax " v-if="page < pagemax" class="page-button encl"> ▶︎ </button>
          </div>
        </div>
      </div>
      <div id="sidebar">
        <div class="sidebar-wrapper prel wmax">
          <div class="sidebar-title txgrey">書いてる人</div>
          <div class="sidebar-auther wmax">
            <v-img src="/icons/mitori.png" max-width="48px" class="sidebar-auther-icon" />
            <div class="sidebar-auther-name txblack">mitori</div>
            <a href="https://twitter.com/mitorime" class="icon">
              <v-icon color="#1da1f2"> mdi-twitter </v-icon>
            </a>
            <a href="https://github.com/kdmch" class="icon">
              <v-icon color="#3d4054"> mdi-github </v-icon>
            </a>
          </div>
          <div class="sidebar-bio txgrey">
            mitoriといいます。デザインやプログラミングやお絵描きや作曲や言語学などをやり、全部中途半端なことで知られています。
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      page: this.$route.query.p,
      pagemax: 0,
      meta: {
        title: 'ミトリメ | ミ的雑記',
        description: 'どうしようもないブログ。デザインとか',
        type: 'website',
        url: 'https://mitori.me/',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png'
      },
      articles: [{
        no: 1,
        title: 'ブログを公開しました',
        caption: 'やっと終わった……終わってないけど……',
        date: '2022.12.04',
        path: '/221204',
        image: 'img/default.png',
        tags: ['このサイトについて']
      }, {
        no: 2,
        title: 'あくなれ',
        caption: '感謝の意',
        date: '2022.12.04',
        path: '/acknowledgement',
        image: 'img/default.png',
        tags: ['このサイトについて']
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
  },
  methods () {

  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/top.scss";
</style>
