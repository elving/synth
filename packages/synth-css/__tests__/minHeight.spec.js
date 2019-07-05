import { minHeight } from '../src/minHeight'

describe('minHeight', () => {
  test('returns CSS declaration for `min-height`', () => {
    expect(
      minHeight(
        {
          size: {
            minHeight: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('min-height: 120px;')

    expect(
      minHeight(
        {
          size: {
            minHeight: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('min-height: 100%;')
  })
})
