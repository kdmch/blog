<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <h5>あけおめです。</h5>
        <div class="line" />
        <p>もうあけおめじゃないが。</p>
        <div class="blank" />
        <p>codoc (読者課金制ブログ収益化サービス) のテストをしたい。シンプルにこう、好奇心で……</p>
        <p>codocとは、詳しいことは調べてほしいんだけど、要はブログ内にタグを貼り付けるだけで記事を有料化できるプラグイン。文章でカネを稼ぎたい人にとっては持ってこいのサービスだ。今はnoteとかやった方がいいんだろうけど。</p>
        <p>べっべべべ別におおお金おかお金金お金がないわけじゃないんだけど試してみたいので、大っぴらにしづらい話を少額で有料公開してみようと思います。ストラテラを飲んだ話。</p>
        <div class="blank" />
        <p>よろしくおねがいします。</p>
        <div class="separator" />
        <div>
          <script src="https://codoc.jp/js/cms.js" data-css="blue" data-usercode="P50mBhq1eQ" charset="UTF-8" defer></script>
          <div id="codoc-entry-NfEsAn1LjQ" class="codoc-entries" >この続きはcodocで購読</div>
        </div>
        <div class="separator" />
        <p>有料部分、元サイトのスタイルは使えない感じ？模索……</p>
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
        title: '金欠妖怪・ストラテ嘔吐鼬 | ミトリメ',
        description: 'あけおめです。もうあけおめじゃないが。codoc(読者課金制ブログ収益化サービス)のテストをしたい。シンプルにこう、好奇心で……codocとは、詳しいことは調べてほしいんだけど、要はブログ内にタグを貼り付けるだけで記事を有料化できるプラグイ',
        type: 'article',
        url: 'https://mitori.me/230115',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/230115.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: '金欠妖怪・ストラテ嘔吐鼬',
        updated: '2023.01.15',
        tags: ['日記', 'このブログについて'],
        description: 'おけおめです(激遅)',
        url: 'https://mitori.me/230115',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/230115.png',
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
