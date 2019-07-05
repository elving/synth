import { top } from '../src/top'

describe('top', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      top('top')({
        synth: {
          top: (value) => value,
        },
      }),
    ).toEqual('top')
  })
})
