import { boxShadow } from '../src/boxShadow'

describe('boxShadow', () => {
  test('returns CSS declaration for `box-shadow`', () => {
    expect(
      boxShadow(
        {
          style: {
            shadow: {
              textInput: '0 0 1px #333',
              'textInput:focus': '0 0 3px #333',
            },
          },
        },
        'textInput',
      ),
    ).toEqual('box-shadow: 0 0 1px #333;')

    expect(
      boxShadow(
        {
          style: {
            shadow: {
              textInput: '0 0 1px #333',
              'textInput:focus': '0 0 3px #333',
            },
          },
        },
        'textInput:focus',
      ),
    ).toEqual('box-shadow: 0 0 3px #333;')
  })
})
