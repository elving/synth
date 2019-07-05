import { borderRadius } from '../src/borderRadius'

describe('borderRadius', () => {
  test('returns CSS declaration for `border-radius`', () => {
    expect(
      borderRadius(
        {
          size: {
            radius: {
              'primary-button': '5px',
              'primary-button:disabled': '0px',
            },
          },
        },
        'primary-button',
      ),
    ).toEqual('border-radius: 5px;')

    expect(
      borderRadius(
        {
          size: {
            radius: {
              'primary-button': '5px',
              'primary-button:disabled': '0px',
            },
          },
        },
        'primary-button:disabled',
      ),
    ).toEqual('border-radius: 0px;')
  })
})
