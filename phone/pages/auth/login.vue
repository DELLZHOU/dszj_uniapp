<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="loginForm.account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="loginForm.password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row pagination-container">
			<button type="primary" class="green-btn" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="./reg">注册账号</navigator>
			<text>|</text>
			<navigator url="./pwd">忘记密码</navigator>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	export default {
		components: {
			mInput
		},
		data() {
			return {
				providerList: [],
				hasProvider: false,
				loginForm:{
					account: '',
					password: '',
				},
				loading:false,//加载动画
				positionTop: 0,
				isDevtools: false,//是否测试环境
				source:null//地址来源
			}
		},
		methods: {
			bindLogin() {
				  this.$store.dispatch('user/login', this.loginForm)
					.then(() => {
						if (this.source) {
							uni.navigateBack();
						} else {
							uni.reLaunch({
								url: '../index/index',
							});
						}
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
		},
		onLoad(){
			uni.$once('source_url',function(data){
				this.source = data
			})
		},
		onReady() {
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.action-row navigator {
		color: $uni-color-success;
		padding: 0 10px;
	}
	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid $uni-color-success;
		border-radius: 50px;
		margin: 0 20px;
		background-color: $uni-bg-color;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
