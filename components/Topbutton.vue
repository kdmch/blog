<template>
  <div id="wrapper">
    <v-img src="/img/uparrow.png" max-width="40px" @click="scrollTop" class="scroll-button" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

#wrapper {
  .scroll-button {
    position: fixed;
    z-index: 5;
    right: 20px;
    bottom: 20px;
    border-radius: 12px;
    transition: transform 0.1s ease;
    box-shadow: 0px 0px 20px #dd5b9c66;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
