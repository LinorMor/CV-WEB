import { Inter, Playfair_Display, Heebo } from 'next/font/google'
import './globals.css'

// Display + body + Hebrew fonts, exposed as CSS variables consumed by globals.css.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://cv-web-black.vercel.app'),
  title: 'Linor Mor — Project Management & PMO',
  description:
    'Linor Mor — Project management & control on an Industrial Engineering backbone. 20x growth, KPI dashboards, Excel & Jira. Open to PMO and project-management roles.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Linor Mor — Project Management & PMO',
    description:
      'Project management & control · KPIs · Excel & Jira · Industrial Engineering. Open to PMO and project-management roles.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0A0E1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${playfair.variable} ${heebo.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
