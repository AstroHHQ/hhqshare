# 摄影作品集

一个简洁优雅的摄影作品集网站，使用 GitHub Pages 托管。

## 功能特点

- 响应式设计，支持手机和桌面浏览
- 按题材分类展示照片
- 点击照片可放大查看
- 简洁的黑白配色，突出摄影作品

## 题材分类

- 星空
- 建筑
- 人文
- 黑白
- 人像
- 风光

## 使用方法

### 1. 添加照片

将你的照片放入 `images` 目录，建议按以下命名规则：

- 星空：`star-1.jpg`, `star-2.jpg`, ...
- 建筑：`architecture-1.jpg`, `architecture-2.jpg`, ...
- 人文：`humanity-1.jpg`, `humanity-2.jpg`, ...
- 黑白：`bw-1.jpg`, `bw-2.jpg`, ...
- 人像：`portrait-1.jpg`, `portrait-2.jpg`, ...
- 风光：`landscape-1.jpg`, `landscape-2.jpg`, ...

### 2. 编辑照片信息

打开 `script.js` 文件，修改 `photos` 数组中的照片信息：

```javascript
const photos = [
    { id: 1, src: 'images/star-1.jpg', title: '你的照片标题', category: 'star' },
    // ...
];
```

### 3. 部署到 GitHub Pages

1. 在 GitHub 上创建一个新仓库
2. 将代码推送到仓库
3. 进入仓库的 Settings > Pages
4. 选择 "main" 分支作为源
5. 保存后等待几分钟，你的网站就会生效

## 文件结构

```
.
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 脚本文件
├── images/         # 照片目录
└── README.md       # 说明文档
```

## 自定义

### 修改网站标题

编辑 `index.html` 中的 `<title>` 和 `.site-title` 内容。

### 修改颜色主题

编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --color-bg: #0a0a0a;      /* 背景颜色 */
    --color-text: #f5f5f5;    /* 文字颜色 */
    --color-accent: #fff;     /* 强调颜色 */
}
```

### 添加更多分类

1. 在 `index.html` 的导航栏中添加新的分类链接
2. 在 `script.js` 的 `categoryLabels` 中添加分类标签
3. 在 `photos` 数组中添加对应分类的照片

## 注意事项

- 建议照片尺寸在 1920px 以内，以保证加载速度
- 支持 JPG、PNG、WebP 格式
- 照片文件大小建议控制在 500KB 以内

## 许可

MIT License
