import { border } from '../src/border'

describe('border', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      border('border')({
        synth: {
          border: (value) => value,
        },
      }),
    ).toEqual('border')
  })
})
