<template>
  <div class="image is-16by9">
    <img :class="" :src="image"></img>
    <img v-if="overlay" :src="overlay"></img>
  </div>
</template>

<script>

export default {
  props: ['image', 'overlay'],
  mounted() {

  }
};

</script>

<style scoped>

</style>
