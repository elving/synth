import { lineHeight } from '../src/lineHeight'

describe('lineHeight', () => {
  test('returns CSS declaration for `line-height`', () => {
    expect(
      lineHeight(
        {
          typography: {
            lineHeight: {
              menu_link: 1.5,
              'menu_link:disabled': 1.65,
            },
          },
        },
        'menu_link',
      ),
    ).toEqual('line-height: 1.5;')

    expect(
      lineHeight(
        {
          typography: {
            lineHeight: {
              menu_link: 1.5,
              'menu_link:disabled': 1.65,
            },
          },
        },
        'menu_link:disabled',
      ),
    ).toEqual('line-height: 1.65;')
  })
})
