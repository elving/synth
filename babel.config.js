module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-add-react-displayname',
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
}
