import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5546ff',
        secondary: '#bfff00',
      },
      animation: {
        'rotate-eyes': 'rotateEyes 10s infinite linear',
        'wonder-face':
          'wonderFace 4s infinite cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      keyframes: {
        rotateEyes: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        wonderFace: {
          '0%': {
            height: '40px',
          },
          '50%': {
            height: '80px',
          },
          '100%': {
            height: '40px',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
