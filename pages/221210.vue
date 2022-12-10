<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <p>嘘です。</p>
        <p>ちゃんとと言っても頭からケツまでテレビを消さなかったというだけで、全然作業してました。これくらいがちょうどいいんですよね、観戦って……</p>
        <p>突然試合が動いて、え？！え？！とか言いながらバッとテレビに目をやる感じ。その繰り返し。</p>
        <p>単調な作業が退屈じゃなくなって、ちょっとだけ心地いい。</p>
        <div class="blank" />
        <h5>ウケる</h5>
        <div class="line" />
        <p>人がすごいスピードで負傷していくのでウケる。ウケるなよ。</p>
        <p>ウケてはダメなんだけど、わたしは普段あらゆる壁にぶつかり、あらゆる段差につまづき、手首を挫き足首を挫き、開けたはずのドアに激突しては毎日いろんなところに知らないアザを作る人間なので、人の負傷を見るのもエンタメに成り上がってしまう。</p>
        <p>ごめんなさい。</p>
        <div class="separator" />
        <p>あと日本戦は観ませんでした。自国となるとハラハラして疲れるから。</p>
        <p>知らん国 VS 知らん国の対戦を眺めて、どっちも応援するのが好き。シュートが決まってノリノリの観客席が映るたびに、混ざりて〜〜と思う。どっちにも混ざりたい。勝ってる方に混ざって騒ぐだけ騒いで帰ってきたい。</p>
        <p>いや、コスタリカ戦のはじめは少しだけ観たけど、やっぱりハラハラして疲れるので、前半10分くらいで全然ゲーセンに行った。帰ってきたら負けていた。こういうのもおもしろい。</p>
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
        title: '初めてサッカーちゃんと観た | ミトリメ',
        description: '',
        type: 'article',
        url: 'https://mitori.me/221210',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnail/221210.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: '初めてサッカーちゃんと観た',
        updated: '2022.12.10',
        tags: ['日記'],
        description: '観ました',
        url: 'https://mitori.me/221210',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
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
