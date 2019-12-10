import lineHeight from '../src/lineHeight'

const tokens = {
  typography: {
    lineHeight: {
      base: 1.25,
      menu_link: {
        default: 1.5,
        disabled: 1.65,
      },
    },
  },
}

describe('lineHeight', () => {
  test('returns CSS declaration for `line-height`', () => {
    expect(lineHeight(tokens)).toEqual('line-height: 1.25;')
    expect(lineHeight(tokens, 'menu_link')).toEqual('line-height: 1.5;')

    expect(lineHeight(tokens, 'menu_link:disabled')).toEqual(
      'line-height: 1.65;',
    )
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => lineHeight({}, 'menu_link:disabled')).toThrow()
  })
})
