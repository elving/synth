import { TOKENS } from './mocks'
import getTokenAliasValue from '../src/getTokenAliasValue'

describe('getTokenAliasValue', () => {
  test('gets basic alias', () => {
    expect(getTokenAliasValue(TOKENS, 'color', '@primary')).toEqual('#1589ee')
  })

  test('gets array value alias', () => {
    expect(getTokenAliasValue(TOKENS, 'space', '@scale')).toEqual([
      4,
      8,
      12,
      16,
      20,
    ])
    expect(getTokenAliasValue(TOKENS, 'space', '@scale.1')).toEqual(4)
    expect(getTokenAliasValue(TOKENS, 'space', '@scale.2')).toEqual(8)
    expect(getTokenAliasValue(TOKENS, 'space', '@scale.3')).toEqual(12)
    expect(getTokenAliasValue(TOKENS, 'space', '@scale.4')).toEqual(16)
    expect(getTokenAliasValue(TOKENS, 'space', '@scale.5')).toEqual(20)
  })

  test('throws error when passing an invalid token config', () => {
    expect(() => getTokenAliasValue({})).toThrow()
    expect(() => getTokenAliasValue([])).toThrow()
    expect(() => getTokenAliasValue(0)).toThrow()
    expect(() => getTokenAliasValue(null)).toThrow()
    expect(() => getTokenAliasValue(undefined)).toThrow()
    expect(() => getTokenAliasValue(() => {})).toThrow()
  })
})
