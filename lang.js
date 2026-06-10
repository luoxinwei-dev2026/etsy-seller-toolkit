// 暗色模式切换
const themeBtn = document.getElementById('themeSwitch');
let nowTheme = localStorage.getItem('siteTheme') || 'light';
document.documentElement.setAttribute('data-theme', nowTheme);
themeBtn.innerText = nowTheme === 'dark' ? '☀️ 浅色' : '🌙 深色';

themeBtn.addEventListener('click', () => {
  let curr = document.documentElement.getAttribute('data-theme');
  let newTh = curr === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTh);
  localStorage.setItem('siteTheme', newTh);
  themeBtn.innerText = newTh === 'dark' ? '☀️ 浅色' : '🌙 深色';
});

// 双语词库
const langData = {
  en: {
    home:"🏠 Home",profit:"💰 Profit",vat:"💶 VAT",shipping:"🚚 Shipping",forbid:"🚫 Forbidden Words",currency:"💱 Currency",size:"📏 Size",keyword:"🔑 Keyword",char:"🔤 Char Counter",stock:"📦 Stock",volweight:"📐 Vol Weight",quote:"💵 Quote Margin",title:"📝 Title",desc:"🌐 Description",track:"📦 Tracking",
    discount:"💴 Discount",unit:"⚖️ Unit Convert",time:"⏰ Time Calc",profitrate:"📈 Profit Rate",textclean:"🧹 Text Clean",
    mainTitle:"All-in-One Tools for Cross-border Sellers",
    mainDesc:"Profit, Listing, Logistics, Conversion & Daily Assistant Tools",
    p1title:"Profit Calculator",p1desc:"Calculate net profit & margin with fees and shipping",
    p2title:"VAT Calculator",p2desc:"Calculate tax for European market sales",
    p3title:"Shipping Estimator",p3desc:"Estimate international shipping cost",
    p4title:"Forbidden Word Check",p4desc:"Avoid platform restricted keywords",
    p5title:"Real-time Currency",p5desc:"Live exchange rate conversion",
    p6title:"Size Converter",p6desc:"Inch ↔ Centimeter conversion",
    p7title:"Keyword Expander",p7desc:"Generate SEO long-tail keywords",
    p8title:"Character Counter",p8desc:"Count text length for listing limits",
    p9title:"Stock Calculator",p9desc:"Calculate reasonable inventory quantity",
    p10title:"Volume Weight",p10desc:"Logistics volume weight calculation",
    p11title:"Quote Margin",p11desc:"Price calculation by target profit",
    p12title:"Title Generator",p12desc:"Create high-rank product titles",
    p13title:"Description Generator",p13desc:"Multi-language product description",
    p14title:"Package Tracking",p14desc:"Track international logistics status",
    n1title:"Discount Calculator",n1desc:"Calculate discount & final price",
    n2title:"General Unit Convert",n2desc:"Weight, length unit conversion",
    n3title:"Time Calculator",n3desc:"Date & working day calculation",
    n4title:"Profit Rate Analyzer",n4desc:"Quick profit rate analysis",
    n5title:"Text Cleaner",n5desc:"Clear extra spaces & line breaks",
    open:"Open Tool",
    copyright:"© 2026 Cross-border Seller Toolkit. All Rights Reserved.",
    versionTitle:"Version Update Log",
    v10:"V1.0.0 | 2026-06-10 : Basic functions launched, with e-commerce & logistics tools, bilingual & dark mode supported",
    v11:"V1.1.0 | Pending : Optimize mobile layout, add form validation & operation tips"
  },
  zh: {
    home:"🏠 首页",profit:"💰 利润计算",vat:"💶 增值税",shipping:"🚚 运费估算",forbid:"🚫 禁词检测",currency:"💱 实时汇率",size:"📏 尺寸换算",keyword:"🔑 关键词拓展",char:"🔤 字符统计",stock:"📦 库存计算",volweight:"📐 体积重量",quote:"💵 报价毛利",title:"📝 标题生成",desc:"🌐 描述生成",track:"📦 物流追踪",
    discount:"💴 折扣计算",unit:"⚖️ 通用单位换算",time:"⏰ 日期计算",profitrate:"📈 利润率速算",textclean:"🧹 文本清理",
    mainTitle:"跨境卖家全能工具箱",
    mainDesc:"利润、Listing、物流、换算、日常辅助一站式工具",
    p1title:"利润计算器",p1desc:"包含手续费、运费，精准计算净利润与利润率",
    p2title:"增值税计算器",p2desc:"计算欧洲站点销售税费",
    p3title:"运费预估",p3desc:"估算国际物流费用",
    p4title:"禁词检测",p4desc:"排查平台违规禁用词汇",
    p5title:"实时汇率换算",p5desc:"调用接口获取最新货币汇率",
    p6title:"尺寸换算",p6desc:"英寸、厘米双向转换",
    p7title:"关键词拓展",p7desc:"生成SEO长尾搜索词",
    p8title:"字符统计",p8desc:"检测标题/描述字符数量，合规上架",
    p9title:"库存计算器",p9desc:"结合销量计算合理备货量",
    p10title:"体积重量",p10desc:"物流计费体积重计算",
    p11title:"报价毛利",p11desc:"根据目标利润率反推售价",
    p12title:"标题生成",p12desc:"制作高排名商品标题",
    p13title:"描述生成",p13desc:"多语言专业商品描述",
    p14title:"物流追踪",p14desc:"查询国际物流运输状态",
    n1title:"折扣计算器",n1desc:"计算折扣价与最终成交价格",
    n2title:"通用单位换算",n2desc:"重量、长度等常用单位转换",
    n3title:"日期计算器",n3desc:"日期间隔、工作日计算",
    n4title:"利润率速算",n4desc:"快速核算单品利润率",
    n5title:"文本清理",n5desc:"去除多余空格、换行符",
    open:"打开工具",
    copyright:"© 2026 跨境卖家全能工具箱 版权所有",
    versionTitle:"版本更新记录",
    v10:"V1.0.0 | 2026-06-10 ：基础功能上线，整合计算、物流、文案类工具，支持中英双语与深色模式",
    v11:"V1.1.0 | 待更新 ：优化移动端布局，新增输入校验与操作反馈"
  }
};

// 语言切换
function switchLang(lang) {
  localStorage.setItem('siteLang', lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    let key = el.getAttribute('data-lang');
    el.innerText = langData[lang][key] || key;
  });
}

// 移动端汉堡菜单展开/收起
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// 初始化语言
let initLang = localStorage.getItem('siteLang') || 'en';
switchLang(initLang);
