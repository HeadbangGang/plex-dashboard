module.exports = {
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        }
      }
    ],
    '@babel/react'
  ]
}
