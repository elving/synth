import { bottom } from '../src/bottom'

describe('bottom', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      bottom('bottom')({
        synth: {
          bottom: (value) => value,
        },
      }),
    ).toEqual('bottom')
  })
})
