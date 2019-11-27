import maxHeight from '../src/maxHeight'

describe('maxHeight', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      maxHeight('maxHeight')({
        synth: {
          maxHeight: (value) => value,
        },
      }),
    ).toEqual('maxHeight')
  })
})
