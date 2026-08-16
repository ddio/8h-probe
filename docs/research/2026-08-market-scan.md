# 市場調查：查證版（2026 年 8 月）

> **文件性質**：對 [seed 文件](drafts/market-research-seed.md)（不進版控）第六節待辦項目的查證結果。
> 全部資料擷取日期為 2026-08-16，除非另行標注。每項標注一手（對方自營頁面、原始報告、法規原文）或二手（媒體報導、他人整理）。查不到的項目照實記錄——空白本身是資訊。
> 完整調查原稿（含所有細節）在 `drafts/` 下，不進版控；本文為curated 定稿。

---

## 一、對標類別：AI Micro-Consulting 的一手案例

國際上找到六個實際營運的一手案例，全部為一人或兩人規模、固定範圍、整案計價。台灣**查不到**同型服務（詳見第二節）。

| 業者 | 服務 | 價格 | 時程 | 擷取來源（一手） |
|---|---|---|---|---|
| System Prompt AI（美，一人） | 30-Day AI Workflow Sprint：把 AI 嵌入一條既有工作流程 | US$7,500 | 4 週、上限 60 小時 | https://systemprompt.co/ |
| MixTape（美，一人） | Fixed-price prototypes：用原型回答「該不該做」 | US$5,000／10,000／15,000 三級 | 以週計 | https://mixtapedev.com/ |
| Justin McKelvey（美，一人） | AI Readiness Assessment：書面評估與路線圖 | US$2,500 | 2 週 | https://justinmckelvey.com/assessment |
| The Sound Method（美，一人） | AI Audit（影片＋一頁 PDF）到 AI Week（5 天建置） | US$99–2,500 | 24 小時–5 天 | https://www.thesoundmethod.me/ |
| AY Automate（兩人） | Fixed-Scope Sprint：用真實資料驗證產品假設 | 未公開（固定價，通話中依難度定） | 1–2 週 | https://www.ayautomate.com/services/product-scoping |
| Quince AI（瑞典，小工作室） | ML Feasibility Sprint | 95,000 SEK 起 | 2 週 | https://www.quince-ai.com/ |

驗證型 sprint 的英文圈行情多落在 **US$2,500–10,000**。8h-probe（NT$20,000 ≈ US$620）在此光譜的低端，交付形態（可運行 POC）則接近高價端的內容。與 8h-probe 定位最接近的是 AY Automate——同樣是「在付錢建置之前，先驗證 AI 做不做得到」，且明文拒收沒有真實資料的客戶。

### 範圍排除與單次結束的共同寫法（可直接用於說明頁設計）

1. **排除清單寫成具名名詞，不寫抽象原則**。System Prompt AI 逐項點名不包含的東西（從零開發新應用、多條工作流程、模型訓練、大規模資料清理、24 小時支援、無限修改、sprint 後的持續開發）。
2. **「This isn't for you if」句型**：把排除條款寫成反向的客戶篩選（MixTape、AY Automate）。AY Automate 用它排除沒有真實資料的客戶——與 8h-probe 的收案準則同構。
3. **結束用「移交」描述，不用「終止」**：「The sprint ends with documentation, handoff, and a prioritized recommendation」（System Prompt AI）；「It ends when we get there, and I get out of the way」（MixTape）。
4. **把「無維運」翻轉成「你完全擁有」**：「Code, accounts, the lot — handed over」「No lock-in, no monthly hostage」（The Sound Method）。
5. **售後若有，是短而明確的保固窗**：14 個日曆天 bug 修復（System Prompt AI）、30 天調校（The Sound Method），且限定性質（bug ≠ 新功能）。完全零售後的先例存在（MixTape、Justin McKelvey）——8h-probe 的「無修改回合」屬最嚴格端，但非孤例。
6. **後續一律另案**：「There is no automatic retainer」（System Prompt AI）；後續永遠是新交易，不是本案延伸。
7. **產能上限公開寫在報價頁**：Justin McKelvey 明寫每月只接 2–3 案，同時解釋了固定價與快交期的合理性。8h-probe 的「一年 1–3 案」屬同類事實，是否公開由服務方決定。

---

## 二、台灣的「單次、無後續」先例：查不到

用多組關鍵詞（一次性顧問、不含維護、交付即結束、固定價 sprint 等）搜尋，**查不到任何台灣接案者或小工作室以「單次結束、無修改回合、無維運」為公開賣點**。台灣市場常態恰好相反：

- 修改回合是報價單標配（「含 X 次免費修改」）、保固期免費修改 1–3 個月是慣例（二手：https://sem.tw/strategy/web-design-quote-hidden-costs ）
- 維護費被視為接案者的長期收入來源（一手性質，iT 邦幫忙從業者討論：https://ithelp.ithome.com.tw/questions/10191012 ；原頁 403，引文出自搜尋摘要，未逐字核對）

