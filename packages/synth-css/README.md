# `@beatgig/synth-css`

CSS bindings for Synth.

## Installation

```bash
yarn add @beatgig/synth-css
```

## Constants

<dl>
<dt><a href="#backgroundColor">backgroundColor</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>background-color</code> property.</p>
</dd>
<dt><a href="#border">border</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>border</code> property.</p>
</dd>
<dt><a href="#borderRadius">borderRadius</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>border-radius</code> property.</p>
</dd>
<dt><a href="#bottom">bottom</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>bottom</code> property.</p>
</dd>
<dt><a href="#boxShadow">boxShadow</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>box-shadow</code> property.</p>
</dd>
<dt><a href="#color">color</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>color</code> property.</p>
</dd>
<dt><a href="#fontFamily">fontFamily</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>font-family</code> property.</p>
</dd>
<dt><a href="#fontSize">fontSize</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>font-size</code> property.</p>
</dd>
<dt><a href="#fontWeight">fontWeight</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>font-weight</code> property.</p>
</dd>
<dt><a href="#height">height</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>height</code> property.</p>
</dd>
<dt><a href="#left">left</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>left</code> property.</p>
</dd>
<dt><a href="#letterSpacing">letterSpacing</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>letter-spacing</code> property.</p>
</dd>
<dt><a href="#lineHeight">lineHeight</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>line-height</code> property.</p>
</dd>
<dt><a href="#margin">margin</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>margin</code> property.</p>
</dd>
<dt><a href="#maxHeight">maxHeight</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>max-height</code> property.</p>
</dd>
<dt><a href="#maxWidth">maxWidth</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>max-width</code> property.</p>
</dd>
<dt><a href="#minHeight">minHeight</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>min-height</code> property.</p>
</dd>
<dt><a href="#minWidth">minWidth</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>min-width</code> property.</p>
</dd>
<dt><a href="#opacity">opacity</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>opacity</code> property.</p>
</dd>
<dt><a href="#outline">outline</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>outline</code> property using <code>box-shadow</code>.</p>
</dd>
<dt><a href="#padding">padding</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>padding</code> property.</p>
</dd>
<dt><a href="#right">right</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>right</code> property.</p>
</dd>
<dt><a href="#textDecoration">textDecoration</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>text-decoration</code> property.</p>
</dd>
<dt><a href="#textTransform">textTransform</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>text-transform</code> property.</p>
</dd>
<dt><a href="#top">top</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>top</code> property.</p>
</dd>
<dt><a href="#width">width</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>width</code> property.</p>
</dd>
<dt><a href="#withTokens">withTokens</a> ⇒ <code><a href="#CSSBindings">CSSBindings</a></code></dt>
<dd><p>Returns an object containing all CSS helper functions with the given
<code>tokens</code> already passed as the first argument.</p>
</dd>
<dt><a href="#zIndex">zIndex</a> ⇒ <code>string</code></dt>
<dd><p>Returns CSS declaration for the <code>z-index</code> property.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CSSBindings">CSSBindings</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="backgroundColor"></a>

## backgroundColor ⇒ <code>string</code>
Returns CSS declaration for the `background-color` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { backgroundColor } from '@beatgig/synth-css'

backgroundColor({
  color: {
    background: {
      primaryButton: '#333',
    },
  },
}, 'primaryButton')
// => background-color: #333;

backgroundColor({
  color: {
    background: {
      primaryButton: '#333',
      'primaryButton:hover': '#111',
    },
  },
}, 'primaryButton:hover')
// => background-color: #111;
```
<a name="border"></a>

## border ⇒ <code>string</code>
Returns CSS declaration for the `border` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { border } from '@beatgig/synth-css'

border({
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
  }
}, 'default_button')
// => border-width: 1px; border-style: solid; border-color: #333;

border({
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
  }
}, 'default_button:hover')
// => border-width: 2px; border-style: solid; border-color: #111;
```
<a name="borderRadius"></a>

## borderRadius ⇒ <code>string</code>
Returns CSS declaration for the `border-radius` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { borderRadius } from '@beatgig/synth-css'

borderRadius({
  size: {
    radius: {
      'primary-button': '5px',
      'primary-button:disabled': '0px',
    },
  },
}, 'primary-button')
// => border-radius: 5px;

