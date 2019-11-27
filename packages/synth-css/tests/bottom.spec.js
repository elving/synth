import bottom from '../src/bottom'

const tokens = {
  position: {
    bottom: {
      base: 10,
      card_close_button: {
        default: '15px',
        disabled: '25px',
      },
    },
  },
}

describe('bottom', () => {
  test('returns CSS declaration for `bottom`', () => {
    expect(bottom(tokens)).toEqual('bottom: 10px;')
    expect(bottom(tokens, 'card_close_button')).toEqual('bottom: 15px;')
    expect(bottom(tokens, 'card_close_button:disabled')).toEqual(
      'bottom: 25px;',
    )
  })
})
