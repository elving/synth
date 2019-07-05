import { padding } from '../src/padding'

describe('padding', () => {
  test('returns CSS declaration for `padding`', () => {
    expect(
      padding(
        {
          space: {
            padding: {
              primaryButton: '10px 15px',
              'primaryButton:hover': '15%',
            },
          },
        },
        'primaryButton',
      ),
    ).toEqual('padding: 10px 15px;')

    expect(
      padding(
        {
          space: {
            padding: {
              primaryButton: '10px 15px',
              'primaryButton:hover': '15%',
            },
          },
        },
        'primaryButton:hover',
      ),
    ).toEqual('padding: 15%;')
  })
})
