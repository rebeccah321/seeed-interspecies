# Open Datalogger for Interspecies — 策略 Playbook

> 活文档（living doc）。持续聚集、整理、放大。owner: Becca (solution marketing)，协同 Allen (github+demo)、HR (对内)、Neil/MIT/Fab Lab (生态)。
> 上下文：interspecies.io 已正式列出 **Data Logger Project** ——「a shared platform and open-source approach to wildlife data collection… modular, multi-species technologies for logging audio, movement, and environmental data… monitoring behavior, detecting poaching, reducing human-wildlife conflict」。本项目即它的开源硬件参考实现。

---

## 0. 一句话定位

> **"Interspecies Internet 的开源神经末梢"** —— 把「任何传感器 → 任何物种问题」之间的中间件，做成开放、模块化、可被 Fab Lab 本地制造、可被 NGO 复制的参考平台。

不同iator（为什么是 Seeed、为什么是现在）：
- **开放 + 全栈**：感知识别（reCamera/P1 Pro）+ 边缘 AI + 长距离低功耗回传（2021 底板，500m–1km，1–2Mbps ≈ Wi-Fi HaLow，可传关键帧）+ 供电 + 云，一条龙；竞品要么只做声学（Rainforest Connection）、要么只做 ML（Earth Species Project）、要么封闭昂贵（商用相机陷阱）。
- **制造能力**：open 不等于免费，open 驱动的是模块销量 + 制造服务 + 品牌。Seeed 的飞轮恰好是 open hardware + 本地制造 + 全球开发者生态。
- **Neil 的背书杠杆**：Neil 把 Interspecies 作为 MIT/Fab Lab 网络的旗舰未来项目在推。给他一个「可被 endorsements 的具体产物」（github repo + 一个命名参考部署），Fab Lab 网络的复制几乎顺理成章。

---

## 1. 四个胜利条件 → 现阶段动作

### 😎 1）主动出击的品牌动作 → 顶级 NGO 系统性合作
**核心动作：把 Seeed 变成 Interspecies Internet Data Logger Project 的官方「开源硬件参考平台」合作伙伴，并以此为锚，向外辐射。**

- [ ] **灯塔合作（最快 credibility）**：与 interspecies.io 联合公告：Seeed 为 Data Logger Project 的 open-hardware reference platform，争取在站上 Partners 名单占一格。
- [ ] **NGO 目标矩阵**（按「系统性合作」= 多年 MoU，Seeed 出硬件+工程，NGO 出场地+验证+共著）：
  - 声学/反盗猎：Rainforest Connection（用旧手机+太阳能，正是「换成正规 open datalogger」的完美替换对象）、Elephant Listening Project、Save the Elephants、Panthera。
  - 综合/平台型：Earth Species Project（已在 ARCANI 网络里）、Conservation X Labs、San Diego Zoo Wildlife Alliance、WWF。
  - 海洋：Ocean Alliance（interspecies.io 上已有项目，鲸歌数字化 → 海洋声学节点天然延伸）。
- [ ] **Neil/MIT 杠杆**：争取 Neil 一次公开 endorsement（FAB 系列会议 / Fab Foundation 渠道）。这是最大的单点杠杆。
- [ ] **一个 lighthouse 部署优先**：NGO 谈判慢，先锚定 1 个命名参考部署（如「犀牛角关键帧告警」或「雨林盗伐电锯检测」），用它去撬动其余。

### 👽 2）对产品最严苛的要求 → 真实场景验证 + 口碑
**核心动作：定义「压力测试矩阵」，部署并发布诚实田野报告（含失败）。研究者信「诚实数据」远胜「营销话术」。**

- [ ] **压力测试矩阵**（每格 = 一个产品极限场景 + 责任人 + 交付物）：
  - 雨林（高湿、林冠遮蔽、无市电、长距离 mesh）
  - 稀树草原（高温、超长距、太阳能自持）
  - 海洋/海岸（盐雾腐蚀、浮标、声学）
  - 人兽冲突界面（城郊、农田、入侵检测）
  - 地下/巢穴（微型、低功耗、红外）
