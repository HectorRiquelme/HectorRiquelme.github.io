import { useState } from 'react'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaDatabase, FaLinkedin, FaWordpress, FaDocker, FaPhp } from 'react-icons/fa'
import { BiBarcode } from 'react-icons/bi'
import {
  SiAndroid,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGithub,
  SiInstagram,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiShopify,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
} from 'react-icons/si'

const defaultData = {
  brand: 'Hector Riquelme',
  name: 'Hector',
  lastName: 'Riquelme',
  role: 'Ingeniero Civil en Informatica',
  summary:
    'Ingeniero Civil en Informatica egresado de la Universidad del Bio-Bio, con Diplomado en Ciberseguridad en la Universidad de Chile. Cuento con experiencia senior en desarrollo movil Android nativo y apps multiplataforma con Flutter y .NET MAUI. Ademas, tengo conocimiento avanzado en administracion de bases de datos Oracle y PostgreSQL, desarrollo web con PERN Stack y Stack .NET, automatizacion de bots e implementacion de soluciones con inteligencia artificial.',
  location: 'Chile - Remoto y presencial',
  whatsapp: '56920398043',
  whatsappMessage: 'Hola Hector, vi tu perfil profesional y me gustaria conversar sobre un proyecto.',
  instagramHandle: 'hector__riquelme',
  linkedin: 'https://www.linkedin.com/in/hector-riquelme',
  github: 'https://github.com/HectorRiquelme',
  email: 'contacto@hectorriquelme.dev',
  heroImage: '/hector-riquelme.jpg',
  education1Title: 'Ingeniero Civil en Informatica',
  education1Org: 'Universidad del Bio-Bio',
  education2Title: 'Diplomado en Ciberseguridad',
  education2Org: 'Universidad de Chile',
  contactTitle: 'Conversemos sobre tu proximo proyecto',
  contactText:
    'Si necesitas apoyo en desarrollo movil, web, bases de datos, automatizacion o IA, escribeme directo por WhatsApp.',
}

const stackItems = [
  { icon: SiAndroid, title: 'Android Nativo', level: 'Senior' },
  { icon: SiFlutter, title: 'Flutter', level: 'Senior' },
  { icon: SiDotnet, title: '.NET MAUI', level: 'Senior' },
  { icon: FaDatabase, title: 'Oracle DBA', level: 'Avanzado' },
  { icon: SiPostgresql, title: 'PostgreSQL DBA', level: 'Avanzado' },
  { icon: SiNodedotjs, title: 'Node.js', level: 'PERN Stack' },
  { icon: SiExpress, title: 'Express', level: 'PERN Stack' },
  { icon: SiReact, title: 'React', level: 'PERN Stack' },
  { icon: AiOutlineRobot, title: 'Bots', level: 'Automatizacion' },
  { icon: SiOpenai, title: 'IA aplicada', level: 'Avanzado' },
]

const projectItems = [
  {
    title: 'Mueblería Herrera',
    category: 'Landing Page',
    description:
      'Sitio web publicado para mueblería en Parral, Región del Maule. Diseño limpio, galería de productos y contacto directo por WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    image: '/projects/muebleria-herrera.jpg',
    link: 'http://34.46.122.42/',
  },
  {
    title: 'Sabor & Fuego',
    category: 'Restaurante — Fade Carousel',
    description:
      'Landing de restaurante con carrusel de platos destacados. Transición fade, auto-play con pausa en hover, navegación por teclado y soporte táctil.',
    tags: ['HTML', 'CSS', 'Vanilla JS', 'Touch'],
    image: '/projects/restaurant.jpg',
    link: '/demos/restaurant/index.html',
  },
  {
    title: 'NovaStudio',
    category: 'Agencia — Multi-slide Carousel',
    description:
      'Landing de agencia con carrusel de testimonios multi-slide. Breakpoints responsive (1/2/3 tarjetas), swipe táctil y auto-play con reinicio al interactuar.',
    tags: ['HTML', 'CSS Grid', 'Transform', 'Responsive'],
    image: '/projects/services.jpg',
    link: '/demos/services/index.html',
  },
  {
    title: 'Portafolio 3D',
    category: 'Coverflow Carousel',
    description:
      'Portafolio con carrusel tipo coverflow 3D. CSS perspective, rotateY y translateZ, drag con mouse, teclado y navegación por click en slides laterales.',
    tags: ['CSS 3D', 'Perspective', 'Drag', 'Keyboard'],
    image: '/projects/portfolio.jpg',
    link: '/demos/portfolio/index.html',
  },
]

