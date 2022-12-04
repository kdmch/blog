<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <Aheader :caps="infocaps" />
      <div id="text">
        <h1>はじめまして</h1>
        <br>
        <p>みとりといいます。male！コス歴３日(執筆時点)！もろもろわかりません！</p>
        <p>たすけて！</p>
        <div class="separator" />
        <h2>注意事項とか</h2>
        <br>
        <p>顔をネットに上げるのがまだ怖すぎるので、写真だけはしばらくTwitterサークル内で公開していこうと思います(FFは全員追加します！)。古のインターネットの呪いだ……</p>
        <p>加工とかメイクに慣れるまではこうさせてください🙏がんばります🙏</p>
        <div class="blank" />
        <p>イベントでの撮影は全然OKです！ぜひ。その時はDMまでお写真ください。</p>
        <p>無断転載だけはもちろんナシで……</p>
        <div class="blank" />
        <h2>その他いろいろ</h2>
        <ul>
          <li>あんまり作品履修できてないしソシャゲもやってないしVも追えてない！オススメください。</li>
          <li>併せとか特に抵抗ないのでお気軽に……</li>
          <li></li>
          <li></li>
          <li>書くことない</li>
        </ul>
        <div class="separator" />
        <h1>まとめ</h1>
        <br>
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
        title: 'コス垢用プロフ！ | ミトリメ',
        description: '',
        type: 'article',
        url: 'https://mitori.me/cosp',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/assets/cover.png'
      },
      infocaps: {
        comments: false,
        relateds: true,
        title: 'コス垢用プロフ！',
        updated: '2022.12.04',
        tags: ['.'],
        description: '',
        url: 'https://mitori.me/cosp',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: 'トップへ戻る',
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
