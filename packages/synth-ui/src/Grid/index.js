import styled from 'styled-components'
import { number, string, oneOfType } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import { baseStyles } from '../utils'
import { getGridItemGutter, setGridItemWidth } from './utils'

export const GridItem = styled(
  withSynth(styled.div`
    ${baseStyles}
    margin-right: ${getGridItemGutter};
    margin-bottom: ${getGridItemGutter};
    display: flex;
    flex-shrink: 0;
  `),
)``

const Grid = withSynth(styled.div`
  ${baseStyles}
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;

  ${GridItem} {
    ${setGridItemWidth}

    :nth-child(${({ columns }) => columns}n) {
      margin-right: 0;
    }
  }
`)

export default Grid
