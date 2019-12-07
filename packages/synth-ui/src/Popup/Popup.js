import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { backgroundColor, border } from '@beatgig/synth-styled-components'
import { createPortal } from 'react-dom'
import { withSynth } from '@beatgig/synth-react'

import { Card } from '../Card'

import { getRect, setPosition, setSize } from './utils'

import {
  POPUP_POSITION_BOTTOM,
  POPUP_POSITION_LEFT,
  POPUP_POSITIONS_X,
  POPUP_POSITIONS_Y,
} from './constants'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').CardComponent, import('@beatgig/synth-ui').PopupComponentProps>}
 */
const StyledPopup = styled(Card)`
  ${backgroundColor('popup')}
  ${border('popup')}
  ${setSize()}
  ${setPosition()}
  left: 0;
  padding: 0;
  position: absolute;
  top: 0;
  will-change: transform;
  z-index: 1000;
`

/**
 * @param {HTMLElement} container
 * @param {boolean} renderInPlace
 * @param {import('react').ReactElement} popup
 * @returns {import('react').ReactElement | import('react').ReactPortal}
 */
const renderPopup = (container, renderInPlace, popup) =>
  renderInPlace ? popup : createPortal(popup, container)

const Popup = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').PopupProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      container = document.getElementById('root'),
      popupRect = getRect(),
      renderInPlace = false,
      synth,
      triggerRect = getRect(),
      useTriggerHeight = false,
      useTriggerWidth = false,
      x = POPUP_POSITION_LEFT,
      xOffset = 0,
      y = POPUP_POSITION_BOTTOM,
      yOffset = 0,
      ...props
    },
    ref,
  ) =>
    renderPopup(
      container,
      renderInPlace,
      <StyledPopup
        {...props}
        className={className}
        container={container}
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
    ),
)

Popup.propTypes = {
  /**
   * The element in which you want to render the popup; the default
   * is `document.getElementById('root')`.
   */
  container: PropTypes.instanceOf(HTMLElement),
  /**
   * The elements you want to display within the popup.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The popup element's DOMRect object.
   */
  popupRect: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    bottom: PropTypes.number,
  }),
  /**
   * A boolean flag to determine if the popup should be rendered next to it's
   * trigger as opposed to rendering it on the specified `container`.
   */
  renderInPlace: PropTypes.bool,
  /**
   * The trigger element's DOMRect object.
   */
  triggerRect: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    bottom: PropTypes.number,
  }),
  /**
   * If true, the popup's height will match it's target's height.
   */
  useTriggerHeight: PropTypes.bool,
  /**
   * If true, the popup's width will match it's target's width.
   */
  useTriggerWidth: PropTypes.bool,
  /**
   * X position of the popup.
   */
  x: PropTypes.oneOf(POPUP_POSITIONS_X),
  /**
   * Offset for the popup's x position.
   */
  xOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Y position of the popup.
   */
  y: PropTypes.oneOf(POPUP_POSITIONS_Y),
  /**
   * Offset for the popup's y position.
   */
  yOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Popup.defaultProps = {
  children: null,
  className: '',
  container: document.getElementById('root'),
  popupRect: getRect(),
  renderInPlace: false,
  triggerRect: getRect(),
  useTriggerHeight: false,
  useTriggerWidth: false,
  // eslint-disable-next-line prettier/prettier
  x: /** @type {import('@beatgig/synth-ui').PopupXPosition} */ (POPUP_POSITION_LEFT),
  xOffset: 0,
  // eslint-disable-next-line prettier/prettier
  y: /** @type {import('@beatgig/synth-ui').PopupYPosition} */ (POPUP_POSITION_BOTTOM),
  yOffset: 0,
}

Popup.displayName = 'Popup'

export default withSynth(Popup)
