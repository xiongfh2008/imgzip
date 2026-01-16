import { LocaleData } from "@/type";
import frFR from "antd/locale/fr_FR";

const localeData: LocaleData = {
  antLocale: frFR,
  logo: "IMGZIP",
  initial: "Initialisation",
  previewHelp:
    "Glissez la ligne de séparation pour comparer l'effet de compression : à gauche l'image originale, à droite l'image compressée",
  home: {
    title: "Compressez les images instantanément",
    subtitle: "Réduisez la taille des fichiers image jusqu'à 80% sans perte de qualité. Tout le traitement se fait dans votre navigateur - vos images restent privées.",
    featuresTitle: "Compression d'images puissante, simple à utiliser",
    featuresDesc: "Réduisez la taille des fichiers image sans sacrifier la qualité. Parfait pour les sites web, les réseaux sociaux et le stockage.",
    feature1Title: "Compression ultra-rapide",
    feature1Desc: "Compressez les images en quelques secondes avec nos algorithmes avancés qui préservent la qualité tout en réduisant la taille du fichier.",
    feature2Title: "Vie privée d'abord",
    feature2Desc: "Tout le traitement des images s'effectue localement dans votre navigateur. Pas de téléchargement sur des serveurs externes - vos images restent privées.",
    feature3Title: "Prise en charge de plusieurs formats",
    feature3Desc: "Prend en charge JPG, PNG, WEBP, AVIF, SVG, GIF et plus encore. Convertissez entre formats selon vos besoins.",
    feature4Title: "Contrôle de la qualité",
    feature4Desc: "Ajustez précisément les paramètres de compression pour obtenir le parfait équilibre entre taille du fichier et qualité d'image.",
    statsTitle1: "Réduction moyenne de taille",
    statsTitle2: "Formats pris en charge",
    statsTitle3: "Garantie de confidentialité",
    statsTitle4: "Pas d'inscription requise",
    faqTitle: "Questions fréquentes",
    faq1: {
      label: "Comment fonctionne Image Zip ?",
      desc: "Image Zip traite vos images directement dans votre navigateur à l'aide d'algorithmes de compression avancés. Aucune image n'est téléchargée sur un serveur, garantissant votre vie privée et votre sécurité. La compression réduit la taille des fichiers tout en maintenant la qualité visuelle."
    },
    faq2: {
      label: "Ma vie privée est-elle protégée ?",
      desc: "Oui, absolument. Tout le traitement des images s'effectue localement dans votre navigateur. Nous ne téléchargeons jamais vos images sur un serveur et aucune donnée n'est collectée ou stockée. Vos images restent entièrement privées et sécurisées."
    },
    faq3: {
      label: "Quels formats sont pris en charge ?",
      desc: "Nous prenons en charge les formats JPG, PNG, WEBP, AVIF et GIF. Vous pouvez compresser des images dans chacun de ces formats et même convertir entre formats lors de la compression."
    },
    faq4: {
      label: "La qualité de l'image sera-t-elle affectée ?",
      desc: "Nos algorithmes de compression sont conçus pour maintenir la qualité visuelle tout en réduisant considérablement la taille des fichiers. Vous pouvez ajuster les paramètres de compression pour trouver le parfait équilibre entre taille du fichier et qualité pour vos besoins."
    },
    faq5: {
      label: "Existe-t-il une limite de taille de fichier ?",
      desc: "Il n'y a pas de limites strictes - vous pouvez compresser des images de n'importe quelle taille. Cependant, le traitement d'images très volumineuses peut prendre plus de temps. La compression s'effectue localement dans votre navigateur, donc les performances dépendent des capacités de votre appareil."
    }
  },
  uploadCard: {
    title: "Déposez vos images ici",
    subTitle: "Formats supportés : %s",
    pasteHint: "💡 Collez avec Ctrl+V ou glissez vos images ici",
  },
  listAction: {
    batchAppend: "Ajouter des fichiers",
    addFolder: "Ajouter dossier",
    clear: "Tout retirer",
    downloadAll: "Tout sauvegarder",
    downloadOne: "Sauvegarder l'image",
    removeOne: "Retirer l'image",
    reCompress: "Relancer compression",
  },
  columnTitle: {
    status: "Status",
    name: "Nom",
    preview: "Aperçu",
    size: "Taille",
    dimension: "Dimensions",
    decrease: "Réduction",
    action: "Action",
    newSize: "Nouvelle taille",
    newDimension: "Nouvelles dimensions",
  },
  optionPannel: {
    failTip:
      "Impossible de réduire la taille, veuillez ajuster les paramètres et réessayer.",
    help: "Pic Smaller est une application de compression d'images par lot. Les modifications apportées aux options seront appliquées à toutes les images.",
    resizeLable: "Redimensionner l'image",
    jpegLable: "Paramètres JPEG/WEBP",
    pngLable: "Paramètres PNG",
    gifLable: "Paramètres GIF",
    avifLable: "Paramètres AVIF",
    resizePlaceholder: "Sélectionner le mode d'ajustement",
    fitWidth: "Régler la largeur, la hauteur s'ajuste automatiquement",
    fitHeight: "Régler la hauteur, la largeur s'ajuste automatiquement",
    setShort: "Régler le petit côté, le long côté s'ajuste automatiquement",
    setLong: "Régler le long côté, le petit côté s'ajuste automatiquement",
    setCropRatio: "Mode de recadrage, définir le rapport de recadrage",
    setCropSize: "Mode recadrage, définir la taille du recadrage",
    cwRatioPlaceholder: "Définir le rapport de largeur",
    chRatioPlaceholder: "Définir le rapport de hauteur",
    cwSizePlaceholder: "Définir la largeur du recadrage",
    chSizePlaceholder: "Définir la hauteur de recadrage",
    widthPlaceholder: "Largeur de l'image de sortie",
    heightPlaceholder: "Hauteur de l'image de sortie",
    shortPlaceholder: "Longueur du petit côté de l'image de sortie",
    longPlaceholder: "Longueur du côté long de l'image de sortie",
    resetBtn: "Réinitialiser",
    confirmBtn: "Appliquer",
    qualityTitle: "Qualité de l'image de sortie (0-1)",
    colorsDesc: "Nombre de couleurs de sortie (2-256)",
    pngDithering: "Coefficient de tramage (0-1)",
    gifDithering: "Activer le tramage",
    avifQuality: "Qualité de l'image de sortie (1-100)",
    avifSpeed: "Vitesse de compression (1-10)",
    outputFormat: "Format de sortie",
    outputFormatPlaceholder: "Format de l'image de sortie",
    transparentFillDesc: "Couleur de remplissage transparente",
    cropCompareWarning:
      "Le mode Recadrage ne prend pas en charge l'aperçu de comparaison",
  },
  error404: {
    backHome: "Retour à l'accueil",
    description: "Désolé, la page que vous avez visitée n'existe pas~",
  },
  progress: {
    before: "Avant compression",
    after: "Après compression",
    rate: "Taux de diminution",
  },
};

export default localeData;
