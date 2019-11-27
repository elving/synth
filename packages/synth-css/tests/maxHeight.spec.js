import maxHeight from '../src/maxHeight'

const tokens = {
  size: {
    maxHeight: {
      base: 100,
      primaryButton: {
        default: '120px',
        hover: '100%',
      },
    },
  },
}

describe('maxHeight', () => {
  test('returns CSS declaration for `max-height`', () => {
    expect(maxHeight(tokens)).toEqual('max-height: 100px;')
    expect(maxHeight(tokens, 'primaryButton')).toEqual('max-height: 120px;')

    expect(maxHeight(tokens, 'primaryButton:hover')).toEqual(
      'max-height: 100%;',
    )
  })
})
