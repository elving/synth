import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { CloseIcon } from '../Icons'
import { IconButton } from '../IconButton'

import { noop } from '../utils'
import { setCloseButtonMarginLeft, setTopContentMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').ModalHeaderProps>}
 */
const Container = styled.div`
  ${padding('card')}
  ${borderRadius()}
  ${setTopContentMargin()}
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').IconButtonComponent>}
 */
const CloseButton = styled(IconButton)`
  ${setCloseButtonMarginLeft()}
`

const ModalHeader = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ModalHeaderProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      close = noop,
      onCloseClick = noop,
      synth,
      ...props
    },
    ref,
  ) => {
    const handleCloseClick = () => {
      close()
      onCloseClick()
    }

    return (
      <Container {...props} className={className} synth={synth} ref={ref}>
        {children}
        <CloseButton
          icon={<CloseIcon />}
          onClick={handleCloseClick}
          synth={synth}
        />
      </Container>
    )
  },
)

ModalHeader.propTypes = {
  /**
   * The elements you want to display within modal's header.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A function used to close the modal when clicking on it's overlay
   * background. This function will generally be provided by the `usePopup` hook.
   */
  close: PropTypes.func,
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * close button.
   */
  onCloseClick: PropTypes.func,
}

ModalHeader.defaultProps = {
  children: null,
  className: '',
  close: noop,
  onCloseClick: noop,
}

ModalHeader.displayName = 'ModalHeader'

export default withSynth(ModalHeader)
