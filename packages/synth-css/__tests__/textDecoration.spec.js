import { textDecoration } from '../src/textDecoration'

describe('textDecoration', () => {
  test('returns CSS declaration for `text-decoration`', () => {
    expect(
      textDecoration(
        {
          typography: {
            decoration: {
              menu_link: 'none',
              'menu_link:hover': 'underline',
            },
          },
        },
        'menu_link',
      ),
    ).toEqual('text-decoration: none;')

    expect(
      textDecoration(
        {
          typography: {
            decoration: {
              menu_link: 'none',
              'menu_link:hover': 'underline',
            },
          },
        },
        'menu_link:hover',
      ),
    ).toEqual('text-decoration: underline;')
  })
})
