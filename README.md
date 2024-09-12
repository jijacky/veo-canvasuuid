# veo-canvasUUID

## 介绍
uniapp 的 js sdk 封装，用户生成当前环境的指纹

## 安装教程
直接 `import` 引入即可

## 使用说明

### 程序调用

```javascript
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
```

    
## 仓库
> [dcloud 插件](https://ext.dcloud.net.cn/plugin?id=10311) https://ext.dcloud.net.cn/plugin?id=10311
> [github](https://github.com/jijacky/veo-canvasuuid) https://github.com/jijacky/veo-canvasuuid
