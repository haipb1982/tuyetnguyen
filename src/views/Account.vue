<template>
  <div class="bg-hv account login">
    <div class="container">
      <ul class="nav-account">
        <li><i class="fa fa-user" aria-hidden="true"></i> {{ this.userName }}</li>
        <li><router-link to="/yeuthich" class="nav-link">
          <i class="fa fa-heart" aria-hidden="true"></i> Cổ Vật - Cổ Phục Yêu
          thích</router-link>
        </li>
        <!-- <li><i class="fa fa-bell-o" aria-hidden="true"></i> Thông báo</li> -->
        <li><router-link to="/dangxuat" class="nav-link"><i class="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'User name',
    };
  },
  created() {
    this.userName = localStorage.getItem("username")? localStorage.getItem("username"):"User name"
  }
};
</script>

<style scoped>
.nav-account {
	margin: auto;
	padding:30px;
	background: #D99751;
	border-radius:10px;
	width: 30%;
	text-align: left;	
}

.nav-account li{
	padding:10px;
	font-size:15px;
}

i {
	font-size: 30px;
	color: #fff;
}
</style>
