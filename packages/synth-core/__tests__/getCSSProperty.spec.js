import { getCSSProperty } from '../src/getCSSProperty'

describe('getCSSProperty', () => {
  test('returns the correct CSS property', () => {
    expect(getCSSProperty('color:background')).toEqual('background-color')
    expect(getCSSProperty('typography:font')).toEqual('font-family')
  })

  test('throws error when given an invalid token type', () => {
    expect(() => getCSSProperty('universe:padding')).toThrow()
  })
})
