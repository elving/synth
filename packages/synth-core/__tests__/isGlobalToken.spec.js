import { isGlobalToken } from '../src/isGlobalToken'

describe('isGlobalToken', () => {
  test('returns true if the given value is a valid global token name', () => {
    expect(isGlobalToken('@lightGrey')).toBeTruthy()
    expect(isGlobalToken('@light_grey')).toBeTruthy()
  })

  test('returns false if the given value is not a valid global token name', () => {
    expect(isGlobalToken('hello@')).toBeFalsy()
    expect(isGlobalToken('hello')).toBeFalsy()
    expect(isGlobalToken('#hello')).toBeFalsy()
    expect(isGlobalToken('hello:world:button')).toBeFalsy()
  })
})
