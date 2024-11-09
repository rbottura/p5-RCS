<template>
    <Navigation />
    <!-- <Sketch /> -->
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Sketch from './components/Sketch.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Sketch,
  },
};
</script>
