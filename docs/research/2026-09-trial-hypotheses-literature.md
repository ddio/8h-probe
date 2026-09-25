# 調查：trial 假設的文獻對照（2026 年 9 月）

> **文件性質**：trial round（[案例紀錄](../cases/2026-08-trial-01.md)）過程中形成了若干工作假設（記錄於私人工作筆記），本文為這些假設在研究、報導、實務分享中的查證結果——**相關與相反的看法都列**，供日後 write-up 引用。
> 全部資料擷取日期為 2026-09-05，除非另行標注。每項標注性質：同儕審查／機構研究／具名實務分享／論壇。查不到的項目照實記錄——空白本身是資訊。
> 假設以方法層次陳述，不涉及客戶可識別資訊。

---

## 假設一：agent 讓「文件轉 prototype」降到分鐘級，prototype 成為可行的溝通界面，文件終於能當 single source of truth

背景：提案溝通的老困境——文字與 wireframe 對一般人太抽象或資訊量過多；高擬真 prototype 又會被當成 mockup、陷入細節。假設是成本歸零後，「快速下一輪」化解了這個兩難。

### 支持／延伸

- **Rethinking Prototype Fidelity in the Age of Generative AI** — ACM *Interactions*，2026 年 7–8 月號（專業期刊）。https://dl.acm.org/doi/10.1145/3815553
  與本假設同題：經典 fidelity 教條（低擬真才能引出好回饋）建立在「精緻＝投入很多、不好意思批評」的年代，生成式 AI 讓該前提斷裂，教條該重新檢視。
- **Generative Design and Vibe Coding** — CHI 2026 Extended Abstracts（同儕審查）。https://dl.acm.org/doi/10.1145/3772363.3778802
  學術端確認 prompt-to-prototype 工具正在重組設計與實作的分工界面。
- **How We Replaced PRDs with AI Prototypes** — Omar Mousa，LogRocket，2025-08（具名實務分享）。https://stories.logrocket.com/p/thought-leadership-how-we-replaced-prds-ai-prototypes
  「seeing > reading」、prototype 本身變成 spec；保留「法規、稽核場景仍需文件」的但書。
- **Spec-Driven Development with AI（GitHub Spec Kit）** — GitHub Blog，2025-09（廠商方法論＋開源工具）。https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/
  「spec 是 single source of truth、程式碼是投影」的產業化版本。
- **High-Fidelity or Low-Fidelity, Paper or Computer?** — Walker, Takayama & Landay，HFES 2002（同儕審查）。https://www.leilatakayama.org/downloads/Takayama.Prototypes_HFES2002_prepress.pdf
  高低擬真找出的可用性問題數量相當——「給 prototype 不會讓驗證變差」有老實證。
- 中文圈對應：**產品經理 AI 工作術：Vibe Coding Spec** — Peter Su，Substack，2025（具名實務分享）。https://petersuppi.substack.com/p/ai-vibe-coding-spec

### 相反／制衡

- **Sketching User Experiences** — Bill Buxton，2007（HCI 經典專書）。評介：https://jan.miksovsky.com/posts/2007/09-05-bill-buxtons-sketching-user-experiences
  最強反論：草圖的模糊性本身是功能——太完成的東西讓人不敢提根本性批評、過早進入細節修飾。「加細節避免討論卡住」在 Buxton 框架裡正是讓討論卡進錯誤層次的原因。
- **Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts** — Nielsen Norman Group，2025-10（機構實地研究）。https://www.nngroup.com/articles/ai-prototyping/
  利害關係人把光鮮的 AI 原型誤當接近完成品、干擾策略對話——AI 讓「被當成 mockup」的問題更嚴重而非解決。
- **Does the Fidelity of a Prototype Affect Results?** — MeasuringU（量化 UX 文獻回顧）。https://measuringu.com/prototype-fidelity/
  中間派：fidelity 不改變回饋數量，但會改變回饋類型（越擬真、越多表面細節評論）——「加細節」是在換掉回饋內容。
- **Spec-Driven Development: The Waterfall Strikes Back** — Marmelab，2025-11（具名實務實測；HN 討論 332 分，論壇）。https://news.ycombinator.com/item?id=45935763
  實測多套 SDD 工具：文件過量、雙重審查負擔、agent 不遵守 spec——「用心維護文件」的成本可能被低估。
