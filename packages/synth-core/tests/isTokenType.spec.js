import isTokenType from '../src/isTokenType'

describe('isTokenType', () => {
  test('returns true if the given value is a valid token type', () => {
    expect(isTokenType('color:text')).toBeTruthy()
    expect(isTokenType('size:maxWidth')).toBeTruthy()
  })

  test('returns false if the given value is not a valid token type', () => {
    expect(isTokenType('hello:world')).toBeFalsy()
    expect(isTokenType('hello')).toBeFalsy()
  })
})
