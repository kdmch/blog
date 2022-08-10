<template>
  <div id="header">
    <img id="logo" src="mitorime.png"/>
    <div id="cap"> どうしようもないブログ。デザインとか </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
  @import "assets/cssvar.scss";
  #header {
    position: relative;
    width: 100%;
    height: 120px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: $text;
    #logo {
      margin: auto;
      width: 210px;
      height: 70px;
    }
    #cap {
      text-align: center;
      font-size: 1.5vh;
      color: $accent;
    }
  }

  a {
    text-decoration: none;
  }
</style>