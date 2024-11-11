<template>
  <div>
    <Navigation /> <!-- Always display Navigation -->
    <div v-if="isExamplePage">
      <Sketch /> <!-- Only load Sketch if it's an example page -->
    </div>
    <div v-else>
      <h1>Welcome to p5-RCS</h1>
      <p>A p5js library for Rastering and Color Separation</p>
      <!-- Other main page content can go here -->
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Sketch from "./components/Sketch.vue";

export default {
  components: { Navigation, Sketch },
  data() {
    return {
      isExamplePage: false,
    };
  },
  mounted() {
    // Check the URL path to see if it's an example page
    const path = window.location.pathname;
    this.isExamplePage = /\/assets\/examples\/[^\/]+\/index\.html$/.test(path);
  },
};
</script>

<style scoped>
/* Global styles can go here */
</style>
