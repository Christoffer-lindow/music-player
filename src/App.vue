<template>
  <!-- eslint-disable max-len -->
  <div>
    <app-header />
    <router-view v-slot="{ Component }">
      <component :is="Component"> </component>
    </router-view>
    <music-player></music-player>
    <auth-modal />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';
import MusicPlayer from './components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    MusicPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>
