import './Hero.css'

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" aria-label="Portada Mi Bebé">

      <div className="hero__clouds" aria-hidden="true">
        <Cloud className="hero__cloud hero__cloud--1" />
        <Cloud className="hero__cloud hero__cloud--2" />
        <Cloud className="hero__cloud hero__cloud--3" />
        <Cloud className="hero__cloud hero__cloud--4" />
        <Cloud className="hero__cloud hero__cloud--5" />
      </div>

      <div className="hero__blobs" aria-hidden="true">
        <span className="hero__blob hero__blob--yellow" />
        <span className="hero__blob hero__blob--sky" />
        <span className="hero__blob hero__blob--pink" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="chip chip-yellow reveal">
            🌟 Una nueva forma de cuidar a tu bebé
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Suavidad y{' '}
            <span className="hero__title-accent">ternura</span>{' '}
            desde el primer día
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">
            Mi Bebé llegó para acompañar cada etapa de tu bebé con pañales
            desechables de calidad, pensados con amor desde Villa Constitución,
            Santa Fe.
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <button className="btn btn-primary btn-lg" onClick={() => scrollTo('#products')}>
              Ver productos
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => scrollTo('#about')}>
              Conocenos
            </button>
          </div>

          <div className="hero__stats reveal reveal-delay-4">
            {(['RN','P','M','G','XG'] as const).map((size) => (
              <button
                key={size}
                className="hero__stat hero__stat--size"
                onClick={() => scrollTo('#products')}
                aria-label={`Ver talla ${size}`}
              >
                <span className="hero__stat-value">{size}</span>
                <span className="hero__stat-label">talla</span>
              </button>
            ))}
          </div>
        </div>

        <div className="hero__visual reveal reveal--scale">
          <div className="hero__logo-cloud animate-float">
            <div className="hero__logo-text">
              <span className="hero__logo-mi">mi</span>
              <span className="hero__logo-bebe">bebé</span>
            </div>
            <div className="hero__logo-sub">Pañales Desechables</div>
          </div>

<div className="hero__elephant animate-float-slow">
  <img
    src="/elephant.svg"
    alt="Mascota Mi Bebé - Elefante"
    width={280}
    height={280}
    draggable={false}
  />
</div>

          <div className="hero__deco-clouds" aria-hidden="true">
            <SmallCloud className="hero__deco-cloud hero__deco-cloud--a animate-drift-left" />
            <SmallCloud className="hero__deco-cloud hero__deco-cloud--b animate-drift-right" />
            <SmallCloud className="hero__deco-cloud hero__deco-cloud--c animate-drift-left delay-400" />
          </div>

          <div className="hero__floating-chips" aria-hidden="true">
            <span className="hero__floating-chip hero__floating-chip--a animate-float delay-200">💧 Ultra absorbente</span>
            <span className="hero__floating-chip hero__floating-chip--b animate-float delay-500">🌿 Suave piel</span>
            <span className="hero__floating-chip hero__floating-chip--c animate-float delay-800">⭐ 5 tallas</span>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-indicator animate-pulse"
        onClick={() => scrollTo('#about')}
        aria-label="Ir a la siguiente sección"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="100" cy="80" rx="80" ry="40" fill="currentColor" />
      <circle cx="60"  cy="70" r="35" fill="currentColor" />
      <circle cx="110" cy="60" r="45" fill="currentColor" />
      <circle cx="155" cy="72" r="30" fill="currentColor" />
    </svg>
  )
}

function SmallCloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="50" cy="42" rx="40" ry="18" fill="currentColor" />
      <circle cx="30"  cy="36" r="16" fill="currentColor" />
      <circle cx="55"  cy="28" r="22" fill="currentColor" />
      <circle cx="78"  cy="37" r="14" fill="currentColor" />
    </svg>
  )
}