const integracionesProjects = [
  {
    title: 'Facturacion Electronica SII',
    subtitle: 'DTE + Firma Digital X.509',
    description:
      'Sistema de facturacion chilena: XML DTE, firma digital, timbre electronico TED y PDFs con codigo PDF417.',
    tags: ['Node.js', 'Express', 'SQLite'],
    icons: [SiNodedotjs, SiExpress, BiBarcode],
    gradient: 'gradient-cyan',
    github: 'https://github.com/HectorRiquelme/pagos-chile-facturacion-sii',
  },
  {
    title: 'Transbank WebPay Plus',
    subtitle: 'Pasarela de Pagos',
    description:
      'Flujo completo WebPay Plus: catalogo, carrito, formulario Transbank y comprobante con codigo de autorizacion.',
    tags: ['Node.js', 'React', 'SQLite'],
    icons: [SiNodedotjs, SiReact, SiTailwindcss],
    gradient: 'gradient-blue',
    github: 'https://github.com/HectorRiquelme/pagos-chile-transbank-webpay',
  },
  {
    title: 'Pagos Khipu',
    subtitle: 'Transferencia Bancaria',
    description:
      'Pagos por transferencia con 8 bancos chilenos, webhooks de confirmacion y expiracion automatica a 24h.',
    tags: ['Python', 'FastAPI', 'React'],
    icons: [SiPython, SiFastapi, SiReact],
    gradient: 'gradient-emerald',
    github: 'https://github.com/HectorRiquelme/pagos-chile-khipu',
  },
  {
    title: 'HubSpot + WooCommerce',
    subtitle: 'CRM Sync via Webhooks',
    description:
      'Microservicio que sincroniza ordenes WooCommerce con HubSpot CRM. Pipeline kanban con metricas en tiempo real.',
    tags: ['Node.js', 'Express', 'SQLite'],
    icons: [SiNodedotjs, SiWoocommerce, SiSqlite],
    gradient: 'gradient-orange',
    github: 'https://github.com/HectorRiquelme/crm-hubspot-woocommerce-sync',
  },
  {
    title: 'GoHighLevel Centro Salud',
    subtitle: 'Automatizacion CRM Salud',
    description:
      'Pipeline de pacientes con WhatsApp automatizado, recordatorios 24h/1h y agenda por doctor para centro medico.',
    tags: ['Node.js', 'React', 'SQLite'],
    icons: [SiNodedotjs, SiReact, SiSqlite],
    gradient: 'gradient-green',
    github: 'https://github.com/HectorRiquelme/crm-gohighlevel-centro-salud',
  },
  {
    title: 'Pipedrive + Google Sheets',
    subtitle: 'Sync Bidireccional',
    description:
      'Sync cada 5 minutos entre CRM y Google Sheets con deteccion de conflictos y log de historial completo.',
    tags: ['Python', 'FastAPI'],
    icons: [SiPython, SiFastapi, FaDatabase],
    gradient: 'gradient-sky',
    github: 'https://github.com/HectorRiquelme/crm-pipedrive-sheets-sync',
  },
]

const ecommerceProjects = [
  {
    title: 'Child Theme WooCommerce',
    subtitle: 'Tienda Deportiva Chile',
    description:
      'Tema hijo WooCommerce con checkout personalizado, validacion RUT y selector de 346 comunas.',
    tags: ['PHP', 'WooCommerce', 'JS'],
    icons: [FaPhp, SiWoocommerce, FaWordpress],
    gradient: 'gradient-red',
    github: 'https://github.com/HectorRiquelme/ecommerce-woocommerce-theme-deportiva',
  },
  {
    title: 'Tema Shopify Minimalista',
    subtitle: 'Dawn + Custom Sections',
    description:
      'Tema Shopify para ropa masculina: hero con video, mega menu, parallax y cumplimiento legal chileno.',
    tags: ['Liquid', 'CSS', 'JS'],
    icons: [SiShopify, SiTailwindcss],
    gradient: 'gradient-gray',
    github: 'https://github.com/HectorRiquelme/ecommerce-shopify-tema-minimalista',
  },
  {
    title: 'Plugin Despacho Comunas',
    subtitle: '346 Comunas de Chile',
    description:
      'Plugin WooCommerce con zonas de despacho configurables, costos diferenciados y retiro en tienda.',
    tags: ['PHP', 'WooCommerce', 'CSV'],
    icons: [FaPhp, SiWoocommerce],
    gradient: 'gradient-purple',
    github: 'https://github.com/HectorRiquelme/ecommerce-woocommerce-plugin-despacho',
  },
]

