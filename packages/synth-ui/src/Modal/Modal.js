import PropTypes from 'prop-types'
import React from 'react'
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
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthPopupProps>>}
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
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
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
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthCardProps>>}
 */
const ModalContainer = styled(Card)`
  ${maxWidth('modal')}
  ${width('modal')}
  position: relative;
  z-index: 5;
`

const Modal = ({
  children,
  className = '',
  close = noop,
  closeOnOverlayClick = false,
  onOverlayClick = noop,
  ref,
  synth,
  ...props
}) => {
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
      x={0}
      xOffset={0}
      y={0}
      yOffset={0}
    >
      <Overlay onClick={handleOverlayClick} synth={synth} />
      <ModalContainer synth={synth}>{children}</ModalContainer>
    </Container>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.func,
  closeOnOverlayClick: PropTypes.bool,
  onOverlayClick: PropTypes.func,
}

export default withSynth(Modal)
