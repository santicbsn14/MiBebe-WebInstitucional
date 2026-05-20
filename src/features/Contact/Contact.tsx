import { useState, type FormEvent, type ChangeEvent } from 'react'
import type { ContactFormData, ContactFormErrors, ContactSubject } from '../../types'
import './Contact.css'

const INITIAL_FORM: ContactFormData = {
  name:    '',
  email:   '',
  phone:   '',
  message: '',
  subject: 'consulta-general',
}

const SUBJECTS: { value: ContactSubject; label: string }[] = [
  { value: 'consulta-general', label: 'Consulta general' },
  { value: 'distribuidor',     label: 'Quiero ser distribuidor' },
  { value: 'calidad',          label: 'Calidad del producto' },
  { value: 'prensa',           label: 'Prensa y medios' },
  { value: 'otro',             label: 'Otro' },
]

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email',     value: 'contacto@mibebe.com.ar', href: 'mailto:contacto@mibebe.com.ar' },
  { icon: '📞', label: 'Teléfono', value: '+54 (11) 0000-0000',       href: 'tel:+541100000000' },
  { icon: '📍', label: 'Ubicación', value: 'Villa Constitución, Santa Fe',  href: undefined },
  { icon: '⏰', label: 'Horario',   value: 'Lun–Vie 9:00–18:00',      href: undefined },
]

