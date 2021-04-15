<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <a href="/" class="logo-link">
              <img src="@/assets/logo-h.png" alt="" class="logo-img" />
            </a>
          </div>
          <button
            class="btn btn-nav"
            v-on:click="myFilter"
            v-bind:class="{ show: isActive }"
            v-click-outside="hide"
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div class="nav" v-bind:class="{ show: isActive }">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/gioithieu" class="nav-link" v-bind:class="{ active: isActiveMenu('gioithieu') }"
                  >GIỚI THIỆU</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/bosuutap" class="nav-link" v-bind:class="{ active: isActiveMenu('bosuutap') }"
                  >BỘ SƯU TẬP</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/yeuthich" class="nav-link"  v-bind:class="{ active: isActiveMenu('yeuthich') }"
                  >CỔ VẬT YÊU THÍCH</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/taikhoan" class="nav-link" v-bind:class="{ active: isActiveMenu('taikhoan') }" v-if="this.isAuth"
                  >tài khoản</router-link
                >
                <router-link to="/dangnhap" class="nav-link"  v-bind:class="{ active: isActiveMenu('dangnhap') }" v-else
                  >đăng nhập</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div class="headerFixed"></div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      isAuth: localStorage.getItem("isAuth"),
      isActive: false,
    };
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    },
    isActiveMenu(menu) {
      // alert(this.$route.name )
      return menu == this.$route.name;
    },
  },
  mounted() {
    this.isAuth = localStorage.getItem("isAuth");
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.headerFixed {
  width: 100%;
  height: 82px;
}

.header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 82px;
  background-color: #eab875;
  color: #fff;
  background-image: url(../../assets/bg-header.jpg);
  background-size: 100% 100%;
  background-position: left top;
  background-repeat: no-repeat;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: 0 1px 14px #00000096;
  .navbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
.header .logo {
  margin-right: 3rem;
  max-width: 200px;
}
.btn-nav {
  display: none;
  color: #fff;
  padding: 0;
  font-size: 20px;
}
.header .nav-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.header .nav-item {
  position: relative;
  -webkit-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.header .nav-item:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 2px;
  background: white;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(255, 255, 255, 0)),
    color-stop(50%, white),
    to(rgba(255, 255, 255, 0))
  );
  background: -webkit-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0) 0%,
    white 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -o-linear-gradient(
    bottom,
    rgba(255, 255, 255, 0) 0%,
    white 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    white 50%,
    rgba(255, 255, 255, 0) 100%
  );
  display: block;
  right: 0;
  top: 0%;
}

.header .nav-item:nth-last-child(1)::after {
  content: unset;
}

.header .nav-link {
  padding: 0 15px;
  display: block;
  text-transform: uppercase;
  color: #fff;
  height: 36px;
  line-height: 36px;
  border-radius: 7px;
  margin: 0 5px;
  text-decoration: none;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  background-color: transparent;
}

.header .nav-link.active,
.header .nav-link:hover {
  background-color: #d99751;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

@media (max-width: 991px) {
  .btn-nav {
    display: block;
  }
  .nav {
    // display: none;
    visibility: hidden;
    position: fixed;
    width: 60%;
    max-width: 280px;
    height: calc(100vh - 60px);
    left: -100vw;
    top: 60px;
    z-index: 1;
    background-color: #1f1302;
    transition: all 0.3s ease-in-out;
    &.show {
      visibility: visible;
      transition: all 0.3s ease-in-out;
      left: 0;
    }
  }
  .headerFixed {
    height: 60px;
  }
  .header {
    height: 60px;
    .logo {
      max-width: 120px;
      margin: 0 auto;
    }
    .navbar {
      justify-content: center;
    }
    button {
      position: absolute;
      display: block;
      z-index: 1;
      right: 20px;
      top: 50%;
      width: 40px;
      height: 40px;
      transform: translateY(-50%);
    }
    .nav {
      padding: 20px 15px 20px 10px;
      &-list {
        flex-direction: column;
      }
      &-item {
        &::after {
          content: unset;
        }
      }
      &-link {
        // color: #000;
        text-align: left;
        margin-bottom: 10px;
      }
    }
  }
}
@media (max-width: 767px) {
  .header .nav-link {
    font-size: 14px;
  }
}
</style>
