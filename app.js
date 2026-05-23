const catImages = {
  mugi: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23f2e2c5'/%3E%3Ccircle cx='360' cy='292' r='156' fill='%23c87542'/%3E%3Cpath d='M218 220 278 82l78 116M502 220 442 82l-78 116' fill='%23c87542'/%3E%3Cpath d='M280 255c23-17 48-17 70 0M370 255c23-17 48-17 70 0' fill='none' stroke='%2326231f' stroke-width='12' stroke-linecap='round'/%3E%3Cpath d='M348 314h24l-12 18z' fill='%238f4f43'/%3E%3Cpath d='M323 360c24 20 50 20 74 0' fill='none' stroke='%2326231f' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M130 315c55-16 100-16 146 0M130 370c58-8 104 0 146 21M590 315c-55-16-100-16-146 0M590 370c-58-8-104 0-146 21' fill='none' stroke='%2326231f' stroke-width='9' stroke-linecap='round'/%3E%3C/svg%3E",
  sora: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23dce8e3'/%3E%3Ccircle cx='360' cy='294' r='158' fill='%23889091'/%3E%3Cpath d='M218 220 279 82l78 116M502 220 441 82l-78 116' fill='%23889091'/%3E%3Ccircle cx='304' cy='276' r='17' fill='%231d2020'/%3E%3Ccircle cx='416' cy='276' r='17' fill='%231d2020'/%3E%3Cpath d='M348 316h24l-12 18z' fill='%23c77878'/%3E%3Cpath d='M325 360c22 18 48 18 70 0' fill='none' stroke='%231d2020' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
  hana: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23f3dddd'/%3E%3Ccircle cx='360' cy='294' r='158' fill='%23fbf8ef'/%3E%3Cpath d='M218 220 279 82l78 116M502 220 441 82l-78 116' fill='%23fbf8ef'/%3E%3Cpath d='M275 218c58-34 105-26 140 18M445 92c32 48 56 85 63 125' fill='none' stroke='%23c47f50' stroke-width='28' stroke-linecap='round'/%3E%3Ccircle cx='304' cy='276' r='17' fill='%231d2020'/%3E%3Ccircle cx='416' cy='276' r='17' fill='%231d2020'/%3E%3Cpath d='M348 316h24l-12 18z' fill='%23c77878'/%3E%3Cpath d='M325 360c22 18 48 18 70 0' fill='none' stroke='%231d2020' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
  yuki: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23e4ebf0'/%3E%3Ccircle cx='360' cy='294' r='158' fill='%23f8f8f4'/%3E%3Cpath d='M218 220 279 82l78 116M502 220 441 82l-78 116' fill='%23f8f8f4'/%3E%3Ccircle cx='304' cy='276' r='17' fill='%231d2020'/%3E%3Ccircle cx='416' cy='276' r='17' fill='%231d2020'/%3E%3Cpath d='M348 316h24l-12 18z' fill='%23c77878'/%3E%3Cpath d='M325 360c22 18 48 18 70 0' fill='none' stroke='%231d2020' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
  kuro: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23d9d3ca'/%3E%3Ccircle cx='360' cy='294' r='158' fill='%23242120'/%3E%3Cpath d='M218 220 279 82l78 116M502 220 441 82l-78 116' fill='%23242120'/%3E%3Ccircle cx='304' cy='276' r='18' fill='%23d4b64e'/%3E%3Ccircle cx='416' cy='276' r='18' fill='%23d4b64e'/%3E%3Cpath d='M348 316h24l-12 18z' fill='%23c77878'/%3E%3Cpath d='M325 360c22 18 48 18 70 0' fill='none' stroke='%23f8f4ea' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E",
  rin: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 720 540'%3E%3Crect width='720' height='540' fill='%23ece1d4'/%3E%3Ccircle cx='360' cy='294' r='158' fill='%239c8974'/%3E%3Cpath d='M218 220 279 82l78 116M502 220 441 82l-78 116' fill='%239c8974'/%3E%3Cpath d='M266 220h188M251 270h218M280 340h160' fill='none' stroke='%23705d4b' stroke-width='20' stroke-linecap='round' opacity='.6'/%3E%3Ccircle cx='304' cy='276' r='17' fill='%231d2020'/%3E%3Ccircle cx='416' cy='276' r='17' fill='%231d2020'/%3E%3Cpath d='M348 316h24l-12 18z' fill='%23c77878'/%3E%3Cpath d='M325 360c22 18 48 18 70 0' fill='none' stroke='%231d2020' stroke-width='10' stroke-linecap='round'/%3E%3C/svg%3E"
};

