import { zIndex } from '../src/zIndex'

describe('zIndex', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      zIndex('zIndex')({
        synth: {
          zIndex: (value) => value,
        },
      }),
    ).toEqual('zIndex')
  })
})
