import isValidTokenConfig from '../src/isValidTokenConfig'

describe('isValidTokenConfig', () => {
  test('basic', () => {
    expect(
      isValidTokenConfig({
        color: {
          background: {
            button: '#F9971E',
          },
        },
        space: {
          padding: {
            button: [12, 6],
          },
        },
      }),
    ).toBeTruthy()
  })

  test('aliases', () => {
    expect(
      isValidTokenConfig({
        color: {
          aliases: {
            primary: '#F9971E',
          },
          background: {
            button: '@primary',
          },
        },
      }),
    ).toBeTruthy()
  })

  test('returns false when passing an invalid token config', () => {
    expect(isValidTokenConfig({})).toBeFalsy()
    expect(isValidTokenConfig({ colors: { background: {} } })).toBeFalsy()
    expect(isValidTokenConfig({ color: { backgroundz: {} } })).toBeFalsy()
    expect(
      isValidTokenConfig({ color: { background: {} }, test: {} }),
    ).toBeFalsy()
  })
})
