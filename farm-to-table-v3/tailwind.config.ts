import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Base System
        base: {
          black: '#0A0A0B',
          'off-black': '#121214',
          'charcoal': '#1A1A1C',
        },

        // Olive System (Primary Brand)
        olive: {
          50: '#F5F6F3',
          100: '#E8EBE3',
          200: '#D1D6C7',
          300: '#B4BCA3',
          400: '#95A080',
          500: '#6B7A52', // Primary olive glow
          600: '#556241',
          700: '#404A32',
          800: '#2D3524',
          900: '#1C2116',
        },

        // Semantic Colors
        status: {
          success: '#4ADE80',
          warning: '#FBBF24',
          error: '#EF4444',
          info: '#60A5FA',
        },

        // Accent System
        accent: {
          gold: '#D4AF37',
          steel: '#94A3B8',
          copper: '#B87333',
        },

        // Type System
        type: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          tertiary: '#525252',
          inverse: '#0A0A0B',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],

        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],

        'data-lg': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
        'data-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
        'data-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },

      boxShadow: {
        'olive-glow': '0 0 20px rgba(107, 122, 82, 0.3)',
        'olive-glow-strong': '0 0 30px rgba(107, 122, 82, 0.5)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'inset-subtle': 'inset 0 1px 2px rgba(0, 0, 0, 0.5)',
      },

      backdropBlur: {
        'data-overlay': '20px',
      },

      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
