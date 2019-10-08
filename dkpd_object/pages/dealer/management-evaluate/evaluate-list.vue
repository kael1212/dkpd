<template>
	<view>
		<!-- title -->
		<cu-custom class="nav_underline" :isBack="true">
			<block slot="backText"></block>
			<block class="font-strong-5" slot="content">评价列表</block>
		</cu-custom>

		<view class="uni-padding-wrap uni-common-mt body-padding">
			<!-- search -->
			<view>
				<zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search>
			</view>

			<!-- 渲染数据列表 -->
			
			<view class="evaluate-list width-all  background-color-2 margin-top-6">			
					<view class="width-50 font-strong-7">				
							ID&nbsp;:&nbsp;{{state}}100						
					</view>
					<view class="width-50 font-strong-7">				
							员工名称					
							&nbsp;:&nbsp;{{state}} zhou						
					</view>			
					<view class="width-50 font-strong-7">					
							员工评分				
							&nbsp;:&nbsp;{{state}}11111				
					</view>
					<view class="width-50 font-strong-7">						
							添加时间
							&nbsp;:&nbsp;{{state}}2019/10/8&nbsp;17:35:23
					</view>
					<view class="width-50 font-strong-7">
							过期时间
							&nbsp;:&nbsp;{{state}}2019年10月8日17:35:23
					</view>
					<view class="width-50">
						
					</view>
					<view class="width-50 font-strong-7" >					
							状态 :				
							&nbsp;:&nbsp;{{state}}显示
					</view>
					<view class="width-50 flex">
						<button class="btn-2 dis-line flex-sub" type="primary"></button>
						<button class="btn-2 dis-line flex-sub" type="primary"></button>
						
					</view>
				
				
			</view>	

		</view>
	</view>
</template>

<script>
	import zySearch from '../../../components/zy-search/zy-search.vue'

	export default {
		data: {
			title: "店员列表",
			merchantname: "商家名称",
			number: "001",
			boss: "陈总",
			dashangbili: 20,
			guanggaobili: 20,
			state: "正常",
			date: "2019年10月8日16:06:33",
			dataList: [

			]

		},
		components: {
			zySearch
		},
		methods: {
			getdataList() {

			}

		}
	};
</script>
<style>
	.evaluate-list>*{
		display: inline-block;
		height: 50upx;
	}
</style>
