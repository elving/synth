import borderRadius from '../src/borderRadius'

const tokens = {
  size: {
    radius: {
      base: 2,
      primary_button: {
        default: 5,
        disabled: 0,
      },
    },
  },
}

describe('borderRadius', () => {
  test('returns CSS declaration for `border-radius`', () => {
    expect(borderRadius(tokens)).toEqual('border-radius: 2px;')

    expect(borderRadius(tokens, 'primary_button')).toEqual(
      'border-radius: 5px;',
    )

    expect(borderRadius(tokens, 'primary_button:disabled')).toEqual(
      'border-radius: 0px;',
    )
  })
})
