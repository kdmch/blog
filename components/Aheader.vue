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
        <div class="tag" v-for="tag in caps.tags" :key="tag"> {{ tag }} </div>
      </div>
    </div>
    <div id="tagblank">
      <div id="share">
        <v-icon color="#dd5b9c" large> mdi-clipboard-multiple-outline </v-icon>
        <v-icon color="#1da1f2" large> mdi-twitter </v-icon>
        <v-icon color="#4267b2" large> mdi-facebook </v-icon>
        <v-icon color="#06c755" large> mdi-chat-processing </v-icon>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['caps']
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
  height: 150px;

  #head {
    display: flex;
    background-color: $text;
    justify-content: space-between;
    border-radius: 30px 30px 0px 0px / 30px 30px 0px 0px;

    #title {
      flex-grow: 2;
      margin: 24px 20px 48px 36px;
      color: $base;
      font-size: 4vh;
      font-family: 'Dela Gothic One', cursive;
      line-height: 90%;
      max-width: 900px;
      //text-shadow: 0px 0px 40px #ffffffaa;
    }

    #date {
      flex-grow: 1;
      display: flex;
      margin: auto 36px auto 6px;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 2vh;
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
        margin-left: 3vh;
        margin-top: -7px;
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;

        .tag {
          background-color: $base;
          border-radius: 8px;
          padding-left: 8px;
          padding-right: 8px;
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

@media screen and (max-width: 768px) {
  
}

</style>
