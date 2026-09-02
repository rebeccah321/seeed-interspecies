# AGENTS.md — Seeed × Interspecies Landing Page

Astro 7 + Tailwind CSS 4 (Vite plugin) 静态落地页，部署到 GitHub Pages。
Node ≥ 22.12.0（偶数版本）。

## 命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:4321/seeed-interspecies/
npm run build      # 构建到 dist/（提交前必跑）
npm run preview    # 预览构建产物
```

## 结构导航

- `src/pages/index.astro` — 页面骨架，按 section 组装组件
- `src/components/` — 每个页面 section 一个组件（Nav/Hero/Why/What/Cases/People/Join/Footer）
- `src/data/projects.js` — 地图与轮播的案例数据（改案例内容改这里）
- `src/styles/global.css` — Tailwind `@theme` 设计令牌 + 自定义 CSS
- `docs/` — 内容规划文档（blueprint、案例库、playbook 等）
- `public/` — 图片资产（images/、partner-logos/、sdg-icons/）

## 边界

**Always**
- 改文案/案例：先改 `src/data/projects.js` 或对应 section 组件。
- 提交前跑 `npm run build` 确认零错误。

**Ask First**
- 新增 npm 依赖（当前仅 4 个：astro、tailwindcss、@tailwindcss/vite、leaflet）。
- 修改 `astro.config.mjs` 的 `site`/`base` 或 `.github/workflows/`。

**Never**
- 引入运行时 CDN 脚本（Tailwind Play CDN、unpkg 等）——全部走 npm + Vite 构建。
- 直接编辑 `dist/`（构建产物）。
- 硬编码 base 路径：

```astro
❌ <img src="/seeed-interspecies/images/case-tnc.png">
✅ <img src={`${import.meta.env.BASE_URL}images/case-tnc.png`}>
```
