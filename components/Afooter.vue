<template>
  <div id="wrapper" class="wmax">
    <div class="center w1280">
      <div class="twittershare front" @click="twitterShare">
        <v-icon color="#ffffff" small class="icon"> mdi-twitter </v-icon>
        <div class="twittercap icon">ツイート</div>
      </div>
    </div>
    <div class="information prel wmax front bgblack">
      <div class="writtenby txgrey">Written by</div>
      <v-img :src="caps.authericon" max-width="48px" class="authericon" />
      <div class="autherinfo">
        <div class="auther txwhite">
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
    <div class="prel wmax bgblack">
      <div class="center front w1280">
        <div :v-show="caps.comments == true">
          <div class="capt">
            <div class="emp txgrey tsgrey">コメントを書く</div>
            <div class="ruler bggrey bsgrey" />
          </div>
          <Disqus class="disqus center w960" />
        </div>
        <div :v-if="caps.relateds">
          <div class="capt">
            <div class="emp txpink tspink">関連記事</div>
            <div class="ruler bgpink bspink" />
          </div>
          <div class="relateds center w960">
            <nuxt-link :to="ra.path" v-for="ra in importedArticle" :key="ra.no" tag="div" class="articlewrapper bgpink bspink">
              <v-img :src="ra.image" class="articleimg" />
              <div class="articletitle txwhite">
                {{ ra.title }}
              </div>
              <div class="articledesc">
                {{ ra.description }}
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
  created () {
    const postsData = require('~/assets/posts.json')
    for (let i = 0; i < this.caps.articles.length; i++) {
      this.importedArticle[i] = postsData[this.caps.articles[i]]
      this.importedArticle[i].no = i
    }
  },
  data () {
    return {
      importedArticle: [],
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
  font-family: 'Zen Kaku Gothic New', sans-serif;
  margin-top: 32px;
  .twittershare {
    margin: 32px auto 64px;
    display: flex;
    flex-direction: row;
    width: 116px;
    height: 12px;
    padding: 12px 16px;
    background-color: #1da1f2;
    border-radius: 12px;
    box-shadow: 0px 0px 20px #1da1f288;
    transition: 0.2s ease;
    &:hover {
      transform: scale(1.03);
    }
    .twittercap {
      margin-left: 8px;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .information {
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 16px;
    .writtenby {
      margin-top: 4px;
      font-weight: bold;
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
        font-weight: bold;
        font-size: 20px;
      }
      .bio {
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
      flex: 1;
      max-width: 400px;
      min-width: 200px;
      border-radius: 8px;
      transition: transform 0.2s ease;
      &:hover {
        transform: scale(1.01) rotate(-0.3deg);
      }
      .articleimg {
        border-radius: 8px;
      }
      .articletitle {
        font-weight: bold;
        font-size: 20px;
        padding: 12px 12px 3px;
      }
      .articledesc {
        color: $white;
        padding: 3px 12px 12px;
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
    font-weight: bold;
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
}
a {
  text-decoration: none;
}
</style>
