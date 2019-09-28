<template>
  <div>
    <!-- 标题栏 -->
    <title :title="name"></title>
    <div class="margin-top-7 main-padding">
      <form action="reallove" method="get">
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
            <th class="display-1 width-20 margin-top-5 background-color-2">
              <span class>员工头像</span>
              <br />
              <span class="font-color-4 font-size-015">建议尺寸100*100像素</span>
            </th>
            <td>
             
            </td>
          </tr>

          <tr>
            <th colspan="2">
              <input type="submit" value="注册" />
              <input type="reset" value="重置" />
              <input type="button" value="普通按钮" onclick="alert('点我干什么?你瞅啥?');" />
            </th>
          </tr>
        </table>
      </form>
    </div>

    <div class="allbody">
      <ul class="margin-top-6">
        <li class="name">
          <div class="display-1 width-10">
            <img class="icon-01" src="/static/images/icon/icon-5.png" />
          </div>
          <span class="xingming width-30 display-1 height-5">姓名</span>
          <input class="width-60 display-1 height-5" type="text" placeholder="请输入员工姓名" />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import title from "@/components/title2.vue";

export default {
  data: {
    name: "添加店员"
  },

  components: {
    title
  }
};
</script>

<style>
</style>