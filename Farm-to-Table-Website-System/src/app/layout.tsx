import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { baseMetadata } from '@/components/seo/SEO'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-base-black text-type-primary antialiased">
        <div className="flex min-h-screen flex-col">
          <nav className="sticky top-0 z-50 border-b border-type-tertiary bg-base-black/95 backdrop-blur-sm">
            <div className="section-container flex h-16 items-center justify-between">
              <a href="/" className="text-body-lg font-semibold text-type-primary transition-colors hover:text-olive-400">
                Farm to Table Trading
              </a>
              <div className="flex gap-8 text-body-md text-type-secondary">
                <a href="/products" className="transition-colors hover:text-type-primary">
                  Products
                </a>
                <a href="/work-with-us" className="transition-colors hover:text-type-primary">
                  Work With Us
                </a>
                <a href="/faq" className="transition-colors hover:text-type-primary">
                  FAQ
                </a>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-type-tertiary py-6 text-center text-body-sm text-type-secondary">
            © {new Date().getFullYear()} Farm to Table Trading LLP. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
