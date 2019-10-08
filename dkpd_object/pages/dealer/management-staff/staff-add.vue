<template>
  <div>
	  <!-- title -->
	  <cu-custom class="nav_underline" bgImage="/static/images/title_top.png"  :isBack="true">
	  	<block slot="backText"></block>
	  	<block class="font-strong-5" slot="content">添加店员</block>
	  </cu-custom>
	  
	  
    <!-- 标题栏 -->
	
	
    
    <div class="body-padding">
      <form action="reallove" method="get">
		  <view class="cu-form-group margin-top">
			<img class="icon-1" src="/static/icon/icon-5.png" />
		  	<view class="title font-strong-5">&nbsp;员工名称</view>
		  	<input placeholder="请输入您的用户名" name="input"></input>
		  </view>
		  
        <table border="1" cellspacing="0" width="600px">
          <tr>
            <th width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              员工名称
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请输入您的用户名"
              />
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              员工工号
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请输入员工工号"
              />
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              员工职位
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请输入员工职位"
              />
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              联系方式
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请输入联系人手机号码"
              />
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              员工账号
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请设置员工账号"
              />
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              员工密码
              <input
                class="display-1 center-2 margin-left-10 font-size-2"
                type="text"
                name="uname"
                placeholder="请设置员工密码"
              />
            </th>
          </tr>

          <tr>
            <th class="margin-top-5" width="100%">
              <div class="display-1">
                <div>
                  <img class="icon-01" src="/static/images/icon/icon-5.png" />
                  <div class="display-1">&nbsp;是否具有</div>
                </div>
                <div class="margin-left-2">&nbsp;核销功能</div>
              </div>
              <div class="display-1 center-3 margin-left-10 font-size-3">
                <input type="radio" name="gender" value="1" />是
                <input type="radio" name="gender" value="2" checked="checked" />否
              </div>
            </th>
          </tr>
          <tr>
            <th class="margin-top-5" width="100%">
              <img class="icon-01" src="/static/images/icon/icon-5.png" />
              是否绑定微信
              <input
                class="margin-left-35"
                type="radio"
                name="gender"
                value="1"
              />是
              <input type="radio" name="gender" value="2" checked="checked" />否
            </th>
          </tr>
          <tr>
            <th class="display-1 margin-top-5">所属商家</th>
            <td class="display-1 margin-left-13">
              <div id="wai">
                <div id="sel">请选择</div>
                <div id="items" style=" display:none" sx="0"></div>
              </div>
            </td>
          </tr>

          <tr>
            <th class="display-1 width-20 margin-top-5">
              <span class>员工头像</span>
              <br />
              <span class="font-color-4 font-size-015">建议尺寸100*100像素</span>
            </th>
            <td class=" display-1">
              <el-upload
                class="avatar-uploader background-color-1 "
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </td>
          </tr>

          <tr >
            <th class=" margin-top-5 margin-left-4 center " colspan="2">
              <input class=" width-90 height-1  border-radius-5 background-color-1 font-color-1 font-size-35" type="submit" value="保存" />
              
            </th>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  data: {
    name: "添加店员"
  }

  
}
</script>

<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 0.2rem;
    color: red;
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
  }
  .avatar {
    width: 1.2rem;
    height: 1.2rem;
    display: block;
  }


</style>