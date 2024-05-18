import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import print from 'vue3-print-nb';
import App from './App.vue';


import { initializeApp } from "firebase/app";
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
const firebaseConfig = {
  apiKey: "AIzaSyA4FrZqdD5FmqW2iiE5M2OWs1d5CFJqyLc",
  authDomain: "vydeneme-b6bc0.firebaseapp.com",
  projectId: "vydeneme-b6bc0",
  storageBucket: "vydeneme-b6bc0.appspot.com",
  messagingSenderId: "968457294785",
  appId: "1:968457294785:web:1dcbeaa73f60067dd0d540",
  measurementId: "G-SP1XGP802L"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

registerPlugins(app)
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(print);
app.use(VueApexCharts);
app.mount('#app')
