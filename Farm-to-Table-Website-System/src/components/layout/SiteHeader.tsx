'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Container } from './Container'
import { cn } from '@/lib/utils'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { SiteLogo } from '@/components/SiteLogo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Work With Us', href: '/work-with-us' },
  { label: 'FAQ', href: '/faq' },
]

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface shadow-[0_6px_25px_rgba(22,17,11,0.06)]">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex flex-shrink-0 items-center" aria-label="Farm to Table">
          <SiteLogo variant="compact" size="lg" className="hidden md:inline-flex" />
          <SiteLogo variant="compact" size="sm" className="md:hidden" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium text-muted transition hover:text-text',
                isActive(item.href) && 'text-text'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="sm">
            Request allocation plan
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-text md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-text" />
            <span className="block h-0.5 w-4 bg-text" />
            <span className="block h-0.5 w-5 bg-text" />
          </div>
        </button>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-transparent"
            role="presentation"
            onClick={closeMenu}
          />
          <div className="fixed right-4 top-4 w-72 rounded-2xl border border-border/70 bg-surface p-4 shadow-md">
            <div className="flex items-center justify-between pb-3">
              <p className="text-sm font-semibold text-text">Navigate</p>
              <button
                type="button"
                className="rounded-full border border-border/70 px-2 py-1 text-xs uppercase tracking-wide"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-muted/10 hover:text-text',
                    isActive(item.href) && 'bg-muted/10 text-text'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border/70 pt-4">
              <Button href="/contact" size="md" onClick={closeMenu}>
                Request allocation plan
              </Button>
              <Button href={whatsappLink} variant="secondary" size="md" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                Block export slots
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