function ElephantHero() {
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mascota Mi Bebé - Elefante">
      <ellipse cx="140" cy="268" rx="80" ry="10" fill="rgba(30,111,191,0.12)" />
      <path d="M100 200 Q140 220 180 200 L185 240 Q140 255 95 240 Z" fill="white" stroke="#E8E8E8" strokeWidth="2" />
      <path d="M100 200 L95 240" stroke="#E8E8E8" strokeWidth="2" />
      <path d="M180 200 L185 240" stroke="#E8E8E8" strokeWidth="2" />
      <ellipse cx="140" cy="190" rx="70" ry="58" fill="#B8EEF6" />
      <circle cx="140" cy="120" r="72" fill="#B8EEF6" />
      <ellipse cx="63"  cy="112" rx="34" ry="44" fill="#7DD9E8" />
      <ellipse cx="217" cy="112" rx="34" ry="44" fill="#7DD9E8" />
      <ellipse cx="63"  cy="112" rx="22" ry="30" fill="#E8445A" opacity="0.55" />
      <ellipse cx="217" cy="112" rx="22" ry="30" fill="#E8445A" opacity="0.55" />
      <ellipse cx="63"  cy="112" rx="34" ry="44" stroke="#1E6FBF" strokeWidth="2.5" fill="none" opacity="0.3" />
      <ellipse cx="217" cy="112" rx="34" ry="44" stroke="#1E6FBF" strokeWidth="2.5" fill="none" opacity="0.3" />
      <ellipse cx="140" cy="165" rx="16" ry="10" fill="#7DD9E8" />
      <path d="M130 172 Q120 185 125 200 Q132 210 140 205" stroke="#7DD9E8" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="130" cy="204" r="8" fill="#7DD9E8" />
      <circle cx="116" cy="108" r="16" fill="white" />
      <circle cx="164" cy="108" r="16" fill="white" />
      <circle cx="118" cy="110" r="10" fill="#1E6FBF" />
      <circle cx="166" cy="110" r="10" fill="#1E6FBF" />
      <circle cx="120" cy="112" r="6" fill="#0D2E5A" />
      <circle cx="168" cy="112" r="6" fill="#0D2E5A" />
      <circle cx="122" cy="108" r="3" fill="white" />
      <circle cx="170" cy="108" r="3" fill="white" />
      <path d="M104 96 Q108 90 114 94" stroke="#1E6FBF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M110 92 L112 86" stroke="#1E6FBF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M152 94 Q158 90 164 95" stroke="#1E6FBF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M158 90 L160 84" stroke="#1E6FBF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="100" cy="130" rx="14" ry="9" fill="#E8445A" opacity="0.30" />
      <ellipse cx="180" cy="130" rx="14" ry="9" fill="#E8445A" opacity="0.30" />
      <path d="M118 148 Q140 162 162 148" stroke="#1E6FBF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="102" cy="238" rx="26" ry="18" fill="#7DD9E8" />
      <ellipse cx="178" cy="238" rx="26" ry="18" fill="#7DD9E8" />
      <circle cx="88"  cy="247" r="6" fill="#B8EEF6" />
      <circle cx="100" cy="251" r="6" fill="#B8EEF6" />
      <circle cx="113" cy="249" r="6" fill="#B8EEF6" />
      <circle cx="164" cy="247" r="6" fill="#B8EEF6" />
      <circle cx="177" cy="251" r="6" fill="#B8EEF6" />
      <circle cx="190" cy="249" r="6" fill="#B8EEF6" />
      <path d="M210 185 Q230 165 225 145" stroke="#7DD9E8" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="225" cy="143" r="8" fill="#E8445A" />
      <path d="M52 60 L55 52 L58 60 L66 57 L60 63 L62 71 L55 66 L48 71 L50 63 L44 57 Z" fill="#FFD700" opacity="0.9" />
      <path d="M228 50 L230 44 L232 50 L238 48 L234 52 L236 58 L230 54 L224 58 L226 52 L222 48 Z" fill="#FFD700" opacity="0.7" />
      <circle cx="240" cy="80" r="4" fill="#FFD700" opacity="0.5" />
      <circle cx="40"  cy="90" r="3" fill="#FFD700" opacity="0.5" />
    </svg>
  )
}