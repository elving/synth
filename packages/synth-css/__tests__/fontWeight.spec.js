import { fontWeight } from '../src/fontWeight'

describe('fontWeight', () => {
  test('returns CSS declaration for `font-weight`', () => {
    expect(
      fontWeight(
        {
          typography: {
            weight: {
              'menu-link': '300',
              'menu-link:hover': '600',
            },
          },
        },
        'menu-link',
      ),
    ).toEqual('font-weight: 300;')

    expect(
      fontWeight(
        {
          typography: {
            weight: {
              'menu-link': '300',
              'menu-link:hover': '600',
            },
          },
        },
        'menu-link:hover',
      ),
    ).toEqual('font-weight: 600;')
  })
})
