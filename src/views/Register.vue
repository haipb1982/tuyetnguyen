<template>
  <div class="bg-hv register account">
      <div class="container">
        <div class="account-box">
          <button class="btn btn-close">
            <i class="fa fa-times"></i>
          </button>
          <form action="" class="register-form account-form">
            <h3 class="title-form">Đăng ký</h3>
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Họ">
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Tên">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="form-group">
                  <div class="form-input">
                    <input type="text" class="form-control" placeholder="Vui lòng nhập email hoặc điện thoại">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-12">
                <div class="form-group">
                  <div class="form-input">
                    <input type="password" class="form-control" placeholder="Nhập mật khẩu">
                  </div>
                </div>
              </div>
            </div>
            <div class="form-birthday">
              <span class="label-form-group">Ngày sinh</span>
              <div class="row">

                <div class="col-lg-4">
                  <div class="form-group">
                    <div class="form-input">
                      <select class="form-control" name="dayOfBirth" id="">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <div class="form-input">
                      <select class="form-control" name="monthOfBirth" id="">
                        <option>Tháng 10</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <div class="form-input">
                      <select class="form-control" name="yearOfBirth" id="">
                        <option>2021</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-gender">
              <span class="label-form-group">Giới tính</span>
              <div class="row between">
                <div class="col-lg-5">
                  <div class="form-group">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="male">
                        Nam
                      </label>
                      <input class="form-check-input checkbox" id="male" name="gender" type="radio" value="male" checked>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="form-group">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label" for="female">
                        Nữ
                      </label>
                      <input class="form-check-input checkbox" id="female" name="gender" type="radio" value="female">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group btn-box d-flex jcc">
              <button class="btn btn-submit m-auto"><span>ĐĂNG Ký</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.register-form {
  margin-top: 40px;
}

.register .account-box {
  padding: 50px 25px 40px;
}

.register .btn-close {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  background-color: transparent;
  font-size: 42px;
  width: 42px;
  line-height: 1;
  padding: 0;
}

.register .form-gender .form-group,
.register .form-gender .custom-radio {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
}
</style>