const cats = [
  {
    id: "mugi",
    name: "むぎ",
    age: "2歳",
    breed: "茶トラ",
    gender: "男の子",
    traits: ["甘えん坊", "抱っこ好き", "初心者向き"],
    disease: "なし",
    care: ["去勢済", "ワクチン済", "検査済"],
    note: "人のそばで過ごすのが好きな穏やかな子です。初めて猫と暮らすご家庭にも向いています。"
  },
  {
    id: "sora",
    name: "そら",
    age: "1歳",
    breed: "グレー",
    gender: "女の子",
    traits: ["遊び好き", "慎重", "猫同士OK"],
    disease: "なし",
    care: ["避妊済", "ワクチン済", "検査済"],
    note: "最初は少し慎重ですが、おもちゃを見ると表情が明るくなります。先住猫がいる家も相談できます。"
  },
  {
    id: "hana",
    name: "はな",
    age: "3歳",
    breed: "三毛",
    gender: "女の子",
    traits: ["落ち着き", "人なれ訓練中", "静かな家向き"],
    disease: "軽い皮膚炎の治療中",
    care: ["避妊済", "ワクチン済", "治療中"],
    note: "静かな環境でゆっくり距離を縮めるタイプです。治療の状況は面談時に詳しくお伝えします。"
  },
  {
    id: "yuki",
    name: "ゆき",
    age: "6か月",
    breed: "白猫",
    gender: "女の子",
    traits: ["子猫", "活発", "兄妹一緒も可"],
    disease: "なし",
    care: ["ワクチン済", "検査済"],
    note: "元気いっぱいの子猫です。長時間のお留守番が少ないご家庭を優先しています。"
  },
  {
    id: "kuro",
    name: "くろ",
    age: "5歳",
    breed: "黒猫",
    gender: "男の子",
    traits: ["穏やか", "留守番OK", "大人猫"],
    disease: "猫エイズ陽性、発症なし",
    care: ["去勢済", "ワクチン済", "検査済"],
    note: "落ち着いた暮らしが得意です。病気の正しい知識を持って迎えてくださる方を探しています。"
  },
  {
    id: "rin",
    name: "りん",
    age: "4歳",
    breed: "キジトラ",
    gender: "女の子",
    traits: ["マイペース", "なでなで好き", "単独飼育向き"],
    disease: "なし",
    care: ["避妊済", "ワクチン済", "検査済"],
    note: "自分のペースを大切にする子です。なでられるのは好きで、静かに寄り添ってくれます。"
  }
];

const events = [
  {
    date: "2026年6月14日(日)",
    time: "13:00-16:00",
    title: "猫にゃんズ 定例譲渡会",
    place: "地域交流センター 2階 多目的室",
    note: "予約優先。当日は猫の体調により参加メンバーが変わる場合があります。"
  },
  {
    date: "2026年7月5日(日)",
    time: "12:30-15:30",
    title: "子猫と大人猫の相談会",
    place: "市民活動スペース A室",
    note: "譲渡条件、医療費の考え方、トライアルの流れも相談できます。"
  }
];

const organizationEmail = "nekonyanz@example.com";
const defaultGoogleFormUrl = "";
const storageKey = "nekonyanzRequests";
const photoStorageKey = "nekonyanzPhotoOverrides";
const settingsStorageKey = "nekonyanzSettings";
const filterForm = document.querySelector("#filterForm");
const catGrid = document.querySelector("#catGrid");
const catDetail = document.querySelector("#catDetail");
const breedFilter = document.querySelector("#breedFilter");
const traitFilter = document.querySelector("#traitFilter");
const genderFilter = document.querySelector("#genderFilter");
const careFilter = document.querySelector("#careFilter");
const keywordFilter = document.querySelector("#keywordFilter");
const resultCount = document.querySelector("#resultCount");
const catCount = document.querySelector("#catCount");
const catSelect = document.querySelector("#catSelect");
const interestForm = document.querySelector("#interestForm");
const formNote = document.querySelector("#formNote");
const eventList = document.querySelector("#eventList");
const adminDialog = document.querySelector("#adminDialog");
const adminLogin = document.querySelector("#adminLogin");
const adminPanel = document.querySelector("#adminPanel");
const requestList = document.querySelector("#requestList");
const requestCount = document.querySelector("#requestCount");
const googleFormLink = document.querySelector("#googleFormLink");
const adminSettings = document.querySelector("#adminSettings");
const googleFormUrl = document.querySelector("#googleFormUrl");
const photoSettings = document.querySelector("#photoSettings");
const photoCatSelect = document.querySelector("#photoCatSelect");
const photoUrl = document.querySelector("#photoUrl");

