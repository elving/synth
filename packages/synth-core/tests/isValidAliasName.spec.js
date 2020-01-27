import isValidAliasName from '../src/isValidAliasName'

describe('isValidAliasName', () => {
  test('valid alias value', () => {
    expect(isValidAliasName('@alias')).toBeTruthy()
    expect(isValidAliasName('@alias_')).toBeTruthy()
    expect(isValidAliasName('@_alias_')).toBeTruthy()
  })

  test('invalid alias value', () => {
    expect(isValidAliasName('color:background:button:hover')).toBeFalsy()
    expect(isValidAliasName('alias')).toBeFalsy()
    expect(isValidAliasName('a@lias')).toBeFalsy()
    expect(isValidAliasName('_@alias')).toBeFalsy()
    expect(isValidAliasName({})).toBeFalsy()
    expect(isValidAliasName([])).toBeFalsy()
    expect(isValidAliasName(0)).toBeFalsy()
    expect(isValidAliasName(null)).toBeFalsy()
    expect(isValidAliasName(undefined)).toBeFalsy()
    expect(isValidAliasName(() => {})).toBeFalsy()
  })
})
