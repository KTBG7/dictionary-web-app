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
        light: '#FFFFFF',
        secondary: '#A445ED',
        subtext: '#757575',
        divider_color: '#E9E9E9'
      },
      backgroundColor:{
        light: '#FFFFFF',
        dark: '#050505',
        gray_mentor: '#757575',
        purple_mentor: '#A445ED',
        search: '#F4F4F4',
        darkSearch: '#1F1F1F'
      },
      borderColor: {
        error: '#FF5252',
      },
      stroke:{
        purple_mentor: '#A445ED',
        primary: '#838383'
      },
      boxShadowColor:{
        purple_mentor: '#A445ED',
      },
      padding:{
        font_button: '18px',
        navbar: '26px',
      },
      dropShadow:{
        dropdown: '0 4px 10px rgba(0, 0, 0, 0.25)',
        dark: '0 4px 10px rgba(164, 69, 237, 1)'
      }
    },
  },
  plugins: [],
}