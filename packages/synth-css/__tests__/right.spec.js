import { right } from '../src/right'

describe('right', () => {
  test('returns CSS declaration for `right`', () => {
    expect(
      right(
        {
          position: {
            right: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button',
      ),
    ).toEqual('right: 15px;')

    expect(
      right(
        {
          position: {
            right: {
              card_close_button: '15px',
              'card_close_button:disabled': '25px',
            },
          },
        },
        'card_close_button:disabled',
      ),
    ).toEqual('right: 25px;')
  })
})
