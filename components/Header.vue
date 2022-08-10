<template>
  <div id="header">
    <img id="mtrm" src="mitorime.png"/>
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
    height: 100px;
    padding: 15px;
    display: flex;
    justify-content: center;
    background-color: $text;
    #mtrm {
      object-fit: contain;
    }
  }

  a {
    text-decoration: none;
  }
</style>