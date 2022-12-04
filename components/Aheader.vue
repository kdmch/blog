<template>
<div id="wrapper" class="wmax">
  <!--<div class="bgrect wmax bgpink" />-->
  <div class="header">
    <div class="eyecatch wmax">
      <v-img :src="caps.image" class="eyecatchimage"/>
      <div class="date txpink">
        {{ caps.updated }}
      </div>
    </div>
    <div id="title" class="txblack">
      {{ caps.title }}
    </div>
    <div class="tags txpink">
      <div v-for="tag in caps.tags" :key="tag" class="tag">
        #{{ tag }}
      </div>
    </div>
    <div class="information">
      <div class="autherinfo">
        <v-img :src="caps.authericon" max-width="48px" class="authericon"/>
        <div class="auther txblack">
          {{ caps.auther }}
        </div>
        <div class="icon">
          <a :href="caps.twitter">
            <v-icon color="#1da1f2" size="24px">
              mdi-twitter
            </v-icon>
          </a>
        </div>
      </div>
      <div class="description txgrey">
        {{ caps.description }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['caps'],
  data() {
    return {
      suffix: ' - ミトリメ'
    }
  },
  methods: {
    twitterShare() {
      const intentUrl = 'https://twitter.com/intent/tweet?'
      const text = ['text', this.caps.title + this.suffix + '\n']
      const url = ['url', this.caps.url]
      const parameter = new URLSearchParams([text, url]).toString()
      const shareUrl = `${intentUrl}${parameter}`
      window.open(shareUrl, 'twitter')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/cssvar.scss";

#wrapper {
  max-width: 960px;
  width: 100%;
  .bgrect {
    position: absolute;
    overflow: clip;
    top: 0;
    left: 0;
    height: 260px;
    transform-origin: bottom center;
    transform: scale(1.5) rotate(-5deg);
  }
  .header {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px 24px 36px;
    .eyecatch {
      max-width: 720px;
      margin-top: 32px;
      .eyecatchimage {
        max-width: 720px;
        border-radius: 16px;
      }
      .date {
        text-align: right;
        font-family: 'Dela Gothic One';
        font-size: 20px;
      }
    }
    #title {
      font-family: 'Dela Gothic One';
      font-size: 48px;
    }
    .tags {
      display: flex;
      font-family: 'Dela Gothic One';
      font-size: 20px;
      gap: 12px;
    }
    .information {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      gap: 12px;
      .autherinfo {
        height: 48px;
        display: flex;
        gap: 20px;
        .authericon {
          border-radius: 100%;
        }
        .auther {
          margin-top: 4px;
          font-family: 'Dela Gothic One';
          font-size: 24px;
        }
      }
      .description {
        max-width: 540px;
        margin-left: 12px;
        font-family: sans-serif;
        font-size: 18px;
      }
    }
  }
  .icon {
    display: inline-flex;
    align-items: center;
  }
  .front {
    position: relative;
    z-index: 1;
  }
  .wmax {
    width: 100%;
  }
}

a {
  text-decoration: none;
}

</style>
