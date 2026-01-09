import Link from 'next/link'
import { Container } from './Container'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants'
import { Divider } from '@/components/ui/Divider'
import { SiteLogo } from '@/components/SiteLogo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'System', href: '/system' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-surface/80">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.25fr_1fr_1fr]">
        <div className="space-y-4">
          <SiteLogo variant="full" size="md" />
          <p className="text-lg font-semibold text-text">We focus on doing the basics right — and staying close to the work.</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Navigation</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Talk to us</p>
          <Link href={`mailto:${CONTACT_EMAIL}`} className="block text-text">
            {CONTACT_EMAIL}
          </Link>
          <Link href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`} className="block text-text">
            WhatsApp: {WHATSAPP_NUMBER}
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Regional focus</p>
            <p className="text-sm text-text">Middle East, Europe & Southeast Asia</p>
          </div>
        </div>
      </Container>
      <Container className="py-4 text-xs text-muted">
        <Divider className="mb-3" />
        © {new Date().getFullYear()} Farm to Table. Operating partners only.
      </Container>
    </footer>
  )
}
