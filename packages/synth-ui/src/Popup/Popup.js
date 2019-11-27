import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { backgroundColor, border } from '@beatgig/synth-styled-components'
import { createPortal } from 'react-dom'
import { withSynth } from '@beatgig/synth-react'

import { Card } from '../Card'

import { setPosition, setSize } from './utils'

import {
  POPUP_POSITION_BOTTOM,
  POPUP_POSITION_LEFT,
  POPUP_POSITIONS_X,
  POPUP_POSITIONS_Y,
} from './constants'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthPopupProps>>}
 */
const StyledPopup = styled(Card)`
  ${backgroundColor('popup')}
  ${border('popup')}
  ${setSize()}
  ${setPosition()}
  position: fixed;
  z-index: 1000;
`

const renderPopup = (container, renderInPlace, popup) =>
  renderInPlace ? popup : createPortal(popup, container)

const Popup = ({
  children = null,
  className = '',
  container = document.getElementById('root'),
  popupRect,
  ref,
  renderInPlace = false,
  synth,
  triggerRect,
  useTriggerHeight = false,
  useTriggerWidth = false,
  x = POPUP_POSITION_LEFT,
  xOffset = 0,
  y = POPUP_POSITION_BOTTOM,
  yOffset = 0,
  ...props
}) =>
  renderPopup(
    container,
    renderInPlace,
    <StyledPopup
      {...props}
      className={className}
      popupRect={popupRect}
      ref={ref}
      synth={synth}
      triggerRect={triggerRect}
      useTriggerHeight={useTriggerHeight}
      useTriggerWidth={useTriggerWidth}
      x={x}
      xOffset={xOffset}
      y={y}
      yOffset={yOffset}
    >
      {children}
    </StyledPopup>,
  )

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.instanceOf(HTMLDivElement),
  popupRect: PropTypes.instanceOf(DOMRect),
  renderInPlace: PropTypes.bool,
  triggerRect: PropTypes.object,
  useTriggerHeight: PropTypes.bool,
  useTriggerWidth: PropTypes.bool,
  x: PropTypes.oneOf(POPUP_POSITIONS_X),
  xOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOf(POPUP_POSITIONS_Y),
  yOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default withSynth(Popup)
