import { LocaleData } from "@/type";
import trTR from "antd/locale/tr_TR";

const localeData: LocaleData = {
  antLocale: trTR,
  logo: "IMGZIP",
  initial: "Başlatılıyor",
  previewHelp:
    "Sıkıştırma etkisini karşılaştırmak için ayırıcı çizgiyi sürükleyin: sol taraf orijinal resim, sağ taraf sıkıştırılmış resimdir",
  home: {
    title: "Resimleri Anında Sıkıştırın",
    subtitle: "Kalite kaybı olmadan görüntü dosya boyutlarını %80'e kadar azaltın. Tüm işlemler tarayıcınızda gerçekleşir - resimleriniz özel kalır.",
    featuresTitle: "Güçlü Görüntü Sıkıştırma, Basit Kullanım",
    featuresDesc: "Kaliteyi ödün vermeden görüntü dosyası boyutlarını azaltın. Web siteleri, sosyal medya ve depolama için mükemmeldir.",
    feature1Title: "Yıldırım Hızında Sıkıştırma",
    feature1Desc: "Dosya boyutunu küçültürken kaliteyi koruyan gelişmiş algoritmalarımızla saniyeler içinde resim sıkıştırın.",
    feature2Title: "Öncelik Gizlilik",
    feature2Desc: "Tüm resim işlemleri yerel olarak tarayıcınızda gerçekleşir. Harici sunuculara yükleme yok - resimleriniz özel kalır.",
    feature3Title: "Çoklu Format Desteği",
    feature3Desc: "JPG, PNG, WEBP, AVIF, SVG, GIF ve daha fazlasını destekler. Gerektiğinde formatlar arasında dönüştürme yapın.",
    feature4Title: "Kalite Kontrolü",
    feature4Desc: "Dosya boyutu ile görüntü kalitesi arasında mükemmel dengeyi sağlamak için sıkıştırma ayarlarını hassas şekilde ayarlayın.",
    statsTitle1: "Ortalama Boyut Azalması",
    statsTitle2: "Desteklenen Formatlar",
    statsTitle3: "Gizlilik Garantili",
    statsTitle4: "Kayıt Gerekliliği Yok",
    faqTitle: "Sık Sorulan Sorular",
    faq1: {
      label: "Image Zip nasıl çalışır?",
      desc: "Image Zip, gelişmiş sıkıştırma algoritmaları kullanarak resimlerinizi doğrudan tarayıcınızda işler. Sunucuya hiçbir resim yüklenmez, bu da gizliliğinizi ve güvenliğinizi sağlar. Sıkıştırma, görsel kaliteyi koruyarak dosya boyutlarını azaltır."
    },
    faq2: {
      label: "Gizliliğim korunuyor mu?",
      desc: "Evet, kesinlikle. Tüm resim işlemleri yerel olarak tarayıcınızda gerçekleşir. Resimlerinizi asla herhangi bir sunucuya yüklemez ve hiçbir veri toplanmaz veya saklanmaz. Resimleriniz tamamen özel ve güvenli kalır."
    },
    faq3: {
      label: "Hangi formatlar destekleniyor?",
      desc: "JPG, PNG, WEBP, AVIF ve GIF formatlarını destekliyoruz. Bu formatlardan herhangi birindeki resimleri sıkıştırabilir ve hatta sıkıştırma sırasında formatlar arasında dönüşüm yapabilirsiniz."
    },
    faq4: {
      label: "Görüntü kalitesi etkilenir mi?",
      desc: "Sıkıştırma algoritmalarımız, dosya boyutlarını önemli ölçüde azaltırken görsel kaliteyi korumak için tasarlanmıştır. Dosya boyutu ve kalite arasında mükemmel dengeyi bulmak için sıkıştırma ayarlarını ayarlayabilirsiniz."
    },
    faq5: {
      label: "Dosya boyutu sınırı var mı?",
      desc: "Katı kurallar yok - herhangi bir boyutta resimleri sıkıştırabilirsiniz. Ancak çok büyük resimlerin işlenmesi daha fazla zaman alabilir. Sıkıştırma yerel olarak tarayıcınızda gerçekleştiğinden, performans cihazınızın kapasitesine bağlıdır."
    }
  },
  uploadCard: {
    title: "Resimlerinizi buraya bırakın",
    subTitle: "Desteklenen formatlar: %s",
    pasteHint: "💡 Ctrl+V ile yapıştırın veya resimleri sürükleyin",
  },
  listAction: {
    batchAppend: "Toplu ekle",
    addFolder: "Klasör ekle",
    clear: "Hepsini temizle",
    downloadAll: "Hepsini İndir",
    downloadOne: "İndir",
    removeOne: "Sil",
    reCompress: "Yeniden sıkıştır",
  },
  columnTitle: {
    status: "Durum",
    name: "İsim",
    preview: "Önizleme",
    size: "Boyut",
    dimension: "Boyut",
    decrease: "Sıkıştır",
    action: "Eylem",
    newSize: "Yeni boyut",
    newDimension: "Yeni boyutlar",
  },
  optionPannel: {
    failTip:
      "Daha küçük olamaz, lütfen parametreleri ayarlayın ve tekrar deneyin.",
    help: "Pic Smaller, toplu resim sıkıştırma uygulamasıdır. Seçeneklerde yapılan değişiklikler tüm resimlere uygulanacaktır.",
    resizeLable: "Görüntüyü yeniden boyutlandır",
    jpegLable: "JPEG/WEBP parametreleri",
    pngLable: "PNG parametreleri",
    gifLable: "GIF parametreleri",
    avifLable: "AVIF parametreleri",
    resizePlaceholder: "Ayarlama modunu seçin",
    fitWidth: "Genişliği ayarla, yükseklik otomatik ayarlanır",
    fitHeight: "Yüksekliği ayarla, genişlik otomatik ayarlanır",
    setShort: "Kısa kenarı ayarla, uzun kenar otomatik ayarlanır",
    setLong: "Uzun kenarı ayarla, kısa kenar otomatik ayarlanır",
    setCropRatio: "Kırpma modu, kırpma oranını ayarlayın",
    setCropSize: "Kırpma modu, kırpma boyutunu ayarla",
    cwRatioPlaceholder: "Genişlik oranını ayarla",
    chRatioPlaceholder: "Yükseklik oranını ayarla",
    cwSizePlaceholder: "Kırpma genişliğini ayarla",
    chSizePlaceholder: "Kırpma yüksekliğini ayarla",
    widthPlaceholder: "Çıktının genişliğini ayarlayın",
    heightPlaceholder: "Çıktının yüksekliğini ayarlayın",
    shortPlaceholder: "Çıktının kısa kenar uzunluğunu ayarlayın",
    longPlaceholder: "Çıktının uzun kenar uzunluğunu ayarlayın",
    resetBtn: "Seçenekleri sıfırla",
    confirmBtn: "Seçenekleri uygula",
    qualityTitle: "Çıktının kalitesini ayarla (0-1)",
    colorsDesc: "Çıktınun renk sayısını ayarla (2-256)",
    pngDithering: "Dithering katsayısını ayarla (0-1)",
    gifDithering: "Dithering'i aç",
    avifQuality: "Çıktının kalitesini ayarla (1-100)",
    avifSpeed: "Sıkıştırma hızını ayarla (1-10)",
    outputFormat: "Çıktı formatını ayarla",
    outputFormatPlaceholder: "Çıktı formatını seçin",
    transparentFillDesc: "Şeffaflık rengini seçin",
    cropCompareWarning: "Kırpma modu karşılaştırma önizlemesini desteklemiyor",
  },
  error404: {
    backHome: "Ana sayfaya dön",
    description: "Üzgünüz, ziyaret ettiğiniz sayfa mevcut değil~",
  },
  progress: {
    before: "Sıkıştırmadan önce",
    after: "Sıkıştırmadan sonra",
    rate: "Sıkıştırma oranı",
  },
};

export default localeData;
