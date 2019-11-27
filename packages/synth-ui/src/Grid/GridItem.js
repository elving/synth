import React from 'react'
import styled from 'styled-components'
import { node, number, string } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles, styleProp, withForwardedRef } from '../utils'
import { getGridItemSpacing, setGridItemWidth } from './utils'

const StyledGridItem = styled.div`
  ${setBaseStyles()}
  ${setGridItemWidth()}
  margin-right: ${getGridItemSpacing()};
  margin-bottom: ${getGridItemSpacing()};
  display: flex;
  flex-shrink: 0;

  :nth-child(${styleProp('columnSize')}n) {
    margin-right: 0;
  }
`

const SynthGridItem = withSynth(StyledGridItem)

const GridItem = ({ children, className = '', ref, ...props }) => (
  <SynthGridItem {...props} className={className} ref={ref}>
    {children}
  </SynthGridItem>
)

GridItem.propTypes = {
  children: node,
  className: string,
  columnSize: number,
}

export default withForwardedRef(GridItem)
