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
          <div class="nav">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/gioithieu" class="nav-link"
                  >GIỚI THIỆU</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/bosuutap" class="nav-link"
                  >BỘ SƯU TẬP</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/yeuthich" class="nav-link"
                  >CỔ VẬT YÊU THÍCH</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/account" class="nav-link active" v-if="this.isAuth"
                  >tài khoản</router-link
                >
				<router-link to="/login" class="nav-link active" v-else
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
export default {
  data() {
    return {
      isAuth: localStorage.getItem("isAuth"),
    };
  },
  mounted(){
	  this.isAuth = localStorage.getItem("isAuth")
  }
};
</script>

<style>
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
}

.header .navbar {
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

.header .logo {
  margin-right: 3rem;
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
</style>
