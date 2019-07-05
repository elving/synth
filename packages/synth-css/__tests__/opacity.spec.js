import { opacity } from '../src/opacity'

describe('opacity', () => {
  test('returns CSS declaration for `opacity`', () => {
    expect(
      opacity(
        {
          style: {
            opacity: {
              form_button: 1,
              'form_button:disabled': 0.5,
            },
          },
        },
        'form_button',
      ),
    ).toEqual('opacity: 1;')

    expect(
      opacity(
        {
          style: {
            opacity: {
              form_button: 1,
              'form_button:disabled': 0.5,
            },
          },
        },
        'form_button:disabled',
      ),
    ).toEqual('opacity: 0.5;')
  })
})
