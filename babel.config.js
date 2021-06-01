module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typesc',
    [
      '@babel/preset-react', {
        runtime: 'automatic'
      }
    ]
  ]
}