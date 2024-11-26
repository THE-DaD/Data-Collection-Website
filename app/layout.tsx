import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'בית הספר לרפואה',
  description: 'מצוינות בחינוך רפואי, מחקר וטיפול בחולים.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}

