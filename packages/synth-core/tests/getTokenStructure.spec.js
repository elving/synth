import getTokenStructure from '../src/getTokenStructure'

describe('getTokenStructure', () => {
  test('basic structure', () => {
    expect(getTokenStructure('color:background:button')).toEqual({
      category: 'color',
      name: 'button',
      property: 'background',
      state: undefined,
    })
  })

  test('with state', () => {
    expect(getTokenStructure('color:background:button:hover')).toEqual({
      category: 'color',
      name: 'button',
      property: 'background',
      state: 'hover',
    })
  })

  test('throws error when not passing a string', () => {
    expect(() => getTokenStructure({})).toThrow()
    expect(() => getTokenStructure([])).toThrow()
    expect(() => getTokenStructure(0)).toThrow()
    expect(() => getTokenStructure(null)).toThrow()
    expect(() => getTokenStructure(undefined)).toThrow()
    expect(() => getTokenStructure(() => {})).toThrow()
  })
})
