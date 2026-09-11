# 崔学成 · 个人学术主页

东北大学计算机技术专业硕士研究生的个人网站，记录教育背景、项目经历、荣誉奖项与证书。

**在线访问：[daredevil3210.github.io](https://daredevil3210.github.io/)**

## 内容

- 个人介绍、邮箱、GitHub 与硕士生导师链接
- 教育经历、学业成绩及主要课程
- 文献语义检索与微信短视频推荐项目
- 荣誉奖项及 12 张可查看完整大图的证书

## 技术与设计

使用原生 HTML 和 CSS 构建，通过 GitHub Pages 发布，无需安装前端依赖或运行构建命令。采用浅色背景、深蓝配色及统一的字号和留白；支持桌面、平板与手机布局，保留移动端导航、键盘焦点提示及减少动态效果偏好。证书使用 WebP 格式并延迟加载。

## 文件说明

- `index.html`：页面内容、导航与证书链接。
- `styles.css`：配色、布局及响应式样式。
- `portrait-clear.webp`：主页个人照片。
- `innovation-scholarship.webp`：创新创业奖学金证书，2026-09-11 从新版证书 PDF 更新。
- 其余 `.webp` 文件：其他证书或历史照片素材。
- `LICENSE`：MIT 许可证。

## 本地预览

可以直接用浏览器打开 `index.html`，也可以在仓库目录启动静态服务器（需安装 Python 3）：

```sh
python -m http.server 8000
```

随后访问 [localhost:8000](http://localhost:8000)。

## 更新与发布

1. 修改 `index.html` 中对应的个人信息、项目或荣誉条目。
2. 修改 `styles.css` 调整页面样式。
3. 替换证书时保持文件名与页面链接一致，并同步更新图片和样式引用中的版本参数以刷新缓存。
4. 预览桌面和手机布局，检查图片和链接后，将修改推送至 `main` 分支。
5. GitHub Pages 从 `main` 分支的仓库根目录自动发布，可在仓库的 Actions 或 Settings → Pages 查看发布结果。

## 许可与内容使用

网站源代码使用 [MIT License](LICENSE)。个人照片、证书和相关身份信息不属于可复用的软件素材；这些内容及证书中第三方标识的权利归各自权利人所有，MIT 软件许可不授予其使用权。

## 联系

- 邮箱：[cuixc@mails.neu.edu.cn](mailto:cuixc@mails.neu.edu.cn)
- GitHub：[Daredevil3210](https://github.com/Daredevil3210)
