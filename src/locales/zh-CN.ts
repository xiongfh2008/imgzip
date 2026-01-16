import { LocaleData } from "@/type";
import zhCN from "antd/locale/zh_CN";

const localeData: LocaleData = {
  antLocale: zhCN,
  logo: "IMGZIP",
  initial: "初始化中",
  previewHelp: "拖动分割线对比压缩效果：左边是原始图，右边是压缩图",
  home: {
    title: "即时压缩图像",
    subtitle: "在不损失质量的情况下减少图像文件大小高达80%。所有处理都在您的浏览器中进行 - 您的图像保持私密。",
    featuresTitle: "强大的图像压缩，简单易用",
    featuresDesc: "在不牺牲质量的情况下减少图像文件大小。非常适合网站、社交媒体和存储。",
    feature1Title: "闪电般快速压缩",
    feature1Desc: "使用先进的算法在几秒钟内压缩图像，在减小文件大小的同时保持质量。",
    feature2Title: "隐私第一",
    feature2Desc: "所有图像处理都在您的浏览器中本地进行。无需上传到外部服务器 - 您的图像保持私密。",
    feature3Title: "多格式支持",
    feature3Desc: "支持JPG、PNG、WEBP、AVIF、SVG、GIF等。可根据需要在格式之间转换。",
    feature4Title: "质量控制",
    feature4Desc: "微调压缩设置以在文件大小和图像质量之间取得完美平衡。",
    statsTitle1: "平均大小减少",
    statsTitle2: "支持的格式",
    statsTitle3: "隐私保证",
    statsTitle4: "无需注册",
    faqTitle: "常见问题解答",
    faq1: {
      label: "Image Zip 如何工作？",
      desc: "Image Zip 使用高级压缩算法直接在您的浏览器中处理图像。不会将图像上传到任何服务器，确保您的隐私和安全。压缩会在保持视觉质量的同时减小文件大小。"
    },
    faq2: {
      label: "我的隐私受保护吗？",
      desc: "是的，绝对如此。所有图像处理都在您的浏览器中本地进行。我们永远不会将您的图像上传到任何服务器，也不会收集或存储任何数据。您的图像完全保持私密和安全。"
    },
    faq3: {
      label: "支持哪些格式？",
      desc: "我们支持 JPG、PNG、WEBP、AVIF 和 GIF 格式。您可以压缩这些格式中的任何一种图像，甚至可以在压缩时在格式之间转换。"
    },
    faq4: {
      label: "图像质量会受影响吗？",
      desc: "我们的压缩算法旨在显著减小文件大小的同时保持视觉质量。您可以调整压缩设置以在文件大小和质量之间找到完美的平衡。"
    },
    faq5: {
      label: "有文件大小限制吗？",
      desc: "没有严格的限制 - 您可以压缩任意大小的图像。但是，处理非常大的图像可能需要更多时间。压缩在您的浏览器中本地进行，因此性能取决于您的设备能力。"
    }
  },
  uploadCard: {
    title: "选取图片到这里，支持拖拽图片和文件夹",
    subTitle: "开源的批量图片压缩工具，支持 %s 格式",
    pasteHint: "💡 提示：您也可以复制图片后按 Ctrl+V (Cmd+V) 粘贴",
  },
  listAction: {
    batchAppend: "批量添加",
    addFolder: "添加文件夹",
    clear: "清空列表",
    downloadAll: "保存全部",
    downloadOne: "保存图片",
    removeOne: "移除图片",
    reCompress: "重新压缩",
  },
  columnTitle: {
    status: "状态",
    name: "文件名",
    preview: "预览",
    size: "大小",
    dimension: "尺寸",
    decrease: "压缩率",
    action: "操作",
    newSize: "新大小",
    newDimension: "新尺寸",
  },
  optionPannel: {
    failTip: "无法更小，请调整参数后重试",
    help: "图小小是一款批量图片压缩应用程序，对选项的修改将应用到所有图片上",
    resizeLable: "调整图片尺寸",
    jpegLable: "JPEG/WEBP参数",
    pngLable: "PNG参数",
    gifLable: "GIF参数",
    avifLable: "AVIF参数",
    resizePlaceholder: "选择调整模式",
    fitWidth: "设置宽度，高度自动缩放",
    fitHeight: "设置高度，宽度自动缩放",
    setShort: "设置短边，长边自动缩放",
    setLong: "设置长边，短边自动缩放",
    setCropRatio: "裁剪模式，设置裁剪比例",
    setCropSize: "裁剪模式，设置裁剪尺寸",
    cwRatioPlaceholder: "设置宽度比例",
    chRatioPlaceholder: "设置高度比例",
    cwSizePlaceholder: "设置裁剪宽度",
    chSizePlaceholder: "设置裁剪高度",
    widthPlaceholder: "设置输出图片宽度",
    heightPlaceholder: "设置输出图片高度",
    shortPlaceholder: "设置输出图片短边长度",
    longPlaceholder: "设置输出图片长边长度",
    resetBtn: "重置选项",
    confirmBtn: "应用选项",
    qualityTitle: "设置输出图片质量（0-1）",
    colorsDesc: "设置输出颜色数量（2-256）",
    pngDithering: "设置抖色系数（0-1）",
    gifDithering: "开启抖色",
    avifQuality: "设置输出图片质量（1-100）",
    avifSpeed: "设置压缩速度（1-10）",
    outputFormat: "设置输出格式",
    outputFormatPlaceholder: "选择输出图片格式",
    transparentFillDesc: "选择透明填充色",
    cropCompareWarning: "裁剪模式不支持对比预览",
  },
  error404: {
    backHome: "返回首页",
    description: "抱歉，你访问的页面不存在~",
  },
  progress: {
    before: "压缩前",
    after: "压缩后",
    rate: "压缩率",
  },
};

export default localeData;
