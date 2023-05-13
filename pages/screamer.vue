<template>
  <v-app>
    <div id="bg" />
    <Header />
    <div class="main">
      <button @click="screamer(200)" class="txblack"> scream! </button>
    </div>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: '叫ぶやつ | ミトリメ',
        description: '叫ぶアレを自動生成します。',
        type: 'website',
        url: 'https://mitori.me/screamer',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/2.png'
      }
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
      ]
    }
  },
  methods: {
    screamer(screamLength) {
      let screamNum = String((Math.floor(Math.random() * 2)) * 3)
      let screamStr = '√'
      const screamLetter = ['﹀', '︺', '▔', '^', '︿', '︹', '▁', '_', '/', '╱', '⎰', 'ʃ', '\\', '╲', '⎱', 'ʅ']
      for (let i = 0; i < (screamLength - 1); i++) {
        if ((screamNum.slice(-3) !== '000') && (screamNum.slice(-3) !== '111')) {
          if (Number(screamNum.slice(-1) % 2)) {
            screamNum = screamNum + String((Math.floor(Math.random() * 2)) + 1)
          } else {
            screamNum = screamNum + String((Math.floor(Math.random() * 2)) * 3)
          }
        } else {
          if (screamNum.slice(-3) === '000') { screamNum = screamNum + '3' }
          if (screamNum.slice(-3) === '111') { screamNum = screamNum + '2' }
        }
      }
      console.log(screamNum)
      for (let i = 0; i < (screamLength - 1); i++) {
        screamStr = screamStr + screamLetter[Number(screamNum[i]) * 4 + Math.floor(Math.random() * 4)]
      }
      console.log(screamStr)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/cssvar.scss";
@import "assets/textmp.scss";
@import "assets/article.scss";

.main {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 100px 32px 100px 24px;
}
</style>
