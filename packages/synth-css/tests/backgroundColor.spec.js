import backgroundColor from '../src/backgroundColor'

const tokens = {
  color: {
    background: {
      base: '#777',
      primaryButton: {
        default: '#333',
        hover: '#111',
      },
    },
  },
}

describe('backgroundColor', () => {
  test('returns CSS declaration for `background-color`', () => {
    expect(backgroundColor(tokens)).toEqual('background-color: #777;')

    expect(backgroundColor(tokens, 'primaryButton')).toEqual(
      'background-color: #333;',
    )

    expect(backgroundColor(tokens, 'primaryButton:hover')).toEqual(
      'background-color: #111;',
    )
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => backgroundColor({}, 'primaryButton:hover')).toThrow()
  })
})
