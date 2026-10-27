# 埋点与 GA4 配置对照表

站点：https://opendatalogger.tech · GA4 属性 `Open Datalogger Web`（Property ID `560789860`）· Measurement ID `G-DS2CF25J1Y`

埋点实现：`src/scripts/analytics.js`（统一出口 `window.odlTrack()`）。
**参数名必须与下方 GA4 自定义维度一致**，重命名参数时需同步在 GA4「管理 → 自定义定义」改名，否则看板取不到数。

## 事件

| 事件 | 触发时机 | 参数 | 分析用途 |
| --- | --- | --- | --- |
| `page_view` | 页面加载（首屏） | `content_group` | 浏览量与入口质量 |
| `scroll_depth` | 滚动到 25 / 50 / 75 / 100% | `percent` | 内容长度是否合适、何时失去兴趣 |
| `section_view` | 某分区露出 ≥35% 视口 | `section_id`, `section_index` | 各分区到达率 → 决定内容顺序与精简 |
| `nav_click` | 点击站内锚点链接 | `section_id` | 顶部导航真正被使用的入口 |
| `cta_click` | 点击带 `data-odl-cta` 的按钮/链接 | `cta_id`, `link_domain` | 转化按钮效果对比 |
| `outbound_click` | 点击外链（GitHub / Facebook …） | `link_domain`, `link_url` | 站外关注点、社区转化 |
| `language_switch` | 切换 EN / 中文 | `language` | 语言需求，决定是否做多语言 SEO |
| `case_view` | 打开案例弹窗（地图 pin 或轮播） | `case_id`, `case_name`, `case_status`, `case_source` | 哪个案例最受关注、哪种入口更有效 |
| `case_filter` | 点击案例筛选标签 | `filter_tag` | 技术标签（CV / LoRa / STT…）关注度 |

`cta_id` 取值：`enter_network`（首屏进入按钮）、`nav_get_in_touch`、`hero_explore_cases`、`hero_launch_github`、`join_browse_github`、`join_submit_project`、`join_follow_facebook`、`case_modal_open_github`、`email_click`。

## GA4 自定义维度（事件级）

| 维度名称 | 事件参数 | 用途 |
| --- | --- | --- |
| Section ID | `section_id` | 分区到达率 / 导航点击 |
| CTA ID | `cta_id` | 转化按钮分析 |
| Link Domain | `link_domain` | 外链去向分析 |
| Scroll Percent | `percent` | 滚动深度分布 |
| Language | `language` | 语言偏好 |
| Case ID | `case_id` | 案例热度 |
| Case Source | `case_source` | 案例入口来源（地图 / 轮播） |
| Filter Tag | `filter_tag` | 技术标签关注度 |

## 维护

- 新增转化按钮：在元素上加 `data-odl-cta="唯一id"` 即可，无需改 JS。
- 新增分区：给 `<section>` 加 `id`，并把 id 加进 `analytics.js` 的 `SECTION_IDS`（顺序即 `section_index`）。
- 看板取数脚本：`fetch_traffic.py`（同一目录的 `traffic-data.json` 供 `index.html` 渲染）。
