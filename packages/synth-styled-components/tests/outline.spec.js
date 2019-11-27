import outline from '../src/outline'

describe('outline', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      outline('outline')({
        synth: {
          outline: (value) => value,
        },
      }),
    ).toEqual('outline')
  })
})
