/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   fade: 'fade 1.5s'
      // },
      // keyframes: {
      //   fade: {
      //     from: { opacity: .4 },
      //     to: { opacity: 1 },
      //   },
      // },

      screens: {
        '2lq': '1365px',
        '2ll': '1500px',
        '2la': '1080px',
        '2ls': '1050px',
        'ms': '930px',
        'mo': '990px',
        'mm': '960px',
        'mw': '913px',
        'mv': '900px',
        'mr': '800px',
        'ma': '840px',
        'mj': '853px',
        'mk': '858px',
        'mp': '700px',
        'mz': '890px',
        'ss': '680px',
        'sy': '650px',
        'sp': '600px',
        'sw': '689px',
        'sd': '530px',
        'sx': '550px',
        'se': '500px',
        'sa': '400px',
        'sv': '430px',
        'sb': '415px',
        'st': '350px',
        'sl': '300px',
      },
    },
    plugins: [],
  }
}