- **Why Specs Drift from What Gets Built** — Canery，2025–2026（實務分享）。https://canery.ai/articles/why-specs-drift
  決策會流出文件（聊天、口頭、agent 的即時修正），spec 與實作漂移是結構性問題；AI 加快 merge 頻率反而讓漂移加劇。
- **Why Vibe Coded Projects Fail** — Chop Dawg，2025（開發商實務分享）。https://www.chopdawg.com/why-vibe-coded-projects-fail-the-gap-between-a-prototype-and-a-product-nobody-talks-about/
  會動的 demo 讓小組織業主以為困難部分已完成，剩下的「小調整」其實是整個產品——與本服務「POC 不是可上線系統」的界線說明直接相關。
- 中文圈制衡：**Vibe Coding 熱潮下的企業隱形代價** — 領導影響力學院（天下創新學院），2025。https://leaderimpact.cwgv.com.tw/article/35381

**寫作註**：這條假設剛好站在一場進行中辯論的新派——老智慧（Buxton／低擬真教條）vs 新論文（Interactions 2026），trial 提供了第一手案例，寫作時把辯論線本身寫出來會更有說服力。

---

## 假設二：「讓業主自己做＋讀業主的原始資料與 git」是 agent 時代才可行的研究方法，優於only訪談；但 agent 會誤讀對方文件的意含（點子／嘗試／要求／原則），雙方也會各自累積不一致的世界模型

### 支持／延伸

- **First Rule of Usability? Don't Listen to Users** — Jakob Nielsen，NN/g，2001（機構經典論述）。https://www.nngroup.com/articles/first-rule-of-usability-dont-listen-to-users/
  「觀察實際行為勝過詢問理想情境」的經典出處。
- **Contextual Inquiry** — Beyer & Holtzblatt 方法傳統；入門見 NN/g，2020。https://www.nngroup.com/articles/contextual-inquiry/
  到工作現場看實際工作。讀業主的 repo 可視為 agent 時代的 contextual inquiry——工作現場變成 git。
- **Artifact Analysis** — Martin & Hanington《Universal Methods of Design》（2012／2019 增訂）（方法論參考書）。
  用對方的 work artifacts 當研究材料是正式設計研究方法。
- **Mining Software Repositories 研究傳統** — 例：systematic mapping study，Information & Software Technology，2025（同儕審查）。https://www.sciencedirect.com/science/article/pii/S0950584925000163
  「讀 git 歷史理解開發行為」有二十年學術傳統；本方法等於把 MSR 用在單一業主的顧問情境。
- **The Surprising Impact of Meeting-Free Days** — MIT Sloan Management Review，2022（76 家公司調查）。https://sloanreview.mit.edu/article/the-surprising-impact-of-meeting-free-days/
  支持非同步、減少會議；GitLab handbook-first 為最著名的實務先例。https://handbook.gitlab.com/handbook/company/culture/all-remote/asynchronous/
- **Process Consultation** — Edgar Schein（1969 起，組織發展經典）。
  「比起說服業主收斂，讓他直接體驗發散的結果」最接近 Schein 的過程諮詢：客戶自己領悟的才持久。但 Schein 講引導反思，非刻意放任撞牆——這一步超出現有文獻。

### 相反／制衡

- **Context Rot in AI-Assisted Software Development** — Treude & Baltes，arXiv:2606.09090，2026（preprint，有數據）。https://arxiv.org/abs/2606.09090
  356 個 repo 中 23% 的 AI 設定檔（CLAUDE.md 等）含過期引用；文件過期時 agent「無可見錯誤地」被誤導。「對方文件要對日期、方向要查有沒有被推翻」的實務直覺有了量化背書。
- **Evaluating AGENTS.md** — Gloaguen et al.（ETH Zurich），arXiv:2602.11988，2026（preprint；138 repo／5,694 PR）。https://arxiv.org/abs/2602.11988
  repo-level context 檔平均不提升 agent 成功率、推論成本 +20%——被對方 repo「引導」不保證是好的引導。
- **Beyond Context: LLMs' Failure to Grasp Users' Intent** — arXiv:2512.21110，2025（preprint）。https://arxiv.org/abs/2512.21110
  LLM 的脈絡盲點分類（時間脈絡退化、隱含語意失靈）——正是判斷文件「是發散還是定案」所需的語用能力。
