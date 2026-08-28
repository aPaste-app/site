const translations = {
  zh: {
    pageTitle: "aPaste — macOS 剪贴板历史管理器",
    pageDescription: "aPaste 是一款 macOS 剪贴板管理器：快速搜索剪贴板历史，用 Pinboard 保存常用内容，全键盘操作，机密与临时内容默认不记录。",
    skipLink: "跳到主要内容",
    navFeatures: "功能",
    navShowcase: "预览",
    navPrivacy: "隐私",
    navInstall: "安装",
    navFaq: "常见问题",
    navDownload: "下载",
    navGet: "下载 aPaste",
    navMenuOpen: "打开菜单",
    navMenuClose: "关闭菜单",
    navMainLabel: "主导航",
    navMobileLabel: "移动端导航",
    showcaseTabsLabel: "选择预览",
    heroEyebrow: "aPaste for macOS 15+",
    heroTitleLead: "剪贴板历史，",
    heroTitleAccent: "一搜即得。",
    heroCopy: "按 ⌃` 呼出面板，输入关键词就能搜到之前复制过的内容。常用内容存进 Pinboard，选中后按 Return 直接粘贴回当前 App。",
    downloadLatest: "下载 aPaste",
    heroMetaLocal: "数据保存在本机",
    heroMetaAccount: "无需账号",
    heroMetaFree: "免费使用",
    openWith: "按",
    openInstantly: "打开 aPaste",
    backtickName: "反引号（Esc 下方那个键）",
    trustKeyboardTitle: "全键盘操作",
    trustKeyboardCopy: "打开、搜索、选择、粘贴，全程不碰鼠标",
    trustPrivacyTitle: "隐私默认开启",
    trustPrivacyCopy: "机密与临时内容默认不记录",
    trustSyncTitle: "文件夹同步",
    trustSyncCopy: "任意共享文件夹，加密可选",
    trustNativeTitle: "菜单栏 App",
    trustNativeCopy: "不占 Dock，菜单栏图标也可隐藏",
    featuresKicker: "核心功能",
    featuresTitle: "搜索历史。保存常用。",
    featuresCopy: "剪贴板历史以可搜索的卡片呈现，常用内容单独放在 Pinboard；需要连续粘贴多条时用 aPaste Stack，粘贴前还能顺手把内容处理好。",
    featureSearchTitle: "输入即可搜索。",
    featureSearchCopy: "按内容类型（文本、链接、图片、文件）、日期或来源 App 筛选；开启图片文字识别后，图里的文字也能被搜到。方向键选择，Return 粘贴。",
    featurePinTitle: "常用内容，存进 Pinboard。",
    featurePinCopy: "代码片段、地址、回复模板放进彩色 Pinboard，⌘← / ⌘→ 切换。清理历史时 Pinboard 不受影响。",
    pinTagApi: "接口",
    pinNoteToken: "Bearer ••••••••",
    pinTagSupport: "客服",
    pinTitleReply: "感谢反馈，已收到",
    pinNoteTemplate: "回复模板",
    pinTagBrand: "品牌",
    pinNoteColor: "主色紫",
    featureStackTitle: "aPaste Stack：攒一批，再依次粘贴。",
    featureStackCopy: "⌘⇧C 打开 Stack，连续复制多条内容，然后按顺序一条条粘贴出去，整理表格和填表时特别省事。",
    stackItemName: "张三",
    featurePreviewTitle: "四类内容，各有各的预览。",
    featurePreviewCopy: "文本保留富文本格式并识别其中的颜色值，链接可抓取网页标题和图片（这项联网抓取可以关掉），图片和文件各有对应卡片。",
    featureRulesTitle: "让规则自动整理。",
    featureRulesCopy: "按内容类型、来源 App、文本（支持正则）、网址主机、文件扩展名或体积区间，自动忽略或固定到指定 Pinboard。规则可以先在已有历史上试跑一遍。",
    ruleChipApp: "来源 App",
    ruleChipText: "文本包含",
    ruleResultPin: "固定到",
    ruleResultBoard: "开发",
    featureActionsTitle: "粘贴前，先把内容处理好。",
    featureActionsCopy: "卡片右键菜单里内置 9 个快捷处理动作，处理结果直接复制到剪贴板。",
    actionsMenuTitle: "快捷动作",
    actionPrettyJson: "美化 JSON",
    actionMinifyJson: "压缩 JSON",
    actionTracking: "移除跟踪参数",
    actionMarkdown: "复制为 Markdown 链接",
    actionRecognized: "复制识别文字",
    actionTransform: "大小写 / 单行 / 去空白",
    featureLayoutTitle: "两种面板形态，按习惯选。",
    featureLayoutCopy: "底部面板贴着屏幕下沿横向浏览；Command Center 是可调整大小的窗口，左边列表右边详情，适合长内容。",
    layoutBottomName: "底部面板",
    layoutCenterName: "Command Center",
    featurePrivacyTitle: "机密与临时内容，默认不记录。",
    featurePrivacyCopy: "密码管理器等标记为机密的内容、以及临时剪贴板内容，开箱即被跳过；还可以按 App 完全停止记录。截图 / 录屏隐藏是一个可选开关，默认关闭，需要时自行打开。",
    learnPrivacy: "查看隐私与同步",
    consoleTitle: "隐私",
    consoleConfidentialTitle: "机密内容",
    consoleConfidentialCopy: "跳过密码管理器与标记为机密的内容",
    consoleTransientTitle: "临时内容",
    consoleTransientCopy: "跳过标记为临时的剪贴板内容",
    consoleCaptureTitle: "屏幕捕获隐藏",
    consoleCaptureCopy: "可选开关，默认关闭",
    consoleNote: "全部保存在这台 Mac 上",
    showcaseKicker: "界面预览",
    showcaseTitle: "每种内容，都有合适的呈现方式。",
    showcaseCopy: "在面板里快速扫一眼，需要更多上下文时再打开完整预览。",
    showcaseTabCards: "内容卡片",
    showcaseTabLink: "链接预览",
    showcaseTabColor: "颜色预览",
    showcaseTabLight: "浅色模式",
    showcaseAltCards: "aPaste 面板中的剪贴板内容卡片",
    showcaseAltLink: "aPaste 的链接预览",
    showcaseAltColor: "aPaste 的颜色预览",
    showcaseAltLight: "aPaste 浅色模式下的面板",
    flowKicker: "使用方式",
    flowTitle: "从搜索到粘贴，全程使用键盘。",
    flowCopyTitle: "照常复制",
    flowCopyCopy: "支持的内容自动进入历史；被隐私设置或捕获规则排除的内容不会被记录。",
    flowFindTitle: "呼出并搜索",
    flowFindCopy: "按快捷键打开面板，输入关键词，或用 ⌘← / ⌘→ 切到 Pinboard。",
    flowPasteTitle: "按 Return 粘贴",
    flowPasteCopy: "选中内容按 Return，直接粘贴回刚才使用的 App（需要辅助功能权限）。",
    privacyKicker: "隐私与同步",
    privacyTitle: "历史保存在本机。同步由你决定。",
    privacyCopy: "aPaste 不需要账号，也没有自建云服务。只有在你亲自指定一个共享文件夹之后，数据才会被写出去——把它放进 iCloud Drive、Dropbox 或 Syncthing 的同步目录，多台 Mac 就能共用同一份历史。",
    privacyPointOne: "机密（密码管理器）与临时内容默认不记录",
    privacyPointTwo: "可以按 App 完全停止记录，也能临时暂停捕获",
    privacyPointThree: "文件夹同步可开启端到端加密，默认关闭",
    privacyPointFour: "链接预览是唯一的联网功能，可以随时关掉",
    privacyPointFive: "历史可按天数或条数自动清理，也能一键清空",
    syncCoreTitle: "共享文件夹",
    syncCoreNote: "端到端加密可选",
    installKicker: "安装与权限",
    installTitle: "三步装好，两分钟搞定。",
    installCopy: "aPaste 目前没有 Apple 开发者签名与公证，所以需要手动放行一次。下面每一步都说明了原因。",
    installStepOneTitle: "下载对应芯片的 DMG",
    installStepOneCopy: "每个版本提供两个安装包：Apple Silicon 用 <code>-arm64</code>，Intel 用 <code>-x86_64</code>。不确定的话点左上角的苹果菜单 →「关于本机」看芯片型号。也可以用 Homebrew，它会自动选对架构。",
    installStepTwoTitle: "移除隔离标记",
    installStepTwoCopy: "把 aPaste.app 拖进「应用程序」后，macOS 可能提示「已损坏，无法打开」。这不是文件损坏，而是应用只做了本地签名、没有经过 Apple 公证，Gatekeeper 会拦下来。执行下面这条命令即可放行：",
    installStepThreeTitle: "授予辅助功能权限",
    installStepThreeCopy: "按 Return 直接粘贴回原 App 是通过模拟 ⌘V 实现的，需要在「系统设置 → 隐私与安全性 → 辅助功能」里勾选 aPaste。全局快捷键不依赖这个权限；不授权时仍可复制内容后自己粘贴。",
    faqKicker: "常见问题",
    faqTitle: "安装前后最常被问到的几件事。",
    faqOneQ: "提示「aPaste 已损坏，无法打开」怎么办？",
    faqOneA: "应用没有经过 Apple 公证，Gatekeeper 会给出这个误导性提示。在终端执行 <code>xattr -dr com.apple.quarantine /Applications/aPaste.app</code> 后即可正常打开，安装包本身是完好的。",
    faqTwoQ: "为什么需要辅助功能权限？",
    faqTwoA: "只有「粘贴回当前 App」这一个功能需要它——aPaste 通过模拟 ⌘V 完成粘贴。不授权时，其余功能（记录、搜索、Pinboard、复制到剪贴板）都照常工作。",
    faqThreeQ: "数据存在哪里？会上传吗？",
    faqThreeA: "历史与 Pinboard 存在本机的本地数据库里。除了链接预览（可关闭）会请求网页信息之外，aPaste 不会主动联网；只有你自己指定共享文件夹后，才会向那个文件夹写出同步数据。",
    faqFourQ: "多台 Mac 怎么同步？",
    faqFourA: "在两台 Mac 上指向同一个共享文件夹即可，例如 iCloud Drive、Dropbox 或 Syncthing 目录。aPaste 只负责按月分片写 NDJSON 记录和资源文件，同步本身交给你选择的工具。需要更强保护时可以开启端到端加密并设置口令。",
    faqFiveQ: "支持哪些内容类型？",
    faqFiveA: "文本、链接、图片、文件四类。文本还会额外识别富文本格式和颜色值，图片可开启文字识别（OCR）后参与搜索。",
    faqSixQ: "能临时不记录吗？",
    faqSixA: "可以。菜单栏里能临时暂停捕获，也可以在设置里把某些 App 加入忽略名单，或者用捕获规则按内容类型、文本、网址、扩展名等条件自动忽略。",
    faqSevenQ: "如果我想删掉所有数据？",
    faqSevenA: "设置里可以一键清空历史，也能设置按天数或条数自动清理。删除应用后，把同步文件夹里的 aPaste 数据文件一并删除即可。",
    downloadKicker: "获取 aPaste",
    downloadTitle: "下载 aPaste，开始使用。",
    downloadCopy: "需要 macOS 15 或更高版本。发布页里 Apple Silicon 与 Intel 各有一个 DMG，按芯片选择即可；Homebrew 会自动选对架构。",
    downloadMac: "下载最新版本",
    viewReleases: "更新日志与历史版本",
    downloadNote: "首次打开需要移除隔离标记，粘贴功能需要辅助功能权限。<a href=\"#install\">查看安装步骤</a>",
    copyCommand: "复制命令",
    commandCopied: "已复制",
    requirements: "两个安装包按芯片分别构建，并非通用二进制。",
    footerTagline: "剪贴板历史，一搜即得。",
    footerReleases: "更新日志",
    footerIssues: "反馈问题",
    themeLabel: "切换外观",
    languageLabel: "Switch to English"
  },
  en: {
    pageTitle: "aPaste — Clipboard history, one search away",
    pageDescription: "aPaste is a keyboard-first clipboard manager for macOS: search your clipboard history, keep reusable items on Pinboards, and skip confidential content by default.",
    skipLink: "Skip to main content",
    navFeatures: "Features",
    navShowcase: "Preview",
    navPrivacy: "Privacy",
    navInstall: "Install",
    navFaq: "FAQ",
    navDownload: "Download",
    navGet: "Get aPaste",
    navMenuOpen: "Open menu",
    navMenuClose: "Close menu",
    navMainLabel: "Main navigation",
    navMobileLabel: "Mobile navigation",
    showcaseTabsLabel: "Choose a preview",
    heroEyebrow: "aPaste for macOS 15+",
    heroTitleLead: "Your clipboard history,",
    heroTitleAccent: "one search away.",
    heroCopy: "Press ⌃` to open the panel and type to find anything you copied. Keep reusable items on Pinboards, then press Return to paste straight back into the app you were using.",
    downloadLatest: "Download aPaste",
    heroMetaLocal: "Stored on your Mac",
    heroMetaAccount: "No account required",
    heroMetaFree: "Free to use",
    openWith: "Press",
    openInstantly: "to open aPaste",
    backtickName: "Backtick (the key below Esc)",
    trustKeyboardTitle: "Keyboard-first",
    trustKeyboardCopy: "Open, search, select and paste without the mouse",
    trustPrivacyTitle: "Private by default",
    trustPrivacyCopy: "Confidential and transient content is never recorded",
    trustSyncTitle: "Folder sync",
    trustSyncCopy: "Any shared folder, encryption optional",
    trustNativeTitle: "Menu bar app",
    trustNativeCopy: "No Dock icon, and the menu bar icon can be hidden",
    featuresKicker: "Core features",
    featuresTitle: "Search it. Keep it. Reuse it.",
    featuresCopy: "History becomes searchable cards and reusable items live on Pinboards. aPaste Stack covers the times you need to paste several things in a row, and quick actions clean the content up first.",
    featureSearchTitle: "Search as you type.",
    featureSearchCopy: "Filter by content type (text, link, image, file), date or source app. With image text recognition on, words inside screenshots are searchable too. Arrow keys to select, Return to paste.",
    featurePinTitle: "Keep reusable items on Pinboards.",
    featurePinCopy: "Snippets, addresses and reply templates live on colour-coded Pinboards, switched with ⌘← / ⌘→. Clearing history never touches them.",
    pinTagApi: "api",
    pinNoteToken: "Bearer ••••••••",
    pinTagSupport: "support",
    pinTitleReply: "Thanks for reaching out",
    pinNoteTemplate: "Reply template",
    pinTagBrand: "brand",
    pinNoteColor: "Primary violet",
    featureStackTitle: "aPaste Stack: collect first, paste in order.",
    featureStackCopy: "Press ⌘⇧C to open the Stack, copy several items in a row, then paste them out one by one in order — ideal for filling forms and assembling tables.",
    stackItemName: "Jane Doe",
    featurePreviewTitle: "Four content types, four kinds of preview.",
    featurePreviewCopy: "Text keeps its rich formatting and detected colour values, links can fetch page titles and images (that network lookup is switchable), and images and files each get their own card.",
    featureRulesTitle: "Let rules organize for you.",
    featureRulesCopy: "Ignore new captures automatically, or pin them to a specific Pinboard, based on content type, source app, text (regex supported), URL host, file extension or size range. Rules can be dry-run against your existing history first.",
    ruleChipApp: "Source app",
    ruleChipText: "Text contains",
    ruleResultPin: "Pin to",
    ruleResultBoard: "Development",
    featureActionsTitle: "Make it useful before you paste.",
    featureActionsCopy: "Nine quick actions live in the card's right-click menu; the result goes straight to your clipboard.",
    actionsMenuTitle: "Quick actions",
    actionPrettyJson: "Pretty-print JSON",
    actionMinifyJson: "Minify JSON",
    actionTracking: "Remove tracking parameters",
    actionMarkdown: "Copy as Markdown link",
    actionRecognized: "Copy recognized text",
    actionTransform: "Case / one line / trim whitespace",
    featureLayoutTitle: "Two panel layouts, your pick.",
    featureLayoutCopy: "The bottom panel hugs the edge of the screen for horizontal scanning; Command Center is a resizable window with a list on the left and details on the right, better for long content.",
    layoutBottomName: "Bottom panel",
    layoutCenterName: "Command Center",
    featurePrivacyTitle: "Confidential and transient content is skipped.",
    featurePrivacyCopy: "Content marked confidential by password managers, and transient clipboard data, are ignored out of the box, and you can stop capture entirely for any app. Hiding contents from screenshots and recordings is a separate switch that is off by default — turn it on when you need it.",
    learnPrivacy: "See privacy and sync",
    consoleTitle: "Privacy",
    consoleConfidentialTitle: "Confidential content",
    consoleConfidentialCopy: "Skip password managers and concealed data",
    consoleTransientTitle: "Transient content",
    consoleTransientCopy: "Skip clipboard items marked as temporary",
    consoleCaptureTitle: "Hide from screen capture",
    consoleCaptureCopy: "Optional switch, off by default",
    consoleNote: "Everything stays on this Mac",
    showcaseKicker: "Interface preview",
    showcaseTitle: "The right view for every kind of copy.",
    showcaseCopy: "Scan quickly in the panel, then open a full preview when you need more context.",
    showcaseTabCards: "Rich cards",
    showcaseTabLink: "Link preview",
    showcaseTabColor: "Colour preview",
    showcaseTabLight: "Light mode",
    showcaseAltCards: "Clipboard cards in the aPaste panel",
    showcaseAltLink: "Link preview in aPaste",
    showcaseAltColor: "Colour preview in aPaste",
    showcaseAltLight: "The aPaste panel in light mode",
    flowKicker: "How it works",
    flowTitle: "From search to paste, all on the keyboard.",
    flowCopyTitle: "Copy as usual",
    flowCopyCopy: "Supported content lands in your history automatically; anything excluded by privacy settings or capture rules is never recorded.",
    flowFindTitle: "Open and search",
    flowFindCopy: "Hit the shortcut, type a keyword, or switch Pinboards with ⌘← / ⌘→.",
    flowPasteTitle: "Press Return to paste",
    flowPasteCopy: "Select an item and press Return to paste it back into the app you just left (needs Accessibility permission).",
    privacyKicker: "Privacy and sync",
    privacyTitle: "Local first. Sync only when you choose.",
    privacyCopy: "aPaste has no account and no cloud service of its own. Data leaves your Mac only after you pick a shared folder yourself — put it inside iCloud Drive, Dropbox or a Syncthing directory and several Macs share one history.",
    privacyPointOne: "Confidential (password manager) and transient content is never recorded",
    privacyPointTwo: "Stop capture completely for any app, or pause capture temporarily",
    privacyPointThree: "Folder sync can be end-to-end encrypted; off by default",
    privacyPointFour: "Link previews are the only network feature, and they can be switched off",
    privacyPointFive: "History can auto-clean by age or item count, or be erased in one click",
    syncCoreTitle: "Shared folder",
    syncCoreNote: "End-to-end encryption optional",
    installKicker: "Install and permissions",
    installTitle: "Three steps, about two minutes.",
    installCopy: "aPaste is not signed with an Apple Developer ID and not notarized, so macOS needs you to allow it once. Each step below explains why.",
    installStepOneTitle: "Download the DMG for your chip",
    installStepOneCopy: "Every release ships two installers: <code>-arm64</code> for Apple Silicon and <code>-x86_64</code> for Intel. Not sure which? Open the Apple menu → About This Mac. Homebrew picks the right one for you.",
    installStepTwoTitle: "Remove the quarantine flag",
    installStepTwoCopy: "After dragging aPaste.app into Applications, macOS may claim it is damaged. The file is fine — the app is only ad-hoc signed and never went through Apple notarization, so Gatekeeper blocks it. This command clears it:",
    installStepThreeTitle: "Grant Accessibility permission",
    installStepThreeCopy: "Pasting back into the previous app works by simulating ⌘V, which requires aPaste in System Settings → Privacy & Security → Accessibility. Global shortcuts do not need it; without it you can still copy an item and paste it yourself.",
    faqKicker: "FAQ",
    faqTitle: "What people ask before and after installing.",
    faqOneQ: "macOS says \"aPaste is damaged and can't be opened\". Now what?",
    faqOneA: "The app is not notarized, and that is the misleading message Gatekeeper shows. Run <code>xattr -dr com.apple.quarantine /Applications/aPaste.app</code> in Terminal and it opens normally — the download itself is intact.",
    faqTwoQ: "Why does it need Accessibility permission?",
    faqTwoA: "Only for pasting back into the frontmost app, which aPaste does by simulating ⌘V. Without the permission everything else — capture, search, Pinboards, copying to the clipboard — works as usual.",
    faqThreeQ: "Where is my data, and does it get uploaded?",
    faqThreeA: "History and Pinboards live in a local database on your Mac. Apart from link previews (switchable), aPaste makes no network requests, and it only writes sync data into a shared folder you selected yourself.",
    faqFourQ: "How do I sync several Macs?",
    faqFourA: "Point both Macs at the same shared folder, for example inside iCloud Drive, Dropbox or a Syncthing directory. aPaste just writes monthly NDJSON shards plus asset files; the syncing itself is done by the tool you chose. Enable end-to-end encryption with a passphrase if you want more protection.",
    faqFiveQ: "Which content types are supported?",
    faqFiveA: "Four: text, links, images and files. Text items additionally get rich-text previews and detected colour values, and images can be searched by recognized text once OCR is enabled.",
    faqSixQ: "Can I stop it recording for a while?",
    faqSixA: "Yes. Pause capture from the menu bar, add apps to the ignore list in Settings, or let capture rules ignore items automatically by content type, text, URL, extension and more.",
    faqSevenQ: "How do I delete everything?",
    faqSevenA: "Settings can erase the history in one click, and can auto-clean by age or item count. After deleting the app, remove the aPaste data files from your sync folder as well.",
    downloadKicker: "Ready when you are",
    downloadTitle: "Download aPaste and get going.",
    downloadCopy: "Requires macOS 15 or later. The release page has one DMG for Apple Silicon and one for Intel — pick the one matching your chip, or let Homebrew decide.",
    downloadMac: "Download latest release",
    viewReleases: "Changelog and older releases",
    downloadNote: "First launch needs the quarantine flag removed, and pasting needs Accessibility permission. <a href=\"#install\">See the install steps</a>",
    copyCommand: "Copy command",
    commandCopied: "Copied",
    requirements: "Apple Silicon and Intel ship as separate builds — not a universal binary.",
    footerTagline: "Clipboard history, one search away.",
    footerReleases: "Changelog",
    footerIssues: "Report an issue",
    themeLabel: "Toggle appearance",
    languageLabel: "切换为中文"
  }
};

