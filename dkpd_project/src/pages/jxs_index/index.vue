<template>
  <div class="all-backgroub">
    <img class="background-image" src="../../../static/images/jxs_add_ywy_img/1.jpg" />
    <div class="middle-box">
      <div class="loading loading-way-box">
          <p class="loading loading-way">经销商登入</p>
        </div>
        <!-- 账号/电话输入框-->
        <div class="phone loading-phone">
          <img class="phone-icon loading-phone-icon" />
          <div class="loading-phone-number">
            <input type="text" placeholder="请输入登陆账号/手机号" />
          </div>
        </div>
        <!-- 密码输入框-->
        <div class="password loading-password">
          <div>
          <img class="password-icon loading-password-icon" />
          </div>
          <div class="loading-password-number">
            <input type="text" placeholder="请输入密码" />
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.all-backgroub {
  display: flex;
  margin: 0;
  padding: 0;
  display: table-cell; /*主要是这个属性*/
  vertical-align: middle; /* 垂直居中 */
  text-align: center;
}
.background-image {
  width: 8rem;
  height: 12rem;
}
.middle-box {
  position: fixed;
  left: 0.3rem;
  top: 2rem;
  bottom: 1.7rem;
  padding: 0.2rem 0.8rem 1rem;
  border-radius: 0.3rem;
  box-shadow:0px 0px 10px #E5DEDE;
  border: 1px  solid #E5DEDE;
  background-color: #ffffff;
  width: 5.35rem;
  height: 6.5rem;
}
.loading-way-box {
  margin: 0.7rem 1.3rem 0.1rem;
}
.loading-way {
  text-size-adjust: auto; /*根据设备尺寸适应大小*/
  text-align: center;
  letter-spacing: 0.1rem;
  color: #eb5f34;
  font-weight: bold;
  font-size: 0.45rem;
}
.phone {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.9rem;
}

.loading-phone-icon {
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("../../../static/images/jxs_add_ywy_img/loading-phone-icon.jpg");
  background-repeat: no-repeat;
}

.loading-phone-number {
  display: inline-block;
  text-align:left;
  margin-left:0.2rem; 
  width: 4.3rem;
  height: 0.2rem;
  font-size: 0.3rem;
  border-bottom-color: #ffffff;
}

.password {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.65rem;
}
.loading-password-icon {
  padding-top: 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../../../static/images/jxs_add_ywy_img/loading-password-icon.png");
  background-repeat: no-repeat;
}

.loading-password-number {
  display: inline-block;
  text-align:left;
  margin-left:0.1rem; 
  width: 4.3rem;
  height: 0.2rem;
  margin-top:0.1rem;
  font-size: 0.3rem;
  border-bottom-color: #ffffff;
}



</style>