import React, { Fragment } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Spacer } from '../Spacer'

import { setMenuDividerBorder } from './utils'

const HorizontalLine = styled.hr`
  ${setMenuDividerBorder()}
  margin: 0 auto;
  width: 100%;
`

const MenuDivider = ({ className, ref, ...props }) => (
  <Fragment>
    <Spacer top />
    <HorizontalLine {...props} className={className} ref={ref} />
    <Spacer bottom />
  </Fragment>
)

export default withSynth(MenuDivider)
