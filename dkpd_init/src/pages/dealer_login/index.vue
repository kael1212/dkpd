<template>
  <div class="all-backgroub">
    <img class="background-image" src="/static/images/index/background.png" />
    <img class="dkpd_logo" src="/static/images/index/dkpd_logo.png">
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
        <img class="password-icon loading-password-icon" />

        <div class="loading-password-number">
          <input type="text" placeholder="请输入密码" />
        </div>
      </div>
      <input type="button" class="loading-button-text" value="登陆" />
      <div class="other-components">
        <RadioGroup class="redio" v-model="animal">
          <Radio label="经销商">经销商</Radio>
          <Radio label="业务员">业务员</Radio>
        </RadioGroup>
        <p class="service">联系客服</p>
      </div>

      <div class="wx-all">
        <p id="kjdl">快捷登陆</p>
        <img id="wx-logo" src="/static/images/index/weixin.png" alt />
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
.dkpd_logo{
  z-index:999;
  text-align: center;
 
  position:fixed; 
  top: 1.15rem;
  left: 2.9rem;
  width: 1.6rem;
  height: 1.6rem;
  vertical-align:middle; 
  
  
}
.middle-box {
  position: fixed;
  left: 0.3rem;
  top: 2rem;
  bottom: 1.7rem;
  padding: 0.2rem 0.6rem 1rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 10px #e5dede;
  border: 1px solid #e5dede;
  background-color: #ffffff;
  width: 5.7rem;
  height: 5.6rem;
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
  margin-top: 0.5rem;
}

.loading-phone-icon {
  margin-left: 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
  background-image: url("/static/images/index/loading-phone-icon.jpg");
  background-repeat: no-repeat;
}

.loading-phone-number {
  display: inline-block;
  text-align: left;
  margin-left: 0.2rem;
  width: 4rem;
  height: 0.5rem;
  font-size: 0.3rem;
  border-bottom-color: #ffffff;
}

.password {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.8rem;
}

.loading-password-icon {
  position: relative;
  width: 0.65rem;
  height: 0.65rem;
  background-image: url("/static/images/index/loading-password-icon.png");
  background-repeat: no-repeat;
}

.loading-password-number {
  display: inline-block;
  position: relative;
  text-align: left;
  width: 4rem;
  height: 0.5rem;
  font-size: 0.3rem;
  margin-left: 0.2rem;
}
.loading-button-text {
  width: 5.3rem;
  height: 0.9rem;
  margin-top: 0.5rem;
  letter-spacing: 0.1rem;

  /*渐变色*/
  background-image: linear-gradient(to right, #ff8868, #fe6538);
  /*边框线*/
  border: 0 none transparent;
  border-radius: 0.5rem;
  color: #ffffff;
}

.other-components {
  width: 100%;
  padding: 0;
  margin-top: 0.2rem;
}
.redio {
  float: left;
  width: 4rem;
  height: 0.25rem;
  font-size: 0.25rem;
  color: #8F8F8F;
}

label {
  position: relative;
  margin-right: 0.2rem;
}
div > label::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgb(219, 219, 219);
  margin-right: 2px;
  vertical-align: bottom;
}

.service {
  float: right;
  margin-top: 0.1rem;
  font-size: 0.25rem;
  color: #8F8F8F;
}
.wx-all {
  position: relative;
  margin-top: 1.6rem;
  
}

#kjdl {
  text-align: center;
  font-size: 0.25rem;
  color: #8F8F8F;
  
}
#wx-logo{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
  position: relative;
}

</style>