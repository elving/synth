# Synth

A design system based on [design tokens](https://www.youtube.com/watch?v=wDBEc3dJJV8).

## Naming Conventions

`category:property:name:modifier`

We use colons to separate concerns so that you are free to use hyphens (`-`), underscores (`_`) or camel casing for your token names.

### Categories

* color
* position
* size
* space
* style
* typography

### Properties

* color:background
* color:border
* color:outline
* color:shadow
* color:text
* position:bottom
* position:index
* position:left
* position:right
* position:top
* size:border
* size:height
* size:maxHeight
* size:maxWidth
* size:minHeight
* size:minWidth
* size:outline
* size:radius
* size:shadow
* size:width
* space:margin
* space:padding
* style:border
* style:opacity
* style:shadow
* typography:decoration
* typography:font
* typography:lineHeight
* typography:size
* typography:spacing
* typography:transform
* typography:weight

## CSS Property Mapping

* color:background => `background-color`
* color:border => `border`
* color:outline => `outline-color`
* color:text => `color`
* position:bottom => `bottom`
* position:index => `z-index`
* position:left => `left`
* position:right => `right`
* position:top => `top`
* size:border => `border-width`
* size:height => `height`
* size:maxHeight => `max-height`
* size:maxWidth => `max-width`
* size:minHeight => `min-height`
* size:minWidth => `min-width`
* size:outline => `outline-width`
* size:radius => `border-radius`
* size:width => `width`
* space:margin => `margin`
* space:padding => `padding`
* style:border => `border-style`
* style:opacity => `opacity`
* style:shadow => `box-shadow` => `inset | offset-x | offset-y | blur-radius | spread-radius | color`
* typography:decoration => `text-decoration`
* typography:font => `font-family`
* typography:lineHeight => `line-height`
* typography:size => `font-size`
* typography:spacing => `letter-spacing`
* typography:transform => `text-transform`
* typography:weight => `font-weight`

*Note that we don't have a `styling:outline` for the `outline-style` because we use `box-shadow` for outlines.*

### Modifiers

* active
* disabled
* focus
* hover

### Examples

```JSON
{
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

```JSON
{
  "color": {
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
