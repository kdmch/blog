<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Topbutton />
    <Aheader :caps="infocaps" />
    <div id="main">
      <component :is="article" />
    </div>
    <Afooter :caps="infocaps" />
    <Footer />
  </v-app>
</template>

<script>
export default {
  watchQuery: true,
  created () {
    this.$nextTick(() => {
    })
  },
  data () {
    let postsData = []
    let jsonData = []
    if (this.$route.query.p === undefined) {
      jsonData = require('~/assets/404.json')
    } else {
      postsData = require('~/assets/posts.json')
      jsonData = postsData[this.$route.query.p]
    }
    return {
      article: `M${this.$route.query.p}`,
      infocaps: {
        description: jsonData.description,
        comments: jsonData.comments,
        relateds: jsonData.relateds,
        title: jsonData.title,
        updated: jsonData.updated,
        tags: jsonData.tags,
        url: jsonData.url,
        image: jsonData.image,
        auther: jsonData.auther,
        authericon: jsonData.authericon,
        twitter: jsonData.twitter,
        bio: jsonData.bio,
        articles: jsonData.articles
      }
    }
  },
  head () {
    let postsData = []
    let jsonData = []
    if (this.$route.query.p === undefined) {
      jsonData = require('~/assets/404.json')
    } else {
      postsData = require('~/assets/posts.json')
      jsonData = postsData[this.$route.query.p]
    }
    return {
      title: jsonData.title + ' | ミトリメ',
      meta: [
        { hid: 'description', name: 'description', content: jsonData.description },
        { hid: 'og:type', property: 'og:type', content: jsonData.type },
        { hid: 'og:title', property: 'og:title', content: jsonData.title + ' | ミトリメ' },
        { hid: 'og:description', property: 'og:description', content: jsonData.description },
        { hid: 'og:url', property: 'og:url', content: jsonData.url },
        { hid: 'og:image', property: 'og:image', content: jsonData.absimage }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
