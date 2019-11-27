import { css } from 'styled-components'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@beatgig/synth-styled-components'

const setBaseStyles = () => css`
  ${color()}
  ${fontFamily()}
  ${fontSize()}
  ${fontWeight()}
  ${lineHeight()}
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
`

export default setBaseStyles
