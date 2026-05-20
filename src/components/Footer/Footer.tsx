import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      {/* Wave top */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--color-blue-dark)"
          />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">

            {/* Columna marca */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-mi">mi</span>
                <span className="footer__logo-bebe">bebé</span>
              </div>
              <p className="footer__tagline">
                Pañales desechables con el cuidado y la ternura que tu bebé merece.
              </p>
              <div className="footer__mascot" aria-hidden="true">
                <ElephantIcon />
              </div>
            </div>

            {/* Columna navegación */}
            <div className="footer__col">
              <h3 className="footer__col-title">Navegación</h3>
              <ul>
                {[
                  { label: 'Inicio',    href: '#hero' },
                  { label: 'Nosotros',  href: '#about' },
                  { label: 'Productos', href: '#products' },
                  { label: 'Contacto',  href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna productos */}
            <div className="footer__col">
              <h3 className="footer__col-title">Tallas</h3>
              <ul>
                {['Recién Nacido (RN)', 'Pequeño (P)', 'Mediano (M)', 'Grande (G)', 'Extra Grande (XG)'].map((item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="footer__link"
                      onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna contacto */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contacto</h3>
              <ul>
                <li>
                  <a href="mailto:contacto@mibebe.com.ar" className="footer__link footer__link--icon">
                    <span aria-hidden="true">✉️</span> contacto@mibebe.com.ar
                  </a>
                </li>
                <li>
                  <a href="tel:+541100000000" className="footer__link footer__link--icon">
                    <span aria-hidden="true">📞</span> +54 (11) 0000-0000
                  </a>
                </li>
                <li>
                  <span className="footer__link footer__link--icon">
                    <span aria-hidden="true">📍</span> Villa Constitución, Santa Fe
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copy">
              © {CURRENT_YEAR} Mi Bebé. Todos los derechos reservados.
            </p>
            <div className="footer__legal">
              <a href="#" className="footer__link">Política de privacidad</a>
              <span aria-hidden="true">·</span>
              <a href="#" className="footer__link">Términos de uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ElephantIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-label="Mascota Mi Bebé">
      {/* Cuerpo */}
      <ellipse cx="40" cy="52" rx="22" ry="18" fill="#B8EEF6" />
      {/* Cabeza */}
      <circle cx="40" cy="32" r="20" fill="#B8EEF6" />
      {/* Orejas */}
      <ellipse cx="18" cy="30" rx="10" ry="13" fill="#7DD9E8" />
      <ellipse cx="62" cy="30" rx="10" ry="13" fill="#7DD9E8" />
      <ellipse cx="18" cy="30" rx="6" ry="9" fill="#E8445A" opacity="0.6" />
      <ellipse cx="62" cy="30" rx="6" ry="9" fill="#E8445A" opacity="0.6" />
      {/* Trompa */}
      <ellipse cx="40" cy="46" rx="5" ry="8" fill="#7DD9E8" />
      <ellipse cx="38" cy="53" rx="4" ry="3" fill="#7DD9E8" />
      {/* Ojos */}
      <circle cx="33" cy="28" r="4" fill="#1E6FBF" />
      <circle cx="47" cy="28" r="4" fill="#1E6FBF" />
      <circle cx="34" cy="27" r="1.5" fill="white" />
      <circle cx="48" cy="27" r="1.5" fill="white" />
      {/* Sonrisa */}
      <path d="M34 38 Q40 43 46 38" stroke="#1E6FBF" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Patas */}
      <ellipse cx="28" cy="68" rx="8" ry="5" fill="#7DD9E8" />
      <ellipse cx="52" cy="68" rx="8" ry="5" fill="#7DD9E8" />
      {/* Dedos */}
      <circle cx="24" cy="71" r="2" fill="#B8EEF6" />
      <circle cx="28" cy="72" r="2" fill="#B8EEF6" />
      <circle cx="32" cy="71" r="2" fill="#B8EEF6" />
      <circle cx="48" cy="71" r="2" fill="#B8EEF6" />
      <circle cx="52" cy="72" r="2" fill="#B8EEF6" />
      <circle cx="56" cy="71" r="2" fill="#B8EEF6" />
      {/* Cola */}
      <path d="M62 52 Q70 45 67 38" stroke="#7DD9E8" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="67" cy="37" r="3" fill="#E8445A" />
    </svg>
  )
}
