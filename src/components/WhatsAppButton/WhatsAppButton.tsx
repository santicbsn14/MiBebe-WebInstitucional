import { useState, useEffect } from 'react'
import './WhatsAppButton.css'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
}

export default function WhatsAppButton({
  phone = '5493412345678',
  message = '¡Hola! Quisiera consultar sobre los pañales Mi Bebé 👶',
}: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!visible) return
    const t  = setTimeout(() => setTooltip(true),  3000)
    const t2 = setTimeout(() => setTooltip(false), 8000)
    return () => { clearTimeout(t); clearTimeout(t2) }
  }, [visible])

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-btn ${visible ? 'wa-btn--visible' : ''}`}
      aria-label="Contactar por WhatsApp"
    >
      <span className={`wa-btn__tooltip ${tooltip ? 'wa-btn__tooltip--show' : ''}`} aria-hidden="true">
        ¿Necesitás ayuda? 💬
      </span>

      <span className="wa-btn__pulse" aria-hidden="true" />

      <svg className="wa-btn__icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.636 4.648 1.84 6.664L2.667 29.333l6.84-1.795A13.267 13.267 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Z" fill="currentColor" />
        <path d="M21.6 18.787c-.293-.147-1.733-.853-2-.947-.267-.093-.461-.14-.655.14-.192.28-.748.947-.92 1.147-.168.2-.337.22-.627.073-.293-.147-1.24-.457-2.36-1.457-.873-.78-1.46-1.747-1.633-2.04-.173-.293-.02-.453.127-.6.132-.13.293-.34.44-.507.147-.167.196-.287.293-.48.097-.193.049-.36-.024-.507-.073-.147-.653-1.587-.893-2.173-.24-.573-.48-.493-.653-.5h-.56c-.193 0-.507.073-.773.36-.267.287-1.013 1-1.013 2.42 0 1.42 1.04 2.793 1.18 2.987.14.193 2.027 3.12 4.947 4.38.693.3 1.233.48 1.653.613.693.22 1.327.19 1.827.113.557-.087 1.733-.707 1.977-1.387.24-.68.24-1.26.167-1.387-.067-.127-.267-.2-.56-.347Z" fill="white" />
      </svg>
    </a>
  )
}