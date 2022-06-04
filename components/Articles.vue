<template>
    <div id="wrap">
      <div id="a1">
        hvjhfhtf
      </div>
      <div id="a2">
        bdhsefh2
      </div>
      <div id="a3">
      </div>
      <div id="a4">
      </div>
    </div>

</template>

<script>
export default{
}
</script>

<style scoped lang="scss">
  $accent: #00b8b4;
  $back: #ecfff7;
  $base: #ffffff;
  $text: #216e79;
  @media (prefers-color-scheme: dark) {
    $base: #216e79;
  }
  @mixin articles-template(){
    height: 200px;
    background-color: $base;
    background-size: contain;
    border-radius: 30px;
    box-shadow: 2px 2px 10px 1px $accent;
    color: $text;
  }

  #wrap {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin: 25px;
    gap: 25px;
    // こう書かないと動かない
    #a1 {
      @include articles-template();
    }
    #a2 {
      @include articles-template();
    }
    #a3 {
      @include articles-template();
    }
    #a4 {
      @include articles-template();
    }
  }
  a {
    text-decoration: none;
  }
</style>