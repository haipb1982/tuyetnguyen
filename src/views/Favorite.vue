<template>
  <div class="collection wishlist">
    <div class="container">
      <div class="collection-box">
        <h3 class="title-section">cổ vật yêu thích</h3>
        <div class="collection-content">
          <div class="main-content">
            <div class="row product-list">
              <div
                class="product-col"
                v-for="(product, idx) in product_list"
                :key="idx"
              >
                <router-link
                  :to="{ name: 'details', params: { id: product.id } }"
                >
                  <div class="product-item">
                    <div class="product-image">
                      <img :src="product.image" />
                    </div>
                    <div class="product-info">
                      <button class="btn btn-wishlist">
                        <i class="fas fa-heart"></i>
                      </button>
                      <a
                        href="#"
                        class="product-title"
                        :v-bind="product.image"
                        >{{ product.name }}</a
                      >
                    </div>
                  </div>
                </router-link>
                <div class="actions">
                  <a href="#" @click.prevent="removeFavorite(product.id)"
                    ><i class="fa fa-trash-o" aria-hidden="true"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    if (localStorage.getItem("isAuth")) this.fetch();
    else this.$router.push("/login");
  },
  methods: {
    async fetch() {
      let page = this.page;
      let res = await this.$store.dispatch("FAVORITE_LIST", page);
      console.log(res);
      this.product_list = res.product_list;
    },

    async removeFavorite(id) {
      let data = new FormData();
      data.append("product", id);

      await this.$store.dispatch("DELETE_FAVORITE", data).then((res) => {
        console.log(res);
        if (res) {
          alert("Removed successful!");
          this.fetch();
        } else {
          alert("Removed failed!");
        }
      });
    },
  },
};
</script>

<style scoped>
.actions {
  display: inline-block;
  margin: auto;
  padding: 10px;
  background: #d99751;
  border-radius: 10px;
  width: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
</style>
