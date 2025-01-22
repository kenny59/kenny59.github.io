import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue';
import router from '@/router'

import {addIcons, OhVueIcon} from 'oh-vue-icons';
import {GiSunrise, GiSunset, GiHamburgerMenu, IoClose, MdLocationcityOutlined, BiPhone, CoLocationPin, IoStar, IoPrintSharp, CoSpring, SiSpringboot, IoLogoNodejs, CoTypescript, SiExpress, SiSequelize, SiPrisma, SiOracle, SiMysql, SiPostgresql, SiMongodb, SiGnubash, CoGo, SiRust, SiAngular, SiReact, CoVueJs, SiRedux, SiTailwindcss, CoDocker, CoKubernetes, CoJenkins, CoAmazonAws, CoProxmox, CoGithub, CoAnsible, CoTerraform, SiJunit5, FaDatabase, SiMocha, CoJest, SiCypress, SiSelenium, SiApachejmeter, SiPostman, CoGmail, BiGithub, BiLinkedin, SiRancher, BiGlobe2} from 'oh-vue-icons/icons';
addIcons(OhVueIcon, GiSunrise, GiSunset, GiHamburgerMenu, IoClose, MdLocationcityOutlined, BiPhone, CoLocationPin, IoStar, IoPrintSharp, CoSpring, SiSpringboot, IoLogoNodejs, CoTypescript, SiExpress, SiSequelize, SiPrisma, SiOracle, SiMysql, SiPostgresql, SiMongodb, SiGnubash, CoGo, SiRust, SiAngular, SiReact, CoVueJs, SiRedux, SiTailwindcss, CoDocker, CoKubernetes, CoJenkins, CoAmazonAws, CoProxmox, CoGithub, CoAnsible, CoTerraform, SiJunit5, FaDatabase, SiMocha, CoJest, SiCypress, SiSelenium, SiApachejmeter, SiPostman, CoGmail, BiGithub, BiLinkedin, SiRancher, BiGlobe2);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");