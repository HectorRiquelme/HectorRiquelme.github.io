import { useState } from 'react'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaDatabase, FaLinkedin } from 'react-icons/fa'
import {
  SiAndroid,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiGithub,
  SiInstagram,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
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

const devCategories = [
  'Todos',
  'Plataformas Chilenas',
  'E-commerce',
  'CRMs',
  'Bots IA',
  'WordPress',
]

const devProjects = [
  {
    title: 'Facturacion Electronica SII',
    category: 'Plataformas Chilenas',
    description:
      'Sistema completo de facturacion electronica chilena: XML DTE, firma digital X.509, timbre electronico TED y PDFs con codigo PDF417.',
    tags: ['Node.js', 'Express', 'SQLite', 'node-forge', 'pdfkit'],
    github: 'https://github.com/HectorRiquelme/integraciones-chilenas',
  },
  {
    title: 'Transbank WebPay Plus',
    category: 'Plataformas Chilenas',
    description:
      'Flujo completo de pagos WebPay Plus: catalogo, carrito, formulario Transbank y comprobante con codigo de autorizacion.',
    tags: ['Node.js', 'React', 'Vite', 'Tailwind', 'SQLite'],
    github: 'https://github.com/HectorRiquelme/integraciones-chilenas',
  },
  {
    title: 'Pagos Khipu',
    category: 'Plataformas Chilenas',
    description:
      'Pagos por transferencia bancaria con seleccion de banco, webhooks de confirmacion y expiracion automatica de cobros a 24h.',
    tags: ['Python', 'FastAPI', 'React', 'APScheduler', 'SQLite'],
    github: 'https://github.com/HectorRiquelme/integraciones-chilenas',
  },
  {
    title: 'Child Theme WooCommerce',
    category: 'E-commerce',
    description:
      'Tema hijo WooCommerce para tienda deportiva chilena con checkout personalizado, validacion RUT y selector de 346 comunas.',
    tags: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript'],
    github: 'https://github.com/HectorRiquelme/shopify-woocommerce',
  },
  {
    title: 'Tema Shopify Minimalista',
    category: 'E-commerce',
    description:
      'Tema personalizado basado en Dawn para ropa masculina: hero con video, mega menu, parallax y cumplimiento legal chileno.',
    tags: ['Shopify Liquid', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/HectorRiquelme/shopify-woocommerce',
  },
  {
    title: 'Plugin Despacho por Comunas',
    category: 'E-commerce',
    description:
      'Plugin WooCommerce con 346 comunas de Chile, zonas de despacho configurables con costos diferenciados y retiro en tienda.',
    tags: ['PHP', 'WordPress', 'WooCommerce', 'CSV'],
    github: 'https://github.com/HectorRiquelme/shopify-woocommerce',
  },
  {
    title: 'HubSpot + WooCommerce',
    category: 'CRMs',
    description:
      'Microservicio que sincroniza ordenes WooCommerce con HubSpot CRM via webhooks. Pipeline kanban visual con metricas en tiempo real.',
    tags: ['Node.js', 'Express', 'SQLite', 'HubSpot API'],
    github: 'https://github.com/HectorRiquelme/integraciones-crm',
  },
  {
    title: 'GoHighLevel Centro de Salud',
    category: 'CRMs',
    description:
      'Automatizacion para centro de salud: pipeline de pacientes, WhatsApp con recordatorios automaticos y agenda por doctor.',
    tags: ['Node.js', 'Express', 'React', 'SQLite'],
    github: 'https://github.com/HectorRiquelme/integraciones-crm',
  },
  {
    title: 'Pipedrive + Google Sheets',
    category: 'CRMs',
    description:
      'Sync bidireccional cada 5 minutos entre CRM y Google Sheets con deteccion de conflictos y log de historial completo.',
    tags: ['Python', 'FastAPI', 'APScheduler', 'Jinja2'],
    github: 'https://github.com/HectorRiquelme/integraciones-crm',
  },
  {
    title: 'Bot de Cobranza con Voz',
    category: 'Bots IA',
    description:
      'Cobranza automatizada con scripts personalizados por nivel de mora (4 tonos) y generacion de audio WAV por deudor.',
    tags: ['Python', 'FastAPI', 'React', 'Vite', 'SQLite'],
    github: 'https://github.com/HectorRiquelme/bots-ia',
  },
  {
    title: 'Chatbot WhatsApp PyME',
    category: 'Bots IA',
    description:
      'Chatbot de atencion al cliente con UI WhatsApp, LLM configurable con modo mock, escalamiento a humano y metricas.',
    tags: ['Node.js', 'Express', 'React', 'SQLite'],
    github: 'https://github.com/HectorRiquelme/bots-ia',
  },
  {
    title: 'Cotizaciones Construccion',
    category: 'Bots IA',
    description:
      'Generador de cotizaciones para construccion: calculo de materiales, mano de obra e IVA 19% con PDF descargable.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'jsPDF'],
    github: 'https://github.com/HectorRiquelme/bots-ia',
  },
  {
    title: 'Diagnostico Carrusel WordPress',
    category: 'WordPress',
    description:
      'Caso de estudio con Docker: 3 bugs intencionales en carrusel WordPress, diagnostico con DevTools y script de correccion.',
    tags: ['PHP', 'WordPress', 'Docker', 'jQuery', 'Bash'],
    github: 'https://github.com/HectorRiquelme/wordpress-fixes',
  },
  {
    title: 'Optimizacion WooCommerce',
    category: 'WordPress',
    description:
      'Stack Docker con Nginx + Redis + 500 productos: FastCGI cache, lazy loading, minificacion y benchmark automatizado.',
    tags: ['PHP', 'Nginx', 'Redis', 'Docker', 'WooCommerce'],
    github: 'https://github.com/HectorRiquelme/wordpress-fixes',
  },
  {
    title: 'Toolkit Migracion WordPress',
    category: 'WordPress',
    description:
      'Scripts de backup, migracion, SSL y verificacion post-migracion con entorno Docker de 2 instancias WordPress.',
    tags: ['Bash', 'PHP', 'WP-CLI', 'Docker', 'MySQL'],
    github: 'https://github.com/HectorRiquelme/wordpress-fixes',
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
  const [activeDevCategory, setActiveDevCategory] = useState('Todos')

  const filteredDevProjects =
    activeDevCategory === 'Todos'
      ? devProjects
      : devProjects.filter((p) => p.category === activeDevCategory)

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
          <a href="#tecnologias">Tecnologias</a>
          <a href="#especialidad">Especialidad</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#desarrollo">Desarrollo</a>
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

      <section id="proyectos" className="section projects-section">
        <div className="section-head">
          <p className="card-kicker">Proyectos</p>
          <h2>Trabajos publicados y demos en vivo</h2>
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

      <section id="desarrollo" className="section projects-section">
        <div className="section-head">
          <p className="card-kicker">Desarrollo Full Stack</p>
          <h2>Proyectos de integracion, e-commerce e IA</h2>
        </div>
        <div className="dev-filters">
          {devCategories.map((cat) => (
            <button
              key={cat}
              className={`dev-filter-btn${activeDevCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveDevCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredDevProjects.map((item) => (
            <a
              className="project-card"
              key={item.title}
              href={item.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="dev-project-header">
                <SiGithub className="dev-gh-icon" />
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
                <span className="project-link">Ver en GitHub →</span>
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
