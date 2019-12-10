import letterSpacing from '../src/letterSpacing'

describe('letterSpacing', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      letterSpacing('letterSpacing')({
        synth: {
          letterSpacing: (value) => value,
        },
      }),
    ).toEqual('letterSpacing')
  })
})
