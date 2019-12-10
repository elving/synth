import height from '../src/height'

describe('height', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      height('height')({
        synth: {
          height: (value) => value,
        },
      }),
    ).toEqual('height')
  })
})
