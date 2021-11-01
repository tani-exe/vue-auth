<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ uid }}でログインしています</p>
    <button @click="signout">Signout</button>
  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  name: "About",
  data() {
    return {
      uid: "",
    };
  },
  methods: {
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("/signin");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      }
    });
  },
};
</script>
