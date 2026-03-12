import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import config from '@/payload.config'
import './styles.css'

type Service = { id: string; icon: string; title: string; description?: string }

export default async function HomePage() {
  const payload = await getPayload({ config: await config })

  let settings: Record<string, unknown> | null = null
  try {
    settings = await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    // Global inaccessible (migration non appliquée) — on utilise les valeurs par défaut
  }

  const siteName = settings?.siteName ?? 'Mon Entreprise'
  const tagline = settings?.tagline ?? 'Votre partenaire de confiance'
  const primaryColor = settings?.primaryColor ?? '#2563eb'
  const heroTitle = settings?.heroTitle ?? 'Bienvenue sur notre site'
  const heroSubtitle =
    settings?.heroSubtitle ??
    'Nous vous accompagnons dans tous vos projets avec expertise et passion. Contactez-nous pour en savoir plus.'
  const heroCTA = settings?.heroCTA ?? 'Nous contacter'
  const services = settings?.services?.length
    ? settings.services
    : [
        { id: '1', icon: '⚡', title: 'Service 1', description: 'Décrivez ici votre premier service principal.' },
        { id: '2', icon: '🎯', title: 'Service 2', description: 'Décrivez ici votre deuxième service principal.' },
        { id: '3', icon: '💡', title: 'Service 3', description: 'Décrivez ici votre troisième service principal.' },
      ]
  const aboutTitle = settings?.aboutTitle ?? 'À propos de nous'
  const aboutText =
    settings?.aboutText ??
    "Nous sommes une entreprise passionnée par notre métier. Notre équipe dédiée met tout en œuvre pour vous offrir un service de qualité et vous accompagner dans la réalisation de vos projets. Forts de notre expérience, nous avons su bâtir une relation de confiance avec nos clients."
  const contactEmail = settings?.contactEmail ?? null
  const contactPhone = settings?.contactPhone ?? null
  const contactAddress = settings?.contactAddress ?? null

  const cssVars = { '--primary': primaryColor } as React.CSSProperties

  return (
    <div className="site" style={cssVars}>

      {/* ── Header ── */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-name">{siteName}</span>
            {tagline && <span className="logo-tagline">{tagline}</span>}
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
            <Link href="/admin" className="nav-admin">Admin ↗</Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="hero-title">{heroTitle}</h1>
          <p className="hero-subtitle">{heroSubtitle}</p>
          <a href="#contact" className="btn-primary">{heroCTA}</a>
        </div>
        <div className="hero-bg" aria-hidden="true" />
      </section>

      {/* ── Services ── */}
      <section className="section services" id="services">
        <div className="container">
          <h2 className="section-title">Nos services</h2>
          <div className="services-grid">
            {(services as Service[]).map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                {service.description && (
                  <p className="service-description">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── À propos ── */}
      <section className="section about" id="about">
        <div className="container about-inner">
          <div className="about-text">
            <h2 className="section-title">{aboutTitle}</h2>
            <p>{aboutText}</p>
          </div>
          <div className="about-visual" aria-hidden="true">
            <div className="about-badge">{siteName.charAt(0)}</div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section contact" id="contact">
        <div className="container contact-inner">
          <h2 className="section-title">Nous contacter</h2>
          <div className="contact-info">
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{contactEmail}</span>
              </a>
            )}
            {contactPhone && (
              <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{contactPhone}</span>
              </a>
            )}
            {contactAddress && (
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{contactAddress}</span>
              </div>
            )}
            {!contactEmail && !contactPhone && !contactAddress && (
              <p className="contact-placeholder">
                Renseignez vos coordonnées dans{' '}
                <Link href="/admin">l&apos;administration</Link> →{' '}
                <strong>Paramètres du site</strong>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {siteName}</span>
          <Link href="/admin" className="footer-admin-link">
            Gérer le site ↗
          </Link>
        </div>
      </footer>

    </div>
  )
}
