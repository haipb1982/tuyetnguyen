<template>
  <div class="bg-hv account login">
    <div class="container">
      <ul class="nav-account">
        <li>
          <span class="nav-link"
            ><i class="fa fa-user" aria-hidden="true"></i>
            {{ this.userName }}</span
          >
        </li>
        <li>
          <router-link to="/yeuthich" class="nav-link">
            <i class="fa fa-heart" aria-hidden="true"></i> Cổ Vật - Cổ Phục Yêu
            thích</router-link
          >
        </li>
        <!-- <li><span class="nav-link"><i class="fas fa-bell"></i> Thông báo</span></li> -->
        <li>
          <router-link to="/dangxuat" class="nav-link"
            ><i class="fas fa-sign-out-alt"></i> Đăng xuất</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "User name",
    };
  },
  created() {
    this.userName = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "User name";
  },
};
</script>

<style scoped>
.nav-account {
  margin: auto;
  padding: 30px;
  background: #d99751;
  border-radius: 10px;
  width: 100%;
  text-align: left;
}

.nav-account li {
  padding: 10px;
  font-size: 15px;
}
.nav-link {
  display: flex;
  align-items: center;
}
i {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  margin-right: 10px;
}
</style>
