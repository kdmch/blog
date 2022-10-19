<template>
<div id="footwrap">
  <div id="sharebelow">
    <div id="date">{{ info.updated }}</div>
    <div id="share-buttons">
      <div id="sharecap">SHARE!</div>
      <v-icon color="#1da1f2" large @click="twitterShare"> mdi-twitter </v-icon>
      <v-icon color="#4267b2" large> mdi-facebook </v-icon>
      <v-icon color="#06c755" large> mdi-chat-processing </v-icon>
    </div>
  </div>
  <div id="writtenby">
    <div id="wbwrap">
      <div id="wb">WRITTEN BY</div>
      <div id="auther">
        <div id="authericon"></div>
        <div id="autherprofile">
          <div id="authername">
            {{ info.auther }}
            <v-icon color="#dff2ff" medium> mdi-check-decagram </v-icon>
          </div>
          <div id="autherbio">{{ info.bio }}</div>
        </div>
      </div>
    </div>
    <div id="rawrap">
      <div id="ra">
        RELATED ARTICLES
        <v-icon color="#f3abc0" medium> mdi-arrow-top-right-thick </v-icon>
      </div>
      <div id="rarticle">
        <div v-for="related in info.relateds" :key="related.no" class="rarticlewrap">
          <nuxt-link :to="related.path" tag="div" class="ralinker">
            <img class="rarticleimg" src="@/assets/mitori.png">
            <div class="rarticledetail">
              <div class="rarticletitle">{{ related.title }}</div>
              <div class="rarticletext">{{ related.caption }}</div>
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
  props: ['info'],
  data() {
    return {
      suffix: ' - ミトリメ'
    }
  },
  methods: {
    twitterShare() {
      const intentUrl = 'https://twitter.com/intent/tweet?'
      const text = ['text', this.info.pagename + this.suffix + '\n']
      const url = ['url', this.info.url]
      const parameter = new URLSearchParams([text, url]).toString()
      const shareUrl = `${intentUrl}${parameter}`
      window.open(shareUrl, 'twitter')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap");
@import "assets/cssvar.scss";

#sharebelow {
  padding: 24px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  font-size: larger;

  font-family: "Josefin Sans", sans-serif;
  gap: 12px;

  #date {
    padding-left: 24px;
    color: $accent;
  }

  #share-buttons {
    display: flex;
    justify-content: right;
    gap: 10px;

    #sharecap {
      color: $deep;
      font-style: italic;
      vertical-align: middle;
      margin-right: 8px;
    }
  }
}

#writtenby {
  font-family: 'Josefin Sans', sans-serif;
  padding: 30px;
  background-color: $text;
  border-radius: 0px 0px 30px 30px/ 0px 0px 30px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  #wbwrap {
    width: 350px;
    margin-bottom: 20px;
  }

  #wb {
    font-size: large;
    color: $accent;
  }

  #auther {
    margin: 12px;
    display: flex;

    #authericon {
      background-image: url("@/assets/mitori.png");
      background-size: contain;
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }

    #autherprofile {
      margin-left: 12px;
      color: $base;

      #authername {
        font-size: 3.2vh;
      }

      #autherbio {
        margin-left: 12px;
        font-size: 2vh;
      }
    }
  }

  #rawrap {
    width: 350px;
  }

  #ra {
    font-size: large;
    color: $accent;
  }

  #rarticle {
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
}

.ralinker {
  display: flex;
  margin-top: 12px;
  height: 80px;
  border: 2px solid $base;
  border-radius: 20px;

  .rarticleimg {
    background-size: contain;
    width: 80px;
    height: 80px;
    margin-top: -2px;
    margin-left: -2px;
    border-radius: 20px;
  }

  .rarticledetail {
    font-family: sans-serif;
    margin-left: 12px;
    color: $base;

    .rarticletitle {
      font-size: 2.7vh;
      font-weight: bold;
    }

    .rarticletext {
      margin-left: 12px;
      font-size: 2vh;
    }
  }
}

a {
  text-decoration: none;
}
</style>
