<template>
  <div class="App">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
@import "../src/assets/css/app.css";
</style>
