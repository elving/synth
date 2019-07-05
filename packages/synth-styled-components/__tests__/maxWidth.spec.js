import { maxWidth } from '../src/maxWidth'

describe('maxWidth', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      maxWidth('maxWidth')({
        synth: {
          maxWidth: (value) => value,
        },
      }),
    ).toEqual('maxWidth')
  })
})
