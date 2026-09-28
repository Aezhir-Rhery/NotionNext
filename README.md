# Danbouru 猫尾巴纸箱
![猫尾巴纸箱](https://danbouru.cat-fish.net/OG.png)

基于 NotionNext 自定义的个人站点主题。主要修改集中在 `themes/danbouru`，尽量避免改动共享核心代码，以减少后续 Sync Fork 冲突。

## Notion 私有数据库

Notion 数据库已关闭公开访问，站点通过 Vercel 服务端环境变量读取私有内容：

```env
NOTION_TOKEN_V2=******
```

注意：

- Token 仅保存在 Vercel Environment Variables
- 不写入源码，不提交 GitHub
- 不使用 `NEXT_PUBLIC_` 前缀
- Notion 原始数据库和页面保持私有
- `NOTION_ACTIVE_USER` 当前未使用

## Logo / Favicon / OpenGraph

相关静态资源放在：

```text
public/
├── favicon.png
└── OG.png
```

Notion Config：

```text
BLOG_LOGO
/favicon.png

BLOG_FAVICON
/favicon.png

HOME_BANNER_IMAGE
https://danbouru.cat-fish.net/OG.png
```

### Logo

`themes/danbouru/components/LogoBar.js` 已改为读取：

```js
siteConfig('BLOG_LOGO')
```

不再依赖私有 Notion 数据库的 Icon。

### OpenGraph

NotionNext 的站点封面优先级为：

```text
collection.cover
→ collection_view_page.page_cover
→ HOME_BANNER_IMAGE
→ /bg_image.jpg
```

已删除数据库自身的 Cover，使 `HOME_BANNER_IMAGE` 生效。

最终 OG 图片：

```text
https://danbouru.cat-fish.net/OG.png
```

Notion 中已有 Bookmark 可能缓存旧 favicon / OG 图；必要时重新创建 Bookmark。

## Danbouru 样式修改

主要修改集中在 `themes/danbouru/style.js` 及主题组件。

### 卡片

`.card` hover 改为：

- 姜黄色边框 `#cb912f`
- `translate(2px, 2px)` 按压效果
- hover 时移除阴影

### Bookmark

`.notion-bookmark` 调整为与卡片一致的视觉：

- 圆角
- 姜黄色 hover 边框
- 按压位移
- hover 时收起阴影
- 固定宽度约 `500px`

### Code Block

代码块调整为：

- 长代码自动换行
- 移除横向滚动
- 灰色背景
- 工具栏始终可见
- `Copy` hover 使用 `#cb912f`
- 隐藏重复的内置复制按钮
- 深色模式同步适配

### 列表 / Checkbox

无序列表：

- 缩小上下间距
- marker 改为 `#cb912f`

Checkbox：

- 选中背景和边框改为 `#cb912f`
- 勾选符号保持白色

### Tag / Category / Footer Meta

文章底部增加：

- Category
- Tags
- Publish date
- Last edited date

Footer Tag 使用独立类名，避免主题全局 `hover:bg-*` 规则覆盖，并统一改为姜黄色 hover。

### Lazy Image Placeholder

关闭全局灰色占位动画：

```css
.lazy-image-placeholder {
  background: transparent !important;
  background-image: none !important;
  animation: none !important;
}
```

同时修正 `BlogPostCard` 在 `pageIcon` 为空时的 fallback 逻辑。

## 其他修正

- 补充 `/tag` 页面
- `TagItemMini` 支持 Footer 专用样式
- `CategoryItem` 支持关闭默认 hover
- 搜索输入框增加 `name="search"`，修复 Chrome 表单字段警告
- `.gitignore` 忽略 `*.bak`
- 避免 EditPlus 自动备份文件进入构建

## 维护原则

优先：

```text
themes/danbouru/
public/
Notion Config
Vercel Environment Variables
```

尽量避免修改共享核心文件，以降低后续同步上游 NotionNext 时的冲突。
