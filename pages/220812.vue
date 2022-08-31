<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div id="main">
      <div id="arti">
        <div id="wrap">
          <Aheader :caps="headercaps" />
          <div id="text">
            <nuxt-link to="/220811">
              戻る
            </nuxt-link>
          </div>
          <Afooter :info="footercaps" />
        </div>
      </div>
      <div id="side">
        <Sidebar />
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {

  data: () => {
    return {
      headercaps: {
        title: '全然できてない！',
        updated: '2022.8.11',
        tags: ['#テスト', '#test', '#test2']
      },

      footercaps: {
        auther: 'mitori',
        bio: 'まだ考えてない',
        relateds: [{
          no: 1,
          title: 'いろいろ',
          caption: 'うん'
        }, {
          no: 2,
          title: 'いろいろ2',
          caption: 'なんで？'
        }]
      },
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },
  head () {
    return {
      title: '？ - ミトリメ',
      meta: [{
        hid: 'og:title',
        property: 'og:title',
        content: '全然できてない！ - ミトリメ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'どうしようもないブログ。デザインとか'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'img/oneway.png'
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
