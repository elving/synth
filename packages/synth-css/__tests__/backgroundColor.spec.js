import { backgroundColor } from '../src/backgroundColor'

describe('backgroundColor', () => {
  test('returns CSS declaration for `background-color`', () => {
    expect(
      backgroundColor(
        {
          color: {
            background: {
              primaryButton: '#333',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('background-color: #333;')

    expect(
      backgroundColor(
        {
          color: {
            background: {
              primaryButton: '#333',
              'primaryButton:hover': '#111',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('background-color: #111;')
  })
})
