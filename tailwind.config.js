/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        body_small: ['.875rem', '1.0625rem'],
        divider: ['2rem', '1.5']
      },
      textColor:{
        primary: '#2D2D2D',
        secondary: '#A445ED',
        subtext: '#757575',
        divider_color: '#E9E9E9'
      },
      backgroundColor:{
        light: '#FFFFFF',
        dark: '#050505',
        gray_mentor: '#757575',
        purple_mentor: '#A445ED',
      },
      stroke:{
        purple_mentor: '#A445ED',
        primary: '#838383'
      },
      padding:{
        font_button: '18px',
        navbar: '26px',
      }
    },
  },
  plugins: [],
}