import Detailse from './src/Costomer/Detailse';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(26, 26, 26)',
        Softgreen :'#A8D5BA',
        Lightearthybeige:'#F5F5DC',
        Skyblue:'#A3D8F4',
        biscate:'#fff8ed',
        ilamgreen:"#0c4d38b3",
        
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Custom sans-serif font
        serif: ['Playfair Display', 'serif'], // Custom serif font
        custom: ['"Your Custom Font"', 'sans-serif'], // Replace with your custom font
        handwriting: ['Playwrite BE VLG Guides', 'cursive'],
        rubikvinyl: ['"Rubik Vinyl"', 'cursive'],
      
      },
    },
  },
  plugins: [],
};
