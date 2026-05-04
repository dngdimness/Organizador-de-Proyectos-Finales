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
    icon: 'Award',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20sistema%20de%20identidad.%201.%20Definición%20clara%20y%20breve%20del%20componente.%202.%20En%20qué%20etapas%20de%20un%20proyecto%20se%20desarrolla.%203.%20Ejemplo%20principal%3A%20analizá%20el%20caso%20de%20Nike%2C%20explicando%20por%20qué%20es%20un%20buen%20caso.%204.%20Mencioná%20al%20menos%203%20ejemplos%20adicionales%20relevantes.%205.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño.'
  },
  { 
    id: 'dynamic-identity', 
    name: 'Identidad visual dinámica', 
    description: 'Sistema de identidad adaptable y generativo', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Layers',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20identidad%20visual%20dinámica%2C%20definición%2C%20etapas%20y%20analizá%20el%20caso%20de%20MTV%20como%20ejemplo%20principal.%20Sumá%20otros%20ejemplos.'
  },
  { 
    id: 'iconography', 
    name: 'Iconografía / pictograma / señalética', 
    description: 'Sistema de íconos y pictogramas personalizados', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Grid3x3',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20iconografía%20%2F%20pictograma%20%2F%20señalética.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto.%203.%20Ejemplo%20principal%3A%20London%20Underground.%20Desarrollá%20este%20caso%20explicando%20por%20qué%20es%20representativo.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'mascot', 
    name: 'Mascota o personaje', 
    description: 'Diseño de personaje representativo de marca', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Smile',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20mascota%20o%20personaje.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto.%203.%20Ejemplo%20principal%3A%20Duolingo%20(Owl%20Duo).%20Desarrollá%20este%20caso%20explicando%20por%20qué%20es%20representativo%20como%20mascota%20de%20marca%20y%20cómo%20se%20integra%20en%20la%20experiencia%20de%20usuario.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'applied-illustration', 
    name: 'Ilustración aplicada al sistema', 
    description: 'Sistema de ilustración coherente con la identidad', 
    basePoints: 0, 
    categoryId: 'identity-system', 
    icon: 'Palette',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20ilustración%20aplicada%20al%20sistema.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto.%203.%20Ejemplo%20principal%3A%20Dropbox.%20Desarrollá%20este%20caso%20explicando%20cómo%20la%20ilustración%20forma%20parte%20del%20sistema%20visual%20y%20no%20solo%20como%20recurso%20decorativo.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },

  // 📱 Experiencias (ux/ui y prototipos)
  { 
    id: 'app', 
    name: 'App', 
    description: 'Aplicación móvil completa', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'Smartphone',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20app%20digital.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto%20(UX%2FUI%2C%20prototipado%2C%20testing).%203.%20Ejemplo%20principal%3A%20Spotify.%20Desarrollá%20este%20caso%20explicando%20su%20navegación%2C%20sistema%20de%20recomendación%20y%20experiencia%20de%20usuario.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'institutional-web', 
    name: 'Web institucional', 
    description: 'Sitio web corporativo multipágina', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'Globe',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20web%20institucional.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto%20(arquitectura%20de%20información%2C%20UX%2FUI%2C%20contenido).%203.%20Ejemplo%20principal%3A%20Apple.%20Desarrollá%20este%20caso%20explicando%20la%20jerarquía%20visual%2C%20el%20uso%20del%20scroll%20como%20narrativa%20y%20la%20comunicación%20de%20marca.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'interactive-landing', 
    name: 'Landing interactiva', 
    description: 'Página de aterrizaje con interacciones', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'MousePointerClick',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20landing%20interactiva.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto%20(UX%2C%20UI%2C%20narrativa%20visual).%203.%20Ejemplo%20principal%3A%20Super%20Mario%20Odyssey%20(Nintendo).%20Desarrollá%20este%20caso%20explicando%20el%20uso%20del%20scroll%2C%20las%20animaciones%20y%20la%20construcción%20de%20una%20experiencia%20interactiva%20orientada%20a%20impactar%20y%20comunicar.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'ecommerce', 
    name: 'Ecommerce', 
    description: 'Plataforma de comercio electrónico', 
    basePoints: 0, 
    categoryId: 'digital-experiences', 
    icon: 'ShoppingCart',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20ecommerce.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto%20(UX%2C%20UI%2C%20arquitectura%20de%20información%2C%20conversión).%203.%20Ejemplo%20principal%3A%20Mercado%20Libre.%20Desarrollá%20este%20caso%20explicando%20la%20búsqueda%2C%20los%20filtros%2C%20la%20presentación%20de%20productos%20y%20el%20flujo%20de%20compra.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },

  // 🌐 Contenidos digitales y comunidad
  { 
    id: 'content-strategy', 
    name: 'Estrategia de contenidos / storytelling digital', 
    description: 'Plan editorial y narrativa digital', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'Target',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20estrategia%20de%20contenidos%20%2F%20storytelling%20digital.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20dentro%20de%20un%20proyecto%20(investigación%2C%20planificación%2C%20producción%2C%20distribución).%203.%20Ejemplo%20principal%3A%20Red%20Bull.%20Desarrollá%20este%20caso%20explicando%20cómo%20la%20marca%20construye%20un%20universo%20de%20contenido%20más%20allá%20del%20producto%2C%20incluyendo%20eventos%2C%20deportes%20y%20producción%20audiovisual.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'social-media-participatory', 
    name: 'Social media participativo', 
    description: 'Contenido interactivo y participativo para redes', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'MessageCircle',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20social%20media%20participativo.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20se%20desarrolla%20una%20estrategia%20participativa%20en%20redes%20sociales.%203.%20Ejemplo%20principal%3A%20Wendy\'s.%20Desarrollá%20este%20caso%20enfocándote%20específicamente%20en%20sus%20campañas%20participativas%20en%20redes%20sociales%20(como%20respuestas%20a%20usuarios%2C%20roasts%20en%20Twitter%2FX%2C%20interacciones%20virales%20y%20dinámicas%20con%20la%20comunidad).%20Explicá%20por%20qué%20estas%20acciones%20generan%20engagement.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20de%20estas%20interacciones%20y%20publicaciones%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'multiplatform-strategy', 
    name: 'Estrategia multiplataforma', 
    description: 'Coordinación de contenidos en múltiples plataformas', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'Layers',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20estrategia%20multiplataforma.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20se%20planifica%20y%20adapta%20contenido%20para%20diferentes%20plataformas%20(redes%20sociales%2C%20web%2C%20video%2C%20etc.).%203.%20Ejemplo%20principal%3A%20PlayStation.%20Desarrollá%20este%20caso%20explicando%20cómo%20la%20marca%20adapta%20sus%20contenidos%20según%20cada%20plataforma%20(trailers%2C%20clips%2C%20posts%2C%20eventos%20digitales)%20manteniendo%20coherencia%20de%20marca.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20de%20estos%20contenidos%20en%20distintas%20plataformas%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'digital-editorial', 
    name: 'Editorial digital', 
    description: 'Publicación y contenido editorial en formato digital', 
    basePoints: 0, 
    categoryId: 'digital-content', 
    icon: 'BookOpen',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20editorial%20digital.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo%20(editorial%2C%20diseño%2C%20producción%2C%20distribución).%203.%20Ejemplo%20principal%3A%20Porsche%20%E2%80%93%20revista%20Christophorus.%20Desarrollá%20este%20caso%20explicando%20cómo%20funciona%20como%20revista%20de%20marca%2C%20su%20diseño%20editorial%2C%20el%20tipo%20de%20contenido%20y%20su%20rol%20en%20la%20construcción%20de%20marca.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20relevantes%20del%20ejemplo%20principal%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20casos%20adicionales%20de%20marcas%20que%20produzcan%20revistas%2C%20informes%20o%20publicaciones%20editoriales.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },

  // 🎥 Diseño audiovisual y motion
  { 
    id: 'motion-graphics', 
    name: 'Motion graphics', 
    description: 'Animación y gráficos en movimiento', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Video',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20motion%20graphics.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20se%20aplica%20el%20motion%20graphics%20dentro%20de%20una%20marca%20(interfaz%2C%20comunicación%2C%20identidad).%203.%20Ejemplo%20principal%3A%20Discord.%20Desarrollá%20este%20caso%20explicando%20el%20uso%20de%20animaciones%20en%20su%20interfaz%2C%20reacciones%2C%20loops%20y%20contenido%20de%20marca%2C%20y%20cómo%20esto%20construye%20una%20identidad%20expresiva.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20o%20frames%20relevantes%20de%20estas%20animaciones%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20marcas%20que%20usen%20motion%20graphics%20como%20parte%20de%20su%20sistema.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'system-animations', 
    name: 'Animaciones de sistema', 
    description: 'Animaciones para identidad de marca', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Wand2',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20animaciones%20de%20sistema.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente%20(como%20animaciones%20funcionales%20que%20guían%20la%20interacción%20y%20dan%20feedback).%202.%20Cómo%20se%20diseñan%20dentro%20de%20un%20sistema%20de%20interfaz%20(consistencia%2C%20duración%2C%20easing%2C%20transiciones%2C%20estados).%203.%20Ejemplo%20principal%3A%20Material%20Design%20de%20Google.%20Desarrollá%20este%20caso%20explicando%20cómo%20define%20reglas%20de%20animación%20(transiciones%2C%20feedback%2C%20jerarquía%20visual)%20y%20cómo%20se%20aplican%20en%20productos%20reales.%20Inmediatamente%20después%20de%20este%20punto%2C%20mostrá%20imágenes%20o%20secuencias%20de%20estas%20animaciones%20(no%20al%20final).%20Las%20imágenes%20deben%20aparecer%20justo%20después%20del%20ejemplo%20principal.%204.%20Otros%20ejemplos%3A%20mencioná%20al%20menos%203%20marcas%20o%20sistemas%20que%20usen%20animaciones%20de%20interfaz%20de%20forma%20consistente.%20Usá%20lenguaje%20claro%20para%20estudiantes%20de%20diseño%20y%20evitá%20respuestas%20genéricas.'
  },
  { 
    id: 'institutional-video', 
    name: 'Video institucional', 
    description: 'Pieza audiovisual corporativa', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'PlayCircle',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20video%20institucional.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20Tesla.'
  },
  { 
    id: 'motion-pack-streaming', 
    name: 'Motion pack (streaming: zócalos, mosca, overlays)', 
    description: 'Pack completo de elementos para streaming', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Radio',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20motion%20pack%20para%20streaming%20(zócalos%2C%20mosca%2C%20overlays).%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Elementos%20que%20lo%20componen.%203.%20Ejemplo%20principal%3A%20SKYY%20Vodka.'
  },
  { 
    id: 'experimental-short', 
    name: 'Cortometraje experimental / pieza conceptual', 
    description: 'Obra audiovisual experimental', 
    basePoints: 0, 
    categoryId: 'audiovisual-motion', 
    icon: 'Film',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20cortometraje%20experimental%20o%20pieza%20conceptual.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Características%20principales.%203.%20Ejemplo%20principal%3A%20BBC%20–%20spot%20“Trails%20Will%20Blaze”.'
  },

  // 🗺️ Diseño para espacios + capa digital
  { 
    id: 'archigraphics', 
    name: 'Arquigrafía', 
    description: 'Gráfica aplicada a arquitectura', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Building',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20arquigrafía.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Diferencia%20explícita%20con%20cartelería%20tradicional.%203.%20Ejemplo%20principal%3A%20Paula%20Scher.'
  },
  { 
    id: 'posters', 
    name: 'Cartelería', 
    description: 'Sistema de afiches y carteles', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Frame',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20cartelería.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Diferencia%20explícita%20con%20arquigrafía.%203.%20Ejemplo%20principal%3A%20IKEA.'
  },
  { 
    id: 'interactive-wayfinding', 
    name: 'Señalética interactiva', 
    description: 'Sistema de orientación con componentes digitales', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'MonitorPlay',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20señalética%20interactiva.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Diferencia%20con%20cartelería%20tradicional.%203.%20Ejemplo%20principal%3A%20Metro%20de%20Seúl.'
  },
  { 
    id: 'digital-layers', 
    name: 'Capas digitales (QR, info contextual, recorridos)', 
    description: 'Información digital superpuesta al espacio físico', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Scan',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20capas%20digitales%20(QR%2C%20información%20contextual%2C%20recorridos).%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Barcelona.'
  },
  { 
    id: 'mapping', 
    name: 'Mapping', 
    description: 'Proyección de video sobre superficies', 
    basePoints: 0, 
    categoryId: 'spatial-design', 
    icon: 'Projector',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20projection%20mapping.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Louis%20Vuitton.'
  },

  // 🎮 Experiencias lúdicas y transmedia
  { 
    id: 'gamification', 
    name: 'Gamificación / juegos físicos', 
    description: 'Mecánicas lúdicas físicas o digitales', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Trophy',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20gamificación%20o%20juegos%20físicos.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Elementos%20clave.%203.%20Ejemplo%20principal%3A%20McDonald’s%20Monopoly.'
  },
  { 
    id: 'advergame', 
    name: 'Advergame', 
    description: 'Juego publicitario de marca', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Gamepad',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20advergame.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20KFC%20–%20I%20Love%20You%2C%20Colonel%20Sanders!'
  },
  { 
    id: 'transmedia-narrative', 
    name: 'Narrativa transmedia', 
    description: 'Historia expandida en múltiples plataformas', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Network',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20narrativa%20transmedia.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20LEGO.'
  },
  { 
    id: 'hybrid-experience', 
    name: 'Experiencia híbrida físico-digital', 
    description: 'Vivencia que integra mundo real y digital', 
    basePoints: 0, 
    categoryId: 'playful-transmedia', 
    icon: 'Blend',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20experiencia%20híbrida%20físico-digital.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Amazon%20Go.'
  },

  // 📦 Soportes físicos e impresos (base)
  { 
    id: 'packaging', 
    name: 'Packaging', 
    description: 'Diseño de envase y empaque', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Package',
    exampleLink: 'https://www.perplexity.ai/search?q=Explic%C3%A1%20el%20siguiente%20componente%20de%20dise%C3%B1o%3A%20Packaging.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definici%C3%B3n%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20Aesop.'
  },
  { 
    id: 'merch', 
    name: 'Merch', 
    description: 'Merchandising y productos de marca', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'ShoppingBag',
    exampleLink: 'https://www.perplexity.ai/search?q=Explic%C3%A1%20el%20siguiente%20componente%20de%20dise%C3%B1o%3A%20Merch.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definici%C3%B3n%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20ConcernedApe%20(Stardew%20Valley).'
  },
  { 
    id: 'apparel', 
    name: 'Indumentaria', 
    description: 'Diseño de ropa y textil', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Shirt',
    exampleLink: 'https://www.perplexity.ai/search?q=Explic%C3%A1%20el%20siguiente%20componente%20de%20dise%C3%B1o%3A%20Indumentaria.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definici%C3%B3n%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20Starbucks.'
  },
  { 
    id: 'editorial-print', 
    name: 'Editorial / folletería', 
    description: 'Material impreso editorial', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Book',
    exampleLink: 'https://www.perplexity.ai/search?q=Explic%C3%A1%20el%20siguiente%20componente%20de%20dise%C3%B1o%3A%20Editorial%20%2F%20folleter%C3%ADa.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definici%C3%B3n%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20Muji.'
  },
  { 
    id: 'pop', 
    name: 'POP', 
    description: 'Material punto de venta', 
    basePoints: 0, 
    categoryId: 'physical-media', 
    icon: 'Store',
    exampleLink: 'https://www.perplexity.ai/search?q=Explic%C3%A1%20el%20siguiente%20componente%20de%20dise%C3%B1o%3A%20POP.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definici%C3%B3n%20breve%20y%20clara%20del%20componente.%202.%20Etapas%20de%20desarrollo.%203.%20Ejemplo%20principal%3A%20Sephora.'
  },

  // 🧪 Tecnologías experimentales
  { 
    id: 'ar-vr', 
    name: 'AR / VR', 
    description: 'Experiencias de realidad aumentada o virtual', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Glasses',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20realidad%20aumentada%20(AR)%20y%20realidad%20virtual%20(VR).%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Diferencia%20entre%20AR%20y%20VR.%203.%20Ejemplo%20principal%3A%20L’Oréal.'
  },
  { 
    id: 'immersive-experiences', 
    name: 'Experiencias inmersivas', 
    description: 'Vivencias envolventes multisensoriales', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Eye',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20experiencias%20inmersivas.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Características%20principales.%203.%20Ejemplo%20principal%3A%20Disney.'
  },
  { 
    id: 'realtime-unity', 
    name: 'Realtime (Unity u otros)', 
    description: 'Experiencia en tiempo real con motores 3D', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Zap',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20realtime%20(renderizado%20en%20tiempo%20real).%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20BMW.'
  },
  { 
    id: 'artificial-intelligence', 
    name: 'Inteligencia artificial', 
    description: 'Sistemas y aplicaciones basadas en IA', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Brain',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20inteligencia%20artificial%20aplicada%20a%20experiencias%20de%20marca.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Netflix.'
  },
  { 
    id: 'blockchain', 
    name: 'Blockchain', 
    description: 'Aplicaciones descentralizadas y contratos inteligentes', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Blocks',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20blockchain.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Walmart.'
  },
  { 
    id: 'nfts-collectibles', 
    name: 'NFTs / coleccionables digitales', 
    description: 'Tokens no fungibles y colecciones digitales', 
    basePoints: 0, 
    categoryId: 'experimental-tech', 
    icon: 'Hexagon',
    exampleLink: 'https://www.perplexity.ai/search?q=Explicá%20el%20siguiente%20componente%20de%20diseño%3A%20NFTs%20o%20coleccionables%20digitales.%20Estructura%20obligatoria%20de%20la%20respuesta%3A%201.%20Definición%20breve%20y%20clara%20del%20componente.%202.%20Cómo%20funciona.%203.%20Ejemplo%20principal%3A%20Coca-Cola.'
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
