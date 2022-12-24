<template>
  <div id="header" class="bgpink">
    <nuxt-link to="./">
      <v-img :src="require('../assets/mitorime.png')" id="logo" />
    </nuxt-link>
    <div class="theme-desc">
      <v-icon color="#ffffff">mdi-shimmer</v-icon>
      <div class="theme-msg">Merry Christmas!</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import "assets/cssvar.scss";

  #header {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 64px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    #logo {
      margin-left: 30px;
      width: 144px;
      height: 48px;
    }
    .theme-desc {
      margin-right: 24px;
      display: flex;
      gap: 16px;
      .theme-msg {
        color: #ffffff;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
      }
    }
  }
</style>
