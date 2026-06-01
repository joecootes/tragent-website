/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#2B3252',
          'navy-dark': '#1E2440',
          'navy-mid': '#353D5F',
          'navy-light': '#4A5478',
          gray: '#F4F5F8',
          text: '#111111',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0M0 0l40 40' stroke='%23ffffff' stroke-opacity='.03' stroke-width='1'/%3E%3C/svg%3E\")",
        'gradient-subtle': 'linear-gradient(180deg, #FFFFFF 0%, #F4F5F8 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(74,84,120,0.35) 0%, transparent 70%)',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.07)',
        'card-hover': '0 2px 4px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.11)',
        'navy': '0 4px 24px rgba(43,50,82,0.25)',
        'panel': '0 8px 48px rgba(0,0,0,0.14)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
