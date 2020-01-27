const TOKENS_COLOR = {
  aliases: {
    base: '#e5e5e5',
    primary: '#1589ee',
  },

  background: {
    primaryControl: '@primary',
    secondaryControl: {
      description: 'Some random description.',
      release: '1.1.34',
      value: '@base',
    },
  },

  text: {
    link: {
      disabled: 'rgba(255, 255, 255, 0.75)',
    },
  },
}

const TOKENS_SIZE = {
  maxWidth: {
    smContainer: 200,
    mdContainer: {
      value: 400,
    },
  },
}

const TOKENS_STYLE = {
  opacity: {
    control: {
      default: {
        description: 'The default opacity for controls.',
        release: '1.0.0',
        value: 1,
      },

      disabled: {
        description: 'The default opacity for controls that are disabled.',
        release: '1.0.0',
        value: 0.35,
      },
    },
  },
}

const TOKENS_SPACE = {
  aliases: {
    scale: [4, 8, 12, 16, 20],
  },

  padding: {
    control: ['@scale.1', '@scale.2'],
    input: '@scale.1 @scale.3',
  },
}

const TOKENS = {
  color: TOKENS_COLOR,
  size: TOKENS_SIZE,
  space: TOKENS_SPACE,
  style: TOKENS_STYLE,
}

export { TOKENS }
