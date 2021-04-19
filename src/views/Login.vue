<template>
  <div class="bg-hv account login">
    <div class="container">
      <div class="account-box">
        <div class="login-head">
          <img src="../assets/logo-v.png" alt="" class="logo" />
        </div>
        <div class="login-form account-form">
          <div class="form-group">
            <div class="form-icon">
              <i class="fa fa-user"></i>
            </div>
            <div class="form-input">
              <input
                v-model="input.username"
                type="text"
                class="form-control"
                placeholder="Tên đăng nhập hoặc email"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="form-icon">
              <i class="fa fa-lock"></i>
            </div>
            <div class="form-input">
              <input
                v-model="input.password"
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
              <a
                href="https://arcatalog.vn/3dart/admin/tn/account/forgot_pass"
                target="_blank"
                class="a-link lostPw"
                >Quên mật khẩu?</a
              >
            </div>
          </div>
          <div class="form-group btn-box d-flex jcc">
            <!-- <button
              class="btn btn-submit m-auto"
              type="button"
              v-on:click="login()"
            >
              <span>ĐĂNG NHẬP</span>
            </button> -->

            <a href="#" class="btn btn-submit m-auto" @click.prevent="login()"
              ><span>ĐĂNG NHẬP</span></a
            >
          </div>
        </div>
        <div class="signUp">
          <a
            href="https://arcatalog.vn/3dart/admin/tn/registry"
            target="_blank"
            class="a-link"
          >
            TẠO TÀI KHOẢN MỚI
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { asyncLoading } from "vuejs-loading-plugin";

export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      //   deviceid: Math.floor(
      //     Math.random() * (10000000000000 - 10000000 + 1) + 100000000
      //   ),
      deviceid: "web2020",
    };
  },
  created() {
    // this.fetch();
	// this.$loading(true);
	// this.$Loading.loading = false;
	asyncLoading(this.fetch());
  },
  methods: {

	  async fetch(){
		  return await localStorage.getItem('token');

	  },

    async login() {
      // alert("login");
      if (this.input.username != "" && this.input.password != "") {
        let data = new FormData();
        data.append("username", this.input.username);
        data.append("password", this.input.password);
        data.append("deviceid", this.deviceid);

        localStorage.setItem("deviceid", this.deviceid);

        await this.$store.dispatch("POST_LOGIN", data).then((res) => {
          console.log(res);
          if (res) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
            localStorage.setItem("isAuth", true);
            localStorage.setItem("token", res.token);
            localStorage.setItem("member", res.member);
            localStorage.setItem("username", res.member.username);
            this.$router.push("/taikhoan");
			location.reload();
          } else {
            alert("Login failed!");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 290px;
}

.login .account-box {
  padding: 50px 25px 80px;
}

.login-head {
  width: 100%;
  text-align: center;
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
@media (max-width: 991px) {
  .login-form {
    max-width: 290px;
  }
  .login .form-input {
    width: 290px;
    height: 42px;
  }
  .login .account-box {
    padding: 40px 15px 40px;
  }
}
@media (max-width: 767px) {
  .login label,
  .login a {
    font-size: 13px;
    color: #fff;
  }
  .login .btn-submit {
    font-size: 15px;
  }
}
</style>
