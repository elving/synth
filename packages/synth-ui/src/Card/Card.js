import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { setBaseStyles, withForwardedRef } from '../utils'

const StyledCard = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('card')}
  ${borderRadius()}
  ${padding('card')}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 2px 2px 4px rgba(0, 0, 0, 0.085);
`

const SynthCard = withSynth(StyledCard)

const Card = ({ children = null, className = '', ref, ...props }) => (
  <SynthCard {...props} className={className} ref={ref}>
    {children}
  </SynthCard>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default withForwardedRef(Card)
