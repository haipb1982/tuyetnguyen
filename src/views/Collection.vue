<template>
  <div>
    <!-- <div>{{ product_list }}</div> -->

    <div  v-for="(product, idx) in product_list" :key="idx">
       <a :href="`./detail/` + product.id">
          <img  style="width: 100px; " :src="product.image" />

          <p :v-bind="product.image"></p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_list: null,
      productDetail: null,
      page: 1,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let page = this.page;
      let res = await this.$store.dispatch("PRODUCT_LIST", page);
      console.log(res);
      this.product_list = res.product_list;
    },
  },
};
</script>

<style>
</style>