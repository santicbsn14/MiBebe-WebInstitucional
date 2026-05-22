import { useState, useEffect } from 'react'
import type { NavLink } from '../../types'
import './Navbar.css'

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Nosotros',  href: '#about' },
  { label: 'Productos', href: '#products' },
  { label: 'Contacto',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActive]   = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú en resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="navbar__inner container" aria-label="Navegación principal">

        {/* Logo */}
        <a
  href="#hero"
  className="navbar__logo"
  onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
  aria-label="Mi Bebé — Inicio"
>
  <img
    src="/mibebe-navbar.svg"
    alt="Mi Bebé"
    height={124}
    draggable={false}
  />
</a>

        {/* Links desktop */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="btn btn-primary navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
        >
          Contactanos
        </a>

        {/* Hamburger mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__mobile-link ${activeLink === link.href ? 'navbar__mobile-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              tabIndex={menuOpen ? 0 : -1}
            >
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {/* Nube base */}
      <ellipse cx="18" cy="22" rx="14" ry="10" fill="#7DD9E8" />
      <circle cx="10" cy="20" r="7" fill="#7DD9E8" />
      <circle cx="24" cy="18" r="9" fill="#7DD9E8" />
      <circle cx="16" cy="16" r="8" fill="#7DD9E8" />
      {/* Punto (i) */}
      <circle cx="22" cy="11" r="3" fill="#E8445A" />
    </svg>
  )
}
