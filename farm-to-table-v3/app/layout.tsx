import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Farm to Table Trading LLP',
  description: 'Premium Indian produce. Engineered for consistency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <nav className="sticky top-0 z-50 bg-base-black/95 backdrop-blur-sm border-b border-type-tertiary">
          <div className="section-container">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-body-lg text-type-primary font-semibold hover:text-olive-400 transition-colors">
                Farm to Table Trading
              </a>
              <div className="flex gap-8">
                <a href="/products" className="text-body-md text-type-secondary hover:text-type-primary transition-colors">
                  Products
                </a>
                <a href="/about" className="text-body-md text-type-secondary hover:text-type-primary transition-colors">
                  About
                </a>
                <a href="/partnership" className="text-body-md text-type-secondary hover:text-type-primary transition-colors">
                  Partnership
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
