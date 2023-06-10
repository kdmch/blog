<template>
  <div id="header" class="bgpink">
    <nuxt-link to="./">
      <v-img :src="require('../assets/mitorime.png')" id="logo" />
    </nuxt-link>
    <div class="theme-desc">
      <v-icon small color="#ffffff">mdi-tag</v-icon>
      <div class="theme-msg">タグ検索実装しました</div>
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
      gap: 8px;
      .theme-msg {
        font-family: 'Zen Kaku Gothic New', sans-serif;
        font-size: 12px;
        color: #ffffff;
        display: inline-flex;
        align-items: center;
      }
    }
  }
</style>