最接近的相鄰型態，皆不等同：

- **固定週期 AI POC**：Data-DI 的 30 天 AI Agent POC，NT$50,000–100,000（一手：https://www.data-di.com/blog/ai-lab-poc ）——但 POC 是導向年費 SaaS（NT$180,000 起）與維運合約的入口，非交付即結束
- **一日企業內訓**：天然單次結束，但交付知識不交付系統
- **網站健檢**：一次性報告（如犬哥數位 https://frankknow.co/web-health/ ，一手），但無公開固定價，且設計上導向後續優化服務

**seed 遺失的參照對象已找回**：Darrell TW（n8n 自動化，https://www.darrelltw.com/n8n-expert/ ，一手）。服務三分（企業自動化建置／一對一技術顧問／企業內訓），FAQ 直白（不需先備技術文件、時程區間明列、「過程中變動會提前通知」），AI 自動化導入專案公開報價 5 萬起、常見 5–15 萬。**限定**：他明載「從需求診斷到上線維運的全包承接」——是 FAQ 溝通風格的範本，不是「單次無後續」的定位先例。

**結論**：「總投入 8 小時、固定價、交付可運行 POC、單次即結束」的組合在台灣公開資料中沒有先例。這證實 seed 第四節「極端端點」的判斷：是差異化資產，也代表沒有現成的市場語言可借，說明頁的中文表述必須自造。

---

## 三、行情資料：人日比價表其實不存在

**結構性發現**：台灣公開來源幾乎不以「人日」報價。公開行情的單位是按案（接案平台）、按時薪（自由工作者）、按人月（SI）、按鐘點（講師）。seed 第三節擔心的「人日單位讓買方直接橫向比價」，其前提的那張公開比價表**查不到**——比價風險低於原先假設。且服務規格為「總投入 8 小時、分散在 4–6 週」，不以人日呈現，比價疑慮進一步降低；代價是這個時間結構在市場上沒有現成類比，需要自己解釋。

可比的公開行情（照抄原文單位，不換算）：

| 類型 | 行情 | 來源與性質 |
|---|---|---|
| 開發時薪 | NT$800–2,000/時常見 | 二手：https://www.pintech.com.tw/tw/article/362/programming-prices-taiwan-market-standard-quotation |
| SI 外包人月 | 資淺 10–15 萬、中階 15–25 萬、資深 25–35 萬 | 業者自發行情文：https://www.nss.com.tw/app-software-outsourcing-company-recommend-oct |
| 科技系統諮詢 | NT$2,000–4,000/時 | 一手（平台行情頁）：https://www.pro360.com.tw/price/management_consultant |
| 企業內訓講師 | 新手 NT$3,000–6,000/時起，資深 NT$20,000+/時 | 業者指南：https://atmarketing.tw/teacher-tools/guide/pricing-guide |
| 接案平台軟體案 | 起價約 NT$37,000–75,000/案 | 平台行情（Tasker；原頁 500 錯誤，數字出自搜尋引用，未逐字核對）：https://www.tasker.com.tw/service?ca=Brg |
| AI 導入（SaaS 組合） | NT$30,000–80,000 建置＋月費 | 業者行情文：https://yotron-ai.com/blog/ai-implementation-cost-taiwan |
| AI Agent POC（30 天） | NT$50,000–100,000 | 一手：https://www.data-di.com/blog/ai-lab-poc |

**NT$20,000／總投入 8 小時的相對位置**（僅陳列事實）：

- 與「總時數相近的一次性服務」最可比的是企業內訓（一日 8 小時課程）：即使按新手講師級距計也超過 NT$20,000；科技系統諮詢（NT$2,000–4,000/時）以 8 小時計，總額跨在 NT$20,000 上下
- 與「AI POC 交付」最可比的是 Data-DI 的 30 天 POC（5–10 萬）：日曆時程相近（4–6 週 vs 30 天），但 8h-probe 價格低於其下緣，且總投入時數有明確上限（8 小時），POC 專案則無公開的時數揭露
- seed 第三節的時薪自估法（月薪換算 ×1.4／×1.5／×1.6–2.0）已找到一手出處：站長阿川，https://codelove.tw/@howtomakeaturn/post/k31zKa ——注意這是定價方法文，非成交行情統計

**查不到**：104 外包網程式類成交行情（頁面無法連線）；任何公開的人日計價行情表。

---

## 四、台灣小型組織／NPO 的 AI 導入現況

### 最重要的發現：台灣沒有任何以 NPO 為母體的 AI 使用調查

