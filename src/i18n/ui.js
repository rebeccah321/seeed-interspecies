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
      signal: 'Signal // 3.8 billion years',
      title: ['Technology for', 'Interspecies Understanding'],
      epigraph: "Life has been sending signals for 3.8 billion years. We're only now learning to receive them.",
      scroll: 'Scroll',
      head: '01 / Prologue — The Honeyguide Protocol',
      leadBefore: 'In Mozambique, a bird called the ',
      leadAfter: ' recruits humans to beehives. It calls, they follow, and they share the honey. A partnership that has worked for generations — between two species that never learned each other\'s language, but developed a protocol anyway.',
      s1: "This isn't a fairytale. It's a documented biological partnership. Cross-species communication has always been productive — it was just handcrafted, one relationship at a time, hard to scale.",
      s2: "That's what changes now. We're not talking to animals in their language. We're here to build the receivers — sensors, networks, AI — the open tools that let every species and every ecosystem finally be heard.",
      honeyguide: 'honeyguide',
      beats: [
        { n: '01', h: 'Cross-species collaboration is nothing new.', p: 'The honeyguide leads humans to honey. Dolphins herd fish toward waiting fishermen in Brazil. These partnerships have run for centuries — but always one relationship at a time, master to apprentice, impossible to scale.' },
        { n: '02', h: "Signals are everywhere. We've been missing most of them.", p: 'Calls, gaits, stripe patterns, water quality, temperature — animals and ecosystems have been broadcasting data for millions of years. Until now, we could receive only a tiny fraction.' },
        { n: '03', h: 'Now, for the first time, we can listen at scale.', p: 'Edge AI, open-source hardware, and low-power mesh networks have crossed a threshold. For the first time, listening at scale is possible.' },
        { n: '04', h: "We don't speak for animals.", p: 'Seeed builds the open-source hardware — sensors, networks, AI — that lets any species, any ecosystem, finally be heard.' },
      ],
      footnote: 'The greater honeyguide (Indicator indicator) leads human honey-hunters to wild hives; both species share the reward. Documented in Mozambique and across sub-Saharan Africa.',
    },
    field: {
      head: '02 / Field Dispatches',
      title: 'Dispatches from the field',
      lead: 'Three flagship deployments — a tidal wetland, a mountain kingdom, a rainforest night trap. The hardware stays in the signal chain below the story; the story stays in the field.',
      chainLabel: 'Signal chain',
      locate: 'Locate on the map',
      fig: 'FIG',
      appendixHead: 'Appendix A — Research domains',
      appendixLead: 'From traditional fieldwork to open hardware: six domains of animal research, one stack. Open each entry for the contrast.',
      domains: [
        { no: '01', name: 'Individual Identification & Lifecycle Tracking', traditional: 'Mark-recapture, photo ID, GPS collars — invasive, expensive.', open: 'AI reads natural markings — tiger stripes, fin notches — like barcodes.', tags: 'CV · Edge AI' },
        { no: '02', name: 'Population Counting & Dynamics', traditional: 'Camera traps + manual review. A single estimate takes weeks.', open: 'On-device AI identifies and counts species automatically.', tags: 'CV · LoRa' },
        { no: '03', name: 'Cognitive Decline & Aging Research', traditional: 'Manual ethogram coding — short, subjective, expert-dependent.', open: '24/7 gait and vocal monitoring. VLM detects changes early.', tags: 'CV · VLM · STT' },
        { no: '04', name: 'Acoustic Monitoring', traditional: 'Record + send to experts. Expensive, slow.', open: 'Edge-based sound classification identifies species automatically.', tags: 'STT · Audio AI' },
        { no: '05', name: 'Social Behavior & Group Dynamics', traditional: 'Years of focal observation. Patterns take seasons to spot.', open: 'Multi-camera arrays map interactions in real time.', tags: 'CV · Multi-modal' },
        { no: '06', name: 'Habitat & Carrying Capacity Monitoring', traditional: 'Periodic sampling + lab analysis. You miss almost everything.', open: 'Continuous sensors report daily. Restoration becomes watchable.', tags: 'Environmental · IoT' },
      ],
      fieldwork: 'Fieldwork',
      openHW: 'Open hardware',
    },
    pulse: {
      head: '03 / The Pulse — Open Research Nodes',
      title: 'Eight nodes, one open network',
      lead: 'Deployed, in progress, and open to collaborate — every pin is a real research node, and the network is built to be replicated. Select a node to fly there and open its field sheet.',
      index: 'Research nodes',
      legend: { active: 'Deployed', open: 'In Progress', planned: 'Open to Collaborate' },
      mapLabel: 'World map of research nodes',
    },
    manifesto: {
      head: '04 / Manifesto',
      title: ["We don't speak", 'for animals.'],
      sub: 'We build the open tools that let them be heard.',
      body: 'This is a research-driven, open-source initiative — not a product funnel. The hardware is open, the builds are replicable, and the field is wide. If you study, protect, or simply listen to other species, there is a place in this network for you.',
      principles: [
        { no: '01', name: 'Participate', body: 'Join an existing open-source challenge. Contribute to a build. Deploy a replicate kit in your local Fab Lab.', cta: 'Browse open challenges' },
        { no: '02', name: 'Initiate', body: 'Have a research question that needs a hardware answer? Submit your proposal and we’ll help find the right tools.', cta: 'Submit your project' },
        { no: '03', name: 'Follow', body: 'Follow the latest deployments, open-source tools, and interspecies research stories from the field.', cta: 'Follow along' },
      ],
      with: 'With',
      sdg: 'Aligned with UN Sustainable Development Goals — 04 · 09 · 10 · 11 · 13 · 14 · 15 · 17',
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
      endOfJournal: 'End of journal',
      tagline: 'Open hardware for animal and ecological research. Bridging scientific exploration and the technologies that operate in the wild.',
      chapters: 'Chapters',
      elsewhere: 'Elsewhere',
      reach: 'Reach us',
      legal: '© 2026 Seeed Studio · Interspecies Initiative · Open-source hardware under MIT License',
    },
    meta: {
      title: 'Interspecies — Seeed Studio | A Digital Field Journal',
      description: 'Life has been sending signals for 3.8 billion years. Seeed builds the open hardware — sensors, networks, AI — that lets animals and ecosystems finally be heard.',
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
      title: ['为跨物种理解', '而生的技术'],
      epigraph: '生命的信号已发送了 38 亿年。直到此刻，我们才刚刚学会接收。',
      scroll: '向下',
      head: '01 / 序章 — 响蜜鴷协议',
      leadBefore: '在莫桑比克，有一种叫',
      leadAfter: '的鸟，会引导人类找到蜂巢。它鸣叫，人跟随，然后分享蜂蜜。这段合作关系延续了一代又一代——在两个从未学会彼此语言的物种之间，却演化出了一套协议。',
      s1: '这不是童话，而是有据可查的生物学共生。跨物种交流从来都行之有效——只是它一直靠手工维系，一次一段关系，难以规模化。',
      s2: '现在，这一切正在改变。我们不是要用动物的语言与它们交谈，而是去建造「接收器」——传感器、网络、人工智能——让每个物种、每个生态系统，终于能够被听见。',
      honeyguide: '响蜜鴷',
      beats: [
        { n: '01', h: '跨物种协作并非新鲜事。', p: '响蜜鴷带人找蜜；在巴西，海豚把鱼群赶向等待的渔夫。这些伙伴关系延续了数百年——但始终一次一段关系、师徒相传，无法规模化。' },
        { n: '02', h: '信号无处不在，而我们错过了其中大部分。', p: '鸣叫、步态、条纹、水质、温度——动物与生态系统已广播了数百万年的数据。直到今天，我们能接收的仍只是极小一部分。' },
        { n: '03', h: '现在，我们第一次能够规模化地倾听。', p: '边缘 AI、开源硬件与低功耗 Mesh 网络跨过了临界点。大规模倾听，第一次成为可能。' },
        { n: '04', h: '我们不代动物发声。', p: 'Seeed 建造的是开源硬件——传感器、网络、AI——让任何物种、任何生态系统，终于被听见。' },
      ],
      footnote: '大响蜜鴷（Indicator indicator）会引导人类采蜜者找到野生蜂巢，两个物种分享收获。见于莫桑比克及撒哈拉以南非洲的正式记录。',
    },
    field: {
      head: '02 / 田野特稿',
      title: '来自田野的特稿',
      lead: '三处旗舰部署——一片潮汐湿地、一个山地王国、一座雨林夜阱。硬件留在故事之下的信号链里，故事留在田野上。',
      chainLabel: '信号链',
      locate: '在地图上定位',
      fig: '图',
      appendixHead: '附录 A — 研究领域',
      appendixLead: '从传统田野方法到开放硬件：动物研究的六个领域，同一套技术栈。展开每一条查看对比。',
      domains: [
        { no: '01', name: '个体识别与生命周期追踪', traditional: '标记重捕、照片比对、GPS 项圈——侵入性强、成本高昂。', open: 'AI 读取自然标记——虎纹、鳍痕——如同条形码。', tags: 'CV · Edge AI' },
        { no: '02', name: '种群计数与动态', traditional: '相机陷阱+人工翻图，一次估计要数周。', open: '端侧 AI 自动识别并计数物种。', tags: 'CV · LoRa' },
        { no: '03', name: '认知衰退与衰老研究', traditional: '人工行为编码——时段短、主观、依赖专家。', open: '全天候步态与叫声监测，VLM 提前发现变化。', tags: 'CV · VLM · STT' },
        { no: '04', name: '声学监测', traditional: '录音后送专家辨认——昂贵、缓慢。', open: '端侧声音分类自动识别物种。', tags: 'STT · Audio AI' },
        { no: '05', name: '社会行为与群体动态', traditional: '焦点观察耗时数年，模式需数季才能浮现。', open: '多相机阵列实时绘制互动图谱。', tags: 'CV · 多模态' },
        { no: '06', name: '栖息地与承载力监测', traditional: '周期性采样+实验室分析，几乎错过一切。', open: '传感器每日回报，恢复过程变得可观察。', tags: '环境 · IoT' },
      ],
      fieldwork: '传统方法',
      openHW: '开放硬件',
    },
    pulse: {
      head: '03 / 脉动 — 开放研究节点',
      title: '八个节点，一张开放之网',
      lead: '已部署、进行中、开放共建——每一个坐标都是真实的研究节点，且整张网络为可复制而生。选择一个节点，飞往那里并打开它的田野档案。',
      index: '研究节点',
      legend: { active: '已部署', open: '进行中', planned: '开放共建' },
      mapLabel: '研究节点世界地图',
    },
    manifesto: {
      head: '04 / 宣言',
      title: ['我们不为动物', '代言。'],
      sub: '我们建造让它们被听见的开放工具。',
      body: '这是一个以研究为驱动的开源倡议——不是一条产品漏斗。硬件是开放的，构建是可复制的，田野是广阔的。如果你研究、保护，或只是倾听其他物种，这张网络里就有你的位置。',
      principles: [
        { no: '01', name: '参与', body: '加入现有的开源挑战，为某个构建出力，或在你本地的 Fab Lab 部署一套复刻套件。', cta: '浏览开源挑战' },
        { no: '02', name: '发起', body: '有一个需要硬件答案的研究问题？提交你的提案，我们一起找到合适的工具。', cta: '提交你的项目' },
        { no: '03', name: '关注', body: '追踪最新部署、开源工具与来自田野的跨物种研究故事。', cta: '关注我们' },
      ],
      with: '同行者',
      sdg: '呼应联合国可持续发展目标 — 04 · 09 · 10 · 11 · 13 · 14 · 15 · 17',
    },
    drawer: {
      ariaLabel: '田野档案',
      specSheet: '档案',
      signalChain: '信号链',
      fieldData: '田野数据',
      viewCase: '查看完整案例',
      close: '✕ ESC',
    },
    footer: {
      endOfJournal: '日志终章',
      tagline: '面向动物与生态研究的开源硬件。连接科学探索与在旷野中运行的技术。',
      chapters: '章节',
      elsewhere: '链接',
      reach: '联系我们',
      legal: '© 2026 Seeed Studio · Interspecies 倡议 · 开源硬件，MIT 许可',
    },
    meta: {
      title: 'Interspecies — Seeed Studio | 数字田野志',
      description: '生命的信号已发送了 38 亿年。Seeed 建造开源硬件——传感器、网络、AI——让动物与生态系统终于被听见。',
    },
  },
};

export function getUI(locale) {
  return UI[locale] ?? UI.en;
}
