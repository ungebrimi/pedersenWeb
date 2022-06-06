module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#282A2F',
      'fonts': '#EAEAEA',
      'hero': '#FCFCFC',
    },
    fontFamily: {
      regular: ['lato', 'sans-serif'],
      good: ['good_times', 'sans-serif']
    },
    fontSize: {
      'herolg': ['102px', '87px'],
      'heromd': ['76px', '64px'],
      'herosm': ['30px', '27px'],
      'titlelg': '60px',
      'titlemd': '36px',
      'titlesm': '24px',
      'subtitlelg': '42px',
      'subtitlemd': '30px',
      'subtitlesm': '21px',
      'bodylg': ['24px', '36px'],
      'bodymd': ['21px', '36px'],
      'bodysm': ['16px', '24px'],
      'labellg': '21px',
      'labelmd': '21px',
      'labelsm': '16px',
    },
    padding: {
      'paddingsm': '21px',
      'paddingmd': '44.5px',
      'paddinglg': '136px',
      'spacersm': '43px',
      'spacermd': '54.5px',
      'spacerlg': '101.5px'

    },
    extend: {},
  },
  plugins: [],
}