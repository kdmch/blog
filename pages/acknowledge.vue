<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <Aheader :caps="infocaps" />
      <div id="text">
        <h2>acknowledgement</h2>
        <div class="blank" />
        <p>このWebサイトは、以下のサービス、フレームワークおよびプラグインによって、なんとかなっています。あざす。</p>
        <ul>
          <li>公開まわり: GitHub / Vercel</li>
          <li>Vue フレームワーク: Nuxt.js</li>
          <li>Vue UI フレームワーク: Vuetify</li>
          <li>コメント欄: Disqus</li>
        </ul>
        <p>あざす(本当に)。</p>
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
        title: 'あくなれ | ミトリメ',
        description: 'このWebサイトは、以下のサービス、フレームワークおよびプラグインによって、なんとかなっています。あざす。',
        type: 'article',
        url: 'https://mitori.me/acknowledgement',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/ackl.png'
      },
      infocaps: {
        comments: false,
        relateds: false,
        title: 'あくなれ',
        updated: '2022.12.04',
        tags: ['このサイトについて'],
        description: '感謝の意',
        url: 'https://mitori.me/acknowledgement',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/mitori.png',
        // authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: 'トップに戻る',
          url: '/',
          image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png'
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
