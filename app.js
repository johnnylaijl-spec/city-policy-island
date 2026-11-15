const policies = [
  {
    id: "transport",
    number: "01",
    title: "順暢交通",
    icon: "↝",
    heart: "T",
    x: 42.7,
    y: 31.5,
    tagline: "把每一段移動，接成安全又可靠的日常。",
    quote: "準時抵達不該是運氣，而是城市對每位通勤者的承諾。",
    keywords: "公車 行人 自行車 通勤 交通 安全",
    actions: [
      ["轉乘零斷點", "第 1–12 月"],
      ["安心通學廊道", "第 6–24 月"],
      ["公車到站透明化", "第 1–8 月"]
    ],
    audience: ["通勤族", "學生", "高齡者"],
    collabs: ["數位城市", "友善住宅", "健康生活"]
  },
  {
    id: "education",
    number: "02",
    title: "學習城市",
    icon: "⌑",
    heart: "E",
    x: 58.2,
    y: 31.5,
    tagline: "讓學校與社區一起，成為終身學習的基地。",
    quote: "教育不只發生在教室，也發生在每一條街道與每一次相遇。",
    keywords: "教育 學校 社區 終身學習 課程",
    actions: [
      ["校園共享教室", "第 8–18 月"],
      ["城市探索課", "第 1–12 月"],
      ["教師創新支持站", "第 1–8 月"]
    ],
    audience: ["學生", "教師", "社區居民"],
    collabs: ["文化路徑", "數位城市", "綠色街區"]
  },
  {
    id: "care",
    number: "03",
    title: "安心照顧",
    icon: "+",
    heart: "A",
    x: 27.4,
    y: 43.3,
    tagline: "把照顧送到生活裡，讓需要的人不用獨自找路。",
    quote: "一座有韌性的城市，會在你需要的時候接住你。",
    keywords: "長照 醫療 育兒 心理健康 社福 照顧",
    actions: [
      ["照顧一站通", "第 1–10 月"],
      ["社區健康管家", "第 6–20 月"],
      ["喘息服務快充站", "第 1–12 月"]
    ],
    audience: ["照顧者", "長者", "育兒家庭"],
    collabs: ["健康生活", "學習城市", "順暢交通"]
  },
  {
    id: "core",
    number: "04",
    title: "市政共創中心",
    icon: "⌂",
    heart: "H",
    x: 42.8,
    y: 43.5,
    tagline: "讓市民的想法，成為城市的下一步。",
    quote: "政策不是寫完就結束，而是從一起參與才開始。",
    keywords: "市政 公民參與 開放政府 提案 預算",
    actions: [
      ["市民提案季", "每季辦理"],
      ["開放預算儀表板", "第 1–8 月"],
      ["跨局處共創小隊", "即刻啟動"]
    ],
    audience: ["全體市民", "社區組織", "公務夥伴"],
    collabs: ["全部政策島", "數位城市", "學習城市"]
  },
  {
    id: "housing",
    number: "05",
    title: "友善住宅",
    icon: "⌂",
    heart: "H",
    x: 58.1,
    y: 43.6,
    tagline: "讓不同人生階段，都能在城市裡找到安穩的家。",
    quote: "住得下來，才有餘裕規劃未來，也才能真正參與城市。",
    keywords: "住宅 租屋 青年 社會住宅 無障礙",
    actions: [
      ["租屋安心包", "第 1–10 月"],
      ["混齡共居試辦", "第 8–24 月"],
      ["老屋安全健檢", "第 3–18 月"]
    ],
    audience: ["青年", "租屋族", "高齡家庭"],
    collabs: ["安心照顧", "綠色街區", "順暢交通"]
  },
  {
    id: "culture",
    number: "06",
    title: "文化路徑",
    icon: "⌁",
    heart: "E",
    x: 73.4,
    y: 43.5,
    tagline: "用散步的速度，重新讀懂城市的記憶。",
    quote: "文化不是被收藏的過去，而是每天仍在發生的生活。",
    keywords: "文化 藝術 地方創生 導覽 歷史",
    actions: [
      ["城市故事地圖", "第 1–12 月"],
      ["街角展演計畫", "每月展演"],
      ["老店共好標章", "第 6–16 月"]
    ],
    audience: ["在地店家", "創作者", "親子家庭"],
    collabs: ["學習城市", "綠色街區", "活力運動"]
  },
  {
    id: "green",
    number: "07",
    title: "綠色街區",
    icon: "♧",
    heart: "R",
    x: 27.5,
    y: 56,
    tagline: "讓樹蔭、雨水與生物多樣性回到日常街道。",
    quote: "城市不是自然的反面；好的設計，能讓人與環境一起呼吸。",
    keywords: "公園 樹木 生態 雨水 微森林 環境",
    actions: [
      ["十分鐘樹蔭網", "第 6–30 月"],
      ["雨水花園街角", "第 8–26 月"],
      ["城市樹木履歷", "第 1–12 月"]
    ],
    audience: ["行人", "兒童", "社區居民"],
    collabs: ["永續能源", "友善住宅", "文化路徑"]
  },
  {
    id: "sport",
    number: "08",
    title: "活力運動",
    icon: "○",
    heart: "T",
    x: 42.7,
    y: 56.2,
    tagline: "把運動設施放進通勤、散步與親子生活。",
    quote: "健康不用特別排進行程，它可以自然地長在每一天裡。",
    keywords: "運動 健康 步道 球場 親子",
    actions: [
      ["下班十五分鐘動一動", "第 3–12 月"],
      ["校園場地共享", "第 6–18 月"],
      ["全齡運動處方", "第 1–10 月"]
    ],
    audience: ["上班族", "親子", "銀髮族"],
    collabs: ["安心照顧", "文化路徑", "綠色街區"]
  },
  {
    id: "digital",
    number: "09",
    title: "數位城市",
    icon: "⌘",
    heart: "E",
    x: 58.1,
    y: 56.2,
    tagline: "用好懂、好用的數位服務，減少每一次奔波。",
    quote: "科技的價值不是更複雜，而是讓城市服務更簡單。",
    keywords: "數位 AI 資料 開放資料 網路 服務",
    actions: [
      ["一次填寫通用表單", "第 1–10 月"],
      ["市政 AI 導覽員", "第 4–14 月"],
      ["開放資料工作坊", "每季辦理"]
    ],
    audience: ["市民", "新住民", "公務夥伴"],
    collabs: ["市政共創中心", "順暢交通", "安心照顧"]
  },
  {
    id: "energy",
    number: "10",
    title: "永續能源",
    icon: "✦",
    heart: "R",
    x: 73.4,
    y: 56.2,
    tagline: "用更省、更穩、更乾淨的能源，提升城市韌性。",
    quote: "節能不是犧牲生活品質，而是把資源用在真正需要的地方。",
    keywords: "能源 太陽能 節能 韌性 淨零 永續",
    actions: [
      ["公有屋頂發電", "第 6–30 月"],
      ["社區節能健檢", "第 1–16 月"],
      ["停電韌性據點", "第 8–24 月"]
    ],
    audience: ["社區管委會", "中小商家", "弱勢家庭"],
    collabs: ["綠色街區", "友善住宅", "數位城市"]
  }
];

