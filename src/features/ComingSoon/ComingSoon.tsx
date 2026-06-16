import './ComingSoon.css'

export default function ComingSoon() {
  const waUrl = `https://wa.me/5493412345678?text=${encodeURIComponent('Hola, quisiera recibir novedades de Mi Bebé Pañales 👶')}`

  return (
    <div className="cs">

      {/* Nubes de fondo */}
      <Cloud className="cs__cloud cs__cloud--1" />
      <Cloud className="cs__cloud cs__cloud--2" />
      <Cloud className="cs__cloud cs__cloud--3" />
      <Cloud className="cs__cloud cs__cloud--4" />

      {/* Estrellas */}
      <Star className="cs__star cs__star--1" color="#FFD700" />
      <Star className="cs__star cs__star--2" color="#E8445A" />
      <Star className="cs__star cs__star--3" color="#FFD700" />
      <Star className="cs__star cs__star--4" color="#7DD9E8" />
      <Star className="cs__star cs__star--5" color="#E8445A" />

      {/* Card */}
      <div className="cs__card">

        {/* Logo en nube */}
        <div className="cs__logo-cloud">
          <img src="/elephant.svg" alt="Mascota Mi Bebé" className="cs__mascot" draggable={false} />
          <div className="cs__logo-text">
            <span className="cs__logo-mi">mi</span>
            <span className="cs__logo-bebe">bebé</span>
          </div>
        </div>

        <div className="cs__badge">🌟 Lanzamiento oficial</div>

        <h1 className="cs__title">
          Muy <span>pronto</span><br />estamos llegando
        </h1>

        <p className="cs__subtitle">
          Estamos preparando algo especial para vos y tu bebé.
          El sitio oficial de <strong>Mi Bebé Pañales</strong> estará disponible muy pronto.
        </p>

        <div className="cs__divider" />

        <div className="cs__chips">
          <span className="cs__chip cs__chip--sky">☁️ 5 tallas disponibles</span>
          <span className="cs__chip cs__chip--yellow">🌿 Ultra suave</span>
          <span className="cs__chip cs__chip--pink">🇦🇷 Marca argentina</span>
          <span className="cs__chip cs__chip--sky">📍 Villa Constitución, Santa Fe</span>
        </div>

        <a href={waUrl} className="cs__cta" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.636 4.648 1.84 6.664L2.667 29.333l6.84-1.795A13.267 13.267 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Z" fill="currentColor"/>
            <path d="M21.6 18.787c-.293-.147-1.733-.853-2-.947-.267-.093-.461-.14-.655.14-.192.28-.748.947-.92 1.147-.168.2-.337.22-.627.073-.293-.147-1.24-.457-2.36-1.457-.873-.78-1.46-1.747-1.633-2.04-.173-.293-.02-.453.127-.6.132-.13.293-.34.44-.507.147-.167.196-.287.293-.48.097-.193.049-.36-.024-.507-.073-.147-.653-1.587-.893-2.173-.24-.573-.48-.493-.653-.5h-.56c-.193 0-.507.073-.773.36-.267.287-1.013 1-1.013 2.42 0 1.42 1.04 2.793 1.18 2.987.14.193 2.027 3.12 4.947 4.38.693.3 1.233.48 1.653.613.693.22 1.327.19 1.827.113.557-.087 1.733-.707 1.977-1.387.24-.68.24-1.26.167-1.387-.067-.127-.267-.2-.56-.347Z" fill="white"/>
          </svg>
          Consultanos por WhatsApp
        </a>

        <p className="cs__footer">© 2026 Mi Bebé Pañales · mibebeargentina.com</p>
      </div>
    </div>
  )
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="100" cy="80" rx="80" ry="40" fill="currentColor"/>
      <circle cx="60" cy="70" r="35" fill="currentColor"/>
      <circle cx="110" cy="60" r="45" fill="currentColor"/>
      <circle cx="155" cy="72" r="30" fill="currentColor"/>
    </svg>
  )
}

function Star({ className, color }: { className?: string; color: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 18l-6.2 3 1.2-6.8L2 9.3l7.1-1z"/>
    </svg>
  )
}