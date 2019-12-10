import width from '../src/width'

describe('width', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      width('width')({
        synth: {
          width: (value) => value,
        },
      }),
    ).toEqual('width')
  })
})
