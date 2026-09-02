# Interspecies 主页 v0.1 — 内容蓝图

> 目标：搭起落地页并填满 v0.1。owner 协同：Becca（解决方案市场）+ 产品线市场。
> 整页叙事脊柱：**「传统研究方法的痛 → Seeed 开源开放方案」**。用《Animal Research in the wild》6 块研究方法作"痛点域"，用 5 套多模态方案作"能力域"，做一一映射——这样页面不像产品目录，而像研究赋能平台。

---

## 全页信息流（自上而下）

Hero 简介 → 应用场景（场域）→ 案例+世界地图（证据）→ 技术框架（如何）→ Challenges（参与漏斗）→ 项目（行动）→ 联系（路由）

---

## 1. 简介 / Hero

- **内容**
  - 定位一句话：*Seeed × Interspecies Internet —— 动物与生态研究的开源神经末梢*
  - 副承诺（二选一作 hero promise）：
    - A 反盗猎实时性："SD 卡 = 数周后才知道 → 90 秒关键帧告警"
    - B 开源中间件："别再造轮子了——把任意传感器接上任意物种问题的开放平台"
    - v0.1 建议用 A（情绪+视觉强），B 留到技术框架区再说
  - Hero 视觉：Allen 的 reCamera+P1 Pro 关键帧告警 demo 短片 / 基地车实验室概念图
  - 信任行：Backed by MIT Media Lab · Interspecies Internet · Fab Lab 网络 · 开源 (GitHub)
  - 双 CTA：`参与` / `看案例`

- **结构**：Hero band = 定位 + 副承诺 + 媒体 + 信任行 + 2 CTA
- **来源**：Playbook 定位句；Allen demo；interspecies.io Data Logger Project 描述
- **负责人**：Becca

---

## 2. 应用场景（场域）

- **内容**——4 类场景，正是场景阶梯浓缩（不是只讲动物保护）：
  1. 自然保护 — 了解与研究动物 / AI in the wild（用那张 V2 图）
  2. 预防人与动物冲突
  3. 动植物作为传感器（信息输入关键：嗅觉、声学、菌类、昆虫）
  4. 动物饲养 + HA 联动（动物与智慧空间协作）
- **结构**：4 卡片网格，每卡 = 图标 + 一句痛 + 一句 Seeed 能干什么 + 链对应案例
- **来源**：你给的 4 类应用场景；"动植物 as sensor"对应 Robert Long 嗅觉传感器、风扰去除超远距声采集
- **负责人**：Becca

---

## 3. 案例 + 世界地图（证据）

- **内容**——v0.1 先种 6–8 个 pin，每个 = 一张案例卡：
  | Pin | 位置 | 物种/对象 | 技术 | 合作方/FabLab | 链接 |
  |---|---|---|---|---|---|
  | Mothbox | 巴拿马 | 蛾子/通用 trap cam | reCamera+LoRa | 巴拿马 FabLab | mothbox.org |
  | (Mothbox 延展) | 秘鲁/黄石 | 通用 trap cam | reCamera+LoRa | 秘鲁/黄石 FabLab | TBD |
  | RiKAnet | 不丹 | 老虎 | LoRa/Mesh 全国网 | 不丹 FabLab | TBD |
  | 嗅觉传感器 | 西雅图 Woodland Park | 哺乳动物嗅觉 | 量产嗅觉 sensor | 西雅图 FabLab / Robert Long | TBD |
  | LifeScience Trust | 印度 | 动物园内多物种 | pilot（技术+采购+园内 FabLab）| 印度 FabLab | TBD |
  | CollarID | MIT | 通用项圈/多物种 | 开源项圈+LoRa，Fusion 小批量 | MIT Media Lab | media.mit.edu/projects/collarid |
  | reButton | — | 宠物/跨物种沟通 | reButton(mic+speaker) | FluentPet (Leo) | fluent.pet |
  | 反盗猎关键帧 | TBD | 犀牛/盗猎 | 关键帧低带宽回传 | lighthouse 候选 | TBD |

- **结构**：世界地图（v0.1 可静态地图+pin，后升级交互）+ 下方可筛选卡片网格；筛选项 = 应用场景 / 物种 / 技术（CV·声学·LoRa·项圈·传感）
- **来源**：你给的合作伙伴清单；地图 pin 用一个简单 JSON/CSV 数据源 `{name,lat,lng,species,scenario,tech,partner,link}`
- **负责人**：Becca（案例/合作方/地图）+ 产品线市场（每卡的技术/产品细节共填）

---

## 4. 技术框架（如何）

