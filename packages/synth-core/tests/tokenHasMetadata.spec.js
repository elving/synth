import { TOKENS } from './mocks'
import tokenHasMetadata from '../src/tokenHasMetadata'

describe('tokenHasMetadata', () => {
  test('returns true for tokens with metadata', () => {
    expect(
      tokenHasMetadata(TOKENS, 'color:background:secondaryControl'),
    ).toBeTruthy()
  })

  test('returns false for tokens without metadata', () => {
    expect(tokenHasMetadata(TOKENS, 'size:maxWidth:smContainer')).toBeFalsy()
  })

  test('throws error when not passing a string', () => {
    expect(() => tokenHasMetadata({})).toThrow()
    expect(() => tokenHasMetadata([])).toThrow()
    expect(() => tokenHasMetadata(0)).toThrow()
    expect(() => tokenHasMetadata(null)).toThrow()
    expect(() => tokenHasMetadata(undefined)).toThrow()
    expect(() => tokenHasMetadata(() => {})).toThrow()
  })
})
