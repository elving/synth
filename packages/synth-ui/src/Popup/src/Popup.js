import React, { forwardRef } from 'react'

import { Card } from '../../Card'

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
    <Card {...props} className={props.className} ref={ref}>
      {props.children}
    </Card>
  ),
)

export default Popup
