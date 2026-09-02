# Interspecies 落地页 · Challenges 区案例库

> 本文件是落地页「Challenges：线索 → 解决方案 → 案例」区的内容来源库。
> 核心改动：**Solution 列不再放抽象产品名，而是用「challenge & case」故事体**——每条解决方案 = 一段真实挑战 + 一个落地案例的组合，让读者看到"问题是什么 → 谁在用什么解决了 → 结果如何"。
> owner: Becca。素材状态截至 2026-08-13。

---

## 案例总览（按内容成熟度分层）

| # | 案例 | 物种/对象 | 地点 | 合作方 | 内容状态 | 落地页就绪 |
|---|---|---|---|---|---|---|
| A1 | TNC 湿地连续监测 | 候鸟 / 水生生态 | 香港·后海湾 | The Nature Conservancy (TNC) HK | Phase 1 blog 已写好，等 TNC 审核 | ✅ 可上 |
| B1 | 不丹全国老虎监测 | 老虎 | 不丹 | RiKAnet / 不丹 FabLab | 框架在建，无 blog | ⏳ 雏形 |
| B2 | BuzzCam 大黄蜂监控 | 大黄蜂 | TBD | 研究者（待对接） | 去年科研成果，Seeed 未报道；正联系研究者 | ⏳ 待捡起 |
| B3 | Mothbox 升级 / Open Datalogger | 蛾类 / 通用 trap cam | 巴拿马→全球 | Dina Lab (Andy) | 初步合作框架已签；周五开会 | ⏳ 雏形 |
| C1 | 嗅觉传感器量产 | 哺乳动物嗅觉 | 西雅图 | Robert Long / Woodland Park | 原有线索，无新素材 | 🔲 待启动 |
| C2 | 跨物种沟通 reButton | 宠物 / 跨物种 | — | FluentPet (Leo) | 原有线索，无新素材 | 🔲 待对接 |
| C3 | 反盗猎实时关键帧告警 | 犀牛等 | TBD | TBD | hero 叙事，无落地案例 | 🔲 待锚定 |
| — | 基地车农业 | 农业（非动物研究） | — | — | 已有 blog，放基地车页面 | ➡️ 不入此区 |

**分层说明：**
- **A 层（已有内容）**：TNC 有完整 blog 文本 + 田野照片，是 v0.1 最先能填满的真实案例。
- **B 层（有雏形/框架）**：三条都在推进中，有合作方/框架/时间线，可上页面但标注 `in-progress`。
- **C 层（原有线索）**：页面 v0.1 已有占位，暂无新素材，保留线索状态 `open`。

---

## A 层 · 已有内容

### A1 · TNC 香港后海湾湿地连续监测