const iaProjects = [
  {
    title: 'Bot de Cobranza con Voz',
    subtitle: 'TTS + Scripts por Mora',
    description:
      'Cobranza automatizada con 4 tonos segun nivel de mora y generacion de audio WAV personalizado por deudor.',
    tags: ['Python', 'FastAPI', 'React'],
    icons: [SiPython, AiOutlineRobot, SiReact],
    gradient: 'gradient-rose',
    github: 'https://github.com/HectorRiquelme/ia-bot-cobranza-voz',
  },
  {
    title: 'Chatbot WhatsApp PyME',
    subtitle: 'LLM + Escalamiento Humano',
    description:
      'Chatbot con UI tipo WhatsApp, LLM configurable con modo mock (18 reglas) y escalamiento automatico a agente.',
    tags: ['Node.js', 'React', 'LLM'],
    icons: [SiNodedotjs, SiOpenai, SiReact],
    gradient: 'gradient-green-dark',
    github: 'https://github.com/HectorRiquelme/ia-chatbot-whatsapp-pyme',
  },
  {
    title: 'Cotizaciones Construccion',
    subtitle: 'IA + PDF Generator',
    description:
      'Asistente de cotizaciones con calculo de materiales, mano de obra, IVA 19% y PDF descargable.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    icons: [SiNextdotjs, SiTypescript, SiSupabase],
    gradient: 'gradient-amber',
    github: 'https://github.com/HectorRiquelme/ia-cotizaciones-construccion',
  },
]

const wordpressProjects = [
  {
    title: 'Diagnostico Carrusel',
    subtitle: 'DevTools + Docker',
    description:
      'Caso de estudio con 3 bugs intencionales: doble jQuery, CSS roto y script bloqueante. Script auto-fix.',
    tags: ['PHP', 'Docker', 'jQuery'],
    icons: [FaWordpress, FaDocker, FaPhp],
    gradient: 'gradient-slate',
    github: 'https://github.com/HectorRiquelme/wordpress-diagnostico-carrusel',
  },
  {
    title: 'Optimizacion WooCommerce',
    subtitle: 'Nginx + Redis + 500 Productos',
    description:
      'FastCGI cache, Redis object cache, lazy loading y benchmark con Apache Bench para tienda con 500 productos.',
    tags: ['Nginx', 'Redis', 'Docker'],
    icons: [SiNginx, SiRedis, FaDocker],
    gradient: 'gradient-yellow',
    github: 'https://github.com/HectorRiquelme/wordpress-optimizacion-rendimiento',
  },
  {
    title: 'Toolkit Migracion',
    subtitle: 'Backup + SSL + Verify',
    description:
      'Scripts completos de migracion: backup con checksum, search-replace serializacion-safe, SSL y verificacion.',
    tags: ['Bash', 'WP-CLI', 'MySQL'],
    icons: [FaWordpress, FaDocker, SiMysql],
    gradient: 'gradient-indigo',
    github: 'https://github.com/HectorRiquelme/wordpress-toolkit-migracion',
  },
]

// Proyectos moviles: placeholder para llenar con apps reales (NDAs suelen limitar detalles)
const mobileProjects = [
  {
    title: 'App Android Nativa',
    subtitle: 'Proyecto Enterprise',
    description:
      'Aplicacion Android nativa desarrollada en Kotlin con arquitectura MVVM, Room Database, Retrofit y Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room'],
    icons: [SiAndroid, SiKotlin, FaDatabase],
    gradient: 'gradient-green',
    status: 'Proyecto privado',
  },
  {
    title: 'App Multiplataforma Flutter',
    subtitle: 'iOS + Android',
    description:
      'App multiplataforma con Flutter para iOS y Android: BLoC pattern, Firebase, notificaciones push y pagos integrados.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    icons: [SiFlutter, FaDatabase],
    gradient: 'gradient-sky',
    status: 'Proyecto privado',
  },
  {
    title: 'App .NET MAUI',
    subtitle: 'Multi-plataforma Empresarial',
    description:
      'Aplicacion empresarial con .NET MAUI: arquitectura limpia, MVVM Community Toolkit, SQLite local y API REST.',
    tags: ['.NET MAUI', 'C#', 'SQLite'],
    icons: [SiDotnet, SiSqlite],
    gradient: 'gradient-purple',
    status: 'Proyecto privado',
  },
]

