import bindings from '../src/bindings'

import {
  ALL_BINDINGS,
  COLOR_BINDINGS_MAP,
  LENGTH_BINDINGS_MAP,
} from '../src/constants'

import { toCamelCase } from '../src/utils'

const tokens = {
  color: {
    aliases: {
      primary: '#e5e5e5',
    },
    background: {
      base: '#111',
      button: '@primary',
    },
    border: {
      base: '#000',
      button: '#d5d5d5',
    },
    shadow: {
      base: 'rgba(0, 0, 0, 0.5)',
      button: 'rgba(0, 0, 0, 0.15)',
    },
    text: {
      base: '#393939',
      heading: '#454545',
    },
  },

  motion: {
    aliases: {
      rush: '150ms',
    },
    delay: {
      base: '1.5s',
      fast: '@rush',
      slow: '0.5s',
    },
    duration: {
      base: '100ms',
      fast: '200ms',
      slow: '1500ms',
    },
    effect: {
      base: 'linear',
      fast: 'ease-in-out',
      slow: 'linear',
    },
  },

  position: {
    aliases: {
      far: 25,
    },
    bottom: {
      base: 5,
      popup: 15,
      toast_notification: '@far',
    },
    index: {
      base: 5,
      popup: 5,
      toast_notification: 10,
    },
    left: {
      base: 20,
      popup: 15,
      toast_notification: '5%',
    },
    right: {
      base: 15,
      popup: 15,
      toast_notification: '5%',
    },
    text: {
      base: 'left',
      button: 'center',
    },
    shadow: {
      base: [0, '@far'],
      button: [0, 1],
    },
    top: {
      base: '5%',
      popup: 15,
      toast_notification: '5%',
    },
  },

  size: {
    aliases: {
      sm: 320,
    },
    border: {
      base: 1,
      button: 1,
      input: 2,
    },
    height: {
      base: 10,
      sidebarIcon: 22,
    },
    maxHeight: {
      base: 120,
      usersList: 200,
    },
    maxWidth: {
      base: 1024,
      sm: '@sm',
      md: 720,
    },
    minHeight: {
      base: '10em',
      emptyState: 120,
    },
    minWidth: {
      base: 100,
      emptyState: 120,
    },
    radius: {
      base: 2,
      button: 3,
    },
    shadow: {
      base: 15,
      button: 10,
    },
    text: {
      base: 16,
      description: 13,
      heading: 24,
    },
    width: {
      base: '@sm',
      fullWidth: '100%',
    },
  },

  space: {
    aliases: {
      grid: [2, 4, 6, 8],
    },
    margin: {
      base: 10,
      paragraph: [0, 0, 15],
    },
    padding: {
      base: '@grid.2',
      button: ['@grid.4', '@grid.3'],
      input: '@grid.1 @grid.2 10px',
    },
  },

  style: {
    aliases: {
      normal: 'solid',
    },
    border: {
      base: 'dotted',
      button: '@normal',
    },
    text: {
      base: 'normal',
      emphasis: 'italic',
    },
    opacity: {
      base: 1,
      disabled: 0.35,
    },
  },

  typography: {
    aliases: {
      weightScale: [100, 200, 300],
    },
    decoration: {
      base: 'none',
      link: 'underline',
    },
    font: {
      base: '"Comic Sans MS"',
      code: 'monaco, monospace',
    },
    lineHeight: {
      base: 1.2,
      copy: 1.55,
    },
    spacing: {
      base: 0,
      lead: 2,
    },
    transform: {
      base: 'lowercase',
      heading: 'uppercase',
    },
    weight: {
      base: '@weightScale.1',
      heading: '@weightScale.3',
    },
  },
}

describe('css bindings', () => {
  Object.entries(ALL_BINDINGS).forEach(([cssProperty, tokenPrefix]) => {
    const [category, property] = tokenPrefix.split(':')
    const binding = toCamelCase(cssProperty)

    Object.keys(tokens[category][property]).forEach((tokenName) => {
      test(`${binding}(${tokenName})`, () => {
        const bindingValue = bindings[binding](tokens, tokenName)

        expect(bindingValue.toString()).toMatchSnapshot()
        expect(bindingValue).toMatchSnapshot()
      })

      test(`${binding}(${tokenName}) using base value`, () => {
        const bindingValue = bindings[binding](tokens)

        expect(bindingValue.toString()).toMatchSnapshot()
        expect(bindingValue).toMatchSnapshot()
      })

      test(`${binding}(${tokenName}) using alias token directly`, () => {
        const aliasName = Object.keys(tokens[category].aliases)[0]
        const aliasValue = tokens[category].aliases[aliasName]
        const bindingValue = bindings[binding](
          tokens,
          Array.isArray(aliasValue)
            ? `@${aliasName}.${aliasValue.length - 1}`
            : `@${aliasName}`,
        )

        expect(bindingValue.toString()).toMatchSnapshot()
        expect(bindingValue).toMatchSnapshot()
      })

      if (Object.values(COLOR_BINDINGS_MAP).includes(tokenPrefix)) {
        test(`${binding}(${tokenName}) color transforms`, () => {
          const bindingValue = bindings[binding](tokens, tokenName)
          expect(bindingValue.hex().toString()).toMatchSnapshot()
          expect(bindingValue.toJSON().hex()).toMatchSnapshot()
          expect(bindingValue.rgba().toString()).toMatchSnapshot()
          expect(bindingValue.toJSON().rgba()).toMatchSnapshot()
          expect(bindingValue.rgba(0.5).toString()).toMatchSnapshot()
          expect(bindingValue.toJSON().rgba(0.5)).toMatchSnapshot()
        })
      }

      if (Object.values(LENGTH_BINDINGS_MAP).includes(tokenPrefix)) {
        test(`${binding}(${tokenName}) length transforms`, () => {
          const bindingValue = bindings[binding](tokens, tokenName)
          expect(bindingValue.rem().toString()).toMatchSnapshot()
          expect(bindingValue.toJSON().rem()).toMatchSnapshot()
          expect(bindingValue.em().toString()).toMatchSnapshot()
          expect(bindingValue.toJSON().em()).toMatchSnapshot()
        })
      }
    })
  })

  test('border CSS binding', () => {
    const bindingValue = bindings.border(tokens, 'button')
    expect(bindingValue.toString()).toMatchSnapshot()
    expect(bindingValue).toMatchSnapshot()
  })

  test('shadow CSS binding', () => {
    const bindingValue = bindings.boxShadow(tokens, 'button')
    expect(bindingValue.toString()).toMatchSnapshot()
    expect(bindingValue).toMatchSnapshot()
  })
})
