import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Popup, usePopup } from '../../Popup'

const PopupMenu = withSynth(styled(Popup)`
  display: flex;
  flex-direction: column;
  padding: ${({ synth }) => synth.getUnit('@spacing.1')} 0;
`)

/**
 * Generates everything you need to render and control a popup menu component.
 *
 * @param {object} props
 * @returns {object}
 */
const usePopupMenu = (props) => {
  const { Popup: ControlledPopup, ...popup } = usePopup(props)

  return {
    ...popup,
    Popup: ({ className, ...props }) => (
      <ControlledPopup {...props} as={PopupMenu} className={className} />
    ),
  }
}

export default usePopupMenu