- [ ] **诚实失败报告**：每次田野回来出一份「Field Failure Report」（什么挂了、为什么、怎么改）。这是口碑核武器。
- [ ] **关键帧回传作为 hero feature**：低带宽只传「可疑帧」而非整段视频——反盗猎场景的「90 秒 vs 数周 SD 卡」before/after 就是品牌叙事核心。
- [ ] **reCamera + P1 Pro demo（Allen）**：做成可重复的 5 分钟 demo 套件，给 NGO/研究者现场看。

### 🧑‍🎤 3）容易引爆的推广 → 突破性 + 病毒式传播（M+ views）
**核心动作：用「让森林呼救」的情绪+视觉钩子，而不是「又一台相机陷阱」。**

- [ ] **基地车实验室（Mobile Field Lab）**：一辆/一个背包的「野战实验室」，开进保护区实时直播跨物种数据。叙事 = "Can you hear the forest talk?" / 野外版 Google Street View（但活体生物声学+AI）。可巡馆、巡保护区、巡 Fab Lab。
- [ ] **森林 Hackathon**：48h，在保护区/森林里办，开发者基于 open datalogger 脚手架搭跨物种检测应用。奇观场景 + 实物产出 + NGO/研究者混场 = 天然病毒。
- [ ] **病毒钩子池**（挑 1–2 个做爆）：
  - 「第一台让森林呼救的开源设备」——枪声/电锯/动物求救 → 护林员实时告警（Rainforest Connection 的 TED 爆款路径，Seeed 可复刻并升级为多模态）。
  - 「犀牛角上的关键帧」——把反盗猎的实时性戏剧化。
  - 鲸歌 / 鸟鸣实时翻译直播（致敬 Roger Payne「Save the Whales」路径：音频+故事=群众运动）。
- [ ] **科学传播合伙人**：绑定 1 位 filmmaker / 科普 KOL 共创，平台只提供「素材源」。

### 🦄 4）形成整体解决方案 → 被 10 个 Fab Lab / NGO 复制（SDG 实践）
**核心动作：把 GitHub repo 做成「复制包」（BOM+固件+外壳 CAD+组装指南+部署 playbook），并主动跑通 10 个复制点。**

- [ ] **复制包（Replicate Kit）**：一个 Fab Lab 能本地制造 + 部署 + 上线的最小完整包。这是 victory 4 的硬通货。
- [ ] **10 个复制点目标**：Neil/Fab Foundation 渠道发 1 个公开 call for Fab Labs；同时 NGO 渠道铺。每个复制点 = 世界地图一个 pin。
- [ ] **SDG 框架**：SDG 14（水下生命）/15（陆地生命）/11（可持续城市·人兽冲突）/13（气候）/17（伙伴关系）。整盘定位为 SDG 实践，对接联合国/CSR 资金通道。
- [ ] **「Fab Lab-ready」标签**：争取 Neil 把它认证为 Fab Lab 标准项目，复制近乎自带流量。

---

## 2. 产品与技术栈映射

| 层 | Seeed 资产 | 角色 |
|---|---|---|
| 感知 | reCamera、P1 Pro | 视觉/音频/环境采集入口 |
| 边缘 AI | reCamera 端侧推理 | 关键帧判定、物种识别、事件触发 |
| 回传 | 2021 底板（500m–1km，1–2Mbps≈Wi-Fi HaLow，低功耗，可传关键帧） | 长距离低功耗 mesh，反盗猎实时告警核心 |
| 中间件 | Open Datalogger GitHub（Allen） | 「不重复造轮子」的核心交付物 |
| 云/汇聚 | 待定 | 世界地图、告警、数据共享 |
| 制造 | Seeed 制造 + 全球开发者生态 | 复制可规模化 |

