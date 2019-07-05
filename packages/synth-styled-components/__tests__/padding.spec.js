import { padding } from '../src/padding'

describe('padding', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      padding('padding')({
        synth: {
          padding: (value) => value,
        },
      }),
    ).toEqual('padding')
  })
})
