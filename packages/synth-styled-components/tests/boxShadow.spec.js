import boxShadow from '../src/boxShadow'

describe('boxShadow', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      boxShadow('boxShadow')({
        synth: {
          boxShadow: (value) => value,
        },
      }),
    ).toEqual('boxShadow')
  })
})
