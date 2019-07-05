import { margin } from '../src/margin'

describe('margin', () => {
  test('returns CSS declaration for `margin`', () => {
    expect(
      margin(
        {
          space: {
            margin: {
              primaryButton: '10%',
              'primaryButton:hover': '25%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('margin: 10%;')

    expect(
      margin(
        {
          space: {
            margin: {
              primaryButton: '10%',
              'primaryButton:hover': '25%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('margin: 25%;')
  })
})
