import { fontFamily } from '../src/fontFamily'

describe('fontFamily', () => {
  test('returns CSS declaration for `font-size`', () => {
    expect(
      fontFamily(
        {
          typography: {
            font: {
              text_field: 'helvetica',
              'text_field:disabled': 'arial',
            },
          },
        },
        'text_field',
      ),
    ).toEqual('font-family: helvetica;')

    expect(
      fontFamily(
        {
          typography: {
            font: {
              text_field: 'helvetica',
              'text_field:disabled': 'arial',
            },
          },
        },
        'text_field:disabled',
      ),
    ).toEqual('font-family: arial;')
  })
})
