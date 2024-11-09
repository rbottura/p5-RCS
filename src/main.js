import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Navigation from "./components/Navigation.vue";

createApp(App, {
  components: { Navigation },
}).mount('#app')
