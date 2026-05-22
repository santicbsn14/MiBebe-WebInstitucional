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
                <img
  src="/mibebe-footer.svg"
  alt="Mi Bebé"
  height={100}
  draggable={false}
/>
              </div>
              <p className="footer__tagline">
                Pañales desechables con el cuidado y la ternura que tu bebé merece.
              </p>
              <div className="footer__mascot" aria-hidden="true">
                  <img
    src="/elephant.svg"
    alt=""
    height={80}
    draggable={false}
  />
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

