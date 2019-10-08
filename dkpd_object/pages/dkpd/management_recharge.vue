<template>
	<view>
		<cu-custom bgImage="/static/images/title_top.png" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">充值管理</block>
		</cu-custom>
		<view>
			<zy-search :is-focus="false" :is-block="true" :show-want="false"></zy-search>
		</view>

	</view>
</template>
	
<script>
	import zySearch from '@/components/zy-search/zy-search.vue'
	export default {
		data:{
			
		},
		
		components:{
			zySearch
		}
	}
	
</script>

<style>
</style>
