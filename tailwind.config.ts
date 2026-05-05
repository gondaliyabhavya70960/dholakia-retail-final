import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1426',
        navy: '#14275C',
        ocean: '#08203D',
        offwhite: '#F5F5F2',
        ivory: '#FAFAF7',
        sky: '#D9E0E8',
        muted: '#6B7A90',
        electric: '#3B6FFF',
        royal: '#14275C',
        bone: '#E8E5DD'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.18em'
      }
    }
  },
  plugins: []
};
export default config;
