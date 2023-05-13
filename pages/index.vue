<template>
  <v-app>
    <div id="bg" class="bgwhite" />
    <Header />
    <Topbutton />
    <div id="main" class="prel">
      <div id="articles">
        <div id="wrap" class="prel">
          <div v-if="page == 0" class="pick-up encl">
            <div class="pu-title txgrey">ここは何</div>
            <div class="pu-capt txgrey">好き勝手書くブログです。お手柔らかに。</div>
          </div>
          <div class="tx20 txgrey bold">新着記事</div>
          <nuxt-link :to="article.path" v-for="article in articles.slice(page * amount, (page+1) * amount)" :key="article.no" tag="div" class="article-link encl bgwhite">
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
            <button @click=" page=0 " v-if="page > 0" class="page-button encl"> ◀︎ </button>
            <button @click=" page-- " v-if="page > 0" class="page-button encl">{{ page }}</button>
            <div class="page-current txgrey bgpalegrey">{{ page+1 }}</div>
            <button @click=" page++ " v-if="page < pagemax" class="page-button encl">{{ page+2 }}</button>
            <button @click=" page=pagemax " v-if="page < pagemax" class="page-button encl"> ▶︎ </button>
          </div>
          <div class="tx15 txgrey txcenter">最新の25件を表示しています。</div>
        </div>
      </div>
      <div id="sidebar">
        <div class="sidebar-wrapper prel wmax">
          <div class="tx20 txgrey bold">書いてる人</div>
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
import Articles from '~/assets/Articles.json'

export default {
  data () {
    return {
      page: 0,
      pagequery: this.$route.query.p,
      amount: 5,
      pagemax: 1,
      meta: {
        title: 'ミトリメ | ミ的雑記',
        description: 'どうしようもないブログ。デザインとか',
        type: 'website',
        url: 'https://mitori.me/',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png'
      },
      articles: Articles
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
  mounted () {
    if (this.pagequery != null) {
      this.page = this.pagequery
    }
    if (this.page > this.pagemax) {
      this.page = this.pagemax
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/top.scss";
</style>