**hero 叙事**：反盗猎「SD 卡 = 数周后才发现 → Open Datalogger = 90 秒关键帧告警」。这是把技术栈翻译成一句话的能力证明。

---

## 3. 场景阶梯（每个级别 ×10+ 市场容量）

自然保护 → 动物园 → 畜牧 → 宠物

- **自然保护**：proof + halo。最难、最严苛、口碑锚点。短期不挣钱，挣的是品牌与 Neil 背书。
- **动物园**：受控、易验证、有预算、付费意愿。理想第二站，把保护场验证的能力「降难度」商业化。
- **畜牧**：海量市场、付费意愿强（健康监测、发情、异常行为）。规模化收入主引擎候选。
- **宠物**：超大消费市场（FluentPet/MICO 邻接，interspecies.io 上已有 MICO + FluentPet 关系）。同一平台、不同 SKU。

**飞轮**：保护场投入做 R&D 与口碑 → 动物园/畜牧/宠物把能力下沉成规模收入 → 反哺保护场的持续开源投入。

---

## 4. 开放项目站结构（内容就绪度）

- [ ] **简介**：一句话定位 + 一段「为什么开源 + 为什么 Seeed」+ hero 视频（基地车/关键帧告警 demo）。
- [ ] **案例 / 世界地图**：每个部署一个 pin（位置、物种、传感器、数据、负责方）。**这是最强的营销资产**——研究者爱看自己站点上墙，制造 FOMO+归属。加 pin 要做到极低摩擦。
- [ ] **技术框架**：架构图（感知→边缘AI→回传→云）+ 复制包入口 + 各 Seeed 模块定位。
- [ ] **Challenges（线索 / 解决方案 / 案例）**：当作 **lead-gen 漏斗**——NGO/研究者发「线索」（需在 Y 条件检测 X）→ 社区/Seeed 提「解决方案」→ 上「案例」。把平台做成「问题市场」，Seeed 既供硬件又借 Fab Lab 网络解题。
- [ ] **项目（参与 / 发起 / 关注）**：replicate kit 入口、call for Fab Labs、订阅。
- [ ] **跟我们联系（分类）**：研究者 / NGO / Fab Lab / 媒体 / 投资，分流入对应 owner。

---

## 5. 行动表（0–30 / 30–90 / 90–180 天）

**0–30 天 · 凝共识、立锚点**
- [ ] 对内：HR@sm 一场内部宣讲（基地车实验室概念 + 反盗猎 hero 叙事），建内部 champion 网络。
- [ ] Allen：Open Datalogger GitHub 仓库做「可被 endorsements」的最小完整态（README + 架构图 + BOM + 一条部署 quickstart）。
- [ ] Allen：reCamera + P1 Pro 5 分钟 demo 套件定型。
- [ ] Becca：一句话定位 + 一页 positioning brief 定稿，对齐 Allen/HR/leadership。
- [ ] Becca：列出 NGO 目标矩阵 + 起草与 interspecies.io 的合作话术/MoU 要点。

**30–90 天 · 锚 lighthouse、铺场**
- [ ] 与 interspecies.io 联合公告 + 上 Partners 名单。
- [ ] 锚定 1 个命名 lighthouse 部署（反盗猎关键帧告警 或 雨林电锯检测）。
- [ ] 压力测试矩阵首批 2 格实地跑，出 2 份诚实 Field Failure Report。
- [ ] 上线开放项目站最小版（简介 + 世界地图 + 复制包入口 + 联系）。
- [ ] 争取 Neil 一次公开 endorsement。

**90–180 天 · 复制 + 病毒**
- [ ] 发 call for Fab Labs，锁定 10 个复制点（每点一 pin）。
- [ ] 基地车实验室 或 森林 Hackathon 落地一场，绑定 KOL/filmmaker 出 M+ 向内容。
- [ ] 场景阶梯下沉：启动 1 个动物园/畜牧试点。
- [ ] SDG 框架对外叙事定型，对接 CSR/联合国资金通道。

