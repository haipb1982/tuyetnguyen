<template>
  <div>
    <div>
      {{ introduce }}
      

    </div>


    <div        v-for="(image, idx) in detail"
              :key="idx"
            >
     <img :src="image">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduce: null,
      detail: null,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let res = await this.$store.dispatch("HOME_PAGE_LIST");
      this.introduce = res.obj_list[0].text;
      if (res) {
        console.log(res.obj_list[0].id);
        let id = res.obj_list[0].id;
        this.getdetail(id);
      }
    },
    async getdetail(id) {
      let res = await this.$store.dispatch("HOME_PAGE_DETAIL", id);
      this.detail = res.homepage.images;
    },
  },
};
</script>

<style>
</style>