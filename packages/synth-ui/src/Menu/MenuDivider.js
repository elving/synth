import React, { Fragment } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Spacer } from '../Spacer'

import { setMenuDividerBorder } from './utils'

const HorizontalLine = styled.hr`
  ${setMenuDividerBorder()}
  margin: 0 auto;
`

const MenuDivider = ({ className, ref, ...props }) => (
  <Fragment>
    <HorizontalLine {...props} className={className} ref={ref} />
    <Spacer bottom scale={1} top />
  </Fragment>
)

export default withSynth(MenuDivider)
