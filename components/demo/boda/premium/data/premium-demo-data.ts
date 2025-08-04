import { basicDemoData } from '@/components/demo/boda/basic/data/basic-demo-data'

// Datos demo para el paquete premium de boda
export const premiumDemoData = {
  // Heredar todos los datos del básico
  ...basicDemoData,
  
  // Sobreescribir hero con configuración de carrusel
  hero: {
    ...basicDemoData.hero,
    backgroundImages: [
      "/images/custom/bodaArodi12.jpg",
      "/images/custom/bodaArodi7.jpg", 
      "/images/custom/bodaArodi6.jpg"
    ],
    carouselSettings: {
      autoAdvance: true,
      interval: 3000, // 3 segundos
      showIndicators: true,
      showControls: true // flechas de navegación
    }
  },
  
  // Sobreescribir información demo con datos premium
  demo: {
    badge: "🌟 DEMO - Paquete Premium ($499)",
    description: "¡La más solicitada! - Incluye música, galería y padrinos",
    features: [
      ...basicDemoData.demo.features,
      "Música personalizada",
      "Galería de fotos", 
      "Lista de padrinos"
    ],
    cta: {
      title: "¿Te encanta el paquete Premium?",
      subtitle: "El más solicitado - Incluye TODAS las características esenciales + 3 premium exclusivas",
      buttonText: "Contratar Paquete Premium - $499",
      link: "/#pricing"
    }
  },
  
  // Configuración de música premium
  music: {
    title: "Música Romántica",
    source: "local", // Cambiar temporalmente a local para garantizar funcionamiento
    youtube: {
      videoId: "P9iKATG9BW4", // Background Music For Wedding Videos - Romantic Piano
      startTime: 10,
      alternatives: [
        { videoId: "Lg4fNsPSfhU", startTime: 5 }, // Romantic Piano Background Music
        { videoId: "4QbPKGBYZcw", startTime: 15 }, // Beautiful Romantic Piano Love Songs
        { videoId: "D_RY4LIlIt8", startTime: 20 }  // Most Romantic Piano Love Songs
      ]
    },
    track: "/images/custom/Por_Ti_Me_Casare.mp3", // Fallback
    autoplay: false, // Por UX, mejor no autoplay automático
    loop: true,
    description: "Música romántica para nuestro día especial"
  },
  
  // Información completa de invitación (característica premium)
  invitation: {
    title: "INVITACIÓN DE BODA",
    message: "Con gran alegría les invitamos a celebrar",
    subtitle: "Nuestra Boda",
    blessing: "con la bendición de Dios y nuestros padres:",
    celebrants: basicDemoData.event.celebrants,
    parents: basicDemoData.event.parents,
    decorativeMessage: "Los esperamos en este día tan especial"
  },
  
  // Lista de padrinos (característica premium NUEVA)
  padrinos: [
    { 
      role: "Padrinos de Lazo", 
      names: ["Enedina Riestra", "Antonio Velásquez"],
      description: "Quienes han sido como segundos padres"
    },
    { 
      role: "Padrinos de Arras", 
      names: ["Herendira Santiago", "Ivan Santiago"],
      description: "Por ser testigos de nuestro compromiso"
    },
    { 
      role: "Madrina de Ramos", 
      names: ["", "Ofelia Flores"],
      description: "Por las flores más hermosas"
    },
    { 
      role: "Padrinos de Anillos", 
      names: ["Dario de los Reyes", "Mireya Velasquez"],
      description: "Por llenar de melodía nuestra celebración"
    },
    { 
      role: "Pajecitos", 
      names: ["Flavia Vazquez", "Kehlani Salmon"],
      description: "Por hacer mágico nuestro primer vals"
    },
    { 
      role: "Agradecemos a", 
      names: ["Tania", "Roberto y Caroline", "Olga", "Juanita", "Enriqueta", "Felix", "Gregorio", "Lidia", "Hannah","Meli", "Maria de la Luz"],
      description: "Por bendecir nuestra unión"
    }
  ],
  
  // Galería de fotos (característica premium)
  gallery: {
    title: "Nuestra Historia en Imágenes",
    subtitle: "Momentos especiales de Vero & Arodi",
    description: "Una colección de nuestras fotos favoritas preparándonos para este gran día",
    images: [
      { src: "/images/custom/bodaArodi1.jpg", alt: "Boda Arodi 1" },
      { src: "/images/custom/bodaArodi2.jpg", alt: "Boda Arodi 2" },
      { src: "/images/custom/bodaArodi3.jpg", alt: "Boda Arodi 3" },
      { src: "/images/custom/bodaArodi4.jpg", alt: "Boda Arodi 4" },
      { src: "/images/custom/bodaArodi5.jpg", alt: "Boda Arodi 5" },
      { src: "/images/custom/bodaArodi6.jpg", alt: "Boda Arodi 6" },
      { src: "/images/custom/bodaArodi7.jpg", alt: "Boda Arodi 7" },
      { src: "/images/custom/bodaArodi8.jpg", alt: "Boda Arodi 8" },
      { src: "/images/custom/bodaArodi9.jpg", alt: "Boda Arodi 9" },
      { src: "/images/custom/bodaArodi10.jpg", alt: "Boda Arodi 10" },
      { src: "/images/custom/bodaArodi11.jpg", alt: "Boda Arodi 11" },
      { src: "/images/custom/bodaArodi12.jpg", alt: "Boda Arodi 12" },
      { src: "/images/custom/bodaArodi13.jpg", alt: "Boda Arodi 13" },
      { src: "/images/custom/bodaArodi14.jpg", alt: "Boda Arodi 14" },
      { src: "/images/custom/bodaArodi15.jpg", alt: "Boda Arodi 15" },
      { src: "/images/custom/bodaArodi16.jpg", alt: "Boda Arodi 16" }
    ]
  },
  
  // Mensaje final personalizado (característica premium)
  thankYou: {
    title: "¡Gracias por ser parte de uno de los mejores días de nuestras vidas!",
    personalMessage: "Cada uno de ustedes tiene un lugar especial en nuestros corazones, y no podemos imaginar esta celebración sin su presencia.",
    message: "Con todo nuestro cariño:",
    signature: "Vero & Arodi",
    footer: {
      year: "2025",
      name: "VERO & ARODI WEDDING",
      company: "BY INVITACIONES WEB MX",
      rights: "ALL RIGHTS RESERVED",
      cta: {
        question: "¿TIENES UN EVENTO EN PUERTA?",
        action: "DISEÑA CON NOSOTROS TU INVITACIÓN WEB DIGITAL.",
        linkText: "AQUÍ",
        link: "https://invitacionesweb.lat"
      }
    }
  },
  
  // Configuración premium adicional
  premium: {
    hasMusic: true,
    hasGallery: true,
    hasPadrinos: true,
    hasFullInvitation: true,
    hasPersonalizedThankYou: true,
    badge: "PREMIUM",
    color: "from-purple-600 to-pink-600"
  }
}

export type PremiumDemoData = typeof premiumDemoData 