# AGENTS.md — Seeed × Interspecies Landing Page

Astro 7 + Tailwind CSS 4 (Vite plugin) 静态落地页，部署到 GitHub Pages。双语（i18n）：英文默认，中文 `/zh/`。
Node ≥ 22.12.0（偶数版本）。

## 命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:4321/seeed-interspecies/
npm run build      # 构建到 dist/（提交前必跑）
npm run preview    # 预览构建产物
```

## 结构导航

页面为「数字田野特稿（Digital Field Journal）」：暗调自然特稿式单页叙事，4 章连续滚动（Prologue → Field → Map → Manifesto），无进入遮罩、无跳转页。

**i18n**：`en` 默认（`/`，无前缀），`zh` 在 `/zh/`。页面为 `src/pages/index.astro` 与 `src/pages/zh/index.astro`（结构相同，仅 `locale` 不同）；组件统一接收 `locale` prop；UI 文案在 `src/i18n/ui.js`；案例数据双语字段 `{ en, zh }`。

- `src/pages/index.astro` — EN 页面骨架（locale='en'）
- `src/pages/zh/index.astro` — ZH 页面骨架（locale='zh'）
- `src/i18n/ui.js` — 双语 UI 词典（`getUI(locale)`）；改界面文案改这里
- `src/components/` — 每章一个组件（全部接收 `locale` prop）：
  - `JournalNav.astro` — 报头导航 + 阅读进度线
  - `Prologue.astro` — 01 序幕：honeyguide 大画幅 + 声波 canvas + 序章散文
  - `FieldStories.astro` — 02 特写：3 个旗舰案例（7/5 图文交替）+ Appendix（`<details>` 研究域）
  - `PulseMap.astro` — 03 地图：暗色 Leaflet（CARTO dark_all）+ 节点索引 + flyTo 联动
  - `Manifesto.astro` — 04 宣言：协作路径 + 伙伴 logo 行 + SDG 标注
  - `JournalFooter.astro` — 极简收尾
  - `SpecDrawer.astro` — 全局侧滑/底部 spec 抽屉（原生 DOM API，非 innerHTML）
- `src/scripts/journal.ts` — GSAP ScrollTrigger 动效 + 导航进度 + reveal + 声波（IO 暂停）
- `src/data/projects.js` — 案例数据单一数据源（含 `specs`/`telemetry`/`featured` 字段与 `STATUS_LABEL`）
- `src/data/images.js` — astro:assets 静态图片注册表
- `src/assets/` — 首页大图母版（hero + 8 张案例图，构建时自动压缩为 WebP 多档 srcset）
- `src/styles/global.css` — `@theme` 暗调设计令牌（night/bark/moss/lichen/amber/bone 等）+ Leaflet/SpecDrawer 全局覆盖 + `.field-photo-frame` 图像暗调管线
- `docs/` — 内容规划文档（blueprint、案例库、playbook 等）
- `public/` — 仅小资产（partner-logos/、sdg-icons/）；大图一律走 `src/assets/` + `<Image>`

## 边界

**Always**
- 改文案/案例：先改 `src/data/projects.js`（含状态映射 `STATUS_LABEL` 与双语 `{ en, zh }` 字段，勿在组件里再建字典）。
- 双语同步：改 UI 文案只改 `src/i18n/ui.js`；新增语言须同时新增页面路由 + 词典 + `astro.config.mjs` 的 `locales`。
- 组件样式写在各自 `.astro` 的 scoped `<style>`；`global.css` 只放 `@theme`、base、Leaflet/SpecDrawer 运行时注入 DOM 的覆盖。
- 提交前跑 `npm run build` 确认零错误，并 `npm run preview` 在 `/seeed-interspecies/` 与 `/seeed-interspecies/zh/` 子路径人工过一遍（地图/抽屉/锚点/语言切换）。
- 动效只动 `transform`/`opacity`/`clip-path`；禁 pinning、禁 scroll-jacking；必须带 `prefers-reduced-motion` 降级。

**Ask First**
- 新增 npm 依赖（当前 5 个：astro、tailwindcss、@tailwindcss/vite、leaflet、gsap）。
- 修改 `astro.config.mjs` 的 `site`/`base` 或 `.github/workflows/`。

**Never**
- 引入运行时 CDN 脚本（Tailwind Play CDN、unpkg 等）——全部走 npm + Vite 构建。
- 直接编辑 `dist/`（构建产物）。
- 大图放 `public/` 手写 `<img>`——走 `src/assets/` + astro:assets `<Image>`（自动 srcset/压缩，且规避 base 路径问题）；`public/` 下资产仍须用 `import.meta.env.BASE_URL`：

```astro
❌ <img src="/seeed-interspecies/images/case-tnc.png">
✅ <Image src={CASE_IMAGES.tnc} widths={[800, 1200]} sizes="(min-width:1024px) 58vw, 100vw" />
✅ <img src={`${import.meta.env.BASE_URL}partner-logos/fab-lab-network.svg`}>
```
