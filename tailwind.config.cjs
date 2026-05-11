/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00C68A',
        },
        dark: '#0b1b29',
        accent: '#0fb786',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        // CWV CLS: Include size-matched fallback font to prevent layout shift during font swap
        sans: [
          'var(--font-poppins)',
          'Poppins-Fallback',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  safelist: [
    // Dynamic color classes
    'bg-primary',
    'text-primary',
    'border-primary',
    'bg-dark',
    'text-dark',
    'border-dark',
    'bg-accent',
    'text-accent',
    'border-accent',
    // Dynamic spacing
    'p-4',
    'p-6',
    'p-8',
    'px-4',
    'px-6',
    'px-8',
    'py-4',
    'py-6',
    'py-8',
    // Dynamic flex/grid
    'flex',
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    // Dynamic text sizes
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    // Custom utilities
    'hero-overlay',
    'glass-card',
  ],
  plugins: [],
};
