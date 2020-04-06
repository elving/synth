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

  const [, padding] = synth.getUnit('space:padding:control').split(' ')

  return `
    background-image: url('data:image/svg+xml;base64,${iconSVG}');
    background-size: auto ${synth.getUnit('size:@icons.5')};
    background-position: calc(100% - ${padding} / 2) center;
  `
}

export default setBackground
