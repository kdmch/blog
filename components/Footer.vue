<template>
  <div id="footer">
    <div id="texts">
      <v-img :src="require('../assets/mitorime.png')" id="logo"/>
      <div id="caption">
        <p>Powered by Nuxt.js</p>
        <p>内容についてのお問い合わせは Twitter @mitorime まで。</p>
        <a href="https://github.com/kdmch/blog/" class="txgrey">View repository on GitHub</a>
      </div>
      <div id="copyright"> ©︎ 2022 mitori </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import "assets/cssvar.scss";
  #footer {
    position: relative;
    width: 100%;
    background-color: $bgblack;
    #texts {
      display: flex;
      flex-flow: column nowrap;
      padding-top: 12px;
      padding-bottom: 40px;
      color: $grey;
      font-size: 16px;
      #logo {
        width: 120px;
        height: 40px;
        margin: auto;
      }
      #caption {
        text-align: center;
        margin-top: 20px;
      }
      #copyright {
        margin-top: 20px;
        text-align: center;
        font-family: 'Dela Gothic One';
        font-size: large;
        color: $white;
      }
    }
  }
</style>
