<template>
<div id="footwrap">
  <div id="sharebelow">
    <div id="sharecap"> SHARE! </div>
    <v-icon color="#dd5b9c" large> mdi-clipboard-multiple-outline </v-icon>
    <v-icon color="#1da1f2" large> mdi-twitter </v-icon>
    <v-icon color="#4267b2" large> mdi-facebook </v-icon>
    <v-icon color="#06c755" large> mdi-chat-processing </v-icon>
  </div>
  <div id="writtenby">
    <div id="wbwrap">
      <div id="wb"> WRITTEN BY </div>
      <div id="auther">
        <div id="authericon"></div>
        <div id="autherprofile">
          <div id="authername">
            {{ info.auther }}
            <v-icon color="#dff2ff" medium> mdi-check-decagram </v-icon>
          </div>
          <div id="autherbio"> {{ info.bio }} </div>
        </div>
      </div>
    </div>
    <div id="rawrap">
      <div id="ra">
        RELATED ARTICLES
        <v-icon color="#f3abc0" medium> mdi-arrow-top-right-thick </v-icon>
      </div>
      <div id="rarticle">
        <div class="rarticlewrap" v-for="related in info.relateds" :key="related.no">
          <img class="rarticleimg" src="@/assets/mitori.png">
          <div class="rarticledetail">
            <div class="rarticletitle"> {{ related.title }} </div>
            <div class="rarticletext"> {{ related.caption }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
@import "assets/cssvar.scss";

#sharebelow {
  padding: 12px;
  padding-right: 20px;
  display: flex;
  justify-content: right;
  gap: 12px;

  #sharecap {
    color: $deep;
    margin-right: 8px;
    font-size: larger;
    font-style: italic;
    font-family: 'Josefin Sans', sans-serif;
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
        font-size: x-large;
      }

      #autherbio {
        margin-left: 12px;
        font-size: small;
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
    margin: 12px;
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
  }
}

.rarticlewrap {
  display: flex;
  min-width: 400px;
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
      font-size: x-large;
      font-weight: bold;
    }

    .rarticletext {
      margin-left: 12px;
      font-size: small;
    }
  }
}

a {
  text-decoration: none;
}
</style>
