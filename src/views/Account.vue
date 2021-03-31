<template>
  <div>
    <div>
      Login
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
       let data = {
        username:'',
        password:'',
        deviceid:12313213
      }
      let res = await this.$store.dispatch("POST_LOGIN",data);
      console.log(res)
    },
  }
}
</script>

<style>

</style>