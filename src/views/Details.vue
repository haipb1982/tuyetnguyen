<template>
  <div>
    <!-- <div>{{ productDetail }}</div> -->

    <b>name:{{ productDetail.product.name }}</b>
    <br />
    <img :src="productDetail.product.image" style="width: 200px" />
    <br />
    description : {{ productDetail.product.description }}
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      productDetail: null,
    };
  },
  created() {
    this.fetch(this.$route.params["id"]);
  },
  methods: {
    async fetch(id) {
      // alert(id);
      let res = await this.$store.dispatch("PRODUCT_DETAIL", id);
      console.log(res);
      this.productDetail = res;
    },
  },
};
</script>

<style>
</style>