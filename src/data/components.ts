import { Category, Component } from '../types';

export const categories: Category[] = [
  {
    id: 'identity-system',
    name: 'Sistema de branding y lenguaje visual',
    color: '#FF6B9D',
    icon: 'Sparkles'
  },
  {
    id: 'digital-experiences',
    name: 'Experiencias (ux/ui y prototipos)',
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
  },
  {
    id: 'custom',
    name: 'Personalizado',
    color: '#6B7280',
    icon: 'Wand2'
  }
];

export const components: Component[] = [
  // 🧠 Sistema de branding y lenguaje visual
  { 
    id: 'brand-system', 
    name: 'Sistema de identidad', 
    description: 'Identidad visual completa y consistente', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Award' 
  },
  { 
    id: 'dynamic-identity', 
    name: 'Identidad visual dinámica', 
    description: 'Sistema de identidad adaptable y generativo', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Layers' 
  },
  { 
    id: 'iconography', 
    name: 'Iconografía / pictograma / señalética', 
    description: 'Sistema de íconos y pictogramas personalizados', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Grid3x3' 
  },
  { 
    id: 'mascot', 
    name: 'Mascota o personaje', 
    description: 'Diseño de personaje representativo de marca', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Smile' 
  },
  { 
    id: 'applied-illustration', 
    name: 'Ilustración aplicada al sistema', 
    description: 'Sistema de ilustración coherente con la identidad', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Palette' 
  },

  // 📱 Experiencias (ux/ui y prototipos)
  { 
    id: 'app', 
    name: 'App', 
    description: 'Aplicación móvil completa', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'Smartphone' 
  },
  { 
    id: 'institutional-web', 
    name: 'Web institucional', 
    description: 'Sitio web corporativo multipágina', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'Globe' 
  },
  { 
    id: 'interactive-landing', 
    name: 'Landing interactiva', 
    description: 'Página de aterrizaje con interacciones', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'MousePointerClick' 
  },
  { 
    id: 'ecommerce', 
    name: 'Ecommerce', 
    description: 'Plataforma de comercio electrónico', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'ShoppingCart' 
  },

  // 🌐 Contenidos digitales y comunidad
  { 
    id: 'content-strategy', 
    name: 'Estrategia de contenidos / storytelling digital', 
    description: 'Plan editorial y narrativa digital', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'Target' 
  },
  { 
    id: 'social-media-participatory', 
    name: 'Social media participativo', 
    description: 'Contenido interactivo y participativo para redes', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'MessageCircle' 
  },
  { 
    id: 'multiplatform-strategy', 
    name: 'Estrategia multiplataforma', 
    description: 'Coordinación de contenidos en múltiples plataformas', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'Layers' 
  },
  { 
    id: 'digital-editorial', 
    name: 'Editorial digital', 
    description: 'Publicación y contenido editorial en formato digital', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'BookOpen' 
  },

  // 🎥 Diseño audiovisual y motion
  { 
    id: 'motion-graphics', 
    name: 'Motion graphics', 
    description: 'Animación y gráficos en movimiento', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Video' 
  },
  { 
    id: 'system-animations', 
    name: 'Animaciones de sistema', 
    description: 'Animaciones para identidad de marca', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Wand2' 
  },
  { 
    id: 'institutional-video', 
    name: 'Video institucional', 
    description: 'Pieza audiovisual corporativa', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'PlayCircle' 
  },
  { 
    id: 'motion-pack-streaming', 
    name: 'Motion pack (streaming: zócalos, mosca, overlays)', 
    description: 'Pack completo de elementos para streaming', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Radio' 
  },
  { 
    id: 'experimental-short', 
    name: 'Cortometraje experimental / pieza conceptual', 
    description: 'Obra audiovisual experimental', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Film' 
  },

  // 🗺️ Diseño para espacios + capa digital
  { 
    id: 'archigraphics', 
    name: 'Arquigrafía', 
    description: 'Gráfica aplicada a arquitectura', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Building' 
  },
  { 
    id: 'posters', 
    name: 'Cartelería', 
    description: 'Sistema de afiches y carteles', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Frame' 
  },
  { 
    id: 'interactive-wayfinding', 
    name: 'Señalética interactiva', 
    description: 'Sistema de orientación con componentes digitales', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'MonitorPlay' 
  },
  { 
    id: 'digital-layers', 
    name: 'Capas digitales (QR, info contextual, recorridos)', 
    description: 'Información digital superpuesta al espacio físico', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Scan' 
  },
  { 
    id: 'mapping', 
    name: 'Mapping', 
    description: 'Proyección de video sobre superficies', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Projector' 
  },

  // 🎮 Experiencias lúdicas y transmedia
  { 
    id: 'gamification', 
    name: 'Gamificación / juegos físicos', 
    description: 'Mecánicas lúdicas físicas o digitales', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Trophy' 
  },
  { 
    id: 'advergame', 
    name: 'Advergame', 
    description: 'Juego publicitario de marca', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Gamepad' 
  },
  { 
    id: 'transmedia-narrative', 
    name: 'Narrativa transmedia', 
    description: 'Historia expandida en múltiples plataformas', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Network' 
  },
  { 
    id: 'hybrid-experience', 
    name: 'Experiencia híbrida físico-digital', 
    description: 'Vivencia que integra mundo real y digital', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Blend' 
  },

  // 📦 Soportes físicos e impresos (base)
  { 
    id: 'packaging', 
    name: 'Packaging', 
    description: 'Diseño de envase y empaque', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Package' 
  },
  { 
    id: 'merch', 
    name: 'Merch', 
    description: 'Merchandising y productos de marca', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'ShoppingBag' 
  },
  { 
    id: 'apparel', 
    name: 'Indumentaria', 
    description: 'Diseño de ropa y textil', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Shirt' 
  },
  { 
    id: 'editorial-print', 
    name: 'Editorial / folletería', 
    description: 'Material impreso editorial', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Book' 
  },
  { 
    id: 'pop', 
    name: 'POP', 
    description: 'Material punto de venta', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Store' 
  },

  // 🧪 Tecnologías experimentales
  { 
    id: 'ar-vr', 
    name: 'AR / VR', 
    description: 'Experiencias de realidad aumentada o virtual', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Glasses' 
  },
  { 
    id: 'immersive-experiences', 
    name: 'Experiencias inmersivas', 
    description: 'Vivencias envolventes multisensoriales', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Eye' 
  },
  { 
    id: 'realtime-unity', 
    name: 'Realtime (Unity u otros)', 
    description: 'Experiencia en tiempo real con motores 3D', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Zap' 
  },
  { 
    id: 'artificial-intelligence', 
    name: 'Inteligencia artificial', 
    description: 'Sistemas y aplicaciones basadas en IA', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Brain' 
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    description: 'Aplicaciones descentralizadas y contratos inteligentes', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Blocks' 
  },
  { 
    id: 'nfts-collectibles', 
    name: 'NFTs / coleccionables digitales', 
    description: 'Tokens no fungibles y colecciones digitales', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Hexagon' 
  },

  // Personalizado
  { 
    id: 'custom-component', 
    name: 'Componente personalizado', 
    description: 'Define tu propio componente para proyectos no contemplados', 
    basePoints: 0, 
    categoryId: 'custom', 
    icon: 'Wand2' 
  }
];
