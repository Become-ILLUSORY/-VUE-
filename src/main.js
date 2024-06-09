import './assets/main.css';
import { createApp } from 'vue';
import Carousel from './components/Carousel.vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('Carousel', Carousel);
app.use(router);

app.mount('#app');