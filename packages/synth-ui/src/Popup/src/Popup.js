import { backgroundColor, border } from '@beatgig/synth-styled-components'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { Card } from '../../Card'

const PopupContainer = styled(Card)`
  ${backgroundColor('popup')}
  ${border('popup')}
`

/**
 * @typedef {object} PopupProps
 * @property {string} [props.className]
 * @property {*} [props.children]
 */

const Popup = forwardRef(
  /**
   * @param {PopupProps & object} props
   * @param {import('react').RefObject} ref
   * @param {*} ref.current
   */
  (props, ref) => (
    <PopupContainer {...props} className={props.className} ref={ref}>
      {props.children}
    </PopupContainer>
  ),
)

export default Popup
