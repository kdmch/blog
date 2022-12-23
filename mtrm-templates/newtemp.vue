<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <p></p>
      </div>
    </div>
    <Afooter :caps="infocaps" />
    <Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: ' | ミトリメ',
        description: '',
        type: 'article',
        url: 'https://mitori.me/2',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/2.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: '',
        updated: '20',
        tags: [''],
        description: '',
        url: 'https://mitori.me/2',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/2.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: '',
          url: '/',
          image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/2.png'
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
