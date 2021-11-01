import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"

const config = {
  apiKey: "AIzaSyANcBVyaUiQEjgdouRyGMnULzvY63ePH04",
  authDomain: "vue-auth-a6707.firebaseapp.com",
  projectId: "vue-auth-a6707",
  storageBucket: "vue-auth-a6707.appspot.com",
  messagingSenderId: "28380927058",
  appId: "1:28380927058:web:9a85fd32f55ab77d827b8b",
  measurementId: "G-2C72N773N3"
}
initializeApp(config)

createApp(App).use(router).mount('#app')
