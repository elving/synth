import { TOKENS } from './mocks'
import getTokenRelease from '../src/getTokenRelease'

describe('getTokenRelease', () => {
  test('gets token release', () => {
    expect(
      getTokenRelease(TOKENS, 'color:background:secondaryControl'),
    ).toEqual('1.1.34')
  })

  test('gets token release from state', () => {
    expect(getTokenRelease(TOKENS, 'style:opacity:control:disabled')).toEqual(
      '1.0.0',
    )
  })

  test('throws error when passing an invalid token config', () => {
    expect(() => getTokenRelease({})).toThrow()
    expect(() => getTokenRelease([])).toThrow()
    expect(() => getTokenRelease(0)).toThrow()
    expect(() => getTokenRelease(null)).toThrow()
    expect(() => getTokenRelease(undefined)).toThrow()
    expect(() => getTokenRelease(() => {})).toThrow()
  })
})
