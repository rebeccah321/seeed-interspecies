# Interspecies 落地页 v0.1 — 内容来源矩阵

> 逐区回答：放什么内容 / 现有素材在哪 / 缺什么 / 缺的从哪找 / 谁负责。
> 产品线市场经理 lead 整页搭建；Becca 协同。下表"负责人"列即两人 + Allen 的分工。

---

## 总判断：已有 vs 必须新造

- **已有（直接可用，量最大）**：①《Seeed Advanced Technology for Animal Research》5 套方案全文 ②《Animal Research in the wild》6 块研究方法全文 ③ 8 个合作伙伴清单（名字/地点/技术/链接）④ interspecies.io Data Logger Project 官方描述 ⑤ Seeed 全系产品（reCamera/Tracker/Meshtastic/气象站/Recomputer/XIAO）规格页。这五样撑起「技术框架 + Challenges 线索 + 应用场景」三区，几乎不用新写，只需压编+映射。
- **必须新造（最大缺口）**：① 每个案例的真实细节 + 照片/视频 + 授权 ② hero 演示短片（90 秒关键帧 vs SD 卡）③ 技术架构图（感知→边缘AI→回传→云）④ Open Datalogger GitHub repo（Allen，可能未就绪）⑤ 表单/地图交互。前四样是"图片+视频+代码"类，不是"再写文案"能解决的。

**单一最高杠杆动作**：向 8 个合作方发一封结构化征集信（案例细节 + 3–5 张照片/视频授权 + 一句引用语）。案例区、Challenges 区、hero 视觉都靠这一步喂饱。

---

## 逐区矩阵

### 1. 简介 / Hero
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 定位一句话 | 有 · Playbook 定位句 | — | — | Becca |
| Hero 副承诺(反盗猎 90 秒) | 有 · 叙事已定 | 演示短片未拍 | Allen 拍 30–60s reCamera+P1 Pro 关键帧告警 demo | Allen |
| 信任行(MIT/Interspecies/FabLab/开源) | 部分 · interspecies.io 描述有 | "合作伙伴"身份未确认 | 向 interspecies.io 申请 Partners 名单占格 | Becca |
| 双 CTA | 有 | 链接目标页待建 | join/challenges 锚点即可 | 搭页者 |

### 2. 应用场景（4 卡）
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 4 类场景文案 | 有 · 你给的 4 类 | 每卡"Seeed 能干什么"一句 | 产品→场景映射，从 5 套方案抽 | Becca+产品线 |
| 场景配图/图标 | 部分 · V2 图(打不开) | 4 张场景视觉 | 设计师做 illustration；V2 图若可用放第1卡 | 设计 |
| 每卡链到对应案例 | 有 · 案例区 | — | — | Becca |

### 3. 案例 + 世界地图
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 8 个 pin 名/地点/技术/合作方 | 有 · 合作伙伴清单 | 精确经纬度、案例细节、结果数据、照片 | **合作方征集信**；RiKAnet/不丹查公开资料 | Becca |
| 每卡照片授权 | 无 | 全缺 | 合作方授权 + Seeed 自有案例库(blog/wiki) | Becca |
| Seeed 既有动物研究案例 | 待查 | 不确定有没有 | 翻 Seeed blog/wiki/case 库，能补几个补几个 | Becca+产品线 |
| 世界地图交互 | 无(占位) | 交互地图 | v0.1 静态图先发；v0.2 用 leaflet/mapbox + pin JSON | 搭页者 |

### 4. 技术框架
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 架构图(感知→边缘AI→回传→云) | 层级+产品名有 | 设计成图 | 产品线市场出架构图；设计师出图 | **产品线市场(lead)** |
| Open Datalogger 中间件 callout | 概念有 | GitHub repo 未就绪 | Allen 建 repo + README+quickstart | Allen |
| 5 套能力(各一行) | 有 · 5 套方案全文 | 压成一行+硬件清单 | 直接压编原文 | 产品线市场 |
| 脊柱映射表(6 痛→6 方案) | 有 · 我已起草(蓝图里) | Seeed 工程侧校验 | 找工程/产品确认映射准确 | 产品线市场 |
| 3 条差异化 | 有 | — | — | 产品线市场 |

### 5. Challenges（线索→方案→案例）
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 5 条种子线索 | 有 · 合作方需求逐条转 | 每条结构化(问题/地点/物种/约束) | 从合作方对话整理 | Becca |
| 对应解决方案 | 有 · 合作方 build | 状态/进度 | 与合作方确认进度 | Becca |
| 社区提交机制 | 无 | 提交系统 | GitHub issue 模板(Allen 建)或简单表单 | Allen+Becca |

### 6. 项目（参与/发起/关注）
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| GitHub 链接 | 待建 | repo 未就绪 | Allen 建 repo | Allen |
| Slack 社群 | 有 · interspecies.io 已有 Slack | 链接/入群话术 | 向 interspecies.io 拿社群入口 | Becca |
| Replicate kit 入口 | 概念有 | BOM/固件/CAD/guide 文档 | Allen 产出复制包文档 | Allen |
| 发起表单 | 无 | 提交表单 | 简单表单工具 | Becca |

### 7. 联系（分类路由）
| 内容 | 已有(源) | 缺口 | 从哪找 | 负责人 |
|---|---|---|---|---|
| 身份→owner 路由 | 有 · 分工已定 | 路由表单 | 表单工具，按身份分流到 Becca/产品线/Allen 邮箱 | Becca |
| Press kit | 无 | 全缺 | 组装(logo+factsheet+hero 图) | 市场 |

---

## 缺口优先级与最快解法

| 优先级 | 缺口 | 最快解法 |
|---|---|---|
| P0 | GitHub repo 不就绪 → 中间件 callout + 参与/关注都悬空 | Allen 先建 repo 占位 + README + 一条 quickstart，哪怕功能未全 |
| P0 | 案例细节/照片全缺 → 案例+地图区空转 | 立刻向 8 合作方发征集信(模板见下) |
| P1 | 架构图未设计 → 技术框架区空 | 产品线市场出文字架构，设计师出图 |
| P1 | hero 短片未拍 → hero 空心 | Allen 拍 60s 关键帧告警 demo |
| P2 | 地图交互 | v0.1 用静态图，别卡这 |
| P2 | 表单/press kit | 任意表单工具先上 |

---

## 合作方征集信模板（最高杠杆动作）

致 [合作方]，Seeed 正在搭 Interspecies 开源平台落地页，想把你列为 featured case。需要：
1. 一段案例描述（你解决了什么物种/什么问题/用了什么技术/关键结果数字）
2. 3–5 张田野照片或短视频（带可授权 Seeed + Interspecies 项目使用的说明）
3. 一句你愿意公开的引用语
4. 精确部署地点（地图 pin 用，可只给到保护区级）
作为回报：你将出现在世界地图、Challenges 解决方案栏，并获得 Seeed 量产/工程支持优先权。