/* --- Validación --- */
function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[\d\s\-+()]{7,20}$/

  if (!data.name.trim())
    errors.name = 'El nombre es requerido'
  else if (data.name.trim().length < 2)
    errors.name = 'El nombre debe tener al menos 2 caracteres'

  if (!data.email.trim())
    errors.email = 'El email es requerido'
  else if (!emailRegex.test(data.email))
    errors.email = 'Ingresá un email válido'

  if (data.phone && !phoneRegex.test(data.phone))
    errors.phone = 'Ingresá un teléfono válido'

  if (!data.message.trim())
    errors.message = 'El mensaje es requerido'
  else if (data.message.trim().length < 10)
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
  else if (data.message.trim().length > 1000)
    errors.message = 'El mensaje no puede superar los 1000 caracteres'

  return errors
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [form, setForm]       = useState<ContactFormData>(INITIAL_FORM)
  const [errors, setErrors]   = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({})
  const [status, setStatus]   = useState<FormStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    // Validación en tiempo real sólo para campos tocados
    if (touched[name as keyof ContactFormData]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof ContactFormErrors] }))
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors(prev => ({ ...prev, [name]: newErrors[name as keyof ContactFormErrors] }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const allTouched = Object.keys(INITIAL_FORM).reduce(
      (acc, k) => ({ ...acc, [k]: true }), {}
    )
    setTouched(allTouched)

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    try {
      // Simulación de envío — reemplazar con fetch real a tu backend/servicio
      await new Promise((resolve) => setTimeout(resolve, 1800))
      setStatus('success')
      setForm(INITIAL_FORM)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'
  const charCount    = form.message.length

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      {/* Wave top */}
      <div className="contact__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C480,80 960,0 1440,30 L1440,0 L0,0 Z" fill="var(--color-sky-pale)" />
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <div className="contact__header animate-fade-up">
          <div className="chip chip-pink">💬 Hablemos</div>
          <h2 id="contact-title" className="section-title contact__title">
            ¿Querés saber más{' '}
            <span className="contact__title-accent">sobre Mi Bebé?</span>
          </h2>
          <p className="section-subtitle contact__subtitle">
            Estamos acá para responder todas tus consultas. Completá el formulario y te
            respondemos a la brevedad.
          </p>
        </div>

        <div className="contact__layout">
          {/* Info lateral */}
          <aside className="contact__info reveal reveal--left"
>
            <div className="contact__info-card">
              <h3 className="contact__info-title">Información de contacto</h3>

              <ul className="contact__info-list">
                {CONTACT_INFO.map((item) => (
                  <li key={item.label} className="contact__info-item">
                    <span className="contact__info-icon" aria-hidden="true">{item.icon}</span>
                    <div>
                      <span className="contact__info-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact__info-value contact__info-value--link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact__social">
                <p className="contact__social-label">Seguinos en redes</p>
                <div className="contact__social-links">
                  <a href="#" className="contact__social-btn" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="contact__social-btn" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="contact__social-btn" aria-label="WhatsApp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Elefante decorativo */}
            <div className="contact__deco" aria-hidden="true">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                {/* Nube */}
                <ellipse cx="60" cy="55" rx="50" ry="22" fill="var(--color-sky-light)" opacity="0.6" />
                <circle cx="35" cy="48" r="18" fill="var(--color-sky-light)" opacity="0.6" />
                <circle cx="65" cy="42" r="22" fill="var(--color-sky-light)" opacity="0.6" />
                <circle cx="90" cy="50" r="15" fill="var(--color-sky-light)" opacity="0.6" />
                {/* Texto */}
                <text x="60" y="58" textAnchor="middle" fontFamily="'Fredoka', sans-serif" fontSize="12" fontWeight="700" fill="var(--color-blue)">
                  ¡Escribinos!
                </text>
              </svg>
            </div>
          </aside>

          {/* Formulario */}
          <div className="contact__form-wrapper reveal reveal--right">
            {status === 'success' ? (
              <SuccessMessage onReset={() => setStatus('idle')} />
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
              >
                {status === 'error' && (
                  <div className="contact__form-error" role="alert">
                    ⚠️ Hubo un error al enviar el mensaje. Por favor intentá nuevamente.
                    <button type="button" onClick={() => setStatus('idle')} className="contact__form-error-dismiss">✕</button>
                  </div>
                )}

                {/* Row 1: Nombre + Email */}
                <div className="contact__row">
                  <Field
                    id="name"
                    label="Nombre completo"
                    required
                    error={errors.name}
                    touched={!!touched.name}
                  >
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tu nombre"
                      autoComplete="name"
                      className={`contact__input ${errors.name && touched.name ? 'contact__input--error' : ''}`}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      aria-invalid={!!(errors.name && touched.name)}
                      disabled={isSubmitting}
                    />
                  </Field>

                  <Field
                    id="email"
                    label="Email"
                    required
                    error={errors.email}
                    touched={!!touched.email}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="tu@email.com"
                      autoComplete="email"
                      className={`contact__input ${errors.email && touched.email ? 'contact__input--error' : ''}`}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      aria-invalid={!!(errors.email && touched.email)}
                      disabled={isSubmitting}
                    />
                  </Field>
                </div>

                {/* Row 2: Teléfono + Asunto */}
                <div className="contact__row">
                  <Field id="phone" label="Teléfono" error={errors.phone} touched={!!touched.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+54 11 0000-0000"
                      autoComplete="tel"
                      className={`contact__input ${errors.phone && touched.phone ? 'contact__input--error' : ''}`}
                      aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      aria-invalid={!!(errors.phone && touched.phone)}
                      disabled={isSubmitting}
                    />
                  </Field>

                  <Field id="subject" label="Asunto" required>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="contact__input contact__select"
                      disabled={isSubmitting}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Mensaje */}
                <Field
                  id="message"
                  label="Mensaje"
                  required
                  error={errors.message}
                  touched={!!touched.message}
                >
                  <div className="contact__textarea-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Contanos en qué podemos ayudarte..."
                      rows={5}
                      className={`contact__input contact__textarea ${errors.message && touched.message ? 'contact__input--error' : ''}`}
                      aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                      aria-invalid={!!(errors.message && touched.message)}
                      disabled={isSubmitting}
                    />
                    <span className={`contact__char-count ${charCount > 900 ? 'contact__char-count--warn' : ''}`}>
                      {charCount}/1000
                    </span>
                  </div>
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg contact__submit ${isSubmitting ? 'contact__submit--loading' : ''}`}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>Enviar mensaje ✉️</>
                  )}
                </button>

                <p className="contact__privacy">
                  🔒 Tu información es privada y no será compartida con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* --- Field wrapper accesible --- */
interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  touched?: boolean
  children: React.ReactNode
}

function Field({ id, label, required, error, touched, children }: FieldProps) {
  const showError = error && touched
  return (
    <div className={`contact__field ${showError ? 'contact__field--error' : ''}`}>
      <label htmlFor={id} className="contact__label">
        {label}
        {required && <span className="contact__required" aria-label="requerido"> *</span>}
      </label>
      {children}
      {showError && (
        <span id={`${id}-error`} className="contact__error-msg" role="alert">
          ⚠ {error}
        </span>
      )}
    </div>
  )
}

/* --- Mensaje de éxito --- */
function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="contact__success" role="status" aria-live="polite">
      <div className="contact__success-icon" aria-hidden="true">🎉</div>
      <h3 className="contact__success-title">¡Mensaje enviado!</h3>
      <p className="contact__success-text">
        Gracias por escribirnos. Te vamos a responder a la brevedad.
      </p>
      <button className="btn btn-primary" onClick={onReset}>
        Enviar otro mensaje
      </button>
    </div>
  )
}
