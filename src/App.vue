<template>
  <div id="app">

    <Navbar />
<!--    <router-view />-->

<Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./layout/Footer/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
}

</style>
