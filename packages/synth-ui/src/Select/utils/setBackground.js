import React from 'react'
import { renderToString } from 'react-dom/server'

import { ChevronDownIcon } from '../../Icons'

/**
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBackground = () => ({ synth }) => {
  const iconSVG = btoa(
    renderToString(
      <ChevronDownIcon fill={synth.getValue('color:text:base')} />,
    ),
  )

  const padding = synth.getValue('space:padding:control')

  return `
    background-image: url('data:image/svg+xml;base64,${iconSVG}');
    background-size: auto ${synth.getUnit('@icons.5')};
    background-position: calc(100% - ${padding[1]}px) center;
  `
}

export default setBackground
