export const tokens = {
  global: {
    /**
     * Colors
     */
    Porcelain: '#FCFDFD',
    Thunder: '#1E1C21',
    BalticSea: '#212025',
    Shark: '#2F3136',
    Tuna: '#393C40',
    Mako: '#444850',
    Abbey: '#4C5058',
    ShuttleGray: '#5B6066',
    Stone: '#71777B',
    Oslo: '#878E8F',
    BeatGig: ['#FAC62A', '#EFB506'],
    Error: ['#C5493A', '#B0422F'],
    Success: ['#00BB53', '#00A76D'],

    /**
     * Sizes
     */
    icons: [16, 18, 20, 22, 24, 26],
    avatars: [24, 32, 40, 48, 56, 64],
    cards: [240, 480, 960],

    /**
     * Spacing
     */
    spacing: [2, 8, 14, 20, 26, 32],

    /**
     * Typography
     */
    headings: [18, 22, 26, 30, 34, 38],
    fontSizes: [12, 14, 16, 18, 20, 22, 24, 26],
    fontWeights: [300, 400, 500, 600, 700],
  },

  color: {
    background: {
      avatar: '@ShuttleGray',
      card: '@Shark',
      header: '@Shark',
      modalOverlay: '@Thunder',
      popup: '@Shark',
      tag: '@Stone',

      control: {
        active: '@Mako',
        default: '@Abbey',
        focus: '@Mako',
        hover: '@ShuttleGray',
      },

      input: {
        default: 'transparent',
        focus: '@Abbey',
        hover: 'transparent',
      },

      popupItem: {
        default: '@Shark',
        hover: '@Tuna',
      },
    },

    border: {
      base: 'transparent',
      control: 'transparent',

      input: {
        default: '@Abbey',
        hover: '@Stone',
        focus: '@Stone',
      },

      popup: '@Abbey',
    },

    outline: {
      control: 'rgba(255, 255, 255, 0.15)',
    },

    text: {
      base: '@Porcelain',
      meta: '@Oslo',
      status: '@Oslo',
    },
  },

  size: {
    border: {
      base: 1,
      control: 2,
      input: 2,
      popup: 1,
    },

    radius: {
      base: 4,
      rounded: '50%',
      tag: '50rem',
    },

    outline: {
      base: 1,
    },

    width: {
      modal: '100%',
    },

    maxWidth: {
      modal: '@cards.1',
    },
  },

  space: {
    margin: {
      formRow: [0, 0, '@spacing.1'],
      heading: [0, 0, '@spacing.2'],
      paragraph: '0 0 @spacing.2',
    },

    padding: {
      card: '@spacing.2',
      control: ['@spacing.1', '@spacing.2'],
      header: ['@spacing.2', '@spacing.3'],
      modalOverlay: '@spacing.5',
      popupItem: ['@spacing.1', '@spacing.2'],
      tag: ['@spacing', '@spacing.1'],
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
      popup: 'solid',
    },

    shadow: {
      subtle: '0 0 @spacing.1 rgba(0, 0, 0, 0.25)',
      avatar: '0 0 0 1px @Oslo',
      outlineControl: '0 0 0 1px inset @ShuttleGray',
    },

    opacity: {
      modalOverlay: 0.85,
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
      small: 1.25,
      heading: 1.2,
    },

    size: {
      base: '@fontSizes.1',
      control: '@fontSizes.1',
      heading: '@fontSizes.6',
      text: '@fontSizes.2',
      small: '@fontSizes',
      status: '@fontSizes',
    },

    transform: {
      status: 'uppercase',
    },

    weight: {
      base: '@fontWeights',
      link: '@fontWeights',
      control: '@fontWeights.1',
      heading: '@fontWeights.2',
      status: '@fontWeights.2',
    },
  },
}
