import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Flex } from '../Flex'

import { setBaseStyles, styleProp } from '../utils'
import { getGridItemSpacing, setGridItemWidth } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').FlexComponent, import('@beatgig/synth-ui').GridItemProps>}
 */
const StyledGridItem = styled(Flex).attrs(() => ({
  shrink: 0,
}))`
  ${setBaseStyles()}
  ${setGridItemWidth()}
  margin-right: ${getGridItemSpacing()};
  margin-bottom: ${getGridItemSpacing()};

  :nth-child(${styleProp('columnSize')}n) {
    margin-right: 0;
  }
`

const GridItem = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').GridItemProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledGridItem {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledGridItem>
  ),
)

GridItem.propTypes = {
  /**
   * The elements you want to display within this component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The size of the grid item in relation to the number of columns it's parent grid is set to
   * display. This prop is generally passed down from the <Grid> component by specifying
   * a `columns` prop on it.
   */
  columnSize: PropTypes.number,
}

GridItem.defaultProps = {
  children: null,
  className: '',
  columnSize: 1,
}

GridItem.displayName = 'GridItem'

export default withSynth(GridItem)