const dom = {
  body: document.body,
  map: document.querySelector(".map-viewport"),
  nodes: document.querySelector("#policy-nodes"),
  list: document.querySelector("#policy-list"),
  drawer: document.querySelector("#policy-drawer"),
  search: document.querySelector("#policy-search"),
  noResults: document.querySelector("#no-results"),
  card: document.querySelector("#detail-card"),
  timePanel: document.querySelector("#time-panel"),
  intro: document.querySelector("#intro-modal"),
  help: document.querySelector("#help-modal"),
  live: document.querySelector("#live-region"),
  detail: {
    number: document.querySelector("#detail-number"),
    icon: document.querySelector("#detail-icon"),
    title: document.querySelector("#detail-title"),
    tagline: document.querySelector("#detail-tagline"),
    quote: document.querySelector("#detail-quote"),
    heart: document.querySelector("#detail-heart"),
    itemCount: document.querySelector("#detail-item-count"),
    collabCount: document.querySelector("#detail-collab-count"),
    actions: document.querySelector("#detail-actions"),
    audience: document.querySelector("#detail-audience"),
    collabs: document.querySelector("#detail-collabs")
  }
};

let selectedId = null;
let lastFocus = null;

function renderPolicyControls() {
  dom.nodes.innerHTML = policies.map(policy => `
    <button class="policy-node" type="button" data-policy="${policy.id}"
      style="--x:${policy.x}%;--y:${policy.y}%" aria-label="政策 ${policy.number}：${policy.title}">
      <span class="node-number">${policy.number}</span>
      <span class="node-name">${policy.title}</span>
    </button>
  `).join("");

  dom.list.innerHTML = policies.map(policy => `
    <button class="list-item" type="button" data-policy="${policy.id}">
      <span class="list-number">${policy.number}</span>
      <span class="list-copy">
        <strong>${policy.title}</strong>
        <small>${policy.tagline}</small>
      </span>
      <span class="list-count">${policy.actions.length} 項 ↗</span>
    </button>
  `).join("");
}

