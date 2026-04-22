/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FF9D00',
        'text-primary': '#0D1525',
        'text-muted': '#666666',
        surface: '#F2F2F2',
        'border-muted': '#CCCCCC',
        'border-strong': '#999999',
        'overlay-white': 'rgba(255,255,255,0.20)',
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'card-title': ['20px', { lineHeight: '1.3', fontWeight: '700' }],
        'brand-name': ['20px', { lineHeight: '1', fontWeight: '800' }],
        'nav': ['16px', { lineHeight: '1', fontWeight: '500' }],
        'sub': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'label': ['12px', { lineHeight: '1', fontWeight: '500' }],
      },
      letterSpacing: {
        'brand': '2.4px',
        'label': '0.48px',
      },
      borderRadius: {
        'card': '16px',
        'card-image': '16px',
        'filter': '12px',
        'pill': '638px',
      },
      boxShadow: {
        'card': 'inset 4px 4px 16px rgba(0,0,0,0.06)',
        'card-image': 'inset 4px 4px 8px rgba(0,0,0,0.06), 0px 4px 12px rgba(0,0,0,0.06)',
        'baza': 'inset 0px 0px 16px rgba(0,0,0,0.16)',
        'card-hover': '0px 8px 32px rgba(0,0,0,0.10)',
      },
      borderWidth: {
        '3': '3px',
      },
      aspectRatio: {
        'card-image': '411 / 308',
      },
      maxWidth: {
        'container': '1536px',
        'hero-text': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};
