// lang.js
const translations = {
    zh: {
        home: "首页",
        profit: "利润计算",
        vat: "增值税",
        shipping: "运费估算",
        forbid: "禁词检测",
        currency: "实时汇率",
        size: "尺寸换算",
        keyword: "关键词拓展",
        char: "字符统计",
        stock: "库存计算",
        volweight: "体积重量",
        quote: "报价毛利",
        title: "标题生成",
        desc: "描述生成",
        track: "物流追踪",
        discount: "折扣计算",
        unit: "通用单位换算",
        time: "日期计算",
        profitrate: "利润率速算",
        textclean: "文本清理",

        p1title: "利润计算器",
        p1desc: "包含手续费、运费，精准计算净利润与利润率",
        p2title: "增值税计算器",
        p2desc: "计算欧洲站点VAT税费，合规申报不踩坑",
        p3title: "运费估算器",
        p3desc: "根据重量、体积，预估国际物流成本",
        p4title: "禁词检测器",
        p4desc: "检测商品标题/描述中的平台违禁词，降低违规风险",
        p5title: "实时汇率换算",
        p5desc: "快速换算美元、欧元、英镑等主流货币",
        p6title: "尺寸换算器",
        p6desc: "英寸/厘米、盎司/克等单位一键换算",
        p7title: "关键词拓展",
        p7desc: "基于核心词拓展长尾关键词，优化搜索曝光",
        p8title: "字符统计工具",
        p8desc: "统计文本字符数，适配各平台标题/描述限制",
        p9title: "库存计算器",
        p9desc: "计算安全库存、补货周期，避免断货/压货",
        p10title: "体积重量计算器",
        p10desc: "计算物流计费体积重，预估实际运费",
        p11title: "报价毛利计算器",
        p11desc: "根据成本、目标利润率，反推合理售价",
        p12title: "标题生成器",
        p12desc: "自动生成符合平台规则的高流量商品标题",
        p13title: "描述生成器",
        p13desc: "一键生成专业、合规的商品详情描述",
        p14title: "物流追踪工具",
        p14desc: "查询包裹实时物流状态，同步更新运输节点",
        p15title: "折扣计算器",
        p15desc: "计算折扣价、优惠力度，设置促销活动更省心",
        p16title: "通用单位换算",
        p16desc: "支持重量、长度、体积等多种跨境常用单位换算",
        p17title: "日期计算器",
        p17desc: "计算时间差、预估到货日期，安排备货节奏",
        p18title: "利润率速算器",
        p18desc: "快速计算毛利率、净利率，判断产品盈利空间",
        p19title: "文本清理工具",
        p19desc: "去除多余空格、特殊字符，格式化文本内容",

        btn_back: "返回首页",
        footer_copyright: "© 2026 跨境卖家全能工具箱 版权所有",
        version_title: "版本更新记录",
        version_v10: "V1.0.0 | 2026-06-10 : 基础功能上线，整合计算、物流、文案类工具，支持中英双语与深色模式",
        version_v11: "V1.1.0 | 待更新：优化移动端布局，新增输入校验与操作反馈"
    },
    en: {
        home: "Home",
        profit: "Profit Calculator",
        vat: "VAT Calculator",
        shipping: "Shipping Estimator",
        forbid: "Forbidden Word Check",
        currency: "Real-time Currency",
        size: "Size Converter",
        keyword: "Keyword Expander",
        char: "Char Counter",
        stock: "Stock Calculator",
        volweight: "Volume Weight",
        quote: "Quote Margin",
        title: "Title Generator",
        desc: "Description Generator",
        track: "Package Tracker",
        discount: "Discount Calculator",
        unit: "Unit Converter",
        time: "Time Calculator",
        profitrate: "Profit Rate",
        textclean: "Text Cleaner",

        p1title: "Profit Calculator",
        p1desc: "Calculate net profit and margin including fees and shipping",
        p2title: "VAT Calculator",
        p2desc: "Calculate European market sales tax",
        p3title: "Shipping Estimator",
        p3desc: "Estimate international shipping cost",
        p4title: "Forbidden Word Check",
        p4desc: "Avoid platform restricted keywords",
        p5title: "Real-time Currency",
        p5desc: "Live exchange rate conversion",
        p6title: "Size Converter",
        p6desc: "Inch ↔ Centimeter conversion",
        p7title: "Keyword Expander",
        p7desc: "Generate SEO long-tail keywords",
        p8title: "Char Counter",
        p8desc: "Count text characters quickly",
        p9title: "Stock Calculator",
        p9desc: "Inventory & stock quantity calculation",
        p10title: "Volume Weight Calculator",
        p10desc: "Calculate logistics volumetric weight",
        p11title: "Quote Margin Calculator",
        p11desc: "Calculate quotation and profit margin",
        p12title: "Title Generator",
        p12desc: "Generate high-traffic product titles",
        p13title: "Description Generator",
        p13desc: "Generate professional product descriptions",
        p14title: "Package Tracker",
        p14desc: "Track international logistics status",
        p15title: "Discount Calculator",
        p15desc: "Calculate discount and final price",
        p16title: "Unit Converter",
        p16desc: "Convert various units quickly",
        p17title: "Time Calculator",
        p17desc: "Calculate dates and time differences",
        p18title: "Profit Rate Calculator",
        p18desc: "Calculate profit margin and ROI",
        p19title: "Text Cleaner",
        p19desc: "Clean and format text content",

        btn_back: "Back to Home",
        footer_copyright: "© 2026 Cross-border Seller Toolkit. All Rights Reserved.",
        version_title: "Version Update Log",
        version_v10: "V1.0.0 | 2026-06-10 : Basic functions launched, with e-commerce & logistics tools, bilingual & dark mode supported",
        version_v11: "V1.1.0 | Pending : Optimize mobile layout, add input validation & operation feedback"
    }
};

// 语言切换函数
function switchLang(lang) {
    localStorage.setItem('preferredLang', lang);
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
}

// 深色模式切换函数
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    // 加载语言偏好
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    switchLang(savedLang);

    // 加载深色模式偏好
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
});
