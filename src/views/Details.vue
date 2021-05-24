<template>
  <div class="product-detail">
    <div class="container">
      <div class="breadcrumb">
        <a href="/bosuutap" class="btn btn-back"
          ><i class="fa fa-chevron-left"></i
        ></a>
        <h3 class="title-product">{{ productDetail.product.name }}</h3>
      </div>

      <div class="main-content">
        <!-- <div class="feature" style="width: 50%; margin: auto">
					<img :src="productDetail.product.image" alt="" />
				</div> -->

        <div class="content" style="margin: auto">
          <h5 class="title-block">THÔNG TIN CỔ VẬT:</h5>

          <iframe
            class="responsive-iframe"
            id="iframeTN"
            :src="
              productDetail.product.description.replace(/(<([^>]+)>)/gi, '')
            "
            allow="geolocation; microphone;camera;midi;encrypted-media;fullscreen"
          ></iframe>
        </div>

        
        <div class="actions">
          <!-- <a href="#"><i class="fa fa-eye" aria-hidden="true"></i></a> -->

          <!-- <a class="heartlink" href="#" @click.prevent="addFavorite(productDetail.product.id)"
            >♡</a> -->
          <a href="#" @click.prevent="addFavorite(productDetail.product.id)" title="Add to Favorite"
            ><i class="fa fa-heart-o" aria-hidden="true"></i
          ></a>
        </div>
         <div class="actions" style="background-color:#fff">

         </div>
        <div class="actions">
          <a class="fullScreenbtn" href="#" @click="iframeFullScreen()" title="Full Screen mode">
            <i class="fa fa-window-maximize"></i>
          </a>
        </div>

        <div class="content" style="text-align: left">
          <h4>Mô tả</h4>
          <b>Chất liệu:</b> {{ productDetail.product.feature }}
          <br />
          <b>Niên đại:</b> {{ productDetail.product.year_issued }}
          <!-- <p>{{ productDetail.product.description.replace(/(<([^>]+)>)/gi, "")}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { asyncLoading } from "vuejs-loading-plugin";

export default {
  props: ["id"],
  data() {
    return {
      fullScreen: true,
      productDetail: {
        product: {
          id: "",
          image: "",
          description: "",
          feature: "",
          year_issued: "",
        },
      },
    };
  },
  created() {
    asyncLoading(this.fetch(this.$route.params["id"])).then().catch();
    // this.fetch(this.$route.params["id"]);
  },
  methods: {
    iframeFullScreen() {
      // document.getElementsByTagName("iframe")[0].className = this.fullScreen ? "fullScreen" : "halfScreen";
      // this.fullScreen =!this.fullScreen;
      var elem = document.getElementsByTagName("iframe")[0];
      console.log(elem);

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    async fetch(id) {
      // alert(id);
      await this.$store.dispatch("PRODUCT_DETAIL", id).then((res) => {
        // console.log(res);
        this.productDetail = res;
      });
    },
    async addFavorite(id) {
      let data = new FormData();
      data.append("product", id);

      await this.$store.dispatch("ADD_FAVORITE", data).then((res) => {
        // console.log(res);
        if (res) {
          alert("Yêu thích thành công!");
        } else {
          alert("Xin vui lòng đăng nhập!");
          localStorage.clear();
          this.$router.push("/dangnhap");
          location.reload();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fullScreenbtn img {
  width: 20px;
  margin-right: 20px;
  margin-top: 20px;
  z-index: 99;
}
.fullScreen {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.halfScreen {
  width: 100%;
  height: 500px;
  border: none;
}

.heartlink {
  font-size: 40px;
}
.product-detail .breadcrumb {
  position: relative;
  margin-top: 40px;
  margin-bottom: 30px;
  color: #d99751;
  text-align: center;
}

.product-detail .breadcrumb .btn-back {
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  line-height: 1;
  width: 40px;
  height: 40px;
  font-size: 24px;
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
}

.product-detail .breadcrumb .title-product {
  text-transform: uppercase;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 0;
}

.product-detail .feature {
  -webkit-box-shadow: 0 4px 9px rgba(0, 0, 0, 0.575);
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.575);
  margin-bottom: 40px;
}

.product-detail .content {
  padding: 0 80px;
}

.product-detail .content .title-block {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: #d99751;
  margin-bottom: 20px;
  text-align: left;
}

.product-detail .content p {
  font-size: 14px;
  display: block;
  text-align: justify;
  color: #585858;
}

.product-detail .content p:nth-child(2) {
  text-indent: 20px;
}

.responsive-iframe {
  width: 100%;
  height: 50vh;
  border: none;
}

.actions {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  background: #d99751;
  border-radius: 10px;
  width: 60px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin: 20px auto;
  a {
    display: block;
    width: 50px;
    margin: 0 10px;
  }
}
@media (max-width: 991px) {
  .product-detail {
    .content {
      padding: 0;
    }
    .breadcrumb {
      .btn-back {
        width: 40px;
        height: 40px;
        font-size: 18px;
        top: -7px;
        transform: unset;
      }
      .title-product {
        font-size: 18px;
        line-height: 1.5;
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }
  .feature {
    width: 100% !important;
  }

}
</style>
