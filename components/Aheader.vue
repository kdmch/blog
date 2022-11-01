<template>
<div id="headwrap">
  <div id="head">
    <div id="title"> {{ caps.title }} </div>
    <div id="date">
      <v-icon color="#f3abc0" medium> mdi-update </v-icon>
      {{ caps.updated }}
    </div>
  </div>
  <div id="gw-tb">
    <div id="tags">
      <div id="tagr">
        <div v-for="tag in caps.tags" :key="tag" class="tag"> {{ tag }} </div>
      </div>
    </div>
    <div id="tagblank">
      <div id="share">
        <v-icon color="#1da1f2" @click="twitterShare"> mdi-twitter </v-icon>
        <v-icon color="#4267b2"> mdi-facebook </v-icon>
        <v-icon color="#06c755"> mdi-chat-processing </v-icon>
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
      const text = ['text', this.caps.pagename + this.suffix + '\n']
      const url = ['url', this.caps.url]
      const parameter = new URLSearchParams([text, url]).toString()
      const shareUrl = `${intentUrl}${parameter}`
      window.open(shareUrl, 'twitter')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import "assets/cssvar.scss";

#headwrap {
  background-color: $base;
  background-size: contain;
  border-radius: 30px 30px 0 0;

  #head {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px 40px 40px 40px;
    background-color: $text;
    justify-content: space-between;
    border-radius: 30px 30px 0px 0px / 30px 30px 0px 0px;

    #title {
      flex-grow: 2;
      color: $base;
      font-size: 5vh;
      font-family: 'Dela Gothic One', sans-serif;
      line-height: 90%;
      max-width: 900px;
      //text-shadow: 0px 0px 40px #ffffffaa;
    }

    #date {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 20px;
      color: $accent;
    }
  }

  #gw-tb {
    display: flex;

    #tags {
      flex-grow: 2;
      margin-top: -1px;
      margin-bottom: 24px;
      height: 30px;
      background-color: $text;
      border-bottom-right-radius: 30px;

      #tagr {
        margin-left: 20px;
        margin-top: -7px;
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;

        .tag {
          background-color: $accent;
          border-radius: 8px;
          padding-left: 8px;
          padding-right: 8px;
          font-size: 2vh;
          color: $text;
        }
      }
    }

    #tagblank {
      flex-grow: 1;
      margin-top: -29px;
      height: 30px;
      background-color: $base;
      border-top-left-radius: 30px;

      #share {
        margin-top: 12px;
        margin-left: 12px;
        margin-right: 20px;
        display: flex;
        justify-content: right;
        gap: 12px;
      }
    }
  }
}

a {
  text-decoration: none;
}

</style>
