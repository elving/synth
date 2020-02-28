const path = require('path')

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  webpackFinal: async (config, { configType }) => {
    console.log('config ===> ', JSON.stringify(config, null, 2))

    config.watchOptions = {
      ...(config.watchOptions || {}),
      ignored: [
        ...((config.watchOptions && config.watchOptions.ignored) || []),
        /node_modules([\\]+|\/)+(?!@beatgig\/synth-*)/,
      ],
    }

    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve.alias || {}),
        '@beatgig/synth-core': path.resolve(
          __dirname,
          '../packages/synth-core/src',
        ),
        '@beatgig/synth-css': path.resolve(
          __dirname,
          '../packages/synth-css/src',
        ),
        '@beatgig/synth-react': path.resolve(
          __dirname,
          '../packages/synth-react/src',
        ),
        '@beatgig/synth-styled-components': path.resolve(
          __dirname,
          '../packages/synth-styled-components/src',
        ),
        '@beatgig/synth-tokens': path.resolve(
          __dirname,
          '../packages/synth-tokens/src',
        ),
        '@beatgig/synth-ui': path.resolve(
          __dirname,
          '../packages/synth-ui/src',
        ),
      },
    }

    return config
  },
}
