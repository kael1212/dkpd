<template>
	<view class="merchantrecycle">
		<!-- 标题栏 -->
		<!-- <view class="headline">
      <img class="recycle_top position-1" src="/static/images/picture/recycle_top.png" />
      <view>
        <img
          class="title-left-position position-2 icon-1 first-img"
          src="/static/images/icon/advertising_management/retreat.png"
        />
        <span class="title position-1 top title-font-size font-color-1">{{title}}</span>
      </view>
    </view> -->
		<!-- title -->
		<cu-custom class="nav_underline" bgImage="/static/images/title_top.png" :isBack="true">
			<block slot="backText"></block>
			<block class="font-strong-5" slot="content">店员回收站</block>
			<block slot="right">
				<image src="~@/static/icon/salesclerk-1.jpg" mode=""></image>
			</block>
		</cu-custom>


		<view class="main-padding">
			<!-- 搜索框 -->
			<view class="width-all height-6 margin-top-7">
				<!-- 搜索框组件 -->
				<zy-search class="dis-line font-size-2 width-90" :is-focus="false" :is-block="true" :show-want="false"></zy-search>
				<view class="cuIcon-search width-10 dis-line icon-2"></view>
			</view>

			<!-- 数据列表 -->
			<view class="salesclerk_thirdly position-2 margin-top-6">
				<ul class="list-1 center">
					<li class="width-20 dis-line">
						<img class="icon-13" src="/static/images/photo/photo-1.jpg" alt />
					</li>
					<li class="width-50 dis-line">
						<view class="float-left padding-left-2">
							<view class="left height-5 font-size-3">商户名称</view>
							<view class="left height-3 font-size-2">{{name}}&nbsp;&nbsp;{{number}}</view>
							<view class="left height-3 font-color-5">
								<p class="dis-line font-size-2">状态&nbsp;:&nbsp;</p>
								<p class="dis-line font-color-3 font-size-2">{{state}}</p>
							</view>
						</view>
					</li>
					<li class="width-30 height-8  center-2 dis-line font-size-2 font-color-1">
						<view class="width-60 background-color-1 border-radius-1 ">
							<img class="dis-line icon-03" src="/static/images/icon/icon-1.png" />
							<view class="dis-line center-2 font-size-2 font-color-1 margin-left-1">恢复</view>
						</view>
					</li>
				</ul>
				<view style="clear:both"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import zySearch from '../../components/zy-search/zy-search.vue'

	export default {
		data: {
			title: "商家回收站",
			name: "张总",
			number: 131022352565,
			state: "冻结"
		},
		components: {
			zySearch
		}
	}
</script>
