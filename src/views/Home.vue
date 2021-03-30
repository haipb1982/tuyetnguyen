<template>
  <div>Trang Chu</div>
</template>

<script>

import { mapActions, mapGetters, mapState } from "vuex";

export default {
 data: () => ({
    description: "",
    homelist:[]
  }),
    computed: {
    ...mapGetters({
      description: "messages",
    }),
    ...mapState({
      loading: (state) => state.intent.status === "loading",
    }),
  },
  methods: {
    ...mapActions({
      sendMsg: "INTENT_REQUEST",
    }),
  
  }

}

</script>

<style>

</style>