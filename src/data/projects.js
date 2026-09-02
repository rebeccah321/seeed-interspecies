// ============================================================
// Interspecies — field projects / open research nodes
// Single source of truth: map pins, field stories, spec drawer.
// Text fields are bilingual { en, zh }; structural fields
// (id, coords, tone, tags, link…) are locale-independent.
// Use localizedProjects(locale) / localizedProject(p, locale)
// to obtain a flat, render-ready project.
// ============================================================

const STATUS_LABEL = {
  active: { en: 'Deployed', zh: '已部署' },
  open: { en: 'In Progress', zh: '进行中' },
  planned: { en: 'Open to Collaborate', zh: '开放共建' },
};

export const PROJECTS = [
  {
    id: 'tnc',
    no: '01',
    img: 'case-tnc.png',
    tone: 'active',
    coords: [22.49, 114.05],
    field: 'FIELD_01',
    featured: true,
    tags: ['SenseCAP 4G Data Logger', 'SenseCAP S700-C'],
    stats: [
      { val: { en: 'Deployed', zh: '已部署' }, lbl: { en: 'Status', zh: '状态' } },
      { val: '24/7', lbl: { en: 'Monitoring', zh: '监测' } },
    ],
    link: 'https://seeedstudio.feishu.cn/docx/ZxOadAzFZoSwOyxVEtQcuOzpnMe',
    name: { en: 'Wetland Restoration: Deep Bay', zh: '湿地生态恢复：后海湾' },
    status: { en: 'Phase 1 Running', zh: '一期稳定运行中' },
    location: { en: 'Deep Bay, Hong Kong', zh: '香港 · 后海湾' },
    telemetry: { en: '[ 22.49°N, 114.05°E ] // DEEP BAY, HONG KONG', zh: '[ 22.49°N, 114.05°E ] // 香港 · 后海湾' },
    desc: {
      en: 'An unattended monitoring network across tidal wetlands: SenseCAP 4G sensor nodes stream water quality, weather, and pond hydrology in real time, giving restoration teams continuous visibility between field visits.',
      zh: '针对潮间带湿地水质与水位的全天候监测方案：通过 SenseCAP 4G 节点持续采集水质、气象与鱼塘水文数据。生态修复团队无需频繁往返现场取样，在后台就能实时掌握潮汐消长与水质变化。',
    },
    linkText: { en: 'Read field dispatch →', zh: '阅读田野手记 →' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'SenseCAP 4G Data Logger', zh: 'SenseCAP 4G 数据采集网关' },
        role: { en: 'Streams water quality, meteorological, and pond level data over 4G, keeping restoration tracking continuous.', zh: '通过 4G 蜂窝网络实时回传水质、气温与水文参数，实现湿地生态恢复的全天候追踪。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'SenseCAP S700-C Weather Station', zh: 'SenseCAP S700-C 气象传感节点' },
        role: { en: 'All-in-one meteorological sensing covering microclimate changes across the pond cluster.', zh: '高集成度气象传感节点，全面监测塘区风速、风向、温湿度、气压与降雨。' },
      },
    ],
  },
  {
    id: 'bhutan',
    no: '02',
    img: 'case-bhutan.png',
    tone: 'active',
    coords: [27.51, 90.43],
    field: 'FIELD_02',
    featured: true,
    tags: ['Tracker', 'LoRa/Mesh', 'reCamera'],
    stats: [
      { val: { en: 'Nationwide', zh: '全国范围' }, lbl: { en: 'Scope', zh: '覆盖范围' } },
      { val: { en: '2026 Q4', zh: '2026 Q4' }, lbl: { en: 'Validation', zh: '验证节点' } },
    ],
    link: '',
    name: { en: 'Bhutan Tiger Conservation', zh: '不丹山林老虎监测' },
    status: { en: 'Framework Prototyping', zh: '方案原型测试中' },
    location: { en: 'Bhutan FabLab', zh: '不丹 FabLab' },
    telemetry: { en: '[ 27.51°N, 90.43°E ] // BHUTAN FABLAB', zh: '[ 27.51°N, 90.43°E ] // 不丹 FabLab' },
    desc: {
      en: 'A mountain-adapted tiger tracking network designed for Bhutan: pairing lightweight GPS collars and a rugged LoRa/Mesh backbone with reCamera edge vision to identify individual tigers by stripe pattern. Currently in framework prototyping and lab testing.',
      zh: '针对不丹复杂山地生态设计的老虎监测系统：结合轻量级 GPS 追踪项圈、穿透高山峡谷的低功耗 LoRa/Mesh 自组网骨干，以及搭载端侧视觉 AI 的 reCamera 智能相机，通过虎纹独特性实现无感个体识别。项目目前处于架构验证与原型测试阶段。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'GPS Collar Tracker', zh: 'GPS 追踪项圈' },
        role: { en: 'High-accuracy coordinates reported from collared tigers traversing rugged mountain corridors.', zh: '为佩戴轻便项圈的野生老虎提供高精度经纬度回传。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'LoRa / Mesh Backbone', zh: 'LoRa / Mesh 骨干中继' },
        role: { en: 'Low-power mesh relays linking deep Himalayan valleys where cellular coverage is absent.', zh: '针对喜马拉雅高山峡谷设计的低功耗无线自组网，解决无公网覆盖区域的数据中继难题。' },
      },
      {
        tag: 'HW-03',
        label: { en: 'reCamera Edge Vision', zh: 'reCamera 边缘视觉相机' },
        role: { en: 'On-device vision model that matches individual tigers by their unique stripe patterns.', zh: '端侧 AI 图像识别模块，通过每只老虎独一无二的身体条纹实现自动个体重识别。' },
      },
    ],
  },
  {
    id: 'mothbox-panama',
    no: '03',
    img: 'case-mothbox-panama.png',
    tone: 'active',
    coords: [8.98, -79.52],
    field: 'FIELD_03',
    featured: true,
    tags: ['reCamera', 'LoRa'],
    stats: [
      { val: { en: 'Deployed', zh: '已部署' }, lbl: { en: 'Status', zh: '状态' } },
      { val: { en: 'Edge AI', zh: '边缘 AI' }, lbl: { en: 'On device', zh: '端侧运行' } },
    ],
    link: 'https://mothbox.org',
    name: { en: 'Mothbox: Open Trap Camera', zh: 'Mothbox：开源诱虫相机' },
    status: { en: 'Deployed & Active', zh: '已部署运行' },
    location: { en: 'Panama City · Panama FabLab', zh: '巴拿马城 · 巴拿马 FabLab' },
    telemetry: { en: '[ 08.98°N, 79.52°W ] // PANAMA CITY FABLAB', zh: '[ 08.98°N, 79.52°W ] // 巴拿马城 FabLab' },
    desc: {
      en: 'An open-source, automated light-trap camera designed for nocturnal rainforest insect surveys: reCamera runs on-device AI to photograph, count, and classify visiting moths in real time, saving hundreds of hours of manual photo review. Fully open-source and easily built in local Fab Labs.',
      zh: '专为热带雨林夜行昆虫调查打造的开源诱虫相机系统：利用 reCamera 搭载的高分辨率端侧视觉 AI 对飞入幕布的蛾类进行自动拍照、分类与计数，省去研究人员数周的人工翻图时间。结构全部采用开源设计，方便全球 Fab Lab 随处制作。',
    },
    linkText: { en: 'mothbox.org →', zh: 'mothbox.org →' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'reCamera Edge AI', zh: 'reCamera 端侧 AI' },
        role: { en: 'On-device vision identifies and counts insect species at the moment of capture, eliminating manual cataloging backlogs.', zh: '端侧 AI 视觉算法在拍摄瞬间完成蛾类检测与计数，将繁重的图片筛查工作前置到拍摄现场。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'LoRa Telemetry', zh: 'LoRa 远距离回传' },
        role: { en: 'Long-range, ultra-low-power radio transmitting daily population summaries and key frames out of dense canopy sites.', zh: '超低功耗远距离无线回传，将每日昆虫统计摘要与重点图像特征送出密林。' },
      },
    ],
  },
  {
    id: 'mothbox-peru',
    no: '04',
    img: 'case-mothbox-peru.png',
    tone: 'planned',
    coords: [-9.19, -75.02],
    field: 'FIELD_04',
    tags: ['reCamera', 'LoRa'],
    stats: [{ val: { en: 'Open to Collaborate', zh: '开放共建' }, lbl: { en: 'Status', zh: '状态' } }],
    link: '',
    name: { en: 'Mothbox: Peru Rainforest', zh: 'Mothbox：秘鲁亚马逊雨林' },
    status: { en: 'Planning & Replication', zh: '方案复刻筹备中' },
    location: { en: 'Peru FabLab', zh: '秘鲁 FabLab' },
    telemetry: { en: '[ 09.19°S, 75.02°W ] // PERU FABLAB', zh: '[ 09.19°S, 75.02°W ] // 秘鲁 FabLab' },
    desc: {
      en: 'Bringing the Mothbox open light-trap architecture to the Peruvian Amazon: fabricated locally by regional Fab Labs to monitor nocturnal insect populations across hyper-diverse Neotropical habitats.',
      zh: '计划将 Mothbox 开源诱虫相机引入秘鲁亚马逊流域：依托当地 Fab Lab 就地加工制作，为新热带界生物多样性热点区域提供低成本、高精度的夜间昆虫自动监测支持。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera Edge AI', zh: 'reCamera 端侧 AI' }, role: { en: 'Field-proven open trap-camera vision stack, housed in a tropical moisture-sealed enclosure.', zh: '沿用巴拿马站经过野外验证的端侧视觉诱虫方案，适配雨林高湿环境。' } },
      { tag: 'HW-02', label: { en: 'LoRa Telemetry', zh: 'LoRa 远距离回传' }, role: { en: 'Low-power telemetry engineered for unattended, off-grid research outposts in the Amazon.', zh: '适用于无人值守偏远雨林科考站的超长续航遥测模块。' } },
    ],
  },
  {
    id: 'mothbox-yellowstone',
    no: '05',
    img: 'case-mothbox-yellowstone.png',
    tone: 'planned',
    coords: [44.6, -110.5],
    field: 'FIELD_05',
    tags: ['reCamera', 'LoRa'],
    stats: [{ val: { en: 'Open to Collaborate', zh: '开放共建' }, lbl: { en: 'Status', zh: '状态' } }],
    link: '',
    name: { en: 'Mothbox: Yellowstone', zh: 'Mothbox：黄石国家公园' },
    status: { en: 'Planning & Hardening', zh: '高寒适应性规划中' },
    location: { en: 'Yellowstone, USA', zh: '美国 · 黄石' },
    telemetry: { en: '[ 44.60°N, 110.50°W ] // YELLOWSTONE, USA', zh: '[ 44.60°N, 110.50°W ] // 美国 · 黄石' },
    desc: {
      en: 'Adapting the Mothbox architecture for high-elevation temperate ecosystems in Yellowstone: hardened for sub-zero winters to track how insect population baselines respond to seasonal and climate shifts.',
      zh: 'Mothbox 开源相机在北美高寒温带森林的拓展计划：针对黄石严苛的高原温差与漫长冬季优化供电与防护，长效评估温带昆虫群落随气候变化的迁移趋势。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera Edge AI', zh: 'reCamera 端侧 AI' }, role: { en: 'Edge AI models tuned for North American temperate insect families.', zh: '针对北美温带常见蛾类与飞虫训练的轻量化端侧识别模型。' } },
      { tag: 'HW-02', label: { en: 'Sub-Zero LoRa Telemetry', zh: '耐寒 LoRa 遥测' }, role: { en: 'Cold-tolerant solar power management and LoRa link built to survive sub-zero mountain winters.', zh: '低功耗遥测系统与耐寒太阳能管理单元，确保设备在冰雪覆盖期持续运行。' } },
    ],
  },
  {
    id: 'olfactory',
    no: '06',
    img: 'case-olfactory.png',
    tone: 'open',
    coords: [47.63, -122.33],
    field: 'FIELD_06',
    tags: ['Seeed Fusion'],
    stats: [{ val: { en: 'In Progress', zh: '进行中' }, lbl: { en: 'Status', zh: '状态' } }],
    link: '',
    name: { en: 'Olfactory Bio-Sensor', zh: '仿生生物嗅觉传感器' },
    status: { en: 'Lab-to-Field Prototyping', zh: '实验室工程化打样中' },
    location: { en: 'Seattle FabLab', zh: '西雅图 FabLab' },
    telemetry: { en: '[ 47.63°N, 122.33°W ] // SEATTLE FABLAB', zh: '[ 47.63°N, 122.33°W ] // 西雅图 FabLab' },
    desc: {
      en: 'A biomimetic mammalian olfactory sensing prototype: converting benchtop bio-chemical research into field-hardened hardware. With Seeed Fusion, we are bridging the gap between delicate lab prototypes and robust, small-batch devices ready for wild deployments.',
      zh: '由科研团队研发的仿生哺乳动物嗅觉传感原型：通过模拟动物气味受体识别微量挥发物。借助 Seeed Fusion 敏捷制造服务，我们正在帮助研究团队将精密的实验台电路板，打造成能够在野外泥泞环境中稳定工作的模块化硬件。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'MF-01', label: { en: 'Seeed Fusion Agile Manufacturing', zh: 'Seeed Fusion 敏捷制造' }, role: { en: 'Agile PCB manufacturing, component sourcing, and enclosure prototyping to transition sensitive lab research into rugged field gear.', zh: '提供从小批量 PCB 制板、元器件配齐到外壳定制的一站式柔性制造，加速前沿科研成果走向旷野。' } },
    ],
  },
  {
    id: 'collarid',
    no: '07',
    img: 'case-collarid.png',
    tone: 'planned',
    coords: [42.36, -71.09],
    field: 'FIELD_07',
    tags: ['Tracker', 'Meshtastic', 'reCamera', 'Seeed Fusion'],
    stats: [{ val: { en: 'Open to Collaborate', zh: '开放共建' }, lbl: { en: 'Status', zh: '状态' } }],
    link: '',
    name: { en: 'CollarID: MIT Media Lab', zh: 'CollarID：MIT 媒体实验室' },
    status: { en: 'Co-Design & Exploration', zh: '联合设计探索阶段' },
    location: { en: 'Boston, USA', zh: '美国 · 波士顿' },
    telemetry: { en: '[ 42.36°N, 71.09°W ] // BOSTON, USA', zh: '[ 42.36°N, 71.09°W ] // 美国 · 波士顿' },
    desc: {
      en: 'An open-source, affordable wildlife tracking collar initiated by MIT Media Lab: challenging high commercial collar costs by pairing GPS, Meshtastic peer-to-peer radio, and visual re-identification. Supported by Seeed Fusion to bring open research designs into small-batch production.',
      zh: '由 MIT 媒体实验室发起的开源多物种追踪项圈项目：旨在打破商业项圈数千美元的昂贵垄断，整合轻量 GPS、Meshtastic 开放点对点网状通信与视觉辅助重识别。Seeed Fusion 为其提供开放设计转化与小批量工程制造支持。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'GPS Collar Tracker', zh: 'GPS 追踪模块' }, role: { en: 'Lightweight, low-power GPS positioning optimized for battery life across diverse wildlife species.', zh: '轻量级低功耗 GPS 模块，兼顾长效续航与定位精度，适配多种体型的野生动物。' } },
      { tag: 'HW-02', label: { en: 'Meshtastic Radio', zh: 'Meshtastic 自组网电台' }, role: { en: 'Open-source Meshtastic mesh radio facilitating collar-to-collar and collar-to-gateway multihop relays.', zh: '基于开源 Meshtastic 协议的点对点网状电台，支持项圈之间以及项圈到网关的多跳自组网数据中继。' } },
      { tag: 'HW-03', label: { en: 'reCamera Cross-Check', zh: 'reCamera 视觉核验相机' }, role: { en: 'Fixed camera stations that pair collar telemetry with high-resolution visual confirmation at crossing points.', zh: '在固定投喂点或水源处部署视觉相机，将动物项圈数据与现场高清抓拍精准关联。' } },
      { tag: 'MF-01', label: { en: 'Seeed Fusion Manufacturing', zh: 'Seeed Fusion 制造支持' }, role: { en: 'Engineering optimization, component sourcing, and small-batch manufacturing for MIT’s open hardware.', zh: '为 MIT 团队的开源设计提供快速工程化、物料配齐与小批量制造通道。' } },
    ],
  },
  {
    id: 'lifescience',
    no: '08',
    img: 'case-lifescience.png',
    tone: 'planned',
    coords: [19.08, 72.88],
    field: 'FIELD_08',
    tags: ['reCamera', 'Tracker', 'SenseCAP Weather Station', 'Acoustic Sensors'],
    stats: [{ val: { en: 'Open to Collaborate', zh: '开放共建' }, lbl: { en: 'Status', zh: '状态' } }],
    link: '',
    name: { en: 'LifeScience Zoo Pilot', zh: '生命科学动物园监测实验' },
    status: { en: 'Pilot Co-Creation', zh: '试点共建筹备中' },
    location: { en: 'India', zh: '印度' },
    telemetry: { en: '[ 19.08°N, 72.88°E ] // INDIA', zh: '[ 19.08°N, 72.88°E ] // 印度' },
    desc: {
      en: 'A collaborative pilot for zoo-based multi-species observation: instead of delivering proprietary, closed devices, we establish an in-zoo Fab Lab paired with open hardware modules, empowering keepers and researchers to build and iterate custom monitoring tools on site.',
      zh: '在动物园开展的多物种行为与生境监测试点：我们并非直接交付封闭的商业设备，而是在园内建立联合 Fab Lab 创客工坊，结合视觉、声学与气象开源套件，让饲养员与科研人员能够亲手定制、组装并持续改进最适合动物特性的监测工具。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera Edge Vision', zh: 'reCamera 边缘视觉相机' }, role: { en: 'Non-invasive edge vision cameras monitoring animal activity cycles and sleep patterns in enclosures.', zh: '部署在兽舍与活动场的低侵入式边缘视觉相机，无感分析动物作息与活动节律。' } },
      { tag: 'HW-02', label: { en: 'Activity Tracker', zh: '活动量追踪器' }, role: { en: 'Compact motion and position logger mapping movement patterns within dynamic enclosures.', zh: '轻型定位与活动量记录模块，追踪动物在栖息环境中的位移轨迹。' } },
      { tag: 'HW-03', label: { en: 'SenseCAP Weather Station', zh: 'SenseCAP 气象站' }, role: { en: 'Continuous ambient logging (temperature, humidity, light) to correlate behavior with microclimate shifts.', zh: '实时采集温湿度、光照、气压等环境参数，为动物异常行为提供气象对照。' } },
      { tag: 'HW-04', label: { en: 'Bioacoustic Sensors', zh: '生物声学传感器' }, role: { en: 'Continuous audio capture to detect vocal distress, night calls, and communication patterns.', zh: '全天候拾音阵列，捕捉并分析夜间叫声、异常嘶鸣与求偶信号。' } },
      { tag: 'MF-01', label: { en: 'In-Zoo Fab Lab', zh: '园内 Fab Lab 创客工坊' }, role: { en: 'An on-site maker space enabling zoo staff and biologists to rapidly modify, repair, and iterate monitoring hardware.', zh: '在动物园现场设立开放工坊，让科研人员随时根据实际需求修改外壳、更换传感器或打样测试。' } },
    ],
  },
];

// ---------- Localization helpers ----------

const pick = (v, locale) => (v && typeof v === 'object' ? (v[locale] ?? v.en) : v);

export function localizedProject(p, locale) {
  return {
    ...p,
    name: pick(p.name, locale),
    status: pick(p.status, locale),
    location: pick(p.location, locale),
    telemetry: pick(p.telemetry, locale),
    desc: pick(p.desc, locale),
    linkText: pick(p.linkText, locale),
    specs: p.specs?.map((s) => ({ ...s, label: pick(s.label, locale), role: pick(s.role, locale) })) ?? [],
    stats: p.stats?.map((s) => ({ ...s, val: pick(s.val, locale), lbl: pick(s.lbl, locale) })) ?? [],
  };
}

export function localizedProjects(locale) {
  return PROJECTS.map((p) => localizedProject(p, locale));
}

export function statusLabel(tone, locale) {
  return STATUS_LABEL[tone]?.[locale] ?? STATUS_LABEL[tone]?.en ?? tone;
}