borderRadius({
  size: {
    radius: {
      'primary-button': '5px',
      'primary-button:disabled': '0px',
    },
  },
}, 'primary-button:disabled')
// => border-radius: 0px;
```
<a name="bottom"></a>

## bottom ⇒ <code>string</code>
Returns CSS declaration for the `bottom` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { bottom } from '@beatgig/synth-css'

bottom({
  position: {
    bottom: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button')
// => bottom: 15px;

bottom({
  position: {
    bottom: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button:disabled')
// => bottom: 25px;
```
<a name="boxShadow"></a>

## boxShadow ⇒ <code>string</code>
Returns CSS declaration for the `box-shadow` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { boxShadow } from '@beatgig/synth-css'

boxShadow({
  style: {
    shadow: {
      textInput: '0 0 1px #333',
      'textInput:focus': '0 0 3px #333',
    },
  },
}, 'textInput')
// => box-shadow: 0 0 1px #333;

boxShadow({
  style: {
    shadow: {
      textInput: '0 0 1px #333',
      'textInput:focus': '0 0 3px #333',
    },
  },
}, 'textInput:focus')
// => box-shadow: 0 0 3px #333;
```
<a name="color"></a>

## color ⇒ <code>string</code>
Returns CSS declaration for the `color` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { color } from '@beatgig/synth-css'

color({
  color: {
    text: {
      caption: '#333',
      'caption:hover': '#555',
    },
  },
}, 'caption')
// => color: #333;

color({
  color: {
    text: {
      caption: '#333',
      'caption:hover': '#555',
    },
  },
}, 'caption:hover')
// => color: #555;
```
<a name="fontFamily"></a>

## fontFamily ⇒ <code>string</code>
Returns CSS declaration for the `font-family` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { fontFamily } from '@beatgig/synth-css'

fontFamily({
  typography: {
    font: {
      text_field: 'helvetica',
      'text_field:disabled': 'arial',
    },
  },
}, 'text_field')
// => font-family: helvetica;

fontFamily({
  typography: {
    font: {
      text_field: 'helvetica',
      'text_field:disabled': 'arial',
    },
  },
}, 'text_field:disabled')
// => font-family: arial;
```
<a name="fontSize"></a>

## fontSize ⇒ <code>string</code>
Returns CSS declaration for the `font-size` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { fontSize } from '@beatgig/synth-css'

fontSize({
  typography: {
    size: {
      menu_link: '16px',
      'menu_link:disabled': '14px',
    },
  },
}, 'menu_link')
// => font-size: 16px;

fontSize({
  typography: {
    size: {
      menu_link: '16px',
      'menu_link:disabled': '14px',
    },
  },
}, 'menu_link:disabled')
// => font-size: 14px;
```
<a name="fontWeight"></a>

## fontWeight ⇒ <code>string</code>
Returns CSS declaration for the `font-weight` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { fontWeight } from '@beatgig/synth-css'

fontWeight({
  typography: {
    weight: {
      'menu-link': '300',
      'menu-link:hover': '600',
    },
  },
}, 'menu-link')
// => font-weight: 300;

fontWeight({
  typography: {
    weight: {
      'menu-link': '300',
      'menu-link:hover': '600',
    },
  },
}, 'menu-link:hover')
// => font-weight: 600;
```
<a name="height"></a>

## height ⇒ <code>string</code>
Returns CSS declaration for the `height` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { height } from '@beatgig/synth-css'

height({
  size: {
    height: {
      button: '100%',
      'button:hover': '120%',
    },
  },
}, 'button')
// => height: 100%;

height({
  size: {
    height: {
      button: '100%',
      'button:hover': '120%',
    },
  },
}, 'button:hover')
// => height: 120%;
```
<a name="left"></a>

## left ⇒ <code>string</code>
Returns CSS declaration for the `left` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { left } from '@beatgig/synth-css'

