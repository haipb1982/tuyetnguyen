<template>
  <div>
    <div>
      {{product}}
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      product:null,
      productDetail:null,
      page:1
    }
  },
  created(){
    this.fetch()
  },
  methods:{
    async fetch() {
      let page = this.page
      let res = await this.$store.dispatch("PRODUCT_LIST",page);
      this.product = res
    },
  }
}
</script>

<style>

</style>