function openPolicy(id, sourceButton) {
  const policy = policies.find(item => item.id === id);
  if (!policy) return;

  selectedId = id;
  if (sourceButton) lastFocus = sourceButton;
  dom.detail.number.textContent = `POLICY ${policy.number} · 政見`;
  dom.detail.icon.textContent = policy.icon;
  dom.detail.title.textContent = policy.title;
  dom.detail.tagline.textContent = policy.tagline;
  dom.detail.quote.textContent = `「${policy.quote}」`;
  dom.detail.heart.textContent = `HEART · ${policy.heart}`;
  dom.detail.itemCount.textContent = policy.actions.length;
  dom.detail.collabCount.textContent = policy.collabs.length;
  dom.detail.actions.innerHTML = policy.actions.map((action, index) => `
    <div class="action-item">
      <b>${index + 1}</b>
      <strong>${action[0]}</strong>
      <small>${action[1]}</small>
    </div>
  `).join("");
  dom.detail.audience.innerHTML = policy.audience.map(item => `<span>${item}</span>`).join("");
  dom.detail.collabs.innerHTML = policy.collabs.map(item => `<span>${item}</span>`).join("");

  document.querySelectorAll("[data-policy]").forEach(button => {
    const isSelected = button.dataset.policy === id;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
  document.querySelectorAll("[data-policy-shape]").forEach(shape => {
    const isSelected = shape.dataset.policyShape === id;
    shape.classList.toggle("is-selected", isSelected);
    shape.classList.toggle("is-muted", !isSelected);
  });

  dom.map.classList.add("is-focused");
  dom.card.hidden = false;
  dom.card.classList.remove("is-expanded");
  dom.live.textContent = `已開啟${policy.title}，共有 ${policy.actions.length} 項政策細項。`;
}

function closePolicy({ restoreFocus = true } = {}) {
  selectedId = null;
  dom.card.hidden = true;
  dom.card.classList.remove("is-expanded");
  dom.map.classList.remove("is-focused");
  document.querySelectorAll("[data-policy]").forEach(button => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll("[data-policy-shape]").forEach(shape => {
    shape.classList.remove("is-selected", "is-muted");
  });
  if (restoreFocus && lastFocus?.isConnected) lastFocus.focus();
}

function setDrawer(open) {
  dom.drawer.hidden = !open;
  const trigger = document.querySelector('[data-action="list"]');
  trigger.setAttribute("aria-expanded", String(open));
  if (open) {
    lastFocus = document.activeElement;
    requestAnimationFrame(() => dom.search.focus());
  } else if (lastFocus?.isConnected) {
    lastFocus.focus();
  }
}

function setTimePanel(open) {
  dom.timePanel.hidden = !open;
  document.querySelector('[data-action="time"]').setAttribute("aria-expanded", String(open));
}

function setTime(time) {
  const validTimes = ["dawn", "day", "dusk", "night"];
  if (!validTimes.includes(time)) return;
  validTimes.forEach(value => dom.body.classList.remove(`time-${value}`));
  dom.body.classList.add(`time-${time}`);
  document.querySelectorAll("[data-time]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.time === time);
    button.setAttribute("aria-pressed", String(button.dataset.time === time));
  });
  const timeLabel = { dawn: "清晨", day: "白天", dusk: "黃昏", night: "夜晚" }[time];
  dom.live.textContent = `城市時段已切換為${timeLabel}。`;
  try {
    localStorage.setItem("policy-island-time", time);
  } catch (_) {
    // file:// 或隱私模式不一定允許儲存，仍可正常操作。
  }
}

function filterPolicies(query) {
  const normalized = query.trim().toLowerCase();
  let matches = 0;
  policies.forEach(policy => {
    const haystack = [policy.title, policy.tagline, policy.keywords, ...policy.audience, ...policy.collabs]
      .join(" ")
      .toLowerCase();
    const visible = !normalized || haystack.includes(normalized);
    document.querySelectorAll(`[data-policy="${policy.id}"]`).forEach(element => {
      if (element.classList.contains("policy-node")) {
        element.classList.toggle("is-filtered-out", !visible);
      } else {
        element.hidden = !visible;
      }
    });
    if (visible) matches += 1;
  });
  dom.noResults.hidden = matches !== 0;
  document.querySelector("#policy-count").textContent = matches;
  dom.live.textContent = normalized ? `找到 ${matches} 項符合的政策。` : "已顯示全部政策。";
}

function setModal(modal, open) {
  modal.hidden = !open;
  if (open) {
    lastFocus = document.activeElement;
    const focusTarget = modal.querySelector("button");
    requestAnimationFrame(() => focusTarget?.focus());
  } else if (lastFocus?.isConnected) {
    lastFocus.focus();
  }
}

renderPolicyControls();

try {
  setTime(localStorage.getItem("policy-island-time") || "day");
} catch (_) {
  setTime("day");
}

document.addEventListener("click", event => {
  const policyButton = event.target.closest("[data-policy]");
  if (policyButton) {
    openPolicy(policyButton.dataset.policy, policyButton);
    if (policyButton.classList.contains("list-item") && window.innerWidth < 720) setDrawer(false);
    return;
  }

  const timeButton = event.target.closest("[data-time]");
  if (timeButton) {
    setTime(timeButton.dataset.time);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  switch (actionButton.dataset.action) {
    case "home":
      closePolicy({ restoreFocus: false });
      setDrawer(false);
      setTimePanel(false);
      document.querySelector('[data-action="home"]').focus();
      break;
    case "list":
      setDrawer(dom.drawer.hidden);
      setTimePanel(false);
      break;
    case "close-list":
      setDrawer(false);
      break;
    case "time":
      setTimePanel(dom.timePanel.hidden);
      break;
    case "help":
      setTimePanel(false);
      setModal(dom.help, true);
      break;
    case "close-help":
      setModal(dom.help, false);
      break;
    case "close-card":
      closePolicy();
      break;
    case "expand-card":
      dom.card.classList.toggle("is-expanded");
      break;
    case "skip-intro":
    case "start-intro":
      dom.intro.hidden = true;
      document.querySelector('[data-action="home"]').focus();
      break;
  }
});

dom.search.addEventListener("input", event => filterPolicies(event.target.value));

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!dom.help.hidden) {
    setModal(dom.help, false);
  } else if (!dom.intro.hidden) {
    dom.intro.hidden = true;
    document.querySelector('[data-action="home"]').focus();
  } else if (!dom.card.hidden) {
    closePolicy();
  } else if (!dom.drawer.hidden) {
    setDrawer(false);
  } else if (!dom.timePanel.hidden) {
    setTimePanel(false);
  }
});

document.addEventListener("click", event => {
  if (!dom.timePanel.hidden && !event.target.closest("#time-panel") && !event.target.closest('[data-action="time"]')) {
    setTimePanel(false);
  }
});
