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
    #theme-onenav {
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
    #theme-onenav #container {
    width: 100%;
    max-width: 500px;
    }
    /* danbouru专用：关闭 NotionNext 默认懒加载灰色动画 */
    .lazy-image-placeholder {
        background: transparent !important;
        background-image: none !important;
        animation: none !important;
    }
/* =========================
   文章底部信息
   分类 / Tag / 日期 三行
   ========================= */

#theme-onenav .post-footer-meta {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    align-items: flex-start !important;

    gap: 6px !important;
}

/* 三行全部占满一行 */
#theme-onenav .post-footer-category,
#theme-onenav .post-footer-tags,
#theme-onenav .post-footer-date-row {
    width: 100% !important;
    flex: none !important;
}

/* 分类 */
#theme-onenav .post-footer-category {
    display: flex !important;
    align-items: center !important;
}

/* Tag */
#theme-onenav .post-footer-tags {
    display: flex !important;
    align-items: center !important;
    flex-wrap: wrap !important;
}
/* 三行图标统一占固定宽度 */
#theme-onenav .post-footer-category > i,
#theme-onenav .post-footer-tags > i,
#theme-onenav .post-footer-date-row i {
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
#theme-onenav .post-footer-date-edited::before {
    content: '/';
    margin: 0 1rem;
}
    /* 文章底部 Tag */
#theme-onenav .post-footer-meta .danbouru-footer-tag {
    border-radius: 6px;
}

/* Tag hover：姜黄色 */
#theme-onenav .post-footer-meta .danbouru-footer-tag:hover {
    background-color: #cb912f !important;
    color: #ffffff !important;
    box-shadow: none !important;
}

/* 内部文字也变白 */
#theme-onenav .post-footer-meta .danbouru-footer-tag:hover * {
    color: #ffffff !important;
}

