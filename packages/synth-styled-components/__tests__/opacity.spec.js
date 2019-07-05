import { opacity } from '../src/opacity'

describe('opacity', () => {
  test('returns a function that will pass on the given value.', () => {
    expect(
      opacity('opacity')({
        synth: {
          opacity: (value) => value,
        },
      }),
    ).toEqual('opacity')
  })
})
