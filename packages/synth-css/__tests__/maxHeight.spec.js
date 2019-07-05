import { maxHeight } from '../src/maxHeight'

describe('maxHeight', () => {
  test('returns CSS declaration for `max-height`', () => {
    expect(
      maxHeight(
        {
          size: {
            maxHeight: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('max-height: 120px;')

    expect(
      maxHeight(
        {
          size: {
            maxHeight: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('max-height: 100%;')
  })
})
