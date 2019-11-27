import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  fontSize,
  fontWeight,
  lineHeight,
  margin,
} from '@beatgig/synth-styled-components'

import Text from './Text'

import { setHeadingFontSize } from './utils'

const StyledHeading = styled(Text).attrs(({ level = 'h1' }) => ({
  as: level,
}))`
  ${fontWeight('heading')}
  ${lineHeight('heading')}
  ${margin('heading')}
  ${setHeadingFontSize()}
`

const Heading = withSynth(StyledHeading)

Heading.propTypes = {
  ...Heading.propTypes,
  ...Text.propTypes,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default Heading
