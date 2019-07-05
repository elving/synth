import { getCSSDeclaration } from '../src/getCSSDeclaration'

describe('getCSSDeclaration', () => {
  test('returns the correct CSS declaration (expanded declarations)', () => {
    expect(
      getCSSDeclaration(
        {
          color: {
            background: {
              button: 'red',
            },
          },
        },
        'color:background:button',
      ),
    ).toEqual('background-color: red;')
  })

  test('returns the correct CSS declaration (flat declarations)', () => {
    expect(
      getCSSDeclaration(
        {
          'space:padding:button': '10px',
        },
        'space:padding:button',
      ),
    ).toEqual('padding: 10px;')
  })

  test('throws error when given an invalid token declarations object', () => {
    expect(() => getCSSDeclaration({}, 'space:padding:button')).toThrow()
  })

  test('throws error when given an invalid token name', () => {
    expect(() =>
      getCSSDeclaration(
        {
          'space:padding:button': '10px',
        },
        'universe:padding:button',
      ),
    ).toThrow()
  })
})
