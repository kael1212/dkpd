<template>
  <div class="app">
    <!-- 背景-->
    <div class="note" :style="note">
      <!-- 中间输入框-->
      <div class="middle-box">
        <div class="loading loading-way-box">
          <p class="loading loading-way">经销商登入</p>
        </div>
        <!-- 账号/电话输入框-->
        <div class="phone loading-phone">
          <img class="phone-icon loading-phone-icon" />
          <div class="loading-phone-number">
            <input type="number" placeholder="请输入登陆账号/手机号" />
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

        <div class="wx" onclick>
          <img src="img/wx.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../CSS/initialize.css";
export default {
  name: "productdetailspage",
  data() {
    return {
      animal: "经销商"
    };
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style>
/*暂时不做  最大背景*/
.note {
  width: 5rem;
  height: 5rem;
  background-image: url("./icon/jxs-all-background.jpg");
  background-repeat: no-repeat;
  -webkit-background-origin: border-box;
  background-origin: border-box;
}

.middle-box {
  display: inline-block;
  width: 7rem;
  height: 7.2rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  margin: 2rem 0.3rem 1.7rem;
  padding: 0.2rem 0.8rem 1rem;
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
  margin-top: 0.6rem;
}

.loading-phone-icon {
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("./icon/loading-phone-icon.jpg");
  background-repeat: no-repeat;
}

.loading-phone-number {
  display: inline-block;
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
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("./icon/loading-password-icon.png");
  background-repeat: no-repeat;
}

.loading-password-number {
  display: inline-block;
  width: 4.3rem;
  height: 0.2rem;
  font-size: 0.3rem;
  border-bottom-color: #ffffff;
}

.loading-button-text {
  width: 5.3rem;
  height: 0.9rem;
  margin-top: 0.6rem;
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
}
</style>