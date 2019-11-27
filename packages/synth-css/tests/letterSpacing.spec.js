import letterSpacing from '../src/letterSpacing'

const tokens = {
  typography: {
    spacing: {
      base: 10,
      menuLink: {
        default: 'normal',
        disabled: '4px',
      },
    },
  },
}

describe('letterSpacing', () => {
  test('returns CSS declaration for `letter-spacing`', () => {
    expect(letterSpacing(tokens)).toEqual('letter-spacing: 10px;')
    expect(letterSpacing(tokens, 'menuLink')).toEqual('letter-spacing: normal;')

    expect(letterSpacing(tokens, 'menuLink:disabled')).toEqual(
      'letter-spacing: 4px;',
    )
  })
})
