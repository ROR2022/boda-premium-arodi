// Datos demo para el paquete básico de boda
export const basicDemoData = {
  hero: {
    name: "Vero & Arodi",
    subtitle: "¡Nos Casamos!",
    backgroundImage: "/images/boda/boda1.jpeg"
  },
  
  event: {
    celebrants: {
      bride: "MARTHA VERÓNICA RIESTRA CARRILLO",
      groom: "ARODI INSUNZA VALDEZ"
    },
    parents: {
      brideParents: {
        father: "GREGORIO RIESTRA",
        mother: "MARIA DE LA LUZ CARRILLO"
      },
      groomParents: {
        father: "ANTONIO INSUNZA",
        mother: "HILDALICIA VALDEZ"
      }
    },
    date: {
      full: "Sábado 4 de Octubre 2025",
      day: "Sábado",
      date: "4 de Octubre 2025"
    },
    ceremony: {
      time: "13:00 hrs.",
      venue: "Casa de oración",
      address: "Calle Gregario Barreta #2704 Col. Echeverria Guadalajara, Jal.",
      type: "Ceremonia"
    },
    party: {
      time: "18:30 hrs.",
      venue: "La Altanera",
      address: "Av. Lázaro Cárdenas #14 Tlaquepaque, Jal.",
      type: "Recepción"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "October 4, 2025 13:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Esperamos que no sea impedimento para que puedan acompañarnos en este día tan especial.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, pueden considerar las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Ana Lucía Martínez Rodríguez"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: Boda Ana & Carlos\nCódigo: 51234567"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Pueden entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu boda",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 