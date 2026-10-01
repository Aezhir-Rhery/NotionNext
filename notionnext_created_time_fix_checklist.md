# NotionNext Created time / Last edited time 修复收尾清单

## 1. 应保留的修改

位置：

```text
lib/db/notion/SiteDataApi.js
```

函数：

```js
cleanBlock()
```

原本会删除：

```js
delete pageBlock[i]?.value?.created_time
delete pageBlock[i]?.value?.last_edited_time
```

修复后应保留这两个字段，不再删除。

原因是 `react-notion-x` 的 collection 系统属性渲染会直接读取：

```js
block.created_time
block.last_edited_time
```

而 `cleanBlock()` 会在把 `blockMap` 返回给前端之前清理数据；若删除这两个字段，数据库中的 `Created time` / `Last edited time` 就无法正常渲染。

建议保留类似注释：

```js
// 保留 created_time / last_edited_time
// react-notion-x 的 collection system date 属性需要这两个字段
```

---

## 2. 应确认已经恢复的临时调试修改

### `lib/db/notion/getNotionAPI.js`

应恢复原本的：

```js
const execute = () => original.apply(notion, args)
```

不要留下这些临时调试内容：

```text
DANBOURU GETPAGE DEBUG
DANBOURU GETPAGE SAMPLE
DANBOURU GETPAGE SHAPE
DANBOURU REAL BLOCK
throw new Error(...)
```

### `node_modules/react-notion-x/build/third-party/collection.js`

应全部恢复原版，不应长期保留：

```text
DANBOURU PATCH TEST
DATA = ...
GROUP KEYS = ...
CQ KEYS = ...
COLLECTION = ...
VIEW KEYS = ...
```

以及以下临时实验：

- 日期 safety guard
- 直接绕过 `propertyCreatedTimeValue`
- 页面可视化调试字符串
- 临时 `throw new Error(...)`

`node_modules` 不应作为长期修复位置，因为重新安装依赖或 Vercel 构建时会被覆盖。

---

## 3. 应确认最终行为

最终本地测试应满足：

- 数据库页面正常打开
- `Created time` 正常显示
- `Last edited time` 如启用，也能正常显示
- 不再出现：

```text
RangeError: Invalid time value
```

- Gallery / List / Table 等 collection view 不受影响
- 普通文章页面正常
- 私有 Notion 数据仍能正常读取
- 图片代理等既有功能不受影响

---

## 4. Git 状态检查

建议最终 `git diff` 中，这次修复相关内容只剩 `SiteDataApi.js` 的两行删除行为被移除。

理想 diff 大致类似：

```diff
- delete pageBlock[i]?.value?.created_time
- delete pageBlock[i]?.value?.last_edited_time
+ // 保留 created_time / last_edited_time
+ // react-notion-x collection system date 属性需要这两个字段
```

---

## 5. Commit 建议

建议将这次修复独立提交，不与主题 CSS、UI 调整等改动混在一起。

推荐 commit message：

```text
fix: preserve Notion block timestamps for collection rendering
```

或中文：

```text
fix: 保留 Notion block 时间字段以修复数据库日期显示
```

这样以后 Sync Fork 如果发生冲突，可以快速判断这两行为什么需要保留，并方便重新应用。
