import width from '../src/width'

const tokens = {
  size: {
    width: {
      base: 100,
      primaryButton: {
        default: '120px',
        hover: '100%',
      },
    },
  },
}

describe('width', () => {
  test('returns CSS declaration for `width`', () => {
    expect(width(tokens)).toEqual('width: 100px;')
    expect(width(tokens, 'primaryButton')).toEqual('width: 120px;')
    expect(width(tokens, 'primaryButton:hover')).toEqual('width: 100%;')
  })
})
