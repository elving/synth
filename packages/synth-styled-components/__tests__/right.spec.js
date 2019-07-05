import { right } from '../src/right'

describe('right', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      right('right')({
        synth: {
          right: (value) => value,
        },
      }),
    ).toEqual('right')
  })
})
