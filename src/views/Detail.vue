<template>
  <div>
    <div>{{ productDetail }}</div>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      productDetail: null,
      page: 1,
    };
  },
  created() {
    this.fetch(id);
  },
  methods: {
    async fetch(id) {
      alert(id)
      // let res = await this.$store.dispatch("PRODUCT_LIST", page);
      // console.log(res);
      // this.product_list = res.product_list;
    },
  },
};
</script>

<style>
</style>