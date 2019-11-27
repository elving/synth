import PropTypes from 'prop-types'
import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles, withForwardedRef } from '../utils'

const StyledGrid = styled.div`
  ${setBaseStyles()}
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
`

const SynthGrid = withSynth(StyledGrid)

const Grid = ({ children, className, columns, ref, ...props }) => (
  <SynthGrid {...props} className={className} ref={ref}>
    {Children.map(children, (child) =>
      cloneElement(child, { columnSize: columns }),
    )}
  </SynthGrid>
)

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.number,
}

export default withForwardedRef(Grid)
