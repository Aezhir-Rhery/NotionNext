/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    body {
        background-color: #fbfbfb;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-font-smoothing: antialiased;
    }
    #theme-danbouru {
        --danbouru-accent: #cb912f;
        --danbouru-line: #22222213;
        --danbouru-shadow-clear: #2222220c;
        --danbouru-hover-gray: #f3f3f3;
        --danbouru-radius-sm: 6px;
        --danbouru-radius-md: 8px;
        --danbouru-radius-lg: 12px;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 13px;
    }
    #top-wrapper img {
        height: 44px;
    }
    /*#top-nav {
        background-color: rgb(251 251 251 / 70%);
    }*/
    /* danbouru专用：修改文章页正文宽度 */
    #theme-danbouru #container {
        width: 100%;
        max-width: 500px;
    }
    /* danbouru专用：关闭 NotionNext 默认懒加载灰色动画 */
    .lazy-image-placeholder {
        background: transparent !important;
        background-image: none !important;
        animation: none !important;
    }
    #theme-danbouru .notion-callout {
        border-radius: 10px !important;
        border-width: 2px !important;
        border-style: solid !important;
    }

    #theme-danbouru input[name='search'] {
        border: 2px solid transparent !important;
    }

    #theme-danbouru input[name='search']:focus {
        box-shadow: none !important;
        border-color: var(--danbouru-accent) !important;
    }
    /* =========================
       Notion Inline Code
       ========================= */

    #theme-danbouru .notion-inline-code {
        display: inline-flex !important;
        align-items: center !important;

        box-sizing: border-box !important;

        padding: 2px 5px !important;

        border-radius: var(--danbouru-radius-sm) !important;

        background-color: rgba(135, 131, 120, 0.12) !important;

        color: #eb5757 !important;

        font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            Menlo,
            monospace !important;

        font-size: 0.9em !important;
        line-height: 1.4 !important;

        vertical-align: middle !important;

        white-space: normal !important;
        overflow-wrap: anywhere !important;
        word-break: break-word !important;

        box-shadow: none !important;
        border: none !important;

        margin: 0 5px;
    }
    /* =========================
       文章底部信息
       分类 / Tag / 日期 三行
       ========================= */

    #theme-danbouru .post-footer-meta {
        display: flex !important;
        flex-direction: column !important;
        flex-wrap: nowrap !important;
        align-items: flex-start !important;

        gap: 6px !important;
    }

    /* 三行全部占满一行 */
    #theme-danbouru .post-footer-category,
    #theme-danbouru .post-footer-tags,
    #theme-danbouru .post-footer-date-row {
        width: 100% !important;
        flex: none !important;
    }

    /* 分类 */
    #theme-danbouru .post-footer-category {
        display: flex !important;
        align-items: center !important;
    }

    /* Tag */
    #theme-danbouru .post-footer-tags {
        display: flex !important;
        align-items: center !important;
        flex-wrap: wrap !important;
    }
    /* 三行图标统一占固定宽度 */
    #theme-danbouru .post-footer-category > i,
    #theme-danbouru .post-footer-tags > i,
    #theme-danbouru .post-footer-date-row i {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        width: 18px;
        min-width: 18px;

        margin-right: 6px !important;
        padding: 0 !important;

        text-align: center;
    }

    /* 修改日期前的斜杠 */
    #theme-danbouru .post-footer-date-edited::before {
        content: '/';
        margin: 0 1rem;
    }
    /* 文章底部 Tag */
    #theme-danbouru .post-footer-meta .danbouru-footer-tag {
        border-radius: var(--danbouru-radius-sm);
    }

    /* Tag hover：姜黄色 */
    #theme-danbouru .post-footer-meta .danbouru-footer-tag:hover {
        background-color: var(--danbouru-accent) !important;
        color: #ffffff !important;
        box-shadow: none !important;
    }

    /* 内部文字也变白 */
    #theme-danbouru .post-footer-meta .danbouru-footer-tag:hover * {
        color: #ffffff !important;
    }
    /* Bookmark：和首页 .card 保持一致 */
    #theme-danbouru .notion-bookmark {
        cursor: pointer;

        /* 圆角 */
        border-radius: var(--danbouru-radius-lg) !important;

        /* 不撑满正文，给 hover 位移留空间 */
        width: calc(100% - 8px) !important;
        max-width: 500px;

        /* 提前预留边框 */
        border: 2px solid var(--danbouru-line) !important;

        /* 普通状态：浅色实心阴影 */
        box-shadow: 4px 4px 0 var(--danbouru-line) !important;

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease !important;
    }

    #theme-danbouru .notion-bookmark:hover {
        transform: translate(2px, 2px);
        box-shadow: 0 0 0 var(--danbouru-shadow-clear) !important;
        border-color: var(--danbouru-accent) !important;
        background-color: inherit !important;
    }

    /* hover 不改变文字颜色 */
    #theme-danbouru .notion-bookmark:hover,
    #theme-danbouru .notion-bookmark:hover * {
        color: inherit !important;
    }

    @media (prefers-reduced-motion: reduce) {
        #theme-danbouru .notion-bookmark {
            transition: none !important;
        }
    }
    /* danbouru专用：修改代码框 */

    /* =========================
       Danbouru：Notion 代码块
       ================================================== */

    /* 整个代码框外壳 */
    #theme-danbouru .code-toolbar {
        position: relative !important;

        display: flex !important;
        flex-direction: column !important;

        width: 100% !important;
        max-width: 100% !important;

        margin: 1.5rem 0 !important;
        padding: 0 !important;

        /* 与首页 card 更接近的浅灰 */
        background: #f6f6f6 !important;

        border: 1px solid #e3e3e3 !important;
        border-radius: var(--danbouru-radius-lg) !important;

        overflow: hidden !important;

        box-shadow: none !important;
    }

    /* 清掉可能造成底部渐变 / 阴影的伪元素 */
    #theme-danbouru .code-toolbar::before,
    #theme-danbouru .code-toolbar::after {
        content: none !important;
        display: none !important;
        background: none !important;
        box-shadow: none !important;
    }

    /* =========================
       顶部工具栏
       ================================================== */

    #theme-danbouru .code-toolbar > .toolbar {
        order: 1 !important;

        position: static !important;
        inset: auto !important;
        transform: none !important;

        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;

        width: 100% !important;
        min-height: 36px !important;

        box-sizing: border-box !important;

        margin: 0 !important;
        padding: 0 12px !important;

        /* 比正文稍微深一点 */
        background: #ededed !important;

        border: 0 !important;
        border-bottom: 1px solid #dfdfdf !important;

        box-shadow: none !important;

        color: #777777 !important;

        font-size: 11px !important;
        line-height: 1 !important;

        opacity: 1 !important;
        visibility: visible !important;
    }

    /* 防止 Prism hover 才显示 */
    #theme-danbouru .code-toolbar:hover > .toolbar {
        opacity: 1 !important;
        visibility: visible !important;
    }

    /* toolbar 每一项 */
    #theme-danbouru .code-toolbar > .toolbar .toolbar-item {
        display: flex !important;
        align-items: center !important;

        margin: 0 !important;
        padding: 0 !important;

        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
    }

    /* Plain text */
    #theme-danbouru .code-toolbar > .toolbar .toolbar-item > span {
        margin: 0 !important;
        padding: 0 !important;

        color: #777777 !important;
        background: transparent !important;

        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;

        font-size: 11px !important;
        line-height: 1 !important;
    }

    /* Prism 自带的 Copy 文字按钮 */
    #theme-danbouru .code-toolbar .copy-to-clipboard-button {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        margin: 0 !important;
        padding: 4px 7px !important;

        border: 0 !important;
        border-radius: var(--danbouru-radius-sm) !important;

        background: transparent !important;
        box-shadow: none !important;

        color: #777777 !important;

        font-size: 11px !important;
        line-height: 1 !important;

        cursor: pointer;

        transition:
            background-color 0.15s ease,
            color 0.15s ease !important;
    }

    #theme-danbouru .code-toolbar .copy-to-clipboard-button:hover {
        background: var(--danbouru-accent) !important;
        color: #ffffff !important;
    }

    /* =========================
       真正的代码区域
       ================================================== */

    #theme-danbouru .code-toolbar > pre.notion-code {
        order: 2 !important;

        position: relative !important;

        display: block !important;

        width: 100% !important;
        max-width: 100% !important;

        box-sizing: border-box !important;

        margin: 0 !important;

        padding: 16px 18px 18px !important;

        background: #f6f6f6 !important;

        border: 0 !important;
        border-radius: 0 !important;

        box-shadow: none !important;

        overflow-x: hidden !important;
        overflow-y: visible !important;

        white-space: pre-wrap !important;

        font-size: 13px !important;
        line-height: 1.7 !important;
    }

    /* 真正的代码文字 */
    #theme-danbouru .code-toolbar > pre.notion-code > code {
        display: block !important;

        width: 100% !important;
        max-width: 100% !important;

        box-sizing: border-box !important;

        margin: 0 !important;
        padding: 0 !important;

        background: transparent !important;

        white-space: pre-wrap !important;
        overflow-wrap: anywhere !important;
        word-break: break-word !important;

        overflow: visible !important;

        font-size: 13px !important;
        line-height: 1.7 !important;
    }

    /* 清掉 pre 自己可能产生的阴影/渐变 */
    #theme-danbouru .code-toolbar > pre.notion-code::before,
    #theme-danbouru .code-toolbar > pre.notion-code::after {
        content: none !important;
        display: none !important;

        background: none !important;
        box-shadow: none !important;
    }

    /* =========================
       隐藏 pre 内部重复的 Copy SVG
       ================================================== */

    #theme-danbouru .code-toolbar .notion-code-copy {
        display: none !important;
    }

    /* =========================
       深色模式
       ================================================== */

    .dark #theme-danbouru .code-toolbar {
        background: #2b2b2b !important;
        border-color: #424242 !important;
        box-shadow: none !important;
    }

    .dark #theme-danbouru .code-toolbar > .toolbar {
        background: #333333 !important;
        border-bottom-color: #434343 !important;

        color: #b8b8b8 !important;
    }

    .dark #theme-danbouru .code-toolbar > .toolbar .toolbar-item > span {
        background: transparent !important;
        box-shadow: none !important;
        color: #b8b8b8 !important;
    }

    .dark #theme-danbouru .code-toolbar .copy-to-clipboard-button {
        color: #b8b8b8 !important;
    }

    .dark #theme-danbouru .code-toolbar .copy-to-clipboard-button:hover {
        background: var(--danbouru-accent) !important;
        color: #ffffff !important;
    }

    .dark #theme-danbouru .code-toolbar > pre.notion-code {
        background: #2b2b2b !important;
    }

    /* 减少动画 */
    @media (prefers-reduced-motion: reduce) {
        #theme-danbouru .code-toolbar .copy-to-clipboard-button {
            transition: none !important;
        }
    }

    /* danbouru专用：修改代码框结束 */
    /* danbouru专用：修改无序列表 */
    /* =========================
       Danbouru：无序列表
       ========================= */

    /* 无序列表整体 */
    #theme-danbouru .notion-list-disc {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
        padding-left: 1.4rem !important;
    }
    /* 无序列表 + 有序列表，所有层级统一 */
    #theme-danbouru .notion-list-disc li,
    #theme-danbouru .notion-list-numbered li {
        line-height: 1.6rem !important;

        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
    /* 圆点改成姜黄色 */
    #theme-danbouru .notion-list-disc > li::marker {
        color: var(--danbouru-accent) !important;
    }
    #theme-danbouru .notion-list-disc .notion-list-disc {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
    }
    #theme-danbouru .notion-list-disc .notion-list-disc > li {
        list-style-type: circle !important;
    }

    /* =========================
       Danbouru：Checkbox
       ========================= */

    /* 外层只负责承载，不画框 */
    #theme-danbouru .notion-property-checkbox {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        margin-top: 8px !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
    }

    /* 未选中 */
    #theme-danbouru .notion-property-checkbox-unchecked {
        width: 16px !important;
        height: 16px !important;

        box-sizing: border-box !important;

        border: 2px solid var(--danbouru-line) !important;
        border-radius: 5px !important;

        background: transparent !important;
    }

    /* 已选中 */
    #theme-danbouru .notion-property-checkbox-checked {
        width: 16px !important;
        height: 16px !important;

        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        box-sizing: border-box !important;

        padding: 2px !important;

        border: 2px solid var(--danbouru-accent) !important;
        border-radius: 5px !important;

        background-color: var(--danbouru-accent) !important;
    }

    /* 白色勾勾 */
    #theme-danbouru .notion-property-checkbox-checked svg {
        display: block !important;

        width: 100% !important;
        height: 100% !important;

        margin: 0 !important;

        fill: #ffffff !important;

        transform: none !important;
    }
    /* Todo：checkbox 始终和第一行文字对齐 */
    #theme-danbouru .notion-to-do-item {
        align-items: flex-start !important;
    }
    /* danbouru专用：checkbox结束 */

    /* Category / Tag 索引页共用 */
    #theme-danbouru .danbouru-taxonomy-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;

        background: transparent !important;
    }

    /* 单个 Category / Tag */
    #theme-danbouru .danbouru-taxonomy-item {
        display: inline-flex;
        align-items: center;

        padding: 5px 9px;
        border-radius: var(--danbouru-radius-sm);

        font-size: 15px;
        line-height: 1.5;

        color: inherit;
        background: transparent;

        cursor: pointer;

        transition:
            background-color 0.18s ease,
            color 0.18s ease;
    }

    /* hover：与文章底部 Tag 统一 */
    #theme-danbouru .danbouru-taxonomy-item:hover {
        background-color: var(--danbouru-accent) !important;
        color: #fff !important;
    }
    /* danbouru专用：Category / Tag 索引页共用开始 */
    #theme-danbouru .danbouru-taxonomy-item:hover * {
        color: #fff !important;
    }

    #theme-danbouru .danbouru-page-title {
        display: flex;
        align-items: center;
        gap: 6px;

        font-size: 1.875rem;
        line-height: 2.25rem;
        padding-top: 1rem;
        margin-bottom: 1.25rem;
    }

    #theme-danbouru .danbouru-page-title > img {
        width: 32px;
        height: 32px;
        flex: 0 0 auto;
        margin: 0 !important;
        object-fit: contain;
    }
    @media (min-width: 768px) {
        #theme-danbouru .danbouru-page-title {
            padding-top: 3rem;
        }
    }
    /* Tag 页面：横向排列并自动换行 */
    #theme-danbouru #tags-list.danbouru-taxonomy-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 8px;

        width: 100%;
        max-width: 500px;
    }

    /* Tag 项目保持内容宽度，不拉伸 */
    #theme-danbouru #tags-list .danbouru-taxonomy-item {
        width: auto;
        flex: 0 0 auto;
    }
    /* danbouru专用：Category / Tag 索引页共用结束 */
    /* =========================
       Archive
       ========================= */

    /* 月份标题 */
    #theme-danbouru .danbouru-archive-month {
        padding-top: 28px;
        padding-bottom: 8px;

        font-size: 17px;
        line-height: 1.5;
        font-weight: 500;
    }

    /* 每个月下面的文章列表 */
    #theme-danbouru .danbouru-archive-posts {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;

        margin: 0;
        padding: 0;
        list-style: none;
    }
    #theme-danbouru .danbouru-archive-posts > li {
        margin: 0;
        padding: 0;
    }

    /* 单篇归档文章：沿用首页 .card 的视觉语言 */
    #theme-danbouru .danbouru-archive-card {
        display: block;
        width: 200px;

        padding: 11px 14px;

        border: 2px solid var(--danbouru-line);
        border-radius: var(--danbouru-radius-md);

        box-shadow: 4px 4px 0 var(--danbouru-line);

        text-decoration: none !important;

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease;
    }

    /* 和首页 card 一样的按压 hover */
    #theme-danbouru .danbouru-archive-card:hover {
        transform: translate(2px, 2px);
        box-shadow: 0 0 0 var(--danbouru-shadow-clear);
        border-color: var(--danbouru-accent);
    }

    /* 日期：作为卡片的小标题 */
    #theme-danbouru .danbouru-archive-date {
        margin-bottom: 3px;

        font-size: 11px;
        line-height: 1.4;

        color: #999;
    }

    /* 文章标题 */
    #theme-danbouru .danbouru-archive-title {
        font-size: 15px;
        line-height: 1.5;
        font-weight: 500;

        color: #555;
    }

    /* 不让文章标题在 hover 时出现默认下划线 */
    #theme-danbouru .danbouru-archive-card:hover .danbouru-archive-title {
        text-decoration: none;
    }

    /* Dark mode */
    .dark #theme-danbouru .danbouru-archive-date {
        color: #888;
    }

    .dark #theme-danbouru .danbouru-archive-title {
        color: #ccc;
    }

    .main-menu {
        border: 2px solid var(--danbouru-line);
    }
    .nav-menu {
        padding: 8px 0px 4px 0px;
    }
    .nav-menu span {
        font-size: 15px;
        font-weight: 600;
        line-height: 2;
        color: #8c8c8c;
    }
    .nav-menu span:hover {
        color: #000000;
    }
    .nav-menu span > i {
        width: 18px;
        margin-right: 4px;
    }
    .nav-submenu {
        padding: 4px 0px 4px 2px;
    }
    .nav-submenu a > span {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.3;
        color: rgb(153, 153, 153);
        text-align: left;
    }
    .nav-submenu a > span > i {
        margin-right: 10px;
    }
    .card {
        /* 首页文章列表 */
        cursor: pointer;

        /* 预留边框空间，避免 Hover 时改变布局 */
        border: 2px solid var(--danbouru-line);

        /* 普通状态：浅色实心阴影 */
        box-shadow: 4px 4px 0 var(--danbouru-line);

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease;
    }

    .card:hover {
        /* 向右下方移动 2px */
        transform: translate(2px, 2px);

        /* 收起阴影 */
        box-shadow: 0 0 0 var(--danbouru-shadow-clear);

        /* 只改变颜色，不改变边框宽度 */
        border-color: var(--danbouru-accent);
    }

    @media (prefers-reduced-motion: reduce) {
        .card {
            transition: none;
        }
    }
    /* =========================
       Notion Gallery：统一 500px 内双列
       ========================= */
    /* =========================
       Notion Gallery：视图标签
       ========================= */

    /* 去掉 active 状态原本的黑色下划线 */
    #theme-danbouru .notion-collection-view-tabs-content-item-active {
        border-bottom: none !important;
        box-shadow: none !important;

        /* 和文章底部 Tag 一样做成小圆角块 */
        border-radius: var(--danbouru-radius-sm) !important;
        background-color: var(--danbouru-hover-gray) !important;
    }
    /* 杀掉更多下划线 */
    #theme-danbouru .notion-collection-card * {
        text-decoration: none !important;
    }
    /* 所有视图标签都使用同样的圆角 */
    #theme-danbouru .notion-collection-view-tabs-content-item {
        border-radius: var(--danbouru-radius-sm) !important;

        transition:
            background-color 0.18s ease,
            color 0.18s ease !important;
    }

    /* hover 与文章底部 Tag 一致 */
    #theme-danbouru .notion-collection-view-tabs-content-item:hover {
        background-color: var(--danbouru-accent) !important;
        box-shadow: none !important;
    }
    /* 数据库 / collection 外层不要自己缩窄 */
    #theme-danbouru .notion-collection,
    #theme-danbouru .notion-collection-view,
    #theme-danbouru .notion-gallery {
        width: 100% !important;
        max-width: 500px !important;
        min-width: 0 !important;

        margin-left: 0 !important;
        margin-right: 0 !important;

        box-sizing: border-box !important;
        padding: 0 !important;
    }

    /* Gallery 本体固定两列 */
    #theme-danbouru .notion-gallery-grid {
        display: grid !important;

        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        grid-auto-columns: minmax(0, 1fr) !important;

        width: 100% !important;
        max-width: 500px !important;
        min-width: 0 !important;

        gap: 12px !important;

        margin: 0 !important;
        padding: 4px 4px 4px 0 !important;

        box-sizing: border-box !important;
    }
    /* Gallery 只有 1 张卡片时，横跨两列 */
    #theme-danbouru .notion-gallery-grid > .notion-collection-card:only-child {
        grid-column: 1 / -1;
    }
    /* 不管 Notion 设置的是 small / medium / large，都统一,顺便去掉横线 */
    #theme-danbouru .notion-gallery-grid[class*='size-'] {
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        border-top: none !important;
    }

    /* 每张卡只服从 grid 分配的宽度 */
    #theme-danbouru .notion-collection-card {
        display: block !important;

        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;

        margin: 0 !important;
        box-sizing: border-box !important;

        border: 2px solid var(--danbouru-line) !important;
        border-radius: var(--danbouru-radius-md) !important;

        box-shadow: 4px 4px 0 var(--danbouru-line) !important;

        overflow: hidden;

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease !important;
    }

    #theme-danbouru .notion-collection-card:hover {
        transform: translate(2px, 2px);
        box-shadow: 0 0 0 var(--danbouru-shadow-clear) !important;
        border-color: var(--danbouru-accent) !important;
    }

    /* 封面统一比例 */
    #theme-danbouru .notion-collection-card-cover {
        display: block !important;

        width: 100% !important;
        height: auto !important;

        aspect-ratio: 4 / 3;

        overflow: hidden;
    }

    #theme-danbouru .notion-collection-card-cover img {
        display: block !important;

        width: 100% !important;
        height: 100% !important;

        object-fit: cover !important;
    }

    /* 正文部分也不能撑宽 */
    #theme-danbouru .notion-collection-card-body {
        width: 100% !important;
        min-width: 0 !important;
        box-sizing: border-box !important;
    }
    /* =========================
       Notion List：列表视图
       ========================= */

    /* 每一条列表 */
    #theme-danbouru .notion-list-item {
        display: flex !important;
        align-items: center !important;

        width: 100% !important;
        box-sizing: border-box !important;

        border-radius: var(--danbouru-radius-sm) !important;

        text-decoration: none !important;

        overflow: hidden;

        transition:
            background-color 0.18s ease !important;
    }

    /* 去掉标题、日期以及内部元素的下划线 */
    #theme-danbouru .notion-list-item,
    #theme-danbouru .notion-list-item:hover,
    #theme-danbouru .notion-list-item *,
    #theme-danbouru .notion-list-item:hover * {
        text-decoration: none !important;
    }

    /* 标题区域：icon + 标题文字垂直居中 */
    #theme-danbouru .notion-list-item-title {
        display: flex !important;
        align-items: center !important;

        min-width: 0;
    }

    /* 标题 icon */
    #theme-danbouru .notion-list-item-title .notion-page-icon-inline {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        flex: 0 0 auto;
    }

    /* icon 图片本身 */
    #theme-danbouru .notion-list-item-title .notion-page-title-icon {
        display: block !important;

        margin: 0 !important;
        vertical-align: middle !important;
    }

    /* 标题文字 */
    #theme-danbouru .notion-list-item-title .notion-property-title {
        display: inline-flex !important;
        align-items: center !important;

        line-height: 1.5 !important;
    }

    /* 右侧属性区域 */
    #theme-danbouru .notion-list-item-body {
        display: flex !important;
        align-items: center !important;

        margin-left: auto !important;
    }

    /* 日期属性 */
    #theme-danbouru .notion-list-item-property {
        display: flex !important;
        align-items: center !important;
    }

    /* Created time：灰色、小字号，与标题垂直居中 */
    #theme-danbouru .notion-property-created_time,
    #theme-danbouru .notion-property-last_edited_time {
        display: inline-flex !important;
        align-items: center !important;

        color: #999 !important;

        font-size: 12px !important;
        line-height: 1.5 !important;

        white-space: nowrap;
    }

    /* =========================
       Notion Page Link：页面引用
       ========================= */

    /* 整个页面引用 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] {
        display: inline-flex !important;
        align-items: center !important;

        padding: 4px 6px !important;
        border-radius: var(--danbouru-radius-sm) !important;

        text-decoration: none !important;
        border-bottom: none !important;
        box-shadow: none !important;

        transition:
            background-color 0.18s ease !important;
    }

    /* 杀掉内部所有下划线 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] *,
    #theme-danbouru .notion-page-link[class*='notion-block-']:hover,
    #theme-danbouru .notion-page-link[class*='notion-block-']:hover * {
        text-decoration: none !important;
        border-bottom: none !important;
        box-shadow: none !important;
    }

    /* icon + 标题文字 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] .notion-page-title {
        display: inline-flex !important;
        align-items: center !important;

        gap: 4px;

        margin: 0 !important;
        padding: 0 !important;
    }

    /* icon 外层 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] .notion-page-icon-inline {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        flex: 0 0 auto;
    }

    /* icon 图片 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] .notion-page-title-icon {
        display: block !important;

        margin: 0 !important;
        vertical-align: middle !important;
    }

    /* 标题 */
    #theme-danbouru .notion-page-link[class*='notion-block-'] .notion-page-title-text {
        display: inline-flex !important;
        align-items: center !important;

        line-height: 1.5 !important;

        text-decoration: none !important;
        border-bottom: none !important;
    }

    /* hover：和刚才 List 一样保留灰色 */
    #theme-danbouru .notion-page-link[class*='notion-block-']:hover {
        background-color: var(--danbouru-hover-gray) !important;
        border-radius: var(--danbouru-radius-sm) !important;
    }
    ${themeConsoleStyle('nav', CONFIG, { rootId: 'theme-danbouru' })}
  `}</style>
}

export { Style }
