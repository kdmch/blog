<template>
  <v-app>
    <!--<div id="bg" />-->
    <div class="center">
      <div class="flex-row">
        <button class="skeleton-works dropshadow-works button-works bold-b">
          Works
        </button>
        <button class="skeleton-twitter dropshadow-twitter button-twitter">
          <v-icon>
            mdi-twitter
          </v-icon>
        </button>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'UI Test',
        description: '',
        type: 'article',
        url: 'https://mitori.me/ui-test',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png'
      }
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";

.center {
  display: flex;
  background-color: #f8f8ff;
  background-size: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  gap: 32px;
}
.flex-row {
  display: flex;
  justify-content: row;
  gap: 32px;
}

.skeleton-works {
  background: linear-gradient(to bottom right, #3fe499, #20d9cc);
}

.skeleton-twitter {
  background: linear-gradient(to bottom right, #1DA1F2, #1DA1F2);
}

.dropshadow-works {
  box-shadow: 0px 0px 32px #30deb2, 0px 0px 24px -6px #f8f8ff inset;
  transition: .2s;
}
.dropshadow-works:hover {
  box-shadow: 0px 0px 18px #30deb2, 0px 0px 6px -12px #f8f8ff inset;
}

.dropshadow-twitter {
  box-shadow: 0px 0px 32px #1DA1F2, 0px 0px 24px -6px #f8f8ff inset;
  transition: .2s;
}
.dropshadow-twitter:hover {
  box-shadow: 0px 0px 18px #1DA1F2, 0px 0px 6px -12px #f8f8ff inset;
}

.bold-b {
  font-family: 'DIN alternate', sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.button-works {
  width: 300px;
  height: 50px;
  border-radius: 20px;
}

.button-twitter {
  width: 50px;
  height: 50px;
  border-radius: 16px;
}

</style>
