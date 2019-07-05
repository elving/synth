import { zIndex } from '../src/zIndex'

describe('zIndex', () => {
  test('returns CSS declaration for `z-index`', () => {
    expect(
      zIndex(
        {
          position: {
            index: {
              card_close_button: 1,
              'card_close_button:hover': 5,
            },
          },
        },
        'card_close_button',
      ),
    ).toEqual('z-index: 1;')

    expect(
      zIndex(
        {
          position: {
            index: {
              card_close_button: 1,
              'card_close_button:hover': 5,
            },
          },
        },
        'card_close_button:hover',
      ),
    ).toEqual('z-index: 5;')
  })
})
