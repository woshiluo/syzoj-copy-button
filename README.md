# syzoj-copy-button

本脚本会自动在 `/problem/*` 路径下的所有网页的 `pre` 标签内部的开头添加一个复制按钮

因为仅供自用且用处不大，所以可能会有 语法不严谨 / 不够简洁 的问题，有任何的问题，希望您能够提出到 `Issues` 或者发起 `Pull Request`

## 如何使用

需要浏览器安装 Tampermonkey 插件，若浏览器没有这个插件，即代表不支持

在安装完 Tampermonkey 插件过后，点击插件菜单中的 `Create a new script`, 将项目文件夹下的 `user.js` 复制进去即可

默认只适配了 LibreOJ 的页面，若有其他使用 SYZOJ 的 OJ，将 `@match` 中的网址改为其网址**应当**就能使用（因为有些人可能魔改的比较厉害）

