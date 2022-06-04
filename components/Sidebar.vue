<template>
    <div id="wrap">
      <div id="prof">
        hvjhfhtf4rtfgw4rgw4
      </div>
      <div id="other">
        bdhsefh2
      </div>
    </div>

</template>

<script>
  export default{
  }
</script>

<style scoped lang="scss">
  @import "assets/cssvar.scss";
  @mixin sidebar-template(){
    background-color: $text;
    background-size: contain;
    border-radius: 30px;
    color: $text;
  }

  #wrap {

    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: 250px;
    gap: 25px;
    // こう書かないと動かない

      #prof {
        height: 200px;
        @include sidebar-template();
      }
      #other {
        height: 500px;
        @include sidebar-template();
      }
    }
  
  a {
    text-decoration: none;
  }
</style>