**Blog（Phase 1，等 TNC 审核）：** *Turning Environmental Monitoring into Conservation Evidence: Supporting Wetland Restoration in Hong Kong's Deep Bay*
**合作方：** The Nature Conservancy (TNC) Hong Kong — [tnc.org.hk](https://www.tnc.org.hk/en-hk/)
**分两阶段：** Phase 1 = 水质 + 气象连续监测（已部署）；Phase 2 = reCamera Pro 边缘 AI 自动鸟类多样性观测（规划中）

---

#### 线索 (Clue)
> **湿地不会在两次到访之间静止不动**——传统采样是冻结在时间里的快照，而潮汐、降雨、换水每天都在改变池塘状态。TNC 需要知道：生态修复真的在朝着正确方向恢复吗？

**结构化：**
- **问题**：传统人工采样每几周一次 → 送去实验室等结果 → 只得到一个时间点的快照。但湿地是动态系统：潮汐每日进出、降雨数小时内改变盐度、池塘与海湾每月约换水 10 次，每次换水都重塑池塘内环境。两次采样之间，绝大部分变化未被记录。
- **物种/对象**：候鸟、马蹄蟹、鱼虾（基围传统潮汐虾塘）
- **地点**：香港·后海湾 (Deep Bay) 基围湿地
- **约束**：盐水腐蚀环境、高湿、分布式监测点、无固定实验室
- **标签**：`栖息地修复` `连续监测` `水生生态` `候鸟`

#### 解决方案 (Solution = Challenge & Case)

> TNC 需要的不是一个传感器，而是一套能在咸水湿地里 7×24 运转的连续监测系统——让生态修复从"每隔几周看一眼"变成"每天都能看、能测、能行动"。Seeed 把这个需求翻译成了一个实际部署的田野系统。

**Seeed 做了什么：**
- **水质传感器集成**：盐度、溶解氧、浊度、pH、水温——其中多枚为抗腐蚀版本，专为长期盐水部署而选型（非标准现成配置），由 TNC 直接采购，Seeed 负责规格匹配与系统集成
- **数据采集与回传**：SenseCAP 4G Data Logger 采集读数，通过蜂窝网络持续上传——适合水质监测设备的功耗需求，保证分布式监测点数据可靠流通
- **气象背景**：SenseCAP S700-C 七合一气象传感器（气温、湿度、气压、光照、风速风向、降雨）——给水数据加上"为什么变化"的环境背景（暴雨后的盐度变化 vs 平静无雨周的同一变化，讲的是完全不同的故事）
- **工程支持**：Seeed 额外贡献工程资源——现场勘察、安装指导、系统集成、与 TNC 团队的技术知识共享

**关键技术清单：** SenseCAP 4G Data Logger · SenseCAP S700-C 气象站 · 抗腐蚀水质传感器阵列
**Seeed 角色：** 规格匹配 + 系统集成 + 现场工程支持（不替代生态专业，而是给生态专业一条连续数据记录）

#### 案例 (Case)

**部署地：** 香港·后海湾基围湿地
**状态：** Phase 1 已部署运行；Phase 1 blog 已写好，等 TNC 审核
**结果：**
- 团队不再等数周实验室报告，而是在仪表盘上看条件演变：每次换水如何改变池塘、潮汐周期如何与水位互动、热浪或风暴如何穿过系统
- 实时可见性 → 能发现并响应溶解氧骤降等事件，而非事后发现
- 同一监测方法跨不同池塘区域运行 → 生成可比数据集，揭示不同管理方式如何影响生态条件随时间变化
**Phase 2 展望：** reCamera Pro 边缘 AI 平台用于自动鸟类多样性观测——为环境记录增加视觉层
**Blog 链接：** [飞书文档](https://seeedstudio.feishu.cn/docx/ZxOadAzFZoSwOyxVEtQcuOzpnMe)
**内容素材：** ✅ blog 全文 · ✅ 两张田野照片（基围湿地全景 + 设备部署现场）

---

## B 层 · 有雏形 / 框架

### B1 · 不丹全国老虎监测

#### 线索 (Clue)
- **问题**：不丹全国范围的老虎种群监测与追踪，需要大覆盖面积、长距离、低功耗的通信网络
- **物种/对象**：老虎
- **地点**：不丹（全国）
- **标签**：`种群监测` `长距离追踪` `LoRa/Mesh`

#### 解决方案 (Solution = Challenge & Case)
> RiKAnet 计划铺设覆盖不丹全国的 LoRa/Mesh 网络，配合 Seeed Tracker 做老虎追踪与定位。这是 interspecies 落地页最早的线索之一——将传统项圈追踪升级为全国 mesh 网络 + CV 个体重识别的组合方案。

**关键技术：** Tracker + Meshtastic + LoRa/Mesh 全国铺设
**Seeed 角色：** LoRa/Mesh 网络设备 + Tracker

#### 案例 (Case)
- **部署地：** 不丹
- **合作方：** RiKAnet / 不丹 FabLab
- **状态：** `in-progress` · 框架在建，无 blog、无田野成果
- **内容缺口：** 案例细节、田野照片、结果数据全缺 → 需向 RiKAnet 发征集信

---

### B2 · BuzzCam 大黄蜂监控

#### 线索 (Clue)
- **问题**：大黄蜂（bumblebee）种群行为与活动监测——传粉昆虫是生态系统的关键指示物种
- **物种/对象**：大黄蜂
- **地点：** TBD
- **标签**：`昆虫监测` `传粉者` `行为` `CV`

#### 解决方案 (Solution = Challenge & Case)
> 去年已有科研成果产出（BuzzCam），但 Seeed 从未做过任何报道。目前正在联系研究者，计划将这个已有科研成果捡起来，撰写一篇 Seeed 视角的 blog——把科研成果转化为可被 interspecies 社区复制的技术方案。

**关键技术：** 待确认（预计 CV + 摄像设备）
**Seeed 角色：** 报道 + 社区转化（待对接研究者后明确）

#### 案例 (Case)
- **部署地：** TBD
- **合作方：** 研究者（姓名待确认）
- **状态：** `open` · 去年科研成果存在，但 Seeed 侧零内容；正联系研究者
- **下一步：** 确认研究者意向 → 获取研究细节 + 田野照片/视频 → 撰写 blog → 填入案例区

---

### B3 · Mothbox 升级 / Interspecies Open Datalogger

#### 线索 (Clue)
- **问题**：需要开源、模块化、多物种通用的数据采集平台——不只是蛾子 trap cam，而是能扩展到任意物种/任意传感器的中间件
- **物种/对象：** 蛾类 / 通用 trap cam → 全物种
- **地点：** 巴拿马（Mothbox 原始部署）→ 秘鲁 / 黄石（延展）
- **标签：** `开源平台` `模块化` `trap cam` `多物种`

#### 解决方案 (Solution = Challenge & Case)
> Mothbox（巴拿马 FabLab，reCamera + LoRa 开源蛾子识别 trap cam）是 interspecies 最早的落地 pin。现在与 Dina Lab (Andy) 的合作已有一个初步框架——「Interspecies Open Datalogger」——把 Mothbox 升级为通用的开源数据采集中间件，服务于"任何传感器 → 任何物种问题"的核心定位。周五与 Andy 开会推进。

**初步合作框架：** [飞书文档：Interspecies Open Datalogger - Dina Lab 合作框架（中文版）](https://seeedstudio.feishu.cn/docx/Wflgdil0jorXpIxSXP8cbfZenPg)
**关键技术：** reCamera + LoRa + Open Datalogger 中间件
**Seeed 角色：** 硬件共建 + 固件 + 制造 + 开源平台

#### 案例 (Case)
- **部署地：** 巴拿马（已有）→ 秘鲁 / 黄石（延展）
- **合作方：** Dina Lab (Andy) / 巴拿马 FabLab
- **状态：** `in-progress` · 初步合作框架已签，周五开会推进
- **下一步：** 周五会议确认框架细节 → 明确交付物与时间线 → 同步到 GitHub repo（Allen）

---

## C 层 · 原有线索（页面已有占位，暂无新素材）

### C1 · 嗅觉传感器量产
- **线索**：哺乳动物嗅觉监测需要量产级传感器
- **方案**：Seeed 制造 × Woodland Park / Robert Long
- **状态**：`in-progress` · 无新素材
- **缺口**：量产进度、田野成果、blog 全缺 → 需向 Robert Long 发征集信

### C2 · 跨物种沟通 reButton
- **线索**：跨物种沟通需要带 mic+speaker 的交互设备
- **方案**：reButton 共研 × FluentPet (Leo: trottier@gmail.com)
- **状态**：`open` · 无新素材
- **缺口**：需对接 FluentPet 确认 reButton 进展

### C3 · 反盗猎实时关键帧告警
- **线索**：SD 卡 = 数周后才知道 → 90 秒关键帧告警
- **方案**：低带宽只传可疑帧 + 低功耗 mesh 回传
- **状态**：`in-progress` · hero 叙事已有，但无落地案例
- **缺口**：需锚定 1 个命名参考部署（如犀牛角关键帧告警 / 雨林电锯检测）→ Allen demo

---

## 落地页 Challenges 区改版建议

### 核心改动：Solution 列 =「challenge & case」故事体

当前页面 Solution 列是抽象产品名（CollarID / reButton / 嗅觉 sensor / Mothbox / 关键帧回传）。改为每条 Solution = 一段「挑战 + 案例」组合叙述，让读者直接看到问题与解法的关系。

### 改版后的三列漏斗（v0.1 可发版）

| 线索 Clue | 解决方案 Solution (= challenge & case) | 案例 Case |
|---|---|---|
| **湿地修复如何验证成效？** 两次采样之间的动态变化全丢 | TNC × Seeed：水质+气象连续监测系统，SenseCAP 4G 回传，抗腐蚀盐水部署，仪表盘每日可看可行动 → Phase 1 已部署后海湾 | ✅ 香港·后海湾·Phase 1 运行中；Phase 2 reCamera Pro 鸟类观测规划中 · [blog](https://seeedstudio.feishu.cn/docx/ZxOadAzFZoSwOyxVEtQcuOzpnMe) |
| **不丹老虎全国监测需要长距离 mesh** | RiKAnet × Seeed：Tracker + LoRa/Mesh 全国铺设 + CV 个体重识别 | ⏳ 不丹 · 框架在建 |
| **传粉昆虫行为监测缺开源工具** | BuzzCam × Seeed：去年科研成果转化为社区可复制方案（正联系研究者） | ⏳ 待对接研究者后补 |
| **通用开源 trap cam 需升级为多物种平台** | Mothbox × Dina Lab × Seeed：reCamera+LoRa → Open Datalogger 中间件，巴拿马→全球 | ⏳ 巴拿马已部署；Dina Lab 框架周五推进 |
| **反盗猎：SD 卡数周 vs 90 秒关键帧** | 低带宽可疑帧回传 + 低功耗 mesh · Allen reCamera+P1 Pro demo | 🔲 待锚定命名参考部署 |

> 原有线索 C1（嗅觉）/ C2（reButton）可保留在页面但标注 `open`，或移至 v0.2 补充。

### 每条 Solution 卡的落地页元素结构

每张 Solution 卡建议包含：
1. **标题**：合作方 × Seeed 的方案名（如「TNC × Seeed 湿地连续监测」）
2. **挑战一句话**：问题是什么（如「湿地不会在两次到访间静止不动」）
3. **解法一句话**：用了什么（如「抗腐蚀水质传感器 + 4G 回传 + 气象背景」）
4. **关键硬件标签**：`SenseCAP 4G` `S700-C` `reCamera Pro`
5. **状态标签**：`Phase 1 运行中` / `框架在建` / `待对接`
6. **链接**：blog / 框架文档 / 地图 pin

---

## 下一步行动清单

| 优先级 | 行动 | 负责人 | 阻塞 |
|---|---|---|---|
| P0 | TNC blog 审核 → 上线 → 填入 Case 列 | Becca | 等 TNC 审核反馈 |
| P0 | 周五与 Andy 开会 → 确认 Dina Lab 框架细节 → 更新 B3 | Becca | 周五会议 |
| P1 | 联系 BuzzCam 研究者 → 获取细节+素材 → 撰写 blog | Becca | 研究者回复 |
| P1 | 向 RiKAnet / Robert Long 发征集信 → 补 B1 / C1 素材 | Becca | 对方响应 |
| P2 | Allen reCamera+P1 Pro 关键帧 demo → 充实 C3 | Allen | demo 制作 |
| P2 | 更新落地页 HTML Challenges 区（Solution 列改故事体） | Becca | 本文件确认后即可动 |
