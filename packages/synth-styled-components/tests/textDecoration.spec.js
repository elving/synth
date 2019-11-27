import textDecoration from '../src/textDecoration'

describe('textDecoration', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      textDecoration('textDecoration')({
        synth: {
          textDecoration: (value) => value,
        },
      }),
    ).toEqual('textDecoration')
  })
})
