/**
 * @typedef {number}
 * @constant
 * @default
 */
export const BASE_FONT_SIZE = 16

export const COLOR_BINDINGS_MAP = {
  'background-color': 'color:background',
  'border-color': 'color:border',
  color: 'color:text',
}

export const LENGTH_BINDINGS_MAP = {
  'border-radius': 'size:radius',
  'border-width': 'size:border',
  'font-size': 'size:text',
  'letter-spacing': 'typography:spacing',
  'margin-bottom': 'space:margin',
  'margin-left': 'space:margin',
  'margin-right': 'space:margin',
  'margin-top': 'space:margin',
  'max-height': 'size:maxHeight',
  'max-width': 'size:maxWidth',
  'min-height': 'size:minHeight',
  'min-width': 'size:minWidth',
  'padding-bottom': 'space:padding',
  'padding-left': 'space:padding',
  'padding-right': 'space:padding',
  'padding-top': 'space:padding',
  bottom: 'position:bottom',
  height: 'size:height',
  left: 'position:left',
  margin: 'space:margin',
  padding: 'space:padding',
  right: 'position:right',
  top: 'position:top',
  width: 'size:width',
}

export const BINDINGS_MAP = {
  'animation-delay': 'motion:delay',
  'animation-duration': 'motion:duration',
  'animation-timing-function': 'motion:effect',
  'border-style': 'style:border',
  'font-family': 'typography:font',
  'font-style': 'style:text',
  'font-weight': 'typography:weight',
  'line-height': 'typography:lineHeight',
  'text-align': 'position:text',
  'text-decoration': 'typography:decoration',
  'text-transform': 'typography:transform',
  'transition-delay': 'motion:delay',
  'transition-duration': 'motion:duration',
  'transition-timing-function': 'motion:effect',
  'z-index': 'position:index',
  opacity: 'style:opacity',
}

export const ALL_BINDINGS = {
  ...COLOR_BINDINGS_MAP,
  ...LENGTH_BINDINGS_MAP,
  ...BINDINGS_MAP,
}
