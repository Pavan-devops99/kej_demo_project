/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          blue: '#0080ff',
          purple: '#a855f7',
          pink: '#ff00ff',
          green: '#00ff00',
          yellow: '#ffff00',
          orange: '#ff8800',
          red: '#ff0040',
        },
        dark: {
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a24',
          600: '#24243a',
          500: '#2d2d44',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff50',
        'neon-blue': '0 0 10px #0080ff, 0 0 20px #0080ff50',
        'neon-purple': '0 0 10px #a855f7, 0 0 20px #a855f750',
        'neon-pink': '0 0 10px #ff00ff, 0 0 20px #ff00ff50',
        'neon-green': '0 0 10px #00ff00, 0 0 20px #00ff0050',
        'neon-red': '0 0 10px #ff0040, 0 0 20px #ff004050',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff50' },
          '100%': { boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff80' },
        }
      }
    },
  },
  plugins: [],
};
