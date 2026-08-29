# 非工程師使用 coding agent 的變化軌跡：文獻筆記

> 2026-08-29 檢索。起點是 trial 01 的田野觀察，整理現有研究對三個問題的回答：變化的路徑、agent 改變了什麼／沒改變什麼、不同背景（特別是社科）的差異。§5 把場景從「生產品質軟體」換成「堪用就好的腳本與自動化」，重新檢視前面的結論；§6 盤點台灣的文章與報導。

## 0. 觀察起點（田野）

Trial 01 合作對象：稍有技術底子、原本幾乎不寫程式。開始用 agent 後，可以一口氣用完 Claude Max 5x 的 session 上限，一週開 10–20 條線平行跑；接著開始意識到自己太發散；但最後不是「那我不做了」，而是持續思考「我用 agent 做什麼是有效的、哪些該交給專業工程師」。

## 1. 文獻中的路徑

沒有任何研究提出公認的「非工程師用 agent 的階段模型」（類似悲傷五階段的命名模型不存在），但上述路徑的每一段都有對應文獻，拼起來大致是：

**入口民主化 → 發散／被 AI 帶著走 → 信任校準 → 撞上驗證之牆 → 重劃分工界線，或退到個人尺度軟體**

- 互動模式分類：新手早期型態是 shepherding／drifting（幾乎只 prompt、很少自己動手；Prather et al.）、"led-by the LLM"（Kazemitabaar et al.）；後期走向 "leading the LLM"。發散期在文獻裡是被命名過的常態。
- 信任校準：縱貫證據顯示使用者偏好從「熱衷全自動 agent」演變為「偏好有確認點的模式」（[From Junior to Senior, CHI 2026](https://arxiv.org/abs/2602.00496)）。校準研究強調這是變準、不是幻滅——每輪校準循環提升 AI 素養（[Calibrated Trust](https://arxiv.org/pdf/2512.09088)）。互動姿態同時從「委託」移向「共創」（[Good Vibrations](https://arxiv.org/abs/2509.12491)）。
- 驗證之牆：[From Prompting to Verification](https://arxiv.org/abs/2605.24521)（162 位 vibe coder，分 non-coder／novice／professional）的核心發現是 **perception–action gap**——風險意識各層級都有，但評估、除錯、驗證能力仍完全跟著工程經驗走。結論稱之為 equity paradox：入口被民主化，評估能力沒有。
- 非學術端對應論述：[The 70% Problem（Osmani）](https://addyo.substack.com/p/the-70-problem-hard-truths-about)——非工程師能很快到七成，最後三成（edge case、安全、可維護性）撞牆。
- 「退到個人尺度」作為正當終點：end-user programming 文獻線（[Litt, Malleable Software in the Age of LLMs](https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html)；[Ink & Switch](https://www.inkandswitch.com/essay/malleable-software/)）。

## 2. Agent 改變了什麼、沒改變什麼

變了：

- **產出能力從 0 到 70%**——不會寫程式的人能做出可運作的軟體，這在 agent 之前不存在。
- **互動姿態**——從被帶著走到主導，從委託到共創（見上節）。
- **對自動化的態度**——從擁抱全自動到主動要求確認點。
- **風險意識**——各經驗層級普遍提高。

沒變：

- **驗證與除錯能力**——文獻裡最一致的不變項；用了 agent 也不會跟上來。
- **底層技能不會自動長出來**——對照實驗（[How AI Impacts Skill Formation](https://arxiv.org/html/2601.20245v2)，N=52）：全靠 AI 的組做最快、幾乎沒錯誤，但學習成效最差（知識測驗 −17%，除錯差距最大）。「用久了自然變工程師」不成立，除非刻意採取保留學習的用法（只問概念、要求解釋、先生成後理解）。
- **起點差異仍是表現預測子**——CS 底子與寫作能力都預測 vibe coding 表現（[ETH 預註冊研究, CHI 2026](https://arxiv.org/html/2603.14133)）；agent 平移了曲線，沒有抹平人與人的差距。
- **結構因素**——能動性上限「主要受組織政策限制，而非個人偏好」（From Junior to Senior）。

## 3. 背景差異，特別是社科

- **技術底子仍是最強預測子，但語文能力有獨立貢獻**：ETH 研究中 CS 成就 r=.39（獨立解釋變異約為寫作兩倍），寫作 r=.29 且在控制 CS 後仍顯著；中介分析顯示寫作效果幾乎全由 prompt 品質（清晰、組織、詞彙多樣性）中介。「會把需求講清楚」是可測的真實優勢。
- **領域知識能幫瞄準、不能幫驗證**：[非工程師評估 AI 生成程式碼的研究](https://arxiv.org/pdf/2508.06484)（商業使用者、資料分析場景）：受試者會用領域知識與抽樣檢查，但抓不到邏輯錯誤，且**對錯誤答案有高信心**——校準失靈。
- **社科採用資料**（[Anthropic, 2026-02～03, N=1,260](https://www.anthropic.com/research/coding-agents-social-sciences)）：整體僅 20% 每週使用；學門落差極大——經濟 39%、政治 25%、公衛 6%、教育 4%、傳播 6%，梯度與各學門既有程式文化重合（此為本筆記的解讀，非報告結論）。博士生 27% vs 資深教授 <12%；男性名字者兩倍；頂尖 25 校 +40%。採用者多開 25% 專案、多發 50% working paper、多投計畫，**期刊投稿沒有增加**——紅利集中在 pipeline 前端。
- **方法訓練是否遷移到 agent 使用品質：無任何研究直接檢驗**（Anthropic 報告明確無此發現）。
- **舊文獻線 conversational programmers**（[Parnin & Chilana, CHI 2016](https://dl.acm.org/doi/10.1145/2858036.2858323)；N=3,151 非工程職）：42.6% 投資學過程式，兩大動機是「讓技術對話更有效」與市場性，不是要寫 code。Agent 時代可視為：這群人的天花板從「能對話」抬到「能產出」，但停在「能驗證」之前——所以終點自然落在分工判斷。

## 4. 反證與已知限制

- **「社科人只是被程式媒介擋住」目前被採用資料反證**：媒介門檻消失兩年，擴散仍沿既有程式文化走（經濟學家先受益，公衛／教育沒進來）。真正的障礙可能是驗證能力、工作流慣性或激勵結構。
- **「發散後健康收斂」可能是條件式的**：校準失靈的人（見商業使用者研究）不會走到「意識到自己太發散」那一站。Trial 01 能收斂，可能正因為「稍有技術底子」——觀察樣本存在倖存者／篩選偏差。對服務的含意：有效的篩選條件可能不是「非工程師」，而是「有足夠底子能感知自己不知道什麼、或有足夠動力在途中補底子的非工程師」（後半見 §6 的修正），這個母體仍比「所有被媒介擋住的人」小得多。
- **觀察窗太短**：初次採用與留存由不同因素預測（[微軟部署研究](https://arxiv.org/abs/2607.01418)）；目前看到的「收斂」可能是階段而非終點。
- 自我提醒：本筆記的假說剛好支持這個服務的定位（社科／領域專家 + agent + 工程師交棒），解讀田野資料時需對 motivated reasoning 多一分警惕。

## 5. 場景重框：軟體不必完整才堪用

以上結論多半以「生產品質軟體」為隱含目標。實際上 agent 的大量用途是小腳本分析文件、一次性自動化——這個「堪用就好」場景有 30 年前例：**試算表**（end-user software engineering 這個領域即因此而生）。[Panko 的系列研究](https://www.researchgate.net/publication/228662532_What_We_Know_About_Spreadsheet_Errors)：超過 150 列的試算表 90% 含錯；錯誤以格計很低、但規模一大底線數字幾乎必然有錯；真實後果如 TransAlta 因剪貼錯誤損失 2,400 萬美元。在此 regime 下，四個變項移動：

1. **「最後 30%」從牆變成無關**——一次性腳本不需要可維護性與 edge case 完備。70% problem 失效；個人尺度軟體是正當終點（malleable software 線）。
2. **風險變形：從「軟體會壞」變成「答案默默是錯的」**——拋棄式腳本沒有 review 與測試，唯一攔截點是使用者看輸出覺得不對勁；商業使用者研究顯示這個攔截點會失守且伴隨高信心。試算表史證明此失敗模式會大規模發生。
3. **社科方法訓練的匹配度大幅提高**——驗證從「讀程式碼」變成「判斷輸出合理性」（量級、分佈、三角驗證），這正是研究方法的地盤。裁決修正為：方法訓練遷移**在生產軟體 regime 代理證據偏負向；在分析腳本 regime 未被檢驗、但技能匹配度高**。此為目前文獻缺口。
4. **分工界線重新定義：不是品質線，是壽命 × 賭注 × 受眾線**——試算表史的教訓是拋棄式軟體不會乖乖被拋棄，有用的臨時工件會活進正式決策。實務問題從「哪些交給工程師」變成「**這個腳本什麼時候該畢業**」：一次性自用不用交；會重複跑、別人會用、數字進決策，就該交。Agent 時代畢業速度比試算表時代快得多。

不因重框而改變的：採用不平等（門變低，先進來的仍是原本有計算文化的人）、信心校準問題（跟著人走，不跟著場景走）。

## 6. 台灣現況

台灣沒有系統性研究（N>100 的實證調查不存在），現有材料分三類，各自對應前面文獻的一條線：

**（1）一手案例敘事，集中在 GAI 年會生態系。** [Generative AI 年會](https://gaiconf.com/)2026 直接開設「Vibe Coding 年會」場次，受眾定義為「不會寫程式、但已用 Claude Code / Codex 把事情自動化的人」——此族群在台灣已多到自成年會 track。其[部落格／播客系列](https://blog.gaiconf.com/2026/peggy-lo-muggle-ai-agent/)有多集第一人稱路徑敘事（如羅佩琪：#047 文組專員的 AI Coding 突圍記、#052 用 AI Agent 讓盲人媽媽第一次自己網購），細節多在會員牆後。[聯合新聞網對創辦人李慕約的報導](https://udn.com/news/story/6837/8849640)描述社群樣貌，並引羅佩琪的在地假說「你在組織裡越基層，越適合學 AI 編碼」（基層有明確應用場景）——與「堪用 regime 紅利最大」（§5）同構。已見案例主角多為「稍有底子的文組／基層實務者」，與 §4「健康收斂是條件式的」推論一致。

另一個一手案例來源是羅佩祺主持的 podcast「[Vibe Lab 氛圍實驗室](https://www.youtube.com/@vibelabtw)」（2025-10 開台，約 6 集，2026-02 後停更；無付費牆，YouTube 自動字幕可取得全文）。三集重點：

- **Billy 粘瀚文（大人學前製作人，自述文組麻瓜）**：做出 podcast 內容生成 SaaS「Wrivo」。實際路徑是緩坡：手工 prompt → n8n no-code 三四個月 → AI 寫產品規格書 → 四家 vibe coding 工具比較後選 Lovable → 收費前主動找工程師 review 金流資安。他自認沒有 n8n 階段直接 vibe coding「會很災難」——功能拆解與技術限制的底子是在 n8n 期補的。撞牆點：推薦點數 bug，AI 每次「修好」都是再疊一層，「已經不是 AI 可以處理的事情了，它需要人工去把糾纏在一起的毛線拆開」。他自己說出畢業線：「寫給自己用當然隨便怎樣都可以，但當你開始收錢、人家可以來告你的時候，你就要自己小心了」。自我評估：「我還是不會基礎魔法，但我可以拿很多魔法武器變成組合技」。主持人總結他與一般 vibe coder 的差距：風險意識＋商業思維。
- **台灣狗語 Jackle & Summer（兩人公司，一工程師一非工程師）**：「上下文工程經營公司」——公司資料只分 wiki／會議記錄／任務三類，隱性知識（飯桌討論、vision）隨時錄音入庫，「我的 prompt 只有一行字，但我的 context 是背後我整個公司的資料」。非工程師的 Summer 做出 AI 會議主持人之前讀完 BMAD 整個 repository、CS50、兩年份李宏毅課程；直接 copy BMAD prompt 失敗（「還是要讀書啊」）。現場 demo 用 Claude Code 生成 SBIR 計畫書：公司資料裡有的都對，沒有的（資本額）「它就會瞎掰……它的邏輯是要讓這份計畫會過」——「答案默默是錯的」（§5）的在地實例，靠人的領域知識當場抓出。界線：情緒仲裁不交 AI、提煉進 wiki 由人做、「記憶可以外包，思考流程要留在大腦」。羅佩祺在節目中的評語與 §4 推論一致：「這種程度的東西真的不是可以速成的，背後是非常多底層知識堆疊內化之後才寫得出來的」。
- **海總理（前 StreetVoice 總經理、USPACE AI 長）**：注意——**他是工程師出身（前技術主管），是專業者上界對照組，不是非工程師案例**。同時 5 個產品、開車用語音+Claude Code 開發、產品 Transivox 被收購。多線並行的背後是一整套專業基礎設施：snapshot 專案地圖防 AI 迷路、80% 測試涵蓋率、GitHub Actions 自動 AI code review、防 AI「為了讓測試通過而改程式」。「我們買單的並不是誰寫的，買單的是測試的結果」——與高見龍「測試是人與 AI 的契約」獨立收斂。分析價值：與非工程師的多線發散「行為相似、本質不同」，差別在驗證基礎設施。

**（2）教學者／顧問論述，獨立收斂到驗證之牆。** 高見龍（五倍學院）用 AI 寫 30 萬行程式碼後的結論是「不會檢查的人走不遠」，方法收斂到規格驅動開發與自動化測試（[未來城市＠天下](https://futurecity.cw.com.tw/article/4095)）；[其部落格](https://kaochenlong.com/vibe-coding-vs-software-engineering)論證 vibe coding 跳過學習迴圈、看不懂就只能推倒重來、測試是「人與 AI 的契約」——逐點對應 perception–action gap（§1）與 skill formation（§2）文獻，但為實作獨立所得。心態轉換描述為「不當工程師，改當 PM 和 QA」（[遠見](https://www.gvm.com.tw/article/130091)）。曾思遠（[企業內訓文章](https://www.csie.ntu.edu.tw/~d95015/articles/claude_code.html)；2026 台灣人工智慧年會「非技術人的 AI 協作與專案管理指南」講者）點名最危險的依賴方式是「看不懂 AI 產出也照貼」，但未給出「何時交回工程師」的臨界點——這條界線在台灣論述中仍是空缺。[台灣人工智慧學校 2026 年會](https://conf2026.aiacademy.tw/)人文軌另有障礙者 AI Agent、張老師基金會「AI 小伴」、報導者人機協作等講題，非技術者應用已進入主流年會正式議程。教學端的具體答案卷是 Mosky（劉依語，前 Pinkoi 工程主管）的課程「[從零開始 AI 寫程式](https://learn.mosky.tw/courses/ai-coding)」（NT$6,280、10 小時、明示零背景適用）：「1% 關鍵知識」的實質內容是需求分析、解法設計、開發實作、測試維護、新工具解析五篇——即拔掉語法的軟體工程流程骨架，測試維護獨立成篇；三個應用篇（Apps Script 行政自動化、爬蟲、個人網頁）全部落在 §5 的堪用 regime。

**台灣各源頭的收斂與一個修正。** Mosky 課程、高見龍（規格＋測試）、Billy（規格書起手＋工程師守門）、Summer（先讀 BMAD 再動手）、海總理（測試契約）——五個彼此獨立的源頭，答案收斂在同一處：**非工程師缺的 1% 不是語法，是規格與驗證**。且 Billy 與 Summer 兩例顯示這個 1% 是在途中補的（n8n 三四個月／BMAD+CS50），不是出發前就有——對 §4「健康收斂是條件式的」的修正：條件不是「本來就有底子」，而是「有足夠動力在途中補底子」，而動力在已見案例中都來自具體且重複發生的痛點（Billy 的三人力內容產線、Summer 的公司協作、羅佩琪的基層業務場景）。

**（3）媒體與資安報導：試算表 regime 的風險已在台灣成案。** [iThome 報導](https://www.ithome.com.tw/news/176269)（原文擋外部抓取，數字來自搜尋摘要與[轉述](https://pbtw.tw/vibe-coding-security-guide/)，引用時宜再核實）：資安業者發現約兩千個員工自建的 vibe coding 企業應用暴露敏感資料、普遍缺乏基本身分驗證；引中華電信 2026-06 統計，66% 員工在公司內網直接使用 AI 工具。即 §5「拋棄式軟體活進正式流程」的在地實例。工程社群的反向論述亦已出現（[「Vibe Coding 已死，該學代理工程」](https://ithelp.ithome.com.tw/articles/10399866)），主張重點是可執行、可驗證、可維護的規格，與國際方向一致。

缺口：GAI 年會生態系的第一人稱路徑敘事多在付費牆後（Vibe Lab podcast 是免費例外）；要深入，訂閱 GAI 年會內容或直接訪談比二手爬文有效。

## 來源

學術：

- [From Prompting to Verification: How Experience Shapes Vibe Coding Practices（arXiv 2605.24521）](https://arxiv.org/abs/2605.24521)
- [How AI Impacts Skill Formation（arXiv 2601.20245）](https://arxiv.org/html/2601.20245v2)
- [From Junior to Senior: Allocating Agency in Agentic AI-Mediated Software Engineering（CHI 2026 / arXiv 2602.00496）](https://arxiv.org/abs/2602.00496)
- [Good Vibrations: Co-Creation, Communication, Flow, and Trust in Vibe Coding（arXiv 2509.12491）](https://arxiv.org/abs/2509.12491)
- [Calibrated Trust in Dealing with LLM Hallucinations（arXiv 2512.09088）](https://arxiv.org/pdf/2512.09088)
- [CS Achievement and Writing Skills Predict Vibe Coding Proficiency（CHI 2026 / arXiv 2603.14133）](https://arxiv.org/html/2603.14133)
- [Non-programmers Assessing AI-Generated Code（arXiv 2508.06484）](https://arxiv.org/pdf/2508.06484)
- [Professional Software Developers Don't Vibe, They Control（arXiv 2512.14012）](https://arxiv.org/pdf/2512.14012)
- [Understanding Conversational Programmers（CHI 2016）](https://dl.acm.org/doi/10.1145/2858036.2858323)、[Perceptions of Non-CS Majors in Intro Programming（VL/HCC 2015）](https://pg.ucsd.edu/publications/conversational-programmers-non-CS-majors_VLHCC-2015.pdf)
- [Adoption and Impact of Command-Line AI Coding Agents: Microsoft 部署研究（arXiv 2607.01418）](https://arxiv.org/abs/2607.01418)
- [Beginners Struggle to Understand LLM-Generated Code（ACM）](https://dl.acm.org/doi/pdf/10.1145/3696630.3731663)
- [What We Know About Spreadsheet Errors（Panko）](https://www.researchgate.net/publication/228662532_What_We_Know_About_Spreadsheet_Errors)、[What We Don't Know About Spreadsheet Errors Today](https://arxiv.org/pdf/1602.02601)、[Errors in Operational Spreadsheets](https://mba.tuck.dartmouth.edu/spreadsheet/product_pubs_files/errors.pdf)

調查與論述：

- [Coding agents in the social sciences — Anthropic](https://www.anthropic.com/research/coding-agents-social-sciences)
- [The 70% Problem — Addy Osmani](https://addyo.substack.com/p/the-70-problem-hard-truths-about)、[The Last Thirty Per Cent](https://www.organisationalprompts.ai/p/the-last-thirty-per-cent-is-where)
- [Malleable Software in the Age of LLMs — Geoffrey Litt](https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html)、[Malleable Software — Ink & Switch](https://www.inkandswitch.com/essay/malleable-software/)
- [Vibe Coding, Six Months Later: The Honeymoon's Over — The New Stack](https://thenewstack.io/vibe-coding-six-months-later-the-honeymoons-over/)

台灣（2026-08-29 檢索）：

- [Generative AI 年會（含 Vibe Coding 年會場次）](https://gaiconf.com/)、[GAI 年會部落格／播客系列](https://blog.gaiconf.com/2026/peggy-lo-muggle-ai-agent/)
- [串起一群自學者，創生成式 AI 年會 — 聯合新聞網](https://udn.com/news/story/6837/8849640)
- [2026 台灣人工智慧年會（台灣人工智慧學校）](https://conf2026.aiacademy.tw/)
- [用 AI 寫 30 萬行程式碼的體悟（高見龍）— 未來城市＠天下](https://futurecity.cw.com.tw/article/4095)、[AI 時代寫程式，你是在學習還是在偷懶？— 高見龍](https://kaochenlong.com/vibe-coding-vs-software-engineering)、[遠見專訪](https://www.gvm.com.tw/article/130091)
- [AI 工具與 Vibe Coding 企業內訓 — 曾思遠](https://www.csie.ntu.edu.tw/~d95015/articles/claude_code.html)
- [員工自建 Vibe Coding 應用成影子 AI 新風險 — iThome](https://www.ithome.com.tw/news/176269)（原文未能直接核實，經[轉述](https://pbtw.tw/vibe-coding-security-guide/)）
- [「Vibe Coding」已死，2026 年工程師真正該學的是代理工程 — iT 邦幫忙](https://ithelp.ithome.com.tw/articles/10399866)
- [Vibe Lab 氛圍實驗室（羅佩祺主持之 podcast）](https://www.youtube.com/@vibelabtw)——引用集數：Billy 粘瀚文（2026-01-04）、台灣狗語 Jackle & Summer（2025-12-03）、海總理（2026-02-11）；內容取自 YouTube 自動字幕，引句可能有辨識誤差
- [從零開始 AI 寫程式 — Mosky 劉依語](https://learn.mosky.tw/courses/ai-coding)

---

編修紀錄：2026-08-29 §4 的收斂條件原寫「本來就有底子」，依 §6 台灣案例修正為「有底子、或有動力在途中補底子」。
