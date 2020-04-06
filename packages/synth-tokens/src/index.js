/**
 * @type {import('@beatgig/synth-tokens').tokens}
 */
export const tokens = {
  color: {
    aliases: {
      prominent: 'rgba(255, 255, 254, 1)', // #FCFDFD
      primary: 'rgba(15, 15, 16, 1)', // #0f0f10
      copy: 'rgba(167, 169, 190, 1)', // #A7A9BE
      BeatGig: ['#FAC62A', '#EFB506'],
      Error: ['#C5493A', '#B0422F'],
      Success: ['#00BB53', '#00A76D'],
      contrast: [
        'rgba(125, 125, 145, 0.14)',
        'rgba(125, 125, 145, 0.20)',
        'rgba(125, 125, 145, 0.26)',
        'rgba(125, 125, 145, 0.32)',
      ],
    },

    background: {
      avatar: '@contrast.1',
      card: '@contrast.1',
      header: '@contrast.1',
      modalOverlay: '@primary',
      popup: '@contrast.1',
      tag: '@contrast.2',

      control: {
        active: '@contrast.3',
        default: '@contrast.1',
        focus: '@contrast.3',
        hover: '@contrast.2',
      },

      input: {
        default: 'transparent',
        focus: '@contrast.3',
        hover: 'transparent',
      },

      popupItem: {
        default: '@contrast.1',
        hover: '@contrast.2',
      },
    },

    border: {
      base: 'transparent',
      control: 'transparent',

      input: {
        default: '@contrast.1',
        hover: '@contrast.2',
        focus: '@contrast.3',
      },

      popup: '@contrast.1',
    },

    shadow: {
      subtle: 'rgba(0, 0, 0, 0.25)',
      avatar: '@contrast.2',
      control: {
        default: 'transparent',
        focus: '@contrast.4',
      },
    },

    text: {
      base: '@copy',
      control: '@prominent',
      meta: '@contrast.4',
      heading: '@prominent',
      status: '@contrast.4',
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
      control: {
        default: [0, 2.5],
        focus: [0, 2.5],
      },
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
      control: { default: [0, 0], focus: [0, 0] },
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
        'Inter',
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
      base: '@fontWeights.4',
      link: '@fontWeights.4',
      control: '@fontWeights.5',
      input: '@fontWeights.4',
      heading: '@fontWeights.6',
      status: '@fontWeights.3',
    },
  },
}
