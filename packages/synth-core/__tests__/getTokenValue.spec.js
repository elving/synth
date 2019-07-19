import { getTokenValue } from '../src/getTokenValue'

const tokens = {
  global: {
    fontSizes: [12, 14, 16, 18, 20, 22],
    mediumSpace: 15,
    primaryBlue: '#1976D2',
  },

  color: {
    background: {
      primary_button: '@primaryBlue',
    },

    text: {
      menuLink: {
        default: '#0000E0',
        hover: '#0000D0',
      },
    },
  },

  position: {
    right: {
      notification: 15,
    },

    top: {
      notification: 15,
    },
  },

  size: {
    radius: {
      primary_button: 6,
    },

    maxWidth: {
      userCard: 480,
    },
  },

  space: {
    padding: {
      primary_button: [5, '@mediumSpace'],
    },
  },

  style: {
    opacity: {
      primary_button: {
        disabled: 0.5,
      },
    },

    shadow: {
      userCard: '0 0 15px rgba(0, 0, 0, 0.5)',
    },
  },

  typography: {
    size: {
      base: '@fontSizes',
      menuLink: '@fontSizes.1',
    },

    decoration: {
      menuLink: {
        hover: 'underline',
      },
    },
  },
}

describe('getTokenValue', () => {
  test('gets default token value', () => {
    expect(getTokenValue(tokens, 'color:background:primary_button')).toEqual(
      '#1976D2',
    )
  })

  test('gets default token value with modifier', () => {
    expect(getTokenValue(tokens, 'color:text:menuLink:hover')).toEqual(
      '#0000D0',
    )
  })

  test('gets global token value', () => {
    expect(getTokenValue(tokens, '@mediumSpace')).toEqual(15)
  })

  test('gets array token value', () => {
    expect(getTokenValue(tokens, '@fontSizes')).toEqual(12)
    expect(getTokenValue(tokens, '@fontSizes.2')).toEqual(16)
  })

  test('throws error when given an invalid token declarations object', () => {
    expect(() => getTokenValue({}, 'space:padding:button')).toThrow()
  })

  test('throws error when given an invalid token name', () => {
    expect(() => getTokenValue(tokens, 'universe:padding:button')).toThrow()
  })
})
