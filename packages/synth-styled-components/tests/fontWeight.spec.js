import fontWeight from '../src/fontWeight'

describe('fontWeight', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      fontWeight('fontWeight')({
        synth: {
          fontWeight: (value) => value,
        },
      }),
    ).toEqual('fontWeight')
  })
})
