import { LocaleData } from "@/type";
import enUS from "antd/locale/en_US";

const localeData: LocaleData = {
  antLocale: enUS,
  logo: "IMGZIP",
  initial: "Initializing",
  previewHelp:
    "Drag the dividing line to compare the compression effect: the left is the original image, the right is the compressed image",
  home: {
    title: "Compress Images Instantly",
    subtitle: "Reduce image file sizes by up to 80% without losing quality. All processing happens in your browser - your images stay private.",
    featuresTitle: "Powerful Image Compression Made Simple",
    featuresDesc: "Reduce image file sizes without sacrificing quality. Perfect for websites, social media, and storage.",
    feature1Title: "Lightning Fast Compression",
    feature1Desc: "Compress images in seconds with our advanced algorithms that maintain quality while reducing file size.",
    feature2Title: "Privacy First",
    feature2Desc: "All image processing happens locally in your browser. No uploads to external servers - your images stay private.",
    feature3Title: "Multiple Format Support",
    feature3Desc: "Supports JPG, PNG, WEBP, AVIF, SVG, GIF and more. Convert between formats as needed.",
    feature4Title: "Quality Control",
    feature4Desc: "Fine-tune compression settings to achieve the perfect balance between file size and image quality.",
    statsTitle1: "Average Size Reduction",
    statsTitle2: "Supported Formats",
    statsTitle3: "Privacy Guaranteed",
    statsTitle4: "No Registration",
    faqTitle: "Frequently Asked Questions",
    faq1: {
      label: "How does Image Zip work?",
      desc: "Image Zip processes your images directly in your browser using advanced compression algorithms. No images are uploaded to any server, ensuring your privacy and security. The compression reduces file sizes while maintaining visual quality."
    },
    faq2: {
      label: "Is my privacy protected?",
      desc: "Yes, absolutely. All image processing happens locally in your browser. We never upload your images to any server, and no data is collected or stored. Your images remain completely private and secure."
    },
    faq3: {
      label: "What formats are supported?",
      desc: "We support JPG, PNG, WEBP, AVIF, SVG, and GIF formats. You can compress images in any of these formats and even convert between formats while compressing."
    },
    faq4: {
      label: "Will image quality be affected?",
      desc: "Our compression algorithms are designed to maintain visual quality while significantly reducing file sizes. You can adjust compression settings to find the perfect balance between file size and quality for your needs."
    },
    faq5: {
      label: "Is there a file size limit?",
      desc: "There are no strict limits - you can compress images of any size. However, processing very large images may take more time. The compression happens locally in your browser, so performance depends on your device capabilities."
    }
  },
  uploadCard: {
    title: "Select files here, support dragging files and folders",
    subTitle: "Open source batch image compression tool, supports %s format",
    pasteHint: "💡 Tip: You can also paste image with Ctrl+V (Cmd+V), or drag and drop images here",
  },
  listAction: {
    batchAppend: "Batch append",
    addFolder: "Add folder",
    clear: "Clear all",
    downloadAll: "Save all",
    downloadOne: "Save image",
    removeOne: "Remove image",
    reCompress: "Recompress",
  },
  columnTitle: {
    status: "Status",
    name: "Name",
    preview: "Preview",
    size: "Size",
    dimension: "Dimension",
    decrease: "Decrease",
    action: "Action",
    newSize: "New size",
    newDimension: "New Dimension",
  },
  optionPannel: {
    failTip: "Cannot be smaller, please adjust the parameters and try again.",
    help: "Image Zip is a batch image compression application. Modifications to the options will be applied to all images.",
    resizeLable: "Resize image",
    jpegLable: "JPEG/WEBP parameters",
    pngLable: "PNG parameters",
    gifLable: "GIF parameters",
    avifLable: "AVIF parameters",
    resizePlaceholder: "Select adjustment mode",
    fitWidth: "Set width, height automatically scales",
    fitHeight: "Set height, width automatically scales",
    setShort: "Set short side, long side automatically scale",
    setLong: "Set long side, short side automatically scale",
    setCropRatio: "Crop mode, set the crop ratio",
    setCropSize: "Crop mode, set the crop size",
    cwRatioPlaceholder: "Set width ratio",
    chRatioPlaceholder: "Set height ratio",
    cwSizePlaceholder: "Set crop width",
    chSizePlaceholder: "Set crop height",
    widthPlaceholder: "Set the width of the output image",
    heightPlaceholder: "Set the height of the output image",
    shortPlaceholder: "Set short side length of the output image",
    longPlaceholder: "Set long side length of the output image",
    resetBtn: "Reset options",
    confirmBtn: "Apply options",
    qualityTitle: "Set output image quality (0-1)",
    colorsDesc: "Set the number of output colors (2-256)",
    pngDithering: "Set dithering coefficient (0-1)",
    gifDithering: "Turn on dithering",
    avifQuality: "Set output image quality (1-100)",
    avifSpeed: "Set compression speed (1-10)",
    outputFormat: "Set output format",
    outputFormatPlaceholder: "Select output image format",
    transparentFillDesc: "Choose a transparent fill color",
    cropCompareWarning: "Crop mode does not support comparison preview",
  },
  error404: {
    backHome: "Back to home",
    description: "Sorry, the page you visited does not exist~",
  },
  progress: {
    before: "Before compression",
    after: "After compression",
    rate: "Decrease ratio",
  },
};

export default localeData;