---

## 6. 利益相关方与分工

- **Becca（solution marketing）**：定位、合作话术、项目站内容、病毒内容共创、场景阶梯商业化叙事。
- **Allen（tech）**：Open Datalogger GitHub、reCamera+P1 Pro demo、复制包工程交付。
- **HR@sm**：对内宣讲、内部 champion 网络、把「基地车实验室」做成内部 rallying 概念。
- **Neil/MIT/Fab Lab**：最大背书杠杆与复制渠道。给 Neil 可 endorsements 的产物（repo + 命名部署）是触发点。
- **NGO 伙伴**：场地 + 验证 + 共著。系统性合作 = 多年 MoU。

---

## 7. 风险与对策

- **NGO 谈判慢** → 先锚 1 个 lighthouse，用结果撬其余；不等齐再动。
- **开源难直接变现** → 飞轮靠模块销量 + 制造服务 + 品牌；用场景阶梯（畜牧/宠物）兜底规模化收入。
- **「又一台相机陷阱」的认知陷阱** → 定位死守「开源神经末梢/中间件」，hero 叙事锁反盗猎实时性，不进红海品类。
- **田野失败暴露风险** → 反向利用为「诚实报告」口碑资产；不藏，反而建信任。
- **资源分散** → 现阶段只押：repo 完整态 + 1 个 lighthouse + 项目站最小版 + 1 场病毒内容。其余排队。

---

## 8. 关键指标（胜利定义）

- 😎 ≥1 份多年 MoU + interspecies.io Partners 名单占格 + Neil 公开 endorsement。
- 👽 ≥2 格压力测试矩阵完成 + 诚实 Field Failure Report 发布。
- 🧑‍🎤 ≥1 场 M+ views 内容（基地车/森林 hackathon）。
- 🦄 ≥10 个 Fab Lab/NGO 复制点（世界地图 10 pins）。

---

## 9. 待办线索（brainstorm 收尾，待定）

- [ ] 基地车实验室：实体车 vs 背包 kit？巡线规划？
- [ ] 森林 hackathon：选址、承办方、参赛者画像、产出归属与开源协议。
- [ ] 关键帧告警 demo：反盗猎 vs 雨林电锯，哪个先做 hero？
- [ ] 数据/伦理：动物数据开放协议、人兽冲突数据隐私。
- [ ] 犀牛角传感器形态与功耗极限（极端微型 + 极端自持）。
- [ ] 海洋节点（Ocean Alliance 协同）。
- [ ] 与 FluentPet/MICO 的「宠物/沟通」邻接是否单独立项。

---

# 附录 A · 应用场景（主页 v0.1 四象限）

1. **自然保护** — AI in the wild V2：了解与研究野生动物；反盗猎实时关键帧告警；生物多样性。
2. **人兽冲突预防** — 入侵检测、预警、缓解，保护人与动物双方。
3. **动植物 as sensor** — 它们是信息输入的关键；嗅觉、声学、行为本身就是信号源。
4. **动物饲养 + 智慧空间** — 跨场景饲养；联动 Home Assistant 实现动物与智慧空间的协作（zoo→畜牧→宠物 通杀）。

---

# 附录 B · 合作伙伴与产品机会（含 Fab Lab 地理锚点）

> 这些 partner 同时是 victory 4「复制点」的种子——巴拿马/秘鲁/黄石、不丹、西雅图、印度，已现成 6 个 pin，10 目标已 60% 有形。

