// 日语

import { LocaleData } from "@/type";
import jaJP from "antd/locale/ja_JP";

const localeData: LocaleData = {
  antLocale: jaJP,
  logo: "IMGZIP",
  initial: "初期化中",
  previewHelp:
    "境界線をドラッグして圧縮効果を比較：左側が元の画像、右側が圧縮後の画像です",
  home: {
    title: "即時画像圧縮",
    subtitle: "品質を損なうことなく画像ファイルサイズを最大80％まで削減します。すべての処理はブラウザ内で行われるため、画像はプライベートのままです。",
    featuresTitle: "強力な画像圧縮、シンプル操作",
    featuresDesc: "品質を犠牲にすることなく画像ファイルサイズを削減します。ウェブサイト、ソーシャルメディア、ストレージに最適です。",
    feature1Title: "超高速圧縮",
    feature1Desc: "高度なアルゴリズムを使用して数秒で画像を圧縮し、ファイルサイズを小さくしても品質を維持します。",
    feature2Title: "プライバシー第一",
    feature2Desc: "すべての画像処理はローカルブラウザで行われます。外部サーバーへのアップロードは不要で、画像はプライベートのままです。",
    feature3Title: "複数フォーマット対応",
    feature3Desc: "JPG、PNG、WEBP、AVIF、SVG、GIFなどをサポート。必要に応じてフォーマット間での変換も可能です。",
    feature4Title: "品質管理",
    feature4Desc: "圧縮設定を微調整して、ファイルサイズと画質の完璧なバランスを実現します。",
    statsTitle1: "平均サイズ削減",
    statsTitle2: "対応フォーマット",
    statsTitle3: "プライバシー保証",
    statsTitle4: "登録不要",
    faqTitle: "よくある質問",
    faq1: {
      label: "Image Zip はどのように動作しますか？",
      desc: "Image Zip は高度な圧縮アルゴリズムを使用してブラウザで直接画像を処理します。サーバーに画像はアップロードされず、プライバシーとセキュリティが保証されます。圧縮は視覚的な品質を維持しながらファイルサイズを削減します。"
    },
    faq2: {
      label: "プライバシーは保護されていますか？",
      desc: "はい、もちろんです。すべての画像処理はローカルブラウザで行われます。画像はサーバーにアップロードされることもなく、データは収集・保存されません。画像は完全にプライベートかつ安全に保持されます。"
    },
    faq3: {
      label: "どの形式がサポートされていますか？",
      desc: "JPG、PNG、WEBP、AVIF、SVG、GIF 形式をサポートしています。これらの形式のいずれかで画像を圧縮でき、圧縮時に形式間の変換も可能です。"
    },
    faq4: {
      label: "画像品質に影響はありますか？",
      desc: "私たちの圧縮アルゴリズムは、ファイルサイズを大幅に削減しながら視覚品質を維持するように設計されています。設定を調整して、ファイルサイズと品質の間で完璧なバランスを見つけることができます。"
    },
    faq5: {
      label: "ファイルサイズ制限はありますか？",
      desc: "厳格な制限はありません - 任意のサイズの画像を圧縮できます。ただし、非常に大きな画像の処理には時間がかかることがあります。圧縮はブラウザでローカルに行われるため、パフォーマンスはデバイスの能力に依存します。"
    }
  },
  uploadCard: {
    title: "画像をドラッグまたは選択",
    subTitle: "対応フォーマット：%s",
    pasteHint: "💡 Ctrl+V で画像を貼り付け、またはドラッグ＆ドロップ可能",
  },
  listAction: {
    batchAppend: "バッチ追加",
    addFolder: "フォルダーを追加",
    clear: "リストをクリア",
    downloadAll: "すべて保存",
    downloadOne: "画像を保存",
    removeOne: "画像を削除",
    reCompress: "再圧縮",
  },
  columnTitle: {
    status: "ステータス",
    name: "ファイル名",
    preview: "プレビュー",
    size: "サイズ",
    dimension: "サイズ",
    decrease: "圧縮率",
    action: "アクション",
    newSize: "新しいサイズ",
    newDimension: "新しいディメンション",
  },
  optionPannel: {
    failTip:
      "小さくすることができません。パラメータを調整して再試行してください。",
    help: "Pic Smaller はバッチ画像圧縮アプリケーションです。オプションの変更はすべての画像に適用されます。",
    resizeLable: "画像のサイズを変更する",
    jpegLable: "JPEG/WEBPパラメータ",
    pngLable: "PNG パラメータ",
    gifLable: "GIF パラメータ",
    avifLable: "AVIF パラメータ",
    resizePlaceholder: "調整モードの選択",
    fitWidth: "幅と高さを自動的に調整します",
    fitHeight: "高さと幅を自動的に調整します",
    setShort: "短辺と長辺を自動的に調整します",
    setLong: "長辺と短辺を自動的に調整します",
    setCropRatio: "クロップモード、クロップ率の設定",
    setCropSize: "切り抜きモード、切り抜きサイズを設定",
    cwRatioPlaceholder: "幅の比率を設定",
    chRatioPlaceholder: "高さの比率を設定",
    cwSizePlaceholder: "切り抜き幅を設定",
    chSizePlaceholder: "トリミングの高さを設定",
    widthPlaceholder: "出力画像の幅を設定します",
    heightPlaceholder: "出力画像の高さを設定します",
    shortPlaceholder: "出力画像の短辺の長さを設定する",
    longPlaceholder: "出力画像の長辺の長さを設定する",
    resetBtn: "オプションをリセット",
    confirmBtn: "オプションを適用",
    qualityTitle: "出力画質を設定します(0-1)",
    colorsDesc: "出力色の数を設定します (2-256)",
    pngDithering: "ディザリング係数を設定します (0-1)",
    gifDithering: "ディザリングをオンにする",
    avifQuality: "出力画質を設定します (1-100)",
    avifSpeed: "圧縮速度を設定します (1-10)",
    outputFormat: "出力形式を設定する",
    outputFormatPlaceholder: "出力画像フォーマットの選択",
    transparentFillDesc: "透明な塗りつぶしの色を選択します",
    cropCompareWarning: "クロップ モードは比較プレビューをサポートしていません",
  },
  error404: {
    backHome: "ホームページに戻る",
    description: "申し訳ありませんが、アクセスしたページは存在しません~",
  },
  progress: {
    before: "圧縮前",
    after: "圧縮後",
    rate: "圧縮率",
  },
};

export default localeData;
