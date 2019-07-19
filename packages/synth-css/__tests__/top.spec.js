import { top } from '../src/top'

const tokens = {
  position: {
    top: {
      base: 5,
      card_close_button: {
        default: '15px',
        disabled: '25px',
      },
    },
  },
}

describe('top', () => {
  test('returns CSS declaration for `top`', () => {
    expect(top(tokens)).toEqual('top: 5px;')
    expect(top(tokens, 'card_close_button')).toEqual('top: 15px;')
    expect(top(tokens, 'card_close_button:disabled')).toEqual('top: 25px;')
  })
})
