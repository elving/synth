import { color } from '../src/color'

describe('color', () => {
  test('returns CSS declaration for `color`', () => {
    expect(
      color(
        {
          color: {
            text: {
              caption: '#333',
              'caption:hover': '#555',
            },
          },
        },
        'caption',
      ),
    ).toEqual('color: #333;')

    expect(
      color(
        {
          color: {
            text: {
              caption: '#333',
              'caption:hover': '#555',
            },
          },
        },
        'caption:hover',
      ),
    ).toEqual('color: #555;')
  })
})
