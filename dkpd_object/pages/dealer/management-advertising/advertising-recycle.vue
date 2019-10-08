<template>
  <view class="advertisingrecycle">
    
	<!-- title -->
	<cu-custom class="nav_underline" bgImage="/static/images/title_top.png" :isBack="true">
		<block slot="backText"></block>
		<block class="font-strong-5" slot="content">广告回收站</block>
	</cu-custom>
	
	
	

    <view class="body-padding">
      <!-- 搜索框 -->
      <!-- <searchbox></searchbox> -->
      <view class="height-13  uni-flex uni-row ">
        <view class="flex-item dis-line width-90 height-13">
        	<zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search>
        </view>
		<uni-icon class="flex-item dis-line width-10 height-13"  type="search"></uni-icon>
		<view class="flex-item dis-line width-10 height-8  cuIcon-search" >
		</view> 
      </view>
	  
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
          <view class="display-1">{{expirationTime}}}</view></li>
        <li class="width-15 height-4 display-1 center padding-top-1 border-radius-1 font-size-1 font-color-1 background-color-1" >
          恢复
        </li>
      </ul>


      
    </view>
  </view>
</template>

<script>
export default {
  data: {
    title: '广告回收站',
    name: "大咖评点",
    byName: "律动琴行",
    activityName: "优惠券",
    expirationTime: "2019年9月24日"
  }
}

</script>