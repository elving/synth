import { opacity } from '../src/opacity'

const tokens = {
  style: {
    opacity: {
      base: 0.9,
      form_button: {
        default: 1,
        disabled: 0.5,
      },
    },
  },
}

describe('opacity', () => {
  test('returns CSS declaration for `opacity`', () => {
    expect(opacity(tokens)).toEqual('opacity: 0.9;')
    expect(opacity(tokens, 'form_button')).toEqual('opacity: 1;')
    expect(opacity(tokens, 'form_button:disabled')).toEqual('opacity: 0.5;')
  })
})
