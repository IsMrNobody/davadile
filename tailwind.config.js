/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          500: 'var(--primary-color)'
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          500: 'var(--secondary-color)'
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          500: 'var(--accent-color)'
        },
        dark: {
          DEFAULT: 'var(--dark-color)',
          900: 'var(--dark-color)',
          800: '#161c25',
          700: '#1f2937'
        },
        light: {
          DEFAULT: 'var(--light-color)'
        }
      }
    }
  },
  plugins: [],
}