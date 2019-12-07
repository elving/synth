import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { setTopContentMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').ModalContentProps>}
 */
const StyledModalContent = styled.div`
  ${padding('card')}
  ${borderRadius()}
  ${setTopContentMargin()}
`

const ModalContent = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ModalContentProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', ...props }, ref) => (
    <StyledModalContent {...props} className={className} ref={ref}>
      {children}
    </StyledModalContent>
  ),
)

ModalContent.propTypes = {
  /**
   * The elements you want to display within this component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

ModalContent.defaultProps = {
  children: null,
  className: '',
}

ModalContent.displayName = 'ModalContent'

export default withSynth(ModalContent)
