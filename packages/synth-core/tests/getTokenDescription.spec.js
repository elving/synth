import { TOKENS } from './mocks'
import getTokenDescription from '../src/getTokenDescription'

describe('getTokenDescription', () => {
  test('gets token description', () => {
    expect(
      getTokenDescription(TOKENS, 'color:background:secondaryControl'),
    ).toEqual('Some random description.')
  })

  test('gets token description from state', () => {
    expect(
      getTokenDescription(TOKENS, 'style:opacity:control:disabled'),
    ).toEqual('The default opacity for controls that are disabled.')
  })

  test('throws error when passing an invalid token config', () => {
    expect(() => getTokenDescription({})).toThrow()
    expect(() => getTokenDescription([])).toThrow()
    expect(() => getTokenDescription(0)).toThrow()
    expect(() => getTokenDescription(null)).toThrow()
    expect(() => getTokenDescription(undefined)).toThrow()
    expect(() => getTokenDescription(() => {})).toThrow()
  })
})
