export const tokens = {
  global: {
    /**
     * Colors
     */
    Porcelain: '#FCFDFD',
    Thunder: '#1E1C21',
    BalticSea: '#212025',
    Shark: '#2F3136',
    Mako: '#444850',
    Abbey: '#4C5058',
    ShuttleGray: '#5B6066',
    Stone: '#71777B',
    Oslo: '#878E8F',
    BeatGig: ['#FAC62A', '#EFB506'],

    /**
     * Sizes
     */
    icons: [18, 20, 22, 24, 26, 28],
    // icons: [24, 32, 40, 48, 56, 64],
    avatars: [24, 32, 40, 48, 56, 64],

    /**
     * Spacing
     */
    spacing: [2, 8, 14, 20, 26, 32],

    /**
     * Typography
     */
    fontSizes: [12, 14, 16, 18, 20, 22, 24, 26],
    fontWeights: [300, 500, 600, 700],
  },

  color: {
    background: {
      avatar: '@ShuttleGray',

      control: {
        active: '@Mako',
        default: '@Abbey',
        focus: '@ShuttleGray',
        hover: '@ShuttleGray',
      },

      card: '@Shark',
      header: '@Shark',

      input: {
        default: 'transparent',
        focus: '@ShuttleGray',
      },
    },

    border: {
      base: 'transparent',
      control: 'transparent',

      input: {
        default: '@Abbey',
        focus: '@ShuttleGray',
      },
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
      control: 2,
      input: 2,
    },

    radius: {
      base: 4,
      avatar: '50%',
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
      control: 'solid',
      input: 'solid',
    },

    shadow: {
      avatar: ['0 0 0 1px', '@Oslo'],
      outlineControl: ['0 0 0 1px inset', '@ShuttleGray'],
    },

    outline: {
      base: 'solid',
    },
  },

  typography: {
    decoration: {
      link: {
        default: 'none',
        hover: 'none',
      },
    },

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
      base: '@fontWeights',
      link: '@fontWeights.1',
      control: '@fontWeights.2',
      heading: '@fontWeights.2',
    },
  },
}
