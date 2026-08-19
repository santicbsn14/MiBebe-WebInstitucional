import type { BrandValue } from '../../types'
import './About.css'

const BRAND_VALUES: BrandValue[] = [
  { id: 'suavidad',  icon: '🌸', title: 'Suavidad',   description: 'Materiales ultra suaves que cuidan la delicada piel de tu bebé en cada momento.',                              color: 'pink'   },
  { id: 'protección', icon: '🛡️', title: 'Protección',  description: 'Alta absorción y un ajuste seguro para acompañar cada momento con tranquilidad.',                       color: 'blue'   },
  { id: 'comodidad', icon: '☁️', title: 'Comodidad',  description: 'Diseño amplio y confortable que acompaña cada movimiento y se adapta al crecimiento de tu bebé.',                             color: 'sky'    },
  { id: 'calidad',   icon: '💛', title: 'Calidad',    description: ' Elaborados bajo estándares de calidad y comercializados en Argentina por un importador habilitado por ANMAT.',                                       color: 'yellow' },
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
            Creada para cuidar,{' '}
            <span className="about__title-accent">lo que mas querés</span>
          </h2>
          <p className="section-subtitle about__lead">
Mi Bebé nació con un propósito claro: ofrecer pañales que combinen calidad, comodidad y protección para acompañar a las familias en cada etapa del crecimiento de sus hijos.
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
            <h3 className="about__story-title">Listos para llegar a todos los Argentinos</h3>
            <p>
En Mi Bebé desarrollamos pañales pensados para brindar comodidad, protección y alta absorción, acompañando el crecimiento de los más pequeños en cada etapa. Nuestro compromiso es ofrecer productos confiables que combinen un ajuste seguro con la tranquilidad que las familias buscan todos los días.
            </p>
            <p>
Nuestra línea está disponible en cinco talles —Pequeño, Mediano, Grande, Extra Grande y Extra Extra Grande— diseñados con un calce amplio y cómodo, permitiendo acompañar el crecimiento de tu bebé por más tiempo y brindando mayor libertad de movimiento. Comercializados en Argentina por un importador habilitado por ANMAT, reflejan nuestro compromiso con la calidad y la confianza.
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
          <p className="about__values-subtitle">Los valores que inspiran cada pañal Mi Bebé.</p>
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

