<template>
  <v-app>
    <!--<div id="bg" />-->
    <div class="container">
    </div>
  </v-app>
</template>

<script src="https://cdn.jsdelivr.net/npm/konva@9.4.0/konva.min.js"></script>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'Gradient Mapping Test',
        description: '',
        type: 'article',
        url: 'https://mitori.me/gm-test',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png'
      }
    }
  },
  mounted () {
    const width = 400;
    const height = 400;

    const stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const gradient = new Konva.Rect({
      x: 0,
      y: 0,
      width: width,
      height: height,
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: width, y: height },
      fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
    });
    layer.add(gradient);

    const imageObj = new Image();
    imageObj.onload = function() {
      const image = new Konva.Image({
        x: 50,
        y: 50,
        image: imageObj,
        width: 300,
        height: 300,
        draggable: true
      });
      layer.add(image);
      image.cache();
      image.filters([Konva.Filters.Mask]);
      image.mask(gradient);
      layer.draw();
    };
    imageObj.src = 'https://konvajs.org/assets/yoda.jpg';
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

.container {
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

</style>
