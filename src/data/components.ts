import { Category, Component } from '../types';

export const categories: Category[] = [
  {
    id: 'identity-system',
    name: 'Sistemas de identidad y lenguaje visual',
    color: '#FF6B9D',
    icon: 'Sparkles'
  },
  {
    id: 'digital-experiences',
    name: 'Experiencias digitales e interfaces',
    color: '#60A5FA',
    icon: 'Monitor'
  },
  {
    id: 'digital-content',
    name: 'Contenidos digitales y comunidad',
    color: '#34D399',
    icon: 'Share2'
  },
  {
    id: 'audiovisual-motion',
    name: 'Diseño audiovisual y motion',
    color: '#C084FC',
    icon: 'Film'
  },
  {
    id: 'spatial-design',
    name: 'Diseño para espacios + capa digital',
    color: '#FBBF24',
    icon: 'Map'
  },
  {
    id: 'playful-transmedia',
    name: 'Experiencias lúdicas y transmedia',
    color: '#F97316',
    icon: 'Gamepad2'
  },
  {
    id: 'physical-media',
    name: 'Soportes físicos e impresos (base)',
    color: '#8B5CF6',
    icon: 'Package'
  },
  {
    id: 'experimental-tech',
    name: 'Tecnologías experimentales',
    color: '#EC4899',
    icon: 'Glasses'
  }
];

