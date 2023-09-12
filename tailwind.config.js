/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora: ['Lora', 'serif'],
        lora_italic: ['LoraItalic', 'serif'],
        inter: ['Inter', 'sans-serif'],
        inter_italic: ['InterItalic', 'sans-serif'],
        inconsolata:['Inconsolata', 'mono']
      },
      fontSize:{
        heading_large: ['4rem', '4.8125rem'],
        heading_medium: ['1.5rem', '1.8125rem'],
        heading_small: ['1.25rem', '1.5rem'],
        body_medium: ['1.125rem', '1.5rem'],
        body_small: ['.875rem', '1.0625rem']
      },
      textColor:{
        primary: '#2D2D2D',
        secondary: '#A445ED',
        subtext: '#757575'
      },
      backgroundColor:{
        light: '#FFFFFF',
        dark: '#050505'
      }
    },
  },
  plugins: [],
}