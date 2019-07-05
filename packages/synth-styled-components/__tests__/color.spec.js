import { color } from '../src/color'

describe('color', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      color('color')({
        synth: {
          color: (value) => value,
        },
      }),
    ).toEqual('color')
  })
})
