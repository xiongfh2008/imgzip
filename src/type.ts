import { Locale } from "antd/es/locale";

export interface LocaleData {
  antLocale: Locale;
  logo: string;
  initial: string;
  previewHelp: string;
  error404: {
    backHome: string;
    description: string;
  };
  uploadCard: {
    title: string;
    subTitle: string;
    pasteHint: string;
  };
  listAction: {
    batchAppend: string;
    addFolder: string;
    clear: string;
    downloadAll: string;
    downloadOne: string;
    removeOne: string;
    reCompress: string;
  };
  columnTitle: {
    status: string;
    name: string;
    preview: string;
    size: string;
    newSize: string;
    dimension: string;
    newDimension: string;
    decrease: string;
    action: string;
  };
  optionPannel: {
    resizeLable: string;
    jpegLable: string;
    pngLable: string;
    gifLable: string;
    avifLable: string;
    avifQuality: string;
    avifSpeed: string;
    help: string;
    failTip: string;
    resizePlaceholder: string;
    fitWidth: string;
    fitHeight: string;
    setShort: string;
    setLong: string;
    setCropRatio: string;
    setCropSize: string;
    widthPlaceholder: string;
    heightPlaceholder: string;
    shortPlaceholder: string;
    longPlaceholder: string;
    cwRatioPlaceholder: string;
    chRatioPlaceholder: string;
    cwSizePlaceholder: string;
    chSizePlaceholder: string;
    cropCompareWarning: string;
    qualityTitle: string;
    resetBtn: string;
    confirmBtn: string;
    colorsDesc: string;
    pngDithering: string;
    gifDithering: string;
    outputFormat: string;
    outputFormatPlaceholder: string;
    transparentFillDesc: string;
  };
  progress: {
    before: string;
    after: string;
    rate: string;
  };
  home: {
    title: string;
    subtitle: string;
    featuresTitle: string;
    featuresDesc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    statsTitle1: string;
    statsTitle2: string;
    statsTitle3: string;
    statsTitle4: string;
    faqTitle: string;
    faq1: {
      label: string;
      desc: string;
    };
    faq2: {
      label: string;
      desc: string;
    };
    faq3: {
      label: string;
      desc: string;
    };
    faq4: {
      label: string;
      desc: string;
    };
    faq5: {
      label: string;
      desc: string;
    };
  };
}
