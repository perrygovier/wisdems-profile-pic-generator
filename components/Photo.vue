<template>
  <div :class="['image', ratio]">
    <img :src="image"/>
    <img v-if="overlay" :src="overlay"/>
  </div>
</template>

<script>

export default {
  props: ['image', 'overlay', 'ratio'],
  mounted() {

  }
};

</script>

<style scoped>

</style>
