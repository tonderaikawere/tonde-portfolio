import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://tonde-portfolio.vercel.app'
    : 'http://localhost:3000')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tonderai Kawere - Software Developer',
    template: '%s | Tonderai Kawere',
  },
  description:
    'Professional software developer specializing in web applications, mobile apps, and custom software solutions with 3+ years of experience',
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Tonderai Kawere',
    'Tonde',
    'Software Developer',
    'Web Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'JavaScript Developer',
    'TypeScript Developer',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Tonderai Kawere - Software Developer',
    description:
      'Professional software developer specializing in web applications, mobile apps, and custom software solutions with 3+ years of experience',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Tonderai Kawere - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tonderai Kawere - Software Developer',
    description:
      'Professional software developer specializing in web applications, mobile apps, and custom software solutions with 3+ years of experience',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      {
        url: '/meta.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/icon-light-32x32.png' }],
  },
}

export function generateViewport() {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#121212' },
    ],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tonderai Kawere',
              url: siteUrl,
              jobTitle: 'Software Developer',
              sameAs: [
                'https://github.com/tonderaikawere',
                'https://www.linkedin.com/in/tonderai-kawere-b29324268',
              ],
            }),
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
