import color from '../src/color'

const tokens = {
  color: {
    text: {
      base: '#111',
      caption: {
        default: '#333',
        hover: '#555',
      },
    },
  },
}

describe('color', () => {
  test('returns CSS declaration for `color`', () => {
    expect(color(tokens)).toEqual('color: #111;')
    expect(color(tokens, 'caption')).toEqual('color: #333;')
    expect(color(tokens, 'caption:hover')).toEqual('color: #555;')
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => color({}, 'caption:hover')).toThrow()
  })
})
