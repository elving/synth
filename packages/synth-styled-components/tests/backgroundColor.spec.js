import backgroundColor from '../src/backgroundColor'

describe('backgroundColor', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      backgroundColor('backgroundColor')({
        synth: {
          backgroundColor: (value) => value,
        },
      }),
    ).toEqual('backgroundColor')
  })
})
