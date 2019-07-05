import { borderRadius } from '../src/borderRadius'

describe('borderRadius', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      borderRadius('borderRadius')({
        synth: {
          borderRadius: (value) => value,
        },
      }),
    ).toEqual('borderRadius')
  })
})
