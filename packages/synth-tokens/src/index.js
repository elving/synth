export const tokens = {
  color: {
    aliases: {
      Porcelain: '#FCFDFD',
      Thunder: '#10110E',
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
    },

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

    shadow: {
      subtle: 'rgba(0, 0, 0, 0.25)',
      avatar: '@Oslo',
      outlineControl: 'inset @ShuttleGray',
    },

    text: {
      base: '@Porcelain',
      meta: '@Oslo',
      status: '@Oslo',
    },
  },

  size: {
    aliases: {
      avatars: [24, 32, 40, 48, 56, 64],
      cards: [240, 480, 960],
      fontSizes: [12, 14, 16, 18, 20, 22, 24, 26],
      headings: [18, 22, 26, 30, 34, 38],
      icons: [14, 16, 18, 20, 22, 24, 26, 28],
    },

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

    shadow: {
      subtle: 5,
      avatar: [0, 1],
      outlineControl: [0, 1],
    },

    text: {
      base: '@fontSizes.3',
      control: '@fontSizes.2',
      heading: '@fontSizes.7',
      text: '@fontSizes.3',
      small: '@fontSizes.1',
      status: '@fontSizes.1',
    },

    width: {
      modal: '100%',
    },

    maxWidth: {
      modal: '@cards.2',
    },
  },

  space: {
    aliases: {
      spacing: [4, 8, 14, 20, 26, 32],
    },

    margin: {
      formRow: [0, 0, '@spacing.2'],
      heading: [0, 0, '@spacing.4'],
      paragraph: '0 0 @spacing.3',
    },

    padding: {
      card: '@spacing.3',
      control: ['@spacing.2', '@spacing.3'],
      header: ['@spacing.3', '@spacing.4'],
      modalOverlay: '@spacing.6',
      popupItem: ['@spacing.2', '@spacing.3'],
      tag: ['@spacing.1', '@spacing.2'],
    },
  },

  style: {
    border: {
      base: 'solid',
      control: 'solid',
      input: 'solid',
      popup: 'solid',
    },

    opacity: {
      modalOverlay: 0.85,
    },
  },

  position: {
    shadow: {
      subtle: [0, 0],
      avatar: [0, 0],
      outlineControl: [0, 0],
    },
  },

  typography: {
    aliases: {
      fontWeights: [100, 200, 300, 400, 500, 600, 700, 800],
    },

    decoration: {
      link: {
        default: 'none',
        hover: 'none',
      },
    },

    font: {
      base: [
        'PublicSans',
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

    transform: {
      status: 'uppercase',
    },

    weight: {
      base: '@fontWeights.3',
      link: '@fontWeights.3',
      control: '@fontWeights.4',
      input: '@fontWeights.3',
      heading: '@fontWeights.5',
      status: '@fontWeights.2',
    },
  },
}
