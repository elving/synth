# `@beatgig/synth-core`

The Synth core library provides functions to work with token declarations.

## Installation

```bash
yarn add @beatgig/synth-core
```

## Constants

<dl>
<dt><a href="#TOKEN_CATEGORY_COLOR">TOKEN_CATEGORY_COLOR</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORY_POSITION">TOKEN_CATEGORY_POSITION</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORY_SIZE">TOKEN_CATEGORY_SIZE</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORY_SPACE">TOKEN_CATEGORY_SPACE</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORY_STYLE">TOKEN_CATEGORY_STYLE</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORY_TYPOGRAPHY">TOKEN_CATEGORY_TYPOGRAPHY</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_CATEGORIES">TOKEN_CATEGORIES</a> : <code>Array.&lt;String&gt;</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_BACKGROUND">TOKEN_PROPERTY_BACKGROUND</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_BORDER">TOKEN_PROPERTY_BORDER</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_BOTTOM">TOKEN_PROPERTY_BOTTOM</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_COLOR">TOKEN_PROPERTY_COLOR</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_FONT_FAMILY">TOKEN_PROPERTY_FONT_FAMILY</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_FONT_SIZE">TOKEN_PROPERTY_FONT_SIZE</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_HEIGHT">TOKEN_PROPERTY_HEIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_INDEX">TOKEN_PROPERTY_INDEX</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_LEFT">TOKEN_PROPERTY_LEFT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_LINE_HEIGHT">TOKEN_PROPERTY_LINE_HEIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_MARGIN">TOKEN_PROPERTY_MARGIN</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_MAX_HEIGHT">TOKEN_PROPERTY_MAX_HEIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_MAX_WIDTH">TOKEN_PROPERTY_MAX_WIDTH</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_MIN_HEIGHT">TOKEN_PROPERTY_MIN_HEIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_MIN_WIDTH">TOKEN_PROPERTY_MIN_WIDTH</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_OPACITY">TOKEN_PROPERTY_OPACITY</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_OUTLINE">TOKEN_PROPERTY_OUTLINE</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_PADDING">TOKEN_PROPERTY_PADDING</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_RADIUS">TOKEN_PROPERTY_RADIUS</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_RIGHT">TOKEN_PROPERTY_RIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_SHADOW">TOKEN_PROPERTY_SHADOW</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_SPACING">TOKEN_PROPERTY_SPACING</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_TEXT_DECORATION">TOKEN_PROPERTY_TEXT_DECORATION</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_TOP">TOKEN_PROPERTY_TOP</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_TEXT_TRANSFORM">TOKEN_PROPERTY_TEXT_TRANSFORM</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_WEIGHT">TOKEN_PROPERTY_WEIGHT</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_WIDTH">TOKEN_PROPERTY_WIDTH</a> : <code>string</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTIES">TOKEN_PROPERTIES</a> : <code>Array.&lt;String&gt;</code></dt>
<dd></dd>
<dt><a href="#TOKEN_PROPERTY_CSS_MAP">TOKEN_PROPERTY_CSS_MAP</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCSSDeclaration">getCSSDeclaration</a> ⇒ <code>string</code></dt>
<dd><p>Returns a CSS declaration mapping to the given token.</p>
</dd>
<dt><a href="#getCSSProperty">getCSSProperty</a> ⇒ <code>string</code></dt>
<dd><p>Returns a CSS property mapping to the given token.</p>
</dd>
<dt><a href="#getTokenParts">getTokenParts</a> ⇒ <code><a href="#TokenParts">TokenParts</a></code></dt>
<dd><p>Returns an object containing all the parts of a Synth token.</p>
</dd>
<dt><a href="#getTokenValue">getTokenValue</a> ⇒ <code>string</code></dt>
<dd><p>Returns a the value of the given token declaration.</p>
</dd>
<dt><a href="#isTokenDeclaration">isTokenDeclaration</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates that the given value is a valid Synth token declaration.</p>
</dd>
<dt><a href="#isTokenName">isTokenName</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates that the given value is a valid Synth token name.</p>
</dd>
<dt><a href="#isTokenType">isTokenType</a> ⇒ <code>boolean</code></dt>
<dd><p>Validates that the given value is a valid Synth token type.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TokenParts">TokenParts</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="TOKEN_CATEGORY_COLOR"></a>

## TOKEN\_CATEGORY\_COLOR : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORY_POSITION"></a>

## TOKEN\_CATEGORY\_POSITION : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORY_SIZE"></a>

## TOKEN\_CATEGORY\_SIZE : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORY_SPACE"></a>

## TOKEN\_CATEGORY\_SPACE : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORY_STYLE"></a>

## TOKEN\_CATEGORY\_STYLE : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORY_TYPOGRAPHY"></a>

## TOKEN\_CATEGORY\_TYPOGRAPHY : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_CATEGORIES"></a>

## TOKEN\_CATEGORIES : <code>Array.&lt;String&gt;</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_BACKGROUND"></a>

## TOKEN\_PROPERTY\_BACKGROUND : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_BORDER"></a>

## TOKEN\_PROPERTY\_BORDER : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_BOTTOM"></a>

## TOKEN\_PROPERTY\_BOTTOM : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_COLOR"></a>

## TOKEN\_PROPERTY\_COLOR : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_FONT_FAMILY"></a>

## TOKEN\_PROPERTY\_FONT\_FAMILY : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_FONT_SIZE"></a>

## TOKEN\_PROPERTY\_FONT\_SIZE : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_HEIGHT"></a>

## TOKEN\_PROPERTY\_HEIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_INDEX"></a>

## TOKEN\_PROPERTY\_INDEX : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_LEFT"></a>

## TOKEN\_PROPERTY\_LEFT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_LINE_HEIGHT"></a>

