import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Heading } from '../Typography'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').HeadingComponent, import('@beatgig/synth-ui').ModalTitleProps>}
 */
const StyledModalTitle = styled(Heading)`
  margin-bottom: 0;
`

const ModalTitle = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ModalTitleProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', level = 'h4', ...props }, ref) => (
    <StyledModalTitle {...props} className={className} level={level} ref={ref}>
      {children}
    </StyledModalTitle>
  ),
)

ModalTitle.propTypes = {
  ...Heading.propTypes,
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

ModalTitle.defaultProps = {
  ...Heading.defaultProps,
  children: null,
  className: '',
  // eslint-disable-next-line prettier/prettier
  level: /** @type {import('@beatgig/synth-ui').HeadingLevel} */ ('h4'),
}

ModalTitle.displayName = 'ModalTitle'

export default withSynth(ModalTitle)
