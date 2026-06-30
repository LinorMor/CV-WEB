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
  metadataBase: new URL('https://linor-mor-cv.vercel.app'),
  title: 'Linor Mor — Product Manager',
  description:
    'Linor Mor — Product Manager. 20x growth, GTM execution & marketing operations. Open to Project Management, Marketing Operations and Sales & Marketing roles.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Linor Mor — Product Manager',
    description:
      '20x growth · GTM execution · Marketing Operations. Open to Project Management, Marketing Operations and Sales & Marketing roles.',
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
