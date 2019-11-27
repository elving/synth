import minHeight from '../src/minHeight'

const tokens = {
  size: {
    minHeight: {
      base: 100,
      primaryButton: {
        default: '120px',
        hover: '100%',
      },
    },
  },
}

describe('minHeight', () => {
  test('returns CSS declaration for `min-height`', () => {
    expect(minHeight(tokens)).toEqual('min-height: 100px;')
    expect(minHeight(tokens, 'primaryButton')).toEqual('min-height: 120px;')

    expect(minHeight(tokens, 'primaryButton:hover')).toEqual(
      'min-height: 100%;',
    )
  })
})
