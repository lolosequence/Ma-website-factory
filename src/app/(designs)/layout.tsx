import React from 'react'
import VarianteSwitcher from '@/components/VarianteSwitcher'

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <VarianteSwitcher />
      </body>
    </html>
  )
}
