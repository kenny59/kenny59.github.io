import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue';
import router from '@/router'

import {addIcons, OhVueIcon} from 'oh-vue-icons';
import * as Icons from "oh-vue-icons/icons"
const Fa = Object.values({ ...Icons });
addIcons(...Fa);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");