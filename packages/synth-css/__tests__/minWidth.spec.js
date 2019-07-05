import { minWidth } from '../src/minWidth'

describe('minWidth', () => {
  test('returns CSS declaration for `min-width`', () => {
    expect(
      minWidth(
        {
          size: {
            minWidth: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('min-width: 120px;')

    expect(
      minWidth(
        {
          size: {
            minWidth: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('min-width: 100%;')
  })
})
