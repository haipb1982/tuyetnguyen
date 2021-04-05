<template>
  <div class="App">
    <Header />
    <router-view />
    <atom-spinner
          :animation-duration="1000"
          :size="100"
          :color="'#E9B975'"
          style="margin:auto;padding:20px"
          v-if:="loading"
     />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import {AtomSpinner} from 'epic-spinners'
  
export default {
  name: "App",
  components: {
    Header,
    Footer,
    AtomSpinner
  },
  computed: {
    ...mapState({
      loading: state => state.status === 'loading'
    })
  },
};
</script>

<style >
@import "../src/assets/css/app.css";
</style>
