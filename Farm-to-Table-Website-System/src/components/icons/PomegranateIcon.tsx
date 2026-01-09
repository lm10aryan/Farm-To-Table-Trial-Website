import type { SVGProps } from 'react'

export function PomegranateIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <defs>
        <radialGradient id="pomo-body" cx="55%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#ffd7e0" />
          <stop offset="40%" stopColor="#e14b5b" />
          <stop offset="100%" stopColor="#7b1820" />
        </radialGradient>
        <linearGradient id="pomo-shadow" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#601019" />
          <stop offset="100%" stopColor="#36070a" />
        </linearGradient>
        <linearGradient id="pomo-crown" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd27d" />
          <stop offset="100%" stopColor="#c08022" />
        </linearGradient>
      </defs>

      <path
        d="M17 36c0 11.598 9.402 21 21 21s21-9.402 21-21c0-5.97-2.17-11.03-5.813-14.78.516-2.053 1.2-4.442 1.2-4.442L50 14l-5-4-3 4-4-3-4 3-3-4-5 4 1.564 2.778s.659 2.369 1.2 4.442C19.206 24.892 17 30.022 17 36Z"
        fill="url(#pomo-body)"
      />
      <path
        d="M17.5 38.2c2.6 7.9 10.3 14.3 20.5 14.3 10.545 0 18.488-7.124 20.764-15.453-4.134 2.94-9.566 4.753-15.764 4.753-9.324 0-18.11-4.497-25.5-3.6Z"
        fill="url(#pomo-shadow)"
        opacity="0.6"
      />
      <path
        d="M24.2 25.8c2 1.8 4.043 2.7 7.108 2.7 4.056 0 5.897-1.842 8.892-2.7"
        stroke="#ffb1c7"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      {[{ cx: 24, cy: 38 }, { cx: 29, cy: 33 }, { cx: 36, cy: 41 }, { cx: 41, cy: 35 }].map((seed, idx) => (
        <circle key={idx} cx={seed.cx} cy={seed.cy} r="2.5" fill="#ffd2dd" fillOpacity="0.6" />
      ))}
      <path
        d="M26 15c3 1.8 5.5 2.4 8 2.4s5-.6 8-2.4l-3.5-5.5L34 12l-4.5-2.5Z"
        fill="url(#pomo-crown)"
      />
    </svg>
  )
}
