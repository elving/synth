import isTokenName from '../src/isTokenName'

describe('isTokenName', () => {
  test('returns true if the given value is a valid token name', () => {
    expect(isTokenName('color:text:button')).toBeTruthy()
    expect(isTokenName('@lightGrey')).toBeTruthy()
  })

  test('returns false if the given value is not a valid token name', () => {
    expect(isTokenName(null)).toBeFalsy()
    expect(isTokenName(undefined)).toBeFalsy()
    expect(isTokenName([])).toBeFalsy()
    expect(isTokenName({})).toBeFalsy()
    expect(isTokenName('hello:world:button')).toBeFalsy()
    expect(isTokenName('hello')).toBeFalsy()
  })
})
