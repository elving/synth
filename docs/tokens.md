# Tokens

Synth tokens follow a naming convention that promotes maintainability by providing a consistent naming structure. This naming convention also allows tooling to parse tokens for specific usages.

## Token Structure

`category:property:name:modifier`

We use colons to separate theming concerns so that you are free to use hyphens (`-`), underscores (`_`) or camel casing for your token names.

## Categories

- color
- position
- size
- space
- style
- typography

## Properties

- color:background
- color:border
- color:outline
- color:shadow
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
- size:shadow
- size:width
- space:margin
- space:padding
- style:border
- style:opacity
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
- space:padding => `padding`
- style:border => `border-style`
- style:opacity => `opacity`
- style:shadow => `box-shadow`
- typography:decoration => `text-decoration`
- typography:font => `font-family`
- typography:lineHeight => `line-height`
- typography:size => `font-size`
- typography:spacing => `letter-spacing`
- typography:transform => `text-transform`
- typography:weight => `font-weight`

_Note that we don't support `style:outline` like we do for borders (`style:border`) for the `outline-style` CSS property because we use `box-shadow` for to implement outlines._

## Modifiers

- active
- disabled
- focus
- hover

## Global Tokens

Synth supports global tokens so you can reuse the same value on different token declarations. In order to define a global token, define it at the root of your declarations file and prefix it's name with an "at sign", e.g. `@mediumSpacing`. You can use global tokens as values for any token:

```JSON
{
  "@mediumSpacing": "10px",

  "size": {
    "padding": {
      "login_button": "@mediumSpacing"
    }
  }
}
```

## Examples

We currently support 2 types of token declaration structures:

### Flat

```JSON
{
  "@primaryBlue": "#1976D2",
  "color:background:primary-button": "@primaryBlue",
  "color:shadow:user_card": "rgba(0, 0, 0, 0.35)",
  "color:text:menuLink:hover": "#0000D0",
  "color:text:menuLink": "#0000E0",
  "position:right:notification": "15px",
  "position:top:notification": "15px",
  "size:maxWidth:user_card": "250px",
  "size:radius:primary-button": "5px",
  "size:shadow:user_card": "0 0 15px",
  "space:padding:primary-button": "10px 15px",
  "style:opacity:primary-button:disabled": 0.5,
  "typography:decoration:menuLink:hover": "underline"
}
```

### Expanded

```JSON
{
  "@primaryBlue": "#1976D2",

  "color": {
    "background": {
      "primary-button": "@primaryBlue"
    },

    "text": {
      "menuLink": "#0000E0",
      "menuLink:hover": "#0000D0"
    },

    "shadow": {
      "user_card": "rgba(0, 0, 0, 0.35)"
    },
  },

  "position": {
    "right": {
      "notification": "15px"
    },

    "top": {
      "notification": "15px"
    }
  },

  "size": {
    "radius": {
      "primary-button": "5px"
    },

    "maxWidth": {
      "user_card": "250px"
    },

    "shadow": {
      "user_card": "0 0 15px"
    }
  },

  "space": {
    "padding": {
      "primary-button": "10px 15px"
    }
  },

  "style": {
    "opacity": {
      "primary-button:disabled": 0.5
    }
  },

  "typography": {
    "decoration":{
      "menuLink:hover": "underline"
    }
  }
}
```
