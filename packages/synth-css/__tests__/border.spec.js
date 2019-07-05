import { border } from '../src/border'

describe('border', () => {
  test('returns CSS declaration for `border`', () => {
    expect(
      border(
        {
          color: {
            border: {
              default_button: '#333',
              'default_button:hover': '#111',
            },
          },
          size: {
            border: {
              default_button: '1px',
              'default_button:hover': '2px',
            },
          },
          style: {
            border: {
              default_button: 'solid',
              'default_button:hover': 'solid',
            },
          },
        },
        'default_button',
      ),
    ).toEqual('border-width: 1px; border-style: solid; border-color: #333;')

    expect(
      border(
        {
          color: {
            border: {
              default_button: '#333',
              'default_button:hover': '#111',
            },
          },
          size: {
            border: {
              default_button: '1px',
              'default_button:hover': '2px',
            },
          },
          style: {
            border: {
              default_button: 'solid',
              'default_button:hover': 'solid',
            },
          },
        },
        'default_button:hover',
      ),
    ).toEqual('border-width: 2px; border-style: solid; border-color: #111;')
  })
})