| Partner | 产品/共建机会 | Fab Lab 锚点 | Seeed 动作 | 状态 |
|---|---|---|---|---|
| **interspecies.io / MIT Media Lab (Neil)** | Data Logger Project 共建，生态旗舰 | (全球 Fab Lab 网络) | 争官方 open-hardware reference platform | 在谈/最高优先 |
| **Mothbox.org** | reCamera+LoRa 新版：蛾子识别 + 开源 trap cam | 巴拿马 → 秘鲁 + 黄石 | 共建硬件+固件 | 待启动 |
| **ColARid** (MIT) | Fusion 小批量生产 → 联名开源项圈（多物种/多功能） | — | Fusion 制造 + 联名 | 待启动 |
| **FluentPet** | 新 reButton（带 mic+speaker） | — | reButton 共研（Leo: trottier@gmail.com） | 待对接 |
| **RiKAnet** | 不丹老虎监测，计划全国 LoRa/Mesh 铺设 | 不丹 | LoRa/Mesh + Tracker | 在建 |
| **Woodland Park / Robert Long** | 自研嗅觉 sensor，需量产 | 西雅图 | 量产 + 制造 | 待启动 |
| **LifeScience Trust** | Pilot：动物园内 Fab Lab，有技术+购买力 | 印度 | 整体方案 pilot | 待对接 |
| **WildLabs (WWF 下属)** | 生物保护社群，研究资金来源，已聚大量技术/应用 | (社群) | 入网+曝光+lead | 渠道 |
| **Arm** | WildLabs 常年金主（WILDLABS Awards 2026） | — | 借 Award 蹭流量/联合 | 渠道 |

**技术彩蛋**：有可去风扰、超远距离声音采集技术 → 方案2 声学的差异化武器。

---

# 附录 C · Seeed 5 大多模态 AI 方案（CV/LLM/VLM/STT/TTS）

1. **方案1 CV+VLM** — 全天候无干扰动物步态与运动损伤量化（ReCamera+XIAO+Recomputer）。
2. **方案2 STT+VLM+LLM** — 动物声纹行为与情绪应激智能研判（XIAO 声学+ReCamera 联动）。
3. **方案3 Tracker+Meshtastic+CV** — 长距离迁徙轨迹与种群迁徙（Tracker+Meshtastic+ReCamera）。
4. **方案4 多模态融合** — 种群社交行为与群体协作（ReCamera 阵列+Recomputer+XIAO）。
5. **方案5 气象+多模态** — 环境适配性运动与行为节律（气象站+ReCamera+Recomputer）。

全系硬件：ReCamera / Tracker / Meshtastic / 气象站 / Recomputer / XIAO 模组。边缘离线、无干扰、低功耗、野外无网无电可部署。

---

# 附录 D · 研究维度 × 方案 桥接矩阵（主页 credibility 核心）

> 把「研究者说的语言」(6 维度) 与「Seeed 卖的」(5 方案) 显式对上。主页 v0.1 必放。

| 传统研究维度 | 对应 Seeed 方案 / 产品 | 关键技术 |
|---|---|---|
| 个体识别与全生命周期追踪 | 方案3 + ColARid 联名开源项圈 | Tracker/Meshtastic + photo-ID/CV |
| 种群数量统计与动态监测 | 方案3/4 + Mothbox trap cam | CV 定点抓拍 + SECR 空间标记重捕 |
| 认知衰退与衰老行为 | 方案1 + 方案4 | CV+VLM 步态/社群纵向 |
| 声学监测 | 方案2 + 超远距去风扰声采 | STT+VLM 声纹，PAM/Audiomoth 升级 |
| 群体社交行为 | 方案4 | 多模态 + proximity logging |
| 栖息地环境与食源承载力 | 方案5 | 气象+多模态 + 遥感(NDVI) |

---

# 附录 E · 世界地图 pin 清单（v0.1 已有）

1. 巴拿马 Fab Lab — Mothbox（蛾子识别+trap cam）
2. 秘鲁 Fab Lab — Mothbox 延展
3. 黄石公园 — Mothbox/trap cam 延展
4. 不丹 Fab Lab — RiKAnet 老虎监测 + 全国 LoRa/Mesh
5. 西雅图 Fab Lab — Woodland Park 嗅觉 sensor
6. 印度 Fab Lab — LifeScience Trust 动物园 pilot
