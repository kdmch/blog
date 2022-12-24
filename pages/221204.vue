<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Button />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <h1>はじめまして</h1>
        <br>
        <p>こんにちは。</p>
        <p>mitoriといいます。都内のIT企業にフロントエンドエンジニアとして勤務していません。</p>
        <p>この田舎から出してください。</p>
        <div class="separator" />
        <h3>自作ブログが完成しました</h3>
        <br>
        <p>嘘です。見た目だけ完成させました。まず終わらせろってやつですね。</p>
        <p>制作にはNuxt.jsを使いました。触るの初めてだったんですけど、だいぶいいですねこれ。</p>
        <br>
        <p>今後はブログというよりかは日記として活用していく予定です。どっちも一緒か。</p>
        <p>よろしくおねがいします。</p>
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
        title: 'ブログを公開しました | ミトリメ',
        description: '',
        type: 'article',
        url: 'https://mitori.me/221204',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/221204.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: 'ブログを公開しました',
        updated: '2022.12.04',
        tags: ['このサイトについて'],
        description: 'やっと終わった……終わってないけど……',
        url: 'https://mitori.me/221204',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: 'あくなれ',
          url: '/acknowledgement',
          image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/ackl.png'
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
