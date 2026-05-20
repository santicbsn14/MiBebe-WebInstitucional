import { useState } from 'react'
import type { Product } from '../../types'
import { PRODUCTS } from './products.data'
import './Products.css'

export default function Products() {
  const [selected, setSelected] = useState<Product>(PRODUCTS[0])

  return (
    <section id="products" className="products section" aria-labelledby="products-title">
      <div className="container">

        {/* Header */}
        <div className="products__header reveal">
          <div className="chip chip-yellow">👶 Nuestros productos</div>
          <h2 id="products-title" className="section-title products__title">
            El tamaño perfecto para{' '}
            <span className="products__title-accent">cada etapa</span>
          </h2>
          <p className="section-subtitle products__subtitle">
            5 tallas diseñadas para acompañar el crecimiento de tu bebé, desde el primer día
            hasta sus primeros pasos y más allá.
          </p>
        </div>

        {/* Selector de tallas */}
        <div className="products__selector reveal reveal-delay-1" role="tablist" aria-label="Selector de tallas">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              role="tab"
              aria-selected={selected.id === product.id}
              aria-controls={`product-panel-${product.id}`}
              className={`products__size-btn ${selected.id === product.id ? 'products__size-btn--active' : ''}`}
              onClick={() => setSelected(product)}
              style={selected.id === product.id ? { '--accent': product.color } as React.CSSProperties : undefined}
            >
              <span className="products__size-code">{product.size}</span>
              <span className="products__size-label">{product.label}</span>
            </button>
          ))}
        </div>

        {/* Panel de producto seleccionado */}
        <div
          id={`product-panel-${selected.id}`}
          role="tabpanel"
          aria-label={`Talla ${selected.size}`}
          key={selected.id}
          className="products__panel animate-fade-up"
        >
          {/* Tarjeta visual */}
          <div
            className="products__card"
            style={{ '--card-accent': selected.color } as React.CSSProperties}
          >
            <div className="products__card-visual">
              <ProductIllustration product={selected} />
            </div>
            <div className="products__card-badge">
              <span className="products__badge-size">{selected.size}</span>
              <span className="products__badge-label">Talla</span>
            </div>
          </div>

          {/* Información */}
          <div className="products__info">
            <div className="products__info-header">
              <div className="products__info-top">
                <h3 className="products__info-title">Talla {selected.label}</h3>
                <span className="products__info-weight chip chip-blue">
                  ⚖️ {selected.weightRange}
                </span>
              </div>
              <p className="products__info-desc">{selected.description}</p>
            </div>

            {/* Características */}
            <div className="products__features">
              <h4 className="products__features-title">Características</h4>
              <ul className="products__features-list" role="list">
                {selected.features.map((feature, i) => (
                  <li key={i} className="products__feature">
                    <span className="products__feature-check" aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unidades */}
            <div className="products__units">
              <span className="products__units-icon" aria-hidden="true">📦</span>
              <div>
                <span className="products__units-number">{selected.units}</span>
                <span className="products__units-label">unidades por paquete</span>
              </div>
            </div>

            {/* CTA */}
            <div className="products__actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Consultar disponibilidad
              </button>
              <p className="products__disclaimer">
                Consultas por volumen y distribución disponibles.
              </p>
            </div>
          </div>
        </div>

        {/* Grid todas las tallas (vista rápida) */}
        <div className="products__quick-grid reveal reveal-delay-2">
          <h3 className="products__quick-title">Toda la línea</h3>
          <div className="products__quick-cards">
            {PRODUCTS.map((product) => (
              <button
                key={product.id}
                className={`products__quick-card ${selected.id === product.id ? 'products__quick-card--active' : ''}`}
                onClick={() => setSelected(product)}
                style={{ '--accent': product.color } as React.CSSProperties}
                aria-pressed={selected.id === product.id}
              >
                <span className="products__quick-size">{product.size}</span>
                <span className="products__quick-weight">{product.weightRange}</span>
                <span className="products__quick-units">{product.units} uds.</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* --- Ilustración de pañal por talla --- */
function ProductIllustration({ product }: { product: Product }) {
  const accentColor = product.color

  const sizeScales: Record<string, number> = {
    rn: 0.7, p: 0.82, m: 0.92, g: 1.0, xg: 1.1,
  }
  const scale = sizeScales[product.id] ?? 1.0
  const transform = `scale(${scale})`

  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Pañal talla ${product.label}`}
    >
      <g transform={`translate(110,110) ${transform} translate(-110,-110)`}>
        {/* Sombra */}
        <ellipse cx="110" cy="200" rx="70" ry="10" fill="rgba(0,0,0,0.08)" />

        {/* Cuerpo del pañal */}
        <path
          d="M40 90 Q30 130 40 175 Q55 195 110 198 Q165 195 180 175 Q190 130 180 90 Q165 70 140 68 Q125 60 110 60 Q95 60 80 68 Q55 70 40 90 Z"
          fill="white"
          stroke="#E8E8E8"
          strokeWidth="2"
        />

        {/* Zona de absorción */}
        <ellipse cx="110" cy="135" rx="42" ry="55" fill="#F0F8FF" />

        {/* Tiras laterales */}
        <rect x="30" y="88"  width="28" height="20" rx="10" fill={accentColor} opacity="0.85" />
        <rect x="162" y="88" width="28" height="20" rx="10" fill={accentColor} opacity="0.85" />
        <rect x="30"  y="155" width="28" height="20" rx="10" fill={accentColor} opacity="0.85" />
        <rect x="162" y="155" width="28" height="20" rx="10" fill={accentColor} opacity="0.85" />

        {/* Velcros */}
        <rect x="34"  y="92"  width="20" height="12" rx="6" fill="white" opacity="0.6" />
        <rect x="166" y="92"  width="20" height="12" rx="6" fill="white" opacity="0.6" />
        <rect x="34"  y="159" width="20" height="12" rx="6" fill="white" opacity="0.6" />
        <rect x="166" y="159" width="20" height="12" rx="6" fill="white" opacity="0.6" />

        {/* Logo Mi Bebé en el pañal */}
        <text x="110" y="122" textAnchor="middle" fontFamily="'Fredoka', sans-serif" fontSize="14" fontWeight="700" fill="#E8445A">mi</text>
        <text x="110" y="138" textAnchor="middle" fontFamily="'Fredoka', sans-serif" fontSize="14" fontWeight="700" fill="#1E6FBF">bebé</text>

        {/* Indicador de humedad */}
        <rect x="98" y="148" width="24" height="6" rx="3" fill={accentColor} opacity="0.4" />
        <text x="110" y="153" textAnchor="middle" fontFamily="'Nunito', sans-serif" fontSize="4" fill={accentColor} fontWeight="600">HÚMEDO</text>

        {/* Talla en el pañal */}
        <text
          x="110"
          y="182"
          textAnchor="middle"
          fontFamily="'Fredoka', sans-serif"
          fontSize="18"
          fontWeight="700"
          fill={accentColor}
        >
          {product.size}
        </text>

        {/* Pequeñas estrellas */}
        <circle cx="72"  cy="168" r="3" fill={accentColor} opacity="0.5" />
        <circle cx="148" cy="168" r="3" fill={accentColor} opacity="0.5" />
        <circle cx="60"  cy="140" r="2" fill={accentColor} opacity="0.4" />
        <circle cx="160" cy="140" r="2" fill={accentColor} opacity="0.4" />
      </g>
    </svg>
  )
}
