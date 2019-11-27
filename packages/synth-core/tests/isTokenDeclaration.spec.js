import isTokenDeclaration from '../src/isTokenDeclaration'

describe('isTokenDeclaration', () => {
  test('returns true if the given value is a valid token declarations object', () => {
    expect(
      isTokenDeclaration({
        color: {
          background: {
            button: 'red',
          },
        },
      }),
    ).toBeTruthy()
  })

  test('returns false if the given value is not a valid token declarations object', () => {
    expect(isTokenDeclaration('size:maxWidth')).toBeFalsy()
    expect(isTokenDeclaration({})).toBeFalsy()
    expect(isTokenDeclaration({ nope: { border: '10px' } })).toBeFalsy()
    expect(isTokenDeclaration({ space: { border: '10px' } })).toBeFalsy()
    expect(isTokenDeclaration({ global: 'hello' })).toBeFalsy()
  })
})
