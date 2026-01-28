import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ütü Kapında - Kuru Temizleme ve Ütü Servisi',
  description: 'Kapıdan kapıya kuru temizleme ve ütü hizmeti',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#F97316',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}