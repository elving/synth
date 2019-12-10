import outline from '../src/outline'

const tokens = {
  color: {
    outline: {
      base: '#000',
      modalInput: {
        default: '#333',
        focus: '#222',
      },
    },
  },
  size: {
    outline: {
      base: 2,
      modalInput: {
        default: '1px',
        focus: '3px',
      },
    },
  },
  space: {
    outline: {
      base: 1,
      modalInput: {
        default: 2,
        focus: 3,
      },
    },
  },
  style: {
    outline: {
      base: 'dotted',
      modalInput: {
        default: 'solid',
        focus: 'solid',
      },
    },
  },
}

describe('outline', () => {
  test('returns CSS declaration for `outline`', () => {
    expect(outline(tokens)).toEqual(
      'outline-width: 2px; outline-style: dotted; outline-color: #000; outline-offset: 1px;',
    )

    expect(outline(tokens, 'modalInput')).toEqual(
      'outline-width: 1px; outline-style: solid; outline-color: #333; outline-offset: 2px;',
    )

    expect(outline(tokens, 'modalInput:focus')).toEqual(
      'outline-width: 3px; outline-style: solid; outline-color: #222; outline-offset: 3px;',
    )
  })

  test('fails if given an invalid token declaration', () => {
    expect(() => outline({}, 'modalInput:focus')).toThrow()
  })
})