const profileHighlights = [
  {
    title: 'Desarrollo movil',
    text: 'Implementacion de aplicaciones Android nativas y multiplataforma con enfoque en estabilidad, rendimiento y escalabilidad.',
  },
  {
    title: 'Backend y bases de datos',
    text: 'Arquitectura web con PERN y .NET, junto a administracion avanzada de Oracle y PostgreSQL para entornos de alta demanda.',
  },
  {
    title: 'Automatizacion e IA',
    text: 'Diseno de bots, automatizacion de flujos y uso estrategico de inteligencia artificial para optimizar procesos de negocio.',
  },
]

function sanitizePhone(value) {
  return value.replace(/\D/g, '')
}

function buildInstagramLink(handle) {
  const username = handle.trim().replace(/^@/, '')
  if (!username) return 'https://instagram.com'
  return `https://instagram.com/${username}`
}

export default function App() {
  const data = defaultData
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  const phone = sanitizePhone(data.whatsapp)
  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(data.whatsappMessage)}`
  const instagramHref = buildInstagramLink(data.instagramHandle)

  const photoSrc = (data.heroImage || '').trim()
  const hasPhoto = Boolean(photoSrc) && !imageLoadFailed
  const initials = `${data.name?.[0] || 'H'}${data.lastName?.[0] || 'R'}`.toUpperCase()

  return (
    <div className="site-shell">
      <nav className="top-nav">
        <div className="brand-row">
          <span className="brand-dot" />
          <span>{data.brand}</span>
        </div>
        <div className="nav-links">
          <a href="#perfil">Perfil</a>
          <a href="#tecnologias">Stack</a>
          <a href="#landings">Landings</a>
          <a href="#movil">Movil</a>
          <a href="#integraciones">Integraciones</a>
          <a href="#ecommerce">E-commerce</a>
          <a href="#ia">IA</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="nav-actions">
          <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </nav>

      <header id="perfil" className="hero-block">
        <div className="hero-copy">
          <p className="hero-kicker">Perfil profesional</p>
          <h1>
            {data.name} <span>{data.lastName}</span>
          </h1>
          <h2>{data.role}</h2>
          <p>{data.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
            <a className="btn btn-outline" href={`mailto:${data.email}`}>
              Enviar email
            </a>
          </div>

          <div className="social-links">
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer">
              <SiGithub /> GitHub
            </a>
            <a href={instagramHref} target="_blank" rel="noreferrer">
              <SiInstagram /> @{data.instagramHandle}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <div className="portrait-glow" />
            <div className="portrait-cutout">
              {hasPhoto ? (
                <img
                  src={photoSrc}
                  alt={`${data.name} ${data.lastName}`}
                  onError={() => {
                    setImageLoadFailed(true)
                  }}
                />
              ) : (
                <div className="portrait-placeholder">
                  <span>{initials}</span>
                </div>
              )}
            </div>
          </div>
          <div className="availability-card">
            <span>Ubicacion</span>
            <strong>{data.location}</strong>
          </div>
        </div>
      </header>

      <section className="section credentials-grid">
        <article className="info-card">
          <p className="card-kicker">Formacion</p>
          <h3>{data.education1Title}</h3>
          <p>{data.education1Org}</p>
        </article>
        <article className="info-card">
          <p className="card-kicker">Especializacion</p>
          <h3>{data.education2Title}</h3>
          <p>{data.education2Org}</p>
        </article>
      </section>

      <section id="tecnologias" className="section tech-section">
        <div className="section-head">
          <p className="card-kicker">Tecnologias clave</p>
          <h2>Stack tecnico y experiencia profesional</h2>
        </div>
        <div className="stack-grid">
          {stackItems.map((item) => {
            const Icon = item.icon
            return (
              <article className="stack-card" key={item.title}>
                <div className="stack-icon">
                  <Icon />
                </div>
                <h4>{item.title}</h4>
                <p>{item.level}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="especialidad" className="section highlight-section">
        <div className="section-head">
          <p className="card-kicker">Servicios</p>
          <h2>Aporte tecnico para proyectos exigentes</h2>
        </div>
        <div className="highlight-grid">
          {profileHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="landings" className="section projects-section">
        <div className="section-head">
          <p className="card-kicker">01 · Landings</p>
          <h2>Sitios publicados y demos en vivo</h2>
          <p className="section-sub">Landing pages con carruseles, animaciones y tecnicas frontend avanzadas.</p>
        </div>
        <div className="projects-grid">
          {projectItems.map((item) => (
            <a
              className="project-card"
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-thumb">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="project-body">
                <p className="project-cat">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="project-desc">{item.description}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-link">Ver en vivo →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="movil" className="section dev-section">
        <div className="section-head">
          <p className="card-kicker">02 · Movil</p>
          <h2>Experiencia en Desarrollo Movil</h2>
          <p className="section-sub">Apps nativas y multiplataforma desarrolladas para clientes bajo confidencialidad.</p>
        </div>
        <div className="dev-grid">
          {mobileProjects.map((item) => (
            <article className="dev-card dev-card-private" key={item.title}>
              <div className={`dev-thumb ${item.gradient}`}>
                <div className="dev-thumb-icons">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <span className="dev-thumb-label">{item.subtitle}</span>
              </div>
              <div className="dev-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dev-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="dev-status">{item.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="integraciones" className="section dev-section">
        <div className="section-head">
          <p className="card-kicker">03 · Integraciones</p>
          <h2>Integraciones Chile & CRMs</h2>
          <p className="section-sub">Pasarelas de pago, facturacion electronica y sincronizacion con CRMs.</p>
        </div>
        <div className="dev-grid">
          {integracionesProjects.map((item) => (
            <a className="dev-card" key={item.title} href={item.github} target="_blank" rel="noreferrer">
              <div className={`dev-thumb ${item.gradient}`}>
                <div className="dev-thumb-icons">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <span className="dev-thumb-label">{item.subtitle}</span>
              </div>
              <div className="dev-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dev-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="dev-link">
                  <SiGithub /> Ver codigo
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="ecommerce" className="section dev-section">
        <div className="section-head">
          <p className="card-kicker">04 · E-commerce</p>
          <h2>Tiendas Online & Temas Personalizados</h2>
          <p className="section-sub">Temas para Shopify y WooCommerce adaptados al mercado chileno.</p>
        </div>
        <div className="dev-grid">
          {ecommerceProjects.map((item) => (
            <a className="dev-card" key={item.title} href={item.github} target="_blank" rel="noreferrer">
              <div className={`dev-thumb ${item.gradient}`}>
                <div className="dev-thumb-icons">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <span className="dev-thumb-label">{item.subtitle}</span>
              </div>
              <div className="dev-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dev-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="dev-link">
                  <SiGithub /> Ver codigo
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="ia" className="section dev-section">
        <div className="section-head">
          <p className="card-kicker">05 · IA & Bots</p>
          <h2>Automatizacion con Inteligencia Artificial</h2>
          <p className="section-sub">Bots, chatbots y asistentes con LLMs, voz sintetica y generacion de documentos.</p>
        </div>
        <div className="dev-grid">
          {iaProjects.map((item) => (
            <a className="dev-card" key={item.title} href={item.github} target="_blank" rel="noreferrer">
              <div className={`dev-thumb ${item.gradient}`}>
                <div className="dev-thumb-icons">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <span className="dev-thumb-label">{item.subtitle}</span>
              </div>
              <div className="dev-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dev-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="dev-link">
                  <SiGithub /> Ver codigo
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="wordpress" className="section dev-section">
        <div className="section-head">
          <p className="card-kicker">06 · WordPress</p>
          <h2>Diagnostico, Optimizacion y Migracion</h2>
          <p className="section-sub">Resolucion de problemas, performance y toolkit completo de migracion.</p>
        </div>
        <div className="dev-grid">
          {wordpressProjects.map((item) => (
            <a className="dev-card" key={item.title} href={item.github} target="_blank" rel="noreferrer">
              <div className={`dev-thumb ${item.gradient}`}>
                <div className="dev-thumb-icons">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <span className="dev-thumb-label">{item.subtitle}</span>
              </div>
              <div className="dev-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="dev-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="dev-link">
                  <SiGithub /> Ver codigo
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact-strip">
        <div>
          <p className="card-kicker">Contacto directo</p>
          <h2>{data.contactTitle}</h2>
          <p>{data.contactText}</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
            Abrir chat de WhatsApp
          </a>
          <a className="btn btn-outline" href={instagramHref} target="_blank" rel="noreferrer">
            Ver Instagram
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p>{data.brand}</p>
        <span>Portfolio profesional - {new Date().getFullYear()}</span>
      </footer>


    </div>
  )
}
