<template>
  <v-app>
    <div id="bg">
    </div>
    <Header />

    <div id="main">
      <div id="arti">
        <Articles />
      </div>
      <div id="side">
        <Sidebar />
      </div>
    </div>

    <Footer />
  </v-app>
</template>

<script>
export default{
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: '' },
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:url', property: 'og:url', content: '' },
        { hid: 'og:image', property: 'og:image', content: '' },
      ]
    }
  },
  data: () => ({
    windowWidth:  window.innerWidth,
    windowHeight: window.innerHeight,
  }),
  mounted() {
    window.addEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize() {
      this.windowWidth  = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style scoped lang="scss">
  $main-bg: #ecfff7;
  #bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: $main-bg;
    background-size: cover;
  }
  #main {
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  #arti {
    flex-grow: 2;
  }
  #side {
    flex-grow: 1;
  }
  a {
    text-decoration: none;
  }
</style>