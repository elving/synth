import { unit } from '../src/unit'

describe('unit', () => {
  test('integer', () => {
    expect(unit(10)).toEqual('10px')
  })

  test('float', () => {
    expect(unit(10.5)).toEqual('10.5px')
  })

  test('string', () => {
    expect(unit('100%')).toEqual('100%')
  })

  test('array', () => {
    expect(unit([10, '100%'])).toEqual('10px 100%')
  })
})
