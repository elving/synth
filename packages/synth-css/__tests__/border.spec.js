import { border } from '../src/border'

const tokens = {
  color: {
    border: {
      base: 'red',
      default_button: {
        default: '#333',
        hover: '#111',
      },
    },
  },
  size: {
    border: {
      base: 1,
      default_button: {
        default: 1,
        hover: '2px',
      },
    },
  },
  style: {
    border: {
      base: 'dotted',
      default_button: {
        default: 'solid',
        hover: 'solid',
      },
    },
  },
}

describe('border', () => {
  test('returns CSS declaration for `border`', () => {
    expect(border(tokens)).toEqual(
      'border-width: 1px; border-style: dotted; border-color: red;',
    )

    expect(border(tokens, 'default_button')).toEqual(
      'border-width: 1px; border-style: solid; border-color: #333;',
    )

    expect(border(tokens, 'default_button:hover')).toEqual(
      'border-width: 2px; border-style: solid; border-color: #111;',
    )
  })
})
