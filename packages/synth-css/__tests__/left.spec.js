import { left } from '../src/left'

describe('left', () => {
  test('returns CSS declaration for `left`', () => {
    expect(
      left(
        {
          position: {
            left: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button',
      ),
    ).toEqual('left: 15px;')

    expect(
      left(
        {
          position: {
            left: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button:disabled',
      ),
    ).toEqual('left: 25px;')
  })
})
