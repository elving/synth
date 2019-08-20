export const tokens = {
  global: {
    /**
     * Colors
     */
    Porcelain: '#fcfdfd',
    Thunder: '#1E1C21',
    BalticSea: '#212025',
    Shark: '#2f3136',
    Mako: '#444850',
    Abbey: '#4C5058',
    ShuttleGray: '#5B6066',

    /**
     * Spacing
     */
    spacing: [2, 8, 14, 20, 26, 32],

    /**
     * Typography
     */
    fontSizes: [12, 14, 16, 18, 20, 22, 24, 26],
    fontWeights: [300, 400, 600],
  },

  color: {
    background: {
      control: {
        active: '@Mako',
        default: '@Abbey',
        focus: '@ShuttleGray',
        hover: '@ShuttleGray',
      },

      card: '@Shark',
      header: '@Shark',
    },

    border: {
      base: 'transparent',
      input: '@ShuttleGray',
    },

    outline: {
      control: 'rgba(255, 255, 255, 0.15)',
    },

    text: {
      base: '@Porcelain',
    },
  },

  size: {
    border: {
      base: 1,
      input: 1,
    },

    radius: {
      base: 4,
    },

    outline: {
      base: 1,
    },
  },

  space: {
    margin: {
      formRow: [0, 0, '@spacing.1'],
      heading: [0, 0, '@spacing.2'],
    },

    padding: {
      card: '@spacing.4',
      control: ['@spacing.1', '@spacing.2'],
      header: ['@spacing.2', '@spacing.3'],
    },

    outline: {
      base: 2,
    },
  },

  style: {
    border: {
      base: 'solid',
      input: 'solid',
    },

    shadow: {
      outlineControl: ['0 0 0 1px inset', '@ShuttleGray'],
    },

    outline: {
      base: 'solid',
    },
  },

  typography: {
    font: {
      base: [
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(', '),
    },

    lineHeight: {
      base: 1.5,
      heading: 1.2,
    },

    size: {
      base: '@fontSizes.1',
      control: '@fontSizes.1',
      heading: '@fontSizes.6',
      text: '@fontSizes.2',
    },

    weight: {
      base: '@fontWeights.1',
      control: '@fontWeights.2',
      heading: '@fontWeights.2',
    },
  },
}