const storage = {
  read(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      /* private mode or file:// — preferences simply do not persist */
    }
  }
};

const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const navToggle = document.querySelector("#nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const metaDescription = document.querySelector('meta[name="description"]');
const socialTitle = document.querySelector('meta[property="og:title"]');
const socialDescription = document.querySelector('meta[property="og:description"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const showcaseImage = document.querySelector("#showcase-image");
const showcaseFrame = document.querySelector("#showcase-panel");
const showcaseTabs = [...document.querySelectorAll(".showcase-tab")];

let activeLanguage = storage.read("apaste-language") ||
  (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

function applyLanguage(language) {
  const dictionary = translations[language];
  activeLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.pageTitle;
  metaDescription.setAttribute("content", dictionary.pageDescription);
  socialTitle?.setAttribute("content", dictionary.pageTitle);
  socialDescription?.setAttribute("content", dictionary.pageDescription);
  twitterTitle?.setAttribute("content", dictionary.pageTitle);
  twitterDescription?.setAttribute("content", dictionary.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = dictionary[element.dataset.i18nTitle];
    if (value) element.setAttribute("title", value);
  });

  languageToggle.textContent = language === "zh" ? "EN" : "中";
  languageToggle.setAttribute("aria-label", dictionary.languageLabel);
  themeToggle.setAttribute("aria-label", dictionary.themeLabel);
  updateNavToggleLabel();
  storage.write("apaste-language", language);
  updateShowcaseAlt();
}

function updateShowcaseAlt() {
  const activeTab = document.querySelector(".showcase-tab.active");
  if (!activeTab) return;
  const altKey = activeTab.dataset.altKey;
  showcaseImage.alt = translations[activeLanguage][altKey] || "aPaste preview";
}

function updateNavToggleLabel() {
  const dictionary = translations[activeLanguage];
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-label", isOpen ? dictionary.navMenuClose : dictionary.navMenuOpen);
}

function setMobileNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
  if (open) {
    mobileNav.hidden = false;
  } else {
    mobileNav.hidden = true;
  }
  updateNavToggleLabel();
}

navToggle.addEventListener("click", () => {
  setMobileNav(navToggle.getAttribute("aria-expanded") !== "true");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMobileNav(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMobileNav(false);
    navToggle.focus();
  }
});

const desktopQuery = matchMedia("(min-width: 981px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMobileNav(false);
});

