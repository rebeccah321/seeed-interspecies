// ============================================================
// i18n — UI strings for the Digital Field Journal.
// en is the default locale (no prefix); zh lives under /zh/.
// Telemetry-style mono annotations (coordinates, FIG labels)
// intentionally stay locale-neutral or English by convention.
// ============================================================

export const LOCALES = ['en', 'zh'];

export function isLocale(v) {
  return LOCALES.includes(v);
}

export const UI = {
  en: {
    nav: {
      chapters: 'Chapters',
      prologue: 'Prologue',
      field: 'Field',
      map: 'Map',
      manifesto: 'Manifesto',
    },
    prologue: {
      signal: 'SIGNAL // 3.8 BILLION YEARS',
      title: ['Technology for', 'Interspecies Understanding'],
      epigraph: 'Life has been broadcasting signals for millions of years. We are now building the open tools to listen.',
      scroll: 'Scroll',
      head: '01 / Prologue: The Honeyguide Protocol',
      leadBefore: 'In Mozambique, a wild bird called the ',
      leadAfter: ' leads human honey-hunters straight to hidden bees’ nests. It calls, people follow, and both share the prize. This partnership has flourished for generations across sub-Saharan Africa—between two species that never shared a spoken language, yet share an unbroken protocol.',
      s1: 'This is not folklore; it is documented science. Interspecies communication has always existed in the wild, but for centuries it remained isolated—alive only in fragile, localized human traditions.',
      s2: 'Today, low-power edge AI, open hardware, and long-range mesh networks give us a new way forward. We are not speaking for nature—we are building open, reproducible tools so researchers and conservationists can hear its signals clearly.',
      honeyguide: 'honeyguide',
      beats: [
        { n: '01', h: 'Cross-species dialogue is ancient and real.', p: 'From honeyguides guiding hunters in Africa to dolphins helping artisanal fishermen in Brazil, mutual understanding across species has deep biological roots.' },
        { n: '02', h: 'Ecosystems broadcast signals every second.', p: 'Vocalizations, migration paths, water chemistry, and canopy microclimates: the living world continuously transmits vital environmental pulses.' },
        { n: '03', h: 'We can now listen continuously in the wild.', p: 'Low-power edge AI, solar-assisted sensor nodes, and mesh networks make unattended, round-the-clock field perception affordable and practical.' },
        { n: '04', h: 'Open-source tools for living nature.', p: 'Seeed provides the open hardware foundation that gives field biologists, rangers, and community makers the freedom to adapt and deploy on their own terms.' },
      ],
      footnote: 'The greater honeyguide (Indicator indicator) uses distinct vocal calls to guide human honey-hunters to wild bees’ nests, feeding on leftover wax and larvae after the harvest. Documented extensively in Mozambique and across sub-Saharan Africa.',
    },
    field: {
      head: '02 / Field Dispatches',
      title: 'Dispatches from the wild',
      lead: 'Three active deployments testing open hardware in harsh environments: a coastal tidal wetland, a Himalayan mountain corridor, and a tropical rainforest canopy.',
      chainLabel: 'Signal chain / Hardware',
      locate: 'Locate on the map',
      fig: 'FIG',
      appendixHead: 'Appendix A: How Tech Powers Field Research',
      appendixLead: 'From manual clipboard surveys to autonomous edge devices: how open hardware is transforming six fundamental wildlife research domains.',
      domains: [
        { no: '01', name: 'Individual ID & Lifecycle Tracking', traditional: 'Invasive radio collars and stressful capture-recapture routines.', open: 'On-device vision recognizes natural patterns like tiger stripes and fin markings without human interference.', tags: 'CV · Edge AI' },
        { no: '02', name: 'Population Census & Trend Monitoring', traditional: 'Retrieving camera trap SD cards followed by weeks of manual photo sorting.', open: 'Solar edge cameras identify and count species on the spot, relaying compact reports over LoRaWAN.', tags: 'CV · LoRaWAN' },
        { no: '03', name: 'Behavioral & Ethological Analysis', traditional: 'Intermittent daylight watches that miss nocturnal activities and subtle stress signals.', open: 'Multi-sensor arrays run continuous audio and motion telemetry to detect early behavioral changes.', tags: 'Edge AI · Audio' },
        { no: '04', name: 'Bioacoustic Habitat Monitoring', traditional: 'Heavy audio recorders capturing terabytes of raw sound that take months of expert review.', open: 'Lightweight on-device acoustic models classify specific species calls directly in the canopy.', tags: 'Audio AI · Edge' },
        { no: '05', name: 'Territory Mapping & Social Networks', traditional: 'Point-in-time observations that fail to capture nocturnal territorial interactions.', open: 'Synchronized low-power mesh nodes trace territorial movement day and night.', tags: 'CV · Mesh' },
        { no: '06', name: 'Habitat Health & Microclimate Sensing', traditional: 'Periodic grab samples that frequently miss sudden runoff or temperature spikes.', open: 'Always-on solar sensor nodes stream water chemistry and weather metrics continuously.', tags: 'Sensors · IoT' },
      ],
      fieldwork: 'Traditional method',
      openHW: 'Open hardware approach',
    },
    pulse: {
      head: '03 / The Pulse: Open Research Nodes',
      title: 'Eight nodes, one open network',
      lead: 'From live field stations to emerging community pilots: every pin marks an open-source hardware deployment that research teams and Fab Labs can freely study, replicate, and improve.',
      index: 'Research nodes',
      legend: { all: 'All Nodes', active: 'Deployed', open: 'In Progress', planned: 'Open to Collaborate' },
      mapLabel: 'World map of research nodes',
    },
    manifesto: {
      head: '04 / Manifesto',
      title: ['Empowering Interspecies', 'Understanding.'],
      sub: 'Open technology built to listen, understand, and protect.',
      body: 'This is a community-driven collaboration between field biologists, embedded engineers, and local makers. No black boxes, no vendor lock-in. Schematics are open, bills of materials are public, and every field kit is designed to be built and repaired anywhere in the world.',
      principles: [
        { id: 'participate', no: '01', name: 'Participate', body: 'Help improve firmware, contribute mechanical CAD, test new sensor breakout boards, or assemble a field kit at your local Fab Lab.', cta: 'Explore open projects', href: 'https://github.com/Allenkzl' },
        { id: 'initiate', no: '02', name: 'Initiate', body: 'Facing a tough field monitoring challenge without off-the-shelf hardware? Tell us what you are observing and let’s engineer a tailored kit together.', cta: 'Share your field challenge', href: 'mailto:solution@seeed.cc' },
        { id: 'follow', no: '03', name: 'Follow', body: 'Follow new hardware releases, field dispatch updates, and collaborative conservation stories.', cta: 'Join Community & GitHub', href: 'https://github.com/Seeed-Studio' },
      ],
      with: 'Collaborators & Partners',
      sdgHead: 'Aligned with UN Sustainable Development Goals',
      sdgs: [
        { no: '04', title: 'Quality Education', icon: 'sdg-04.svg' },
        { no: '09', title: 'Industry, Innovation & Infrastructure', icon: 'sdg-09.svg' },
        { no: '10', title: 'Reduced Inequalities', icon: 'sdg-10.svg' },
        { no: '11', title: 'Sustainable Cities & Communities', icon: 'sdg-11.svg' },
        { no: '13', title: 'Climate Action', icon: 'sdg-13.svg' },
        { no: '14', title: 'Life Below Water', icon: 'sdg-14.svg' },
        { no: '15', title: 'Life on Land', icon: 'sdg-15.svg' },
        { no: '17', title: 'Partnerships for the Goals', icon: 'sdg-17.svg' },
      ],
      sdg: 'Aligned with UN Sustainable Development Goals: 04, 09, 10, 11, 13, 14, 15, 17',
    },
    drawer: {
      ariaLabel: 'Field sheet',
      specSheet: 'SPEC SHEET',
      signalChain: 'Signal chain',
      fieldData: 'Field data',
      viewCase: 'View full case',
      close: '✕ ESC',
    },
    footer: {
      endOfJournal: 'Field Journal',
      tagline: 'Open hardware for wildlife perception and ecological research. Connecting scientific discovery with real-world wilderness technology.',
      chapters: 'Chapters',
      elsewhere: 'Links',
      reach: 'Contact',
      legal: '© 2026 Seeed Studio · Interspecies Initiative · Open-Source Hardware under MIT License',
    },
    meta: {
      title: 'Interspecies | Seeed Studio - Open Technology for Ecological Perception',
      description: 'Seeed Studio builds open-source sensors, long-range networks, and edge AI to empower researchers and communities to understand and protect living ecosystems.',
    },
  },

  zh: {
    nav: {
      chapters: '章节',
      prologue: '序章',
      field: '田野',
      map: '地图',
      manifesto: '宣言',
    },
    prologue: {
      signal: '信号 // 38 亿年',
      title: ['以开源科技，', '倾听万物生息'],
      epigraph: '大自然的信号从未停歇。今天，我们用开放的工具，第一次真正开始倾听。',
      scroll: '向下探索',
      head: '01 / 序章：响蜜鴷协议',
      leadBefore: '在莫桑比克，有一种叫',
      leadAfter: '的鸟，会主动把采蜜人带到野生蜂巢旁。它在林间鸣叫引路，人们取蜜后留下蜂蜡作为回报。这场跨物种的默契合作延续了千百年——语言虽不相通，人与鸟之间却早已建立起一套稳固而古老的“沟通协议”。',
      s1: '这绝非神话，而是记录在生物学中的真实合作。跨物种的沟通与互助从来都在发生，只是长久以来，它们隐匿在极少数人与荒野代代相传的默契里。',
      s2: '今天，开源硬件、边缘 AI 与低功耗自组网正在改变这一切。我们无法替自然代言，但可以造出开放、易复刻的野外感知工具，让荒野深处的真实脉动，被更多人听见、看懂并守护。',
      honeyguide: '响蜜鴷',
      beats: [
        { n: '01', h: '跨物种的默契，早就在荒野中上演。', p: '从非洲响蜜鴷为猎人指引蜂巢，到巴西海豚与渔民协同捕鱼，物种之间的对话比我们想象的更古老。' },
        { n: '02', h: '自然每时每刻都在传递信号。', p: '鸟类的呼唤、夜行的足迹、水温与微气候的细微波动——生机勃勃的生态系统，其实一直在向外界发出脉动。' },
        { n: '03', h: '技术让全天候倾听成为可能。', p: '超低功耗的边缘计算、太阳能传感节点与 Mesh 自组网，让深入荒野的全天候生态观测不再昂贵且遥不可及。' },
        { n: '04', h: '用开放工具，守护生物多样性。', p: 'Seeed 提供模块化、开箱即用的开源硬件底座，让一线科研人员、保护区巡护员与社区创客都能自由搭建属于自己的野外监测工具。' },
      ],
      footnote: '大响蜜鴷（Indicator indicator）会通过独特鸣声引导人类采蜜人找到野生蜂巢，并在人类采蜜后享用蜂蜡与幼虫。该习性在莫桑比克及撒哈拉以南非洲有详实的生物学记录。',
    },
    field: {
      head: '02 / 田野特写',
      title: '来自荒野前线的记录',
      lead: '三处正在运转的野外实测站点：香港后海湾的潮间带、不丹喜马拉雅山林的老虎行径，以及巴拿马雨林树冠下的夜行昆虫。开源硬件深入一线，把原本看不见的环境脉动带回实验室。',
      chainLabel: '技术链路 / 硬件方案',
      locate: '在地图上定位',
      fig: '图',
      appendixHead: '附录 A：技术如何赋能野外科研',
      appendixLead: '从依靠经验的人工值守，到不知疲倦的开源边缘硬件：看技术如何重塑六大野外研究场景。',
      domains: [
        { no: '01', name: '个体识别与生命周期追踪', traditional: '传统方法依赖人工捕获标记或昂贵的侵入式项圈，对动物干扰大、成本极高。', open: '端侧计算机视觉直接比对虎纹、鳍斑等天然纹理，无感完成个体识别。', tags: 'CV · Edge AI' },
        { no: '02', name: '种群自动普查与动态监测', traditional: '回收红外相机 SD 卡后需耗费数周人工逐张筛选，时效性差且容易漏检。', open: '部署在前端的 AI 相机就地完成物种识别与计数，实时经由低功耗网络回传摘要。', tags: 'CV · LoRaWAN' },
        { no: '03', name: '行为学与生理健康评估', traditional: '研究人员需长时间肉眼盯梢并手动记录行为谱，极耗精力且受天气与时段限制。', open: '多传感器融合持续追踪步态、活动节奏与鸣叫特征，自动捕捉细微的行为变化。', tags: 'Edge AI · Audio' },
        { no: '04', name: '生物声学连续监测', traditional: '录音设备笨重、数据量庞大，后期往往需要声学专家耗费数月在音频波形中检索。', open: '轻量化声学模型直接在林间运行，实时过滤背景噪音并识别特定鸟鸣或兽叫。', tags: 'Audio AI · Edge' },
        { no: '05', name: '社群互动与领地网络图谱', traditional: '依赖白天视线内的抽样观察，极难还原夜行生物的领地重叠与社交网络。', open: '低功耗自组网相机阵列多点协同，在不干扰栖息地的前提下勾勒领地动态。', tags: 'CV · Mesh' },
        { no: '06', name: '生境健康与微气候监测', traditional: '人工定期巡查取样，频率低且往往错过暴雨或突发污染等关键环境突变。', open: '太阳能传感节点 24 小时不间断监测水质与气象指标，捕捉每一个异常峰值。', tags: 'Sensors · IoT' },
      ],
      fieldwork: '传统方法',
      openHW: '开源方案',
    },
    pulse: {
      head: '03 / 脉动：全球开放节点',
      title: '八个科研节点，一张开放之网',
      lead: '从已落地的实测点，到正在酝酿的共建计划：地图上的每一个标记，都代表着一套基于开源硬件的真实科研实践，全球各地的保护区与实验室均可自由参考与复刻。',
      index: '研究节点',
      legend: { all: '全部节点', active: '已部署', open: '进行中', planned: '开放共建' },
      mapLabel: '全球科研节点地图',
    },
    manifesto: {
      head: '04 / 倡议宣言',
      title: ['以开源科技，', '连接万物生息。'],
      sub: '打造开放的感知工具，让野性生灵的声音被世界听见。',
      body: '这是一场由一线科研需求与全球开源社区共同推进的长期行动。这里没有封闭的技术壁垒——硬件原理图完全开放，物料清单与复刻指南公开透明。无论你是常年驻扎荒野的生态学家、嵌入式工程师，还是热心保护的创客，都能在这里找到参与的方式。',
      principles: [
        { id: 'participate', no: '01', name: '参与', body: '参与正在进行的开源挑战，贡献代码、优化外壳与电路设计，或者在你的本地 Fab Lab 动手制作一套野外工具套件。', cta: '查看开源项目与任务', href: 'https://github.com/Allenkzl' },
        { id: 'initiate', no: '02', name: '发起', body: '你在野外研究中正遇到缺乏合适硬件工具的难题？告诉我们你的科研场景与监测需求，我们一起设计并打样验证。', cta: '提交野外科研需求', href: 'mailto:solution@seeed.cc' },
        { id: 'follow', no: '03', name: '关注', body: '随时获取最新的野外实测进展、开源硬件资料更新，与全球跨物种研究者保持连接。', cta: '关注项目动态', href: 'https://github.com/Seeed-Studio' },
      ],
      with: '合作伙伴与支持机构',
      sdgHead: '对标联合国可持续发展目标（SDGs）',
      sdgs: [
        { no: '04', title: '优质教育', icon: 'sdg-04.svg' },
        { no: '09', title: '产业、创新和基础设施', icon: 'sdg-09.svg' },
        { no: '10', title: '减少不平等', icon: 'sdg-10.svg' },
        { no: '11', title: '可持续城市和社区', icon: 'sdg-11.svg' },
        { no: '13', title: '气候行动', icon: 'sdg-13.svg' },
        { no: '14', title: '水下生物', icon: 'sdg-14.svg' },
        { no: '15', title: '陆地生物', icon: 'sdg-15.svg' },
        { no: '17', title: '促进目标实现的伙伴关系', icon: 'sdg-17.svg' },
      ],
      sdg: '对标联合国可持续发展目标：04, 09, 10, 11, 13, 14, 15, 17',
    },
    drawer: {
      ariaLabel: '田野档案',
      specSheet: '档案详情',
      signalChain: '技术链路',
      fieldData: '环境数据',
      viewCase: '查看完整项目',
      close: '✕ ESC',
    },
    footer: {
      endOfJournal: '田野日志',
      tagline: '专为野生动物保护与生态感知打造的开源硬件。连接严谨的科学探索与在旷野中可靠运行的技术。',
      chapters: '章节导航',
      elsewhere: '常用链接',
      reach: '联系我们',
      legal: '© 2026 Seeed Studio · Interspecies Initiative · 开源硬件遵循 MIT 许可',
    },
    meta: {
      title: 'Interspecies | Seeed Studio - 开源科技赋能跨物种理解与生态守护',
      description: 'Seeed Studio 打造开源传感器、远距离网络与边缘 AI，助力全球科研人员与创客深入自然旷野，倾听与守护生命之声。',
    },
  },
};

export function getUI(locale) {
  return UI[locale] ?? UI.en;
}
