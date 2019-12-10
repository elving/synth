import lineHeight from '../src/lineHeight'

describe('lineHeight', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      lineHeight('lineHeight')({
        synth: {
          lineHeight: (value) => value,
        },
      }),
    ).toEqual('lineHeight')
  })
})
