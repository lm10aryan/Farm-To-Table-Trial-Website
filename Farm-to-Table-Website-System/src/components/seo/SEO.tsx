import type { Metadata } from 'next'
import { COMPANY_NAME } from '@/lib/constants'

type MetadataInput = {
  title?: string
  description?: string
}

const defaultDescription =
  'Farm to Table exports premium Nasik produce with process-driven quality, compliance, and cold-chain discipline.'

export function buildMetadata({ title, description }: MetadataInput = {}): Metadata {
  return {
    title: title ? `${title} | ${COMPANY_NAME}` : COMPANY_NAME,
    description: description || defaultDescription,
  }
}

export const baseMetadata: Metadata = {
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: defaultDescription,
  metadataBase: new URL('https://farmtotable.example'),
}
