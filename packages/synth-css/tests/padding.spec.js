import padding from '../src/padding'

const tokens = {
  space: {
    padding: {
      base: [5, 10, '6em'],
      primaryButton: {
        default: '10px 15px',
        hover: '15%',
      },
    },
  },
}

describe('padding', () => {
  test('returns CSS declaration for `padding`', () => {
    expect(padding(tokens)).toEqual('padding: 5px 10px 6em;')
    expect(padding(tokens, 'primaryButton')).toEqual('padding: 10px 15px;')
    expect(padding(tokens, 'primaryButton:hover')).toEqual('padding: 15%;')
  })
})
