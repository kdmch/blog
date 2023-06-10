<template>
  <div id="footer">
    <div id="texts">
      <v-img :src="require('../assets/mitorime.png')" id="logo"/>
      <div id="caption">
        <p>
          <span>+ Powered by </span>
          <a href="https://nuxtjs.com/" class="txgrey">
            <v-icon color="#9b9dbb" small class="icon"> mdi-nuxt </v-icon>
            <b>Nuxt.js</b>
          </a>
        </p>
        <p>
          <span>内容についてのお問い合わせは</span>
          <a href="https://twitter.com/mitorime/" class="txgrey">
            <v-icon color="#9b9dbb" small class="icon"> mdi-twitter </v-icon>
            <b>@mitorime</b>
          </a>
          <span>まで。</span>
        </p>
        <a href="https://github.com/kdmch/blog/" class="txgrey">
          <b>
            <span>View repository on</span>
            <v-icon color="#9b9dbb" small class="icon"> mdi-github </v-icon>
            <span>GitHub</span>
          </b>
        </a>
      </div>
      <div id="copyright"><b>©︎ 2022 - 2023 mitori</b></div>
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
    font-family: 'Zen Kaku Gothic New', sans-serif;
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
        margin-top: 16px;
        text-align: center;
        font-size: large;
        color: $white;
      }
    }
  }
  .icon {
    margin-top: -3px;
  }
  a {
    text-decoration: none;
  }
</style>
