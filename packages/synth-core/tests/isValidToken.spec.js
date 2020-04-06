import { TOKEN_CATEGORIES, TOKEN_CONFIG } from '../src/constants'
import isValidToken from '../src/isValidToken'

describe('isValidToken', () => {
  test('basic token', () => {
    expect(isValidToken('color:background:button')).toBeTruthy()
  })

  test('basic token with state', () => {
    expect(isValidToken('color:background:button:hover')).toBeTruthy()
  })

  test('all valid categories', () => {
    TOKEN_CATEGORIES.forEach((category) => {
      expect(isValidToken(`${category}:aliases:test`)).toBeTruthy()
    })
  })

  test('all valid properties', () => {
    TOKEN_CATEGORIES.forEach((category) => {
      TOKEN_CONFIG[category].forEach((property) => {
        expect(isValidToken(`${category}:${property}:test`)).toBeTruthy()
      })
    })
  })

  test('token alias', () => {
    expect(isValidToken('space:aliases:md')).toBeTruthy()
  })

  test('throws error when not passing a string', () => {
    expect(() => isValidToken({})).toThrow()
    expect(() => isValidToken([])).toThrow()
    expect(() => isValidToken(0)).toThrow()
    expect(() => isValidToken(null)).toThrow()
    expect(() => isValidToken(undefined)).toThrow()
    expect(() => isValidToken(() => {})).toThrow()
  })

  test('returns false when passing an invalid token', () => {
    expect(isValidToken('some:thing')).toBeFalsy()
    expect(isValidToken('color:thing')).toBeFalsy()
    expect(isValidToken('color')).toBeFalsy()
    expect(isValidToken('some:background')).toBeFalsy()
  })
})
