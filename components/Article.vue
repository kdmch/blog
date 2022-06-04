<template>
    <div id="wrap">
      <div id="awrap">
        <div id="head">
          <div id="title"> {{ title }} </div>
          <div id="date">
            <v-icon color="#f3abc0" medium> mdi-update </v-icon>
            {{ updated }}
          </div>
        </div>
        <div id="gw-tb">
          <div id="tags">
            <div id="tagr">
              <div class="tag" v-for="tag in tags" :key="tag"> {{ tag }} </div>
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

        <div id="text"> <LogsD2022060800 /> </div>

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
                  {{ auther }}
                  <v-icon color="#f3abc0" medium> mdi-check-decagram </v-icon>
                </div>
                <div id="autherbio"> {{ bio }} </div>
              </div>
            </div>
          </div>
          <div id="rawrap">
            <div id="ra">
              RELATED ARTICLES
              <v-icon color="#f3abc0" medium> mdi-arrow-top-right-thick </v-icon>
            </div>
            <div id="rarticle">
              <div class="rarticlewrap" v-for="related in relateds" :key="related.no">
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
    </div>

</template>

<script>
export default{
  data: () => {
    return {
      title: 'テスト記事ですああああああああああああああああああああああああ',
      updated: '2022.05.31',
      tags: ['#テスト', '#test', '#test2'],
      auther: 'mitori',
      bio: 'うわああああああああああああ',
      relateds: [{
        no: 1,
        title: 'いろいろ',
        caption: 'なんで？',
      },{
        no: 2,
        title: 'いろいろ2',
        caption: 'なんで？2ああああああああああああああ',
      }],
    };
  }
};
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
  @import "assets/cssvar.scss";

  #wrap {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    gap: 25px;
    font-family: sans-serif;
    #awrap {
      background-color: $base;
      background-size: contain;
      border-radius: 30px;
      #head {
        display: flex;
        background-color: $text;
        border-radius: 30px 30px 0px 0px / 30px 30px 0px 0px;
        #title {
          flex-grow: 2;
          margin: 24px 20px 48px 36px;
          color: $base;
          font-size: 4vh;
          font-family: 'Dela Gothic One', cursive;
          line-height: 90%;
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
      #text {
        margin-top: 3vh;
        margin-bottom: 3vh;
        color: $text;
      }
      #sharebelow {
        padding: 12px;
        padding-right: 20px;
        display: flex;
        justify-content: right;
        gap: 12px;
        #sharecap {
          color: $accent;
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
        border-radius:  0px 0px 30px 30px/ 0px 0px 30px 30px;
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
    }
  }
  .rarticlewrap {
    display: flex;
    height: 80px;
    .rarticleimg {
      background-size: contain;
      width: 80px;
      height: 80px;
      border-radius: 20px;
    }
    .rarticledetail {
      margin-left: 12px;
      color: $base;
      .rarticletitle {
        font-size: x-large;
        font-style: bold;
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