import { getTokenValue } from '../src/getTokenValue'

describe('getTokenValue', () => {
  test('returns the correct CSS declaration (expanded declarations)', () => {
    expect(
      getTokenValue(
        {
          color: {
            background: {
              button: 'red',
            },
          },
        },
        'color:background:button',
      ),
    ).toEqual('red')
  })

  test('returns the correct CSS declaration (flat declarations)', () => {
    expect(
      getTokenValue(
        {
          'space:padding:button': '10px',
        },
        'space:padding:button',
      ),
    ).toEqual('10px')
  })

  test('throws error when given an invalid token declarations object', () => {
    expect(() => getTokenValue({}, 'space:padding:button')).toThrow()
  })

  test('throws error when given an invalid token name', () => {
    expect(() =>
      getTokenValue(
        {
          'space:padding:button': '10px',
        },
        'universe:padding:button',
      ),
    ).toThrow()
  })
})
