<template>
  <div class="App">
    <Header /><Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Common/Header";
import Menu from "./components/Common/Menu";
import Footer from "./components/Common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu
  },
};
</script>

<style >
@import "../src/assets/css/app.css";
</style>
