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
        <p> dfhbgsducgwiuhw </p>
        <p> dfhbgsducgwiuhw </p>
        <p> dfhbgsducgwiuhw </p>
        <p> dfhbgsducgwiuhw </p>
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
          <v-icon color="#dd5b9c" x-large> mdi-crown </v-icon>
        </div>
        <div class="sidebarblankforimg"></div>
        <div class="sidebarheadercap">
          <div class="sidebarsubtitle">Other Articles</div>
          <div class="sidebartitle">Mostly Viewed</div>
        </div>
      </div>
      <div class="sidebarcap">
        uhaeriughisdufghiaeurgieurg
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
  background: linear-gradient(to right, $accent, $base);
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
  font-size: 2.5vh;
  color: $deep;
}

.sidebartitle {
  font-size: 3.5vh;
  color: $text;
  padding-bottom: 8px;
}

.sidebarcap {
  padding: 12px;
  font-family: sans-serif;
  font-size: 2.2vh;
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
