import getCSSDeclaration from '../src/getCSSDeclaration'

describe('getCSSDeclaration', () => {
  test('returns the correct CSS declaration', () => {
    const tokens = {
      global: {
        night: '#121212',
      },

      color: {
        background: {
          link: ['green'],
          button: 'red',
        },
      },

      space: {
        padding: {
          link: ['2', 8],
          button: '10',
        },
      },
    }

    expect(getCSSDeclaration(tokens, 'color:background:button')).toEqual(
      'background-color: red;',
    )
    expect(getCSSDeclaration(tokens, 'space:padding:button')).toEqual(
      'padding: 10px;',
    )
    expect(getCSSDeclaration(tokens, 'space:padding:link')).toEqual(
      'padding: 2px 8px;',
    )
    expect(getCSSDeclaration(tokens, 'color:background:link')).toEqual(
      'background-color: green;',
    )
    expect(getCSSDeclaration(tokens, '@night')).toEqual('#121212')
  })

  test('throws error when given an invalid token declarations object', () => {
    expect(() => getCSSDeclaration({}, 'space:padding:button')).toThrow()
  })

  test('throws error when given an invalid token name', () => {
    expect(() =>
      getCSSDeclaration(
        {
          space: {
            padding: {
              button: '10px',
            },
          },
        },
        'universe:padding:button',
      ),
    ).toThrow()
  })
})
