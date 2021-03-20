module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { 
        loose: true ,
        ... process.env.BABEL_ENV === 'es' ? { modules: false } : {}
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['babel-plugin-styled-components'],
}
