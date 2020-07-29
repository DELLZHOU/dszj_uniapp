<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="loginForm.account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="loginForm.password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="loginForm.email" placeholder="请输入邮箱"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	import mInput from '@/components/m-input.vue';
	export default {
		components: {
			mInput
		},
		data() {
			return {
				loginForm:{
					account: '',
					password: '',
					email: ''
				},
			}
		},
		methods: {
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.loginForm.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.loginForm.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.loginForm.email.length < 3 || !~this.loginForm.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}
				this.$store.dispatch('user/register', this.loginForm)
				.then(() => {
					//注册函数
					uni.showToast({
						title: '注册成功'
					});
					uni.navigateBack({
						delta: 1
					});
				  this.loading = false
				})
				.catch((error) => {
					//console.log(error)
					uni.showToast({
						icon: 'none',
						title: '用户账号或密码不正确',
					});
				  this.loading = false
				})
			}
		}
	}
</script>

<style>

</style>