/* danbouru专用：Bookmark：做成和首页 .card 一样的交互 */
#theme-onenav .notion-bookmark {
    cursor: pointer;

    /* 提前预留 2px 边框，避免 hover 时布局跳动 */
    border: 2px solid #2222220c !important;

    /* 普通状态：浅色实心阴影 */
    box-shadow: 4px 4px 0 #22222213 !important;

    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease !important;
}

    /* Bookmark：和首页 .card 保持一致 */
    #theme-onenav .notion-bookmark {
        cursor: pointer;

        /* 圆角 */
        border-radius: 12px !important;

        /* 不撑满正文，给 hover 位移留空间 */
        width: calc(100% - 8px) !important;
        max-width: 500px;

        /* 提前预留边框 */
        border: 2px solid #22222213 !important;

        /* 普通状态：浅色实心阴影 */
        box-shadow: 4px 4px 0 #22222213 !important;

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease !important;
    }

    #theme-onenav .notion-bookmark:hover {
        transform: translate(2px, 2px);
        box-shadow: 0 0 0 #2222220c !important;
        border-color: #cb912f !important;
        background-color: inherit !important;
    }

    /* hover 不改变文字颜色 */
    #theme-onenav .notion-bookmark:hover,
    #theme-onenav .notion-bookmark:hover * {
        color: inherit !important;
    }

    @media (prefers-reduced-motion: reduce) {
        #theme-onenav .notion-bookmark {
            transition: none !important;
        }
    }
    /* danbouru专用：修改代码框 */

    /* ==================================================
    Danbouru：Notion 代码块
    ================================================== */

    /* 整个代码框外壳 */
    #theme-onenav .code-toolbar {
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
        border-radius: 12px !important;

        overflow: hidden !important;

        box-shadow: none !important;
    }


    /* 清掉可能造成底部渐变 / 阴影的伪元素 */
    #theme-onenav .code-toolbar::before,
    #theme-onenav .code-toolbar::after {
        content: none !important;
        display: none !important;
        background: none !important;
        box-shadow: none !important;
    }


    /* ==================================================
    顶部工具栏
    ================================================== */

    #theme-onenav .code-toolbar > .toolbar {
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
    #theme-onenav .code-toolbar:hover > .toolbar {
        opacity: 1 !important;
        visibility: visible !important;
    }


    /* toolbar 每一项 */
    #theme-onenav .code-toolbar > .toolbar .toolbar-item {
        display: flex !important;
        align-items: center !important;

        margin: 0 !important;
        padding: 0 !important;

        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
    }


    /* Plain text */
    #theme-onenav .code-toolbar > .toolbar .toolbar-item > span {
        margin: 0 !important;
        padding: 0 !important;

        color: #777777 !important;
        background: transparent !important;
        background-color: transparent !important;

        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;

        font-size: 11px !important;
        line-height: 1 !important;
    }


    /* Prism 自带的 Copy 文字按钮 */
    #theme-onenav .code-toolbar .copy-to-clipboard-button {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;

        margin: 0 !important;
        padding: 4px 7px !important;

        border: 0 !important;
        border-radius: 6px !important;

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


    #theme-onenav .code-toolbar .copy-to-clipboard-button:hover {
        background: #cb912f !important;
        color: #ffffff !important;
    }


    /* ==================================================
    真正的代码区域
    ================================================== */

    #theme-onenav .code-toolbar > pre.notion-code {
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
    #theme-onenav .code-toolbar > pre.notion-code > code {
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
    #theme-onenav .code-toolbar > pre.notion-code::before,
    #theme-onenav .code-toolbar > pre.notion-code::after {
        content: none !important;
        display: none !important;

        background: none !important;
        box-shadow: none !important;
    }


    /* ==================================================
    隐藏 pre 内部重复的 Copy SVG
    ================================================== */

    #theme-onenav .code-toolbar .notion-code-copy {
        display: none !important;
    }


    /* ==================================================
    深色模式
    ================================================== */

    .dark #theme-onenav .code-toolbar {
        background: #2b2b2b !important;
        border-color: #424242 !important;
        box-shadow: none !important;
    }


    .dark #theme-onenav .code-toolbar > .toolbar {
        background: #333333 !important;
        border-bottom-color: #434343 !important;

        color: #b8b8b8 !important;
    }


    .dark #theme-onenav .code-toolbar > .toolbar .toolbar-item > span {
        background: transparent !important;
        box-shadow: none !important;
        color: #b8b8b8 !important;
    }


    .dark #theme-onenav .code-toolbar .copy-to-clipboard-button {
        color: #b8b8b8 !important;
    }


    .dark #theme-onenav .code-toolbar .copy-to-clipboard-button:hover {
        background: #cb912f !important;
        color: #ffffff !important;
    }


    .dark #theme-onenav .code-toolbar > pre.notion-code {
        background: #2b2b2b !important;
    }


    /* 减少动画 */
    @media (prefers-reduced-motion: reduce) {
        #theme-onenav .code-toolbar .copy-to-clipboard-button {
            transition: none !important;
        }
    }

    /* danbouru专用：修改代码框结束 */
    /* danbouru专用：修改无序列表 */
    /* =========================
    Danbouru：无序列表
    ========================= */

    /* 无序列表整体 */
    #theme-onenav .notion-list-disc {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
        padding-left: 1.4rem !important;
    }

    /* 每一项 */
    #theme-onenav .notion-list-disc > li {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
        line-height: 1.4rem !important;
    }

    /* 圆点改成姜黄色 */
    #theme-onenav .notion-list-disc > li::marker {
        color: #cb912f !important;
    }
    #theme-onenav .notion-list-disc .notion-list-disc {
        margin-top: 0rem !important;
        margin-bottom: 0rem !important;
    }
    /* =========================
    Danbouru：Checkbox
    ========================= */

    #theme-onenav .notion-property-checkbox-checked {
        background-color: #cb912f !important;
        border-color: #cb912f !important;
    }

    /* 勾号保持白色 */
    #theme-onenav .notion-property-checkbox-checked svg {
        fill: #ffffff !important;
    }
    /* danbouru专用：修改无序列表结束 */

    /* Category / Tag 索引页共用 */
    #theme-onenav .danbouru-taxonomy-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

    background: transparent !important;
    }

    /* 单个 Category / Tag */
    #theme-onenav .danbouru-taxonomy-item {
    display: inline-flex;
    align-items: center;

    padding: 5px 9px;
    border-radius: 6px;

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
    #theme-onenav .danbouru-taxonomy-item:hover {
    background-color: #cb912f !important;
    color: #fff !important;
    }
    /* danbouru专用：Category / Tag 索引页共用开始 */
    #theme-onenav .danbouru-taxonomy-item:hover * {
    color: #fff !important;
    }

