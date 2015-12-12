import Typography from 'typography';

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  headerFontFamily: 'Roboto, sans-serif',
  bodyFontFamily: 'Roboto, sans-serif',
  bodyWeight: 300,
  headerWeight: 300,
  boldWeight: 400,
  modularScales: [
    {
      "scale": "diminished fourth"
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
