import { maxWidth } from '../src/maxWidth'

const tokens = {
  size: {
    maxWidth: {
      base: 100,
      primaryButton: {
        default: '120px',
        hover: '100%',
      },
    },
  },
}

describe('maxWidth', () => {
  test('returns CSS declaration for `max-width`', () => {
    expect(maxWidth(tokens)).toEqual('max-width: 100px;')
    expect(maxWidth(tokens, 'primaryButton')).toEqual('max-width: 120px;')
    expect(maxWidth(tokens, 'primaryButton:hover')).toEqual('max-width: 100%;')
  })
})