#theme-onenav .danbouru-page-title {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 1.875rem;
    line-height: 2.25rem;
    padding-top: 1rem;
    margin-bottom: 1.25rem;
}

#theme-onenav .danbouru-page-title > img {
    width: 32px;
    height: 32px;
    flex: 0 0 auto;
    margin: 0 !important;
    object-fit: contain;
}
    @media (min-width: 768px) {
    #theme-onenav .danbouru-page-title {
        padding-top: 3rem;
    }
    }
    /* Tag 页面：横向排列并自动换行 */
    #theme-onenav #tags-list.danbouru-taxonomy-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;

    width: 100%;
    max-width: 500px;
    }

    /* Tag 项目保持内容宽度，不拉伸 */
    #theme-onenav #tags-list .danbouru-taxonomy-item {
    width: auto;
    flex: 0 0 auto;
    }
    /* danbouru专用：Category / Tag 索引页共用结束 */
    /* =========================
    Archive
    ========================= */

    /* 月份标题 */
    #theme-onenav .danbouru-archive-month {
    padding-top: 28px;
    padding-bottom: 8px;

    font-size: 17px;
    line-height: 1.5;
    font-weight: 500;
    }

    /* 每个月下面的文章列表 */
    #theme-onenav .danbouru-archive-posts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    margin: 0;
    padding: 0;
    list-style: none;
    }
    #theme-onenav .danbouru-archive-posts > li {
    margin: 0;
    padding: 0;
    }

    /* 单篇归档文章：沿用首页 .card 的视觉语言 */
    #theme-onenav .danbouru-archive-card {
    display: block;
    width: 200px;

    padding: 11px 14px;

    border: 2px solid #22222213;
    border-radius: 8px;

    box-shadow: 4px 4px 0 #22222213;

    text-decoration: none !important;

    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease;
    }

    /* 和首页 card 一样的按压 hover */
    #theme-onenav .danbouru-archive-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 0 0 0 #2222220c;
    border-color: #cb912f;
    }

    /* 日期：作为卡片的小标题 */
    #theme-onenav .danbouru-archive-date {
    margin-bottom: 3px;

    font-size: 11px;
    line-height: 1.4;

    color: #999;
    }

    /* 文章标题 */
    #theme-onenav .danbouru-archive-title {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;

    color: #555;
    }

    /* 不让文章标题在 hover 时出现默认下划线 */
    #theme-onenav .danbouru-archive-card:hover .danbouru-archive-title {
    text-decoration: none;
    }

    /* Dark mode */
    .dark #theme-onenav .danbouru-archive-date {
    color: #888;
    }

    .dark #theme-onenav .danbouru-archive-title {
    color: #ccc;
    }




    .main-menu {
        border: 2px solid #22222213;
    }
    .nav-menu {
        padding: 8px 0px 4px 0px;
    }
    .nav-menu span{
        font-size: 15px;
        font-weight: 600;
        line-height: 2;
        color: #8c8c8c;
    }
    .nav-menu span:hover{
        color: #000000;
    }
    .nav-menu span>i{
        width: 18px;
        margin-right: 4px;
    }
    .nav-submenu {
        padding: 4px 0px 4px 2px;
    }
    .nav-submenu a>span{
        font-size: 13px;
        font-weight: 600;
        line-height: 1.3;
        color: rgb(153, 153, 153);
        text-align: left;
    }
    .nav-submenu a>span>i{
        margin-right: 10px;
    }
    .card-list {
        /*display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;*/
    }
    .stack-list > .category:first-child {
        /*padding-top: 16px !important;*/
    }

    .card {
        /* 首页文章列表 */
        cursor: pointer;

        /* 预留边框空间，避免 Hover 时改变布局 */
        border: 2px solid #22222213;

        /* 普通状态：浅色实心阴影 */
        box-shadow: 4px 4px 0 #22222213;

        transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease;
    }

    .card:hover {
        /* 向右下方移动 2px */
        transform: translate(2px, 2px);

        /* 收起阴影 */
        box-shadow: 0 0 0 #2222220c;

        /* 只改变颜色，不改变边框宽度 */
        border-color: #cb912f;
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
#theme-onenav .notion-collection-view-tabs-content-item-active {
    border-bottom: none !important;
    box-shadow: none !important;

    /* 和文章底部 Tag 一样做成小圆角块 */
    border-radius: 6px !important;
    background-color: #f3f3f3 !important;
}
/* 杀掉更多下划线 */
#theme-onenav .notion-collection-card * {
    text-decoration: none !important;
}
/* 所有视图标签都使用同样的圆角 */
#theme-onenav .notion-collection-view-tabs-content-item {
    border-radius: 6px !important;

    transition:
        background-color 0.18s ease,
        color 0.18s ease !important;
}

