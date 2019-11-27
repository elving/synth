import textTransform from '../src/textTransform'

describe('textTransform', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      textTransform('textTransform')({
        synth: {
          textTransform: (value) => value,
        },
      }),
    ).toEqual('textTransform')
  })
})
