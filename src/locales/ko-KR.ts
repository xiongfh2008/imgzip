// 韩语

import { LocaleData } from "@/type";
import koKR from "antd/locale/ko_KR";

const localeData: LocaleData = {
  antLocale: koKR,
  logo: "IMGZIP",
  initial: "초기화 중",
  previewHelp:
    "구분선을 드래그하여 압축 효과를 비교하세요: 왼쪽은 원본 이미지, 오른쪽은 압축된 이미지입니다",
  home: {
    title: "즉시 이미지 압축",
    subtitle: "품질을 손상시키지 않고 최대 80%까지 이미지 파일 크기를 줄이세요. 모든 처리는 브라우저 내에서 이루어지므로 이미지는 비공개로 유지됩니다.",
    featuresTitle: "강력한 이미지 압축, 간단한 사용",
    featuresDesc: "품질을 희생하지 않고 이미지 파일 크기를 줄이세요. 웹사이트, 소셜 미디어 및 저장소에 적합합니다.",
    feature1Title: "초고속 압축",
    feature1Desc: "고급 알고리즘을 사용하여 몇 초 안에 이미지를 압축하며 파일 크기를 줄이면서도 품질을 유지합니다.",
    feature2Title: "프라이버시 우선",
    feature2Desc: "모든 이미지 처리는 로컬 브라우저에서 이루어집니다. 외부 서버에 업로드할 필요 없이 이미지는 비공개로 유지됩니다.",
    feature3Title: "다양한 포맷 지원",
    feature3Desc: "JPG, PNG, WEBP, AVIF, SVG, GIF 등을 지원합니다. 필요에 따라 포맷 간 변환도 가능합니다.",
    feature4Title: "품질 관리",
    feature4Desc: "압축 설정을 미세 조정하여 파일 크기와 이미지 품질 사이의 완벽한 균형을 이루세요.",
    statsTitle1: "평균 크기 감소",
    statsTitle2: "지원 포맷",
    statsTitle3: "프라이버시 보장",
    statsTitle4: "등록 불필요",
    faqTitle: "자주 묻는 질문",
    faq1: {
      label: "Image Zip은 어떻게 작동하나요?",
      desc: "Image Zip은 고급 압축 알고리즘을 사용하여 브라우저에서 직접 이미지를 처리합니다. 서버에 이미지를 업로드하지 않으므로 개인정보와 보안이 보장됩니다. 압축은 시각적 품질을 유지하면서 파일 크기를 줄입니다."
    },
    faq2: {
      label: "내 개인정보가 보호되나요?",
      desc: "네, 확실히 그렇습니다. 모든 이미지 처리는 로컬 브라우저에서 이루어집니다. 저희는 귀하의 이미지를 서버에 업로드하지 않으며, 데이터를 수집하거나 저장하지 않습니다. 귀하의 이미지는 완전히 비공개 및 보안 상태를 유지합니다."
    },
    faq3: {
      label: "어떤 형식을 지원하나요?",
      desc: "JPG, PNG, WEBP, AVIF, SVG, GIF 형식을 지원합니다. 이러한 형식 중 어떤 것으로든 이미지를 압축할 수 있으며, 압축 시 형식 간 변환도 가능합니다."
    },
    faq4: {
      label: "이미지 품질에 영향이 있나요?",
      desc: "우리의 압축 알고리즘은 파일 크기를 크게 줄이면서 시각적 품질을 유지하도록 설계되었습니다. 설정을 조정하여 파일 크기와 품질 사이에서 완벽한 균형을 찾을 수 있습니다."
    },
    faq5: {
      label: "파일 크기 제한이 있나요?",
      desc: "엄격한 제한은 없습니다 - 임의 크기의 이미지를 압축할 수 있습니다. 다만, 매우 큰 이미지를 처리하는 데 시간이 더 걸릴 수 있습니다. 압축은 브라우저에서 로컬로 발생하므로 성능은 장치의 능력에 따라 달라집니다."
    }
  },
  uploadCard: {
    title: "이미지 파일을 여기에 넣기",
    subTitle: "지원 형식: %s",
    pasteHint: "💡 Ctrl+V로 붙여넣기 또는 이미지를 끌어다 놓기",
  },

  listAction: {
    batchAppend: "일괄 추가",
    addFolder: "폴더 추가",
    clear: "목록 지우기",
    downloadAll: "모두 저장",
    downloadOne: "이미지 저장",
    removeOne: "사진 제거",
    reCompress: "재압축",
  },
  columnTitle: {
    status: "상태",
    name: "파일 이름",
    preview: "미리보기",
    size: "크기",
    dimension: "크기",
    decrease: "압축 비율",
    action: "액션",
    newSize: "새 크기",
    newDimension: "새 차원",
  },
  optionPannel: {
    failTip: "더 작게 만들 수 없습니다. 매개변수를 조정하고 다시 시도하세요.",
    help: "Pic Smaller는 옵션에 대한 수정 사항이 모든 이미지에 적용되는 일괄 이미지 압축 응용 프로그램입니다.",
    resizeLable: "이미지 크기 조정",
    jpegLable: "JPEG/WEBP 매개변수",
    pngLable: "PNG 매개변수",
    gifLable: "GIF 매개변수",
    avifLable: "AVIF 매개변수",
    resizePlaceholder: "조정 모드 선택",
    fitWidth: "너비, 높이는 자동으로 조정됩니다.",
    fitHeight: "높이 설정, 너비 자동 조정",
    setShort: "짧은 쪽, 긴 쪽은 자동으로 크기 조절 설정",
    setLong: "긴 쪽, 짧은 쪽 자동 크기 조정",
    setCropRatio: "자르기 모드, 자르기 비율 설정",
    setCropSize: "자르기 모드, 자르기 크기 설정",
    cwRatioPlaceholder: "너비 비율 설정",
    chRatioPlaceholder: "높이 비율 설정",
    cwSizePlaceholder: "자르기 너비 설정",
    chSizePlaceholder: "자르기 높이 설정",
    widthPlaceholder: "출력 이미지의 너비를 설정합니다",
    heightPlaceholder: "출력 이미지의 높이를 설정합니다",
    shortPlaceholder: "출력 이미지의 짧은 쪽 길이를 설정합니다",
    longPlaceholder: "출력 이미지의 긴 쪽 길이를 설정합니다",
    resetBtn: "재설정 옵션",
    confirmBtn: "옵션 적용",
    qualityTitle: "출력 이미지 품질 설정(0-1)",
    colorsDesc: "출력 색상 수 설정(2-256)",
    pngDithering: "디더링 계수 설정(0-1)",
    gifDithering: "디더링 켜기",
    avifQuality: "출력 이미지 품질 설정(1-100)",
    avifSpeed: "압축 속도 설정(1-10)",
    outputFormat: "출력 형식 설정",
    outputFormatPlaceholder: "출력 이미지 형식 선택",
    transparentFillDesc: "투명한 채우기 색상 선택",
    cropCompareWarning: "자르기 모드는 비교 미리보기를 지원하지 않습니다.",
  },
  error404: {
    backHome: "홈 페이지로 돌아가기",
    description: "죄송합니다. 방문하신 페이지는 존재하지 않습니다~",
  },
  progress: {
    before: "압축 전",
    after: "압축 후",
    rate: "압축률",
  },
};

export default localeData;
