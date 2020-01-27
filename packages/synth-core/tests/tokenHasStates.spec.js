import { TOKENS } from './mocks'
import tokenHasStates from '../src/tokenHasStates'

describe('tokenHasStates', () => {
  test('returns true for tokens with states', () => {
    expect(tokenHasStates(TOKENS, 'style:opacity:control')).toBeTruthy()
  })

  test('returns false for tokens without states', () => {
    expect(tokenHasStates(TOKENS, 'space:padding:input')).toBeFalsy()
  })

  test('throws error when not passing a string', () => {
    expect(() => tokenHasStates({})).toThrow()
    expect(() => tokenHasStates([])).toThrow()
    expect(() => tokenHasStates(0)).toThrow()
    expect(() => tokenHasStates(null)).toThrow()
    expect(() => tokenHasStates(undefined)).toThrow()
    expect(() => tokenHasStates(() => {})).toThrow()
  })
})
