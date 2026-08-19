/* ============================================================
   MI BEBÉ — Tipos globales del proyecto
   ============================================================ */

/* --- Productos --- */
export type ProductSize = 'RN' | 'P' | 'M' | 'G' | 'XG' | 'XXG'

export interface Product {
  id: string
  size: ProductSize
  label: string           // "Recién Nacido", "Pequeño", etc.
  weightRange: string     // "Hasta 4 kg"
  description: string
  features: string[]
  color: string           // color de acento del card
  units: number           // unidades por paquete
}

/* --- Formulario de contacto --- */
export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  subject: ContactSubject
}

export type ContactSubject =
  | 'consulta-general'
  | 'distribuidor'
  | 'calidad'
  | 'prensa'
  | 'otro'

export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  subject?: string
}

/* --- Valores de marca (sección About) --- */
export interface BrandValue {
  id: string
  icon: string          // emoji o código de ícono
  title: string
  description: string
  color: string
}

/* --- Stats del Hero --- */
export interface HeroStat {
  value: string
  label: string
}

/* --- Navegación --- */
export interface NavLink {
  label: string
  href: string
}
