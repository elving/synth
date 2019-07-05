import { fontSize } from '../src/fontSize'

describe('fontSize', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      fontSize('fontSize')({
        synth: {
          fontSize: (value) => value,
        },
      }),
    ).toEqual('fontSize')
  })
})
