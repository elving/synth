import { left } from '../src/left'

describe('left', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      left('left')({
        synth: {
          left: (value) => value,
        },
      }),
    ).toEqual('left')
  })
})
