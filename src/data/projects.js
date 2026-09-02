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
    status: { en: 'Phase 1 Running', zh: '一期运行中' },
    location: { en: 'Deep Bay, Hong Kong', zh: '香港 · 后海湾' },
    telemetry: { en: '[ 22.49°N, 114.05°E ] // DEEP BAY, HONG KONG', zh: '[ 22.49°N, 114.05°E ] // 香港 · 后海湾' },
    desc: {
      en: 'A continuous monitoring system for a dynamic tidal wetland: SenseCAP 4G returns water-quality, weather, and pond conditions so restoration can be evaluated between site visits instead of only from periodic samples.',
      zh: '面向动态潮汐湿地的连续监测系统：SenseCAP 通过 4G 回传水质、气象与塘况，让恢复成效在两次实地探访之间即可评估，而不必依赖周期性采样。',
    },
    linkText: { en: 'Read blog →', zh: '阅读博文 →' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'SenseCAP 4G Data Logger', zh: 'SenseCAP 4G 数采网关' },
        role: { en: 'Continuous return of water-quality, weather, and pond conditions over 4G. Restoration progress is tracked continuously.', zh: '通过 4G 持续回传水质、气象与塘况，实现生态恢复成效的全天候追踪。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'SenseCAP S700-C', zh: 'SenseCAP S700-C 气象站' },
        role: { en: 'Seven-in-one weather sensing across the pond cluster.', zh: '覆盖塘群的多合一气象感知。' },
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
      { val: { en: 'Nationwide', zh: '全国范围' }, lbl: { en: 'Scope', zh: '范围' } },
      { val: { en: '2026 Q4', zh: '2026 Q4' }, lbl: { en: 'Validation', zh: '验证' } },
    ],
    link: '',
    name: { en: 'Bhutan Tiger Conservation', zh: '不丹山林老虎监测' },
    status: { en: 'Framework Building', zh: '框架搭建中' },
    location: { en: 'Bhutan FabLab', zh: '不丹 FabLab' },
    telemetry: { en: '[ 27.51°N, 90.43°E ] // BHUTAN FABLAB', zh: '[ 27.51°N, 90.43°E ] // 不丹 FabLab' },
    desc: {
      en: 'A nationwide tiger monitoring framework combining GPS trackers, a low-power LoRa/Mesh backbone for mountainous terrain, and reCamera computer vision for stripe-based re-identification. The framework is in progress; field results are not yet available.',
      zh: '覆盖全国的老虎监测框架：GPS 追踪器、面向山地地形的低功耗 LoRa/Mesh 骨干网络，以及用于条纹个体重识别的 reCamera 计算机视觉。框架仍在推进中，尚无野外实测结果。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'GPS Tracker', zh: 'GPS 追踪器' },
        role: { en: 'Position reporting from collared tigers across Bhutan’s mountainous terrain.', zh: '回传佩戴项圈的老虎在不丹山地间的位置。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'LoRa / Mesh backbone', zh: 'LoRa / Mesh 骨干网络' },
        role: { en: 'Low-power long-range link between mountain valleys where conventional networks do not reach.', zh: '在常规网络无法覆盖的山谷之间提供低功耗远程链路。' },
      },
      {
        tag: 'HW-03',
        label: { en: 'reCamera', zh: 'reCamera' },
        role: { en: 'Edge computer vision for stripe-based individual re-identification.', zh: '边缘计算机视觉，基于虎纹进行个体重识别。' },
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
    status: { en: 'Deployed', zh: '已部署' },
    location: { en: 'Panama City · Panama FabLab', zh: '巴拿马城 · 巴拿马 FabLab' },
    telemetry: { en: '[ 08.98°N, 79.52°W ] // PANAMA CITY FABLAB', zh: '[ 08.98°N, 79.52°W ] // 巴拿马城 FabLab' },
    desc: {
      en: 'An open-source insect trap camera built around reCamera edge AI and LoRa return. It automates moth and general insect counting, reduces manual image review, and is designed to be replicated by Fab Labs.',
      zh: '基于 reCamera 边缘 AI 与 LoRa 回传的开源诱虫相机。它自动完成蛾类及一般昆虫计数、减少人工翻图，并为 Fab Lab 的规模化复制而设计。',
    },
    linkText: { en: 'mothbox.org →', zh: 'mothbox.org →' },
    specs: [
      {
        tag: 'HW-01',
        label: { en: 'reCamera', zh: 'reCamera' },
        role: { en: 'Edge AI identifies and counts moths directly on the device, cutting manual review time.', zh: '端侧 AI 在设备上完成蛾类识别与计数，大幅减少人工翻图。' },
      },
      {
        tag: 'HW-02',
        label: { en: 'LoRa return', zh: 'LoRa 回传' },
        role: { en: 'Low-power link carries counts and key frames out of the trap site.', zh: '低功耗链路把计数与关键帧送出陷阱现场。' },
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
    name: { en: 'Mothbox: Peru Rainforest', zh: 'Mothbox：秘鲁雨林' },
    status: { en: 'Planned', zh: '规划中' },
    location: { en: 'Peru FabLab', zh: '秘鲁 FabLab' },
    telemetry: { en: '[ 09.19°S, 75.02°W ] // PERU FABLAB', zh: '[ 09.19°S, 75.02°W ] // 秘鲁 FabLab' },
    desc: {
      en: 'A planned Mothbox replication for Neotropical insect monitoring, extending the same open trap-camera approach to another regional Fab Lab deployment.',
      zh: '计划中的 Mothbox 复制部署，面向新热带区昆虫监测，把同一套开源诱虫相机方案延伸到另一个区域 Fab Lab。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera', zh: 'reCamera' }, role: { en: 'Same open trap-camera edge AI as the Panama build.', zh: '与巴拿马部署相同的开源诱虫相机边缘 AI。' } },
      { tag: 'HW-02', label: { en: 'LoRa return', zh: 'LoRa 回传' }, role: { en: 'Low-power telemetry for unattended field sites.', zh: '面向无人值守野外站点的低功耗遥测。' } },
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
    status: { en: 'Planned', zh: '规划中' },
    location: { en: 'Yellowstone, USA', zh: '美国 · 黄石' },
    telemetry: { en: '[ 44.60°N, 110.50°W ] // YELLOWSTONE, USA', zh: '[ 44.60°N, 110.50°W ] // 美国 · 黄石' },
    desc: {
      en: 'A planned North American extension of the Mothbox open trap-camera model for continued insect biodiversity monitoring.',
      zh: 'Mothbox 开源诱虫相机在北美的计划延伸，用于持续的昆虫生物多样性监测。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera', zh: 'reCamera' }, role: { en: 'Open trap-camera edge AI, replicated for North American sites.', zh: '为北美站点复制的开源诱虫相机边缘 AI。' } },
      { tag: 'HW-02', label: { en: 'LoRa return', zh: 'LoRa 回传' }, role: { en: 'Low-power telemetry across long winters.', zh: '跨越漫长冬季的低功耗遥测。' } },
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
    name: { en: 'Olfactory Bio-Sensor', zh: '生物嗅觉传感器' },
    status: { en: 'Open', zh: '开放中' },
    location: { en: 'Seattle FabLab', zh: '西雅图 FabLab' },
    telemetry: { en: '[ 47.63°N, 122.33°W ] // SEATTLE FABLAB', zh: '[ 47.63°N, 122.33°W ] // 西雅图 FabLab' },
    desc: {
      en: 'A lab-built mammalian olfactory sensing prototype being explored for manufacture through Seeed Fusion, addressing the gap between a working research prototype and a reproducible field-ready device.',
      zh: '实验室自制的哺乳动物嗅觉传感原型，正探索经由 Seeed Fusion 走向制造，填补「可运行的研究原型」与「可复制的野外就绪设备」之间的鸿沟。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'MF-01', label: { en: 'Seeed Fusion', zh: 'Seeed Fusion' }, role: { en: 'The bridge from a working lab prototype to a reproducible, field-ready small-batch device.', zh: '从可运行的实验室原型通往可复制、可就绪的小批量设备的桥梁。' } },
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
    status: { en: 'Intent', zh: '意向阶段' },
    location: { en: 'Boston, USA', zh: '美国 · 波士顿' },
    telemetry: { en: '[ 42.36°N, 71.09°W ] // BOSTON, USA', zh: '[ 42.36°N, 71.09°W ] // 美国 · 波士顿' },
    desc: {
      en: "A proposed open, low-cost, multi-species tracking collar combining GPS, Meshtastic communication, and computer-vision re-identification, with Seeed Fusion supporting the path from MIT's open design to small-batch manufacture.",
      zh: '提议中的开源低成本多物种追踪项圈：融合 GPS、Meshtastic 通信与计算机视觉重识别，并由 Seeed Fusion 支持从 MIT 开源设计走向小批量制造。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'GPS Tracker', zh: 'GPS 追踪器' }, role: { en: 'Open multi-species position reporting.', zh: '开源的多物种位置回报。' } },
      { tag: 'HW-02', label: { en: 'Meshtastic', zh: 'Meshtastic' }, role: { en: 'Open mesh radio for collar-to-collar and collar-to-gateway relays.', zh: '开源 Mesh 电台，支持项圈之间以及项圈到网关的中继。' } },
      { tag: 'HW-03', label: { en: 'reCamera', zh: 'reCamera' }, role: { en: 'Computer-vision re-identification pairs sightings with collar data.', zh: '计算机视觉重识别，将目击记录与项圈数据配对。' } },
      { tag: 'MF-01', label: { en: 'Seeed Fusion', zh: 'Seeed Fusion' }, role: { en: 'Small-batch manufacture path for MIT’s open design.', zh: '为 MIT 的开源设计提供小批量制造路径。' } },
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
    name: { en: 'LifeScience Zoo Pilot', zh: 'LifeScience 动物园试点' },
    status: { en: 'Intent', zh: '意向阶段' },
    location: { en: 'India', zh: '印度' },
    telemetry: { en: '[ 19.08°N, 72.88°E ] // INDIA', zh: '[ 19.08°N, 72.88°E ] // 印度' },
    desc: {
      en: 'A proposed zoo pilot for multi-species monitoring. Rather than supplying a single sensor, it combines technology selection, hardware, and an in-zoo Fab Lab so the zoo can build and iterate its own monitoring devices.',
      zh: '提议中的动物园多物种监测试点。它不是交付一台传感器，而是整合技术选型、硬件与园内 Fab Lab，让动物园能够自行搭建并迭代自己的监测设备。',
    },
    linkText: { en: '', zh: '' },
    specs: [
      { tag: 'HW-01', label: { en: 'reCamera', zh: 'reCamera' }, role: { en: 'Edge vision for multi-species enclosures.', zh: '面向多物种兽舍的边缘视觉。' } },
      { tag: 'HW-02', label: { en: 'Tracker', zh: '追踪器' }, role: { en: 'Animal position and movement within the zoo.', zh: '园内动物的位置与活动。' } },
      { tag: 'HW-03', label: { en: 'SenseCAP Weather Station', zh: 'SenseCAP 气象站' }, role: { en: 'Environmental context for behaviour records.', zh: '为行为记录提供环境上下文。' } },
      { tag: 'HW-04', label: { en: 'Acoustic Sensors', zh: '声学传感器' }, role: { en: 'Vocalisation capture for multi-species monitoring.', zh: '面向多物种监测的鸣声采集。' } },
      { tag: 'MF-01', label: { en: 'In-zoo Fab Lab', zh: '园内 Fab Lab' }, role: { en: 'The zoo builds and iterates its own devices instead of procuring sealed products.', zh: '动物园自建并迭代设备，而非采购封闭产品。' } },
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
