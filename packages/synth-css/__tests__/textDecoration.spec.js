import { textDecoration } from '../src/textDecoration'

const tokens = {
  typography: {
    decoration: {
      base: 'none',
      menu_link: {
        default: 'none',
        hover: 'underline',
      },
    },
  },
}

describe('textDecoration', () => {
  test('returns CSS declaration for `text-decoration`', () => {
    expect(textDecoration(tokens)).toEqual('text-decoration: none;')

    expect(textDecoration(tokens, 'menu_link')).toEqual(
      'text-decoration: none;',
    )

    expect(textDecoration(tokens, 'menu_link:hover')).toEqual(
      'text-decoration: underline;',
    )
  })
})
