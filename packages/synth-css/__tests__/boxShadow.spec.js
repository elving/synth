import { boxShadow } from '../src/boxShadow'

const tokens = {
  style: {
    shadow: {
      base: '0 0 2px rgba(0, 0, 0, 0.15)',
      textInput: {
        default: '0 0 1px #333',
        focus: '0 0 3px #333',
      },
    },
  },
}

describe('boxShadow', () => {
  test('returns CSS declaration for `box-shadow`', () => {
    expect(boxShadow(tokens)).toEqual(
      'box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);',
    )

    expect(boxShadow(tokens, 'textInput')).toEqual('box-shadow: 0 0 1px #333;')

    expect(boxShadow(tokens, 'textInput:focus')).toEqual(
      'box-shadow: 0 0 3px #333;',
    )
  })
})
