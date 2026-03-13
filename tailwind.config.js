/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
        },
        secondary: '#ec4899',
        accent: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        // Dark theme colors
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
        'bg-tertiary': '#334155',
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'border-color': '#475569',
        'card-bg': 'rgba(30, 41, 59, 0.8)',
        'overlay-bg': 'rgba(15, 23, 42, 0.9)',
        // Light theme colors
        'light-bg-primary': '#ffffff',
        'light-bg-secondary': '#f8fafc',
        'light-bg-tertiary': '#e2e8f0',
        'light-text-primary': '#0f172a',
        'light-text-secondary': '#475569',
        'light-text-muted': '#64748b',
        'light-border-color': '#cbd5e1',
        'light-card-bg': 'rgba(255, 255, 255, 0.9)',
        'light-overlay-bg': 'rgba(255, 255, 255, 0.95)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
      animation: {
        'word-appear': 'wordAppear 0.5s forwards',
        'title-slide-in': 'titleSlideIn 0.6s forwards',
        'divider-grow': 'dividerGrow 1s forwards',
        'paragraph-fade-in': 'paragraphFadeIn 0.8s forwards',
        'highlight-grow': 'highlightGrow 1s forwards',
        'profile-float': 'profileFloat 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'anime-float': 'animeFloat 4s ease-in-out infinite',
        'anime-glow': 'animeGlow 3s ease-in-out infinite',
        'sparkle1': 'sparkle1 2s infinite',
        'sparkle2': 'sparkle2 2.5s infinite',
        'sparkle3': 'sparkle3 1.8s infinite',
        'sparkle4': 'sparkle4 2.2s infinite',
        'sparkle5': 'sparkle5 1.5s infinite',
        'float-particle1': 'floatParticle1 3s infinite',
        'float-particle2': 'floatParticle2 4s infinite',
        'float-particle3': 'floatParticle3 3.5s infinite',
        'float-particle4': 'floatParticle4 2.5s infinite',
        'float-particle5': 'floatParticle5 4.5s infinite',
        'float-particle6': 'floatParticle6 3.2s infinite',
      },
      keyframes: {
        wordAppear: {
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        titleSlideIn: {
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        dividerGrow: {
          to: { width: '100%' },
        },
        paragraphFadeIn: {
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        highlightGrow: {
          to: { width: '100%' },
        },
        profileFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '75%': { transform: 'translateY(5px) rotate(-2deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        animeFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(3deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-2deg)' },
          '75%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        animeGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        sparkle1: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle2: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle3: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle4: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle5: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        floatParticle1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -15px)' },
        },
        floatParticle2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-12px, 10px)' },
        },
        floatParticle3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(15px, 8px)' },
        },
        floatParticle4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-8px, -12px)' },
        },
        floatParticle5: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -5px)' },
        },
        floatParticle6: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-15px, 15px)' },
        },
      },
    },
  },
  plugins: [],
}
