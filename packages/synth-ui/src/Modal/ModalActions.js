import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { setActionsBorder, setBottomContentMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').ModalActionsProps>}
 */
const StyledModalActions = styled.div`
  ${borderRadius()}
  ${padding('card')}
  ${setActionsBorder()}
  ${setBottomContentMargin()}
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ModalActions = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ModalActionsProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', ...props }, ref) => (
    <StyledModalActions {...props} className={className} ref={ref}>
      {children}
    </StyledModalActions>
  ),
)

ModalActions.propTypes = {
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

ModalActions.defaultProps = {
  children: null,
  className: '',
}

ModalActions.displayName = 'ModalActions'

export default withSynth(ModalActions)
