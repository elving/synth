import { width } from '../src/width'

describe('width', () => {
  test('returns CSS declaration for `width`', () => {
    expect(
      width(
        {
          size: {
            width: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('width: 120px;')

    expect(
      width(
        {
          size: {
            width: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('width: 100%;')
  })
})
