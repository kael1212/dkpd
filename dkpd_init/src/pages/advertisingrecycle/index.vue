<template>
  <div class="advertisingrecycle">
    <!-- 标题栏 -->
    <div class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <div>
        <img
          class="title-left-position position-2 icon-1 first-img"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <span class="title position-1 top title-font-size font-color-1">{{title}}</span>
      </div>
    </div>

    <div class="main-padding">
      <!-- 搜索框 -->
      <!-- <searchbox></searchbox> -->
      <div class="width-all height-6 margin-top-7 ">
        <input class="display-1 font-size-2 width-90" type="text" placeholder="请输入商家名称查询" />
        <img
          class="width-10 display-1 icon-2"
          src="/static/images/icon/advertising_management/search.png"
          alt
        />
      </div>

      

      <!-- 数据列表 -->
      <ul class="width-all height-17 margin-top-7">
        <li class="display-1 thirdly-1">
          <span class="font-color-2">投放商家&nbsp;:&nbsp;</span>
          <span class="font-color-3">{{name}}</span></li>
        <li class="display-1 thirdly-1">
          <span class="font-color-2">被投放商家&nbsp;:&nbsp;</span>
          <span class="font-color-3">{{byName}}</span></li>
        <li class="display-1 thirdly-1">
          <span class="font-color-2">活动券名称&nbsp;:&nbsp;</span>
          <span class="font-color-4">{{activityName}}</span></li>
          
        <li class="width-80 display-1 font-color-5 font-size-2 margin-top-4">
          过期时间&nbsp;:&nbsp;
          <div class="display-1">{{expirationTime}}}</div></li>
        <li class="width-15 height-4 display-1 center padding-top-1 border-radius-1 font-size-1 font-color-1 background-color-1" >
          恢复
        </li>
      </ul>


      
    </div>
  </div>
</template>

<script>
import searchbox from '@/components/searchbox.vue'
import listelement from '@/components/listelement.vue'


export default {
  data: {
    title: "广告回收站",
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    expirationTime: "2019年9月24日"
  }
};

components: {
  searchbox;
  listelement
}
</script>