import { TOKENS } from './mocks'
import getTokenValue from '../src/getTokenValue'

describe('getTokenValue', () => {
  test('gets token value from basic token', () => {
    expect(getTokenValue(TOKENS, 'size:maxWidth:smContainer')).toEqual('200px')
  })

  test('gets token value from basic token with transform', () => {
    expect(
      getTokenValue(
        TOKENS,
        'size:maxWidth:smContainer',
        (value) => `${value}em`,
      ),
    ).toEqual('200em')
  })

  test('gets token value from metadata', () => {
    expect(getTokenValue(TOKENS, 'size:maxWidth:mdContainer')).toEqual('400px')
  })

  test('gets token value from metadata with transform', () => {
    expect(
      getTokenValue(
        TOKENS,
        'size:maxWidth:mdContainer',
        (value) => `${value}%`,
      ),
    ).toEqual('400%')
  })

  test('gets token value from state', () => {
    expect(getTokenValue(TOKENS, 'color:text:link:disabled')).toEqual(
      'rgba(255, 255, 255, 0.75)',
    )
  })

  test('gets token value from state with transform', () => {
    expect(
      getTokenValue(TOKENS, 'color:text:link:disabled', (value) =>
        value.replace(/2/gim, '1'),
      ),
    ).toEqual('rgba(155, 155, 155, 0.75)')
  })

  test('gets token value from state with metadata', () => {
    expect(getTokenValue(TOKENS, 'style:opacity:control:disabled')).toEqual(
      '0.35px',
    )
  })

  test('gets token value from state with metadata with transform', () => {
    expect(
      getTokenValue(TOKENS, 'style:opacity:control:disabled', (value) =>
        (value * 1.5).toFixed(3),
      ),
    ).toEqual('0.525px')
  })

  test('gets token value with alias', () => {
    expect(getTokenValue(TOKENS, 'color:background:primaryControl')).toEqual(
      '#1589ee',
    )
  })

  test('gets token value with alias with transform', () => {
    expect(
      getTokenValue(TOKENS, 'color:background:primaryControl', (value) =>
        value.replace('ee', 'dd'),
      ),
    ).toEqual('#1589dd')
  })

  test('gets token value from metadata with alias', () => {
    expect(getTokenValue(TOKENS, 'color:background:secondaryControl')).toEqual(
      '#e5e5e5',
    )
  })

  test('gets token value from metadata with alias and transform', () => {
    expect(
      getTokenValue(TOKENS, 'color:background:secondaryControl', (value) =>
        value.replace(/5/gim, '1'),
      ),
    ).toEqual('#e1e1e1')
  })

  test('gets token value with alias (interpolation)', () => {
    expect(getTokenValue(TOKENS, 'space:padding:input')).toEqual('4px 12px')
  })

  test('gets token value with alias (interpolation) and transform', () => {
    expect(
      getTokenValue(TOKENS, 'space:padding:input', (value) =>
        value
          .split(' ')
          .map((value) => `${value}%`)
          .join(' '),
      ),
    ).toEqual('4% 12%')
  })

  test('gets token value with alias (array)', () => {
    expect(getTokenValue(TOKENS, 'space:padding:control')).toEqual('4px 8px')
  })

  test('gets token value with alias (array) and transform', () => {
    expect(
      getTokenValue(TOKENS, 'space:padding:control', (value) => `${value}em`),
    ).toEqual('4em 8em')
  })

  test('gets token value from alias', () => {
    expect(getTokenValue(TOKENS, 'space:padding:@scale.2')).toEqual('8px')
  })

  test('throws error when passing an invalid token config', () => {
    expect(() => getTokenValue({})).toThrow()
    expect(() => getTokenValue([])).toThrow()
    expect(() => getTokenValue(0)).toThrow()
    expect(() => getTokenValue(null)).toThrow()
    expect(() => getTokenValue(undefined)).toThrow()
    expect(() => getTokenValue(() => {})).toThrow()
  })

  test('throws error when passing an invalid token', () => {
    expect(() => getTokenValue(TOKENS, {})).toThrow()
    expect(() => getTokenValue(TOKENS, [])).toThrow()
    expect(() => getTokenValue(TOKENS, 0)).toThrow()
    expect(() => getTokenValue(TOKENS, null)).toThrow()
    expect(() => getTokenValue(TOKENS, undefined)).toThrow()
    expect(() => getTokenValue(TOKENS, () => {})).toThrow()
    expect(() => getTokenValue(TOKENS, '')).toThrow()
    expect(() => getTokenValue(TOKENS, 'background')).toThrow()
    expect(() => getTokenValue(TOKENS, 'test:background')).toThrow()
    expect(() => getTokenValue(TOKENS, 'color:test')).toThrow()
  })
})
