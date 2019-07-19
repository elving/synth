import { fontWeight } from '../src/fontWeight'

const tokens = {
  typography: {
    weight: {
      base: 100,
      menuLink: {
        default: 300,
        hover: 600,
      },
    },
  },
}

describe('fontWeight', () => {
  test('returns CSS declaration for `font-weight`', () => {
    expect(fontWeight(tokens)).toEqual('font-weight: 100;')
    expect(fontWeight(tokens, 'menuLink')).toEqual('font-weight: 300;')
    expect(fontWeight(tokens, 'menuLink:hover')).toEqual('font-weight: 600;')
  })
})
