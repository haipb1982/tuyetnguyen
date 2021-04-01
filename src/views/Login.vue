<template>
	<div class="bg-hv account login">
		<div class="container">
			<div class="account-box">
				<div class="login-head">
					<img src="../assets/logo-v.png" alt="" class="logo" />
				</div>
				<form action="" class="login-form account-form">
					<div class="form-group">
						<div class="form-icon">
							<i class="fas fa-user"></i>
						</div>
						<div class="form-input">
							<input
								type="text"
								class="form-control"
								placeholder="Tên đăng nhập hoặc email"
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="form-icon">
							<i class="fas fa-lock"></i>
						</div>
						<div class="form-input">
							<input
								type="password"
								class="form-control"
								placeholder="Mật khẩu"
							/>
						</div>
					</div>
					<div class="row between aic">
						<div class="col-6">
							<div class="form-check">
								<div class="form-check form-check-inline">
									<input
										class="form-check-input checkbox"
										id="remember"
										name="remember"
										type="checkbox"
										value="remember"
									/>
									<label class="form-check-label" for="remember">
										Ghi nhớ mật khẩu
									</label>
								</div>
							</div>
						</div>
						<div class="col-6 text-right">
							<a href="#" class="a-link lostPw">Quên mật khẩu?</a>
						</div>
					</div>
					<div class="form-group btn-box d-flex jcc">
						<button class="btn btn-submit m-auto">
							<span>ĐĂNG NHẬP</span>
						</button>
					</div>
				</form>
				<div class="signUp">
						<router-link to="/dangky" class="a-link">TẠO TÀI KHOẢN MỚI</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.account {
	padding-top: 82px;
	height: calc(100vh - 82px);
}

.account-form {
	width: 100%;
}

.account-box {
	width: 540px;
	margin: 0 auto;
	background-color: #eab875;
	border-radius: 20px;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
}

.account .logo {
	max-width: 124px;
	height: auto;
	margin-bottom: 64px;
}

.account .signUp {
	position: absolute;
	left: 50%;
	bottom: 33px;
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	transform: translateX(-50%);
	display: block;
}

.account .signUp a {
	text-transform: uppercase;
	font-size: 20px;
}

.login-form {
	max-width: 290px;
}

.login .account-box {
	padding: 50px 25px 80px;
}

.login-head {
	width: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.login .form-input {
	width: 290px;
	height: 47px;
}

.login .form-control {
	padding-left: 50px;
}

.login label,
.login a {
	font-size: 14px;
	color: #fff;
}

.login .lostPw {
	line-height: 21px;
	display: block;
}
</style>
