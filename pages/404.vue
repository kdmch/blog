<template>
<v-app>
  <Header />
  <div id="wrap" class="bgpink">
    <v-icon color="#e8f2f5" x-large> mdi-alert-decagram </v-icon>
    <div class="nf txwhite"> 404 Not Found </div>
    <div class="caps txwhite"> お探しの記事は存在しません。 </div>
  </div>
  <Footer />
</v-app>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";

#wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 32px;
  text-align: center;
  background-size: cover;

  .nf {
    font-family: 'Dela Gothic One';
    font-size: 32px;
  }

  .caps {
    font-family: sans-serif;
    font-size: 24px;
  }
}
</style>