left({
  position: {
    left: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button')
// => left: 15px;

left({
  position: {
    left: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button:disabled')
// => left: 25px;
```
<a name="letterSpacing"></a>

## letterSpacing ⇒ <code>string</code>
Returns CSS declaration for the `letter-spacing` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { letterSpacing } from '@beatgig/synth-css'

letterSpacing({
  typography: {
    spacing: {
      'menu-link': 'normal',
      'menu-link:disabled': '4px',
    },
  },
}, 'menu-link')
// => letter-spacing: normal;

letterSpacing({
  typography: {
    spacing: {
      'menu-link': 'normal',
      'menu-link:disabled': '4px',
    },
  },
}, 'menu-link:disabled')
// => letter-spacing: 4px;
```
<a name="lineHeight"></a>

## lineHeight ⇒ <code>string</code>
Returns CSS declaration for the `line-height` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { lineHeight } from '@beatgig/synth-css'

lineHeight({
  typography: {
    lineHeight: {
      'menu_link': 1.5,
      'menu_link:disabled': 1.65,
    },
  },
}, 'menu_link')
// => line-height: 1.5;

lineHeight({
  typography: {
    lineHeight: {
      'menu_link': 1.5,
      'menu_link:disabled': 1.65,
    },
  },
}, 'menu_link:disabled')
// => line-height: 1.65;
```
<a name="margin"></a>

## margin ⇒ <code>string</code>
Returns CSS declaration for the `margin` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { margin } from '@beatgig/synth-css'

margin({
  space: {
    margin: {
      'primaryButton': '10%',
      'primaryButton:hover': '25%'
    },
  },
}, 'primaryButton')
// => margin: 10%;

margin({
  space: {
    margin: {
      'primaryButton': '10%',
      'primaryButton:hover': '25%'
    },
  },
}, 'primaryButton:hover')
// => margin: 25%;
```
<a name="maxHeight"></a>

## maxHeight ⇒ <code>string</code>
Returns CSS declaration for the `max-height` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { maxHeight } from '@beatgig/synth-css'

maxHeight({
  size: {
    maxHeight: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton')
// => max-height: 120px;

maxHeight({
  size: {
    maxHeight: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton:hover')
// => max-height: 100%;
```
<a name="maxWidth"></a>

## maxWidth ⇒ <code>string</code>
Returns CSS declaration for the `max-width` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { maxWidth } from '@beatgig/synth-css'

maxWidth({
  size: {
    maxWidth: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton')
// => max-width: 120px;

maxWidth({
  size: {
    maxWidth: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton:hover')
// => max-width: 100%;
```
<a name="minHeight"></a>

## minHeight ⇒ <code>string</code>
Returns CSS declaration for the `min-height` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { minHeight } from '@beatgig/synth-css'

minHeight({
  size: {
    minHeight: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton')
// => min-height: 120px;

minHeight({
  size: {
    minHeight: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton:hover')
// => min-height: 100%;
```
<a name="minWidth"></a>

## minWidth ⇒ <code>string</code>
Returns CSS declaration for the `min-width` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { minWidth } from '@beatgig/synth-css'

minWidth({
  size: {
    minWidth: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton')
// => min-width: 120px;

minWidth({
  size: {
    minWidth: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton:hover')
// => min-width: 100%;
```
<a name="opacity"></a>

## opacity ⇒ <code>string</code>
Returns CSS declaration for the `opacity` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { opacity } from '@beatgig/synth-css'

opacity({
  style: {
    opacity: {
      form_button: 1,
      'form_button:disabled': 0.5,
    },
  },
}, 'form_button')
// => opacity: 1;

opacity({
  style: {
    opacity: {
      form_button: 1,
      'form_button:disabled': 0.5,
    },
  },
}, 'form_button:disabled')
// => opacity: 0.5;
```
<a name="outline"></a>

## outline ⇒ <code>string</code>
Returns CSS declaration for the `outline` property using `box-shadow`.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { outline } from '@beatgig/synth-css'

outline({
  color: {
    outline: {
      modalInput: '#333',
      'modalInput:focus': '#222',
    },
  },
  size: {
    outline: {
      modalInput: '1px',
      'modalInput:focus': '3px'
    }
  }
}, 'modalInput')
// => box-shadow: 0 0 0 1px #333;

outline({
  color: {
    outline: {
      modalInput: '#333',
      'modalInput:focus': '#222',
    },
  },
  size: {
    outline: {
      modalInput: '1px',
      'modalInput:focus': '3px'
    }
  }
}, 'modalInput:focus')
// => box-shadow: 0 0 0 3px #222;
```
<a name="padding"></a>

## padding ⇒ <code>string</code>
Returns CSS declaration for the `padding` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { padding } from '@beatgig/synth-css'

padding({
  space: {
    padding: {
      'primaryButton': '10px 15px',
      'primaryButton:hover': '15%'
    },
  },
}, 'primaryButton')
// => padding: 10px 15px;

padding({
  space: {
    padding: {
      'primaryButton': '10px 15px',
      'primaryButton:hover': '15%'
    },
  },
}, 'primaryButton:hover')
// => padding: 15%;
```
<a name="right"></a>

## right ⇒ <code>string</code>
Returns CSS declaration for the `right` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
right({
  position: {
    right: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px'
    },
  },
}, 'card_close_button')
// => right: 15px;

right({
  position: {
    right: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px'
    },
  },
}, 'card_close_button:disabled')
// => right: 25px;
```
<a name="textDecoration"></a>

## textDecoration ⇒ <code>string</code>
Returns CSS declaration for the `text-decoration` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { textDecoration } from '@beatgig/synth-css'

textDecoration({
  typography: {
    decoration: {
      menu_link: 'none',
      'menu_link:hover': 'underline',
    },
  },
}, 'menu_link')
// => text-decoration: none;

textDecoration({
  typography: {
    decoration: {
      menu_link: 'none',
      'menu_link:hover': 'underline',
    },
  },
}, 'menu_link:hover')
// => text-decoration: underline;
```
<a name="textTransform"></a>

## textTransform ⇒ <code>string</code>
Returns CSS declaration for the `text-transform` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { textTransform } from '@beatgig/synth-css'

textTransform({
  typography: {
    transform: {
      menuLink: 'lowercase',
      'menuLink:hover': 'uppercase',
    },
  },
}, 'menuLink')
// => text-transform: lowercase;

textTransform({
  typography: {
    transform: {
      menuLink: 'lowercase',
      'menuLink:hover': 'uppercase',
    },
  },
}, 'menuLink:hover')
// => text-transform: uppercase;
```
<a name="top"></a>

## top ⇒ <code>string</code>
Returns CSS declaration for the `top` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { top } from '@beatgig/synth-css'

top({
  position: {
    top: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button')
// => top: 15px;

top({
  position: {
    top: {
      card_close_button: '15px',
      'card_close_button:disabled': '25px',
    },
  },
}, 'card_close_button:disabled')
// => top: 25px;
```
<a name="width"></a>

## width ⇒ <code>string</code>
Returns CSS declaration for the `width` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { width } from '@beatgig/synth-css'

width({
  size: {
    width: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton')
// => width: 120px;

width({
  size: {
    width: {
      primaryButton: '120px',
      'primaryButton:hover': '100%',
    },
  },
}, 'primaryButton:hover')
// => width: 100%;
```
<a name="withTokens"></a>

## withTokens ⇒ [<code>CSSBindings</code>](#CSSBindings)
Returns an object containing all CSS helper functions with the given
`tokens` already passed as the first argument.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 

**Example**  
```js
import { withTokens } from '@beatgig/synth-css'

const cssHelpers = withTokens({
  color: {
    background: {
      button: 'red',
    },
  },
})

cssHelpers.backgroundColor('button')
// => background-color: 'red';
```
<a name="zIndex"></a>

## zIndex ⇒ <code>string</code>
Returns CSS declaration for the `z-index` property.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| tokens | <code>object</code> | 
| name | <code>string</code> | 

**Example**  
```js
import { zIndex } from '@beatgig/synth-css'

zIndex({
  position: {
    index: {
      card_close_button: 1,
      'card_close_button:hover': 5
    },
  },
}, 'card_close_button')
// => z-index: 1;

zIndex({
  position: {
    index: {
      card_close_button: 1,
      'card_close_button:hover': 5
    },
  },
}, 'card_close_button:hover')
// => z-index: 5;
```
<a name="CSSBindings"></a>

## CSSBindings : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| backgroundColor | <code>function</code> | 
| border | <code>function</code> | 
| borderRadius | <code>function</code> | 
| bottom | <code>function</code> | 
| boxShadow | <code>function</code> | 
| color | <code>function</code> | 
| fontFamily | <code>function</code> | 
| fontSize | <code>function</code> | 
| fontWeight | <code>function</code> | 
| height | <code>function</code> | 
| left | <code>function</code> | 
| letterSpacing | <code>function</code> | 
| lineHeight | <code>function</code> | 
| margin | <code>function</code> | 
| maxHeight | <code>function</code> | 
| maxWidth | <code>function</code> | 
| minHeight | <code>function</code> | 
| minWidth | <code>function</code> | 
| opacity | <code>function</code> | 
| outline | <code>function</code> | 
| padding | <code>function</code> | 
| right | <code>function</code> | 
| textDecoration | <code>function</code> | 
| textTransform | <code>function</code> | 
| top | <code>function</code> | 
| width | <code>function</code> | 
| zIndex | <code>function</code> | 


