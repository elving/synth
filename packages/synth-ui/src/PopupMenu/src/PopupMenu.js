import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Popup } from '../../Popup'

const PopupMenu = withSynth(styled(Popup)`
  display: flex;
  flex-direction: column;
  padding: ${({ synth }) => synth.getUnit('@spacing.1')} 0;
`)

export default PopupMenu
