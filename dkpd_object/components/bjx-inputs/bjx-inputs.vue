<template>
	<view class="bjx-inputs" :style="{width: theWidth}">
		<input :disabled="theDisabled"  :placeholder="placeholder" v-model="theValue" @input="theInput" @tap='showItem' @focus="theFocus" @blur="theBlur" autocomplete="off" />
		<view class="bjx-select" :style="{width: theWidth}" v-show="show">
			<view class="data">
				<view class="select-item" v-for="(item, index) in data" :key="index"  @tap="selectItem(item,index)">
					<view class="item-text" :class="{active: getItem(item) == theValue}">{{getItem(item)}}</view>
				</view>
			</view>
			<view class="item-close" @tap="isShow=false">收起</view>
		</view>
	</view>
</template>

<script>
	let fontUnit = 'upx'
	// #ifdef MP-WEIXIN
	fontUnit = 'rpx'
	// #endif
	export default {
		name: 'BjxInputs',
		props: {
			placeholder: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			itemKey: {
				type: String,
				default: ''
			},
			width: {
				type: String,
				default: '600'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			timeDelay: {
				type: Number,
				default: 30
			}
		},
		data() {
			return {
				timer: null,
				data: [],
				isShow: false,
				theValue: this.value,
				theDisabled: this.disabled
			}
		},
		computed: {
			theWidth() {
				return !isNaN(Number(this.width)) ? this.width + fontUnit : this.width
			},
			show(){
				return this.isShow&&this.data.length
			}
		},
		methods: {
			showItem(){
				this.isShow = this.data.length > 0
			},
			theFocus(e){
				this.$emit('focus',e)
			},
			theBlur(e){
				this.$emit('blur',e)
			},
			theInput(e) {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(()=>{
					this.$emit('list',{value: e.detail.value,callback: this.setData})
				},this.timeDelay)
			},
			getItem(item) {
				return this.itemKey && typeof item == 'object' ? item[this.itemKey] : item
			},
			selectItem(item) {
				this.isShow = false
				this.theValue = this.itemKey ? item[this.itemKey] : item
				this.$emit('select',item)
			},
			setData(data) {
				if(data) {
					this.isShow = true
					this.data = data
				}
			},
			setValue(value){
				this.theValue = value
			},
			setDisabled(value){
				this.theDisabled = value
			},
		},
	}
</script>

<style lang="scss" scoped>
.bjx-inputs{
	max-width: 100%;
	.bjx-select {
		border: 1px solid #f3f3f4;
		position: absolute;
		z-index: 999;
		background: #fff;
		.data{
			max-height: 600upx;
			overflow: auto;
			.select-item {
				width: 100%;
				overflow: auto;
				.item-text{
					padding: 10upx;
					width: max-content;
				}
				.active{
					font-weight: bold;
				}
			}
		}
		.item-close {
			margin-top: 10upx;
			padding: 20upx;
			text-align: center;
			font-size: 32upx;
			border-top: 1px solid #f3f3f4;
			color:#8F8F94;
		}
	}
}
</style>
