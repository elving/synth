import { right } from '../src/right'

const tokens = {
  position: {
    right: {
      base: 2,
      card_close_button: {
        default: '15px',
        disabled: '25px',
      },
    },
  },
}

describe('right', () => {
  test('returns CSS declaration for `right`', () => {
    expect(right(tokens)).toEqual('right: 2px;')
    expect(right(tokens, 'card_close_button')).toEqual('right: 15px;')
    expect(right(tokens, 'card_close_button:disabled')).toEqual('right: 25px;')
  })
})
