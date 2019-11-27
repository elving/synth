import margin from '../src/margin'

describe('margin', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      margin('margin')({
        synth: {
          margin: (value) => value,
        },
      }),
    ).toEqual('margin')
  })
})
