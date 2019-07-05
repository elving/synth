import { minWidth } from '../src/minWidth'

describe('minWidth', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      minWidth('minWidth')({
        synth: {
          minWidth: (value) => value,
        },
      }),
    ).toEqual('minWidth')
  })
})
