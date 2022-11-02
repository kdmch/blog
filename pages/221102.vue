<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <Aheader :caps="headercaps" />
          <!--<div id="eyecatch"> <img id="eyecatchimg" src="img/221102.png"> </div>-->
          <div id="text">
            <div class="blank" />
            <h1>はい</h1>
            <div class="blank" />
            <h2>進捗報告</h2>
            <div class="linenblank" />
            <p>マジで全然完成しません。なんでなんだ。細々と気になるとこ直してってるはずなのにな……</p>
            <p>報告するほどの進捗もないですが、一応書いておくと、</p>
            <div class="blank2" />
            <h2>OGPまわりが何とかなりました</h2>
            <div class="linenblank" />
            <p>なんとかしました。</p>
            <p>OGPってのはTwitterとかにリンク貼っつけると出るあのプレビュー(違う)みたいなやつです。</p>
            <p>Nuxtわからなすぎて、SSRやらなにやらをなにやらを散々調べまくり、最終的にファイル名の打ち間違い&その伝播を修正することでバグの決着を見ました。</p>
            <p>本当に悔しいです。誰か抱きしめてください</p>
            <div class="blank2" />
          </div>
          <Afooter :info="footercaps" />
        </div>
      </div>
      <div id="side"> <Sidebar /> </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      meta: {
        title: '自作ブログが全然完成しない | ミトリメ',
        description: 'マジでなんでなんだ',
        type: 'article',
        url: 'https://mitori.me/221102',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/221102/thumbnail.png'
      },

      headercaps: {
        pagename: '自作ブログが全然完成しない',
        url: 'https://mitori.me/221102',
        title: '自作ブログが全然完成しない',
        updated: '2022.11.02',
        tags: ['進捗報告']
      },

      footercaps: {
        pagename: '自作ブログが全然完成しない',
        url: 'https://mitori.me/221102',
        updated: '2022.11.02',
        auther: 'mitori',
        bio: 'はよ作業せい',
        relateds: [{
          no: 1,
          title: 'まだできてない',
          caption: 'うん',
          path: '/220811'
        }, {
          no: 2,
          title: 'まだできてない2',
          caption: 'なんで？',
          path: '/220812'
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