function careLabel(care) {
  return care.map((item) => item.replace("去勢済", "避妊・去勢済").replace("避妊済", "避妊・去勢済"));
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "ja"));
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function getRequests() {
  return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function setRequests(requests) {
  localStorage.setItem(storageKey, JSON.stringify(requests));
}

function getPhotoOverrides() {
  return JSON.parse(localStorage.getItem(photoStorageKey) || "{}");
}

function setPhotoOverrides(overrides) {
  localStorage.setItem(photoStorageKey, JSON.stringify(overrides));
}

function getSettings() {
  return {
    googleFormUrl: defaultGoogleFormUrl,
    ...JSON.parse(localStorage.getItem(settingsStorageKey) || "{}")
  };
}

function setSettings(settings) {
  localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
}

function getCatImage(catId) {
  return getPhotoOverrides()[catId] || catImages[catId];
}

function applySettings() {
  const settings = getSettings();
  googleFormUrl.value = settings.googleFormUrl || "";

  if (settings.googleFormUrl) {
    googleFormLink.href = settings.googleFormUrl;
    googleFormLink.hidden = false;
  } else {
    googleFormLink.hidden = true;
  }
}

function catMatches(cat) {
  const breed = breedFilter.value;
  const gender = genderFilter.value;
  const trait = traitFilter.value;
  const care = careFilter.value;
  const keyword = keywordFilter.value.trim().toLowerCase();
  const haystack = [
    cat.name,
    cat.age,
    cat.breed,
    cat.gender,
    cat.disease,
    cat.note,
    ...cat.traits,
    ...cat.care
  ].join(" ").toLowerCase();

  return (!breed || cat.breed === breed)
    && (!gender || cat.gender === gender)
    && (!trait || cat.traits.includes(trait))
    && (!care || careLabel(cat.care).includes(care))
    && (!keyword || haystack.includes(keyword));
}

function renderCats() {
  const filtered = cats.filter(catMatches);
  catGrid.innerHTML = "";
  resultCount.textContent = `${filtered.length}件`;

  if (filtered.length === 0) {
    catGrid.innerHTML = "<p>条件に合う猫が見つかりません。条件を少し広げてみてください。</p>";
    return;
  }

  filtered.forEach((cat) => {
    const card = document.createElement("article");
    card.className = "cat-card";
    card.innerHTML = `
      <img alt="${cat.name}の写真" src="${getCatImage(cat.id)}">
      <div class="cat-card-body">
        <div>
          <h3>${cat.name}</h3>
          <div class="cat-meta">${cat.age} / ${cat.breed} / ${cat.gender}</div>
        </div>
        <div class="tag-list">
          ${cat.traits.map((trait) => `<span class="tag">${trait}</span>`).join("")}
          ${cat.disease === "なし" ? "<span class=\"tag\">病気なし</span>" : "<span class=\"tag alert\">病気・治療情報あり</span>"}
        </div>
        <button class="button secondary" type="button" data-cat-id="${cat.id}">詳しく見る</button>
      </div>
    `;
    catGrid.append(card);
  });
}

function renderDetail(catId) {
  const cat = cats.find((item) => item.id === catId);
  if (!cat) return;

  catDetail.innerHTML = `
    <article class="detail-card">
      <img alt="${cat.name}の写真" src="${getCatImage(cat.id)}">
      <div>
        <p class="eyebrow">Cat Profile</p>
        <h2>${cat.name}</h2>
        <div class="info-grid">
          <div><span>年齢</span>${cat.age}</div>
          <div><span>種類・性別</span>${cat.breed} / ${cat.gender}</div>
          <div><span>病気の有無</span>${cat.disease}</div>
          <div><span>処置状況</span>${cat.care.join("、")}</div>
        </div>
        <div class="tag-list">${cat.traits.map((trait) => `<span class="tag">${trait}</span>`).join("")}</div>
        <p>${cat.note}</p>
        <button class="button primary" type="button" data-interest="${cat.id}">この子を希望する</button>
      </div>
    </article>
  `;
  catDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderEvents() {
  eventList.innerHTML = events.map((event) => `
    <article class="event-item">
      <div class="event-date">${event.date}<br>${event.time}</div>
      <div>
        <h3>${event.title}</h3>
        <p>${event.place}</p>
        <p>${event.note}</p>
      </div>
      <a class="button secondary" href="#contact">相談する</a>
    </article>
  `).join("");
}

function renderRequests() {
  const requests = getRequests();
  requestCount.textContent = `${requests.length}件の希望`;
  requestList.innerHTML = requests.length ? "" : "<p>まだ希望者情報はありません。</p>";

  requests.slice().reverse().forEach((request) => {
    const card = document.createElement("article");
    card.className = "request-card";
    card.innerHTML = `
      <strong>${request.catName}への希望</strong>
      <dl>
        <dt>受付日時</dt><dd>${request.createdAt}</dd>
        <dt>お名前</dt><dd>${request.name}</dd>
        <dt>メール</dt><dd>${request.email}</dd>
        <dt>電話</dt><dd>${request.phone || "未入力"}</dd>
        <dt>内容</dt><dd>${request.message}</dd>
      </dl>
    `;
    requestList.append(card);
  });
}

function renderPhotoSettings() {
  photoCatSelect.innerHTML = "";
  fillSelect(photoCatSelect, cats.map((cat) => `${cat.name}（${cat.breed}）`));
  [...photoCatSelect.options].forEach((option, index) => {
    option.value = cats[index].id;
  });
  updatePhotoUrlField();
}

function updatePhotoUrlField() {
  const overrides = getPhotoOverrides();
  photoUrl.value = overrides[photoCatSelect.value] || "";
}

function exportCsv() {
  const requests = getRequests();
  const header = ["受付日時", "猫", "お名前", "メール", "電話", "内容"];
  const rows = requests.map((request) => [
    request.createdAt,
    request.catName,
    request.name,
    request.email,
    request.phone,
    request.message
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "nekonyanz-requests.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function setup() {
  catCount.textContent = cats.length;
  fillSelect(breedFilter, unique(cats.map((cat) => cat.breed)));
  fillSelect(traitFilter, unique(cats.flatMap((cat) => cat.traits)));
  fillSelect(catSelect, cats.map((cat) => `${cat.name}（${cat.age} / ${cat.breed}）`));
  [...catSelect.options].forEach((option, index) => {
    option.value = cats[index].id;
  });

  renderCats();
  renderEvents();
  renderPhotoSettings();
  applySettings();
}

filterForm.addEventListener("input", renderCats);
filterForm.addEventListener("reset", () => {
  window.setTimeout(renderCats, 0);
});

catGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cat-id]");
  if (button) renderDetail(button.dataset.catId);
});

catDetail.addEventListener("click", (event) => {
  const button = event.target.closest("[data-interest]");
  if (!button) return;
  catSelect.value = button.dataset.interest;
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(interestForm);
  const selectedCat = cats.find((cat) => cat.id === catSelect.value);
  const request = {
    catId: selectedCat.id,
    catName: selectedCat.name,
    name: formData.get("name").trim(),
    email: formData.get("email").trim(),
    phone: formData.get("phone").trim(),
    message: formData.get("message").trim(),
    createdAt: new Date().toLocaleString("ja-JP")
  };
  setRequests([...getRequests(), request]);
  interestForm.reset();
  renderRequests();

  if (getSettings().googleFormUrl) {
    formNote.textContent = "デモ用に控えを保存しました。実運用では下のGoogleフォームボタンから送信してください。";
    return;
  }

  formNote.textContent = "送信しました。猫にゃんズの管理画面にのみ保存されています。";
});

document.querySelector("[data-open-admin]").addEventListener("click", () => {
  adminDialog.showModal();
});

document.querySelector("[data-close-admin]").addEventListener("click", () => {
  adminDialog.close();
});

adminLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector("#adminPass").value !== "demo") {
    alert("パスコードが違います。");
    return;
  }
  adminLogin.hidden = true;
  adminPanel.hidden = false;
  renderRequests();
  applySettings();
});

adminSettings.addEventListener("submit", (event) => {
  event.preventDefault();
  setSettings({ ...getSettings(), googleFormUrl: googleFormUrl.value.trim() });
  applySettings();
  alert("GoogleフォームURLを保存しました。");
});

photoCatSelect.addEventListener("change", updatePhotoUrlField);

photoSettings.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = photoUrl.value.trim();
  const overrides = getPhotoOverrides();
  if (url) {
    overrides[photoCatSelect.value] = url;
  } else {
    delete overrides[photoCatSelect.value];
  }
  setPhotoOverrides(overrides);
  renderCats();
  catDetail.innerHTML = "";
  alert("写真を更新しました。");
});

document.querySelector("#resetPhoto").addEventListener("click", () => {
  const overrides = getPhotoOverrides();
  delete overrides[photoCatSelect.value];
  setPhotoOverrides(overrides);
  updatePhotoUrlField();
  renderCats();
  catDetail.innerHTML = "";
});

document.querySelector("#exportRequests").addEventListener("click", exportCsv);

setup();
