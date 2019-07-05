import { height } from '../src/height'

describe('height', () => {
  test('returns CSS declaration for `height`', () => {
    expect(
      height(
        {
          size: {
            height: {
              button: '100%',
              'button:hover': '120%',
            },
          },
        },
        'button',
      ),
    ).toEqual('height: 100%;')

    expect(
      height(
        {
          size: {
            height: {
              button: '100%',
              'button:hover': '120%',
            },
          },
        },
        'button:hover',
      ),
    ).toEqual('height: 120%;')
  })
})
