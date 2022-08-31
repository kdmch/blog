<template>
<v-app>
  <Header />
  <div id="wrap">
    <v-icon color="#f3abc0" x-large> mdi-alert-decagram </v-icon>
    <div id="nf"> 404 Not Found </div>
    <div id="caps"> お探しの記事は存在しません。 </div>
  </div>
  <Footer />
</v-app>
</template>

<script>
export default {
  data: () => ({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }),

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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import "assets/textmp.scss";

#wrap {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  font-family: 'Josefin Sans', sans-serif;
  display: flex column nowrap;
  justify-content: center;
  text-align: center;
  background-color: $text;
  background-size: cover;

  #nf {
    color: $base;
    font-size: 12vh;
  }

  #caps {
    margin-top: 2vh;
    color: $accent;
    font-size: 4vh;
    font-weight: bold;
  }
}
</style>
