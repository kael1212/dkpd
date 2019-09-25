<template>
  <div>
    <!-- 标题栏 -->
    <div class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <div class="first position-1 " position>
        <img class="icon-1 first-img" src="/static/images/icon/advertising_management/retreat.png" />
        <span class="title-font-size font-color-1 margin-left-1">{{title}}</span>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="second position-2">     
        <input class="input display-1 search-font-color-size" type="text" placeholder="请输入商家名称查询">
        <img class="search-icon  display-1 icon-2" src="/static/images/icon/advertising_management/search.png" alt="">
    </div>

    <!-- 数据列表 -->
    <div class="thirdly position-2">
        <div class="display-1 thirdly-1">
            <span class="font-color-2">投放商家&nbsp;:&nbsp;</span> 
            <span class="font-color-3">{{name}}</span>
        </div>
        <div class="display-1 thirdly-1">
            <span class="font-color-2">被投放商家&nbsp;:&nbsp;</span>
            <span class="font-color-3">{{byName}}</span>
        </div>
        <div class="display-1 thirdly-1">
            <span class="font-color-2">活动券名称&nbsp;:&nbsp;</span>
            <span class="font-color-4">{{activityName}}</span>
        </div>    
        <div class="expirationTime display-1 font-color-5 font-size-2">
            过期时间&nbsp;:&nbsp;
            <div class="display-1">{{expirationTime}}}</div>
        </div>    
        <input class="recycle-button display-1 font-color-1-1 font-size-1" type="button" value="恢复" />
        

    </div>
  </div>
</template>

<script>
export default {
  data: {
    title:"回收站",
    name: "大咖评点",
    byName:"律动琴行",
    activityName:"优惠券",
    expirationTime:"2019年9月24日",
  }
};
</script>