<template>
  <div>
    <!-- 标题栏 -->
    <div class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <div>
        <img
          class="float-left position-2 icon-1 first-img"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <span class="title position-1 top title-font-size font-color-1">{{title}}</span>
      </div>
    </div>

    <div class="allbody">
      <!-- 搜索框 -->
      <div class="second margin-top-5">
        <input class="input display-1 font-size-3" type="text" placeholder="请输入商家名称查询" />
        <img
          class="search-icon display-1 icon-2"
          src="/static/images/icon/advertising_management/search.png"
          alt
        />
      </div>

      <!-- 数据列表 -->
      <div class="list margin-top-1">
        <div class="font-size-2 font-strong">
          <div class="width-50 display-1 margin-top-1">
            <span class="display-1 font-color-4">商户名称&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-3">{{name}}</span>
          </div>
          <div class="width-50 display-1">
            <span class="display-1 font-color-4">员工收益&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-4">{{employeebenefits}}</span>
          </div>
          <div class="width-50 display-1 margin-top-1">
            <span class="display-1 font-color-4">所属经销商&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-4">{{activityName}}</span>
          </div>
          <div class="width-50 display-1">
            <span class="display-1 font-color-4">商户收益&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-4">{{merchantsbenefit}}</span>
          </div>

          <div class="width-50 display-1 margin-top-1">
            <span class="display-1 font-color-4">打赏金额&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-3">{{name}}</span>
          </div>
          <div class="width-50 display-1">
            <span class="display-1 font-color-4">经销商收益&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-4">{{dealerrevenue}}</span>
          </div>
        </div>

        <div class="width-all height-6 font-size-2 margin-top-5">
          <div class="display-1 width-30">
            <span class="font-color-2">状态&nbsp;:&nbsp;</span>
            <span class="font-color-6">{{state}}</span>
          </div>
          <div
            class="width-50 display-1 font-color-5 font-color-2"
          >
            <span>添加时间&nbsp;:&nbsp;{{expirationTime}}</span>
          </div>
          <div
            class="display-1 width-20 height-4 padding-top-1 background-color-1 center font-color-1 border-radius-1 "
          >详细信息</div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data: {
    title: "打赏管理",
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    employeebenefits: 1.5,
    merchantsbenefit: 5.6,
    dealerrevenue: 1.6,
    state: "已支付",
    expirationTime: "2019年9月24日"
  }
};
</script>
<style>
</style>