截至 2026-08-16，台灣 NPO 領域的量化調查停留在「線上捐款＋資安」層次。2025 年 10 月發布、歷年最大規模的自律聯盟《2024 台灣公益生態發展報告》（3,697 位民眾＋237 個 NPO；一手：http://twnpos2025donorstudy.org.tw/ ；二手報導：https://rightplus.org/2025/10/30/twnposdonorstudy/ ）**沒有 AI 題組**。「台灣 NPO 用不用 AI、卡在哪」目前只能靠一手接觸取得——這直接支持 8h-probe 用案例紀錄（含婉拒紀錄）累積這批資料的研究定位。

### 既有數字（皆為數位化脈絡，非 AI 專屬）

- 台灣 NGO **平均 IT 支出僅占營運支出 2.4%**；僅 21% 已將大部分 IT 上雲；一半組織尚未有效使用協作平台；LINE 是最普遍的員工溝通管道（一手：Infoxchange《Asia-Pacific NGO Digital Capability Report 2023》，唯一有台灣專章的調查，台灣占樣本 9%：https://digitaltransformation.ngo/sites/default/files/IX_APACReport23.pdf ）
- 9 成以上 NPO 有線上捐款；近 3 成曾遭資安事件；僅 1 成組織全員資安受訓（自律聯盟 2024，來源同上）
- 64.8% 的 NPO 最希望獲得「學習不同數位工具」的協助（自律聯盟 2022；二手：https://rightplus.org/2022/11/24/twnpos/ ）
- 學術端最接近的一手分析：鄭勝分（2023）〈疫情後非營利組織數位轉型之發展〉——數位轉型面臨組織、個人、技術、外部四種障礙，「慣性」是主因（https://www.airitilibrary.com/Article/Detail/17292832-N202401040002-00004 ）

### 制度縫隙：NPO 沒有 AI／數位化補助可用

- 經濟部「30 人以下服務業數位轉型培力補助」明文限「營利事業」，協會與財團法人不符資格（一手法規原文：https://www.dtts.org.tw/subsidy/info/info.aspx ）
- 中小企業 AI 導入輔導、臺灣雲市集，對象皆為企業；衛福部社福補助無數位專項
- 面向公益的僅有數位部「公益創新．徵案 100」（徵創新提案，非補助內部導入）與「數據賦能 公益創新」計畫（一手：https://moda.gov.tw/major-policies/ngoempower/1465 ）

**NPO 落在「中小企業補助」與「社福補助」之間的制度縫隙**——想導入 AI 的小型 NPO，公部門資源上幾乎無處申請。

### 其他空白（查不到即紀錄）

- NPO 導入 AI 的失敗／卡關系統性個案研究：中文一手二手皆查不到——現有障礙描述全部來自「數位化」脈絡，非 AI
- 台灣 NPO 問卷母體極難蒐集的直接證據：開拓 2020 年座談紀錄明言 TechSoup 全球調查「臺灣填答的份數數量不足，將無法進行分析」（一手：https://www.frontier.org.tw/blog/archives/4014 ）
- 聯合勸募、資策會、網絡行動科技、台灣數位文化協會：均查不到 NPO 數位能力量化調查

---

## 五、台灣 AI 課程市場與 8h-probe 的關係

### 市場現況（價格帶皆抄原文）

- **企業內訓**：半天約 2.5–5 萬、全天約 5–10 萬（二手：https://pbtw.tw/enterprise-ai-training-guide-2026/ ）
- **公開班**：台灣人工智慧學校 LLM 實作班 3 天 NT$17,000 起（一手：https://aiacademy.tw/genai2025-courses/ ）；一般入門課 NT$2,000–4,000
- **政府補助課程**：經濟部 30 人以下企業每家上限 10 萬（NPO 不適格）；勞動部產投方案補助個人 80% 課程費
- **NPO 圈免費培力**：開拓文教「AI 麻瓜共學團」（Google.org 資助，種子教師模式；一手：https://www.frontier.org.tw/blog2/category/npo/%E4%B8%80%E8%B5%B7%E7%8E%A9ai/ ）；明怡基金會「AI Can Help」41+ 場講座、5,500+ 人次（一手：https://aicanhelp.mingyifoundation.org/ ；二手：https://npost.tw/archives/71496 ）
- **線上課程平台**（知識衛星、Hahow、PressPlay、HiSKIO、六角、天下學習，及獨立開課者如 Mosky「從零開始 AI 寫程式」NT$6,280/10 小時、5,429 名學生，一手：https://learn.mosky.tw/courses/ai-coding ；合計 30+ 門 AI 課，全數一手課程頁或平台 API，明細見 drafts）：錄播課原價 NT$1,990–12,800，但促銷是全行業常態（知識衛星常態 36–60 折），實際成交價多在 NT$2,000–7,200；主流時數 5–14 小時，折合約 NT$300–800/小時。內容型態以「AI 工作流／工具操作」最大宗，「n8n 無程式碼自動化」成長最快，「不會寫程式也能做出自己的工具」是標準話術（例：PressPlay n8n 課承諾完成「6 個能實際運作的專案」；一手：https://www.pressplay.cc/project/F646D466AC40573A036E76D49EAD005F/about ）。「陪跑」在課程市場是付費加值層的名字：HiSKIO Vibe Coding 錄播課 NT$3,340，加購陪跑計畫 NT$14,000（4.2 倍，約 39% 購課者加購；一手：https://hiskio.com/courses/2510 、/2511 ）

