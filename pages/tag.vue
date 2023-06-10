<template>
  <v-app>
    <div id="bg" class="bgwhite" />
    <Header />
    <Topbutton />
    <div id="main" class="prel wmax">
      <div id="articles">
        <div id="wrap" class="prel flexcol gap24">
          <div class="tx20 txgrey bold">
            <v-icon color="#9b9dbb" class="icon"> mdi-magnify </v-icon>
            <span class="hilights"># {{ searchingTag }}</span>
            <span>の記事&nbsp;({{ taggedPosts.length }}件)</span>
          </div>
          <nuxt-link :to="post.path" v-for="post in taggedPosts.slice(page * amount, (page+1) * amount)" :key="post.no" tag="div" class="article-link encl bgwhite">
            <v-img :src="post.image" max-width="160px" class="article-img"/>
            <div class="article-detail">
              <div class="article-title txblack">{{ post.title }}</div>
              <div class="article-info wmax txgrey">
                <div class="article-tags">
                  <div v-for="tag in post.tags" :key="tag.no">#{{ tag }}</div>
                </div>
                <div>{{ post.date }}</div>
              </div>
              <div class="article-text txgrey">{{ post.caption }}</div>
            </div>
          </nuxt-link>
          <div class="page-buttons txgrey">
            <button @click=" page=0 " v-if="page > 0" class="page-button encl">
              <v-icon color="#9b9dbb" class="icon"> mdi-chevron-left </v-icon>
            </button>
            <button @click=" page-- " v-if="page > 0" class="page-button encl">{{ page }}</button>
            <div class="page-current txgrey bgpalegrey">{{ page+1 }}</div>
            <button @click=" page++ " v-if="page < pagemax" class="page-button encl">{{ page+2 }}</button>
            <button @click=" page=pagemax " v-if="page < pagemax" class="page-button encl">
              <v-icon color="#9b9dbb" class="icon"> mdi-chevron-right </v-icon>
            </button>
          </div>
          <!--div class="tx15 txgrey txcenter">
            <v-icon color="#9b9dbb" class="icon"> mdi-information-slab-circle </v-icon>
            最新の25件を表示しています。
          </div-->
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
export default {
  data () {
    return {
      page: 0,
      amount: 5,
      pageQuery: this.$route.query.p,
      amountQuery: this.$route.query.amount,
      searchingTag: this.$route.query.q,
      pagemax: 0,
      postsRaw: [],
      posts: [],
      taggedPosts: []
    }
  },
  created () {
    if (this.amountQuery != null) {
      this.amount = this.amountQuery
    }
    this.postsRaw = require('~/assets/posts.json')
    this.posts = Object.values(this.postsRaw)
    let t = 0
    for (let i = 0; i < this.posts.length; i++) {
      for (let k = 0; k < this.posts[i].tags.length; k++) {
        if (this.searchingTag === this.posts[i].tags[k]) {
          this.taggedPosts[t] = this.posts[i]
          this.taggedPosts[t].no = i
          t++
        }
      }
    }
    this.pagemax = (this.taggedPosts.length - 1) / this.amount | 0
  },
  head () {
    return {
      title: 'ミトリメ | ミ的雑記',
      meta: [
        { hid: 'description', name: 'description', content: 'どうしようもないブログ。デザインとか' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'ミトリメ | ミ的雑記' },
        { hid: 'og:description', property: 'og:description', content: 'どうしようもないブログ。デザインとか' },
        { hid: 'og:url', property: 'og:url', content: 'https://mitori.me/' },
        { hid: 'og:image', property: 'og:image', content: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
      ]
    }
  },
  mounted () {
    if (this.pageQuery != null) {
      this.page = this.pageQuery
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
