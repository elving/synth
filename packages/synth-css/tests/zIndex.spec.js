import zIndex from '../src/zIndex'

const tokens = {
  position: {
    index: {
      base: 10,
      card_close_button: {
        default: 1,
        hover: 5,
      },
    },
  },
}

describe('zIndex', () => {
  test('returns CSS declaration for `z-index`', () => {
    expect(zIndex(tokens)).toEqual('z-index: 10;')
    expect(zIndex(tokens, 'card_close_button')).toEqual('z-index: 1;')
    expect(zIndex(tokens, 'card_close_button:hover')).toEqual('z-index: 5;')
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => zIndex({}, 'card_close_button')).toThrow()
  })
})
