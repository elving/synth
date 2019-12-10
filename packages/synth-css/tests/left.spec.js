import left from '../src/left'

const tokens = {
  position: {
    left: {
      base: 5,
      card_close_button: {
        default: '15px',
        disabled: '25px',
      },
    },
  },
}

describe('left', () => {
  test('returns CSS declaration for `left`', () => {
    expect(left(tokens)).toEqual('left: 5px;')
    expect(left(tokens, 'card_close_button')).toEqual('left: 15px;')
    expect(left(tokens, 'card_close_button:disabled')).toEqual('left: 25px;')
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => left({}, 'card_close_button')).toThrow()
  })
})
