<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <Aheader :caps="headercaps" />
          <!--<div id="eyecatch"> <img id="eyecatchimg" src="img/faq.png"> </div>-->
          <div id="text">
            <div class="blank" />
            <h1>はじめまして</h1>
            <div class="blank" />
            <div class="linenblank" />
            <p>みとりといいます。male！コス歴３日(執筆時点)！もろもろわかりません！</p>
            <p>たすけて！</p>
            <div class="blank2" />
            <h2>注意事項とか</h2>
            <div class="linenblank" />
            <p>顔をネットに上げるのがまだ怖すぎるので、写真だけはしばらくTwitterサークル内で公開していこうと思います(FFは全員追加します！)。古のインターネットの呪いだ……</p>
            <p>加工とかメイクに慣れるまではこうさせてください🙏がんばります🙏</p>
            <div class="blank" />
            <p>イベントでの撮影は全然OKです！ぜひ。その時はDMまでお写真ください。</p>
            <p>無断転載だけはもちろんナシで。</p>
            <div class="blank2" />
            <h2>Misc.</h2>
            <div class="linenblank" />
            <p>・あんまり作品履修できてないしソシャゲもやってないしVも追えてない！オススメください。</p>
            <p>・併せとか特に抵抗ないのでお気軽に……</p>
            <p>・</p>
            <p>・</p>
            <p>・書くことない</p>
            <div class="blank2" />
            <h1>まとめ</h1>
            <div class="linenblank" />
            <p>よろしくおねがいします。</p>
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

  data: () => {
    return {
      headercaps: {
        pagename: 'コス垢用プロフ！',
        url: 'https://mitori.me/cosp',
        title: 'コス垢用プロフ！',
        updated: '2022.10.19',
        tags: ['profile']
      },

      footercaps: {
        pagename: 'コス垢用プロフ！',
        url: 'https://mitori.me/cosp',
        updated: '2022.10.19',
        auther: 'mitori',
        bio: 'コス初心者です……どうか……',
        relateds: [{
          no: 1,
          title: 'まだできてない',
          caption: 'テスト用ページ',
          path: '/220811'
        }]
      },
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },
  head () {
    return {
      title: 'コス垢用プロフ！ - ミトリメ',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: 'コス垢用プロフ！ - ミトリメ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'プロフとか注意事項とか。ご一読を'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '@assets/cover.png'
      }
      ]
    }
  },

  mounted () {
    window.addEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
