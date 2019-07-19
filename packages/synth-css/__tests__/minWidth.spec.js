import { minWidth } from '../src/minWidth'

const tokens = {
  size: {
    minWidth: {
      base: 100,
      primaryButton: {
        default: '120px',
        hover: '100%',
      },
    },
  },
}

describe('minWidth', () => {
  test('returns CSS declaration for `min-width`', () => {
    expect(minWidth(tokens)).toEqual('min-width: 100px;')
    expect(minWidth(tokens, 'primaryButton')).toEqual('min-width: 120px;')
    expect(minWidth(tokens, 'primaryButton:hover')).toEqual('min-width: 100%;')
  })
})