## TOKEN\_PROPERTY\_LINE\_HEIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_MARGIN"></a>

## TOKEN\_PROPERTY\_MARGIN : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_MAX_HEIGHT"></a>

## TOKEN\_PROPERTY\_MAX\_HEIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_MAX_WIDTH"></a>

## TOKEN\_PROPERTY\_MAX\_WIDTH : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_MIN_HEIGHT"></a>

## TOKEN\_PROPERTY\_MIN\_HEIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_MIN_WIDTH"></a>

## TOKEN\_PROPERTY\_MIN\_WIDTH : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_OPACITY"></a>

## TOKEN\_PROPERTY\_OPACITY : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_OUTLINE"></a>

## TOKEN\_PROPERTY\_OUTLINE : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_PADDING"></a>

## TOKEN\_PROPERTY\_PADDING : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_RADIUS"></a>

## TOKEN\_PROPERTY\_RADIUS : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_RIGHT"></a>

## TOKEN\_PROPERTY\_RIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_SHADOW"></a>

## TOKEN\_PROPERTY\_SHADOW : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_SPACING"></a>

## TOKEN\_PROPERTY\_SPACING : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_TEXT_DECORATION"></a>

## TOKEN\_PROPERTY\_TEXT\_DECORATION : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_TOP"></a>

## TOKEN\_PROPERTY\_TOP : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_TEXT_TRANSFORM"></a>

## TOKEN\_PROPERTY\_TEXT\_TRANSFORM : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_WEIGHT"></a>

## TOKEN\_PROPERTY\_WEIGHT : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_WIDTH"></a>

## TOKEN\_PROPERTY\_WIDTH : <code>string</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTIES"></a>

## TOKEN\_PROPERTIES : <code>Array.&lt;String&gt;</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="TOKEN_PROPERTY_CSS_MAP"></a>

## TOKEN\_PROPERTY\_CSS\_MAP : <code>object</code>
**Kind**: global constant  
**Since**: 1.0.0  
<a name="getCSSDeclaration"></a>

## getCSSDeclaration ⇒ <code>string</code>
Returns a CSS declaration mapping to the given token.

**Kind**: global constant  
**Since**: 1.0.0  

| Param         | Type                               | Description                                                         |
| --------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| tokens       | <code>object</code> | A valid Synth token declaration object. |
| tokenName | <code>string</code> | A valid Synth token name.                             |

**Example**  
```js
getCSSDeclaration({
  color: {
    background: {
      button: 'red',
    },
  },
}, 'color:background:button')
// => "background-color: red;"
```
<a name="getCSSProperty"></a>

## getCSSProperty ⇒ <code>string</code>
Returns a CSS property mapping to the given token.

**Kind**: global constant  
**Since**: 1.0.0  

| Param     | Type                | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| tokenType | <code>string</code> | A valid Synth token type, e.g. `color:text`. |

**Example**  
```js
getCSSProperty('color:background')
// => "background-color"

getCSSProperty('typography:font')
// => "font-family"
```
<a name="getTokenParts"></a>

## getTokenParts ⇒ [<code>TokenParts</code>](#TokenParts)
Returns an object containing all the parts of a Synth token.

**Kind**: global constant  
**Since**: 1.0.0  

| Param     | Type                | Description                                         |
| --------- | ------------------- | --------------------------------------------------- |
| tokenName | <code>string</code> | A valid Synth token name, e.g. `color:text:button`. |

**Example**  
```js
getTokenParts('color:background:button')
// => { category: 'color', name: 'button', property: 'background' }

getTokenParts('color:background:button:hover')
// => { category: 'color', name: 'button:hover', property: 'background' }
```
<a name="getTokenValue"></a>

## getTokenValue ⇒ <code>string</code>
Returns a the value of the given token declaration.

**Kind**: global constant  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| tokens | <code>object</code> | A valid Synth token declaration object. |
| tokenName | <code>string</code> | A valid Synth token name. |

**Example**  
```js
getTokenValue({
  color: {
    background: {
      button: 'red',
    },
  },
}, 'color:background:button')
// => "red"
```
<a name="isTokenDeclaration"></a>

## isTokenDeclaration ⇒ <code>boolean</code>
Validates that the given value is a valid Synth token declaration.

**Kind**: global constant  
**Since**: 1.0.0  

| Param  | Type                |
| ------ | ------------------- |
| tokens | <code>object</code> |

**Example**  
```js
isTokenDeclaration({
  color: {
    background: {
      button: 'red',
    },
  },
})
// => true

isTokenDeclaration('size:maxWidth')
// => false

isTokenDeclaration({})
// => false
```
<a name="isTokenName"></a>

## isTokenName ⇒ <code>boolean</code>
Validates that the given value is a valid Synth token name.

**Kind**: global constant  
**Since**: 1.0.0  

| Param     | Type                |
| --------- | ------------------- |
| tokenName | <code>string</code> |

**Example**  
```js
isTokenName('color:text:button')
// => true

isTokenName('@lightGrey')
// => true

isTokenName('hello:world:button')
// => false

isTokenName('hello')
// => false
```
<a name="isTokenType"></a>

## isTokenType ⇒ <code>boolean</code>
Validates that the given value is a valid Synth token type.

**Kind**: global constant  
**Since**: 1.0.0  

| Param     | Type                |
| --------- | ------------------- |
| tokenType | <code>string</code> |

**Example**  
```js
isTokenType('color:text')
// => true

isTokenType('size:maxWidth')
// => true

isTokenType('hello:world')
// => false

isTokenType('hello')
// => false
```
<a name="TokenParts"></a>

## TokenParts : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name     | Type                |
| -------- | ------------------- |
| category | <code>string</code> |
| name     | <code>string</code> |
| property | <code>string</code> |

