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
				<!-- <li><span class="nav-link"><i class="fa fa-bell"></i> Thông báo</span></li> -->
				<li>
					<router-link to="/dangxuat" class="nav-link"
						><i class="fas fa-sign-out-alt"></i>Đăng xuất</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { asyncLoading } from "vuejs-loading-plugin";

export default {
	data() {
		return {
			userName: "User name",
		};
	},
	created() {
		asyncLoading(this.fetch()).then((res) => {
			this.userName = res;
		});
		// this.userName = localStorage.getItem("username")
		//   ? localStorage.getItem("username")
		//   : "User name";
	},
	methods: {
		async fetch() {
			return (await localStorage.getItem("username"))
				? localStorage.getItem("username")
				: "User name";
		},
	},
};
</script>

<style scoped>
.nav-account {
	margin: auto;
	padding: 50px 30px;
	background: #eab875;
	border-radius: 30px;
	width: 100%;
	box-shadow: 0 5px 12px #b5b5b5;
	text-align: left;
	max-width: 400px;
}

.nav-account li {
	padding: 10px;
	font-size: 18px;
	color: #fff;
}
.nav-link {
	display: flex;
	align-items: center;
}
i {
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: #fff;
	margin-right: 10px;
}
</style>
