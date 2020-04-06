import { toHex } from '../src/transforms'

describe('toHex', () => {
  test('transforms rgba value to hex value', () => {
    expect(toHex('rgba(0,0,0,1)')).toEqual('#000000')
    expect(toHex('rgba(0,0,0,0.5)')).toEqual('#0000007f')
  })
})
