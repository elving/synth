import getCSSDeclaration from '../src/getCSSDeclaration'

describe('getCSSDeclaration', () => {
  test('returns the correct CSS declaration', () => {
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