/* hover 与文章底部 Tag 一致 */
#theme-onenav .notion-collection-view-tabs-content-item:hover {
    background-color: #cb912f !important;
    box-shadow: none !important;
}
/* 数据库 / collection 外层不要自己缩窄 */
#theme-onenav .notion-collection,
#theme-onenav .notion-collection-view,
#theme-onenav .notion-gallery {
    width: 100% !important;
    max-width: 500px !important;
    min-width: 0 !important;

    margin-left: 0 !important;
    margin-right: 0 !important;

    box-sizing: border-box !important;
    padding: 0 !important;
}

/* Gallery 本体固定两列 */
#theme-onenav .notion-gallery-grid {
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
#theme-onenav .notion-gallery-grid > .notion-collection-card:only-child {
    grid-column: 1 / -1;
}
/* 不管 Notion 设置的是 small / medium / large，都统一,顺便去掉横线 */
#theme-onenav .notion-gallery-grid[class*='size-'] {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    border-top: none !important;
}

/* 每张卡只服从 grid 分配的宽度 */
#theme-onenav .notion-collection-card {
    display: block !important;

    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;

    margin: 0 !important;
    box-sizing: border-box !important;

    border: 2px solid #22222213 !important;
    border-radius: 8px !important;

    box-shadow: 4px 4px 0 #22222213 !important;

    overflow: hidden;

    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        border-color 0.18s ease !important;
}

#theme-onenav .notion-collection-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 0 0 0 #2222220c !important;
    border-color: #cb912f !important;
}

/* 封面统一比例 */
#theme-onenav .notion-collection-card-cover {
    display: block !important;

    width: 100% !important;
    height: auto !important;

    aspect-ratio: 4 / 3;

    overflow: hidden;
}

#theme-onenav .notion-collection-card-cover img {
    display: block !important;

    width: 100% !important;
    height: 100% !important;

    object-fit: cover !important;
}

/* 正文部分也不能撑宽 */
#theme-onenav .notion-collection-card-body {
    width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
}
/* =========================
   Notion List：列表视图
   ========================= */

/* 每一条列表 */
#theme-onenav .notion-list-item {
    display: flex !important;
    align-items: center !important;

    width: 100% !important;
    box-sizing: border-box !important;

    border-radius: 6px !important;

    text-decoration: none !important;

    overflow: hidden;

    transition:
        background-color 0.18s ease !important;
}