- **Hallucination as Context Drift: Synchronization Protocols for Multi-Agent LLM Systems** — arXiv:2606.21666，2026（preprint）。https://arxiv.org/abs/2606.21666
  最接近「雙方各自累積矛盾世界模型」的研究：多 agent 因共享狀態表徵分歧產生集體矛盾；且天真的全量同步反而讓幻覺 +34%——「兩邊 repo 互相全餵」不是解法，「定期對時、逐點核對」反而較符合其建議。
- **The effects of remote work on collaboration among information workers** — Yang et al.，Nature Human Behaviour，2021（同儕審查；微軟 6.1 萬人資料）。https://www.nature.com/articles/s41562-021-01196-4
  非同步媒介讓協作網絡更 silo 化、新資訊共享變難——雙 repo 非同步可能各走各的越走越遠。
- **The Hawthorne Effect or Observer Bias in User Research** — NN/g（機構論述）。https://www.nngroup.com/articles/hawthorne-effect-observer-bias-user-research/
  讀 git 屬非介入觀察、避開 Hawthorne 效應，但研究者詮釋偏誤完整保留——且把詮釋外包給 agent 後，偏誤來源多了一層。
- **顧問讀客戶原始資料的倫理界線**：查無同儕審查研究；實務原則是最小權限。整包 raw data＋git 全讀明確超出「最小必要」，靠信任關係而非制度界線——此為方法的結構性風險，write-up 中應自行點名。

---

## 假設三：AI 工具的產出物（artifacts）有跨帳號權限牆，是資料交接的斷點

### 支持／延伸

- **Claude Artifacts: Why the Live One Cannot Be Shared** — GenAI Unplugged，Substack，2026-08（具名實務實測）。https://genaiunplugged.substack.com/p/claude-live-artifacts-mcp-connectors-code
  connector-backed artifact 在任何方案都拿不到公開連結——「人類可讀、其他帳號讀不到」的權限結構實測。
- **artifact 分享權限與實際能力不符** — anthropics/claude-code GitHub issue #85775，2026（一手 bug report）。https://github.com/anthropics/claude-code/issues/85775
- **Introducing the Model Context Protocol** — Anthropic，2024-11（廠商官方）。https://www.anthropic.com/news/model-context-protocol
  MCP 的存在本身承認 N×M 互通是真問題；但它解的是資料源接入層，產出物（artifact）層尚無對應標準。學術 survey：arXiv:2506.05364（2025）。
- **Up the Stack: How AI's Escape From the Commodity Trap Risks Enterprise Lock-in** — Normal Technology，2026（分析報導）。https://www.normaltech.ai/p/up-the-stack-how-ais-escape-from
  鎖定是分層的：模型可換，對話歷史與 artifacts 這些「上層」最難搬。

### 相反／制衡

- **Claude artifacts public sharing** — Stacktree，2026-07（實務評測）。https://stacktr.ee/blog/claude-artifacts-public-sharing
  過渡期論：2026-07 起 artifact 已開放公開分享與多人編輯，限制逐版鬆綁——但交付用途仍缺私密預設、自訂網域、跨 agent、API 發布。
- workaround 生態存在（匯出靜態 HTML 另行託管），代價是脫離版本與更新流——等於承認原生分享不敷交付使用。

**實務結論（trial 驗證）**：正確的交接物是資料與產生器，不是渲染後的頁面；artifact 權限牆是雙向的（我方讀不到業主的，業主也讀不到我方的）。

---

## 假設四：結構化資料的 schema 一定會變，而業主在意表現層——需要獨立模組打磨上架流程，業主才可能自助更新

### 支持／延伸

- **An empirical analysis of the co-evolution of schema and code** — Qiu, Li & Su，ESEC/FSE 2013（同儕審查）。https://www.researchgate.net/publication/262280423
  schema 頻繁演化且每次變更誘發顯著程式碼修改——「schema 一定會變」是反覆驗證的經驗規律。
- **Empirical Study on NoSQL Schema Evolution** — arXiv:2003.00054（ER 2020，同儕審查）。https://arxiv.org/pdf/2003.00054
  彈性 schema 的演化頻率更高（release 中 schema 相關變更 >30% vs 關聯式 2%）——POC 階段的資料模型更要預期它動。
- **Headless CMS 辯論** — TechTarget（產業分析）。https://www.techtarget.com/searchcontentmanagement/feature/Headless-CMS-vs-decoupled-CMS-Whats-the-difference
  內容與表現分離後，編輯端最大的痛是看不到成品長相，要補 preview 與 in-context editing——「打磨上架流程」正是這個補課的縮影。
