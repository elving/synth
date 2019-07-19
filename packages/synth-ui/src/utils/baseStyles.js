import { css } from 'styled-components'

import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@beatgig/synth-styled-components'

const baseStyles = css`
  ${color()}
  ${fontFamily()}
  ${fontSize()}
  ${fontWeight()}
  ${lineHeight()}
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
`

export { baseStyles }
