// 台湾繁体

import { LocaleData } from "@/type";
import zhTW from "antd/locale/zh_TW";

const localeData: LocaleData = {
  antLocale: zhTW,
  logo: "IMGZIP",
  initial: "初始化中",
  previewHelp: "拖曳分割線對比壓縮效果：左邊是原始圖，右邊是壓縮圖",
  home: {
    title: "即時壓縮圖像",
    subtitle: "在不失真的情況下減少圖像檔案大小高達80%。所有處理都在您的瀏覽器中進行 - 您的圖像保持私密。",
    featuresTitle: "強大的圖像壓縮，簡單易用",
    featuresDesc: "在不犧牲品質的情況下減少圖像檔案大小。非常適合網站、社群媒體和儲存。",
    feature1Title: "閃電般快速壓縮",
    feature1Desc: "使用先進的演算法在幾秒鐘內壓縮圖像，在減小檔案大小的同時保持品質。",
    feature2Title: "隱私優先",
    feature2Desc: "所有圖像處理都在您的瀏覽器中本地進行。無需上傳到外部伺服器 - 您的圖像保持私密。",
    feature3Title: "多格式支援",
    feature3Desc: "支援JPG、PNG、WEBP、AVIF、SVG、GIF等。可根據需要在格式之間轉換。",
    feature4Title: "品質控制",
    feature4Desc: "微調壓縮設定以在檔案大小和圖像品質之間取得完美平衡。",
    statsTitle1: "平均大小減少",
    statsTitle2: "支援的格式",
    statsTitle3: "隱私保證",
    statsTitle4: "無需註冊",
    faqTitle: "常見問題解答",
    faq1: {
      label: "Image Zip 如何運作？",
      desc: "Image Zip 使用進階壓縮演算法直接在您的瀏覽器中處理圖像。不會將圖像上傳到任何伺服器，確保您的隱私和安全。壓縮會在保持視覺品質的同時減小檔案大小。"
    },
    faq2: {
      label: "我的隱私受保護嗎？",
      desc: "是的，絕對如此。所有圖像處理都在您的瀏覽器中本地進行。我們永遠不會將您的圖像上傳到任何伺服器，也不會收集或儲存任何數據。您的圖像完全保持私密和安全。"
    },
    faq3: {
      label: "支援哪些格式？",
      desc: "我們支援 JPG、PNG、WEBP、AVIF 和 GIF 格式。您可以壓縮這些格式中的任何一種圖像，甚至可以在壓縮時在格式之間轉換。"
    },
    faq4: {
      label: "圖像品質會受影響嗎？",
      desc: "我們的壓縮演算法旨在顯著減小檔案大小的同時保持視覺品質。您可以調整壓縮設定以在檔案大小和品質之間找到完美的平衡。"
    },
    faq5: {
      label: "有檔案大小限制嗎？",
      desc: "沒有嚴格的限制 - 您可以壓縮任意大小的圖像。但是，處理非常大的圖像可能需要更多時間。壓縮在您的瀏覽器中本地進行，因此效能取決於您的裝置能力。"
    }
  },
  uploadCard: {
    title: "選取文件到這裡，支援拖曳文件和資料夾",
    subTitle: "開源的批量圖片壓縮工具，支援 %s 格式",
    pasteHint: "💡 提示：您也可以複製圖片後按 Ctrl+V (Cmd+V) 貼上",
  },
  listAction: {
    batchAppend: "大量新增",
    addFolder: "新增資料夾",
    clear: "清空清單",
    downloadAll: "儲存全部",
    downloadOne: "儲存圖片",
    removeOne: "移除圖片",
    reCompress: "重新壓縮",
  },
  columnTitle: {
    status: "狀態",
    name: "檔案名稱",
    preview: "預覽",
    size: "大小",
    dimension: "尺寸",
    decrease: "壓縮率",
    action: "操作",
    newSize: "新大小",
    newDimension: "新尺寸",
  },
  optionPannel: {
    failTip: "無法更小，請調整參數後重試",
    help: "Pic Smaller是一款大量圖片壓縮應用，對選項的修改將套用到所有圖片上",
    resizeLable: "調整圖片尺寸",
    jpegLable: "JPEG/WEBP參數",
    pngLable: "PNG參數",
    gifLable: "GIF參數",
    avifLable: "AVIF參數",
    resizePlaceholder: "選擇調整模式",
    fitWidth: "設定寬度，高度自動縮放",
    fitHeight: "設定高度，寬度自動縮放",
    setShort: "設定短邊，長邊自動縮放",
    setLong: "設定長邊，短邊自動縮放",
    setCropRatio: "裁切模式，設定裁切比例",
    setCropSize: "裁切模式，設定裁切尺寸",
    cwRatioPlaceholder: "設定寬度比例",
    chRatioPlaceholder: "設定高度比例",
    cwSizePlaceholder: "設定裁切寬度",
    chSizePlaceholder: "設定裁切高度",
    widthPlaceholder: "設定輸出圖片寬度",
    heightPlaceholder: "設定輸出圖片高度",
    shortPlaceholder: "設定輸出圖片短邊長度",
    longPlaceholder: "設定輸出圖片長邊長度",
    resetBtn: "重置選項",
    confirmBtn: "應用選項",
    qualityTitle: "設定輸出圖片品質（0-1）",
    colorsDesc: "設定輸出顏色數量（2-256）",
    pngDithering: "設定抖色係數（0-1）",
    gifDithering: "開啟抖色",
    avifQuality: "設定輸出圖片品質（1-100）",
    avifSpeed: "設定壓縮速度（1-10）",
    outputFormat: "設定輸出格式",
    outputFormatPlaceholder: "選擇輸出圖片格式",
    transparentFillDesc: "選擇透明填充色",
    cropCompareWarning: "裁切模式不支援比較預覽",
  },
  error404: {
    backHome: "返回首頁",
    description: "抱歉，你造訪的頁面不存在~",
  },
  progress: {
    before: "壓縮前",
    after: "壓縮後",
    rate: "壓縮率",
  },
};

export default localeData;
