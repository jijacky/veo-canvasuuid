<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">canvas UUID 测试</text>
		</view>
        <view>
            <text>{{text}}</text>
        </view>
        <button @click="getuuid()">获取</button>
	</view>
</template>

<script>
    import uuid from "@/uni_modules/veo-canvasUUID/js_sdk/veo-canvasUUID.js"
    
	export default {
		data() {
			return {
                text: ''
			}
		},
		onLoad() {
		},
		methods: {
            getuuid(){
                this.text = uuid(1)
            },
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
