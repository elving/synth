import { top } from '../src/top'

describe('top', () => {
  test('returns CSS declaration for `top`', () => {
    expect(
      top(
        {
          position: {
            top: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button',
      ),
    ).toEqual('top: 15px;')

    expect(
      top(
        {
          position: {
            top: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button:disabled',
      ),
    ).toEqual('top: 25px;')
  })
})
