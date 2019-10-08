<template>
	<view>
		<cu-custom bgImage="/static/images/title_top.png" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">添加店员</block>
		</cu-custom>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">员工名称</view>
			<view class="flex-twice">
				<input placeholder="请输入员工名称" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">员工工号</view>
			<view class="flex-twice">
				<input placeholder="请输入员工工号" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">员工职位</view>
			<view class="flex-twice">
				<input placeholder="请输入员工职位" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">联系方式</view>
			<view class="flex-twice">
				<input placeholder="请输入联系人手机号码" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">员工账号</view>
			<view class="flex-twice">
				<input placeholder="请设置员工账号" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title flex-sub">员工密码</view>
			<view class="flex-twice">
				<input placeholder="请输入密码" type="password" name="input"></input>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="title">是否具有核銷功能</view>
			<radio-group @change="SetSize">
				<label class="margin-left-sm">
					<radio class="blue radio" value="sm"></radio>
					<text class="margin-left-sm"> 是</text>
				</label>

				<label class="margin-left-sm">
					<radio class="blue radio" value="lg"></radio>
					<text class="margin-left-sm"> 否</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group">
			<view class="title">是否綁定微信</view>
			<radio-group @change="SetSize">
				<label class="margin-left-sm">
					<radio class="blue radio" value="sm"></radio>
					<text class="margin-left-sm"> 是</text>
				</label>

				<label class="margin-left-sm">
					<radio class="blue radio" value="lg"></radio>
					<text class="margin-left-sm"> 否</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">普通选择</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
				</view>
			</picker>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				图片上传
			</view>
			<view class="action">
				{{imgList.length}}/4
			</view>
		</view>
		<robby-image-upload v-model="imageData" @delete="deleteImage" @add="addImage" :enable-drag="enableDrag" :enable-del="enableDel" :enable-add="enableAdd" :limit="limitNumber">
		</robby-image-upload>
		<view class="uni-btn-v">
			<button form-type="submit">Submit</button>
		</view>

	</view>
</template>

<script>
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue'
	export default {
		data() {
			return {
				imgList: []
			}

		},
		components: {
			robbyImageUpload
		}
	}
</script>

<style>

</style>
