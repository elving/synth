import { TOKENS } from './mocks'
import getToken from '../src/getToken'

describe('getToken', () => {
  test('gets token with states', () => {
    expect(getToken(TOKENS, 'style:opacity:control')).toBeDefined()
    expect(getToken(TOKENS, 'style:opacity:control:disabled')).toBeDefined()
  })

  test('gets token with no defined states', () => {
    expect(getToken(TOKENS, 'color:background:secondaryControl')).toBeDefined()
  })

  test('gets token using direct alias format', () => {
    expect(getToken(TOKENS, 'color:@primary')).toEqual('#1589ee')
  })

  test('throws error when not passing a string', () => {
    expect(() => getToken({})).toThrow()
    expect(() => getToken([])).toThrow()
    expect(() => getToken(0)).toThrow()
    expect(() => getToken(null)).toThrow()
    expect(() => getToken(undefined)).toThrow()
    expect(() => getToken(() => {})).toThrow()
  })
})
