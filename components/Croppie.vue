<template>
  <div>
  </div>
</template>

<script>

export default {
  props: ['image', 'overlay', 'orientation', 'size'],
  methods: {
    getCroppedImage: function () {
      return this.croppie.result({ type: 'base64', size: 'original', format: 'png', quality: 1 });
    },
    updateImage: function () {
      this.croppie.bind({
        url: this.image,
        orientation: this.orientation,
        zoom: 1,
        points: [0, 0, 0, 0]
      }).then(() => {
        this.croppie.setZoom(1);
      });
    }
  },
  mounted() {
    var Croppie = require('croppie');
    var el = this.$el;
    this.croppie = new Croppie(el, {
      enableOrientation: true,
      enforceBoundary: false,
      viewport: {
        width: this.$el.offsetWidth,
        height: this.$el.offsetWidth * 9 / 16
      },
      boundary: {
        width: this.$el.offsetWidth,
        height: this.$el.offsetWidth * 9 / 16
      }
    });
    this.updateImage();
    el.querySelector('.cr-viewport').style.backgroundImage = `url(${this.overlay})`;
  }
};
</script>

<style scoped>

</style>
