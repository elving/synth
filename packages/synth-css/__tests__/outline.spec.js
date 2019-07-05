import { outline } from '../src/outline'

describe('outline', () => {
  test('returns CSS declaration for `box-shadow`', () => {
    expect(
      outline(
        {
          color: {
            outline: {
              modalInput: '#333',
              'modalInput:focus': '#222',
            },
          },
          size: {
            outline: {
              modalInput: '1px',
              'modalInput:focus': '3px',
            },
          },
        },
        'modalInput',
      ),
    ).toEqual('box-shadow: 0 0 0 1px #333;')

    expect(
      outline(
        {
          color: {
            outline: {
              modalInput: '#333',
              'modalInput:focus': '#222',
            },
          },
          size: {
            outline: {
              modalInput: '1px',
              'modalInput:focus': '3px',
            },
          },
        },
        'modalInput:focus',
      ),
    ).toEqual('box-shadow: 0 0 0 3px #222;')
  })
})
