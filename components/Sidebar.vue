<template>
<div id="wrap">
  <div id="prof">
    <div class="sidebar">
      <div class="sidebarheader">
        <img class="sidebaricon" src="@/assets/mitori.png">
        <div class="sidebarblankforimg"></div>
        <div class="sidebarheadercap">
          <div class="sidebarsubtitle">Auther</div>
          <div class="sidebartitle">mitori</div>
        </div>
      </div>
      <div class="sidebarcap">
        <p> 自称 Web & グラフィックデザイナー 兼 DTMer、ツイッターお絵描キスト。</p>
        <p> 言語系。ベクター。they/them。暑い。</p>
      </div>
      <div class="socials">
        <v-icon color="#dff2ff" medium> mdi-twitter </v-icon>
      </div>
    </div>
  </div>
  <div id="other">
    <div class="sidebar">
      <div class="sidebarheader">
        <div class="sidebaricon">
          <v-icon color="#dd5b9c" x-large> mdi-new-box </v-icon>
        </div>
        <div class="sidebarblankforimg"></div>
        <div class="sidebarheadercap">
          <div class="sidebarsubtitle">Other Articles</div>
          <div class="sidebartitle">新着記事</div>
        </div>
      </div>
      <div class="sidebarcap">
        まだない
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "assets/cssvar.scss";

@mixin sidebar-template() {
  background-color: $text;
  background-size: cover;
  border-radius: 30px;
  color: $base;
}

#wrap {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;

  // こう書かないと動かない
  #prof {
    @include sidebar-template();
  }

  #other {
    @include sidebar-template();
  }
}

.sidebar {
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  gap: 10px;
}

.sidebarheader {
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background: $base;
  background-size: cover;
  border-radius: 40px;
  height: 80px;
}

.sidebaricon {
  display: flex;
  justify-content: center;
  background-color: $base;
  background-size: contain;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

.sidebarblankforimg {
  width: 24px;
}

.sidebarheadercap {
  display: flex;

  flex-direction: column;
}

.sidebarsubtitle {
  padding-top: 8px;
  font-size: 2vh;
  color: $deep;
}

.sidebartitle {
  font-size: 3vh;
  font-weight: bold;
  color: $text;
  padding-bottom: 8px;
}

.sidebarcap {
  padding: 12px;
  font-family: sans-serif;
  font-size: 1.8vh;
  color: $base;
}

.socials {
  display: flex;
  justify-content: flex-end;
}

a {
  text-decoration: none;
}
</style>
