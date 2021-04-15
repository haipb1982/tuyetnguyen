<template>
  <div class="collection">
    <div class="container">
      <div class="collection-box">
        <h3 class="title-section">bộ sưu tập</h3>
        <div class="collection-content">
          <ul class="nav-tab">
            <li class="nav-item" v-bind:class="{ active: isActiveCat(8) }">
              <a href="/bosuutap/8" class="nav-link">cổ vật</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: isActiveCat(9) }">
              <a href="/bosuutap/9" class="nav-link">cổ phục</a>
            </li>
          </ul>
          <div class="main-content">
            <div class="row product-list">
              <div
                class="product-col"
                v-for="(product, idx) in product_list"
                :key="idx"
              >
                <router-link
                  :to="{ name: 'chitiet', params: { id: product.id } }"
                >
                  <div class="product-item">
                    <div class="product-image">
                      <img :src="product.image" />
                    </div>
                    <div class="product-info">
                      <a
                        href="#"
                        class="product-title"
                        :v-bind="product.image"
                        >{{ product.name }}</a
                      >
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="row product-page" v-html="createPage()"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { asyncLoading } from "vuejs-loading-plugin";

export default {
  data() {
    return {
      product_list: null,
      num_page: 1,
      data: {
        page: 1,
        catid: 8,
      },
    };
  },
  created() {
    this.data.page = this.$route.params["p"] ? this.$route.params["p"] : 1;
    this.data.catid = this.$route.params["id"] ? this.$route.params["id"] : 8;

    // alert("page:" + this.data.page + "-" + "id:" + this.data.catid);

    asyncLoading(this.fetch(this.data))
      .then()
      .catch();

    // this.fetch(this.data);
  },
  methods: {
    async fetch(_data) {
      await this.$store.dispatch("PRODUCT_LIST", _data).then((res) => {
        this.product_list = res.product_list;
        this.num_page = res.num_page;
      });
    },
    isActiveCat(id) {
      return id == this.data.catid;
    },
    isActivePage(id) {
      return id == this.data.page;
    },
    createPage() {
      let html = "";
      if (this.num_page > 1) {
        let i = 1;
        while (i <= this.num_page) {
          html += `<a class="${
            this.isActivePage(i) ? "selected" : ""
          }" href="/bosuutap/${this.data.catid}/${i}/">${i}</a>`;
          i++;
        }
      }
      return html;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-box .nav-tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #eab875;
  color: #fff;
  padding: 3px;
  width: 250px;
  margin: 0 auto 35px;
}

.collection-box .nav-item {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 3px;
  background-color: transparent;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  text-align: center;
}

.collection-box .nav-item:nth-child(1) {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.collection-box .nav-item:nth-last-child(1) {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.collection-box .nav-item.active {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  background-color: #c38e46;
}

.collection-box .nav-link {
  text-decoration: none;
  display: block;
  height: 40px;
  line-height: 40px;
  text-transform: uppercase;
}

.collection .main-content .product-list {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: 0 -5px;
}

.collection .main-content .product-col {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 20%;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
}

.collection .main-content .product-item {
  border-radius: 17px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  -webkit-transition: all 0.35s ease;
  -o-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.collection .main-content .product-item:hover {
  -webkit-transition: all 0.35s ease;
  -o-transition: all 0.35s ease;
  transition: all 0.35s ease;
  margin-top: -10px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.295);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.295);
}

.collection .main-content .product-info {
  padding: 20px 15px 10px;
  background-color: #eab875;
  position: relative;
}

.collection .main-content .product-info .btn-wishlist {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 3px;
  right: 3px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1;
}

.collection .main-content .product-info .btn-wishlist i {
  font-size: 14px;
  list-style: 1;
  color: #fff;
}

.collection .main-content .product-title {
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.product-info{
  min-height: 90px !important;
}
@media (max-width: 991px) {
  .collection-box {
    .nav-link {
      text-decoration: none;
      display: block;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
    }
    .nav-tab {
      width: 200px;
      margin: 0 auto 35px;
    }
  }
  .collection .main-content {
    .product-col {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
      padding: 0 8px;
    }
    .product-title {
      line-height: 1.4;
      display: flex;
      height: 38px;
      justify-content: center;
    }
  }
}
@media (max-width: 767px) {
  .collection-box {
    .nav-link {
      text-decoration: none;
      display: block;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
    .nav-tab {
      width: 185px;
      margin: 0 auto 15px;
    }
  }
  
.product-info{
  min-height: 60px !important;
}
  .collection .main-content {
    .product-col {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 8px;
    }
    .product-info {
      padding: 10px;
      background-color: #eab875;
      position: relative;
      .product-title {
        font-size: 13px;
      }
    }
  }
}

.product-page {
  margin: auto;
  text-align: center;
}


.product-page a {
  width: 40px;
  height: 40px;
  display: block;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #c38e46;
  color: #c38e46;
  border-radius: 5px;
}
.selected {
   background-color: #c38e46;
  border: 1px solid #c38e46;
  color: #fff;
}
</style>
