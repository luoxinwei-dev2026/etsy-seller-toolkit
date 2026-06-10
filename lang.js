const translations = {
    home: { zh: "🏠 首页", en: "🏠 Home" },
    btn_back: { zh: "返回首页", en: "Back to Home" },
    footer_copyright: { zh: "© 2026 跨境卖家工具箱. 保留所有权利.", en: "© 2026 Cross-border Seller Toolkit. All Rights Reserved." },
    version_title: { zh: "版本更新日志", en: "Version Update Log" },
    version_v10: { zh: "V1.0.0 | 2026-06-10 : 基础功能上线，支持电商、物流工具，双语及深色模式", en: "V1.0.0 | 2026-06-10 : Basic functions launched, with e-commerce & logistics tools, bilingual & dark mode supported" },
    version_v11: { zh: "V1.1.0 | 待发布：优化移动端布局，增加表单验证与操作提示", en: "V1.1.0 | Pending : Optimize mobile layout, add form validation & operation tips" },
    site_title: { zh: "Etsy 卖家工具箱", en: "Etsy Seller Toolkit" },
    site_desc: { zh: "一站式跨境电商运营工具，助你高效管理店铺", en: "One-stop cross-border e-commerce tools to help you manage your store efficiently" },

    profit: { zh: "💰 利润计算", en: "💰 Profit" },
    vat: { zh: "💶 VAT 计算", en: "💶 VAT" },
    shipping: { zh: "🚚 运费估算", en: "🚚 Shipping" },
    forbid: { zh: "🚫 禁词检测", en: "🚫 Forbidden Words" },
    currency: { zh: "💱 实时汇率", en: "💱 Currency" },
    size: { zh: "📏 尺寸换算", en: "📏 Size" },
    keyword: { zh: "🔑 关键词拓展", en: "🔑 Keyword" },
    char: { zh: "🔤 字符统计", en: "🔤 Char Counter" },
    stock: { zh: "📦 库存计算", en: "📦 Stock" },
    volweight: { zh: "📐 体积重量", en: "📐 Vol Weight" },
    quote: { zh: "💵 报价毛利", en: "💵 Quote Margin" },
    title: { zh: "📝 标题生成", en: "📝 Title" },
    descgen: { zh: "📄 描述生成", en: "📄 Description" },
    track: { zh: "📦 物流追踪", en: "📦 Tracking" },
    discount: { zh: "💴 折扣计算", en: "💴 Discount" },
    unit: { zh: "⚖️ 通用单位换算", en: "⚖️ Unit Convert" },
    time: { zh: "⏰ 日期计算", en: "⏰ Time Calc" },
    profitrate: { zh: "📈 利润率速算", en: "📈 Profit Rate" },
    textclean: { zh: "🧹 文本清理", en: "🧹 Text Clean" },

    card_profit_title: { zh: "💰 利润计算器", en: "💰 Profit Calculator" },
    card_profit_desc: { zh: "包含手续费、运费，精准计算净利润与利润率", en: "Calculate net profit, gross and net margin accurately" },
    card_vat_title: { zh: "💶 增值税计算器", en: "💶 VAT Calculator" },
    card_vat_desc: { zh: "计算欧洲站点VAT税费，合规申报不踩坑", en: "Calculate VAT costs for European sites" },
    card_shipping_title: { zh: "🚚 运费估算器", en: "🚚 Shipping Estimator" },
    card_shipping_desc: { zh: "根据重量、体积，预估国际物流成本", en: "Estimate international shipping costs" },
    card_forbid_title: { zh: "🚫 禁词检测器", en: "🚫 Forbidden Words Checker" },
    card_forbid_desc: { zh: "检测商品标题/描述中的平台违禁词，降低违规风险", en: "Check sensitive words to avoid violations" },
    card_currency_title: { zh: "💱 实时汇率换算", en: "💱 Currency Converter" },
    card_currency_desc: { zh: "快速换算美元、欧元、英镑等主流货币", en: "Convert multi-currency costs and prices" },
    card_size_title: { zh: "📏 尺寸换算器", en: "📏 Size Converter" },
    card_size_desc: { zh: "英寸/厘米、盎司/克等单位一键换算", en: "Quick inch/cm conversion" },
    card_keyword_title: { zh: "🔑 关键词拓展", en: "🔑 Keyword Expander" },
    card_keyword_desc: { zh: "基于核心词拓展长尾关键词，优化搜索曝光", en: "Generate long-tail keywords" },
    card_char_title: { zh: "🔤 字符统计工具", en: "🔤 Character Counter" },
    card_char_desc: { zh: "统计文本字符数，适配各平台标题/描述限制", en: "Count characters to control text length" },
    card_stock_title: { zh: "📦 库存计算器", en: "📦 Stock Calculator" },
    card_stock_desc: { zh: "计算可售天数，及时补货", en: "Calculate available days to replenish inventory in time" },
    card_volweight_title: { zh: "📐 体积重量计算器", en: "📐 Volume Weight Calculator" },
    card_volweight_desc: { zh: "计算物流体积重，避免额外运费", en: "Calculate volumetric weight" },
    card_quote_title: { zh: "💵 报价毛利计算器", en: "💵 Quote Margin Calculator" },
    card_quote_desc: { zh: "根据目标毛利反推产品售价", en: "Calculate product price based on target margin" },
    card_title_title: { zh: "📝 标题生成器", en: "📝 Title Generator" },
    card_title_desc: { zh: "一键生成合规高流量产品标题", en: "Generate compliant high-traffic product titles" },
    card_descgen_title: { zh: "📄 描述生成器", en: "📄 Description Generator" },
    card_descgen_desc: { zh: "一键生成专业、合规的商品详情描述", en: "Generate professional and compliant product descriptions" },
    card_track_title: { zh: "📦 物流追踪工具", en: "📦 Package Tracker" },
    card_track_desc: { zh: "查询包裹实时物流状态", en: "Check real-time logistics status of packages" },
    card_discount_title: { zh: "💴 折扣计算器", en: "💴 Discount Calculator" },
    card_discount_desc: { zh: "计算折扣价与最终到手价", en: "Calculate discount price and final selling price" },
    card_unit_title: { zh: "⚖️ 通用单位换算", en: "⚖️ General Unit Converter" },
    card_unit_desc: { zh: "重量、长度、体积单位一键转换", en: "One-click conversion of weight, length and volume units" },
    card_time_title: { zh: "⏰ 日期计算器", en: "⏰ Time Calculator" },
    card_time_desc: { zh: "计算日期差、工作日天数", en: "Calculate date differences and working days" },
    card_profitrate_title: { zh: "📈 利润率分析器", en: "📈 Profit Rate Analyzer" },
    card_profitrate_desc: { zh: "快速分析整体利润与净利率", en: "Quickly analyze overall profit and net margin" },
    card_textclean_title: { zh: "🧹 文本清理工具", en: "🧹 Text Cleaner" },
    card_textclean_desc: { zh: "去除多余空格、换行符，整理文案", en: "Remove extra spaces and line breaks to organize text" },

    p1title: { zh: "利润计算器", en: "Profit Calculator" },
    p1desc: { zh: "包含手续费、运费，精准计算净利润与利润率", en: "Calculate net profit and margin including fees and shipping" },
    p2title: { zh: "增值税计算器", en: "VAT Calculator" },
    p2desc: { zh: "计算欧洲站点VAT税费，合规申报不踩坑", en: "Calculate VAT costs for European sites" },
    p3title: { zh: "运费估算器", en: "Shipping Estimator" },
    p3desc: { zh: "预估国际物流费用", en: "Estimate international shipping costs" },
    p4title: { zh: "违禁词检测器", en: "Forbidden Words Checker" },
    p4desc: { zh: "检测敏感词，避免违规下架", en: "Detect sensitive words to avoid violations" },
    p5title: { zh: "实时汇率换算", en: "Currency Converter" },
    p5desc: { zh: "多币种成本与售价换算", en: "Convert multi-currency costs and prices" },
    p6title: { zh: "尺寸换算器", en: "Size Converter" },
    p6desc: { zh: "英寸/厘米快速转换", en: "Inch ↔ Centimeter conversion" },
    p7title: { zh: "关键词拓展", en: "Keyword Expander" },
    p7desc: { zh: "生成长尾词，优化搜索排名", en: "Generate related long-tail keywords" },
    p8title: { zh: "字符统计工具", en: "Character Counter" },
    p8desc: { zh: "统计文案字符数，控制长度", en: "Count characters to control text length" },
    p9title: { zh: "库存计算器", en: "Stock Calculator" },
    p9desc: { zh: "计算可售天数，及时补货", en: "Inventory & stock quantity calculation" },
    p10title: { zh: "体积重量计算器", en: "Volume Weight Calculator" },
    p10desc: { zh: "计算物流体积重，避免额外运费", en: "Calculate logistics volumetric weight" },
    p11title: { zh: "报价毛利计算器", en: "Quote Margin Calculator" },
    p11desc: { zh: "根据目标毛利反推产品售价", en: "Calculate quotation and profit margin" },
    p12title: { zh: "标题生成器", en: "Title Generator" },
    p12desc: { zh: "一键生成合规高流量产品标题", en: "Generate e-commerce product titles" },
    p13title: { zh: "描述生成器", en: "Description Generator" },
    p13desc: { zh: "生成专业合规的商品详情描述", en: "Generate product detailed description" },
    p14title: { zh: "物流追踪工具", en: "Package Tracker" },
    p14desc: { zh: "查询包裹实时物流状态", en: "Track international logistics status" },
    p15title: { zh: "折扣计算器", en: "Discount Calculator" },
    p15desc: { zh: "计算折扣价与最终到手价", en: "Calculate discount & final price" },
    p16title: { zh: "通用单位换算", en: "General Unit Converter" },
    p16desc: { zh: "重量、长度、体积单位一键转换", en: "Weight, length, volume unit conversion" },
    p17title: { zh: "日期计算器", en: "Time Calculator" },
    p17desc: { zh: "计算日期差、工作日天数", en: "Calculate dates and time differences" },
    p18title: { zh: "利润率分析器", en: "Profit Rate Analyzer" },
    p18desc: { zh: "快速分析整体利润与净利率", en: "Quick profit rate analysis" },
    p19title: { zh: "文本清理工具", en: "Text Cleaner" },
    p19desc: { zh: "去除多余空格、换行符，整理文案", en: "Remove extra spaces & line breaks" }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });
}

let isDarkMode = localStorage.getItem('darkMode') === 'true';
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

window.onload = function() {
    switchLang(currentLang);
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};