/* 去掉标题、日期以及内部元素的下划线 */
#theme-onenav .notion-list-item,
#theme-onenav .notion-list-item:hover,
#theme-onenav .notion-list-item *,
#theme-onenav .notion-list-item:hover * {
    text-decoration: none !important;
}

/* 标题区域：icon + 标题文字垂直居中 */
#theme-onenav .notion-list-item-title {
    display: flex !important;
    align-items: center !important;

    min-width: 0;
}

/* 标题 icon */
#theme-onenav .notion-list-item-title .notion-page-icon-inline {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    flex: 0 0 auto;
}

/* icon 图片本身 */
#theme-onenav .notion-list-item-title .notion-page-title-icon {
    display: block !important;

    margin: 0 !important;
    vertical-align: middle !important;
}

/* 标题文字 */
#theme-onenav .notion-list-item-title .notion-property-title {
    display: inline-flex !important;
    align-items: center !important;

    line-height: 1.5 !important;
}

/* 右侧属性区域 */
#theme-onenav .notion-list-item-body {
    display: flex !important;
    align-items: center !important;

    margin-left: auto !important;
}

/* 日期属性 */
#theme-onenav .notion-list-item-property {
    display: flex !important;
    align-items: center !important;
}

/* Created time：灰色、小字号，与标题垂直居中 */
#theme-onenav .notion-property-created_time,
#theme-onenav .notion-property-last_edited_time {
    display: inline-flex !important;
    align-items: center !important;

    color: #999 !important;

    font-size: 12px !important;
    line-height: 1.5 !important;

    white-space: nowrap;
}

/* hover：
   保留 react-notion-x 原本的灰色背景，
   这里只负责圆角，不改成姜黄色 */
#theme-onenav .notion-list-item:hover {
    border-radius: 6px !important;
}
    /* =========================
   Notion Page Link：页面引用
   ========================= */

/* 整个页面引用 */
#theme-onenav .notion-page-link[class*='notion-block-'] {
    display: inline-flex !important;
    align-items: center !important;

    padding: 4px 6px !important;
    border-radius: 6px !important;

    text-decoration: none !important;
    border-bottom: none !important;
    box-shadow: none !important;

    transition:
        background-color 0.18s ease !important;
}

/* 杀掉内部所有下划线 */
#theme-onenav .notion-page-link[class*='notion-block-'] *,
#theme-onenav .notion-page-link[class*='notion-block-']:hover,
#theme-onenav .notion-page-link[class*='notion-block-']:hover * {
    text-decoration: none !important;
    border-bottom: none !important;
    box-shadow: none !important;
}

/* icon + 标题文字 */
#theme-onenav .notion-page-link[class*='notion-block-'] .notion-page-title {
    display: inline-flex !important;
    align-items: center !important;

    gap: 4px;

    margin: 0 !important;
    padding: 0 !important;
}

/* icon 外层 */
#theme-onenav .notion-page-link[class*='notion-block-'] .notion-page-icon-inline {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    flex: 0 0 auto;
}

/* icon 图片 */
#theme-onenav .notion-page-link[class*='notion-block-'] .notion-page-title-icon {
    display: block !important;

    margin: 0 !important;
    vertical-align: middle !important;
}

/* 标题 */
#theme-onenav .notion-page-link[class*='notion-block-'] .notion-page-title-text {
    display: inline-flex !important;
    align-items: center !important;

    line-height: 1.5 !important;

    text-decoration: none !important;
    border-bottom: none !important;
}

/* hover：和刚才 List 一样保留灰色 */
#theme-onenav .notion-page-link[class*='notion-block-']:hover {
    background-color: #f3f3f3 !important;
    border-radius: 6px !important;
}

      ${themeConsoleStyle('nav', CONFIG, { rootId: 'theme-onenav' })}
  `}</style>
}

export { Style }
