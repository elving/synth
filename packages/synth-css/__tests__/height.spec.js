import { height } from '../src/height'

const tokens = {
  size: {
    height: {
      base: 100,
      button: {
        default: '100%',
        hover: '120%',
      },
    },
  },
}

describe('height', () => {
  test('returns CSS declaration for `height`', () => {
    expect(height(tokens)).toEqual('height: 100px;')
    expect(height(tokens, 'button')).toEqual('height: 100%;')
    expect(height(tokens, 'button:hover')).toEqual('height: 120%;')
  })
})
