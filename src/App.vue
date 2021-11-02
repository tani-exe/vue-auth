<template>
  <div id="nav">
    <div v-if="logined">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div v-if="!logined">
      <router-link to="/">Home</router-link> |
      <router-link to="/signin">Signin</router-link> |
      <router-link to="/signup">Signup</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default{
  data() {
    return {
      logined: false
    }
  },
  mounted(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.logined = true
      } else {
        this.logined = false
      }
    });     
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