languageToggle.addEventListener("click", () => {
  applyLanguage(activeLanguage === "zh" ? "en" : "zh");
});

const panelImage = document.querySelector("#panel-image");
const metaThemeLight = document.querySelector("#meta-theme-light");
const metaThemeDark = document.querySelector("#meta-theme-dark");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (panelImage) {
    const next = theme === "light" ? panelImage.dataset.srcLight : panelImage.dataset.srcDark;
    if (next && panelImage.getAttribute("src") !== next) panelImage.src = next;
  }
  if (metaThemeLight) metaThemeLight.setAttribute("media", theme === "light" ? "all" : "not all");
  if (metaThemeDark) metaThemeDark.setAttribute("media", theme === "dark" ? "all" : "not all");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  storage.write("apaste-theme", nextTheme);
});

function activateTab(tab, { focus = false } = {}) {
  if (tab.classList.contains("active")) return;

  showcaseTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
    if (isActive) {
      item.removeAttribute("tabindex");
    } else {
      item.setAttribute("tabindex", "-1");
    }
  });

  showcaseFrame?.setAttribute("aria-labelledby", tab.id);
  if (focus) tab.focus();

  const swap = () => {
    showcaseImage.src = tab.dataset.src;
    updateShowcaseAlt();
    showcaseImage.classList.remove("changing");
  };

  showcaseImage.classList.add("changing");
  const preload = new Image();
  preload.addEventListener("load", () => window.setTimeout(swap, 100), { once: true });
  preload.addEventListener("error", swap, { once: true });
  preload.src = tab.dataset.src;
}

showcaseTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (offset === 0) return;
    event.preventDefault();
    const next = showcaseTabs[(index + offset + showcaseTabs.length) % showcaseTabs.length];
    activateTab(next, { focus: true });
  });
});

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

function wireCopyButton(button, source) {
  if (!button || !source) return;
  const label = button.querySelector("span") || button;
  const text = source.textContent;

  button.addEventListener("click", async () => {
    try {
      await copyText(text);
      button.classList.add("copied");
      label.textContent = translations[activeLanguage].commandCopied;
      window.setTimeout(() => {
        button.classList.remove("copied");
        label.textContent = translations[activeLanguage].copyCommand;
      }, 1800);
    } catch {
      label.textContent = translations[activeLanguage].copyCommand;
    }
  });
}

wireCopyButton(document.querySelector("#copy-command"), document.querySelector("#brew-command"));
wireCopyButton(document.querySelector("#copy-quarantine"), document.querySelector("#quarantine-command"));

const header = document.querySelector("#site-header");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = [...document.querySelectorAll(".reveal")];

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.1 });

  revealElements.forEach((element) => revealObserver.observe(element));
}

applyLanguage(activeLanguage);
applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
