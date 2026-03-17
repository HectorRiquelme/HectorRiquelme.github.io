import { useEffect, useMemo, useState } from 'react'
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

const STORAGE_KEY = 'hector-portfolio-v3'

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
  instagramHandle: 'hector_riquelme',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
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

const editableFields = [
  ['brand', 'Marca'],
  ['name', 'Nombre'],
  ['lastName', 'Apellido'],
  ['role', 'Cargo'],
  ['summary', 'Descripcion profesional'],
  ['location', 'Ubicacion'],
  ['whatsapp', 'WhatsApp (solo numeros)'],
  ['whatsappMessage', 'Mensaje inicial de WhatsApp'],
  ['instagramHandle', 'Usuario de Instagram'],
  ['linkedin', 'URL de LinkedIn'],
  ['github', 'URL de GitHub'],
  ['email', 'Email'],
  ['heroImage', 'URL de foto principal'],
  ['education1Title', 'Titulo formacion 1'],
  ['education1Org', 'Institucion 1'],
  ['education2Title', 'Titulo formacion 2'],
  ['education2Org', 'Institucion 2'],
  ['contactTitle', 'Titulo de contacto'],
  ['contactText', 'Texto de contacto'],
]

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
  const [data, setData] = useState(defaultData)
  const [draft, setDraft] = useState(defaultData)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return
      const merged = { ...defaultData, ...JSON.parse(saved) }
      setData(merged)
      setDraft(merged)
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    setImageLoadFailed(false)
  }, [data.heroImage])

  const whatsappHref = useMemo(() => {
    const phone = sanitizePhone(data.whatsapp)
    const text = encodeURIComponent(data.whatsappMessage)
    return `https://wa.me/${phone}?text=${text}`
  }, [data.whatsapp, data.whatsappMessage])

  const instagramHref = useMemo(() => buildInstagramLink(data.instagramHandle), [data.instagramHandle])

  const openEditor = () => {
    setDraft(data)
    setIsEditorOpen(true)
  }

  const saveChanges = () => {
    setData(draft)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    setIsEditorOpen(false)
  }

  const resetChanges = () => {
    const ok = window.confirm('Quieres restaurar los valores por defecto?')
    if (!ok) return
    setData(defaultData)
    setDraft(defaultData)
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setDraft((prev) => ({ ...prev, heroImage: String(reader.result) }))
    }
    reader.readAsDataURL(file)
  }

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
          <a href="#contacto">Contacto</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-outline" onClick={openEditor}>
            Editar
          </button>
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
                  <p>Sube tu foto real desde el editor para reemplazar este espacio.</p>
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

      {isEditorOpen ? (
        <div className="editor-overlay" onClick={() => setIsEditorOpen(false)}>
          <aside className="editor-panel" onClick={(event) => event.stopPropagation()}>
            <div className="editor-header">
              <div>
                <p className="card-kicker">Editor rapido</p>
                <h3>Actualizar contenido del portfolio</h3>
              </div>
              <button className="close-btn" onClick={() => setIsEditorOpen(false)}>
                x
              </button>
            </div>

            <div className="editor-form">
              {editableFields.map(([key, label]) => {
                const isLargeText = ['summary', 'whatsappMessage', 'contactText'].includes(key)
                return (
                  <label key={key} className="field-block">
                    <span>{label}</span>
                    {isLargeText ? (
                      <textarea
                        rows="4"
                        value={draft[key] ?? ''}
                        onChange={(event) =>
                          setDraft((prev) => ({ ...prev, [key]: event.target.value }))
                        }
                      />
                    ) : (
                      <input
                        value={draft[key] ?? ''}
                        onChange={(event) =>
                          setDraft((prev) => ({ ...prev, [key]: event.target.value }))
                        }
                      />
                    )}
                  </label>
                )
              })}

              <label className="field-block">
                <span>Subir foto principal (o usa /public/hector-riquelme.jpg)</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            <div className="editor-actions">
              <button className="btn btn-outline" onClick={resetChanges}>
                Restablecer
              </button>
              <button className="btn btn-primary" onClick={saveChanges}>
                Guardar cambios
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
