import { backgroundColor } from '@beatgig/synth-styled-components'
import { createGlobalStyle } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

const BaseStyles = createGlobalStyle`
  body, html {
    ${setBaseStyles()}
    ${backgroundColor('@primary')}
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *,
  *:after,
  *:before {
    color: inherit;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    box-sizing: inherit;
  }
`

export default withSynth(BaseStyles)
