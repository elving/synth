import { textTransform } from '../src/textTransform'

describe('textTransform', () => {
  test('returns CSS declaration for `text-transform`', () => {
    expect(
      textTransform(
        {
          typography: {
            transform: {
              menuLink: 'lowercase',
              'menuLink:hover': 'uppercase',
            },
          },
        },
        'menuLink',
      ),
    ).toEqual('text-transform: lowercase;')

    expect(
      textTransform(
        {
          typography: {
            transform: {
              menuLink: 'lowercase',
              'menuLink:hover': 'uppercase',
            },
          },
        },
        'menuLink:hover',
      ),
    ).toEqual('text-transform: uppercase;')
  })
})
