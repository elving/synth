# Tokens

Synth tokens follow a naming convention that promotes maintainability by providing a consistent naming structure. This naming convention also allows tooling to parse tokens for specific usages.

## Token Structure

`category:property:name:modifier`

We use colons to separate theming concerns so that you are free to use hyphens (`-`), underscores (`_`) or camel casing for your token names.

## Categories

- color
- global
- position
- size
- space
- style
- typography

## Properties

- color:background
- color:border
- color:outline
- color:text
- position:bottom
- position:index
- position:left
- position:right
- position:top
- size:border
- size:height
- size:maxHeight
- size:maxWidth
- size:minHeight
- size:minWidth
- size:outline
- size:radius
- size:width
- space:margin
- space:outline
- space:padding
- style:border
- style:opacity
- style:outline
- style:shadow
- typography:decoration
- typography:font
- typography:lineHeight
- typography:size
- typography:spacing
- typography:transform
- typography:weight

## CSS Property Mapping

We map categories and properties to specific CSS properties:

- color:background => `background-color`
- color:border => `border`
- color:outline => `outline-color`
- color:text => `color`
- position:bottom => `bottom`
- position:index => `z-index`
- position:left => `left`
- position:right => `right`
- position:top => `top`
- size:border => `border-width`
- size:height => `height`
- size:maxHeight => `max-height`
- size:maxWidth => `max-width`
- size:minHeight => `min-height`
- size:minWidth => `min-width`
- size:outline => `outline-width`
- size:radius => `border-radius`
- size:width => `width`
- space:margin => `margin`
- space:outline => `outline-offset`
- space:padding => `padding`
- style:border => `border-style`
- style:opacity => `opacity-style`
- style:outline => `outline-style`
- style:shadow => `box-shadow`
- typography:decoration => `text-decoration`
- typography:font => `font-family`
- typography:lineHeight => `line-height`
- typography:size => `font-size`
- typography:spacing => `letter-spacing`
- typography:transform => `text-transform`
- typography:weight => `font-weight`

## Modifiers

- default
- active
- disabled
- focus
- hover

The `default` modifier is only necessary whenever you are defining other modifiers for your tokens.

```JSON
{
  "color": {
    "background": {
      "button": {
        "default": "#ddd",
        "disabled": "#eee"
      },

      "input": "ccc"
    }
  }
}
```

```javascript
import { getTokenValue } from '@beatgig/synth-core'

// Will return '#ddd'
getTokenValue({
  color: {
    background: {
      button: '#ddd',
    },
  },
}, 'color:background:button')

// Will return '#eee'
getTokenValue({
  color: {
    background: {
      button: {
        default: '#ddd',
        disabled: '#eee',
      },
    },
  },
}, 'color:background:button:disabled')

// Will return '#ddd'
getTokenValue({
  color: {
    background: {
      button: {
        default: '#ddd',
        disabled: '#eee',
      },
    },
  },
}, 'color:background:button')

// Will also return '#ddd'
getTokenValue({
  color: {
    background: {
      button: {
        default: '#ddd',
        disabled: '#eee',
      },
    },
  },
}, 'color:background:button:default')
```

## Global Tokens

Synth supports global tokens so you can reuse the same value on different token declarations. Global tokens are defined on the root of your tokens declaration file under the special `global` category:

```JSON
{
  // Define global tokens under the `global` category.
  "global": {
    "lightDark": "#444",
    "mediumSpacing": "10px",
  }

  // Now you can use global tokens on the rest of your token declarations.
  "color": {
    "background": {
      "primaryButton": "@lightDark"
    },

    "text": {
      "mainCopy": "@lightDark"
    }
  },

  "space": {
    "padding": {
      "primaryButton": "@mediumSpacing"
    }
  }  
}
```

## Token Values

Synth tokens support 3 different types of values:

### Strings

String values will be used "as is" by `synth-css` utility functions.

```JSON
{
  "global": {
    "darkUniverse": "#212121",
    "headingText": "22px"
  }
}
```

### Numbers

Number values will be interpreted as pixel units, unless the token is being used
for CSS properties that don't support [length data types](https://developer.mozilla.org/en-US/docs/Web/CSS/length), e.g. `line-height`,
`font-weight`, etc.

```JSON
{
  "global": {
    "normalSize": 16,
  }
}
```

```javascript
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { fontSize, fontWeight } from '@beatgig/synth-styled-components'

const Text = styled.p`  
  /** font-size: 16px; */
  ${fontSize('@normalSize')}
  /** font-weight: 16; */
  ${fontWeight('@normalSize')}
`

export default withSynth(Text)
```

### Arrays

Array values will be mapped through and their elements interpreted as
string and number values separately.

```JSON
{
  "space": {
    "padding": {
      "primaryButton": [10, '5%']
    },
  }
}
```

```javascript
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { padding } from '@beatgig/synth-styled-components'

const Button = styled.button`  
  /** padding: 10px 5%; */
  ${padding('primaryButton')}
`

export default withSynth(Button)
```

You can also consume array token values on other token declarations by using
dot notation:

```JSON
{
  "global": {
    "blueScale": ["#555770", "#6B758C", "#8194A7", "#97B6C2"],
  },

  "color": {
    "background": {
      "primaryButton": "@blueScale",
      "secondaryButton": "@blueScale.1"
    }
  }
}
```

In the example above, the `color:background:primaryButton` token will have a
value of `#555770` because omitting the dot notation when referencing an array
token value will default to it's first element (in this case `#555770`). The
`color:background:secondaryButton` token will have a value of `#6B758C` because
[using dot notation is basically accessing a specific element of the `global:blueScale` array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements).

### Base Values

You can define default or base values for specific categories and properties by using the special `base` name under any category property:

```JSON
{
  "global": {
    "fontSizes": [12, 14, 16, 18, 20, 22],
    "textColor": "#454545"
  },

  "color": {
    "text": {
      "base": "@textColor",
    },
  },

  "typography": {
    "size": {
      "base": "@fontSizes.1"
    },
  }
}
```

```javascript
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { color, fontSize } from '@beatgig/synth-styled-components'

const Text = styled.p`  
  /** color: #454545; */
  ${color()}
  /** font-size: 14px; */
  ${fontSize()}
`

export default withSynth(Text)
```

In the example above, calling the `color` and `fontSize` utility functions
without any values will default to use the `base` token values defined on the
token declarations object, i.e. `color() => color:text:base` and 
`fontSize() => typography:size:base`.

## Example Token Declarations

```JSON
{
  "global": {
    "fontSizes": [12, 14, 16, 18, 20, 22],
    "mediumSpace": 15,
    "primaryBlue": "#1976D2"
  },

  "color": {
    "background": {
      "primary_button": "@primaryBlue"
    },

    "text": {
      "menuLink": {
        "default": "#0000E0",
        "hover": "#0000D0"
      },
    },
  },

  "position": {
    "right": {
      "notification": 15
    },

    "top": {
      "notification": 15
    }
  },

  "size": {
    "radius": {
      "primary_button": 6
    },

    "maxWidth": {
      "userCard": 480
    }
  },

  "space": {
    "padding": {
      "primary_button": [5, '@mediumSpace']
    }
  },

  "style": {
    "opacity": {
      "primary_button": {
        "disabled": 0.5
      }
    },

    "shadow": {
      "userCard": "0 0 15px rgba(0, 0, 0, 0.5)"
    }
  },

  "typography": {
    "size": {
      "base": "@fontSizes",
      "menuLink": "@fontSizes.1"
    },

    "decoration": {
      "menuLink": {
        "hover": "underline"
      }
    }
  }
}
```
