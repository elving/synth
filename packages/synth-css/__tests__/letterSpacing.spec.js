import { letterSpacing } from '../src/letterSpacing'

describe('letterSpacing', () => {
  test('returns CSS declaration for `letter-spacing`', () => {
    expect(
      letterSpacing(
        {
          typography: {
            spacing: {
              'menu-link': 'normal',
              'menu-link:disabled': '4px',
            },
          },
        },
        'menu-link',
      ),
    ).toEqual('letter-spacing: normal;')

    expect(
      letterSpacing(
        {
          typography: {
            spacing: {
              'menu-link': 'normal',
              'menu-link:disabled': '4px',
            },
          },
        },
        'menu-link:disabled',
      ),
    ).toEqual('letter-spacing: 4px;')
  })
})
