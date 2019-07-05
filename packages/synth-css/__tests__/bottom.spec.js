import { bottom } from '../src/bottom'

describe('bottom', () => {
  test('returns CSS declaration for `bottom`', () => {
    expect(
      bottom(
        {
          position: {
            bottom: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button',
      ),
    ).toEqual('bottom: 15px;')

    expect(
      bottom(
        {
          position: {
            bottom: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button:disabled',
      ),
    ).toEqual('bottom: 25px;')
  })
})
