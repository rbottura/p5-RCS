<template>
  <div id="app">
    <Sketch />
  </div>
</template>

<script>
import Sketch from './components/Sketch.vue';

export default {
  name: 'App',
  components: {
    Sketch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
