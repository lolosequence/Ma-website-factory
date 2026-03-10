'use client'

import { useEffect, useState } from 'react'

const VARIANTES = [
  { id: 'a', label: 'A', path: '/variante-a', description: 'Variante A' },
  { id: 'b', label: 'B', path: '/variante-b', description: 'Variante B' },
  { id: 'c', label: 'C', path: '/variante-c', description: 'Variante C' },
]

export default function VarianteSwitcher() {
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  const current = VARIANTES.find((v) => pathname.startsWith(v.path))

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
        fontFamily: 'system-ui, sans-serif',
        isolation: 'isolate',
      }}
    >
      {/* Label */}
      <div
        style={{
          background: 'rgba(0,0,0,0.75)',
          color: '#fff',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: '20px',
          backdropFilter: 'blur(8px)',
          whiteSpace: 'nowrap',
        }}
      >
        Preview client — {current?.description ?? 'Choisir une variante'}
      </div>

      {/* Boutons */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(0,0,0,0.75)',
          padding: '6px',
          borderRadius: '50px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {VARIANTES.map((v) => {
          const isActive = pathname.startsWith(v.path)
          return (
            <a
              key={v.id}
              href={v.path}
              title={v.description}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                background: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#000000' : 'rgba(255,255,255,0.6)',
                border: isActive ? 'none' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {v.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
