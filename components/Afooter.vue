<template>
  <div id="wrapper" class="wmax">
    <div class="center w960">
      <div class="twittershare front" @click="twitterShare">
        <v-icon color="#ffffff" small class="icon"> mdi-twitter </v-icon>
        <div class="twittercap icon">ツイート</div>
      </div>
      <!--<div class="bgprg prel wmax bgblack" />-->
      <div class="information prel wmax front">
        <div class="writtenby txgrey">Written by</div>
        <v-img :src="caps.authericon" max-width="48px" class="authericon" />
        <div class="autherinfo">
          <div class="auther txblack">
            {{ caps.auther }}
            <a href="https://twitter.com/mitorime" class="icon">
              <v-icon color="#1da1f2"> mdi-twitter </v-icon>
            </a>
          </div>
          <div class="bio txgrey">
            {{ caps.bio }}
          </div>
        </div>
      </div>
    </div>
    <div class="prel wmax bgblack">
      <div class="center front w1280">
        <div :v-show="caps.comments == true">
          <div class="emg-blank bgblack" />
          <div class="capt">
            <div class="emp txgrey">コメントを書く</div>
            <div class="ruler bggrey" />
          </div>
          <Disqus class="disqus center w960" />
        </div>
        <div :v-if="caps.relateds">
          <div class="capt">
            <div class="emp txpink">関連記事</div>
            <div class="ruler bgpink" />
          </div>
          <div class="relateds center w960">
            <nuxt-link :to="article.url" v-for="article in caps.articles" :key="article.no" tag="div" class="articlewrapper bgpink">
              <v-img :src="article.image" class="articleimg" />
              <div class="articletitle txwhite">
              {{ article.title }}
              </div>
            </nuxt-link>
          </div>
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
  margin-top: 32px;
  .bgprg {
    z-index: 0;
    height: 30px;
    overflow: clip;
    transform-origin: top center;
    transform: scale(1) rotate(-5deg);
  }
  .twittershare {
    margin: 32px auto 64px;
    display: flex;
    flex-direction: row;
    width: 116px;
    height: 12px;
    padding: 12px 16px;
    background-color: #1da1f2;
    border-radius: 12px;
    .twittercap {
      margin-left: 8px;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .information {
    padding: 0 24px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
    .writtenby {
      margin-top: 4px;
      font-family: "Dela Gothic One";
      font-size: 20px;
    }
    .authericon {
      width: 48px;
      height: 48px;
      border-radius: 100%;
    }
    .autherinfo {
      .auther {
        display: flex;
        gap: 12px;
        font-family: "Dela Gothic One";
        font-size: 20px;
      }
      .bio {
        font-family: sans-serif;
        font-size: 12px;
      }
    }
  }
  .disqus {
    padding: 12px 24px 24px;
  }
  .relateds {
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    .articlewrapper {
      width: 210px;
      border-radius: 8px;
      .articleimg {
        border-radius: 8px;
      }
      .articletitle {
        font-weight: bold;
        padding: 12px;
        height: 80px;
      }
    }
  }
  .capt {
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    display: inline-flex;
    align-items: center;
  }
  .emp {
    font-family: "Dela Gothic One";
    font-size: 36px;
  }
  .ruler {
    flex-grow: 1;
    height: 6px;
    margin-left: 24px;
    border-radius: 2px;
  }
  .front {
    position: relative;
    z-index: 1;
  }
  .prel {
    position: relative;
  }
  .wmax {
    width: 100%;
  }
  .w960 {
    max-width: 960px;
  }
  .w1280 {
    max-width: 1280px;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  .emg-blank {
    height: 32px;
  }
}
a {
  text-decoration: none;
}
</style>
