import margin from '../src/margin'

const tokens = {
  space: {
    margin: {
      base: [10, 15],
      primaryButton: {
        default: '10%',
        hover: '25%',
      },
    },
  },
}

describe('margin', () => {
  test('returns CSS declaration for `margin`', () => {
    expect(margin(tokens)).toEqual('margin: 10px 15px;')
    expect(margin(tokens, 'primaryButton')).toEqual('margin: 10%;')
    expect(margin(tokens, 'primaryButton:hover')).toEqual('margin: 25%;')
  })
})
