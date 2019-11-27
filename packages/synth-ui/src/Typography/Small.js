import { fontSize } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import Text from './Text'

const StyledSmall = styled(Text)`
  ${fontSize('small')}
  line-height: 1.25;
`

const Small = withSynth(StyledSmall)

Small.propTypes = {
  ...Small.propTypes,
  ...Text.propTypes,
}

export default Small
