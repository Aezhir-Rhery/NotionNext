const CONFIG = {
  DANBOURU_INDEX_PAGE: 'about', // 文档首页显示的文章，请确此路径包含在您的notion数据库中

  DANBOURU_AUTO_SORT: process.env.NEXT_PUBLIC_DANBOURU_AUTO_SORT || true, // 是否自动按分类名 归组排序文章；自动归组可能会打乱您Notion中的文章顺序

  DANBOURU_SHOW_TITLE_TEXT: false, // 标题栏显示文本
  DANBOURU_USE_CUSTOM_MENU: true, // 使用自定义菜单（可支持子菜单，支持自定义分类图标），若为true则显示所有的category分类

  // 菜单
  DANBOURU_MENU_CATEGORY: true, // 显示分类
  DANBOURU_MENU_TAG: true, // 显示标签
  DANBOURU_MENU_ARCHIVE: true, // 显示归档
  DANBOURU_MENU_SEARCH: true, // 显示搜索

  // Widget
  DANBOURU_WIDGET_REVOLVER_MAPS:
    process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'false', // 地图插件
  DANBOURU_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
