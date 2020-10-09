<template>
  <div class="app">
    <header class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="nav-item hide-sm is-hidden-mobile">
            <img :src="$store.state.content.title.image" alt="Logo">
          </nuxt-link>
          <a href="https://wisdems.org" class="nav-item" target="_blank">
            <img :src="$store.state.content.title.wisdems" alt="WisDems">
          </a>
          <nav-item v-for="(item, key) in $store.state.content.nav.some " :key="key" :item="item"></nav-item>
          <nav-item v-for="(item, key) in $store.state.content.nav.about " :key="key" :item="item"></nav-item>
          <nuxt-link class="nav-item" :to="item.href" v-for="(item, key) in $store.state.content.nav.internal " :key="key" :item="item">
            <span v-if="item.icon" class="icon">
              <i :class="['fa', item.icon]"></i>
            </span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <main class="hero-body" :class="'is-'+$store.state.steps.selected">
      <div class="container ">
        <nuxt></nuxt>
      </div>
    </main>
    <footer class="footer ">
      <nav class="breadcrumb has-arrow-separator is-centered">
        <ul>
          <li v-for="(key, index) in $store.state.steps.keys" :key="key" :class="{ 'is-active': $store.state.steps.selected === key, 'is-static': isStatic(key) }">
            <nuxt-link :to="key === 'index' ? '/' : key">
              {{ index+1 }}.&nbsp;
              <span>{{ $store.state.content.steps[key].label }}</span>
            </nuxt-link>
          </li>
        </ul>
        <a href="https://wisdems.org" class="nav-item" target="_blank">
          <img :src="$store.state.content.footer.disclaimer.image" :alt="$store.state.content.footer.disclaimer.text">
        </a>
      </nav>
    </footer>
  </div>
</template>

<script>
import NavItem from '~/components/NavItem.vue';

export default {
  components: {
    NavItem
  },
  methods: {
    isStatic(key) {
      return (key === 'upload' && !this.$store.state.selectedoverlay) ||
             (key === 'edit' && !this.$store.state.image) ||
             (key === 'share' && !this.$store.state.filteredImage);
    }
  }
};

</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  width: 100%;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
  height: auto;
  z-index: 1000;
}

.navbar-brand {
  width: 100%;
}

.footer {
  width: 100%;
  box-shadow: 0 -1px 2px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
  z-index: 1000;
}

.footer nav {
  flex-direction: column;
}

.is-active {
  font-weight: bold;
}

.is-static {
  pointer-events: none;
  opacity: 0.5;
}

.hero-body {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item:nth-child(3) {
  margin-left: auto;
}

@media screen and (max-width: 375px) {
  .footer .breadcrumb a {
    padding-left: .2em;
    padding-right:.2em;
  }
}

</style>
