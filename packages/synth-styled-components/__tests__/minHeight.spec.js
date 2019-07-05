import { minHeight } from '../src/minHeight'

describe('minHeight', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      minHeight('minHeight')({
        synth: {
          minHeight: (value) => value,
        },
      }),
    ).toEqual('minHeight')
  })
})
