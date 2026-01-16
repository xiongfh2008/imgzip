import { LocaleData } from "@/type";
import esES from "antd/locale/es_ES";

const localeData: LocaleData = {
  antLocale: esES,
  logo: "IMGZIP",
  initial: "Inicializando",
  previewHelp:
    "Arrastre la línea divisoria para comparar el efecto de compresión: a la izquierda está la imagen original y a la derecha la imagen comprimida",
  home: {
    title: "Comprimir imágenes al instante",
    subtitle: "Reduzca el tamaño de los archivos de imagen hasta en un 80% sin perder calidad. Todo el procesamiento ocurre en su navegador - sus imágenes permanecen privadas.",
    featuresTitle: "Potente compresión de imágenes, uso sencillo",
    featuresDesc: "Reduzca el tamaño de los archivos de imagen sin sacrificar la calidad. Perfecto para sitios web, redes sociales y almacenamiento.",
    feature1Title: "Compresión ultrarrápida",
    feature1Desc: "Comprima imágenes en segundos con nuestros algoritmos avanzados que mantienen la calidad mientras reducen el tamaño del archivo.",
    feature2Title: "Privacidad primero",
    feature2Desc: "Todo el procesamiento de imágenes ocurre localmente en su navegador. No hay cargas a servidores externos - sus imágenes permanecen privadas.",
    feature3Title: "Soporte de múltiples formatos",
    feature3Desc: "Soporta JPG, PNG, WEBP, AVIF, SVG, GIF y más. Convierta entre formatos según sea necesario.",
    feature4Title: "Control de calidad",
    feature4Desc: "Ajuste finamente los parámetros de compresión para lograr el equilibrio perfecto entre tamaño de archivo y calidad de imagen.",
    statsTitle1: "Reducción promedio de tamaño",
    statsTitle2: "Formatos soportados",
    statsTitle3: "Privacidad garantizada",
    statsTitle4: "Sin necesidad de registro",
    faqTitle: "Preguntas frecuentes",
    faq1: {
      label: "¿Cómo funciona Image Zip?",
      desc: "Image Zip procesa sus imágenes directamente en su navegador usando algoritmos avanzados de compresión. Ninguna imagen se carga a ningún servidor, asegurando su privacidad y seguridad. La compresión reduce el tamaño de los archivos manteniendo la calidad visual."
    },
    faq2: {
      label: "¿Está protegida mi privacidad?",
      desc: "Sí, absolutamente. Todo el procesamiento de imágenes ocurre localmente en su navegador. Nunca subimos sus imágenes a ningún servidor, ni se recopila o almacena ningún dato. Sus imágenes permanecen completamente privadas y seguras."
    },
    faq3: {
      label: "¿Qué formatos son compatibles?",
      desc: "Soportamos formatos JPG, PNG, WEBP, AVIF y GIF. Puede comprimir imágenes en cualquiera de estos formatos e incluso convertir entre formatos durante la compresión."
    },
    faq4: {
      label: "¿Se verá afectada la calidad de la imagen?",
      desc: "Nuestros algoritmos de compresión están diseñados para mantener la calidad visual mientras reducen significativamente el tamaño de los archivos. Puede ajustar los parámetros de compresión para encontrar el equilibrio perfecto entre tamaño de archivo y calidad para sus necesidades."
    },
    faq5: {
      label: "¿Hay límite de tamaño de archivo?",
      desc: "No hay límites estrictos - puede comprimir imágenes de cualquier tamaño. Sin embargo, el procesamiento de imágenes muy grandes puede tomar más tiempo. La compresión ocurre localmente en su navegador, por lo tanto el rendimiento depende de las capacidades de su dispositivo."
    }
  },
  uploadCard: {
    title: "Selecciona o arrastra tus imágenes aquí",
    subTitle: "Formatos soportados: %s",
    pasteHint: "💡 Pega con Ctrl+V o arrastra imágenes aquí",
  },
  listAction: {
    batchAppend: "Añadir imagenes",
    addFolder: "Añadir carpeta",
    clear: "Eliminar todas",
    downloadAll: "Guardar todas",
    downloadOne: "Guardar imagen",
    removeOne: "Eliminar imagen",
    reCompress: "Recomprimir",
  },
  columnTitle: {
    status: "Estado",
    name: "Nombre",
    preview: "Miniatura",
    size: "Tamaño",
    dimension: "Resolución",
    decrease: "Compresión",
    action: "Acciones",
    newSize: "Nuevo tamaño",
    newDimension: "Nueva resolución",
  },
  optionPannel: {
    failTip:
      "Imposible de reducir más el tamaño, por favor ajusta los parámetros e inténtalo de nuevo.",
    help: "Pic Smaller es una aplicación de compresión de imágenes por lotes. Las modificaciones se aplicarán a todas las imágenes.",
    resizeLable: "Cambia el tamaño de la imagen",
    jpegLable: "Parámetros JPEG/WEBP",
    pngLable: "Parámetros PNG",
    gifLable: "Parámetros GIF",
    avifLable: "Parámetros AVIF",
    resizePlaceholder: "Selecciona el ajuste de tamaño",
    fitWidth: "Ajusta la anchura, la altura se escala automáticamente",
    fitHeight: "Ajusta la altura, la anchura se escala automáticamente",
    setShort:
      "Ajusta el lado más corto, el lado más largo se adaptará automáticamente",
    setLong:
      "Ajusta el lado más largo, el lado más corto se adaptará automáticamente",
    setCropRatio: "Modo de recorte, establecer proporción de recorte",
    setCropSize: "Modo de recorte, establecer tamaño de recorte",
    cwRatioPlaceholder: "Establecer relación de ancho",
    chRatioPlaceholder: "Establecer relación de altura",
    cwSizePlaceholder: "Establecer ancho de recorte",
    chSizePlaceholder: "Establecer altura de recorte",
    widthPlaceholder: "Ajusta la anchura de la imagen",
    heightPlaceholder: "Ajusta la altura de la imagen",
    shortPlaceholder: "Ajusta el lado mas corto de la imagen",
    longPlaceholder: "Ajusta el lado mas largo de la imagen",
    resetBtn: "Reiniciar ajustes",
    confirmBtn: "Aplicar ajustes",
    qualityTitle: "Calidad de imagen (0-1)",
    colorsDesc: "Número de colores de salida (2-256)",
    pngDithering: "Coeficiente de difuminado (0-1)",
    gifDithering: "Difuminado",
    avifQuality: "Calidad de imagen (1-100)",
    avifSpeed: "Velocidad de compresión (1-10)",
    outputFormat: "Formato de fichero",
    outputFormatPlaceholder: "Selecciona el formato de imagen",
    transparentFillDesc: "Elige un color de relleno transparente",
    cropCompareWarning:
      "El modo de recorte no admite la vista previa de comparación",
  },
  error404: {
    backHome: "Volver al inicio",
    description: "Lo siento, la página visitada no existe~",
  },
  progress: {
    before: "Antes de comprimir",
    after: "Después de comprimir",
    rate: "Índice de compresión",
  },
};

export default localeData;
