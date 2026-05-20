import Navbar         from '@components/Navbar'
import Footer         from '@components/Footer'
import WhatsAppButton from '@components/WhatsAppButton'
import Hero           from '@features/Hero'
import About          from '@features/About'
import Products       from '@features/Products'
import Contact        from '@features/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import '@styles/main.css'

export default function App() {
  useScrollReveal({ threshold: 0.12, rootMargin: '0px 0px -50px 0px' })

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton
        phone="5493412345678"
        message="¡Hola! Quisiera consultar sobre los pañales Mi Bebé 👶"
      />
    </>
  )
}