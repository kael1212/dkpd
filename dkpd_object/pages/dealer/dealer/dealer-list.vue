<template>
	<view>
		<!-- title -->
		<cu-custom class="nav_underline" :isBack="true">
			<block slot="backText"></block>
			<block class="font-strong-5" slot="content">经销商列表</block>
		</cu-custom>

		<view class="uni-padding-wrap uni-common-mt body-padding">
			<!-- search -->
			<view>
				<zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search>
			</view>

			<!-- 渲染数据列表 -->
			<view v-for="(item,index) in dataList" :key="index">
				<view class="margin-top-6">
					<view class="flex  p-xs margin-bottom-sm mb-sm">
						<view class="flex-treble  radius">
							<view class="flex ">
								<view class=" flex-sub">
									<img class="icon-13" src="/static/images/photo.jpg">
								</view>
								<view class="margin-left-2 flex-treble">
									<view class="float-left padding-left-2">
										<p class=" font-size-3  font-strong-7">经销商</p>
										<p class=" font-size-2 margin-top-1 font-strong-6">真实姓名&nbsp;:&nbsp;{{number}}</p>
										<view class=" font-color-5 margin-top-1 font-strong-4">
											<p class="dis-line font-size-2">手机号码&nbsp;:</p>
											<p class="dis-line font-color-3 font-size-2">{{state}}</p>
										</view>
									</view>
								</view>
							</view>
							<view class="margin-top-2 ">
								所属上级:{{boss}}
							</view>
						</view>
						<view class="flex-sub ">	
								<button class="btn-1  ">编辑</button>
								<button class="btn-1  margin-top-2 ">打赏统计</button>
								<button class="btn-1  margin-top-2 ">广告统计</button>					
						</view>
					</view>
					<view class="flex solid-bottom  mb-sm">
						<view class="flex-sub  padding-0  radius">
							<view class="center">
								20
							</view>
							<view class="font-size-0-2">
								上级打赏分成(%)
							</view>
						</view>
						<view class="flex-sub  padding-0 radius">
							<view class="center">
								20
							</view>
							<view class="font-size-0-2">
								上级广告分成(%)
							</view>
						</view>
						<view class="flex-sub  padding-0  radius">
							<view class="center">
								/
							</view>
							<view class="font-size-0-2">
								平台广告分成(%)
							</view>
						</view>
					</view>
					<view class="flex  padding-0 justify-between">
						<view class="">
							状态&nbsp;:&nbsp;{{state}}
						</view>
						<view class="">{{date}}</view>
					</view>
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
			dashangbili:20,
			guanggaobili:20,
			state:"正常",
			date:"2019年10月8日16:06:33",
			dataList:[
				
			]
			
		},
		components: {
			zySearch
		},
		methods:{
			getdataList(){
				
			}
			
		}
	};
</script>
<style>
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

	.list-1 {
		width: 100%;
		height: 1.4rem;
	}

	.list-1-1 {
		width: 22%;

	}

	.list-1-2 {
		width: 55%;

	}

	.list-1-3 {
		width: 23%;
	}
</style>