- **内容**
  - **架构图**：感知 → 边缘 AI → 回传 → 云/汇聚，每层标 Seeed 产品（reCamera/Tracker/Meshtastic/气象站/Recomputer/XIAO）
  - **开源中间件 callout**：Open Datalogger GitHub = 各层之间的连接组织（"不重复造轮子"的核心交付物）— Allen
  - **5 套能力模块**（把长文压成一行 + 硬件清单 + 详情链接）：
    1. CV+VLM 步态与运动损伤量化
    2. STT+VLM+LLM 声纹行为与情绪应激
    3. Tracker+Meshtastic+CV 迁徙轨迹
    4. 多模态 种群社交行为
    5. 气象+多模态 环境适配与行为节律
  - **脊柱表：研究方法痛 → Seeed 方案**（这是"整体解决方案"证据，直接服务胜利条件 4）：

  | 传统研究方法（痛） | Seeed 开源开放方案 |
  |---|---|
  | 个体识别：标记重捕/照片ID/GPS 项圈（侵入、贵） | CollarID 开源项圈 + Tracker + Meshtastic + CV 个体重识别 |
  | 种群数量：相机陷阱 SECR（人工翻图） | reCamera trap cam（Mothbox）+ CV 自动计数 |
  | 认知衰退：人工行为编码（短时） | 方案1步态 + 方案2声纹，纵向 VLM 自动编码 |
  | 声学监测：PAM/AudioMoth + 人工听辨 | 方案2 STT+VLM + XIAO 声学 + 风扰去除超远距声采集 |
  | 社交行为：proximity logging | 方案4 多相机阵列 + 个体 ID + 邻近度 |
  | 栖息地/承载力：气象+植被+遥感割裂 | 方案5 气象站 + 多模态 + 遥感联动 |

  - **差异化 3 条**：开放可复制 / 边缘离线无网无电 / Fab Lab 可本地制造

- **结构**：架构图 → 中间件 callout → 5 能力卡 → 脊柱映射表 → 差异化
- **来源**：5 套方案原文（压成一行）；6 块研究方法（作痛点列）；产品细节由产品线市场补
- **负责人**：产品线市场（架构/产品/5 方案/差异化）+ Becca（脊柱映射的"痛"侧叙述）

---

## 5. Challenges（线索 / 解决方案 / 案例）

> 这一区是**lead-gen 漏斗** + "持续聚集整理放大"的心脏。把合作方的真实需求当线索，把他们的 build 当解决方案。

- **内容**
  - **线索（Clues）**——开放的研究/保护问题，v0.1 先种 5 条来自合作方：
    1. 不丹全国老虎监测 + LoRa/Mesh 铺设（来源 RiKAnet）
    2. 嗅觉传感器量产（来源 Robert Long / Woodland Park）
    3. 跨物种沟通 reButton（mic+speaker）（来源 FluentPet / Leo）
    4. 反盗猎实时关键帧告警（来源 hero 叙事 / SD 卡替换）
    5. 通用开源 trap cam（来源 Mothbox 延展秘鲁/黄石）
  - **解决方案（Solutions）**——对应 build：CollarID、reButton、嗅觉量产、Mothbox、关键帧回传
  - **案例（Cases）**——已部署结果，链回世界地图卡
- **结构**：三步漏斗卡 Clue → Solution → Case；每条线索带状态（open/in-progress/solved）+ 标签 + `提交方案` CTA
- **来源**：合作方清单逐条转成线索；社区后续贡献
- **负责人**：Becca

---

## 6. 项目（参与 / 发起 / 关注）

- **内容**——3 张行动卡：
  - **参与**：加入现有 challenge、贡献 build、部署 replicate kit
  - **发起**：提交你的研究需求 / 提议新部署 / 申请合作
  - **关注**：订阅 newsletter、加入 Slack 社群、Watch GitHub
- **结构**：3 行动卡，每卡一个明确下一步 + 链接（GitHub / interspecies.io Slack / 表单）
- **来源**：Allen 的 GitHub repo；interspecies.io 已有 Slack 社群；replicate kit（Playbook）
- **负责人**：Becca

---

## 7. 跟我们联系（分类路由）

- **内容**——按身份分流到对应 owner：
  - 研究者：部署传感器 / 共著
  - NGO/保护机构：场地合作 / MoU
  - Fab Lab：本地复制 / 制造
  - 媒体：press kit
  - 投资/CSR：资金/合作
- **结构**：身份选择器 → 对应表单字段 → 路由 owner（Becca=方案/NGO/场景；产品线市场=产品/技术框架；Allen=技术/GitHub/FabLab）
- **来源**：owner 分工
- **负责人**：Becca 搭路由，各 owner 接收

---

## v0.1 最小可发内容清单（别等齐再动）

- [ ] Hero：定位句 + 1 hero 视频/图 + 2 CTA + 信任行
- [ ] 应用场景：4 卡
- [ ] 世界地图：6–8 pin（静态图可）+ 卡片网格
- [ ] 技术框架：架构图 + 5 能力一行 + 脊柱映射表 + 3 差异化
- [ ] Challenges：5 线索 + 至少 2 映射到解决方案
- [ ] 项目：3 行动卡 + 链接
- [ ] 联系：身份路由（v0.1 可简化为分邮箱/表单）

## 负责人分工一句话

- **Becca（解决方案市场）**：简介、应用场景、案例/世界地图（合作方侧）、Challenges、项目、联系路由 —— 即"场域·伙伴·社群"叙事
- **产品线市场**：技术框架（架构/5方案/产品/差异化）、案例卡的技术细节共填 —— 即"产品·技术"叙事
- **共享**：Hero、联系路由
