<template>
  <div>
    <div class="columns">
      <header class="column is-full">
        <h1 class="title is-1">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ prompt }}
          </h2>
      </header>
    </div>
    <div class="columns">
      <div v-for="overlay in overlays" 
           :key="overlay.urls.lg" 
           @click="selectImage(overlay)" 
           :class="['column', 'clickable', overlay.column]">
        <photo :image="overlay.avatar" :overlay="overlay.urls.lg" :ratio="overlay.bulma"></photo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Photo from '~/components/Photo.vue';

export default {
  components: {
    Photo
  },
  data() {
    return {
      uploading: false
    };
  },
  computed: {
    ...mapState({
      image: state => state.image,
      title: state => state.content.steps.index.title,
      prompt: state => state.content.steps.index.prompt,
      overlays: state => state.content.overlays,
      selectedoverlay: state => state.selectedoverlay,
      buttons: state => state.content.steps.index.buttons
    })
  },
  methods: {
    ...mapActions(['chooseOverlay']),
    ...mapMutations({
      addError: 'addError',
      setOrientation: 'setOrientation',
      setSelectedStep: 'setSelectedStep'
    }),
    selectImage(overlay) {
      console.log('gets here', overlay);
      // this.$router.push('upload');
      this.chooseOverlay(overlay);
    }
  },
  watch: {
    selectedoverlay(newValue, oldValue) {
      if (newValue) {
        this.$router.push('upload');
      }
    }
  },
  mounted() {
    this.setSelectedStep('index');
  }
};
</script>

<style scoped>
input {
  opacity: 0;
  position: absolute;
  height: 0;
  width: 0;
}

button {
  margin-top: 0.25rem;
}
</style>
