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
      <div class="list margin-top-3">
        <div class="display-1 width-50 height-1">
          <div class=" font-size-3">
            <span class="display-1 font-color-2">投放商家&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-3">{{name}}</span>
          </div>
          <div class="  font-size-3">
            <span class="display-1 font-color-2">活动券名称&nbsp;:&nbsp;</span>
            <span class="display-1 font-color-4">{{activityName}}</span>
          </div>
        </div>
        <div class="width-30 display-1 center">
          <div>
            充值金额&nbsp;:&nbsp;
          </div>
          <div>
            {{money}}
          </div>
        </div>
        <div class="width-all">
          <div class="display-1 font-size-2 width-50">
            <span class="font-color-2">状态&nbsp;:&nbsp;</span>
            <span class="font-color-6">{{state}}</span>
          </div>
          <div class="width-30 expirationTime display-1 font-color-5 font-size-2 margin-left-1">
            过期时间&nbsp;:&nbsp;
            <div class="display-1">{{expirationTime}}</div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data: {
    title: "充值管理",
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    state: "未审核",
    expirationTime: "2019年9月24日"
  }
};
</script>
<style>
</style>