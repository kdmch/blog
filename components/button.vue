<template>
  <div id="wrapper">
    <v-img src="/img/uparrow.png" max-width="40px" @click="scrollTop" class="scroll-button" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

#wrapper {
  .scroll-button {
    position: fixed;
    z-index: 1;
    right: 20px;
    bottom: 20px;
    border-radius: 12px;
  }
}
</style>
