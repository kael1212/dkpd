<template>
  <div>
    <!-- 标题栏 -->
    <div class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <div class="first position-1" position>
        <img class="icon-1 first-img" src="/static/images/icon/advertising_management/retreat.png" />
        <span class="title-font-size font-color-1 margin-left-1">{{title}}</span>
      </div>
      <img
        class="delete icon-2 position-1"
        src="/static/images/icon/advertising_management/delete.png"
        alt
      />
    </div>

    <div class="allbody">
      <!-- 搜索框 -->
      <div class="second position-2">
        <input class="input display-1 font-size-2" type="text" placeholder="请输入商家名称查询" />
        <img
          class="search-icon display-1 icon-2"
          src="/static/images/icon/advertising_management/search.png"
          alt
        />
      </div>

      <!-- 筛选 -->
      <div class="filtrate margin-top-4">
        <div class="display-1 border-0 back-color ">
          <span class="dafdfad">筛选:</span>
        </div>
        <input
          class="display-1 border-0 filtrate-box-size font-size-2 font-color-5"
          type="button"
          value="全部"
        />
        <input
          class="display-1 border-0 filtrate-box-size font-size-2 font-color-5"
          type="button"
          value="未审核"
        />
        <input
          class="display-1 border-0 filtrate-box-size font-size-2 font-color-5"
          type="button"
          value="已投放"
        />
        <input
          class="display-1  filtrate-box-size font-size-2 font-color-5"
          type="button"
          value="未通过"
        />
      </div>

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

        <div>
          <div class="state display-1 font-size-2 margin-left-1">
            <span class="font-color-2 ">状态&nbsp;:&nbsp;</span> 
            <span class="font-color-6">{{state}}</span>
          </div>
          <div class="expirationTime display-1 font-color-5 font-size-2 margin-left-1">
            过期时间&nbsp;:&nbsp;
            <div class="display-1">{{expirationTime}}</div>
          </div>
          <input class="button-1 display-1 font-color-1 font-size-1 margin-left-1" type="button" value="审核状态" />
          <input class="button-1 display-1 font-color-1 font-size-1 margin-left-1" type="button" value="放入回收站" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    title: "广告管理",
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    state:"未审核",
    expirationTime: "2019年9月24日"
    
  }
};
</script>