- **Low/No-Code 民主化的可行面** — arXiv:2112.14073，2021（研究綜述）。https://arxiv.org/pdf/2112.14073

### 相反／制衡

- **LCNC governance 研究**（2025，研究論文）。https://www.researchgate.net/publication/390200761
  citizen-developed 應用常在開發者離開（或熱情消退）後失去維護；KPMG 715 家企業調查中 43% 把實作與維護複雜列為 low-code 頭號挑戰——自助工具本身會變成新的維護債。
- **Internal tools in 2026** — Basedash（實務觀點）。https://www.basedash.com/blog/internal-tools-in-2026-admin-panels-ops-dashboards-and-back-office-automation
  內部工具最大風險是 over-building；用量與 schema 未穩前投資上架模組可能過早。

**寫作註**：假設本身文獻背書充分，但應補上「前提是流程已穩定，否則有 over-building 與棄置風險」的但書。

---

## 假設五：極少週工時（2–3 小時）即可推進真實 POC——AI 時代顧問的時間結構

### 支持／延伸

- **GitHub Copilot RCT** — Peng et al.，arXiv:2302.06590，2023（RCT）。https://arxiv.org/abs/2302.06590
  95 名開發者做同一任務，AI 組快 55.8%——任務是綠地小專案，接近 POC 情境。
- **DORA 2025** — Google Cloud（大樣本產業調查）。https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
  2025 版轉正：AI 採用與 throughput 正相關（2024 版還是負的）；但交付穩定性仍呈負相關。
- **AI for Consultants: How a Solo Practice Runs on Claude** — Justin McKelvey，2026（具名實務分享；亦為市調案例三的同一人）。https://justinmckelvey.com/blog/ai-for-consultants

### 相反／制衡

- **METR：Early-2025 AI on Experienced OS Developer Productivity** — 2025-07（RCT；arXiv:2507.09089）。https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
  16 名資深開發者、246 個任務：用 AI 反而慢 19%，**事後自估卻快 20%**——「感覺很快」不可靠。中文報導：iThome https://www.ithome.com.tw/news/170047 、TechNews https://technews.tw/2025/07/14/does-ai-programming-actually-slow-down-work
  METR 2026-02 後續（https://metr.org/blog/2026-02-24-uplift-update/ ）自承新實驗有選擇偏差、初步數據偏向加速——19% 不是定論，領域仍在修正。
- **驗證瓶頸移到人側** — Aviator 引 Faros AI 對 1,255 團隊的遙測，2025。https://www.aviator.co/blog/the-ai-code-verification-bottleneck-why-faster-code-generation-means-slower-reviews/
  高 AI 採用團隊 PR 合併量 +98%，但 review 時間 +91%、PR 大小 +154%、bug +9%——生成提速後瓶頸整段移到人的審查與協調。反方：The New Stack 主張瓶頸本來就不在打字、也沒移到 review（https://thenewstack.io/ai-code-bottleneck-myth/ ，2025）。

**寫作註**：兩個指標實驗的情境剛好相反——Copilot RCT 是綠地小任務、METR 是資深者在自己深耕的百萬行 codebase。trial 的工作型態（綠地、小範圍、單人、無 review 協調）落在文獻預測最有利的一格，引用時標明適用邊界；且 METR 的 20% 感知偏差提醒：自報工時應留 log 佐證（agent 對話紀錄的時間戳即是現成 log）。

---

## 查無直接對應（空白本身是資訊）

1. 「文件轉 prototype 成本降到分鐘級 → 文件終於能當 SSOT」的**因果鏈**：無同儕審查研究直接驗證；最接近的是廠商自報數據（GitHub Spec Kit、AWS Kiro），利益相關，引用需標明。
2. 「雙方各自發編號、事後核對打架」：無文獻直接討論；最接近的是分散式系統 ID 分配衝突概念與多 agent 狀態分歧研究（假設二相反面）。
3. 「讓業主直接體驗發散的結果作為說服手段」：超出 Schein 過程諮詢的範圍，屬 trial 的實務創新，尚無文獻對照。
4. 「利害關係人把 AI 原型當成品」：最強證據是 NN/g 實地觀察，尚無控制實驗量化。

---

*編修紀錄*
- 2026-09-05 初版：五個 trial 工作假設 × 支持／相反文獻對照，三路平行調查彙整（設計溝通與 fidelity、研究方法與多 agent 協作、互通性／schema／生產力實證）。