### 關鍵的結構性事實

1. **課程的「做出東西」是課堂通用範例**（n8n 流程、通用聊天助理），不是針對單一組織特定業務問題、用該組織自己的資料驗證的 POC。市場上宣稱「上完課做出自己工具」的課確實存在（AIA 中階班、5xcamp 等），但交付物性質不同。
2. **官方自己也判斷「上課」與「做出成果」之間有斷層**：數位部「數據賦能 公益創新」在課程之外另設 8 個月教練式輔導，且為未入選團隊提供 3 小時專家諮詢（一手：https://moda.gov.tw/major-policies/ngoempower/1465 ）。
3. **NPO 圈免費資源的路徑設計是「培力—回組織內傳授」**（麻瓜共學團的種子教師模式），不是「用自己的資料驗證特定問題」。
4. 明怡調查：近八成社福工作者願意學習新數位工具；最想數位化的是文字記錄（58%）、資料整理（57%）、活動規劃（53%）（二手：https://npost.tw/archives/71496 ）。
5. **線上課程的受眾幾乎全是「個人」**（上班族提效、副業、轉職）；平台的「企業版」賣的是課程庫訂閱＋學習管理系統（Hahow for Business 每帳號月費 NT$200–600；一手：https://business.hahow.in/pricing_plans ），不是導入服務。多門課以「企業級」「解決真實企業需求」為賣點，但販售形式仍是賣給個人的錄播課——**「教員工自己做」與「幫組織做出來」之間，課程平台只供給前者，後者在各平台上皆無對應商品**。
6. **「上完課後找外包做 POC」的公開個案追蹤：查不到。**

上述為事實陳列；8h-probe 與課程市場的定位關係（上下游、互補或替代）是服務方自己的判斷工作，不在本調查範圍。

---

## 六、對 seed 假設的更新

| seed 的假設／擔憂 | 查證結果 |
|---|---|
| AI Micro-Consulting 是唯一該追蹤的對標類別 | 成立。已建立 6 個一手案例檔，含範圍排除條款原文 |
| 「單次無後續」在台灣是罕見姿態（極端端點） | **證實**。查不到任何先例；市場常態是修改回合＋年度維護費 |
| 人日單位會把自己放進可比價的表格 | **部分推翻**。台灣公開行情根本沒有人日計價慣例，那張表不存在；且服務規格（總投入 8 小時、分散 4–6 週）不以人日呈現。代價變成「這個時間結構沒有市場類比，需要自己解釋」 |
| 時薪換算慣例（×1.4／×1.5／×1.6–2.0） | 找到一手出處（站長阿川定價方法文），但屬定價方法非成交統計，仍不宜當行情引用 |
| n8n 顧問的 FAQ 是文案範本 | 已找回：Darrell TW（darrelltw.com）。FAQ 風格可參照；但他是全包定位，不是同型服務 |
| 「健診」不是正確用字 | 佐證：台灣市場的「健檢」服務（網站健檢等）確實是檢查現況＋導向後續服務的入口，與「驗證假設、單次結束」語意相反 |
| 台灣小型組織 AI 導入可能已有現成調查 | **推翻**。NPO 母體的 AI 調查完全不存在，數位化調查也停在捐款＋資安層次。8h-probe 的案例紀錄會是第一手空白填補 |

---

## 七、剩餘待辦

1. **中文用字的原創方案**（seed 待辦 4）：設計工作，候選方案另見 `../service-page/`（草稿階段）
2. Tasker、iT 邦幫忙等因連線失敗未逐字核對的數字，若要寫進公開頁面需再驗證
3. AI Micro-Consulting 案例的持續追蹤（頁面會改版，本文數字凍結於 2026-08-16）
4. 自律聯盟 2026 調查（兩年一次，下次應為 2026 年執行）是否納入 AI 題組，值得追蹤
5. 線上課程平台的已知缺口：商業思維學院全站無法存取（HTTP 522）、知識衛星搜尋頁擋爬（清單以首頁陳列課程為準，可能遺漏舊課）、PressPlay「人學習」口徑與買斷制平台的購課人數不可直接相比
