import { bindings } from '@beatgig/synth-css'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import withSynth from '../withSynth'

const setProperties = () => ({ synth, ...props }) => {
  const cssProperties = Object.keys(props).filter(
    (propName) => bindings[propName] !== undefined,
  )

  return cssProperties.reduce(
    (declarations, propName) =>
      `
      ${declarations}
      ${
        bindings[propName]
          ? bindings[propName](synth.tokens, props[propName])
          : ''
      }
    `,
    '',
  )
}

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-react').BoxProps>}
 */
const StyledBox = styled.div`
  ${setProperties()}
`

const Box = forwardRef(
  /**
   * @param {import('@beatgig/synth-react').BoxProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledBox {...props} className={className} ref={ref} synth={synth}>
      {children}
    </StyledBox>
  ),
)

Box.propTypes = {
  /**
   * The elements you want to display within this box component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * CSS Properties supported by Synth
   */
  ...Object.keys(bindings).reduce(
    (cssProperties, cssProperty) => ({
      ...cssProperties,
      [cssProperty]: PropTypes.string,
    }),
    {},
  ),
}

Box.defaultProps = {
  children: null,
  className: '',
}

Box.displayName = 'Box'

export default withSynth(Box)
