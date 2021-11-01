import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"

const config = {
  apiKey: "AIzaSyBPPFyHp1-fD5H9u0hKXUVyErajyJab9-0",
  authDomain: "pj-running-ab248.firebaseapp.com",
  projectId: "pj-running-ab248",
  storageBucket: "pj-running-ab248.appspot.com",
  messagingSenderId: "687958888236",
  appId: "1:687958888236:web:bc973fdc3da18c22112689",
  measurementId: "G-HERHWMJ06T"
}
initializeApp(config)

createApp(App).use(router).mount('#app')
