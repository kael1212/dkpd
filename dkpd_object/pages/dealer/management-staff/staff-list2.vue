<template>
	<view class="">
		<!-- title -->
		<cu-custom class="nav_underline" :isBack="true">
			<block slot="backText"></block>
			<block class="font-strong-5" slot="content">店员列表2</block>
			<block slot="right">
				<image src="~@/static/icon/salesclerk-1.jpg" mode=""></image>
			</block>
		</cu-custom>
		
		<view class="uni-padding-wrap uni-common-mt body-padding">
			<!-- 搜索框 -->
			<view class="uni-flex uni-row">
				<view class="flex-item  dis-line width-20 height-15">
					<view class="flex-item dis-line  height-15 middle">
						<image class="icon-1 " src="../../../static/icon/icon-4.png"></image>
					</view>
					<view class="flex-item  dis-line font-strong-5 height-15  middle margin-left-1">回收站</view>
				</view>
				<view class="flex-item dis-line width-80 height-8 ">
					<zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search>
				</view>
			</view>

			<!-- 数据列表 -->
			<view class="salesclerk_thirdly position-2 margin-top-4">
				<view class="list-1 center">
					<view class="list-1-1 display-1">
						<img class="icon-13" src="/static/images/photo/photo-1.jpg" alt="">
					</view>
					<view class="list-1-2 display-1">
						<view class="float-left padding-left-2">
							<p class="left font-size-3">员工名称</p>
							<p class="left font-size-2">员工编号&nbsp;:&nbsp;{{number}}</p>
							<view class="left font-color-5 ">
								<p class="display-1 font-size-2">状态&nbsp;:&nbsp;</p>
								<p class="display-1 font-color-3 font-size-2">{{state}}</p>
							</view>
						</view>
					</view>

					<view class="list-1-3 display-1">
						<view class="icon4 background-color-1 border-radius-1 margin-2">
							<img class="display-1 icon-03" src="/static/images/icon/icon-1.png">
							<view class="display-1 font-size-2 font-color-1">修改</view>
						</view>
						<view class="icon4 background-color-1 border-radius-1 margin-2">
							<img class="display-1 icon-03" src="/static/images/icon/icon-2.png">
							<view class="display-1 font-size-2 font-color-1">删除</view>
						</view>
					</view>
				</view>
				<view class="list-2 margin-top-4 font-size-2">
					<p class="display-1">所属商家&nbsp;:&nbsp;</p>
					<p class="display-1">
						{{merchantname}}
					</p>
					<img class="display-1 icon-3-1 float-right" src="/static/images/icon/icon-3.png">
				</view>
				<view class="clear"></view>

			</view>
		</view>



		<!-- <view class="body-padding">
			<view class="">
				
			</view>
			<view class="dis-line" >
				
			</view>
			<view class="dis-line">回收站</view>
			<li class="dis-line"><zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search></li>
			<li class="dis-line"><view class="cuIcon-search "> 
				
			</view></li>
		</view>
		<view class="body-padding">
			<view class="">
				<view class="uni-title uni-common-mt">
				                flex-direction: row
				                <text>\n横向布局</text>
				            </view>
				<view class="uni-flex uni-row">
					
				                <view class="flex-item uni-bg-blud ">
									<image class="icon-1" src="../../../static/icon/icon-4.png" mode=""></imagea
								</view>
				                <view class="flex-item uni-bg-green ">
									<span>回收站</span>b
								</view>
				                <view class="flex-item uni-bg-red">
									<zy-search  :is-focus="false" :is-block="true" :show-want="false"></zy-search>
								</view>
				            </view>
				
			</view>
			
			
			<uni-list>
				<image class="icon-1 " style="vertical-align:middle;" src="../../../static/icon/icon-4.png" mode=""></image>
				
				
				
				<uni-list-item class="width-20 dis-line" title="回收站" note="">
					
				</uni-list-item>
				<uni-list-item class="width-80 dis-line" title="" note="">
					<view style="box-sizing: border-box;height: 50upx;width:100%; vertical-align:middle; background-color: #5E00FF;">
						<zy-search class="dis-line width-90" :is-focus="false" :is-block="true" :show-want="false"></zy-search>
						<view class="cuIcon-search dis-line  width-10">

						</view>
					</view>


				</uni-list-item>
			</uni-list> -->

	</view>







	</view>

</template>

<script>
	import zySearch from '../../../components/zy-search/zy-search.vue'

	export default {
		components: {
			zySearch
		},
		data() {
			return {
				value: '这是默认值',
				data1: ['这是数据', '数组中的字符串数据', ' 这个注定是一个很长的选项，可以试试向左滑动一下'],
				data2: [{
						id: 1,
						value: '这是默认值'
					},
					{
						id: 2,
						value: '数组中嵌套json格式数据'
					},
					{
						id: 3,
						value: '这种格式比较常用'
					},
					{
						id: 4,
						value: '只需在组件中设定item-key属性即可，如当前可设为 item-key="value"'
					},
					{
						id: 5,
						value: '这是默认值？ 不是'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 远程加载数据 返回一个对象，{value: 输入框值, callback: 回调函数}
			getData1(e) {
				console.log(e)
				if (!e.value) {
					e.callback(this.data1)
				} else {
					let data = []
					this.data1.forEach(item => {
						if (item.indexOf(e.value) > -1) {
							data.push(item)
						}
					})
					e.callback(data)
				}
			},
			getData2(e) {
				console.log(e)
				this.value = e.value
				if (!e.value) {
					e.callback(this.data2)
				} else {
					let data = []
					this.data2.forEach(item => {
						if (item.value.indexOf(e.value) > -1) {
							data.push(item)
						}
					})
					e.callback(data)
				}
			},
			select1(value) {
				console.log(1, value)
			},
			select2(value) {
				this.value = value.value
				console.log(2, value)
			},
			// 若要在父组件动态改变bjx-inputs组件中的值 请直接调用组件中的setValue方法
			setInputsValue() {
				this.$refs.inputs1.setValue(this.value)
			},
			focus1(e) {
				console.log('框1聚焦', e)
			},
			blur1(e) {
				console.log('框1失焦', e)
			}
		}
	}
</script>

<style>
	.content .bjx-inputs {
		border: #8F8F94 1upx solid;
		margin: 20upx auto;
		display: inline-block;
	}
	.title {
	  text-align: center;
	  width: 100%;
	  height: 1.1rem;
	}
	.tilte-img-1 {
	  margin-right: 30%;
	  padding-top: 0.3rem;
	}
	.title-1 {
	  padding-top: 0rem;
	  text-align: center;
	}
	.tilte-img-2 {
	  margin-left: 30%;
	  padding-top: 0.3rem;
	}
	
	.allbody {
	  padding-left: 0.4rem;
	  padding-right: 0.4rem;
	}
	.second-1 {
	  margin-top: 0.2rem;
	}
	.second-input {
	  width: 65%;
	}
	
	.list-1{
	  width: 100%;
	  height: 1.4rem;
	}
	
	.list-1-1{
	  width: 22%;
	  
	}
	.list-1-2{
	  width: 55%;
	  
	}
	.list-1-3{
	  width: 23%;
	}
</style>
