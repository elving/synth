import { toRgba } from '../src/transforms'

describe('toRgba', () => {
  test('transforms hex value to rgba value', () => {
    expect(toRgba('#000000')).toEqual('rgba(0, 0, 0, 1)')
    expect(toRgba('#000', 0.5)).toEqual('rgba(0, 0, 0, 0.5)')
  })
})
