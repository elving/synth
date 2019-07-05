import { maxWidth } from '../src/maxWidth'

describe('maxWidth', () => {
  test('returns CSS declaration for `max-width`', () => {
    expect(
      maxWidth(
        {
          size: {
            maxWidth: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('max-width: 120px;')

    expect(
      maxWidth(
        {
          size: {
            maxWidth: {
              primaryButton: '120px',
              'primaryButton:hover': '100%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('max-width: 100%;')
  })
})
