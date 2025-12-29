import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

type MediaFrameProps = {
  aspect?: '16:10' | '4:3' | 'square'
  frameClassName?: string
  imageClassName?: string
  glow?: boolean
} & Omit<ImageProps, 'fill'>

const aspectClassName: Record<NonNullable<MediaFrameProps['aspect']>, string> = {
  '16:10': 'aspect-[16/10]',
  '4:3': 'aspect-[4/3]',
  square: 'aspect-square',
}

export function MediaFrame({
  aspect = '4:3',
  frameClassName,
  imageClassName,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  alt,
  glow = false,
  ...imageProps
}: MediaFrameProps) {
  return (
    <div className={cn('relative', frameClassName)}>
      {glow && (
        <div
          className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(164,80,28,0.45),transparent_65%)] opacity-70 blur-3xl"
          aria-hidden
        />
      )}
      <div className="relative rounded-[1.9rem] border border-white/30 bg-gradient-to-b from-white/35 via-white/10 to-white/0 p-3 shadow-[0_25px_60px_rgba(18,14,10,0.18)] backdrop-blur-sm">
        <div
          className={cn(
            'relative overflow-hidden rounded-[1.25rem] border border-white/40 bg-muted/10',
            aspectClassName[aspect]
          )}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-gradient-to-b from-white/15 to-transparent mix-blend-overlay" />
          <Image
            {...imageProps}
            alt={alt}
            fill
            sizes={sizes}
            className={cn('object-cover', imageClassName)}
          />
        </div>
      </div>
    </div>
  )
}
