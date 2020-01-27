import { toEm } from '../src/transforms'

const tokens = {
  size: {
    text: {
      base: 18,
      content: 1024,
    },
  },
}

describe('toEm', () => {
  test('transforms pixel value to em relative to the base font size', () => {
    expect(toEm(tokens, 22)).toEqual('1.2222em')
  })

  test('transforms pixel value to em relative to the `content` token font size', () => {
    expect(toEm(tokens, 18, 'content')).toEqual('0.0176em')
  })
})
