# 📝 我的博客

一个纯静态的个人博客，无框架、无构建工具、零依赖，克隆即可用，通过 **GitHub Pages** 免费托管。

👉 在线预览：`https://你的用户名.github.io/my-blog/`（部署后自动生效）

## ✨ 特性

- 🚀 纯 HTML/CSS/JS，无需 Node.js / Hugo / Jekyll 等任何构建环境
- 🌙 深色模式切换（自动记忆偏好，并跟随系统）
- 🔍 首页文章实时搜索过滤
- 📱 响应式设计，手机端友好
- 📄 内含 2 篇示例文章 + 关于页，直接替换成自己的内容

## 📂 目录结构

```
my-blog/
├── index.html          # 首页（文章列表 + 搜索）
├── about.html          # 关于页
├── posts/              # 文章目录（每篇文章一个 HTML）
│   ├── hello-world.html
│   └── git-basics.html
├── css/style.css       # 全站样式（含深色模式变量）
├── js/main.js          # 主题切换 + 搜索逻辑
└── assets/             # 存放图片等静态资源
```

## 🚀 部署到 GitHub Pages（3 步完成）

1. **创建仓库**：在 GitHub 新建一个名为 `my-blog` 的公开仓库
2. **推送代码**：

```bash
cd my-blog
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/你的用户名/my-blog.git
git push -u origin main
```

3. **开启 Pages**：仓库 → `Settings` → `Pages` → Source 选择 `main` 分支 → Save

一两分钟后访问 `https://你的用户名.github.io/my-blog/` 即可看到博客上线 🎉

## ✍️ 如何写新文章

1. 复制 `posts/git-basics.html`，改名为如 `my-new-post.html`，修改标题和正文；
2. 打开 `index.html`，复制一个 `<article class="post-card">` 块，把链接和摘要指向新文章；
3. 提交并推送：

```bash
git add . && git commit -m "new post" && git push
```

## 🔧 想自定义？

- **改名字/头像**：编辑 `index.html`、`about.html` 中的文字
- **改主题色**：修改 `css/style.css` 顶部的 `--accent` 变量
- **绑定域名**：仓库根目录添加 `CNAME` 文件，内容为你的域名，并在域名服务商添加 CNAME 解析

## License

MIT —— 随意使用、修改和分享。
