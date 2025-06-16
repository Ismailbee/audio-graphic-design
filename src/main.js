import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import sideBar from '../src/components/pages/SideBar/sideBar.vue';
import appHeader from './components/pages/Header/appHeader.vue';

import 'animate.css';
import './assets/css/tailwind.css'

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import './theme/variables.css';
import '@ionic/vue/css/palettes/dark.system.css';

const app = createApp(App);

app.use(IonicVue);     // Must come before router
app.use(router);

app.component('sideBar', sideBar);
app.component('appHeader', appHeader);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

router.isReady().then(() => {
  app.mount('#app');
});
