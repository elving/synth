import { getTokenParts } from '../src/getTokenParts'

describe('getTokenParts', () => {
  test('returns the correct token parts', () => {
    expect(getTokenParts('color:background:button')).toEqual({
      category: 'color',
      modifier: 'default',
      name: 'button',
      property: 'background',
    })

    expect(getTokenParts('color:background:button:hover')).toEqual({
      category: 'color',
      modifier: 'hover',
      name: 'button',
      property: 'background',
    })
  })

  test('throws error when given an invalid token name', () => {
    expect(() => getTokenParts('universe:padding:button')).toThrow()
  })
})
