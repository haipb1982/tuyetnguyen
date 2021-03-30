<template>
  <div>
    <div>
      {{ introduce }}
    </div>
    <div>
      {{ detail }}
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
      this.introduce = res;
      if (res) {
        console.log(res.obj_list[0].id);
        let id = res.obj_list[0].id;
        this.detail(id);
      }
    },
    async detail(id) {
      let detail = await this.$store.dispatch("HOME_PAGE_LIST_DETAIL", id);
      this.detail = detail;
    },
  },
};
</script>

<style>
</style>