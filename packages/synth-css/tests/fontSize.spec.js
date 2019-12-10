import fontFamily from '../src/fontFamily'

const tokens = {
  typography: {
    font: {
      base: 'Museo',
      text_field: {
        default: 'helvetica',
        disabled: 'arial',
      },
    },
  },
}

describe('fontFamily', () => {
  test('returns CSS declaration for `font-size`', () => {
    expect(fontFamily(tokens)).toEqual('font-family: Museo;')
    expect(fontFamily(tokens, 'text_field')).toEqual('font-family: helvetica;')

    expect(fontFamily(tokens, 'text_field:disabled')).toEqual(
      'font-family: arial;',
    )
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => fontFamily({}, 'text_field:disabled')).toThrow()
  })
})
