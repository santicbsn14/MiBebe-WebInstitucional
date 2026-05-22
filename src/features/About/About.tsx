import type { BrandValue } from '../../types'
import './About.css'

const BRAND_VALUES: BrandValue[] = [
  { id: 'suavidad',  icon: '🌸', title: 'Suavidad',   description: 'Materiales ultra suaves que cuidan la delicada piel de tu bebé en cada momento.',                              color: 'pink'   },
  { id: 'confianza', icon: '🛡️', title: 'Confianza',  description: 'Fabricados con los más altos estándares de calidad para que puedas confiar plenamente.',                       color: 'blue'   },
  { id: 'comodidad', icon: '☁️', title: 'Comodidad',  description: 'Diseño ergonómico que se adapta a los movimientos de tu bebé, sin restricciones.',                             color: 'sky'    },
  { id: 'familia',   icon: '💛', title: 'Familia',    description: 'Pensados para toda la familia, porque sabemos que cada momento importa.',                                       color: 'yellow' },
]

const FLOATING_CHIPS = [
  { label: '🌿 Dermatológicamente testeado', color: 'sky'    },
  { label: '✅ Sin látex ni perfumes',        color: 'yellow' },
  { label: '💧 Máxima absorción',             color: 'blue'   },
  { label: '🇦🇷 Marca argentina',             color: 'pink'   },
  { label: '☁️ Ultra suave',                  color: 'sky'    },
]

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="about__wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z" fill="var(--color-sky-pale)" />
        </svg>
      </div>

      <div className="container">
        <div className="about__header reveal">
          <div className="chip chip-sky">✨ Quiénes somos</div>
          <h2 id="about-title" className="section-title about__title">
            Una marca nueva,{' '}
            <span className="about__title-accent">con mucho amor</span>
          </h2>
          <p className="section-subtitle about__lead">
            Mi Bebé nació con una convicción simple: que cada bebé merece lo mejor.
            Somos una marca argentina que llega con fuerza para acompañar a las
            familias en cada etapa del crecimiento.
          </p>
        </div>

        <div className="about__story">
          <div className="about__story-image reveal reveal--left">
  <img
    src="/elephant.svg"
    alt="Mascota Mi Bebé - Elefante"
    draggable={false}
  />
            {FLOATING_CHIPS.map((chip, i) => (
              <span
                key={chip.label}
                className={`chip chip-${chip.color} about__chip about__chip--${i + 1} animate-float`}
                style={{ animationDelay: `${i * 300}ms` }}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <div className="about__story-text reveal reveal--right">
            <h3 className="about__story-title">De Villa Constitución para todo el país</h3>
            <p>
              Nacemos en Villa Constitución, Santa Fe, con el objetivo de ofrecer
              pañales desechables de calidad, accesibles para todas las familias
              argentinas. Creemos que los primeros años de un bebé son únicos e
              irrepetibles, y queremos estar presentes en cada momento: desde las
              noches tranquilas hasta las aventuras del día a día.
            </p>
            <p>
              Nuestra línea combina una absorción eficiente con materiales
              hipoalergénicos y suaves, cuidando la piel de tu bebé en cada uso.
              Disponibles en 5 tallas, desde recién nacido hasta extra grande,
              para acompañar cada etapa de su crecimiento.
            </p>
            <div className="about__story-cta">
              <a
                href="#products"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Ver nuestros productos
              </a>
            </div>
          </div>
        </div>

        <div className="about__values-header reveal">
          <h3 className="about__values-title">Nuestros pilares</h3>
          <p className="about__values-subtitle">Los valores que guían cada pañal que hacemos</p>
        </div>

        <div className="about__values">
          {BRAND_VALUES.map((value, i) => (
            <div
              key={value.id}
              className={`about__value-card about__value-card--${value.color} reveal reveal-delay-${i + 1}`}
            >
              <div className="about__value-icon" aria-hidden="true">{value.icon}</div>
              <h4 className="about__value-title">{value.title}</h4>
              <p className="about__value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

