import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  maxWidth,
  opacity,
  padding,
  width,
} from '@beatgig/synth-styled-components'

import { Card } from '../Card'
import { Popup } from '../Popup'

import { noop } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').PopupComponent>}
 */
const Container = styled(Popup)`
  ${padding('modalOverlay')}
  background-color: transparent;
  border: 0 none;
  border-radius: 0;
  -webkit-overflow-scrolling: touch;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow-y: scroll;
  top: 0;
  width: 100%;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').ModalComponentProps>}
 */
const Overlay = styled.div`
  ${backgroundColor('modalOverlay')}
  ${opacity('modalOverlay')}
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').CardComponent>}
 */
const ModalContainer = styled(Card)`
  ${maxWidth('modal')}
  ${width('modal')}
  position: relative;
  z-index: 5;
`

const Modal = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ModalProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children,
      className = '',
      close = noop,
      closeOnOverlayClick = false,
      onOverlayClick = noop,
      synth,
      ...props
    },
    ref,
  ) => {
    const handleOverlayClick = () => {
      if (closeOnOverlayClick) {
        close()
      }

      onOverlayClick()
    }

    return (
      <Container
        {...props}
        className={className}
        ref={ref}
        synth={synth}
        x="left"
        xOffset={0}
        y="top"
        yOffset={0}
      >
        <Overlay onClick={handleOverlayClick} synth={synth} />
        <ModalContainer synth={synth}>{children}</ModalContainer>
      </Container>
    )
  },
)

Modal.propTypes = {
  /**
   * The elements you want to display within the modal.
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
   * A boolean flag to determine if the modal should be closed when clicking
   * on it's overlay background.
   */
  closeOnOverlayClick: PropTypes.bool,
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * overlay background.
   */
  onOverlayClick: PropTypes.func,
}

Modal.defaultProps = {
  children: null,
  className: '',
  close: noop,
  closeOnOverlayClick: false,
  onOverlayClick: noop,
}

export default withSynth(Modal)
