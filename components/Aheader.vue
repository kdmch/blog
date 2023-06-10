<template>
<div id="wrapper" class="wmax">
  <div class="bgrect wmax bgpink" />
  <div class="a-header wmax">
    <div class="eyecatch wmax">
      <v-img :src="caps.image" class="eyecatchimage"/>
      <div class="date front txpink">
        <v-icon color="#dd5b9c" class="icon"> mdi-calendar-month </v-icon>
        <span>{{ caps.updated }}</span>
      </div>
    </div>
    <div class="meta-info front wmax">
      <div id="title" class="txblack">
        {{ caps.title }}
      </div>
      <div class="tags txpink">
        <nuxt-link :to="`./tag?q=${tag}`" v-for="tag in caps.tags" :key="tag" class="tags">
          #{{ tag }}
        </nuxt-link>
      </div>
      <div class="information">
        <div class="autherinfo">
          <v-img :src="caps.authericon" max-width="48px" class="authericon"/>
          <div class="auther txblack">
            {{ caps.auther }}
          </div>
          <a :href="caps.twitter">
            <v-icon color="#1da1f2"> mdi-twitter </v-icon>
          </a>
        </div>
        <div class="description txgrey">
          {{ caps.description }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['caps'],
  data () {
    return {
      suffix: ' - ミトリメ'
    }
  },
  methods: {
    twitterShare () {
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
  width: 100%;
  display: flex;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  justify-content: center;
  .bgrect {
    position: absolute;
    overflow: clip;
    top: 0;
    left: 0;
    height: 300px;
  }
  .a-header {
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    margin: 0px auto 36px;
    padding: 0 16px;
    .eyecatch {
      max-width: 720px;
      margin: 32px auto 0px;
      .eyecatchimage {
        max-width: 720px;
        border-radius: 16px;
        transition: transform 0.2s ease;
        &:hover {
          transform: scale(1.008) rotate(-0.3deg);
        }
      }
      .date {
        text-align: right;
        font-weight: bold;
        font-size: 20px;
      }
    }
    .meta-info {
      padding: 0 48px;
      #title {
        font-weight: bold;
        font-size: 36px;
      }
      .tags {
        display: flex;
        font-weight: bold;
        color: $grey;
        font-size: 18px;
        gap: 12px;
        &:hover {
          color: $pink;
        }
      }
      .information {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        gap: 16px;
        .autherinfo {
          height: 48px;
          display: flex;
          gap: 20px;
          .authericon {
            border-radius: 50%;
            transition: 0.2s ease;
            &:hover {
              transform: rotate(-10deg);
              border-radius: 25%;
            }
          }
          .auther {
            font-weight: bold;
            font-size: 20px;
          }
        }
        .description {
          text-align: right;
          font-size: 16px;
        }
      }
    }
  }
  .icon {
    display: inline-flex;
    align-items: center;
    margin-top: -3px;
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
