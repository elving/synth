import PropTypes from 'prop-types'
import React, { Children, cloneElement, forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').GridProps>}
 */
const StyledGrid = styled.div`
  ${setBaseStyles()}
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
`

const Grid = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').GridProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', columns = 1, synth, ...props }, ref) => (
    <StyledGrid {...props} className={className} synth={synth} ref={ref}>
      {Children.map(
        children,
        /**
         * @param {import('react').ReactElement<{ columnSize: number }>} child
         */
        (child) => cloneElement(child, { columnSize: columns }),
      )}
    </StyledGrid>
  ),
)

Grid.propTypes = {
  /**
   * The elements you want to display within the grid.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The number of columns you want to display
   */
  columns: PropTypes.number,
}

Grid.defaultProps = {
  children: null,
  className: '',
  columns: 1,
}

Grid.displayName = 'Grid'

export default withSynth(Grid)
