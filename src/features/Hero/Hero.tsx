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
            🌟 Pensados para cuidar lo que más querés
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Crecemeos {' '}
            <span className="hero__title-accent">junto</span>{' '}
            a cada bebé
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">
            Cada etapa del crecimiento merece el mejor cuidado. Por eso desarrollamos pañales que ofrecen comodidad, absorción y protección para tu bebé.
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
            {([,'P','M','G','XG', 'XXG'] as const).map((size) => (
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

