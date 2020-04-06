import { toRem } from '../src/transforms'

const tokens = {
  size: {
    text: {
      base: 18,
    },
  },
}

describe('toRem', () => {
  test('transforms pixel value to rem relative to the base font size', () => {
    expect(toRem(tokens, 22)).toEqual('1.2222rem')
  })
})