export const components: Component[] = [
  // 🧠 Sistemas de identidad y lenguaje visual
  { 
    id: 'brand-system', 
    name: 'Sistema de marca (branding)', 
    description: 'Identidad visual completa y consistente', 
    basePoints: 25, 
    categoryId: 'identity-system', 
    icon: 'Award' 
  },
  { 
    id: 'dynamic-identity', 
    name: 'Identidad visual dinámica', 
    description: 'Sistema de identidad adaptable y generativo', 
    basePoints: 30, 
    categoryId: 'identity-system', 
    icon: 'Layers' 
  },
  { 
    id: 'motion-identity', 
    name: 'Motion identity (marca animada)', 
    description: 'Identidad visual en movimiento', 
    basePoints: 28, 
    categoryId: 'identity-system', 
    icon: 'Sparkles' 
  },
  { 
    id: 'iconography', 
    name: 'Iconografía / pictogramas', 
    description: 'Sistema de íconos personalizados', 
    basePoints: 15, 
    categoryId: 'identity-system', 
    icon: 'Grid3x3' 
  },
  { 
    id: 'mascot', 
    name: 'Mascota o personaje', 
    description: 'Diseño de personaje representativo de marca', 
    basePoints: 20, 
    categoryId: 'identity-system', 
    icon: 'Smile' 
  },
  { 
    id: 'applied-illustration', 
    name: 'Ilustración aplicada al sistema', 
    description: 'Sistema de ilustración coherente con la identidad', 
    basePoints: 18, 
    categoryId: 'identity-system', 
    icon: 'Palette' 
  },

  // 📱 Experiencias digitales e interfaces
  { 
    id: 'app', 
    name: 'App', 
    description: 'Aplicación móvil completa', 
    basePoints: 30, 
    categoryId: 'digital-experiences', 
    icon: 'Smartphone' 
  },
  { 
    id: 'institutional-web', 
    name: 'Web institucional', 
    description: 'Sitio web corporativo multipágina', 
    basePoints: 25, 
    categoryId: 'digital-experiences', 
    icon: 'Globe' 
  },
  { 
    id: 'interactive-landing', 
    name: 'Landing interactiva', 
    description: 'Página de aterrizaje con interacciones', 
    basePoints: 20, 
    categoryId: 'digital-experiences', 
    icon: 'MousePointerClick' 
  },
  { 
    id: 'ux-ui', 
    name: 'UX / UI', 
    description: 'Diseño de experiencia de usuario e interfaz', 
    basePoints: 22, 
    categoryId: 'digital-experiences', 
    icon: 'Figma' 
  },
  { 
    id: 'clickable-prototype', 
    name: 'Prototipo clickable', 
    description: 'Prototipo funcional navegable', 
    basePoints: 18, 
    categoryId: 'digital-experiences', 
    icon: 'Pointer' 
  },
  { 
    id: 'microinteractions', 
    name: 'Microinteracciones', 
    description: 'Detalles de interacción en UI', 
    basePoints: 12, 
    categoryId: 'digital-experiences', 
    icon: 'Sparkle' 
  },
  { 
    id: 'gamified-experience', 
    name: 'Gamificación de la experiencia', 
    description: 'Mecánicas de juego en interfaces digitales', 
    basePoints: 22, 
    categoryId: 'digital-experiences', 
    icon: 'Star' 
  },

  // 🌐 Contenidos digitales y comunidad
  { 
    id: 'content-strategy', 
    name: 'Estrategia de contenidos', 
    description: 'Plan editorial y de comunicación digital', 
    basePoints: 18, 
    categoryId: 'digital-content', 
    icon: 'Target' 
  },
  { 
    id: 'interactive-social', 
    name: 'Social media interactivo', 
    description: 'Contenido participativo y dinámico para redes', 
    basePoints: 15, 
    categoryId: 'digital-content', 
    icon: 'MessageCircle' 
  },
  { 
    id: 'narrative-carousels', 
    name: 'Carruseles narrativos', 
    description: 'Series visuales con storytelling', 
    basePoints: 10, 
    categoryId: 'digital-content', 
    icon: 'LayoutGrid' 
  },
  { 
    id: 'post-series', 
    name: 'Series de posteos', 
    description: 'Pack cohesivo de contenido para redes', 
    basePoints: 12, 
    categoryId: 'digital-content', 
    icon: 'Grid2x2' 
  },
  { 
    id: 'participatory-content', 
    name: 'Contenidos participativos', 
    description: 'Dinámicas de cocreación con comunidad', 
    basePoints: 16, 
    categoryId: 'digital-content', 
    icon: 'Users' 
  },
  { 
    id: 'digital-storytelling', 
    name: 'Storytelling digital', 
    description: 'Narrativa visual multiplataforma', 
    basePoints: 20, 
    categoryId: 'digital-content', 
    icon: 'BookOpen' 
  },

  // 🎥 Diseño audiovisual y motion
  { 
    id: 'motion-graphics', 
    name: 'Motion graphics', 
    description: 'Animación y gráficos en movimiento', 
    basePoints: 20, 
    categoryId: 'audiovisual-motion', 
    icon: 'Video' 
  },
  { 
    id: 'system-animations', 
    name: 'Animaciones de sistema', 
    description: 'Animaciones para identidad de marca', 
    basePoints: 18, 
    categoryId: 'audiovisual-motion', 
    icon: 'Wand2' 
  },
  { 
    id: 'reels', 
    name: 'Reels', 
    description: 'Videos cortos para redes sociales', 
    basePoints: 10, 
    categoryId: 'audiovisual-motion', 
    icon: 'Clapperboard' 
  },
  { 
    id: 'institutional-video', 
    name: 'Video institucional', 
    description: 'Pieza audiovisual corporativa', 
    basePoints: 22, 
    categoryId: 'audiovisual-motion', 
    icon: 'PlayCircle' 
  },
  { 
    id: 'motion-pack-streaming', 
    name: 'Motion pack (streaming: zócalos, mosca, overlays)', 
    description: 'Pack completo de elementos para streaming', 
    basePoints: 28, 
    categoryId: 'audiovisual-motion', 
    icon: 'Radio' 
  },
  { 
    id: 'experimental-short', 
    name: 'Cortometraje experimental / pieza conceptual', 
    description: 'Obra audiovisual experimental', 
    basePoints: 32, 
    categoryId: 'audiovisual-motion', 
    icon: 'Film' 
  },

  // 🗺️ Diseño para espacios + capa digital
  { 
    id: 'wayfinding', 
    name: 'Señalética', 
    description: 'Sistema de orientación espacial', 
    basePoints: 18, 
    categoryId: 'spatial-design', 
    icon: 'MapPin' 
  },
  { 
    id: 'archigraphics', 
    name: 'Arquigrafía', 
    description: 'Gráfica aplicada a arquitectura', 
    basePoints: 20, 
    categoryId: 'spatial-design', 
    icon: 'Building' 
  },
  { 
    id: 'posters', 
    name: 'Cartelería', 
    description: 'Sistema de afiches y carteles', 
    basePoints: 12, 
    categoryId: 'spatial-design', 
    icon: 'Frame' 
  },
  { 
    id: 'interactive-wayfinding', 
    name: 'Señalética interactiva', 
    description: 'Sistema de orientación con componentes digitales', 
    basePoints: 25, 
    categoryId: 'spatial-design', 
    icon: 'MonitorPlay' 
  },
  { 
    id: 'digital-layers', 
    name: 'Capas digitales (QR, info contextual, recorridos)', 
    description: 'Información digital superpuesta al espacio físico', 
    basePoints: 16, 
    categoryId: 'spatial-design', 
    icon: 'Scan' 
  },

  // 🎮 Experiencias lúdicas y transmedia
  { 
    id: 'gamification', 
    name: 'Gamificación', 
    description: 'Mecánicas lúdicas aplicadas a experiencias', 
    basePoints: 20, 
    categoryId: 'playful-transmedia', 
    icon: 'Trophy' 
  },
  { 
    id: 'advergame', 
    name: 'Advergame', 
    description: 'Juego publicitario de marca', 
    basePoints: 30, 
    categoryId: 'playful-transmedia', 
    icon: 'Gamepad' 
  },
  { 
    id: 'transmedia-narrative', 
    name: 'Narrativa transmedia', 
    description: 'Historia expandida en múltiples plataformas', 
    basePoints: 28, 
    categoryId: 'playful-transmedia', 
    icon: 'Network' 
  },
  { 
    id: 'packaging-qr-ar', 
    name: 'Packaging + QR / AR', 
    description: 'Empaque con experiencia digital aumentada', 
    basePoints: 25, 
    categoryId: 'playful-transmedia', 
    icon: 'PackageSearch' 
  },
  { 
    id: 'hybrid-experience', 
    name: 'Experiencia híbrida físico-digital', 
    description: 'Vivencia que integra mundo real y digital', 
    basePoints: 32, 
    categoryId: 'playful-transmedia', 
    icon: 'Blend' 
  },

  // 📦 Soportes físicos e impresos (base)
  { 
    id: 'packaging', 
    name: 'Packaging', 
    description: 'Diseño de envase y empaque', 
    basePoints: 18, 
    categoryId: 'physical-media', 
    icon: 'Package' 
  },
  { 
    id: 'merch', 
    name: 'Merch', 
    description: 'Merchandising y productos de marca', 
    basePoints: 12, 
    categoryId: 'physical-media', 
    icon: 'ShoppingBag' 
  },
  { 
    id: 'apparel', 
    name: 'Indumentaria', 
    description: 'Diseño de ropa y textil', 
    basePoints: 15, 
    categoryId: 'physical-media', 
    icon: 'Shirt' 
  },
  { 
    id: 'editorial-print', 
    name: 'Editorial / folletería', 
    description: 'Material impreso editorial', 
    basePoints: 16, 
    categoryId: 'physical-media', 
    icon: 'Book' 
  },
  { 
    id: 'pop', 
    name: 'POP', 
    description: 'Material punto de venta', 
    basePoints: 10, 
    categoryId: 'physical-media', 
    icon: 'Store' 
  },

  // 🧪 Tecnologías experimentales
  { 
    id: 'ar-vr', 
    name: 'AR / VR', 
    description: 'Experiencias de realidad aumentada o virtual', 
    basePoints: 35, 
    categoryId: 'experimental-tech', 
    icon: 'Glasses' 
  },
  { 
    id: 'immersive-experiences', 
    name: 'Experiencias inmersivas', 
    description: 'Vivencias envolventes multisensoriales', 
    basePoints: 32, 
    categoryId: 'experimental-tech', 
    icon: 'Eye' 
  },
  { 
    id: 'realtime-unity', 
    name: 'Realtime (Unity u otros)', 
    description: 'Experiencia en tiempo real con motores 3D', 
    basePoints: 40, 
    categoryId: 'experimental-tech', 
    icon: 'Zap' 
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    description: 'Aplicaciones descentralizadas y contratos inteligentes', 
    basePoints: 30, 
    categoryId: 'experimental-tech', 
    icon: 'Blocks' 
  },
  { 
    id: 'nfts-collectibles', 
    name: 'NFTs / coleccionables digitales', 
    description: 'Tokens no fungibles y colecciones digitales', 
    basePoints: 25, 
    categoryId: 'experimental-tech', 
    icon: 'Hexagon' 
  }
];
