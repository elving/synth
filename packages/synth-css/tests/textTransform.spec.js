import textTransform from '../src/textTransform'

const tokens = {
  typography: {
    transform: {
      base: 'capitalize',
      menuLink: {
        default: 'lowercase',
        hover: 'uppercase',
      },
    },
  },
}

describe('textTransform', () => {
  test('returns CSS declaration for `text-transform`', () => {
    expect(textTransform(tokens)).toEqual('text-transform: capitalize;')

    expect(textTransform(tokens, 'menuLink')).toEqual(
      'text-transform: lowercase;',
    )

    expect(textTransform(tokens, 'menuLink:hover')).toEqual(
      'text-transform: uppercase;',
    )
  })
})
