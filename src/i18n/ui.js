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
      epigraph: "Life has been broadcasting signals for millions of years. We are now building the open tools to listen.",
      scroll: 'Scroll',
      head: '01 / Prologue: The Honeyguide Protocol',
      leadBefore: 'In Mozambique, a bird called the ',
      leadAfter: ' recruits humans to wild beehives. It calls, they follow, and they share the harvest. A living partnership that has flourished for generations, between two species that never shared a spoken language, yet built an enduring protocol.',
      s1: "This is not folklore. It is a documented biological partnership. Cross-species communication has always been real, but historically limited to isolated, handcrafted relationships.",
      s2: "Today, we develop the open infrastructure: low-power sensors, long-range mesh networks, and edge AI, empowering researchers and makers to listen to living ecosystems at scale.",
      honeyguide: 'honeyguide',
      beats: [
        { n: '01', h: 'Cross-species collaboration is real and enduring.', p: 'From honeyguides guiding hunters in Africa to dolphins herding fish in Brazil, mutual understanding exists across the natural world.' },
        { n: '02', h: 'Living signals surround us every moment.', p: 'Vocalizations, movement patterns, water chemistry, microclimate shifts: ecosystems continuously broadcast vital biological data.' },
        { n: '03', h: 'Now we can listen at planetary scale.', p: 'Edge computing, open hardware modules, and solar-powered mesh networks make continuous field perception accessible and affordable.' },
        { n: '04', h: 'Building open tools for living nature.', p: 'Seeed provides the open-source hardware foundation that enables scientists, conservationists, and communities to understand and protect biodiversity.' },
      ],
      footnote: 'The greater honeyguide (Indicator indicator) leads human honey-hunters to wild hives in Mozambique and across sub-Saharan Africa.',
    },
    field: {
      head: '02 / Field Dispatches',
      title: 'Dispatches from the wild',
      lead: 'Three flagship field deployments in action: a coastal tidal wetland, a Himalayan mountain forest, and a tropical rainforest canopy trap.',
      chainLabel: 'Signal chain',
      locate: 'Locate on the map',
      fig: 'FIG',
      appendixHead: 'Appendix A: Research Domains',
      appendixLead: 'From manual field observations to open edge hardware: six wildlife research domains powered by an open tech stack.',
      domains: [
        { no: '01', name: 'Individual Identification & Lifecycle Tracking', traditional: 'Manual mark-recapture, GPS collars, invasive and costly.', open: 'On-device vision recognizes natural patterns like tiger stripes and fin markings.', tags: 'CV · Edge AI' },
        { no: '02', name: 'Population Dynamics & Automated Census', traditional: 'Camera trap retrieval and weeks of manual review.', open: 'Edge AI camera units count and classify species in real time.', tags: 'CV · LoRaWAN' },
        { no: '03', name: 'Behavioral & Ethological Monitoring', traditional: 'Subjective manual ethograms and intermittent visits.', open: 'Continuous multi-sensor tracking detects subtle gait and acoustic shifts.', tags: 'Edge AI · Audio' },
        { no: '04', name: 'Bioacoustic Monitoring', traditional: 'Bulky recorders requiring expensive post-analysis.', open: 'Real-time on-device audio classification identifies calls directly in habitat.', tags: 'Audio AI · Edge' },
        { no: '05', name: 'Social Interactions & Territory Mapping', traditional: 'Focal tracking limited to daylight hours.', open: 'Low-power camera arrays construct continuous territorial interaction maps.', tags: 'CV · Mesh Network' },
        { no: '06', name: 'Habitat Health & Microclimate Sensing', traditional: 'Infrequent grab sampling missing environmental spikes.', open: 'Solar-powered sensor nodes stream continuous water and air metrics.', tags: 'Sensors · IoT' },
      ],
      fieldwork: 'Fieldwork',
      openHW: 'Open hardware',
    },
    pulse: {
      head: '03 / The Pulse: Open Research Nodes',
      title: 'Eight nodes, one open network',
      lead: 'Deployed, active, and open to collaborate. Every marker represents an operational research node built on open hardware designed to be replicated.',
      index: 'Research nodes',
      legend: { all: 'All Nodes', active: 'Deployed', open: 'In Progress', planned: 'Open to Collaborate' },
      mapLabel: 'World map of research nodes',
    },
    manifesto: {
      head: '04 / Manifesto',
      title: ['Empowering Interspecies', 'Understanding.'],
      sub: 'Open technology built to listen, connect, and protect.',
      body: 'This is a community-driven, open-source initiative. The hardware designs are open, the software is accessible, and the field kits are reproducible. Whether you are an ecologist, a developer, or a maker, there is a place for you in this global network.',
      principles: [
        { id: 'participate', no: '01', name: 'Participate', body: 'Join an active open-source challenge, contribute code or schematics, or deploy a replication kit at your local Fab Lab.', cta: 'Browse open challenges', href: 'https://github.com/Allenkzl' },
        { id: 'initiate', no: '02', name: 'Initiate', body: 'Have an ecological research question that requires a specialized hardware solution? Submit your project proposal.', cta: 'Submit your proposal', href: 'mailto:solution@seeed.cc' },
        { id: 'follow', no: '03', name: 'Follow', body: 'Stay connected with the latest field deployments, open-source releases, and interspecies conservation insights.', cta: 'Join Community & GitHub', href: 'https://github.com/Seeed-Studio' },
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
      title: ['为跨物种理解', '与生态守护而生'],
      epigraph: '万物皆有回响。今天，我们有了前所未有的开源工具去倾听与理解。',
      scroll: '向下探索',
      head: '01 / 序章：响蜜鴷协议',
      leadBefore: '在莫桑比克，有一种叫',
      leadAfter: '的鸟，会主动引导人类找到野生蜂巢。它鸣叫领路，人类采蜜分享。这段互信合作延续了千百年，在彼此语言不通的物种之间，自然演化出了一套高效的生态协议。',
      s1: '跨物种的交流与互助真实存在。过去，这种连接往往依赖极少数人的言传身教，难以在广阔的自然界中规模化实现。',
      s2: '现在，开源硬件与边缘 AI 打开了全新的窗口。我们不是要代替大自然发声，而是打造开放、可靠、易于复刻的传感与连接工具，让真实的生命信号被世界清晰倾听。',
      honeyguide: '响蜜鴷',
      beats: [
        { n: '01', h: '跨物种协作源远流长。', p: '响蜜鴷领路采蜜，巴西海豚协助渔民围鱼，生命之间的互信与默契从未停止。' },
        { n: '02', h: '生命的信号时刻都在广播。', p: '鸟鸣、足迹、水体变化、微气候波动，生态系统时刻在传递关键信息。' },
        { n: '03', h: '现在，我们能规模化地倾听。', p: '低功耗边缘 AI、太阳能传感节点与 Mesh 网络，让野外全天候感知变得普及。' },
        { n: '04', h: '开源硬件赋能生态守护。', p: 'Seeed 提供开放、模块化的硬件底座，助力全球科学家与创客共同守护生物多样性。' },
      ],
      footnote: '大响蜜鴷（Indicator indicator）会引导人类采蜜者找到野生蜂巢，两者共享成果。记录于莫桑比克及非洲多地。',
    },
    field: {
      head: '02 / 田野特写',
      title: '来自前线的生态特写',
      lead: '三处正在运行的真实科研部署：后海湾潮汐湿地、不丹山林虎径、巴拿马雨林夜蛾。开源硬件深入前线，让守护真实可见。',
      chainLabel: '技术链路',
      locate: '在地图上定位',
      fig: '图',
      appendixHead: '附录 A：核心科研领域',
      appendixLead: '从传统人工观测到开放边缘硬件：赋能野生动物与生态研究的六大核心领域。',
      domains: [
        { no: '01', name: '个体识别与生命周期追踪', traditional: '人工标记重捕、昂贵且具侵入性的项圈。', open: '端侧视觉 AI 毫秒级识别虎纹与个体特征。', tags: 'CV · Edge AI' },
        { no: '02', name: '种群自动普查与动态监测', traditional: '红外相机人工翻看，耗时长达数周。', open: '边缘 AI 自动分类与计数，实时回传数据。', tags: 'CV · LoRaWAN' },
        { no: '03', name: '行为学与生理健康评估', traditional: '人工编码耗时耗力，依赖主观经验。', open: '全天候步态与声音感知，提前预警异常。', tags: 'Edge AI · Audio' },
        { no: '04', name: '生物声学连续监测', traditional: '笨重录音仪，依赖昂贵的专家后期辨认。', open: '端侧声学模型直接在野外分类物种鸣叫。', tags: 'Audio AI · Edge' },
        { no: '05', name: '社群互动与领地网络图谱', traditional: '日间抽样观测，难以捕捉夜间互动。', open: '分布式低功耗相机阵列实时绘制领地拓扑。', tags: 'CV · Mesh' },
        { no: '06', name: '生境健康与微气候监测', traditional: '低频单点取样，容易遗漏关键水质波动。', open: '太阳能传感器阵列连续采集水质与气象。', tags: 'Sensors · IoT' },
      ],
      fieldwork: '传统方法',
      openHW: '开源方案',
    },
    pulse: {
      head: '03 / 脉动：全球开放节点',
      title: '八个科研节点，一张开放之网',
      lead: '已部署、进行中、开放共创。每一个标记都是正在运行的真实科研站点，全套硬件方案支持全球创客与实验室自由复刻。',
      index: '研究节点',
      legend: { all: '全部节点', active: '已部署', open: '进行中', planned: '开放共建' },
      mapLabel: '全球科研节点地图',
    },
    manifesto: {
      head: '04 / 倡议宣言',
      title: ['以开源科技，', '连接万物生息。'],
      sub: '我们建造让生命被听见的开放工具。',
      body: '这是一项由科学探索与开源社区驱动的长期行动。硬件方案全开放，复刻流程全公开。无论你是生态学家、工程师还是创客，这张网络都有你的位置。',
      principles: [
        { id: 'participate', no: '01', name: '参与', body: '加入现有的开源挑战，贡献代码与硬件设计，或在本地 Fab Lab 复刻一套野外工具套件。', cta: '浏览开源挑战', href: 'https://github.com/Allenkzl' },
        { id: 'initiate', no: '02', name: '发起', body: '有需要硬件支持的生态科研课题？欢迎提交你的项目提案，我们共同寻找最优方案。', cta: '提交研究提案', href: 'mailto:solution@seeed.cc' },
        { id: 'follow', no: '03', name: '关注', body: '持续关注前沿部署进展、开源工具发布与跨物种生态守护故事。', cta: '加入社区与 GitHub', href: 'https://github.com/Seeed-Studio' },
      ],
      with: '合作伙伴与支持机构',
      sdgHead: '呼应联合国可持续发展目标',
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
      sdg: '呼应联合国可持续发展目标：04, 09, 10, 11, 13, 14, 15, 17',
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
      tagline: '面向野生动物与生态感知的开源硬件。连接科学探索与在旷野中运行的技术。',
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
