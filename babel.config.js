module.exports = function config(api) {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', { loose: true },],
      '@babel/preset-react',
    ],
    plugins: ['babel-plugin-styled-components'],
  }
}
