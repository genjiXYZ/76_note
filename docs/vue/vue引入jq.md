---

autoGroup-1: vue config.js

title: vue全局引入jq

---

有一些 比较老的插件 需要jq作为依赖



https://cli.vuejs.org/zh/config/#configurewebpack

```js
const webpack = require("webpack");
module.exports = {
	configureWebpack: {
      //支持jquery
      plugins: [
          new webpack.ProvidePlugin({
              $:"jquery",
              jQuery:"jquery",
              "windows.jQuery":"jquery"
          })
      ]
  	},
  }
```

在 package.json 中设置

```js
 "env": {
      "node": true,
      "jquery": true
    },
```

