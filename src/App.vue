<template>
  <div class="App">
    <Header />

    <router-view class="mainview" />

    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
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

<style>
@import "../src/assets/css/app.css";

.mainview{
  min-height: 600px;
}

</style>
