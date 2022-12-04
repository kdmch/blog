<template>
  <div id="header">
    <nuxt-link to="./">
      <v-img :src="require('../assets/mitorime.png')" id="logo" />
    </nuxt-link>
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
    flex-direction: row;
    background-color: $pink;
    #logo {
      margin-left: 30px;
      width: 144px;
      height: 48px;
    }
  }

  a {
    text-decoration: none;
  }
</style>
