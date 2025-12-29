import Link from 'next/link'
import { Container } from './Container'
import { CONTACT_EMAIL, REGIONS_SERVED, WHATSAPP_NUMBER } from '@/lib/constants'
import { ComplianceBadges } from '@/components/ui/ComplianceBadges'
import { Divider } from '@/components/ui/Divider'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'System', href: '/system' },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const assuranceBadges = ['Food Safety Program', 'Residue Monitoring', 'Traceability', 'Cold Chain SOP']

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-surface/80">
      <Container className="grid gap-8 py-12 md:grid-cols-[1.25fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Farm to Table</p>
          <p className="text-lg font-semibold text-text">Process-first export desk out of Nasik.</p>
          <p className="text-sm text-muted">
            Field data, residue readings, and cold-chain telemetry are logged before vessels depart so buyers
            receive evidence-backed cartons.
          </p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Compliance approach</p>
            <p className="mt-1 text-sm text-text">
              Independent field checks, residue monitoring, and cold-chain SOPs with documentation ready for audits.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">Assurance lanes</p>
            <ComplianceBadges badges={assuranceBadges} className="mt-2" />
          </div>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Regions served</p>
            <p className="text-sm text-text">{REGIONS_SERVED.join(' · ')}</p>
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
