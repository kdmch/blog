<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Button />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <h5>腰</h5>
        <div class="line" />
        <p>クッションのおばけことYogiboのminiを買いました。</p>
        <p>Yogiboといえば夜寝ない子の枕元に現れ、そのまま枕になってくれるという民話が各地に伝わっていますが、私はもう大人になりYogiboが見えなくなってしまったので、大人しく購入することに。</p>
        <p>現に私の作業環境といえばiMacを床に置き、虚ろな目でよだれを垂らしながら、地べたにしゃがみこんでコードを書いているというアンデッドスタイル。この床Mac作業ゾンビを続けて半年、腰の危機を感じとったので、腰にかける金は惜しむまいと思い立ち即決で購入しました。</p>
        <p>クリスマスセールで10%オフ、¥17,000くらい。ラベンダー。</p>
        <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">iMac on the floor requires Yogibo for better environment</p>&mdash; 当選 (@mitorime) <a href="https://twitter.com/mitorime/status/1601636615041843200?ref_src=twsrc%5Etfw">December 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <p>ショッピングモールで買ったんですが、袋がデカすぎてすれ違う人が全員避けてくれたので面白かったです。</p>
        <p>ウケる</p>

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
        title: 'Yogibo買った | ミトリメ',
        description: 'クッションのおばけことYogiboのminiを買いました。Yogiboといえば夜寝ない子の枕元に現れ、そのまま枕になってくれるという民話が各地に伝わっていますが、私はもう大人になりYogiboが見えなくなってしまったので、大人しく購入するこ',
        type: 'article',
        url: 'https://mitori.me/221223',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/221223.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: 'Yogibo買った',
        updated: '2022.12.23',
        tags: ['日記'],
        description: '腰をいたわる',
        url: 'https://mitori.me/221223',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/221223.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: '睡眠時間',
          url: '/221212',
          image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/221212.png'
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
