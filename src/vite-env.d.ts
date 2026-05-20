/// <reference types="vite/client" />

// Archivos de estilo
declare module '*.css'
declare module '*.scss'
declare module '*.sass'

// Imágenes
declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
declare module '*.png'  { const src: string; export default src }
declare module '*.jpg'  { const src: string; export default src }
declare module '*.jpeg' { const src: string; export default src }
declare module '*.webp' { const src: string; export default src }
declare module '*.gif'  { const src: string; export default src }

// Fuentes
declare module '*.woff'  { const src: string; export default src }
declare module '*.woff2' { const src: string; export default src }