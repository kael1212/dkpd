<template>
  <div>
    <!-- 标题栏 -->
    <div class="headline">
      <img class="width-all height-13 position-1" src="/static/images/picture/recycle_top.png" />
      <div>
        <img
          class="float-left position-2 icon-1 float-left-position"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <span class="title position-1 top title-font-size font-color-1">{{title}}</span>
        <img
          class="float-right position-2 icon-2 float-right-position"
          src="/static/images/icon/advertising_management/delete.png"
        />
      </div>
    </div>

    <!-- <div class="headline">
      <div class="background-photo" >
        
      </div>

      <div class="float-left">
        <img
          class="icon-1 margin-right-45"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <div class="display-1 center background-color-1">
          <span class="title-font-size font-color-2 margin-left-1">{{title}}</span>
        </div>
        <img
          class="icon-2 margin-left-45"
          src="/static/images/icon/advertising_management/delete.png"
          alt
        />
      </div>
    </div>-->

    <div class="allbody">
      <!-- 搜索框组件 -->
      <search></search>

      <!-- 筛选 -->
      <filtrate></filtrate>

      <!-- 数据列表 -->
      <div class="thirdly position-2 margin-top-3">
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">投放商家&nbsp;:&nbsp;</span>
          <span class="font-color-3">{{name}}</span>
        </div>
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">被投放商家&nbsp;:&nbsp;</span>
          <span class="font-color-3">{{byName}}</span>
        </div>
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">活动券名称&nbsp;:&nbsp;</span>
          <span class="font-color-4">{{activityName}}</span>
        </div>
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">投放数量&nbsp;:&nbsp;</span>
          <span class="font-color-4">{{activityName}}</span>
        </div>
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">领取数量&nbsp;:&nbsp;</span>
          <span class="font-color-4">{{activityName}}</span>
        </div>
        <div class="display-1 thirdly-1 font-size-2">
          <span class="font-color-2">剩余数量&nbsp;:&nbsp;</span>
          <span class="font-color-4">{{activityName}}</span>
        </div>

        <div class="width-all height-6 margin-top-3">
          <div class="width-30 display-1 font-size-2">
            <span class="font-color-2">状态&nbsp;:&nbsp;</span>
            <span class="font-color-6">{{state}}</span>
          </div>
          <div class="width-40 display-1 font-color-5 font-size-2 padding-right-3">
            过期时间&nbsp;:&nbsp;
            <div class="display-1">{{expirationTime}}</div>
          </div>
          <div class="width-30 display-1 ">
            <input class="button-1 display-1 font-color-1 font-size-1 " type="button" value="审核状态" />
            <input
              class="button-1 display-1 font-color-1 font-size-1 margin-left-1"
              type="button"
              value="放入回收站"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="clear:bosh"></div>
  </div>
</template>

<script>
import search from "@/components/search.vue";
import filtrate from "@/components/filtrate.vue";

export default {
  data: {
    title: "广告管理",
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    state: "未审核",
    expirationTime: "2019/9/24"
  },
  components: {
    search,
    filtrate
  }
};
</script>