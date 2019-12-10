import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').CardProps>}
 */
const StyledCard = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('card')}
  ${borderRadius()}
  ${padding('card')}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 2px 2px 4px rgba(0, 0, 0, 0.085);
`

const Card = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').CardProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledCard {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledCard>
  ),
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Card.propTypes = {
  /**
   * The elements you want to display within the card.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Card.defaultProps = {
  children: null,
  className: '',
}

Card.displayName = 'Card'

export default withSynth(Card)
